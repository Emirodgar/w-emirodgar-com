---
title: SEO: Mejorar el tiempo de carga de una web
description: El tiempo de carga es un factor clave para las estrategias de posicionamiento web
image: https://emirodgar.com/cdn/images/og/marketing-digital.png
date: 27/08/2019
author: Emirodgar
lang: es_ES
permalink: mejorar-tiempo-carga-web

---

# SEO: Mejorar el tiempo de carga de una web

Desde el [cambio de algoritmo Mobile First Index](https://emirodgar.com/cambio-algoritmo-google), el tiempo de carga de una página web pasó a ser un [factor SEO](https://emirodgar.com/factores-seo) importante en cualquier estrategia de posicionamiento.

Si queremos disponer de una página cuyo tiempo de carga sea rápido y que nos permita mejorar posicionamiento, captación y conversión, estos son los puntos que deberíamos de trabajar.

## 1. Hosting

El [hosting afecta al SEO](https://emirodgar.com/hosting-seo) por lo que el servidor donde tengamos alojada nuestra página web es el primer aspecto que debemos trabajar. Un servidor profesional nos ofrecerá buenos tiempos de conexión por lo que antes de contratarlo conviene conocer qué valor de **Time to First Byte** (TTFB) ofrece.

>[Web server perfomance test](https://www.dotcom-tools.com/web-server-performance-test.aspx) nos ayudará a validar el tiempo de carga asociado a un hosting.
>
Si tarda mucho en servir nuestra página web, el resto de carga se verá afectado por lo que garantizar un rápido envío del primer byte es crucial para un correcto tiempo de carga.

Si nuestro servidor web no los permite, podemos instalar el [módulo PageSpeed de Google](https://developers.google.com/speed/pagespeed/module/?hl=es-419) que automáticamente configurará una serie de parámetros para optimizar el sitio web.

## 2. Elementos multimedia

Tanto imágenes como vídeos pueden provocar que nuestra página sea más lenta de lo necesario. A este respecto hay varias cosas que podemos hacer:

 1. [Carga selectiva (lazy load)](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/?hl=es) en base a lo que se va mostrando en pantalla. En lugar de cargar todas las imágenes o vídeos de golpe, únicamente cargamos aquellas que entran en el campo de visión del usuario. A medida que hace scroll, vamos cargando las siguientes.
 2. Hacer uso de los nuevos formatos de imágenes como [webp](https://developers.google.com/speed/webp/) para mejorar la velocidad.
 3. [Comprimir las imágenes](https://web.dev/use-imagemin-to-compress-images) para que ocupen menos espacio. Podemos hacer uso de [ImageOptim](https://imageoptim.com/mac), [Squossh](https://squoosh.app/) o [Compressor.io](https://compressor.io/)
 4. Usar [imágenes con las dimensiones adecuadas](https://web.dev/serve-images-with-correct-dimensions). No tiene sentido poner una imagen grande si la vamos a mostrar en pequeño. Para páginas multidispositivo es importante aprender a utilizar las [imágenes adaptativas](https://web.dev/uses-responsive-images/).

> También es importante [optimizar las imágenes ](https://emirodgar.com/optimizacion-imagenes-seo) para que aporten valor a la estrategia SEO.

## Comprimir los recursos

Hay ciertos recursos que creamos una vez y no volvemos a utilizar. Por ello se recomiendo comprimirlos al máximo (quitando espacios, comentarios o saltos de línea) para que ocupen el menor tamaño posible.

 - [Comprimir el código CSS](https://web.dev/unminified-css/). Recomiendo [CSSnano](https://github.com/ben-eb/cssnano) o [CSSO](https://github.com/css/csso). 
 - [Comprimir el código Javascript](https://web.dev/unminified-javascript/). Podemos usar [UglifyJS](https://github.com/mishoo/UglifyJS2).
 - [Comprimir el código HTML](http://minifycode.com/html-minifier/)

> Mucho ojo con [bloquear el acceso de los buscadores a los ficheros CSS y JS](https://emirodgar.com/bloquear-indexacion-js-css) puesto que podría afectar a nuestra estrategia SEO.

## Eliminar aquello que no utilizamos

## Herramientas para validar el tiempo de carga

Podemos hacer uso de aplicaciones como [Web.dev](https://web.dev) (basada en [Google Lighthouse](https://emirodgar.com/automatizar-analisis-lighthouse)) o [GTMetrix](https://gtmetrix.com/) para conocer qué puntos debemos otimizar en nuestra web.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgzNzU0MjYyMCwtNTUwNzM0MDc4XX0=
-->