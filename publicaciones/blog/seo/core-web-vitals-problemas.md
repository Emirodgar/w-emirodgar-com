---
title: Core Web Vitals: Problemas y soluciones
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
date: 19/05/2021
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
permalink: core-web-vitals-problemas

---

Las Core Web Vitals son una serie de métricas que utiliza Google para garantizar una correcta experiencia de los usuarios en una pági un [factor SEO](https://emirodgar.com/factores-seo) (aunque no uno de los más relevantes)

## ¿Pueden ser los valores de las Core Web Vitals peores en Desktop que en Mobile?

Aunque por norma general los resultados de tiempo de carga y experiencia de usuario en dispositivos móviles suelen ser peores que en escritorio, a veces ocurre que no es así. 

Como podemos observar en la siguiente imagen, los **datos de campo** en los que se basa este informe de Google Search Console muestras una mayoría de URLs correctas para la versión móvil pero un gran bloque de URLs que necesitan mejorar para la versión de escritorio.

![Emirodgar](https://i.imgur.com/5MeNWZy.png){:class="img-responsive"}

**¿Cómo podemos abordar esta situación?**. Lo primero es entender que cada bloque analizado (desktop y mobile) es calculado en base a un subconjunto de usuarios diferentes según el dispositivo con el que se han conectado. En este caso sabemos que la versión de escritorio tiene problemas para disponer de una buena experiencia de usuario (lo vemos reflejado en la imagen anterior). 

Estas son algunas de las razones que podrían explicar un peor rendimiento en escritorio frente a móvil: 

- **La velocidad de conexión de los usuarios de escritorio**: si los usuarios que acceden desde escritorio lo hacen con ordenadores antiguos y/o conexiones lentas, podría explicar esta situación.
- **La geolocalización de los usuarios de escritorio**: si el 80% de nuestros usuarios son móviles y el 20% de ordenador principalmente provienen de un país extranjero con mala conexión, explicaría el porqué estamos generando estos errores.
- **La publicidad que se incluye en la versión de escritorio**: en muchas ocasiones las versiones de escritorio ofrecen mucha publicidad y las móviles, para facilitar el uso, reducen el número. Eso explicaría también esta situación.
- **Si disponemos de una versión responsive** (misma web para cualquier dispositivo) puede ser que en la versión móvil se eliminen elementos pesados que hacen una versión rápida y cómoda pero que en escritorio, al mantenerlos, repercutan en su tiempo de carga.


Por tanto, nuestra primera acción debe ser analizar la versión de escritorio y la versión móvil por separado para conocer el desempeño que están teniendo. Podemos hacerlo a través de las aplicaciones https://pagespeed.web.dev/ o https://gtmetrix.com/.

El objetivo será entender si existe un problema de tiempo de carga en escritorio frente a mobile. Después recomiendo usar el [dashboard de CrUX](https://web.dev/chrome-ux-report-data-studio-dashboard/) para poder analizar la evolución de las Core Web Vitals en el tiempo y entender así si esta situación ha ocurrido de forma repentina (como parece mostrar Google Search Console) o si ha ido avanzando poco a poco. El hecho de ubicar un momento en el tiempo en el que todo cambió nos ayudará a identificar las posibles causas. Si ha sido algo progresivo, entonces sabemos que nuestra página no ha envejecido bien y que tendremos que aplicar cambios y mejoras para mejorar la experiencia que ofrecemos a los usuarios.

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA2MzQyMjEzOSwtMTA0NzA2MTMwM119
-->