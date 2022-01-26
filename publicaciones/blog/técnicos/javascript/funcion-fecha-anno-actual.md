---
title: Función JavaScript para sacar el año actual
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

Para poder obtener el año actual a través de JavaScript podemos hacer uso del método `getFullYear` del objeto `Date`. 

    function  getDate() {
      var  d = new  Date();
      var  n = d.getFullYear();
      return  n;
    }

En la función anterior

new Date().getFullYear();
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQ2NjI3NTM4MF19
-->