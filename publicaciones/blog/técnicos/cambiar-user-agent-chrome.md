---
title: Cambiar el User-Agent en Google Chrome
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
layout: emirodgar_post
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: cambiar-user-agent-chrome

---

El **User-Agent** o **Agente de Usuario** es la cadena de texto que nuestro navegador utiliza para identificarse cuando trata de conectarse a una página web. Es puramente informacional para nosotros (usuarios) pero puede implicar cambios a nivel de la página web.

Por ejemplo, si el User agent informa de que navegamos a través de un dispositivo móvil, el servidor web encargado de enviarnos la página web lo hará con la versión adecuada para nuestro dispositivo. Otro ejemplo puede ser el de un prerenderizado para los buscadores; nosotros como usuarios acedemos a una versión dinámica de la página sobre la que podemos interactuar pero si el User-Agent identifica a un robot de búsqueda, le mostrará una versión estática previamente renderizada y limitada a nivel de funcionalidades.

Por todo ello, en ciertas ocasiones necesitaremos navegar como si fuéramos un robot de búsqueda o simulando un dispositivo de acceso en concreto para poder validar la página web resultante.

## Cómo cambiar el User agent desde Chrome

Si navegamos con Google Chrome bastará con seguir los siguientes pasos:
1. Pulsar "F12" para abrir la consola de DevTools.
2. A la derecha del todo aparecerán tres iconos: rueda dentada, tres puntos y un aspa. Hacemos clic sobre los tres puntos.
3. Seleccionamos "More Tools".
4. Seleccionamos "Network Conditions".

En este punto se nos abrirá un panel con varias opciones. Tendremos que ir al bloque de "User agent" desmarcar la opción de "Use browser default". 

Ahora podremos optar por seleccionar un User ag

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTY1MjQyNTcxNSwtMTQ2NTczMTkwMV19
-->