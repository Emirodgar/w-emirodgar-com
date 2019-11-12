
# Interactuar con la consola de Google Chrome

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
eyJoaXN0b3J5IjpbLTE3MzMzOTA1MjcsLTE4MjIwMzgwMzIsLT
E4MTI3MDc5MjEsLTUwNjk2NzkwNV19
-->