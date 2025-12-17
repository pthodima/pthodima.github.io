---
layout: page
title: notes
permalink: /notes/
description: A collection of my technical notes organized by subject.
nav: true
nav_order: 2
display_categories: [operating-systems, game-theory, computer-vision]
---

<div class="projects">
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category | replace: "-", " " | capitalize }}</h2>
  </a>
  {% assign categorized_notes = site.notes | where: "category", category %}
  
  <div class="row row-cols-1 row-cols-md-3">
    {% for note in categorized_notes %}
      {% include notes.liquid %}
    {% endfor %}
  </div>
  {% endfor %}
</div>
