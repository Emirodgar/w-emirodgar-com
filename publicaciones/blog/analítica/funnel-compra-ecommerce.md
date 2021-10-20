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

Analytics nos permite activar para cada vista el informe de comercio electrónico. Para ello iremos a Administración, pulsaremos en la vista y haremos clic sobre `Configuración del comercio electrónico`. Bastará con que activemos ambas opciones.

![Habilitar ecommerce mejorado Analytics](https://emirodgar.com/cdn/images/posts/analytics-ecommerce-opciones.jpg){:class="img-responsive"}


### Diferencia entre Comercio electrónico y Comercio electrónico mejorado


Con el mejorado activaremos una serie de informes más especializados como Comportamiento de compra, rentabilidad económica, rendimiento de campañas o atribución de productos. Son más detallados pero también requieren de una configuración o etiquetado adicional dentro de nuestro sitio.

## Analizar el comportamiento de compra

Esta opción se habrá activado al habilitar el ecommerce mejorado y aparecerá en nuestro menú bajo las opciones de Conversiones > Comercio electrónico > Comportamiento de compra.

Si usamos algún CMS conocido, seguramente ya tenga integrado la medición con Analytics por lo que nuestros datos aparecerán. Si no es el caso, la gráfica aparecerá vacía y no tendremos visibilidad del funnel de compra dentro de nuestro sitio.

![análisis de compra ecommerce mejorado analytics vacío](https://emirodgar.com/cdn/images/posts/analytics-ecommerce-comportamiento-compra-vacio.jpg){:class="img-responsive"}

Básicamente lo que veremos serán todas las sesiones en el primer paso del embudo pero nada de información en el resto.

## Etiquetar cada paso del funnel

Lo que debemos hacer ahora es ir etiquetando de forma manual cada paso o acción del funnel. Para ello seguiremos los siguientes pasos. En este artículo he optado por utilizar la [versión Global Site Tag (gtag.js) de Google Analytics](https://emirodgar.com/versiones-google-analytics), en el caso de que tengamos otra implementada en nuestro sitio deberíamos ajustar la llamada

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

![análisis de compra ecommerce mejorado analytics correcto](https://emirodgar.com/cdn/images/posts/analytics-ecommerce-comportamiento-compra-correcto.jpg){:class="img-responsive"}

Si queremos trasladar dicha visualización a Google Data Studio bastará con hacer uso de la dimensión `Fase de compra` e importarla en cualquier gráfico de barras para disponer de un gráfico similar al que tenemos en Analytics. 

El resultado inicial en Data Studio será más básico que el informe de Analytics, pero podremos ir creando y emulando todas y cada una de las métricas así como adaptar el embudo a nuestros análisis. 

![funnel análisis de compra data studio analytics ecommerce mejorado](https://emirodgar.com/cdn/images/posts/analytics-ecommerce-comportamiento-compra-correcto-data-studio.jpg){:class="img-responsive"}

En el caso de que queramos tener los pasos de compra traducidos (por defecto en Analytics vienen en inglés), podemos hacerlo a través de una dimensión personalizada de la siguiente manera:

    CASE 
    WHEN REGEXP_MATCH (Fase de compra, "ALL_VISITS") THEN "1) Todas las sesiones" 
    WHEN REGEXP_MATCH (Fase de compra, "CHECKOUT_WITH_CART_ADDITION") THEN "4) Sesiones con Check-Out" 
    ...
    END

La siguiente acción para disponer del mismo funnel que en Analtics será crear métricas para cada paso del funnel e incluso poder obtener los porcentajes que vamos generando en cada uno de ellos; para ello crearemos varias métricas partiendo de las `sesiones` y aplicaremos filtrosde la siguiente manera:

![filtro data studio funnel compra analytics ecommerce mejorado](https://emirodgar.com/cdn/images/posts/filtro-data-studio-ecommerce.jpg){:class="img-responsive"}

Los diferentes valores de  `Fase de compra` que debemos usar son los siguientes:

 - PRODUCT_VIEW
 - ADD_TO_CART
 - CHECKOUT
 - PURCHASE

Por último, pero no menos importante, si queremos poder visualizar el porcentaje de personas que avanzan en nuestro funnel, lo podremos hacer seleccionando dos métricas de forma invertida (es decir, primero la que tiene menos valor y después la anterior), pulsamos botón derecho y seleccionamos la opción de `combinar datos`. Automáticamente aparecerá el valor que estamos buscando.

![data studio combinar datos](https://emirodgar.com/cdn/images/posts/data-studio-combinar-datos.jpg){:class="img-responsive"}
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwNDExMDU5MzMsMjgyNDk2ODA5LDk3Mz
ExMDIxMCwtMTM1MTcxNDg2MCw1MzMwOTMyMTIsLTE0NTk4MDUw
MywxNDQyMjc1MDYzLC04MTcwNDEyMjYsMTQ4NTk1MzU5XX0=
-->