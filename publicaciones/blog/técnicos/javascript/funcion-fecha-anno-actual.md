---
title: Función JavaScript para obtener el año actual
description: 
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
date: 26/01/2022
layout: emirodgar_post
image: https://emirodgar.com/cdn/images/og/marketing-digital.png
permalink: funcion-fecha-ano-javascript

---

En JavaScript tenemos el objeto `Date` que nos permite trabajar de forma cómoda con las fechas. Para poder iniciar dicho objeto usaremos el siguiente comando `new` de la siguiente manera:

    var d = new Date();


Para poder obtener el año actual a través de JavaScript utilizaremos el método `getFullYear` del objeto `Date`. 

new Date().getFullYear();

    function  obtenerAno() {
      var  d = new  Date();
      var  n = d.getFullYear();
      return  n;
    }

En la función anterior


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5NDgxODQ5MTNdfQ==
-->