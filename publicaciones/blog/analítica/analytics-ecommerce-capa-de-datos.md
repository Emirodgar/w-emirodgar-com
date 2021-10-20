---
title: Cómo implementar el ecommerce mejorado de Google Analytics a través de la capa de datos y GTM
description: 
image: https://emirodgar.com/cdn/images/og/analitica.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: analitica
permalink: analytics-ecommerce-capa-de-datos

--- 

Google Analytics tiene varias formas de utilizar el módulo de **ecommerce mejorado** pero todas ellas requieren siempre que lo activemos a través del menú de administración > vista > comercio electrónico.

![Emirodgar](https://emirodgar.com/cdn/images/posts/analytics-ecommerce-opciones.jpg){:class="img-responsive"}


Una vez activado podremos acceder a los diferentes menús pero no tendrán información hasta que implementemos la recogida de los datos. En este artículo veremos cómo hacerlo a través de la capa de datos usando Google Tag Manager.

## 1- Crear etiqueta en Google Tag Manager

El primer paso será crear una etiqueta para [Google Analytics Universal](https://emirodgar.com/versiones-google-analytics) y después una variable "Configuración de Google Analytics". En este punto, además de incluir el ID de seguimiento deberemos activar los ajustes de comercio electrónico tal y como se muestra en la siguiente imagen.

![Emirodgar](https://i.imgur.com/KXCcIcb.png){:class="img-responsive"}

De esta forma Tag Manager recogerá los datos de ecommerce directamente desde la capa de datos y los enviará -sin procesar- a Google Analytics.

## 2- Configurar la capa de datos

El siguiente paso será lanzar la información de ecommerce a nuestra capa de datos. Para ello debemos hacer uso de la [guía oficial](https://developers.google.com/tag-manager/enhanced-ecommerce?hl=es#data-layer) para determinar qué objetivos y estructurados tenemos que usar.


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MzQxMjgxMzIsLTM5MzkyNTMwMSw3OD
QzODUxMzhdfQ==
-->