---
title: Cómo implementar una métrica personalizada en Google Analytics con gtag.js
description: 
image: https://emirodgar.com/cdn/images/og/analitica.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: analitica
permalink: analytics-metrica-personalizada

--- 

Google Analytics nos permite incorporar tanto dimensiones como métricas personalizadas para ampliar las que trae por defecto. Esto nos permitirá adaptar la plataforma de medición a nuestra realidad y aportar información relevante para nuestra empresa.

## Dar de alta la métrica o dimensión

Para poder crear la métrica o dimensión personalizada, lo tendremos que hacer a través del panel de administración. Dentro de la fila de `propiedades` vamos a `Definiciones personalizadas` y luego sobre `Métricas personalizadas` 

Aquí tendremos que definir el nombre, el ámbito y el tipo de formato. Quizá lo más relevante en el caso de las métricas personalizadas sea el ámbito, donde podemos elegir entre `producto` o `hit`.

## Enviar la información a Analytics

Este punto dependerá de la [versión de Google Analytics](https://emirodgar.com/versiones-google-analytics) que estemos usando. Para el caso de GA4 o Global Site Tag (ambos usan `gtag.js`) podemos hacerlo de dos formas.

### Enviarlo asociado a la configuración

Imaginemos que vamos a usar la métrica número 1 que se identifica en Analytics como `metrica1`.

    gtag('config',  'GA_MEASUREMENT_ID',  
     {  'custom_map':  {'metrica1':  'valor'}  
    });  

  
### Enviarlo como evento
  
En el caso de que queramos enviarlo asociado a un evento, 
gtag('event',  'any_event_name',  {'dimension_name': dimension_value});

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTc1NDI3MjEzNSwtMTE3ODIxNDI2MSwtMT
A5NDQ4Njg5NSwtMjcwNjE5MzU0XX0=
-->