---
title: Pasar de INT a String y de String a INT en Java 💥
description: Aprende a pasar correctamente de entero a cadena y viceversa en Java.
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
date: 10/09/2019
image: https://emirodgar.com/cdn/images/og/emirodgar.png
permalink: pasar-de-int-a-string-y-de-string-a-int-en-java

---

# Pasar de INT a String y de String a INT en Java

Me llegan muchas visitas buscando el cómo poder cambiar entre varios tipos de datos en Java así que voy a explicar cómo podemos convertir datos enteros a cadena (`Int` a `String`) y cadena a enteros (`String` a `Int`)  
  
Por lo general lo que más suelo hacer es pasar cadenas a enteros, es decir, de un tipo `String` a un tipo `Int`, nótese que "String" es un **objeto** e "Int" es un **tipo básico** luego el proceso de conversión de uno a otro será diferente.  
  
## Pasar un STRING a un INT (de cadena a entero)  
  
Para hacer la siguiente operación necesitaremos hacer uso de la clase Integer y de su método "parseInt" de la siguiente manera:
```java
    String numCadena = "1";      
    int numEntero = Integer.parseInt(numCadena);
```
¿Qué problemas podemos tener? pues que la cadena no sólo contenga números sino que venga con espacios.  
  
Si los espacios vienen al princio o al final, con un simple trim bastará para eliminarlos, por ejemplo ("1")
```java
    numCadena.trim();
```
Si tenemos espacio entre los números deberíamos usar el método replaceAll (" 1 3 45 6")
```java
    numCadena.replaceAll(" ", "");
```
Una vez realiazdos estos sencillos pasos podremos trabajar con los números enteros.  
  
## Pasar un INT a STRING (de entero a cadena)  
  
Para pasar de un tipo básico a un objeto String tenemos varias posibilidades, por un lado, si eres un artesano, puedes simplemente concatenar a tu entero una cadena vacía:
```java
    int numEntero = 4;    
    String numCadena= numEntero+"";
```
La forma correcta de realizar esta operación sería invocando al método valueOf de la clase String  
  
```java
    int numEntero = 4;    
    String numCadena= String.valueOf(numEntero);
```

Otra forma correcta de hacerlo sería utilizando el método toString del objeto Integer de la siguiente manera:

```java
    String numCadena= Integer.toString(numEntero);
```
Espero que esto les sirva a todas aquellas personas que vinieron buscándolo, al menos así es como suelo hacerlo.

## Libros para aprender Java

Si tienes Kindle Unlimited de Amazon te gustará saber que tienes gratis el libro 
<!--stackedit_data:
eyJoaXN0b3J5IjpbOTg3OTUyMTUzLDExODg5NzU0MjcsMTcwNT
czODYxOV19
-->