---
title: Velocidad del sitio en Google Analytics sale a cero
description: Cuando la muestra es pequeña, la métrica de velocidad del sitio puede no aparecer. Aprende a solucionarlo.
lang: es_ES
author: Emirodgar
layout: emirodgar_post
sitemap: 1
feed: 1
folder: analitica
date: 08/02/2022
image: https://emirodgar.com/cdn/images/og/analitica.png
permalink: velocidad-sitio-analytics

---

Para páginas pequeñas suele ser común que la métrica relacionada con la velocidad del sitio aparezca a cero. Eso no significa que dicha página tenga algún problema, simplemente que la muestra que ha analizado no es suficiente ni relevante.

En la [documentación oficial](https://support.google.com/analytics/answer/1205784?topic=1120718&hl=es) se especifica que la muestra usada para calcular estos valores es de tan sólo el 1%.

> De forma predeterminada, las métricas de tiempo en la página se basan en una muestra de datos del 1 % de los usuarios del sitio web

## Ajustar muestra de forma manual

Si tenemos un número relativamente pequeño de visitantes diarios a nuestra web, será recomendable **ajustar el muestreo a una tasa mayor**. Esto proporcionará una mayor granularidad para el tiempo de carga de la página y otras métricas relacionadas con la velocidad del sitio.

Para ello bastará con establecer el parámetro [siteSpeedSampleRate](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#siteSpeedSampleRate) a un valor superior al 1, que es el que trae por defecto.

```js
ga('create',  'UA-XXXX-Y',  {'siteSpeedSampleRate':  10});
```

## ¿Y en Google Analytics 4?

Este ajuste es exclusivo de Universal Analytics. GA4 no tiene un informe de "velocidad del sitio" ni un parámetro de muestreo equivalente, así que si has migrado, esta solución ya no aplica.

Para medir el rendimiento real de tus páginas en GA4 tienes dos caminos:

- **Datos de campo reales**: usa el informe de [Core Web Vitals](https://emirodgar.com/core-web-vitals-problemas) de Search Console o [PageSpeed Insights](https://pagespeed.web.dev/), que se basan en el Chrome UX Report y no en un muestreo de Analytics.
- **Tus propias métricas dentro de GA4**: puedes enviar LCP, INP y CLS como eventos personalizados con la librería [web-vitals](https://github.com/GoogleChrome/web-vitals) de Google, y así cruzarlas con tus conversiones dentro de GA4.

La pregunta ya no es cómo ajustar el muestreo, sino qué herramienta usar para medir de verdad la velocidad de tu web.