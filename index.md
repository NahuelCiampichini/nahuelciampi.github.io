---
layout: default
title: Home
---

# Welcome to My Jekyll Site

This is a Jekyll website using the beautiful **Midnight theme**. Edit this page by modifying `index.md`.

---

## About This Site

This site is built with [Jekyll](https://jekyllrb.com/), a simple, blog-aware static site generator. The **Midnight theme** gives it a sleek dark design perfect for showcasing your work.

---

## Recent Posts

<ul class="post-list">
  {% for post in site.posts limit:5 %}
    <li>
      <span class="post-meta">{{ post.date | date: "%B %d, %Y" }}</span>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
    </li>
  {% endfor %}
</ul>

{% if site.posts.size == 0 %}
<p><em>No posts yet. Add your first post in the <code>_posts</code> folder!</em></p>
{% endif %}

---

## What You Can Do

- **Write posts** — Add markdown files to `_posts/` with the format `YYYY-MM-DD-title.md`
- **Create pages** — Add `.md` or `.html` files to the root directory
- **Customize** — Edit `_config.yml` to change site title, description, and author info
- **Style** — Modify `_sass/custom.scss` to override theme styles

[View All Posts]({{ "/blog" | relative_url }}){: .btn}
[About Me]({{ "/about" | relative_url }}){: .btn}
