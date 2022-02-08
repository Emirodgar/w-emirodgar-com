---
title: CrazyEgg no ve el contenido dinámico. Problema renderizado
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
date: 08/02/2022
permalink: crazyegg-problema-renderizado

--- 

Es bastante común que cuando disponemos de un renderizado a nivel de cliente (CSR - Client Side Rendering) algunos servicios como CrazyEgg no puedan acceder al contenido generado de forma dinámica.

Cuando intentamos analizar los datos registrados a nivel de usabilidad o los mapas de calor, sólo vemos un template vacío que se refiere al esqueleto base de la página. Lógicamente analizar eso no tiene sentido.

Esto puede ocurrir debido a que el robot de CrazyEgg o bien no ejecuta `JavaScript` (necesario para rellenar ese esqueleto vacío de manera dinámica) o no le da tiempo a que la página renderice.

Para solucionar esta situación necesitamos convertir el renderizado de CSR a SSR (Server Side Rendering) es decir, en lugar de delegar la responsabilidad en el cliente, que seamos nosotros quienes rendericemos dicha página y le enviemos la versión final a CrazyEgg. De esa forma siempre verá una versión operativa de la misma.

Para ello 
<!--stackedit_data:
eyJoaXN0b3J5IjpbOTQ0NTg1MzAyXX0=
-->