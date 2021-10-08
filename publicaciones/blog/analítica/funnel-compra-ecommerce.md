---
title: Cómo crear un funnel de compra para el ecommerce de Google Analytics y visualizarlo en Data Studio 
description: 
image: https://emirodgar.com/cdn/images/og/analitica.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: analitica
permalink: funnel-compra-ecommerce

--- 

Recoger la información adecuada nos permitirá hacer un análisis de calidad y obtener información de valor. Si el primer paso falla, el resto del proceso no será riguroso y podría llevarnos a tomar decisiones de negocio equivocadas.

En este artículo os enseñaré a configurar correctamente el funnel o embudo del proceso de compra de Google Analytics así como su visualización dentro de Google Data Studio. 

## Activar Comercio electrónico 

Analytics nos permite activar para cada vista el informe de comercio electrónico. Para ello iremos a Administración, pulsaremos en la vista y haremos clic sobre `Configuración del comercio electrónico`. 

Aquí bastará con que activemos ambas opciones.

![enter image description here](https://i.imgur.com/EAMLmS8.png)


### Diferencia entre Comercio electrónico y Comercio electrónico mejorado


Con el mejorado activaremos una serie de informes más especializados como Comportamiento de compra, rentabilidad económica, rendimiento de campañas o atribución de productos. Son más detallados pero también requieren de una configuración o etiquetado adicional dentro de nuestro sitio.

## Analizar el comportamiento de compra

Esta opción se habrá activado al habilitar el ecommerce mejorado y aparecerá en nuestro menú bajo las opciones de Conversiones > Comercio electrónico > Comportamiento de compra.

Si usamos algún CMS conocido, seguramente ya tenga integrado la medición con Analytics por lo que nuestros datos aparecerán. Si no es el caso, la gráfica aparecerá vacía y no tendremos visibilidad del funnel de compra dentro de nuestro sitio.

![enter image description here](https://i.imgur.com/Z3q49EC.png)

Básicamente lo que veremos serán todas las sesiones en el primer paso del embudo pero nada de información en el resto.

## Etiquetar cada paso del funnel

Lo que debemos hacer ahora es ir etiquetando de forma manual cada paso o acción del funnel. Para ello seguiremos los siguientes pasos.

### Etiquetar sesiones con vistas del producto

Este paso lo llevaremos a cabo con la opción `view_item` y ejecutaremos el siguiente código JavaScript siempre que consideremos que el usuario está visualizando los detalles de un producto. Lo podemos hacer al acceder sin más a una página de producto o si debe hacer clic en un desplegable para visualizar toda la información del mismo. 

    gtag('event', 'view_item', {
      "items": [
        {
          "id": "P12345",
          "name": "Camiseta roja",
          "list_name": "Search Results",
          "brand": "H&M",
          "category": "Camiseta",
          "variant": "Roja",
          "list_position": 1,
          "quantity": 2,
          "price": '2.0'
        }
      ]
    });

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4NTA4NDA1NSwxNDg1OTUzNTldfQ==
-->