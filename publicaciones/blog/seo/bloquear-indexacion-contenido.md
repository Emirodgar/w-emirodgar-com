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

Para el motor de búsqueda de Google (*Google Web Search*) estas etiquetas no tienen ningún impacto.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTU5ODk2MDU4Nyw0NjI4ODM1MjldfQ==
-->