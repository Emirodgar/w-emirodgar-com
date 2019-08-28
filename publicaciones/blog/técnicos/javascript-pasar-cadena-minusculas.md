---
title: Función JavaScript para pasar cadena a minúsculas con la primera letra en mayúsculas
description: Sencilla función para convertir cualquier cadena en minúsculas salvo la primera letra
lang: es_ES
author: Emirodgar
tags: javascript, tecnico
date: 17/05/2019
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: funcion-javascript-cadena-minusculas

---

# Función JavaScript para pasar cadena a minúsculas con la primera letra en mayúsculas


```
function firstLetter(s) {
  return s.replace(/^.{1}/g, s[0].toUpperCase());
}

var valor = document.getElementById('name_1').value;
var min = firstLetter(valor.toLowerCase());
document.getElementById('name_1').value = min;
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTcyODg1MDgzMF19
-->