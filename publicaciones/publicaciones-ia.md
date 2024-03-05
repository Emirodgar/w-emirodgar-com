---
title: Publicaciones Analítica web
description: Listado de publicaciones sobre Inteligencia Artificial
lang: es_ES
layout: emirodgar_post_test
author: Emirodgar
image: https://emirodgar.com/cdn/images/og/marketing-digital.png
permalink: publicaciones-ia

---

Listado de publicaciones relacionadas con Inteligencia Artificial

<ul>
{% for page in site.pages %}
{% if page.title != null  %}
	{% if page.folder== "ia" %}
	  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
{% endif %}
{% endfor %}
</ul>
