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

Sin embargo, con la evolución del desarrollo web y la aparición de tecnologías y frameworks que permiten crear aplicaciones de una sola página (SPA) como Angular, React o Vue.JS, esto cambió. Los motores de búsqueda evolucionaron y se adaptaron para poder rastrear e indexar este tipo de tecnologías. Google se olvidó de su antiguo esquema de rastreo basado AJAX, y ahora renderiza una página web como lo haría cualquier navegador moderno.

Si bien Google generalmente puede rastrear e indexar la mayor parte del contenido de JavaScript, todavía recomiendan usar la representación del lado del servidor o la representación previa, en lugar de confiar en un enfoque del lado del cliente, ya que es difícil de procesar JavaScript, y no todos los rastreadores de motores de búsqueda lo son. capaz de procesarlo con éxito o inmediatamente '.

Debido a este crecimiento y los avances en los motores de búsqueda, es esencial poder leer el DOM después de que se haya ejecutado JavaScript para comprender las diferencias con el HTML de respuesta original al evaluar sitios web.

Tradicionalmente, los rastreadores de sitios web tampoco podían rastrear sitios web de JavaScript, hasta que lanzamos la primera funcionalidad de renderizado de JavaScript en nuestro software Screaming Frog SEO Spider.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU1MTU0ODg0XX0=
-->