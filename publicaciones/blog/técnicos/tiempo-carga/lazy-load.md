---
title: Aplicar Lazy Load para cargar imágenes bajo demanda
description: Esta técnica nos ayudará a mejorar el tiempo de carga
lang: es_ES
author: Emirodgar
tags: seo, google, tecnico
date: 10/09/2019
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: lazy-load-carga-bajo-demanda-imagenes

---

# Aplicar Lazy Load para cargar imágenes bajo demanda

La técnica **Lazy Load** consiste en **cargar elementos de una página web bajo demanda**, es decir, cuando se van a utilizar.

Cuando accedemos a una página, por defecto descargamos todos los elementos que la componen, lo usemos o no. Si disponemos de un portfolio de clientes a mitad de la página y un 60% de la gente nunca llega a dicha sección, habremos descargado siempre las imágenes para nada.

A través de la **carga bajo demanda** únicamente cargaremos dichas imágenes si el usuario llega hasta ellas mejorando sustancialmente el [tiempo de carga de la web](https://emirodgar.com/mejorar-tiempo-carga-web) y ofreciendo una experiencia gratificante a nuestros usuarios.

Para poder llevar a cabo esta técnica tendremos que incluir el fichero [lazysizes.min.js](https://raw.githubusercontent.com/aFarkas/lazysizes/gh-pages/lazysizes.min.js) en nuestra web. Primero lo descargamos del enlace anterior y después lo incluimos de la siguiente forma

```html
<script src="[ruta]/js/lazysizes.min.js" async></script>
```

Ahora tendremos que ir a las imágenes que queremos cargar bajo demando e incluir los siguientes cambios:

```html
~~<img src="cdn/images/clients/melia-hoteles.jpg" alt="Estrategia SEO Meliá Hoteles">~~
<img data-src="cdn/images/clients/melia-hoteles.jpg"  class="lazyload" alt="Estrategia SEO Meliá Hoteles">
```

Básicamente hemos cambiado ```src``` por ```data-src``` y hemos incluido la clase lazyload ```class="lazyload"```. Ya no es necesario hacer nada más.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTk3NzE5Njc4NF19
-->