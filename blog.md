---
layout: default
title: Blog
permalink: /blog/
---

# Blog

All my posts, thoughts, and tutorials.

---

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%B %d, %Y" }}</span>
      {% if post.categories.size > 0 %}
        <span class="post-categories">
          {% for category in post.categories %}
            <span class="category-tag">{{ category }}</span>
          {% endfor %}
        </span>
      {% endif %}
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncate: 200 }}</p>
      <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
    </li>
  {% endfor %}
</ul>
{% else %}
<p><em>No posts yet. Check back soon!</em></p>
{% endif %}

[← Back Home]({{ "/" | relative_url }}){: .btn}
