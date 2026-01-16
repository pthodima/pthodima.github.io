---
layout: page
title: Conditional Diffusion Image Generation
description: A conditional DDPM and latent diffusion model for high-quality image synthesis.
img: assets/img/publication_preview/diffusion_placeholder.jpg
importance: 3
category: academic
---

## Overview

This project explores the capabilities of **Denoising Diffusion Probabilistic Models (DDPMs)** for conditional image generation. It bridges the gap between theoretical probability distributions and high-fidelity visual synthesis.

## Technical Details

*   **Conditional DDPM:** Developed a conditional DDPM in PyTorch incorporating:
    *   Sinusoidal time embeddings.
    *   Learnable label embeddings.
    *   **SpatialTransformer** modules for attention mechanisms.
*   **Results:** Trained on MNIST, achieving a Structural Similarity Index (SSIM) of **0.98** in 1,000 denoising steps.
*   **Latent Diffusion Extension:** Extended the architecture to **Latent Diffusion Models (LDMs)**. Integrated VAE decoding to generate images from the AFHQ-cat dataset.
*   **Benchmarking:** Generated 50,000 samples achieving a **Fréchet Inception Distance (FID) of 13.2**, marking a 2.4 point improvement over the baseline.

## Tech Stack
*   **PyTorch**
*   **Generative AI (Diffusion, VAEs)**
*   **Computer Vision**
