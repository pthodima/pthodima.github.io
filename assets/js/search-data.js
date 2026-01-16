// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Download my full CV or view the details below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-notes",
          title: "Notes",
          description: "A collection of my technical notes organized by subject.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/notes/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of my academic and personal projects in AI, ML, and systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "notes-the-art-of-makefiles",
          title: 'The Art of Makefiles',
          description: "A comprehensive guide to understanding, writing, and mastering Makefiles.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/operating-systems/makefiles/";
            },},{id: "projects-anchor-free-object-detection-fcos",
          title: 'Anchor-Free Object Detection (FCOS)',
          description: "An end-to-end one-stage object detector implementation achieving 45 FPS on A100 GPUs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_fcos_detection/";
            },},{id: "projects-deep-learning-framework-in-c-amp-cuda",
          title: 'Deep Learning Framework in C++ &amp;amp; CUDA',
          description: "A lightweight, device-agnostic deep learning framework architected from scratch.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_cpp_framework/";
            },},{id: "projects-conditional-diffusion-image-generation",
          title: 'Conditional Diffusion Image Generation',
          description: "A conditional DDPM and latent diffusion model for high-quality image synthesis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_diffusion_gen/";
            },},{id: "projects-evolution-of-semantics-in-diffusion-models",
          title: 'Evolution of Semantics in Diffusion Models',
          description: "Ongoing research analyzing semantic feature evolution during diffusion denoising.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_semantics_diffusion/";
            },},{id: "projects-hand-sign-recognition",
          title: 'Hand Sign Recognition',
          description: "A computer vision system for real-time hand sign classification.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_hand_sign/";
            },},{id: "projects-sparks-of-cooperative-reasoning",
          title: 'Sparks of Cooperative Reasoning',
          description: "Evaluating LLMs as strategic agents in the game of Hanabi.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_coop_reasoning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%68%6F%64%69%6D%61@%77%69%73%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pthodima", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pthodima", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
