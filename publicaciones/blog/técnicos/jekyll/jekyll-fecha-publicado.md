---
title: Cómo incluir fecha de publicación y actualización en Jekyll
description: Podemos hacer uso de múltiples templates para colorear nuestro código
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
date: 27/01/2022
layout: emirodgar_post
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: fecha-publicacion-jekyll

---

Cuando realizamos una publicación, lo normal es que utilicemos el campo `date` para especificar la fecha en la que ha sido publicada. A nivel SEO (y de experiencia de usuario) es importante que esta fecha sea visible para que se pueda determinar si un contenido está actualizado o si es obsoleto. 

Esto se hará en la cabecera de la página de Jekyll de la siguiente manera:

    date: 27/01/2022

A partir de ahí, en nuestro *template* de Jekyll podremos acceder a dicha información a través del comando

Publicado el {{ page.date | date: ' %d/%m/%Y' }}
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTcyNjQ1NjQwNV19
-->