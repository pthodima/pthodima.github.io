# Website Setup Guide

## Overview

Your al-folio academic portfolio website has been configured with a clean, minimal design focused on showcasing your work as an MS CS student at UW-Madison. This guide explains what has been set up and what you need to do next.

## What's Been Configured

### 1. Site Information (_config.yml)
✅ **Completed:**
- Personal information (name, affiliation)
- Site description and keywords
- Blog name changed to "Technical Notes & Blog"
- Scholar name for publications
- Social links enabled in navbar
- Professional icon (🎓)
- Clean theme with dark blue color scheme

### 2. About Page (_pages/about.md)
✅ **Completed:**
- Professional introduction highlighting your MS at UW-Madison
- Mentions your 3 years at BNY
- Lists research interests (AI, ML, CV, Game Theory, Systems)
- PhD aspirations mentioned
- Latest posts section enabled
- News/announcements section disabled

⚠️ **TODO:**
- Replace profile picture at `assets/img/prof_pic.jpg` with your photo
- Expand the biography with more specific details
- Add your office/building location if applicable

### 3. CV Page (_pages/cv.md & assets/json/resume.json)
✅ **Completed:**
- CV page configured with download button
- Resume JSON template created with your basic information
- Organized sections for work, education, skills, projects

⚠️ **TODO - HIGH PRIORITY:**
1. **Add your CV PDF:**
   - Export your CV/Resume as PDF
   - Save it as `Pavan_Thodima_CV.pdf` in `assets/pdf/` directory
   - This will enable the download button

2. **Fill in resume.json** at `assets/json/resume.json`:
   - Add your email address
   - Fill in BNY work experience details (dates, responsibilities, achievements)
   - Add your undergraduate education information
   - Complete the skills section with your actual tech stack
   - Add projects (we'll discuss these separately)
   - Update dates in YYYY-MM format

### 4. Social Links (_data/socials.yml)
✅ **Completed:**
- Template created with GitHub, LinkedIn, email

⚠️ **TODO:**
- Update `your-email@wisc.edu` with your actual email
- Update `your-linkedin-username` with your LinkedIn username
- Add Google Scholar ID when you have publications
- Add ORCID if you have one

### 5. Blog Structure
✅ **Completed:**
- Blog navigation configured (nav_order: 2)
- Display tags set up: machine-learning, deep-learning, computer-vision, game-theory, systems, python, research
- Display categories: technical-posts, tutorials, research-notes
- Example welcome post created as template
- All example posts hidden

⚠️ **TODO:**
- Delete or modify the welcome post at `_posts/2025-01-01-welcome-post.md`
- Start writing your first real blog post!

### 6. Projects Page
✅ **Completed:**
- Projects page configured with categories: research, academic, personal
- Navigation order set (nav_order: 4)
- All example projects hidden

⚠️ **TODO:**
- Create project markdown files in `_projects/` directory
- Each project should have:
  - Title and description
  - Category (research/academic/personal)
  - Preview image (optional)
  - Link to GitHub/demo if available

### 7. Theme & Design
✅ **Completed:**
- Clean, minimal blue theme (professional)
- Dark mode enabled
- Math typesetting enabled (MathJax)
- Progress bar disabled for cleaner look
- Social links in navbar enabled

## Next Steps - Action Items

### Immediate (Before First Deploy)

1. **Update Social Links** (`_data/socials.yml`):
   ```yaml
   email: your-actual-email@wisc.edu
   github_username: pthodima  # Verify this is correct
   linkedin_username: your-actual-username
   ```

2. **Add Your Photo:**
   - Replace `assets/img/prof_pic.jpg` with your professional photo
   - Recommended: 400x400px, square aspect ratio
   - Professional headshot works best

3. **Update About Page** (`_pages/about.md`):
   - Add more specific details about your research
   - Mention any specific projects or coursework
   - Add your unique angle/what differentiates you

4. **Fil in Your CV** (`assets/json/resume.json`):
   - Complete all TODO items in the file
   - Add real dates for BNY employment
   - Add undergraduate institution details
   - List actual programming languages and tools

5. **Add CV PDF:**
   - Save your CV as `Pavan_Thodima_CV.pdf` in `assets/pdf/`

### Phase 2 (First Week)

6. **Projects - You mentioned having some!**
   Let's discuss these. For each project, I'll need:
   - Project name
   - Brief description (1-2 sentences)
   - Category (research/academic/personal)
   - Technologies used
   - Link to GitHub/demo (if available)
   - Preview image (optional)

7. **Write First Blog Post:**
   Create a new file: `_posts/YYYY-MM-DD-title.md`
   Example structure:
   ```markdown
   ---
   layout: post
   title: Your Post Title
   date: 2025-01-15 10:00:00
   description: Brief description for preview
   tags: [machine-learning, python]
   categories: [technical-posts]
   ---

   Your content here...
   ```

8. **Test Locally:**
   ```bash
   docker compose up
   # Visit http://localhost:8080
   ```

### Phase 3 (Ongoing)

9. **Regular Content:**
   - Write blog posts about what you're learning
   - Document research paper summaries
   - Create tutorials on topics you've mastered

10. **Add Publications:**
    - When you have publications, add them to `_bibliography/papers.bib`
    - Update Google Scholar ID in `_data/socials.yml`
    - Enable `selected_papers: true` in `_pages/about.md`

## Writing Your First Blog Post

### Template for Technical Posts

```markdown
---
layout: post
title: Understanding Backpropagation from First Principles
date: 2025-01-20 10:00:00
description: A detailed walkthrough of backpropagation algorithm with mathematical derivations
tags: [machine-learning, deep-learning, mathematics]
categories: [technical-posts]
featured: false  # set to true to pin on blog page
---

## Introduction

Start with context and why this topic matters...

## Main Content

### Section 1
Content with code examples:

```python
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))
\`\`\`

### Section 2
Mathematical equations:

$$ f(x) = \frac{1}{1 + e^{-x}} $$

## Conclusion

Summarize key points...

## References

1. Source 1
2. Source 2
\`\`\`

### Template for Research Notes

\`\`\`markdown
---
layout: post
title: "Paper Summary: Attention Is All You Need"
date: 2025-01-22 10:00:00
description: Summary and analysis of the Transformer architecture paper
tags: [research, deep-learning, nlp]
categories: [research-notes]
---

## Paper Information
- **Authors:** Vaswani et al.
- **Year:** 2017
- **Conference:** NeurIPS
- **Link:** [arXiv](https://arxiv.org/abs/1706.03762)

## Key Contributions

1. Point 1
2. Point 2

## Main Ideas

### Architecture
Explanation...

## My Thoughts

Your analysis and insights...

## Questions for Further Investigation

1. Question 1
2. Question 2
\`\`\`

## Deployment

### GitHub Pages Setup

Your repository is already configured for GitHub Pages! Just:

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Initial personalization of website"
   git push origin main
   ```

