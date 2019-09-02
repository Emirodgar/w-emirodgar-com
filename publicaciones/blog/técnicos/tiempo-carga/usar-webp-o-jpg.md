---
title: Usar formato Webp cuando un navegador no es compatible
description: De esta forma podremos hacer uso del formato webp de Google en cualquier navegador web
lang: es_ES
author: Emirodgar
tags: seo, google, performance
date: 17/05/2019
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: webp-compatibilidad

---

# Usar formato Webp cuando un navegador no es compatible

Webp es un [nuevo formato de imagen](https://developers.google.com/speed/webp/) desarrollado por Google que ofrece un ratio de compresión un 25% mayor que un PNG y entre 25%-34% que el JPEG.

Utilizar WebP es nuestras páginas web nos ayudará a [mejorar el tiempo de carga](https://emirodgar.com/mejorar-tiempo-carga-web) y ofrecer una mejor experiencia a nuestros usuarios.

Por desgracia [no todos los navegadores ofrecen aún soporte](https://caniuse.com/#search=webp) a este nuevo formato por lo que en muchos casos tendremos que utilizar ambos formatos.

La forma correcta de hacerlo será la siguiente:

```
<picture>
   <source style="visibility: visible; opacity: 1; display: block;" srcset="cdn/images/2.webp" type="image/webp">
   <img style="visibility: visible; opacity: 1; display: block;" src="cdn/images/2.jpg" alt="Telefónica">
</picture>
```

De esta forma, si el navegador sí permite los WebP, cargará primero dicho formato. En el caso de no saber interpretarlo cargará las imágenes en jpg.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjMzMzkyMTksLTE0OTk4MjAwMjBdfQ==
-->