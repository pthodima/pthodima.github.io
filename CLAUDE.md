# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is an **al-folio** Jekyll-based academic website, a static site generator for personal academic portfolios. The site is designed for academics and researchers to showcase publications, projects, CV, blog posts, and more.

## Development Commands

### Local Development

**Docker (Recommended):**
```bash
docker compose pull
docker compose up
```
Site runs at `http://localhost:8080`

**Legacy (without Docker):**
```bash
bundle install
pip install jupyter
bundle exec jekyll serve
```
Site runs at `http://localhost:4000`

### Building for Production

```bash
export JEKYLL_ENV=production
bundle exec jekyll build
```
Output: `_site/` directory

### Code Quality

```bash
# Format code with Prettier
npx prettier --write .

# Purge unused CSS (after build)
npm install -g purgecss
purgecss -c purgecss.config.js
```

## Architecture

### Jekyll + Liquid Templating
- **Jekyll**: Static site generator that processes Markdown, Liquid templates, and YAML data
- **Liquid**: Template language used in layouts and includes
- Site configuration in `_config.yml` controls behavior and features

### Content Organization

**Collections** (defined in `_config.yml`):
- `_pages/`: Main site pages (about, CV, publications, etc.)
- `_posts/`: Blog posts (standard Jekyll collection)
- `_projects/`: Project showcase items
- `_news/`: News/announcement items for homepage
- `_books/`: Book review collection

**Data Files** (`_data/`):
- `cv.yml`: CV data (fallback when `assets/json/resume.json` not present)
- `repositories.yml`: GitHub repositories to display
- `coauthors.yml`: Co-author information for publication linking
- `socials.yml`: Social media links and contact info
- `venues.yml`: Publication venue abbreviations and links

**Bibliography**:
- `_bibliography/papers.bib`: BibTeX file for publications
- Jekyll-Scholar plugin processes BibTeX into formatted publication pages
- Custom fields: `abbr`, `abstract`, `arxiv`, `code`, `pdf`, `poster`, `slides`, etc.

### Layout System

**Key Layouts** (`_layouts/`):
- `default.liquid`: Base layout with header/footer
- `about.liquid`: Homepage layout
- `page.liquid`: Generic page layout
- `post.liquid`: Blog post layout with related posts
- `distill.liquid`: Distill.pub-style article layout
- `bib.liquid`: Publication entry layout
- `cv.liquid`: CV page layout

**Includes** (`_includes/`):
- Reusable components like `header.liquid`, `footer.liquid`, `news.liquid`
- Publication-related: `citation.liquid`, `selected_papers.liquid`
- Repository rendering: `repository/repo.liquid`, `repository/repo_user.liquid`

### Styling

**SASS Structure** (`_sass/`):
- `_themes.scss`: Theme color definitions
- `_variables.scss`: Global variables (colors, spacing, breakpoints)
- `_base.scss`: Base styles and typography
- `_layout.scss`: Layout and grid styles
- `_cv.scss`: CV page-specific styles
- `_distill.scss`: Distill article styles

### Custom Jekyll Plugins

**Key Plugins** (`_plugins/`):
- `download-3rd-party.rb`: Downloads external assets during build
- `google-scholar-citations.rb`: Fetches citation counts from Google Scholar
- `inspirehep-citations.rb`: Fetches citation counts from InspireHEP
- `hide-custom-bibtex.rb`: Filters out custom BibTeX fields
- `external-posts.rb`: Integrates external blog posts
- `file-exists.rb`: Helper to check file existence in templates

## Configuration

### URL Configuration

**Personal/Organization Site** (`<username>.github.io`):
```yaml
url: https://<username>.github.io
baseurl:  # empty, but do not delete
```

**Project Site** (`<username>.github.io/<project>`):
```yaml
url: https://<username>.github.io
baseurl: /<project>
```

### Theme Customization
- Change theme color: Edit `--global-theme-color` in `_sass/_themes.scss`
- Available color options: `_sass/_variables.scss`

### Feature Toggles

Important settings in `_config.yml`:
- `enable_darkmode`: Light/dark mode toggle
- `enable_google_analytics`: Analytics integration
- `enable_math`: MathJax for equations
- `enable_medium_zoom`: Image zoom on click
- `search_enabled`: Site-wide search
- CV generation: Uses `assets/json/resume.json` if present, else falls back to `_data/cv.yml`

## Deployment

### GitHub Pages (Automatic)

**Workflow**: `.github/workflows/deploy.yml`
- Triggers on push to `main` or `master`
- Builds site with Jekyll in production mode
- Purges unused CSS
- Deploys to `gh-pages` branch
- Requires: Actions enabled, read/write permissions for GitHub Actions

**Manual Deploy**: Actions tab → "Deploy" → "Run workflow"

### Requirements
- Ruby 3.3.5
- Python 3.13
- ImageMagick (for responsive images)
- Node.js (for CSS purging)

## Content Management

### Adding Publications
1. Add BibTeX entry to `_bibliography/papers.bib`
2. Optional: Add PDF to `assets/pdf/` and include `pdf = {filename.pdf}` in BibTeX
3. Jekyll-Scholar auto-generates publication page
4. Update `_data/coauthors.yml` for co-author links

### Adding Blog Posts
- Create `_posts/YYYY-MM-DD-title.md`
- Front matter: layout, title, date, categories, tags
- Drafts go in `_drafts/` directory

### Adding Projects
- Create `_projects/project-name.md`
- Front matter: layout, title, description, img (preview image)
- Images in `assets/img/`

### CV Updates
- Edit `assets/json/resume.json` (JSON Resume format) **OR**
- Edit `_data/cv.yml` (if no resume.json)

## Important Notes

- **Main branch only**: All changes must be on `main` branch; `gh-pages` is auto-generated
- **Image processing**: ImageMagick must be installed for responsive image generation
- **External dependencies**: Third-party libraries configured in `_config.yml` under `third_party_libraries`
- **Jupyter notebooks**: Supported via `jekyll-jupyter-notebook` plugin
- **MathJax**: Enabled by default for LaTeX math rendering
- **Liquid syntax**: Use `{% %}` for logic, `{{ }}` for output, variables accessible via `site.*` and `page.*`
