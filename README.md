# My Jekyll Site — Midnight Theme

A clean, blog-ready Jekyll site using the [Midnight theme](https://github.com/pages-themes/midnight).

## 🚀 Quick Start

### 1. Install dependencies

```bash
gem install bundler
bundle install
```

### 2. Serve locally

```bash
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000) in your browser.

### 3. Build for production

```bash
bundle exec jekyll build
```

Output goes to the `_site/` folder.

---

## 📁 File Structure

```
jekyll-midnight/
├── _config.yml              # Site settings
├── _layouts/
│   ├── default.html         # Base layout with header/footer/nav
│   └── post.html            # Blog post layout
├── _posts/
│   ├── 2026-05-01-welcome-to-my-jekyll-site.md
│   └── 2026-05-03-getting-started-with-jekyll.md
├── assets/
│   ├── css/
│   │   └── custom.css       # Theme overrides & custom styles
│   └── js/
│       └── main.js          # Copy button, smooth scroll, etc.
├── index.md                 # Homepage
├── about.md                 # About page
├── blog.md                  # Blog listing page
├── 404.md                   # 404 error page
├── feed.xml                 # RSS feed
├── robots.txt               # Search engine directives
└── Gemfile                  # Ruby dependencies
```

## ✏️ Customization

### Change site info
Edit `_config.yml`:
```yaml
title: My Site
description: A short description
author:
  name: Your Name
  email: you@example.com
```

### Add a new post
Create a file in `_posts/` named `YYYY-MM-DD-your-title.md`:
```markdown
---
layout: post
title: "My New Post"
date: 2026-06-01 12:00:00 -0300
categories: [category]
tags: [tag1, tag2]
---

Write your content here...
```

### Add a new page
Create a `.md` file in the root, e.g. `projects.md`:
```markdown
---
layout: default
title: Projects
permalink: /projects/
---

# My Projects
...
```

Then add it to the nav in `_layouts/default.html`.

### Customize styles
Edit `assets/css/custom.css` — it loads after the Midnight theme styles.

---

## 🌐 Deploy to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source branch to `main` (or `gh-pages`)
4. Your site will be live at `https://username.github.io/repo-name`

---

## 📦 Dependencies

| Gem | Purpose |
|-----|---------|
| `jekyll` | Static site generator |
| `jekyll-remote-theme` | Loads Midnight theme from GitHub |
| `jekyll-feed` | Generates RSS feed |
| `jekyll-seo-tag` | SEO meta tags |
