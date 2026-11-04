---
title: Bloquear indexación de Javascript y CSS en estrategia SEO
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
date: 15/05/2022
date_modified: 04/11/2026
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
permalink: bloquear-indexacion-js-css

---

Dentro del proceso de **indexación de una página web**, podemos hacer uso de diversas instrucciones para determinar qué URLs queremos que se indexen e incluso qué formatos.

Lo lógico sería permitir que se indexe siempre **cualquier URL que aporte valor a nuestra estrategia**, incluyendo también todos los recursos - Javascript, CSS e imágenes- de los que hace uso.

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Así me gusta explicar la diferencia entre HTML, CSS y Javascript y las diferentes opciones de renderizado. <a href="https://t.co/x8sMvAXcNu">pic.twitter.com/x8sMvAXcNu</a></p>&mdash; Emirodgar (@Emirodgar) <a href="https://twitter.com/Emirodgar/status/1163769116571947009?ref_src=twsrc%5Etfw">August 20, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

En ciertas ocasiones -casi siempre por temas de recursos- limitamos los tipos de documentos a los que tienen acceso para evitar alcanzar el [límite del hosting](https://emirodgar.com/hosting-seo) donde estamos alojados.

## Cómo afecta al SEO bloquear Javascript 

El Javascript es utilizado para **dotar a una página web de funcionalidad** puesto que el HTML en el que se basa es estático.

Googlebot hace uso de Chromium para rastrear, navegar e indexar las páginas web. Con [cada cambio de algoritmo](https://emirodgar.com/cambio-algoritmo-google) va mejorando su capacidad para renderizar Javascript. Si en nuestra web utilizamos esta tecnología para mostrar contenido, el hecho de bloquear el acceso a este tipo de ficheros provocará que no pueda ejecutarlo y por tanto acceder al mismo.

> Si bloqueamos Javascript nos exponemos a que Googlebot no pueda acceder a parte de nuestro contenido. Te explico con más detalle [cómo rastrea e indexa Google las páginas con JavaScript](https://emirodgar.com/rastrear-javascript).

Para saber si estamos en este caso podemos hacer uso de [Google Search Console](https://search.google.com/search-console) (Inspeccionar URL) o la [prueba de optimización para móviles](https://search.google.com/test/mobile-friendly).  En el caso de que estemos bloqueando algún fichero, nos lo dirá y podremos **comprobar cómo ve Googlebot nuestra web**. 

## Cómo afecta al SEO bloquear CSS

El CSS es utilizado para la parte visual de la página web.  Esto implica que no afectará de ninguna forma a la estrategia SEO puesto que los robots de búsqueda únicamente se fijan en el código fuente de la misma y no en su parte visual. 

## Un caso en el que sí puedes bloquear un recurso que ve el usuario

La regla general es dejar que Googlebot descargue todo lo que ve una persona. Hay excepciones, y John Mueller [acaba de confirmar una](https://www.searchenginejournal.com/google-says-its-okay-to-block-some-javascript-resources-with-robots-txt/595736/) en Reddit: una web con un aviso de verificación de edad, obligatorio por ley, que se carga desde otro dominio mediante una API.

Según Mueller, si ese dominio externo bloquea el rastreo en su `robots.txt`, Googlebot no descargará el contenido y no lo usará al renderizar. Es lo que ocurre con muchos servicios de publicidad. La alternativa, cuando no controlas el `robots.txt` del otro dominio, es bloquear en el tuyo el fichero JavaScript concreto que carga el aviso. Eso sí, solo si ese fichero hace una única cosa: si mezcla varias funciones, no lo bloquearía.

Dos condiciones para hacerlo bien:

- **El resto de la página tiene que seguir cargando con normalidad** aunque Googlebot no pueda descargar ese recurso. En un aviso de edad suele ser así, pero compruébalo con la inspección de URL de Search Console.
- **Bloquea solo ese recurso**, no carpetas enteras de scripts. Un bloqueo amplio sigue siendo el error de siempre, y las webs que bloqueaban recursos críticos llegaron a perder posiciones.

Lo que sale de aquí es matizar la regla, no tirarla: se puede ocultar a Googlebot un elemento auxiliar, y nunca el contenido que quieres posicionar.

## ¿Qué bloqueamos sin afectar a la indexación?

Comenzaremos por [bloquear el acceso a robots SPAM](https://emirodgar.com/listado-robots-bloquear) o que no nos interesa que rastreen e indexen nuestro sitio web.  Con eso veremos una reducción bastante importante de nuestros recursos.

Por otro lado recomiendo hacer uso de servicios CDN (Content Delivery Network) como Cloudflare que nos ayudarán a cachear y optimizar la entrega de recursos estáticos.

Por último, podemos bloquear los archivos CSS ya que esta medida no afectará a la indexación ni futuro posicionamiento de la página web.

Un caso particular de bloqueo de contenido es el de los muros de pago: te explico [cómo trabajar el SEO de contenidos de pago](https://emirodgar.com/contenidos-pago-google) sin caer en cloaking.


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTkwOTUwMzcxMiwtMTE1MjY0OTg4OCwtMT
UyNjQ4MTE4OCwtNzM4MDg4NzIsLTc5ODQ1NzQsNzY4NDg0NDhd
fQ==
-->