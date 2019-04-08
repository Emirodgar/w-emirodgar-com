---
title: Optimización SEO en Jekyll
description: Guía completa para optimizar el SEO en Jekyll
lang: es_ES
author: Emirodgar
publisher: Emirodgar
tags: SEO, Jekyll
image: https://emirodgar.com/cdn/images/og/og-seo-tools.jpg
permalink: optimizacion-seo-jekyll

---

# Optimización SEO en Jekyll

Jekyll es uno de los generadores de sitios web estáticos más populares en la actualidad. Utiliza **HTML** y **Markdown** para crear un sitio web listo para ser alojado en cualquier servidor web. 

La rapidez y sencillez con la que podemos crear una web debe siempre acompañar a una correcta [optimización SEO](factores-seo) ya que si no, estaremos perdiendo la oportunidad de captar tráfico de calidad.

## Estructura inicial

Lo primero será crearnos la carpeta "_layouts" donde incluiremos el template de nuestra página web. En la misma deberá existir un "default.html".

Para poder hacer uso de las funcionalidades SEO que tiene Jekyll debemos incluir el siguiente código dentro de nuestro HTML:

```
<html>
 <head>
   {% seo %}
...
```

Jekyll sustituirá el ```{% seo %}``` por una serie de código HTML relacionados con el SEO y que nos facilitarán el posicionamiento web de nuestra página.

## Variables y configuración inicial

Las variables principales que podemos configurar son las siguientes
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTk4NzQ5NTUwNywtODAxMzIyOTk1XX0=
-->