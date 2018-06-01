---
title: "Draft posts"
layout: single
hidden: true
sitemap: false
permalink: /drafts/
---

<div class="grid__wrapper">
  {% for post in site.posts %}
    {% if post.hidden %}
    {% include archive-single.html type="grid" %}
    {% endif %}
  {% endfor %}
</div>