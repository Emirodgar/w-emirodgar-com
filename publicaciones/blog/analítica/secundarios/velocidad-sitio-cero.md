---
title: Velocidad del sitio en Google Analytics sale a cero
description: Cuando la muestra es pequeña, la métrica de velocidad del sitio puede no aparecer. Aprende a solucionarlo.
lang: es_ES
author: Emirodgar
layout: emirodgar_post_test
sitemap: 1
feed: 1
folder: analitica
date: 10/05/2021
image: https://emirodgar.com/cdn/images/og/analitica.png
permalink: velocidad-sitio-analytics

---

Para páginas pequeñas suele ser común que la métrica relacionada con la velocidad del sitio aparezca a cero. Eso no significa que dicha página tenga algún problema, simplemente que la muestra que ha analizado no es suficiente.

En la [documentación oficial](https://support.google.com/analytics/answer/1205784?topic=1120718&hl=es) se especifica que la muestra usada para calcular estos valores es de tan sólo el 1%.

> De forma predeterminada, las métricas de tiempo en la página se basan en una muestra de datos del 1 % de los usuarios del sitio web

## Ajustar muestra de forma manual

Si tenemos un número relativamente pequeño de visitantes diarios a nuestra web, será recomendable **ajustar el muestreo a una tasa mayor**. Esto proporcionará una mayor granularidad para el tiempo de carga de la página y otras métricas relacionadas con la velocidad del sitio.

Para ello bastará con establecer el parámetro [siteSpeedSampleRate](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#siteSpeedSampleRate) a un valor superior al 1 que trae por defecto.

```js
ga('create',  'UA-XXXX-Y',  {'siteSpeedSampleRate':  10});
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTQ5MDA1NTI0XX0=
-->