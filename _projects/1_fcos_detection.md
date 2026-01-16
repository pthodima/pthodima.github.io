---
layout: page
title: Anchor-Free Object Detection (FCOS)
description: An end-to-end one-stage object detector implementation achieving 45 FPS on A100 GPUs.
img: assets/img/publication_preview/fcos_placeholder.jpg
importance: 1
category: academic
github: https://github.com/pthodima/FCOS-Object-Detection
---

## Overview

This project involves the implementation of a high-performance **Anchor-Free Object Detection (FCOS)** system. Moving away from traditional anchor-based methods, this one-stage detector simplifies the training process and improves inference speed without compromising accuracy.

## Key Technical Achievements

*   **Architecture Implementation:** Built an end-to-end FCOS detector using a **ResNet–FPN (Feature Pyramid Network)** backbone in PyTorch.
*   **Loss Functions:** Implemented and tuned **Focal Loss** for class imbalance and **GIoU (Generalized Intersection over Union) Loss** for precise bounding box regression. Added a "centerness" head to suppress low-quality detections.
*   **Performance:**
    *   Achieved **37.9% mAP** on the Pascal VOC dataset (2007 + 2012), outperforming the baseline by 2.4% through multi-scale augmentation techniques.
    *   Engineered a high-throughput inference pipeline capable of **45 FPS on A100 GPUs**.
*   **Optimization:** Utilized vectorized box decoding, confidence thresholding, and batched NMS (Non-Maximum Suppression) to maximize speed.
*   **Tools:** Developed custom visualization tools for real-time training diagnostics to monitor convergence and prediction quality.

## Tech Stack
*   **Python, PyTorch**
*   **Computer Vision (ResNet, FPN)**
*   **CUDA Optimization**
