---
title: Publicaciones sobre 	GEO / Transformación Digital
description: Listado de publicaciones sobre 	GEO / Transformación Digital
lang: es_ES
layout: emirodgar_post_test
author: Emirodgar
image: https://emirodgar.com/cdn/images/og/marketing-digital.png
permalink: publicaciones-geo

---

Listado de publicaciones relacionadas con Inteligencia Artificial

<ul>
{% for page in site.pages %}
{% if page.title != null  %}
	{% if page.folder== "geo" %}
	  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
{% endif %}
{% endfor %}
</ul>
