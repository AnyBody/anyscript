---
layout: archive
permalink: /all-posts/
title: "All blog posts"
author_profile: false
sidebar:
  nav: "posts"

---

<div class="grid__wrapper">
  {% for post in site.posts %}
    {% unless post.hidden %}
    {% include archive-single.html type="grid" %}
    {% endunless %}
  {% endfor %}
</div>
