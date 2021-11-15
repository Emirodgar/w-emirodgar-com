---
title: Cómo centrar una imagen con CSS
description: 
image: https://emirodgar.com/cdn/images/og/emirodgar.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
permalink: centrar-imagen-css

--- 

Para conseguir que una imagen quede centrada en nuestra página web necesitaremos hacer uso de dos propiedades. La primera será definir `display` con el valor `block` ya que de esta forma conseguiremos que la imagen sea independiente del resto de elementos y podamos definir sus atributos sin que otros interfieran.

Después, bastará con establecer los márgenes derecho e izquierdo con valor `auto` de tal forma que el navegador centre la imagen y divida el espacio restante equitativamente entre derecha e izquierda.

La forma más cómoda de aplicar estos cambios será crear la clase `img-centrada` y usarla en aquellas imágenes que queramos centrar en nuestra página web.

```css
.img-centrada {
	display: block;
	margin-left: auto;
	margin-right: auto;
}
```

Para usarla bastará con incluirla dentro la clase del elemento `img` de la siguiente manera.

```html
<img src="../imagen.jpg" class="img-centrada"/>
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTk2MzA0MDMyMl19
-->