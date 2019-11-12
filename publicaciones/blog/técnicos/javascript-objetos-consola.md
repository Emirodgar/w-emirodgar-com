
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

## Hacer debug

Si hacemos uso de `debugger` podremos

## Extensión gadebugger o inyect datapush

## Trabajar con la capa de datos

    window.dataLayer = window.dataLayer || [];  
    dataLayer.push ({  
    'event': 'erg_contacto'  
    })


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4ODkwMzcyNzgsLTE4MjIwMzgwMzIsLT
E4MTI3MDc5MjEsLTUwNjk2NzkwNV19
-->