---
title: Cómo implementar el análisis del comportamiento en la tramitación de la compra de Google Analytics Mejorado
description: 
image: https://emirodgar.com/cdn/images/og/analitica.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: analitica
permalink: analisis-comportamiento-tramitacion-compra

--- 

Cuando hacemos una implementación de [Google Analytics Ecommerce Mejorado](https://emirodgar.com/analytics-ecommerce-capa-de-datos) tenemos acceso a diversos informes en los que podemos analizar el rendimiento de nuestras ventas.

Uno de los más interesantes es el [funnel de conversión](https://emirodgar.com/funnel-compra-ecommerce) donde podemos analizar cómo los usuarios van avanzando en el proceso de compra.

Dentro de este embudo existen dos pasos (los dos finales) que nos dan información acerca de cuándo se inicia el proceso de pago (sesiones con compras) y cuando se termina (sesiones con transacciones).

Google Analytics ofrece el informe de **Comportamiento en la tramitación de la compra** donde podemos incluir un mayor detalle dentro del proceso en el que el cliente tiene que dejar sus datos y pagar su pedido. 


![Emirodgar](https://i.imgur.com/XAjJXw5.png){:class="img-responsive"}

Por ejemplo, si el cliente tiene que pasar por 2 ó 3 pasos en los que dejar sus datos de pago, los de facturación y la dirección de envío, podemos etiquetarlos para que aparezcan en nuestro informe.

## Configurar el embudo a través de la capa de datos

Para ello bastará con que enviemos la información a la capa de datos (si tenemos esta implementación realizada desde Tag Manager) o que lo enviemos a través del objeto `ga` o `gtag` a Google Analytics dependiendo de la [versión de la plataforma de medición](https://emirodgar.com/versiones-google-analytics) que estemos usando.

En el siguiente código estamos utilizando el objeto `checkout_option` dentro de `ecommerce` para identificar el paso número 1 denominado "métodos de pago" a través del campo `step`.

    dataLayer.push({ ecommerce:  null  });   
    dataLayer.push({  
      'event':  'checkoutOption',  
      'ecommerce':  {  
        'checkout_option':  {  
          'actionField':  {'step': 1,  'option': 'Métodos de pago'}  
        }  
      }  
    });

  
Si posteriormente el cliente tiene que dar de alta la dirección donde enviar el producto, lo indicaremos a través del paso 2 con el campo `step`.
  

    dataLayer.push({ ecommerce:  null  });   
    dataLayer.push({  
      'event':  'checkoutOption',  
      'ecommerce':  {  
        'checkout_option':  {  
          'actionField':  {'step': 2,  'option': 'Dirección de entrega'}  
        }  
      }  
    });




## Configurar el embudo a través de gtag o ga

La otra opción que tenemos es hacerlo directamente desde la página a Analytics a través del objeto `gtag` o `ga` (dependiendo de la versión de Analytics que estemos usando).

El primer paso será ejecutar el evento `begin_checkout` para dar comienzo a la medición de la tramitación de la compra. Este evento [no necesita ningún parámetro](https://developers.google.com/gtagjs/reference/event#begin_checkout) aunque se puede enviar el array `items` con los elementos que estamos comprando. 

```js
gtag('event', 'begin_checkout', {
  "items": [
    {
      "id": "P12345",
      "name": "...",
      "list_name": "...",
      "brand": "...",
	  ...
    }
  ]
});
```

Analytics registrará este paso como el primero del funnel por lo que una vez que se ejecute, comenzarán a registrarse datos en el embudo. En el siguiente ejemplo, hemos llamado "Dirección de envío" a este primer paso ya que nada más iniciar el checkout es lo que se le pide al cliente.  

![Emirodgar](https://i.imgur.com/91NWTAH.png){:class="img-responsive"}

A partir de ahora tendremos que ir definiendo los siguientes pasos con los eventos `checkout_progress` y `set_checkout_option`. Ojo que es muy importante que ambos vayan de la mano en el valor del paso.

Por ejemplo, el paso 2 que corresponde a "método de envío" se registraría de la siguiente manera:

    gtag('event', 'checkout_progress', {
      "checkout_step": 2,
      "items": [
        {
          "id": "P12345",
          "name": "...",
          "list_name": "...",
          "brand": "...",
    	  ...
        }
      ]
    });
    
    gtag('event', 'set_checkout_option', {
      "checkout_step": 2,
      "checkout_option": "Métodos de envío"
    });

De esta forma se iría rellenando cada paso del embudo con la iformación adecuada.

![Emirodgar](https://i.imgur.com/7myyrsh.png){:class="img-responsive"}

## Crear el embudo de tramitación de compra

Independientemente de cómo lo hayamos configurado (capa de datos o eventos) el último paso será asignar los nombres dentro del apartado de "Checkout labeling" para cada uno de los pasos que hemos dado de alta a través del código. De esta forma ya podremos analizar el informe de Comportamiento en la tramitación de la compra.

![Emirodgar](https://i.imgur.com/BBNXTRV.png){:class="img-responsive"}

Los nombres que especifiquemos corresponderán a los pasos que se visualizarán posteriormente en el embudo de Analytics.

![Emirodgar](https://i.imgur.com/v5oWJMd.png){:class="img-responsive"}
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTg5MzYzMzg2NiwtMTM0ODY4NDk3OCwxOD
U1OTgxNTYzLDIwMDE3NTE0OTksLTEwNDY1NTA0MDgsLTk0MTg4
NzM0MSwxODA0MDM2NzgwLC0xNjA2NjEyOTQ5LDEzMjY3MDA0Nj
ddfQ==
-->