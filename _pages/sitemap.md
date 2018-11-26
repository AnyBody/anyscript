---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: false
---


A list of all the posts and pages found on the site.

<h2>Pages</h2>
<hr />
{% for post in site.pages %}
  {% unless post.sitemap == false %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}

<h2>Posts</h2>
<hr />
{% for post in site.posts %}
  {% unless post.sitemap == false %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}

{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% capture label %}{{ collection.label }}{% endcapture %}
  {% if label != written_label %}
  <h2>{{ label }}</h2>
  <hr />
  {% capture written_label %}{{ label }}{% endcapture %}
  {% endif %}
{% endunless %}
{% for post in collection.docs %}
  {% unless collection.output == false or collection.label == "posts" or post.sitemap == false %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}
{% endfor %}