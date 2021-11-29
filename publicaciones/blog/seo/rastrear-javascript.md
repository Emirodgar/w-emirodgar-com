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

En algunos casos no es posible utilizar un SSR por lo que se recomienda hacer un pre renderizado

Si bien Google generalmente puede rastrear e indexar la mayor parte del contenido de JavaScript, todavía recomiendan usar la representación del lado del servidor o la representación previa, en lugar de confiar en un enfoque del lado del cliente, ya que es difícil de procesar JavaScript, y no todos los rastreadores de motores de búsqueda lo son. capaz de procesarlo con éxito o inmediatamente '.

Debido a este crecimiento y los avances en los motores de búsqueda, es esencial poder leer el DOM después de que se haya ejecutado JavaScript para comprender las diferencias con el HTML de respuesta original al evaluar sitios web.

Tradicionalmente, los rastreadores de sitios web tampoco podían rastrear sitios web de JavaScript, hasta que lanzamos la primera funcionalidad de renderizado de JavaScript en nuestro software Screaming Frog SEO Spider.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5ODEyMTU3NDldfQ==
-->