---
title: Evita que Google indexe una parte de tu contenido
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
permalink: bloquear-indexacion-contenido

--- 

## Las etiquetas googleoff y googleon no sirven

En la red se puede encontrar una solución rápida para indicar a Google qué fragmentos de contenido deben ser indexados y cuáles no. Esto se hace con las etiquetas `googleoff` y `googleon`.

    < !--googleoff: all -->  
    Lo que está entre estas etiquetas no será indexado  
    < !--googleon: all -->

Lo que pocas veces se indica es que estas etiquetas sólo sirven para GSA (*Google Search Appliance*), es decir cuando instalamos el buscador de Google en nuestro servidor para realizar búsquedas sobre nuestros documentos. De ahí que nos permitan identificar mediante estas etiquetas qué partes podrán ser indexadas y cuáles no.

Para el motor de búsqueda de Google (*Google Web Search*) estas etiquetas no tienen ningún efecto.

## No existe un mecanismo para bloquear una parte del contenido

Según John Mueller, a día de hoy Google no cuenta con una funcionalidad que permita bloquear el rastreo e indexación a una parta del contenido. Podremos bloquear el rastreo de toda una URL con la directiva noindex o [eliminarla del índice de Google](https://emirodgar.com/eliminar-url-google) pero no acotar partes dentro de la misma.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">It has no effect in websearch. There&#39;s no mechanism to block indexing of a part of a page (other than hacky workarounds). You can use data-nosnippet to block a part of a snippet though.</p>&mdash; 🧀 John 🧀 (@JohnMu) <a href="https://twitter.com/JohnMu/status/1234952552141271046?ref_src=twsrc%5Etfw">March 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Cuidado con hacer versiones diferentes

La única opción viable que nos queda sería crear una versión diferente para el [robot de búsqueda de Google](https://emirodgar.com/detectar-googlebot) y otra para usuarios pero ojo, esto puede ser considerado [cloaking](https://developers.google.com/search/docs/advanced/guidelines/cloaking?hl=es) y acarrear una penalización web.

Como otras alternativas podemos cargar el contenido que queremos ocultar a los buscadores mediente Javascript, no obstante, 
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjAyMzQ2NDc0NSw0NjI4ODM1MjldfQ==
-->