---
title: ¿Qué beneficio tiene el AMP para el SEO?
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
permalink: amp

--- 

El framework **AMP** (Accelerated Mobile Pages) es un proyecto Open Source desarrollo por Google para facilitar la creación de páginas web optimizadas para cargar rápidamente en dispositivos móviles.

Se trata de un uso optimizado de elementos HTML, JavaScript y CSS que facilitan esa buena experiencia por parte de los usuarios. Para lograrlo este framework se basa en los siguientes puntos:

- Ejecución asíncrona del código JavaScript
- Dimensión estática de todos los recursos (imágenes, anuncios, iframes, etc)
- No permite scripts que bloqueen la renderización
- Cualquier código JavaScript externo queda fuera de la ruta crítica de ejecución
- Los códigos CSS están integrados en la página y tienen un tamaño máximo
- Optimizado el uso de fuentes web
- Reducción de los recálculos de estilo
- Las animaciones se ejecutan mediante GPU en lugar de navegador
- Prioriza la carga de recursos

## Cómo implementar una página web AMP

Lo primero que tenemos que tener claro es si nuestra página va a ser AMP o si vamos a generar una versión AMP de la ya existente. 

Ambas aproximaciones son válidas y la única diferencia es que en el segundo caso tendremos que incluir unas cabeceras para que los buscadores entiendan la relación entre la versión normal de la página y la versión AMP.

Un código básico para generar nuestra primera versión AMP será el siguiente:

    <!doctype html>
    <html amp lang="es">
      <head>
        <meta charset="utf-8">
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <title>Hello, AMPs</title>
        <link rel="canonical" href="https://paginaoriginal.com/">
        <meta name="viewport" content="width=device-width">
        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
      </head>
      <body>
        <h1>Prueba AMP</h1>
      </body>
    </html>

Lo que necesitamos incluir
<!--stackedit_data:
eyJoaXN0b3J5IjpbMzM4OTU4OTc0LC0xMzgwNzYyNDg0XX0=
-->