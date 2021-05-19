---
title: Cookies SameSite: guía para entender cómo funcionan
description: Aprende todo sobre las cookies SameSite; guía completa para saber cómo operar con ellas.
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
layout: emirodgar_post
date: 19/05/2021
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: cookies-samesite

---

Las cookies son, a día de hoy, la forma más utilizada para guardar y mantener información entre un usuario y una o varias páginas web. Éstas se guardan en el navegador (Chrome, Firefox, Edge, etc.) y normalmente se usan para guardar sesiones, preferencias en aplicaciones o seguimiento de analítica web.

Se componen de una clave y de un valor y de unas condiciones que le indican cuándo y cómo se debe utilizar dicha información.

    clave=valor
    nombre=emilio

Con el objetivo de preservar la privacidad de los usuarios, los navegadores han ido evolucionando y siendo más restrictivos a la hora de aceptar cookies.

## Tipos de cookies

Existen dos tipos de cookies: **first**-party y **third**-party.

Aquellas cookies generadas por la página web en la que estamos navegando serán consideradas como *first-party* (ya que son propias de dicha página) y las que correspondan a otra página sobre la que no estamos navegando, serán *third-party*.

## Atributo SameSite

El atributo `SameSite` nace como respuesta a la necesidad de especificar aquellas zonas grises que existen entre los dos tipos actuales de Cookies.

Este atributo puede tener valor `Strict` `Lax` o `None`. También puede no ser especificado ya que no es -a día de hoy- obligatorio.

### Valor SameSite None

Si especificamos el valor como `None` no estamos restringiendo la creación de la cookie  por lo que ésta se generará y almacenará en el navegador en todos los casos. Equivaldría a una **third-cookie**.
En este caso, adicional a `SameSite` tendremos que incluir también el valor `Secure`.

```text
Set-Cookie: nombre=emilio; SameSite=None; Secure
```

### Valor SameSite Strict

Si configuramos la cookie con SameSite `Strict` implicará que la cookie sólo se creará cuando el usuario esté en nuestra página navegando y la URL sea exactamente la misma para la que la cookie ha sido definida, es decir, funcionará como una *first-party* siempre y cuando ya estemos dentro de la web.

Si el usuario accede a nuestra web desde un enlace externo, por ejemplo a través del email o de otra web, la cookie no saltará por no tratarse de una petición inicial lanzada desde nuestro dominio.

Este atributo es ideal para almacenar información de usuarios que estén interactuando de forma consciente con nuestra web (usuarios registrados, aplicaciones interactivas, etc.).

```text
Set-Cookie: nombre=emilio; SameSite=Strict;
```

### Valor SameSite Lax

Si lo que queremos es generar una cookie *first-party* en cualquier escenario (sin limitar el que el usuario ya tenga que estar presente en nuestra web), entonces deberemos usar el valor `Lax`.

Este valor es recomendable para aquellas cookies que afectan a la visualización de la página.

```text
Set-Cookie: nombre=emilio; SameSite=Lax;
```

A modo de resumen, la siguiente imagen refleja de forma sencilla la diferencia entre los diferentes valores de `SameSite`.

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">La imagen que mejor explica los valores del atributo SameSite a la hora de crear cookies <a href="https://t.co/knYAU9t7FA">pic.twitter.com/knYAU9t7FA</a></p>&mdash; Emirodgar (@Emirodgar) <a href="https://twitter.com/Emirodgar/status/1214554679620833281?ref_src=twsrc%5Etfw">January 7, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


### Comportamiento por defecto

Las reglas establecidas a día de hoy indican que:

 - Cookies sin atributo `SameSite` equivaldrán a `SameSite=Lax`
 - Cookies con `SameSite=None` tendrán que especificar el atributo `Secure` 

En la página de [SameSite cookie recipes](https://web.dev/samesite-cookie-recipes/) nos dan una serie de consejos adicionales sobre qué tipo de configuración debemos crear para nuestras cookies en función de la situación que tengamos delante.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5MjM3Nzc3OCwtMzEyNDY0OTk0LDY4Nj
g3NDMyNiw2MTgwOTQ0MywyMDAyNjc2NDQ4LDY4Nzg0MjYsLTE1
ODE4MjA5NTEsNzMwOTk4MTE2XX0=
-->