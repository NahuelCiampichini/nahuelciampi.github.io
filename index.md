---
layout: default
title: Home
---

# RAM Shortage Report

The global RAM shortage is driving prices up and supply down across consumer, enterprise, and mobile markets. This site tracks what's happening and what it means for you.

---

## Latest Posts

{% for post in site.posts %}
- **[{{ post.title }}]({{ post.url }})** — {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

---

[About this site](./about)
