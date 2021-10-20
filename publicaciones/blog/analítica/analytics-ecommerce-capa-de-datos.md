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

El siguiente paso será lanzar la información de ecommerce a nuestra capa de datos. Para ello debemos hacer uso de la [guía oficial](https://developers.google.com/tag-manager/enhanced-ecommerce?hl=es#data-layer) para determinar qué objetos y estructuras tenemos que usar. Si utilizamos un nombre diferente o la estructura de JavaScript no es la adecuada tendremos problemas para registrar la información en Analytics.

Por defecto, el nombre del objeto utilizado por GTM para trabajar con la capa de datos es **dataLayer**. Para enviar información a la capa de datos utilizaremos el comando `push` de la siguiente manera: 

```js
    dataLayer.push({ nombre:  valor  });
```

Podemos [cambiar el nombre del objeto dataLayer](https://emirodgar.com/cambiar-nombre-datalayer) por otro que nos guste más o para personalizar nuestra implementación y evitar choques con otros códigos que hagan uso del mismo objeto.

### 2.1 - Inicializar el valor del objeto ecommerce

Siempre que vayamos a enviar información relativa al comercio electrónico es recomendable vaciar/limpiar el objeto `ecommerce` para asegurarnos que no se mezcla información de peticiones anteriores. Lo haremos asignando el valor `null` a dicho objeto.

```js
    dataLayer.push({ ecommerce:  null  });
```

Una vez iniciado dicho objeto, podemos enviar información a través del objeto `ecommerce` que será recogida y enviada a Google Analytics. Las opciones que tenemos son las siguientes:

 - Impresiones de producto
 - Clics en producto
 - Impresiones de detalles de producto
 - Añadir o quitar productos del carrito
 - Impresiones de promociones
 - Clics en promociones
 - Tramitación de la compra
 - Compras
 - Reembolsos

Tan sólo tendremos que hacer uso de los códigos de ejemplo que nos ofrecen en la [guía oficial](https://developers.google.com/tag-manager/enhanced-ecommerce?hl=es#data-layer) para enviar la información y que aparezca en Google Analytics.

> Todos los códigos JavaScript que envían información a la capa de datos deben estar presentes **antes del código base de GTM**.

El orden es un factor relevante ya que necesitamos que toda la información esté presente en el objeto `dataLayer` antes de que el código de GTM se ejecute. De esta forma garantizamos que sea correctamente recogida y procesada.

```js
    dataLayer.push({ ecommerce:  null  });
    dataLayer.push({    
       'ecommerce': {    
       'currencyCode': 'EUR', 
       ...
    });
    
    <!-- Google Tag Manager -->    
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new  Date().getTime(),event:'gtm.js'});var  f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXX');</script>
    <!-- End Google Tag Manager -->
```

Si en algún caso necesitamos enviar información después de haber inicializado la página web lo podremos hacer a través de eventos ya que el activador de página vista no funcionará. Ahora veremos dos ejemplos.

### 2.2 - Enviar información de impresiones (página vista)

Si queremos que Analytics registre la visualización de un producto (impresión del producto) podemos hacerlo en el mismo momento en el que la página se carga; tan sólo tendremos que iniciar la página con el código que exponemos a continuación. Lógicamente tendríamos que cambiar los valores de forma dinámica en función del producto o productos que se hubieran visualizado en el listado.  

```js
     dataLayer.push({ ecommerce:  null  });
     dataLayer.push({    
        'ecommerce': {    
         'currencyCode': 'EUR',     
         'impressions': [    
	        {    
	        'name': 'Nombre producto',    
	        'id': '12345',    
	        'price': '11.00',    
	        'brand': 'Marca',    
	        'category': 'Zapatos',    
	        'variant': 'Gris',    
	        'list': 'Resultados búsqueda',    
	        'position': 1    
	        }
	      ]    
        }    
        });
```

### 2.3 - Añadir al carrito (evento)

En el caso del proceso de añadir o retirar un producto del carrito, es algo que puede ocurrir en cualquier momento durante la estancia del usuario en nuestra web y que no está sujeto a la carga inicial de la página.

En este caso, el activador de **página vista** de GTM no será válido por lo que tendremos que crear un segundo activador de tipo **evento personalizado**.

![Emirodgar](https://i.imgur.com/8g4ZdMa.png){:class="img-responsive"}

En la imagen anterior podemos ver el activador de GTM creado y listo para que ejecute la etiqueta de Google Analytics cuando detecte el evento `ecc.addToCart`. Básicamente lo que hemos hecho ha sido crear un *listener* que estará permanentemente escuchando sobre la capa de datos y que cuando detecte dicho evento, ejecutará la etiqueta de Analytics importante la información existente en el objeto `ecommerce` en ese momento.

Ahora sólo queda ejecutar el siguiente código una vez que el usuario ha añadido un objeto a nuestro carrito de la compra:

```js
    dataLayer.push({ ecommerce:  null  });
    dataLayer.push({    
    'event':  'eec.addToCart',    
    'ecommerce': {    
      'currencyCode':  'EUR',    
      'add': { 
        'products': [{    
	        'name':  'Nombre producto',    
		    'id':  '12345',    
		    'price':  '11.00',    
		    'brand':  'Marca',    
		    'category':  'Zapatos',    
		    'variant':  'Gris',    
		    'quantity':  1    
	    }]    
      }    
     }    
    });
```

Como se puede ver, dicho código invoca el evento `eec.addToCart` y además tiene asociada la información del producto que ha sido añadido al carrito por lo que esa información será enviada a Google Analytics en ese mismo momento. 

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTcyNTQyMzM3NiwtMTY1ODU2MDQ0MywxNT
kxMzA1OTQwLC0zOTM5MjUzMDEsNzg0Mzg1MTM4XX0=
-->