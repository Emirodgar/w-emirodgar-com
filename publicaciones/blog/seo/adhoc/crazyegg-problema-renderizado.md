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

Es bastante común que cuando disponemos de un renderizado a nivel de cliente (`CSR` - Client Side Rendering) algunos servicios como CrazyEgg no puedan acceder al contenido generado de forma dinámica.

Cuando intentamos analizar los datos registrados a nivel de usabilidad o los mapas de calor, sólo vemos un template vacío que se refiere al esqueleto base de la página. Lógicamente, analizar eso no tiene sentido.

## ¿Por qué falla CrazyEgg?

Esto puede ocurrir debido a que el robot de CrazyEgg o bien no ejecuta `JavaScript` (necesario para rellenar ese esqueleto vacío de manera dinámica) o no le da tiempo a que la página renderice.

## ¿Cuál es la solución?

Para solucionar esta situación necesitamos convertir el renderizado de `CSR` a `SSR` (Server Side Rendering) es decir, en lugar de delegar la responsabilidad en el cliente, que seamos nosotros quienes rendericemos dicha página y le enviemos la versión final a CrazyEgg. De esa manera siempre verá una versión operativa de la misma.

Hay múltiples maneras de realizar SSR, aunque quizá una de las más rápidas y sencillas sea delegar la responsabilidad en un servicio externo como [prerender.io](https://prerender.io).

Sólo necesitamos identificar correctamente el acceso del robot de CrazyEgg para mostrarle la versión renderizada de la página que previamente hemos hecho (`SSR`). El resto de visitantes seguirá recibiendo la versión estática que deben renderizar (`CRS`) por lo que para ellos no habrá ninguna diferencia.

### Identificar el robot de CrazyEgg

Para identificar el robot de usa CrazyEgg podemos hacer uso del log de acceso para identifcar el user-agent que ha utilizado. En mi caso 
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNDY3OTk2MTgsMTM0NDg3MzU0MywtMT
E5NjYyMTc1MF19
-->