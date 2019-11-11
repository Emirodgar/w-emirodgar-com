
# Interactuar con la consola de Google Chrome

## Obtener listado de variables y objetos creados

Si queremos conocer qué variables están disponibles

-   `keys(window)`  para ver las variables
-   `dir(window)`  para ver los objetos

O también podemos hacer uso directamente del objeto `window` y navegar por

```
window.
```

```
for(var b in window) { 
  if(window.hasOwnProperty(b)) console.log(b); 
}
```

Podemos ver 

```
this;
```



<!--stackedit_data:
eyJoaXN0b3J5IjpbODMzNjYzMTgwXX0=
-->