---
title: Pasar de INT a String y de String a INT en Java 
description: 💥 Aprende a pasar correctamente de entero a cadena y viceversa en Java. Paso a paso y con explicaciones. 
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
author: Emirodgar
date: 13/05/2021
layout: emirodgar_post
image: https://emirodgar.com/cdn/images/og/emirodgar.png
permalink: pasar-de-int-a-string-y-de-string-a-int-en-java

---

Me llegan muchas visitas buscando el cómo poder cambiar entre varios tipos de datos en Java de forma correcta así que voy a explicar cómo podemos convertir datos enteros a cadena (`Int` a `String`) y cadena a enteros (`String` a `Int`) .
  
Por lo general lo que más suelo hacer es pasar cadenas a enteros, es decir, de un tipo `String` a un tipo `Int`, nótese que "String" es un **objeto** e "Int" es un **tipo básico** por lo que el proceso de conversión de uno a otro será diferente.  
  
## Pasar un STRING a un INT (de cadena a entero)  
  
Para hacer la siguiente operación necesitaremos hacer uso de la clase `Integer` y de su método `parseInt` de la siguiente manera:

```java
    String numCadena = "1";      
    int numEntero = Integer.parseInt(numCadena);
```
¿Qué problemas podemos tener? pues que la cadena no sólo contenga números sino que venga con espacios.   
Si los espacios vienen al principio o al final, con un simple `trim` bastará para eliminarlos, por ejemplo:

```java
    numCadena.trim();
```
Si tenemos espacio entre los números  (" 1 3 45 6") deberíamos usar el método `replaceAll` de la siguiente manera:
 
```java
    numCadena.replaceAll(" ", "");
```
Una vez realizados estos sencillos pasos podremos trabajar con los números enteros. 
  
## Pasar un INT a STRING (de entero a cadena)  
  
Para pasar de un tipo básico a un objeto `String` tenemos varias posibilidades; por un lado, si eres un artesano, puedes simplemente concatenar a tu entero una cadena vacía:

```java
    int numEntero = 4;    
    String numCadena= numEntero+"";
```

No obstante, la forma correcta de realizar esta operación sería invocando al método `valueOf` de la clase `String`  
  
```java
    int numEntero = 4;    
    String numCadena= String.valueOf(numEntero);
```

Otra forma correcta de hacerlo sería utilizando el método `toString` del objeto `Integer` de la siguiente manera:

```java
    String numCadena= Integer.toString(numEntero);
```

Espero que esto les sirva a todas aquellas personas que vinieron buscándolo.


## Libros gratuitos para aprender Java

Si tienes **Kindle Unlimited** de Amazon te gustará saber que tienes gratis una serie de libros relacionados con Java.

Si nos estamos iniciando y queremos conseguir una buena base en Java, recomiendo el siguiente libro:
-  [Java para novatos: Cómo aprender programación orientada a objetos con Java sin desesperarse en el intento](https://amzn.to/2SemsXu){:rel="sponsored"} 

Si lo que estás buscando es algo más profesional, también encontrarás gratuitamente en su catálogo los siguientes libros:  

 - [Curso de Programación en Java EE: 6ª edición](https://amzn.to/2OpMGFf){:rel="sponsored"} 
 - [Curso Avanzado de Programación en Java EE: Struts, JSF, Ajax, EJB, JPA](https://amzn.to/2OrJ8SZ){:rel="sponsored"}.

Para los peques de la casa, a los que recomendaría comenzar por Arduino y similares, también contamos con títulos como [Java para niños: Aprende a programar y crea tus propios proyectos con Java 8](https://amzn.to/3biXPSa){:rel="sponsored"}. Una forma original y relativamente sencilla de introducirles en el mundo de la programación con Java.
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTU5OTc3NDMsLTE3NjQ5MzM1NiwtMTE3OD
c1NjkwNSwxMDgxNjY0NjIxLDIwODU5NDA5NDQsMjUwNTYwNzIw
LDEwNzU1MDAwNDIsMTU5ODk4ODI5Niw0NjI0ODU4MzgsNjQ4ND
kwNDA1LDExODg5NzU0MjcsMTcwNTczODYxOV19
-->