---
description: Optimiza tu tiempo y automatiza el rendimiento de múltiples URLs dentro de tu sitio web
lang: es_ES
author: Emirodgar
tags: seo, google, chrome
date: 12/11/2019
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: consola-devtools-chrome

---


# Interactuar con la consola de Google Chrome

En cualquier navegador Google Chrome podemos pulsar la tecla `F12` y atuomáticamente se nos abrirá un panel

## Obtener listado de variables y objetos creados

Si queremos conocer qué variables están disponibles

-   `keys(window)`  para ver las variables
-   `dir(window)`  para ver los objetos

O también podemos hacer uso directamente del objeto `window` y navegar por las diferentes opciones que nos ofrece. Desde aquí podremos acceder a todas las variables públicas, tanto del navegador como de la página.

```
window.
```

Otra opción sería invocar directamente el objeto `this;` para recibir un listado completo de todas las opciones que tenemos disponibles.

```
this
```

## Limpiar la consola

Cuando hay un exceso de mensajes, podemos limpiar la consola de nuestro navegador simplemente haciendo clic con el botón derecho y seleccionando clear console.

También lo podemos hacer a través de código tecleando lo siguiente:

 ```
clear()
```

> Si en opciones tenemos habilitada la opción de **Preserve log**, el comando `clear()` no funcionará por lo que tendremos que hacerlo a través del menú contextual.

## Usar los logs

A la hora de desarrollar podemos enviar avisos a la consola directamente desde nuestra aplicación. Para ello usaremos los siguientes comandos:

- `console.log("texto")`: para un mensaje normal
- `console.error("texto")`: para un mensaje de error
- `console.warn("texto")`: para un mensaje de error

Esto nos va a permitir identificar

## Hacer debug

Si hacemos uso de `debugger` podremos

## Extensión gadebugger o inyect datapush

## Trabajar con la capa de datos

    window.dataLayer = window.dataLayer || [];  
    dataLayer.push ({  
    'event': 'erg_contacto'  
    })


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTg2NjAzMzEyMV19
-->