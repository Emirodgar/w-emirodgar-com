---
title: Publicaciones Estratégicas
description: Listado de publicaciones estratégicas
lang: es_ES
layout: emirodgar_post_test
author: Emirodgar
image: https://emirodgar.com/cdn/images/og/marketing-digital.png
permalink: publicaciones-estrategicas

---

En esta página se muestra el listado de las publicaciones que considero estratégicas, bien por su contenido a nivel de SEO o porque no tienen cabida en otras categorías.

<ul>
{% for page in site.pages %}
{% if page.title != null  %}
	{% if page.folder== "estrategicos" %}
	  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
	{% endif %}
{% endif %}
{% endfor %}
</ul>
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzYxMzUwNDldfQ==
-->