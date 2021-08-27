---
title: Usar expresiones regulares en fichero robots.txt
description: Aprende a utilizar expresiones más usables en el fichero robots.txt
image: https://emirodgar.com/cdn/images/og/auditoria.png
layout: emirodgar_post
sitemap: 1
feed: 1
folder: seo
author: Emirodgar
permalink: regex-robotstxt

---

Ni Google ni Bing aceptan usar expresiones regulares en los ficheros robots.txt no obstante, sí permiten hacer uso de dos caracteres a [modo de comodines](https://developers.google.com/search/docs/advanced/robots/robots_txt#url-matching-based-on-path-values): son el `*` y el `$`.

- El asteristo  `*`  nos permitirá identificar 0 o más apariciones de cualquier caracter o términos válido.
- El dólar `$` nos permitirá identificar el final de una cadena.

Por ejemplo, si queremos evitar el rastreo de todas las URLs que contentan el término `perro` lo podemos hacer de la siguiente manera:

```
User-agent: *
Disallow: /*perros
```

Si únicamente quisiéramos bloquear el rastreo

```
User-agent: *
Disallow: /*perros$
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI5MzA1MzEzNiwxNjgwODk2Mzc3XX0=
-->