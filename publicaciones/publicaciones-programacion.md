---
title: Publicaciones de programación
description: Listado de publicaciones sobre programación
lang: es_ES
layout: emirodgar_post_test
author: Emirodgar
image: https://emirodgar.com/cdn/images/og/marketing-digital.png
permalink: publicaciones-programacion

---

Listado de publicaciones relacionadas con la programación en diferentes entornos: Java, JavaScript, PHP, Python, etc.

<ul>
{% for page in site.pages %}
{% if page.title != null  %}
	{% if page.folder == "programacion" %}
	  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
{% endif %}
{% endfor %}
</ul>
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE1NjM1NzgzNV19
-->