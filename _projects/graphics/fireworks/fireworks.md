---
layout: page
title: Fireworks
description: A simple fireworks simulation.
importance: 1
category: graphics
permalink: /projects/graphics/fireworks/
---

<style>
    /* Scoped styles for the canvas container and controls */
    .fireworks-container canvas {
        width: 100%;
        max-width: 800px;
        height: 600px; /* Use the previous height or adaptable */
        background-color: black;
        border-radius: 8px;
        display: block;
        margin: 0 auto;
        border: 1px solid black;
    }
    
    #controls {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
    .control-group {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .control-group label {
        font-weight: bold;
        font-size: 12px;
    }
    .control-group input {
        padding: 5px;
        max-width: 100%;
    }
    .control-value {
        font-size: 12px;
        color: #666;
    }
</style>

<div class="fireworks-container">
    <canvas id="fireworksCanvas" width="800" height="600"></canvas>
    
    <div id="controls">
        <div class="control-group">
            <label for="fireworkDuration">Firework Duration (ms)</label>
            <input type="range" id="fireworkDuration" min="100" max="1000" value="300">
            <span class="control-value" id="fireworkDurationValue">300</span>
        </div>
        
        <div class="control-group">
            <label for="fireworkSpawnProb">Spawn Probability</label>
            <input type="range" id="fireworkSpawnProb" min="0" max="0.1" step="0.001" value="0.02">
            <span class="control-value" id="fireworkSpawnProbValue">0.02</span>
        </div>
        
        <div class="control-group">
            <label for="numParticles">Number of Particles</label>
            <input type="range" id="numParticles" min="10" max="200" value="70">
            <span class="control-value" id="numParticlesValue">70</span>
        </div>
        
        <div class="control-group">
            <label for="speedFirework">Firework Speed (px/ms)</label>
            <input type="range" id="speedFirework" min="0.1" max="2" step="0.1" value="0.8">
            <span class="control-value" id="speedFireworkValue">0.8</span>
        </div>
        
        <div class="control-group">
            <label for="speedParticle">Particle Speed (px/ms)</label>
            <input type="range" id="speedParticle" min="0.1" max="1" step="0.05" value="0.3">
            <span class="control-value" id="speedParticleValue">0.3</span>
        </div>
        
        <div class="control-group">
            <label for="fireworkRadius">Firework Radius</label>
            <input type="range" id="fireworkRadius" min="2" max="20" value="8">
            <span class="control-value" id="fireworkRadiusValue">8</span>
        </div>
        
        <div class="control-group">
            <label for="particleLifetime">Particle Lifetime (ms)</label>
            <input type="range" id="particleLifetime" min="100" max="1000" value="400">
            <span class="control-value" id="particleLifetimeValue">400</span>
        </div>
        
        <div class="control-group">
            <label for="gravity">Gravity (px/ms²)</label>
            <input type="range" id="gravity" min="0" max="0.02" step="0.0005" value="0.005">
            <span class="control-value" id="gravityValue">0.005</span>
        </div>
        
        <div class="control-group">
            <label for="particleHistoryLength">Trail Length</label>
            <input type="range" id="particleHistoryLength" min="0" max="100" value="40">
            <span class="control-value" id="particleHistoryLengthValue">40</span>
        </div>
        
        <div class="control-group">
            <label for="numStars">Number of Stars</label>
            <input type="range" id="numStars" min="0" max="500" value="100">
            <span class="control-value" id="numStarsValue">100</span>
        </div>
    </div>
</div>

<script>
{% include_relative main.js %}
</script>