2. **Enable GitHub Actions:**
   - Go to repository Settings → Actions → General
   - Set "Workflow permissions" to "Read and write permissions"
   - Click Save

3. **Wait for deployment:**
   - Go to Actions tab
   - Watch for "Deploy site" workflow to complete (~4 minutes)
   - Then "pages-build-deployment" (~45 seconds)

4. **Configure GitHub Pages:**
   - Go to Settings → Pages
   - Under "Build and deployment"
   - Set Source: "Deploy from a branch"
   - Set Branch: "gh-pages" (NOT main)
   - Click Save

5. **Visit your site:**
   - https://pthodima.github.io

### Making Updates

After initial deployment, every push to `main` branch automatically triggers a rebuild and deploy!

## Maintenance

### Adding a Blog Post
1. Create `_posts/YYYY-MM-DD-title.md`
2. Write content following templates above
3. Commit and push
4. Automatic deployment!

### Adding a Project
1. Create `_projects/project-name.md`:
   ```markdown
   ---
   layout: page
   title: Project Name
   description: Brief description
   img: assets/img/project-thumbnail.jpg  # optional
   importance: 1  # lower numbers appear first
   category: research  # or academic, personal
   github: https://github.com/pthodima/project  # optional
   ---

   Detailed project description...
   ```

### Updating CV
- Edit `assets/json/resume.json`
- Commit and push
- The website automatically updates!

## Common Issues & Solutions

### Site not showing up
- Make sure gh-pages branch exists
- Check Settings → Pages is set to gh-pages branch
- Wait ~2-3 minutes after deployment completes

### Images not loading
- Images must be in `assets/img/`
- Use relative URLs: `assets/img/filename.jpg`
- Check file extensions match (case-sensitive)

### Math not rendering
- Ensure MathJax is enabled in `_config.yml` (already done)
- Use `$$` for display math, `$` for inline
- Example: `$$ E = mc^2 $$`

### Code highlighting issues
- Specify language: \`\`\`python
- Check supported languages in Jekyll documentation

## Resources

- **Jekyll Documentation:** https://jekyllrb.com/docs/
- **al-folio Docs:** https://github.com/alshedivat/al-folio
- **Markdown Guide:** https://www.markdownguide.org/
- **MathJax Documentation:** https://docs.mathjax.org/

## Questions?

After reviewing this guide:
1. Let me know about your projects so I can help you add them
2. Share your CV/resume so I can help format the resume.json
3. Ask about any customizations you'd like to make!

## Summary of Files You Need to Update

### High Priority
- [ ] `_data/socials.yml` - Email, LinkedIn username
- [ ] `assets/img/prof_pic.jpg` - Your photo
- [ ] `assets/json/resume.json` - Complete CV information
- [ ] `assets/pdf/Pavan_Thodima_CV.pdf` - Your CV PDF

### Medium Priority
- [ ] `_pages/about.md` - Expand biography
- [ ] Create first blog post in `_posts/`
- [ ] Create project files in `_projects/`

### Can Do Later
- [ ] Delete/modify `_posts/2025-01-01-welcome-post.md`
- [ ] Add more content over time
- [ ] Refine styling if needed

Good luck with your website! 🚀
