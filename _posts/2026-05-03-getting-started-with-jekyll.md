---
layout: post
title: "Getting Started with Jekyll: A Beginner's Guide"
date: 2026-05-03 14:00:00 -0300
categories: [tutorials, jekyll]
tags: [jekyll, tutorial, web development, github-pages]
author: Your Name
read_time: true
---

Jekyll is one of the most popular static site generators out there. In this post, I'll walk you through everything you need to get started.

## Prerequisites

Before we begin, make sure you have:

- **Ruby** (version 2.7 or higher)
- **RubyGems**
- **GCC and Make**

## Installation

Install Jekyll and Bundler:

```bash
gem install jekyll bundler
```

Create a new site:

```bash
jekyll new my-awesome-site
cd my-awesome-site
```

## Project Structure

A typical Jekyll site looks like this:

```
my-site/
├── _config.yml        # Site configuration
├── _layouts/          # Page templates
├── _includes/         # Reusable partials
├── _posts/            # Blog posts
├── _sass/             # Sass stylesheets
├── assets/            # Images, CSS, JS
├── index.md           # Homepage
└── about.md           # About page
```

## Writing Posts

Posts live in the `_posts` folder and follow this naming convention:

```
YYYY-MM-DD-title-of-post.md
```

Every post starts with **front matter**:

```yaml
---
layout: post
title: "My First Post"
date: 2026-05-03 12:00:00 -0300
categories: [general]
---

Your post content goes here...
```

## Building & Serving

To preview your site locally:

```bash
bundle exec jekyll serve
```

Then open `http://localhost:4000` in your browser.

## Deploying to GitHub Pages

1. Create a new GitHub repository
2. Push your Jekyll site to it
3. Go to **Settings → Pages**
4. Set the source to your main branch

That's it — your site will be live at `https://yourusername.github.io/repo-name`!

---

*Happy building! If you run into issues, the [Jekyll docs](https://jekyllrb.com/docs/) are excellent.*
