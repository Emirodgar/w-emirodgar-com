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

Este paso lo llevaremos a cabo ejecutando el siguiente código JavaScript con la opción `view_item` siempre que consideremos que el usuario está visualizando los detalles de un producto. Lo podemos hacer al acceder sin más a una página de producto o si el usuario ha hecho clic en un desplegable para visualizar toda la información del mismo. 

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
          "quantity": 1,
          "price": '2.0'
        }
      ]
    });

Lo importante es entender cuándo lo queremos medir para que nuestros posteriores análisis tengan sentido.

### Etiquetar añadir al carrito

El siguiente paso del funnel será añadir al carrito un producto. Cuando esto ocurra ejecutaremos el siguiente código JavaScript que invoca al evento `add_to_cart`. Fijaros que los datos a enviar bajo `items` son los mismos que en el paso anterior por lo que hecho para uno, sólo tendremos que cambiar el evento de Analytics.

    gtag('event', 'add_to_cart', {
      "items": [
        {
          "id": "P12345",
          "name": "Camiseta roja",
          "list_name": "Search Results",
          "brand": "H&M",
          "category": "Camiseta",
          "variant": "Roja",
          "list_position": 1,
          "quantity": 1,
          "price": '2.0'
        }
      ]
    });

También podemos etiquetar la retirada de un producto del carrito, aunque éste no se verá reflejado en el funnel de comportamiento de compra.

### Etiquetar el checkout (proceso de verificar datos)

El siguiente paso de nuestro embudo de compra invocará al evento `begin_checkout` para indicar que se ha comenzado el proceso de verificación de los datos y selección de pago. Deberemos ejecutarlo cuando el usuario pulse sobre el botón de pagar o en el último paso antes de terminar con la compra. Con esto será suficiente para avanzar en el registro de información de nuestro funnel pero si queremos tener más detalle en Analytics -que no en este embudo- también podemos usar los eventos `checkout_progress` para monitorizar cambios en los productos antes de pagar (como cantidades, cupones, etc) o `set_checkout_option` para medir las opciones de pago.

    gtag('event', 'begin_checkout', {
      "items": [
        {
              "id": "P12345",
              "name": "Camiseta roja",
              "list_name": "Search Results",
              "brand": "H&M",
              "category": "Camiseta",
              "variant": "Roja",
              "list_position": 1,
              "quantity": 1,
              "price": '2.0'
        }
      ],
      "coupon": ""
    });

### Etiquetar el final de la compra

Este será nuestro paso final. Para ello haremos uso de la opción `purchase` con la registraremos correctamente la venta en Analytics.

    gtag('event', 'purchase', {
      "transaction_id": "24.031608523954162",
      "affiliation": "Google online store",
      "value": 2.0,
      "currency": "USD",
      "tax": 1.24,
      "shipping": 0,
      "items": [
        {
           "id": "P12345",
           "name": "Camiseta roja",
           "list_name": "Search Results",
           "brand": "H&M",
           "category": "Camiseta",
           "variant": "Roja",
           "list_position": 1,
           "quantity": 1,
           "price": '2.0'
        }
      ]
    }); 

## Visualizar la información en Google Analytics y Data Studio

Si accedemos ahora a nuestro informe en Analytics veremos que la información aparece correctamente registrada.

![enter image description here](https://i.imgur.com/YvsGyNS.png)

Si queremos trasladar dicha visualización a Google Data Studio bastará con hacer uso de la dimensión `Fase de compra` e importarla en cualquier gráfico de barras para disponer de un gráfico similar al que tenemos en Analytics.

También podemos crear nuestra propia dimensión personalizada y añadir ahí las fases del comportamiento de compra que queramos analizar así como traducir los nombres de cada paso que Analytics trae por defecto. Esto sería por ejemplo un añadido frente al funnel por defecto de Analytics. Para ello bastaría con tener una agrupación similar a la siguiente:

    CASE 
    WHEN REGEXP_MATCH (Fase de compra, "ALL_VISITS") THEN "1) Todas las sesiones" 
    WHEN REGEXP_MATCH (Fase de compra, "CHECKOUT_WITH_CART_ADDITION") THEN "4) Sesiones con Check-Out" 
    WHEN REGEXP_MATCH (Fase de compra, "CHECKOUT_WITHOUT_CART_ADDITION") THEN "4) Sesiones sin Check-Out" 
    WHEN REGEXP_MATCH (Fase de compra, "ADD_TO_CART_WITHOUT_VIEW") THEN "3) Sesiones con carrito" 
    WHEN REGEXP_MATCH (Fase de compra, "ADD_TO_CART_WITH_VIEW") THEN "3) Sesiones sin carrito" 
    WHEN REGEXP_MATCH (Fase de compra, "TRANSACTION") THEN "5) Sesiones completadas" 
    WHEN REGEXP_MATCH (Fase de compra, "PRODUCT_VIEW") THEN "2) Sessions son vistas de producto" 
    END

El resultado que podríamos visualizar en Data Studio sería similar al siguiente
![enter image description here](https://i.imgur.com/CAqsYMe.png)

Si queremos emular el funnel con métricas independientes o incluso para poder obtener los porcentajes que vamos generando en cada paso, lo podemos hacer aplicando filtros sobre las sesiones de la siguiente manera:

![enter image description here](https://i.imgur.com/OQRscUh.png)

En nuestro caso tendríamos que crear cuatro métricas que contengan las `sesiones` y filtrar cada una de ellas por la `Fase de compra` tal como se muestra en la imagen anterior haciendo uso de los siguientes términos:

 - PRODUCT_VIEW
 - ADD_TO_CART
 - CHECKOUT
 - PURCHASE

Por último, pero no menos importante, si queremos
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1NTczNjAzMDcsLTgxNzA0MTIyNiwxND
g1OTUzNTldfQ==
-->