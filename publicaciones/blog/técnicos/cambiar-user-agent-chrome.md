---
title: Cómo cambiar el User Agent en Google Chrome
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
layout: emirodgar_post
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: cambiar-user-agent-chrome

---

El **User Agent** o **Agente de Usuario** es la cadena de texto que nuestro navegador utiliza para identificarse cuando trata de conectarse a una página web. Es puramente informacional para nosotros (usuarios) pero puede implicar cambios a nivel de la página web.

Por ejemplo, si el user agent informa de que navegamos a través de un móvil, el servidor web encargado de enviarnos la página web lo hará con la versión adecuada para nuestro dispositivo. Otro ejemplo puede ser el de un prerenderizado para los buscadores; nosotros como usuarios acedemos a una versión dinámica de la página sobre la que podemos interactuar pero si el user agent [identifica a un robot de búsqueda](https://emirodgar.com/detectar-googlebot), le mostrará una versión estática previamente renderizada y limitada a nivel de funcionalidades. Un último ejemplo podría ser validar el acceso a una página si tenemos [bloqueado el rastreo a ciertos user agents](https://emirodgar.com/listado-robots-bloquear). 

Por todo ello, en ciertas ocasiones necesitaremos navegar como si fuéramos un robot de búsqueda o simulando un dispositivo de acceso en concreto para poder validar la página web resultante.

## Cómo cambiar el user agent desde Chrome

Si navegamos con Google Chrome bastará con seguir los siguientes pasos:
1. Pulsar "F12" para abrir la consola de DevTools.
2. A la derecha del todo aparecerán tres iconos: rueda dentada, tres puntos y un aspa. Hacemos clic sobre los tres puntos.
3. Seleccionamos "More Tools".
4. Seleccionamos "Network Conditions".

![Herramientas google chrome devtolls](https://emirodgar.com/cdn/images/posts/devtools-network.png){:class="img-responsive"}

En este punto se nos abrirá un panel con varias opciones. Tendremos que ir al bloque de "user agent" desmarcar la opción de "Use browser default". 

![Cambiar user agent google chrome devtools](https://emirodgar.com/cdn/images/posts/user-agent chrome.png){:class="img-responsive"}

Ahora podremos optar por seleccionar un user agent de los que ya vienen predefinidos en el combo o introducir uno específico nuestro.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTMxODA0NjgwLDIwMTAxNTY4MSw3NTAzND
M5ODksLTExNDI1MDA5NTgsLTEwODA5NTg1NDEsLTE0NjU3MzE5
MDFdfQ==
-->