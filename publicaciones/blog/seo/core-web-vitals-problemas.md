---
title: Core Web Vitals: Problemas y soluciones
description: 
image: https://emirodgar.com/cdn/images/og/auditoria.png
layout: emirodgar_post
author: Emirodgar
sitemap: 1
feed: 1
folder: seo
lang: es_ES
permalink: core-web-vitals-problemas

---

## ¿Pueden ser los valores de las Core Web Vitals peores en Desktop que en Mobile?

Aunque por norma general los resultados de tiempo de carga y experiencia de usuario en dispositivos móviles suelen ser peores que en escritorio, a veces ocurre que no es así. 

Como podemos observar en la siguiente imagen, los **datos de campo** en los que se basa este informe de Google Search Console muestras una mayoría de URLs correctas para la versión móvil pero un gran bloque de URLs que necesitan mejorar para la versión de escritorio.

![Emirodgar](https://i.imgur.com/5MeNWZy.png){:class="img-responsive"}

**¿Cómo podemos abordar esta situación?**. Lo primero es entender que cada bloque analizado (desktop y mobile) es calculado en base a un subconjunto de usuarios diferentes según el dispositivo con el que se han conectado. En este caso sabemos que la versión de escritorio tiene problemas para disponer de una buena experiencia de usuario (lo vemos reflejado en la imagen anterior). 

Estas son algunas de las razones que podrían explicar un peor rendimiento en escritorio frente a móvil: 

- **La velocidad de conexión de los usuarios de escritorio**: si los usuarios que acceden desde escritorio lo hacen con ordenadores antiguos y/o conexiones lentas, podría explicar esta situación.
- **La geolocalización de los usuarios de escritorio**: si el 80% de nuestros usuarios son móviles y el 20% de ordenador principalmente provienen de un país extranjero con mala conexión, explicaría el porqué estamos generando estos errores.
- La publicidad que se incluye en la versión de escritorio: en muchas ocasiones las versiones de escritorio ofrecen mucha
- Si disponemos de una versión responsive (misma web para cualquier dispositivo) puede ser que en la versión móvil se eliminen elementos pesados que hacen una versión rápida y cómoda pero que en escritorio, al mantenerlos, repercutan en su tiempo de carga.


Por tanto, nuestra primera acción debe ser analizar la versión de escritorio y la versión móvil por separado para conocer el desempeño que están teniendo.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTU4OTQzMTQwMl19
-->