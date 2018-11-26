---
layout: archive
permalink: /tags/
title: "Posts by Tags"
author_profile: false
sidebar:
  nav: "posts"
---

{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
  {% for post in posts %}
  {% unless post.hidden %}
    {% include archive-single.html %}
  {% endunless %}
  {% endfor %}
{% endfor %}