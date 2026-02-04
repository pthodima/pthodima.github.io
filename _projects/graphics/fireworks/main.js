// @ts-check

// Find the canvas and start!
/** @type {HTMLCanvasElement} */
const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("fireworksCanvas"));
/** @type {CanvasRenderingContext2D} */
const ctx = /** @type {CanvasRenderingContext2D} */ canvas.getContext("2d");


/** @type {Array<{x: number, y: number, age: number, vx: number, vy: number, color: {h: number, s: number, l: number}}>} */
let fireworks = [];
/** @type {number} */
let firework_duration = 300; // milliseconds
/** @type {number} */
let firework_spawn_prob = 0.02;
/** @type {Array<{x: number, y: number, src_x: number, src_y: number, age: number, vx: number, vy: number, color: {h: number, s: number, l: number}, history: Array<[number, number]>}>} */
let particles = [];
/** @type {number} */
let num_particles = 70;
/** @type {number} */
let speed_firework = 0.8; // pixels per millisecond
/** @type {number} */
let speed_particle = 0.3; // pixels per millisecond
/** @type {number} */
let firework_radius = 8;
/** @type {number} */
let dist_eps = 5;
/** @type {number} */
let particle_lifetime = 400; // milliseconds
/** @type {number} */
let gravity = 0.005; // pixels per millisecond squared
let particle_history_length = 40;
/** @type {Array<{x: number, y: number, size: number, blinkSpeed: number, offset: number}>} */
let stars = [];
let num_stars = 100;

// Responsive canvas resize function
function resizeCanvas() {
    // Get the container's width (or window width for full width)
    const container = canvas.parentElement;
    const displayWidth = container ? container.clientWidth : window.innerWidth;
    // Set a max width (like CSS)
    const maxWidth = 800;
    const width = Math.min(displayWidth, maxWidth);
    // Maintain aspect ratio (4:3)
    const aspect = 600 / 800;
    const height = Math.round(width * aspect);
    // For crispness on high-DPI screens
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
    ctx.scale(dpr, dpr);
    // Recreate stars to fit new size
    createStars();
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createStars() {
    stars = [];
    // Use CSS pixel size for star positions
    const width = parseFloat(canvas.style.width) || 800;
    const height = parseFloat(canvas.style.height) || 600;
    for (let i = 0; i < num_stars; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            blinkSpeed: 0.001 + Math.random() * 0.003,
            offset: Math.random() * Math.PI * 2,
        });
    }
}


function generateRandomColor() {
    const h = Math.floor(Math.random() * 361);
    // const s = Math.floor(Math.random() * 30) + 70;
    const s = 100;
    //   const v = Math.floor(Math.random() * 30) + 70;
    const l = 50;
    return { h: h, s: s, l: l };
}


// On mouse click, create a firework at random position at the bottom of the canvas, that moves towards the clicked position, explodes when it reaches it.
function createFirework(/** @type {number} */ mx, /** @type {number} */ my) {
    // Use CSS pixel size for logic
    const width = parseFloat(canvas.style.width) || 800;
    const height = parseFloat(canvas.style.height) || 600;
    const startX = Math.random() * width;
    const startY = height;

    const dx = mx - startX;
    const dy = my - startY;
    const vx = dx / firework_duration;
    const vy = (dy / firework_duration) - (0.5 * gravity * firework_duration);

    fireworks.push({
        x: startX,
        y: startY,
        age: 0,
        vx: vx,
        vy: vy,
        color: generateRandomColor()
    });
}

canvas.onclick = function (/** @type {MouseEvent} */ event) {
    // Use offsetX/Y which are relative to the canvas CSS size
    const rect = canvas.getBoundingClientRect();
    const width = parseFloat(canvas.style.width) || 800;
    const height = parseFloat(canvas.style.height) || 600;
    const mx = ((event.clientX - rect.left) / rect.width) * width;
    const my = ((event.clientY - rect.top) / rect.height) * height;
    createFirework(mx, my);
};

