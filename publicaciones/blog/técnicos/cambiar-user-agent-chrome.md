---
title: Cómo cambiar el User Agent en Google Chrome
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
date: 27/01/2022
date_modified: 12/10/2026
layout: emirodgar_post
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: cambiar-user-agent-chrome

---

El **User Agent** o **Agente de Usuario** es la cadena de texto que nuestro navegador utiliza para identificarse cuando trata de conectarse a una página web. Es puramente informacional para nosotros (usuarios) pero puede implicar cambios a nivel de la página web.

Por ejemplo, si el user agent informa de que navegamos a través de un móvil, el servidor web encargado de enviarnos la página web lo hará con la versión adecuada para nuestro dispositivo. Otro ejemplo puede ser el de un prerenderizado para los buscadores; nosotros como usuarios acedemos a una versión dinámica de la página sobre la que podemos interactuar pero si el user agent [identifica a un robot de búsqueda](https://emirodgar.com/detectar-googlebot), le mostrará una versión estática previamente renderizada y limitada a nivel de funcionalidades. Un último ejemplo podría ser validar el acceso a una página si tenemos [bloqueado el rastreo a ciertos user agents](https://emirodgar.com/listado-robots-bloquear). 

Por todo ello, en ciertas ocasiones necesitaremos navegar como si fuéramos un robot de búsqueda o simulando un dispositivo de acceso en concreto para poder validar la página web resultante.

## Cómo cambiar el user agent desde Chrome

Si utilizamos Google Chrome usaremos la **consola DevTools** que viene incluída en dicho navegador. Os recomiendo esta publicación con varios [trucos para exprimir al máximo la consola de Google Chrome](https://emirodgar.com/consola-devtools-chrome).

Los pasos que debemos seguir son los siguientes:

1. Pulsar "F12" para abrir la consola de DevTools.
2. A la derecha del todo aparecerán tres iconos: rueda dentada, tres puntos y un aspa. Hacemos clic sobre los tres puntos.
3. Seleccionamos "More Tools".
4. Seleccionamos "Network Conditions".

![Herramientas google chrome devtolls](https://emirodgar.com/cdn/images/posts/devtools-network.png){:class="img-responsive"}

En este punto se nos abrirá un panel con varias opciones. Tendremos que ir al bloque de "user agent" desmarcar la opción de "Use browser default". 

![Cambiar user agent google chrome devtools](https://emirodgar.com/cdn/images/posts/user-agent chrome.png){:class="img-responsive"}

Ahora podremos optar por seleccionar un user agent de los que ya vienen predefinidos en el combo o introducir uno específico nuestro.

## Atajo con el menú de comandos

Si lo haces a menudo, hay una forma más rápida de llegar al mismo panel:

1. Abre DevTools con "F12" (o "Ctrl + Shift + I").
2. Pulsa "Ctrl + Shift + P" para abrir el **Command Menu**.
3. Escribe "Network conditions" y selecciona "Show Network conditions".

También puedes llegar desde la pestaña "Network" con el botón "More network conditions".

## Cosas que debes tener en cuenta

- El cambio **solo se aplica mientras DevTools está abierto** y únicamente en esa pestaña. Si cierras la consola, Chrome vuelve a usar su user agent habitual.
- Tras cambiarlo, **recarga la página** para que el servidor reciba el nuevo user agent.
- Cambiar el user agent solo modifica lo que se envía al servidor. No cambia cómo funciona Chrome por dentro, así que el JavaScript de la página se seguirá ejecutando con el motor de Chrome.
- Chrome también envía las cabeceras **User-Agent Client Hints** (`Sec-CH-UA`), una alternativa moderna al user agent clásico. Algunas webs las usan para detectar dispositivo y sistema operativo, así que si una web sigue comportándose distinto a lo esperado, puede ser por esto.
- **Simular a Googlebot no te convierte en Googlebot.** Muchos servidores y CDN verifican que la IP pertenezca realmente a Google, por lo que podrías ver una respuesta distinta a la que recibe el robot de verdad. Para una validación fiable usa la herramienta de inspección de URL de Search Console.

## User agents más habituales para SEO

Puedes pegar cualquiera de estos en el campo personalizado. Los números de versión de Chrome (`W.X.Y.Z`) van cambiando.

- **Googlebot Smartphone**: `Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)`
- **Googlebot Desktop**: `Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)`

Puedes consultar el listado oficial y actualizado en la [documentación de rastreadores de Google](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers).

## Otras formas de cambiar el user agent

- **Modo dispositivo de DevTools** ("Ctrl + Shift + M"): al elegir un móvil o tablet del desplegable, Chrome ajusta también el user agent además del tamaño de pantalla.
- **Extensiones** de Chrome para cambiar el user agent de forma permanente o por sitio web, útiles si no quieres tener DevTools abierto.
- **Herramientas de rastreo** como Screaming Frog, que permiten configurar el user agent con el que se rastrea el sitio.
- **Desde código**, por ejemplo con Puppeteer o Playwright, para automatizar pruebas con distintos user agents.

Para más información, consulta la [documentación oficial de Chrome DevTools](https://developer.chrome.com/docs/devtools/device-mode/override-user-agent).

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNjQzNDcyMzEsOTA4ODgwMzEzLC0zMT
gwNDY4MCwyMDEwMTU2ODEsNzUwMzQzOTg5LC0xMTQyNTAwOTU4
LC0xMDgwOTU4NTQxLC0xNDY1NzMxOTAxXX0=
-->