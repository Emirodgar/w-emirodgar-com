
# Interactuar con la consola de Google Chrome

## Obtener listado de variables y objetos creados

Si queremos conocer qué variables están

```
for(var b in window) { 
  if(window.hasOwnProperty(b)) console.log(b); 
}
```

Podemos ver 

```
this;
```

O también podemos escribir 

```
window.
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTcyNzU1NDQ1Nl19
-->