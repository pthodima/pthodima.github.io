---
layout: page
title: Deep Learning Framework in C++ & CUDA
description: A lightweight, device-agnostic deep learning framework architected from scratch.
img: assets/img/publication_preview/cpp_placeholder.jpg
importance: 2
category: academic
---

## Overview

To gain a deep understanding of modern deep learning internals, I architected a **lightweight, device-agnostic deep learning framework** in C++ from scratch. The design mimics the intuitive `torch.nn.Module` API, supporting dynamic graph construction and automatic differentiation.

## Key Features

*   **Custom CUDA Kernels:** Implemented highly optimized CUDA kernels for linear layers and activation functions.
*   **Performance Optimization:** Achieved a **13x speedup** compared to naive implementations by leveraging **OpenMP multi-threading** and GPU acceleration.
*   **Memory Management:** Engineered a robust training pipeline with manual host-device memory management to ensure efficiency and stability.
*   **Validation:** Successfully trained a fully connected neural network on the MNIST dataset, validating the framework's correctness and convergence properties.

## Tech Stack
*   **C++**
*   **CUDA**
*   **OpenMP**
*   **Deep Learning Systems**
