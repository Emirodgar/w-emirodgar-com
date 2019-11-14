---
description: Detecta de forma sencilla si una página web está utilizando AMP o no
lang: es_ES
author: Emirodgar
tags: javascript, tecnico
date: 17/05/2019
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: javascript-detectar-amp

---
# Detectar AMP a través de Javascript

Para poder determinar si una página web está haciendo uso del framework AMP o no es relativamente sencillo si sabemos qué requisitos tiene que tener dicha página y por lo tanto los buscamos en el código fuente.

Según la [documentación oficial](https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/?referrer=ampproject.org#required-markup) una página AMP debe comenzar siempre con `<html ⚡>` tag  o `<html amp>`.

De esta forma podremos comprobar si 

    document.getElementsByTagName('html')[0].hasAttribute('amp')
    document.getElementsByTagName('html')[0].hasAttribute('⚡')


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQ1NDkxNzcyMl19
-->