---
title: Hacer imágenes del mismo tamaño con CSS
description: 
image: https://emirodgar.com/cdn/images/og/emirodgar.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
permalink: imagenes-tamano-css

--- 

A menudo nos enfrentamos a una serie de imágenes en una página web con tamaños distintos. La solución más sensata suele ser trabajar dichas imágenes para disponer de un tamaño estándar en todas ellas, pero ¿qué pasa si se trata de cientos o incluso miles?. Una posible solución sería ajustar el tamaño de forma dinámica con CSS.

Es decir, las imágenes seguirían siendo de diferentes tamaños pero estableceríamos una visualización normalizada a través del código CSS.

Lo primero que haremos será establecer el tamaño exacto de cada imagen usando los atributos de `width` (ancho) y `height` (alto).

```css
.img-normalizada{
	width: 400px;
	height: 400px;
	object-fit: cover;
}
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjAxNjY0NTMzMl19
-->