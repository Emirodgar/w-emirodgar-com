---
description: ¿Qué validador Javascript es mejor para mis proyectos?
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: javascript
date: 10/01/2020
image: https://emirodgar.com/cdn/images/og/marketing-digital.png
permalink: validadores-javascript

---

# Validadores de JavaScript

Un validador nos ayudará a evitar errores a la hora de programar. JavaScript no trae ninguno por defecto pero existen varios que podemos instalar para asegurar que generamos código **claro**, **funcional**, **estándar** y **escalable en el tiempo**.

A pesar de tener experiencia programando podemos pecar de malas prácticas o de generar lenguaje poco funcional lo cuál puede generar un peor rendimiento. 

El objetivo de un validador es optimizar nuestro tiempo, evitar errores en el código y asegurar una programación estándar.

## ¿Qué validador puedo usar?

Los más conocidos son [JSLint](http://www.jslint.com/), [JSHint](http://jshint.com/), [JSCS](http://jscs.info/) y [ESLint](http://eslint.org/). Todos ellos funcionan de la misma forma: disponen de un conjunto de reglas con las que validan y garantizan que nuestro código es correcto.

- **JSLint**: es el más antiguo de todos. Personalmente no me gusta debido a que genera demasiados avisos y que la configuración, así como la página de ayuda no nada intuitivas. Es demasiado estricto.
- **JSHint**: surge a partir del anterior para solventar, en parte, algunos de los problemas de base. Tiene un buen sistema de configuración y se integra fácilmente con muchos entornos de programación. Podemos especificar y adaptar el validador a nuestras necesidades. 
- **JSCS**: este validador debemos configurarlo desde cero para que se adapte por completo a lo que queremos que nos valide. Es útil para proyectos con un tipo de programación muy específica. Sólo detecta errores en el código pero no variables sin usar u otros aspectos que optimicen nuestra programación.
- **ESLint**: es el más moderno y, aunque viene con una gran documentación, requiere una configuración inicial. Es muy completo y dispone de muchas y fáciles integraciones. Posiblemente sea la opción más avanzada, aunque su ejecución puede ser algo más lenta.

## Instalar ESLint

Para poder instalarlo lo podemos hacer a través de npm. Para ello bastará con abrir una consola en Windows y teclear lo siguiente:

```
npm install -g eslint
```

Una vez terminado, iniciamos el validador

```
eslint --init
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA0MjExNDU1NiwtMTIxNjgxMTY4Niw5NT
EzMzcxMjIsMTE3Njk5OTU4XX0=
-->