/** @type {DOMHighResTimeStamp} */
let lasttime;
function animateFireworks(/** @type {DOMHighResTimeStamp} */ timestamp) {
    if (!lasttime) lasttime = timestamp;
    const deltatime = timestamp - lasttime;
    lasttime = timestamp;

    // Use CSS pixel size for logic
    const width = parseFloat(canvas.style.width) || 800;
    const height = parseFloat(canvas.style.height) || 600;

    // update positions
    fireworks.forEach(function (firework) {
        firework.x += firework.vx * deltatime;
        firework.y += firework.vy * deltatime + 0.5 * gravity * deltatime * deltatime;
        firework.vy += gravity * deltatime;
        firework.age += deltatime;
    });

    particles.forEach((particle) => {
        particle.x += particle.vx * deltatime;
        particle.vy += 0.1 * gravity * deltatime;
        particle.y += particle.vy * deltatime;
        particle.age += deltatime;
        particle.history.push([particle.x, particle.y]);
        if (particle.history.length > particle_history_length) {
            particle.history.shift();
        }
    });

    // create particles for fireworks that reached their destination
    fireworks.forEach((firework) => {
        if (firework.age >= firework_duration && !firework.exploded) {
            firework.exploded = true;
            // create particles
            if (Math.random() < 0.3) {
                for (let i = 0; i < num_particles; i++) {
                    particles.push({
                        x: firework.x,
                        y: firework.y,
                        src_x: firework.x,
                        src_y: firework.y,
                        age: 0,
                        vx: Math.cos((i / num_particles) * 2 * Math.PI) * speed_particle,
                        vy: Math.sin((i / num_particles) * 2 * Math.PI) * speed_particle,
                        color: generateRandomColor(),
                        history: [],
                    });
                }
            }
            else {
                for (let i = 0; i < num_particles; i++) {
                    particles.push({
                        x: firework.x,
                        y: firework.y,
                        src_x: firework.x,
                        src_y: firework.y,
                        age: 0,
                        vx: Math.cos((i / num_particles) * 2 * Math.PI) * speed_particle,
                        vy: Math.sin((i / num_particles) * 2 * Math.PI) * speed_particle,
                        color: firework.color,
                        history: [],
                    });
                }
            }
        }
    })

    // Remove particles that have exceeded their lifetime
    particles = particles.filter((particle) => {
        return particle.age <= particle_lifetime;
    });

    // Remove fireworks that reached their destination or left the canvas
    fireworks = fireworks.filter((firework) => {
        return firework.age <= firework_duration;
    });

    // Draw background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    // draw stars
    ctx.fillStyle = "white";
    stars.forEach((star) => {
        const alpha = 0.4 + 0.6 * Math.sin(timestamp * star.blinkSpeed + star.offset);
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx.fill();
    });
    ctx.globalAlpha = 1.0;

    // draw fireworks
    fireworks.forEach((firework) => {
        ctx.beginPath();
        ctx.fillStyle = "hsl(" + firework.color.h + "," + firework.color.s + "%," + firework.color.l + "%)";
        ctx.moveTo(firework.x + firework_radius, firework.y);
        ctx.arc(firework.x, firework.y, firework_radius, 0, 2 * Math.PI);
        ctx.fill();
    });

    // draw particles
    particles.forEach((particle) => {
        const fade = 1 - (particle.age / particle_lifetime);
        const colorStr = `hsla(${particle.color.h},${particle.color.s}%,${particle.color.l}%,${fade})`;

        ctx.fillStyle = colorStr;
        ctx.strokeStyle = colorStr;
        ctx.fillRect(particle.x - 5, particle.y - 5, 10, 10);

        // Draw trail lines
        if (particle.history.length > 0) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(particle.history[0][0], particle.history[0][1]);
            for (let i = 1; i < particle.history.length; i++) {
                ctx.lineTo(particle.history[i][0], particle.history[i][1]);
            }
            ctx.stroke();
        }
    })

    window.requestAnimationFrame(animateFireworks);

    // Chance for random fireworks
    if (Math.random() < firework_spawn_prob) {
        createFirework(
            Math.random() * width,
            Math.random() * height / 2
        );
    }
}


// Stars will be created in resizeCanvas
window.requestAnimationFrame(animateFireworks);

// Setup UI controls
const controlConfig = [
    { id: "fireworkDuration", decimals: 0, setter: (v) => firework_duration = v },
    { id: "fireworkSpawnProb", decimals: 3, setter: (v) => firework_spawn_prob = v },
    { id: "numParticles", decimals: 0, setter: (v) => num_particles = v },
    { id: "speedFirework", decimals: 1, setter: (v) => speed_firework = v },
    { id: "speedParticle", decimals: 2, setter: (v) => speed_particle = v },
    { id: "fireworkRadius", decimals: 0, setter: (v) => firework_radius = v },
    { id: "particleLifetime", decimals: 0, setter: (v) => particle_lifetime = v },
    { id: "gravity", decimals: 4, setter: (v) => gravity = v },
    { id: "particleHistoryLength", decimals: 0, setter: (v) => particle_history_length = v },
    { id: "numStars", decimals: 0, setter: (v) => num_stars = v, callback: createStars },
];

function setupControl(config) {
    const input = document.getElementById(config.id);
    input.addEventListener("input", (e) => {
        const value = config.decimals > 0 ? parseFloat(e.target.value) : parseInt(e.target.value);
        config.setter(value);
        const formatted = config.decimals > 0 ? value.toFixed(config.decimals) : value.toString();
        document.getElementById(config.id + "Value").textContent = formatted;
        config.callback?.();
    });
}

function setupControls() {
    controlConfig.forEach(setupControl);
}

setupControls();
