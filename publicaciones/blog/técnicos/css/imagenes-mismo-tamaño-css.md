---
title: Hacer imágenes del mismo tamaño con CSS
description: 
image: https://emirodgar.com/cdn/images/og/emirodgar.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 27/01/2022
folder: seo
permalink: imagenes-tamano-css

--- 

A menudo nos enfrentamos a una serie de imágenes en una página web con tamaños distintos. La solución más sensata suele ser trabajar dichas imágenes para disponer de un tamaño estándar en todas ellas, pero ¿qué pasa si se trata de cientos o incluso miles?. Una posible solución sería ajustar el tamaño de forma dinámica con CSS.

Es decir, las imágenes seguirían siendo de diferentes tamaños pero estableceríamos una visualización normalizada a través del código CSS.

Lo primero que haremos será establecer el tamaño exacto de cada imagen usando los atributos de `width` (ancho) y `height` (alto). Después haremos uso de `object-fit` . Esta propiedad nos ayudará a definir cómo se comportará la imagen dentro del objeto `img` de `HTML`.

> La propiedad object-fit [no tiene soporte en Internet Explorer](https://developer.mozilla.org/es/docs/Web/CSS/object-fit)

En nuestro caso estableceremos el valor `cover` por el cuál la imagen se dimensiona manteniendo su relación alto/ancho llenando de forma completa del elemento. Si la imagen es más grande, se recortará parte de la misma después de haberse ajustado y si es más pequeña se redimensionará para alcanzar los valores de alto y ancho que hemos especificado.

Como siempre, recomiendo crear la clase `img-normalizada` y aplicarla a las imágenes que queremos normalizar.

```css
.img-normalizada{
	width: 400px;
	height: 400px;
	object-fit: cover;
}
```

Para usarla bastará con incluirla dentro la clase del elemento `img` de la siguiente manera.

```html
<img src="../imagen.jpg" class="img-normalizada"/>
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjgzNDYyMzk5LC00Njc4MzYzMTNdfQ==
-->