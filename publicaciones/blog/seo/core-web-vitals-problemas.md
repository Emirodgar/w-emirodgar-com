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

**¿Cómo podemos abordar esta situación?**. Lo primero es entender que cada bloque (desktop y mobile) es calculado en base a un subconjunto de usuarios diferentes. En este caso sabemos que la versión de escritorio tiene problemas para disponer de una buena experiencia de usuario. En este escenario hay múltiples aspectos que pueden estar condicionando este punto: 

- La velocidad de conexión de los usuarios de escritorio.
- La geolocalización de los usuarios de escritorio.
- La publicidad que se incluye en la versión de escritorio.
- Si disponemos de una versión responsive (misma web para cualquier dispositivo) puede ser que en la versión móvil se eliminen elementos pesados que hacen una versión rápida y cómoda pero que en escritorio, al mantenerlos, repercutan en su tiempo de carga.


Por tanto, nuestra primera acción debe ser analizar la versión de escritorio y la versión móvil por separado para conocer el desempeño que están teniendo.

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTMwMzExNTk2N119
-->