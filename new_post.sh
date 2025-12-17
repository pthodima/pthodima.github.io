#!/bin/bash

# Script to create a new blog post with proper formatting
# Usage: ./new_post.sh "Your Post Title"

if [ -z "$1" ]; then
    echo "Usage: ./new_post.sh \"Your Post Title\""
    echo "Example: ./new_post.sh \"Understanding Neural Networks\""
    exit 1
fi

# Get the post title from the first argument
TITLE="$1"

# Generate the filename (lowercase, replace spaces with hyphens, remove special chars)
FILENAME=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9 ]//g' | tr ' ' '-')

# Get today's date in YYYY-MM-DD format
DATE=$(date +%Y-%m-%d)

# Get current date-time for the front matter
DATETIME=$(date +"%Y-%m-%d %H:%M:%S")

# Full file path
FILEPATH="_posts/${DATE}-${FILENAME}.md"

# Check if file already exists
if [ -f "$FILEPATH" ]; then
    echo "Error: File $FILEPATH already exists!"
    exit 1
fi

# Create the new post with front matter template
cat > "$FILEPATH" << EOF
---
layout: post
title: $TITLE
date: $DATETIME
description: # Add a brief description here
tags: [] # e.g., [machine-learning, deep-learning, computer-vision]
categories: [] # e.g., [technical-posts, tutorials, research-notes]
featured: false
---

## Introduction

Write your content here...

### Example Math

Inline math: \$x^2 + y^2 = z^2\$

Display math:
\`\`\`
\$\$
f(x) = \int_{-\infty}^{\infty} e^{-x^2} dx
\$\$
\`\`\`

Numbered equation:
\`\`\`
\\begin{equation}
    \\label{eq:example}
    E = mc^2
\\end{equation}
\`\`\`

### Example Code

\`\`\`python
def hello_world():
    print("Hello, World!")
\`\`\`

### Example Image

{% include figure.liquid loading="eager" path="assets/img/posts/your-image.png" alt="Description" class="img-fluid rounded z-depth-1" %}
EOF

echo "✓ Created new post: $FILEPATH"
echo ""
echo "Next steps:"
echo "1. Edit $FILEPATH"
echo "2. Add description, tags, and categories in the front matter"
echo "3. Write your content"
echo "4. Add any images to assets/img/posts/"
echo ""
echo "To open in your default editor:"
echo "  \$EDITOR $FILEPATH"
