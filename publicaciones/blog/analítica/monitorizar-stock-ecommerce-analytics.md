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

Cuando hagamos uso del array `products` dentro del evento `ecommerce` podremos especificar nuestra nueva dimensión y su valor asociado. Lo único que tenemos que tener en cuenta es que debemos usar `dimension[valor]` donde valor es un valor numérico entre  1 y 20 que corresponde al índice de Analytics. Si es nuestra primera dimensión personalizada, deberemos usar `dimension1`, como en el ejemplo a continuación.

      'products': [{
        'name': 'Triblend Android T-Shirt',        
        'id': '12345',
        'price': '15.25',
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Gray',
		'dimension1':'Stock'
       }]


En el código anterior ya hemos enviado la información en el array productos pero necesitamos asociar el análisis a un evento o momento dentro del proceso de compra del ecommerce. En nuestro caso, al tratarse de un análisis para saber si hay o no stock, sólo podremos hacerlo al visitar la ficha del producto pero nunca al añadir el carrito o comprar ya que si no hay stock, son acciones que no se pueden llevar a cabo.

Para ello nos apoyaremos en el evento [`detail`](https://developers.google.com/tag-manager/enhanced-ecommerce?hl=es#details) del ecommerce mejorado

    dataLayer.push({
      'ecommerce': {
        'detail': {
          'actionField': {'list': 'Apparel Gallery'},    
          'products': [{
            'name': 'Triblend Android T-Shirt',        
            'id': '12345',
            'price': '15.25',
            'brand': 'Google',
            'category': 'Apparel',
            'variant': 'Gray',
    		'dimension1':'Stock'
           }]
         }
       }
    });

Ahora, cada vez que se visualice un producto, sabremos si tenía o no stock.

### A través del objeto gtag

La otra forma que tenemos de enviar esta información es directamente con el objeto `gtag` de [Analytics Universal](https://emirodgar.com/versiones-google-analytics).

En este caso usaremos el evento `view_item_list` para enviar la información del array `items` que incluye 

gtag('event', 'view_item_list', {
  "items": [
    {
      "id": "P12345",
      "name": "Android Warhol T-Shirt",
      "list_name": "Search Results",
      "brand": "Google",
      "category": "Apparel/T-Shirts",
      "variant": "Black",
      "list_position": 1,
      "quantity": 2,
      "price": '2.0',
	  "dimension1": 'Sin stock'  
    }
  ]
});
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjg3NDcwMjI5LDE1MjM4NjcyMzcsMTA3ND
g4MjM1N119
-->