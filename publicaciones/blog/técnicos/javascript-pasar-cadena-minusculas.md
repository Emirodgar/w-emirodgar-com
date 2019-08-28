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

La siguiente función Javascript nos ayudará a convertir toda una cadena en minúsculas a excepción de la primera letra que quedará en mayúsculas. 

```
function primeraLetra(s) {
  return s.replace(/^.{1}/g, s[0].toUpperCase());
}

var valor = document.getElementById('XXX').value;
var min = firstLetter(valor.toLowerCase());
document.getElementById('name_1').value = min;
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzMwNzMyOTY4XX0=
-->