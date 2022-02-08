---
title: Publicaciones de marketing
description: Listado de publicaciones sobre marketing
lang: es_ES
layout: emirodgar_post_test
author: Emirodgar
image: https://emirodgar.com/cdn/images/og/marketing-digital.png
permalink: publicaciones-marketing

---

Listado de publicaciones relacionadas con Analítica web

<ul>
{% for page in site.pages %}
{% if page.title != null  %}
	{% if page.folder== "marketing" %}
	  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
{% endif %}
{% endfor %}
</ul>
<!--stackedit_data:
eyJoaXN0b3J5IjpbOTgyNTU1OTE1XX0=
-->