---
title: Función JavaScript para obtener el año actual
description: 
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
date: 25/01/2022
layout: emirodgar_post
image: https://emirodgar.com/cdn/images/og/marketing-digital.png
permalink: funcion-fecha-ano-javascript

---

En JavaScript contamos con el objeto `Date` que nos permite trabajar de forma cómoda con las fechas. Para poder iniciar dicho objeto usaremos el siguiente comando `new` de la siguiente manera:

    var ano = new Date();


Para poder obtener el año actual a través de JavaScript utilizaremos el método `getFullYear` del objeto `Date`. 

    var ano = new Date().getFullYear();

El comando anterior nos devolverá el año en curso, ideal para tener siempre actualizado el año en los footers de las páginas web.

Si lo queremos en una función, podemos utilizarlo de la siguiente manera:


    function  obtenerAno() {
      var  d = new  Date();
      var  n = d.getFullYear();
      return  n;
    }




<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzOTU4OTAwMiwtNDExNTk5Mjg5LC0xMT
A1NjEwNDU4XX0=
-->