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

Se trata de un uso optimizado de elementos HTML, JavaScript y CSS que facilitan esa **buena experiencia por parte de los usuarios**. El tiempo de carga, asociado a la experiencia de los usuarios es uno de los [factores SEO](https://emirodgar.com/factores-seo) que nos ayudarán a mejorar nuestro posicionamiento web.

Para lograrlo este framework se basa en los siguientes puntos:

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
        <link rel="canonical" href="https://ejemplo.com/pagina-original">
        <meta name="viewport" content="width=device-width">
        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
      </head>
      <body>
        <h1>Prueba AMP</h1>
      </body>
    </html>

Lo que necesitamos hacer es identificar nuestra página como contenido AMP y para ello se utiliza el término `amp` en la etiqueta `html` y, además, debemos cargar la librería JavaScript de AMP.

    <html amp>
    <script async src="https://cdn.ampproject.org/v0.js"></script>

En el caso de que sea una versión AMP de una página existente en otra tecnología que no es AMP necesitamos incluir la [etiqueta canonical](https://emirodgar.com/etiqueta-canonica) para que los buscadores sepa cuál es su equivalente. Si todo nuestro sitio es AMP no sería necesario aplicarla.

    <link rel="canonical" href="https://ejemplo.com/">

En el caso de que tengamos ambas versiones, en la página original tendremos que añadir la etiqueta `amphtml` para que los [robots de búsqueda](https://emirodgar.com/detectar-googlebot) puedan identificar la versión AMP de la misma.

    <link rel="amphtml" href="https://ejemplo.com/pagina-amp">

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTkyMTA4NDUxNSwtMTM4MDc2MjQ4NF19
-->