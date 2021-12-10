---
title: Cómo monitorizar el stock en un Ecommerce a través de Google Analytics
description: 
image: https://emirodgar.com/cdn/images/og/analitica.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: analitica
permalink: monitorizar-stock-ecommerce-analytics

--- 

Google Analytics es una plataforma grande y fiable que nos permite, además de trabajar con los valores por defecto, añadir dimensiones y métricas personalizadas. Esto nos ayuda a cualificar los datos de la plataforma y a disponer de informes personalizados y adaptados a nuestro negocio.

## Crear una dimensión personalizada

Para poder monitorizar el stock de nuestros productos lo primero que tendremos que hacer será crear la dimensión personalizada en Analytics. Lo haremos desde el panel de administración; dentro de la fila de propiedad, pulsamos sobre `Definiciones personalizadas` y luego sobre `Dimensiones personalizadas`.  

**¿Por qué lo hacemos como dimensión y no como métrica?** porque posteriormente querremos analizar cuánta gente ha visitado productos sin stock o desde qué campañas/canales se ha originado dicho tráfico.

A la hora de crear una dimensión personalizada tenemos que especificar el nombre (yo recomiendo usar `ecomm_stock` para poder diferenciar que se trata de una dimensión asociada al comercio electrónico) y el ámbito. En este caso, necesitamos especificar el ámbito de `Producto` puesto que esta nueva dimensión se relacionará con ello.

![Analytics dimensión personalizada stock](https://i.imgur.com/6AnrUiJ.png){:class="img-responsive"}

Antes de guardar los cambios aseguraros de que la dimensión está activa.

## Asignar el valor de stock

El siguiente paso requerirá conocimientos técnicos para poder insertar el valor de `stock` o sin `stock` en la dimensión que hemos creado. Para ello tenemos dos formas.

### A través de la capa de datos







<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA3NDg4MjM1N119
-->