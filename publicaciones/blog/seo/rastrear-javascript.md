---
title: Cómo rastrear e indexar páginas con JavaScript para mejorar el SEO
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
author: Emirodgar
sitemap: 1
feed: 1
folder: seo
lang: es_ES
layout: emirodgar_post
permalink: rastrear-javascript

--- 

Históricamente, los robots de los motores de búsqueda, como [Googlebot](https://emirodgar.com/detectar-googlebot), no rastreaban ni indexaban el contenido creado de forma dinámica con JavaScript y solo podían ver lo que había en el código fuente HTML estático.

Sin embargo, con la evolución del desarrollo web y la aparición de tecnologías y frameworks que permiten crear aplicaciones de una sola página (SPA) como Angular, React o Vue.JS, esto cambió. Los motores de búsqueda evolucionaron y se adaptaron para poder rastrear e indexar este tipo de tecnologías. Google se olvidó de su antiguo esquema de rastreo basado AJAX, y ahora **renderiza una página web como lo haría cualquier navegador moderno**. De hecho, lanzaron el contepto de [evergreen Googlebot](https://developers.google.com/search/blog/2019/05/the-new-evergreen-googlebot) para hacer referencia a que su robot de búsqueda estaría siempre actualizado, al igual que los navegadores de los usuarios.

## ¿Cómo podemos ayudar a los buscadores a renderizar y rastrear páginas en JavaScript?

Si nuestra página utiliza JavaScript para generar su presentación final, lo que ocurrirá es que en algún punto el navegador que estamos usando tendrá que ejecutar dicho código JavaScript para obtener dicha versión final. Existen muchos navegador y muchos robots de búsqueda por lo que garantizar que el resultado final sea el mismo para todos ellos puede ser ambicioso.

Este proceso por el cuál la parte final que está accediendo a la web (navegador o robot) ejecuta y renderiza el JavaScript se denomina **Client Side Rendering** CSR o renderizado del lado del cliente.

Existe otro proceso que es al contrario, en lugar de permitir al cliente final realizar el renderizado, éste se realiza en el servidor y luego se envía al cliente final (navegador o robot). De esta forma garantizamos que todos reciben la misma versión (y que está exenta de fallos). Este proceso se denomina **Server Side Rendering** (SSR) o renderizado del lado del servidor.

## ¿Ventajas o inconvenientes del CSR o SSR?

Lo ideal para asegurar un buen funcionamiento a nivel [SEO](https://emirodgar.com/que-es-el-seo) sería que nuestra página ofrezca un SSR (renderizado a nivel de servidor) ya que de esta forma nos aseguramos que todos los robots de búsqueda reciben la misma versión -correcta y funcional- de nuestra página.

**¿Cuál es el problema del SSR?** exije un sobre esfuerzo a nuestro servidor ya que por cada URL/petición necesita generar el renderizado antes de enviárselo al navegador que ha hecho la peticón. Un CSR delega ese renderizado en el navegador del cliente por lo que es una tarea menos que debemos soportar.

En algunos casos no es posible utilizar un SSR por lo que se recomienda hacer un pre-renderizado. Una de las herramientas más conocidas para implementar esta tecnología en nuestro sitio web es https://prerender.io/.

## El proceso de Googlebot

Como hemos comentado antes, **Googlebot es evergreen** por lo que siempre dispondrá de la versión más actualizada de Chromium y generará el mismo resultado que la versión de cualquier navegador que utilice esta tecnología (Chrome, Vivaldi, Brave, Opera, Iridium, Edge, etc). 

El proceso que seguirá será el siguiente:

 1. **Rastrear**: para identificar todas las URLs de un sitio. Se apoyará en el sitemap XML y el enlazado, tanto interno como externo.
 2. **Renderizar**: aquí entra en juego la importancia del SSR (donde no tendrá que hacer nada) o del CSR (donde trendrá que ejecutar el JavaScript de la página para obtener la versión final renderizada de la misma.
 3. **Indexar**: una vez que disponga de la versión final de la página, podrá determinar su indexación y posterior posicionamiento dentro de su índice.

Google utiliza la siguiente imagen para mostrarnos el proceso seguido para rastrear, renderizar e indexar una URL.

![Google proceso rastreo indexación renderizado](https://i.imgur.com/rX52CEk.png){:class="img-responsive"}

El esquema final de trabajo que realiza Googlebot será el siguiente:

 1. Googlebot identifica las URLs que quiere rastrear y las almacena en un listado. Podemos ll
 2. Poco a poco va accediendo a las URLs previamente almacenadas haciendo uso del *crawl budget* que tengamos asociado a nuestro dominio. Dependiendo de ese tiempo que tenemos asignado el proceso puede llevar horas o incluso días.
 3. El robot analiza el HTML de cada URL solicitada en busca de nuevos enlaces. Si los encuentra, los añade a la lista del primer punto.
 4. El siguiente paso es disponer de un segundo listado con URL para realizar un renderizado

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwMDcwNTEzNjUsLTEwOTM3MDM3MTRdfQ
==
-->