---
title: ¿Cómo afecta el hosting al SEO?
description: No es un factor SEO directo pero sí puede afectar a nuestra estrategia de posicionamiento web
image: https://emirodgar.com/cdn/images/og/auditoria.png
layout: emirodgar_post
date: 19/05/2021
date_modified: 26/10/2026
author: Emirodgar
folder: seo
lang: es_ES
sitemap: 1
feed: 1
permalink: hosting-seo

---

El host o servidor web no es un  [factor SEO](https://emirodgar.com/factores-seo) directo pero sí aporta una serie de características que pueden afectar a nuestra **estrategia de posicionamiento web**.

Estos son algunos de los **elementos SEO cruciales** para cualquier estrategia y que están estrechamente relacionados con el hosting en el que esté alojada nuestra web:

-   [Ubicación (geolocalización)](#ubicacion)
-   [Tiempo de carga](#tiempo-carga)
-   [Uptime (tiempo que la página está visible sin caídas)](#uptime)
-   [Los (malos) vecinos que comparten con nosotros el servidor](#malos-vecinos)
-   [Configuraciones adicionales](#configuraciones)

## <a name="ubicacion"></a>1- ¿Afecta la ubicación del hosting al SEO?

Durante años los SEOs buscábamos servidores web alojados en el mismo país al que queríamos orientarnos. Si nuestro dominio era www.ejemplo.es necesitábamos un hosting ubicado en España para reforzar nuestro posicionamiento en dicho mercado.

> Hoy en día ya no es tan importante dónde está ubicado el servidor sino más bien cuánto tarda Google en llegar a él.

La prioridad de Google es ofrecer un resultado lo más rápido posible a sus usuarios, por ello casi todas las páginas -para mejorar los tiempos de entrega- hacen uso de Redes de distribución de contenidos, comúnmente conocidas por sus siglas en inglés:  **CDN** (Content Delivery Network).

Al usar un CDN nuestra web se clona en múltiples servidores ubicados a lo largo del mundo que envían la información a los usuarios según su proximidad. 

Por ejemplo, si yo accedo desde España seguramente me sirvan la web desde Europa y cuando lo haga un usuario de México la verá desde un servidor ubicado en Estados Unidos. Esto **facilita los tiempos de carga** y mejora considerablemente la **experiencia de los usuarios**.

## <a name="tiempo-carga"></a>2- Tiempo de carga

Posiblemente una velocidad adecuada sea factor más relevante de cara a una estrategia SEO. Una página que carga rápido se verá beneficiada tanto a nivel de buscadores (SEO) como en el resto de la estrategia digital.

Google ya ha dejado claro su prioridad por lo que ellos determinan una [experiencia de usuario óptima](https://developers.google.com/web/tools/chrome-user-experience-report/) y  ha lanzado proyectos en línea con esos intereses como AMP, para páginas móviles, o PWA como sustituto de las apps mobile que conocemos hasta ahora.

Podemos hacer uso de aplicaciones como [Web.dev](https://web.dev) (basada en [Google Lighthouse](https://emirodgar.com/automatizar-analisis-lighthouse)) o [GTMetrix](https://gtmetrix.com/) para conocer qué puntos debemos otimizar en nuestra web.

## <a name="uptime"></a>3- Uptime / Downtime

Este término se refiere al **tiempo que una página está accesible**. Erróneamente se piensa que si una web se cae sin que el robot de búsqueda se percate de ello no pasa nada pero el hecho de que una página sufra caídas intermitentemente afectará a la estrategia digital.

Un buen hosting debería garantizar un 99% de uptime. Migraciones, actualizaciones de servicios o caídas debido a otros factores harán que nuestra web no esté siempre accesible perjudicando nuestro rendmiento.

Servicios como [Uptimerobot](https://uptimerobot.com/) nos ayudarán a monitorizar el uptime y downtime de nuestra página.

### Si vas a tirar la web abajo a propósito: sirve un 503

Hay paradas que son planificadas: una migración, un cambio de servidor o, como ha pasado esta semana, [parchear PHP por dos fallos críticos](https://www.searchenginejournal.com/google-reminds-sites-to-serve-503s-during-server-downtime/593873/). Google Search Central ha recordado qué hay que responder en ese tiempo: un **503 (Service Unavailable)**, que le dice al rastreador que es temporal y que conserve las URLs ya indexadas. Lo que no conviene es dejar que la web dé timeout, un 500 o un 404, y mucho menos una página de error que responda con un 200, porque Google acabaría indexando ese mensaje de error.

Algunas cosas que conviene tener claras:

- **El 503 tiene que salir de algo que siga funcionando mientras PHP está parado.** John Mueller sugiere servirlo fuera de PHP, con una regla en el CDN o apuntando el DNS a un servidor temporal. El ejemplo clásico de enviarlo con código PHP no sirve cuando PHP es precisamente lo que está caído.
- **El `robots.txt` debe seguir respondiendo con normalidad.** Si devuelve un 503, Google interpreta que no puede rastrear nada.
- **Puedes añadir una cabecera `Retry-After`**, en segundos o con fecha y hora UTC, para indicar cuándo volver a intentarlo.
- **No lo alargues más de uno o dos días.** Según la documentación de Google, si ve el mismo error en una URL durante varios días puede acabar sacándola del índice. Y mientras dura, Google reduce el ritmo de rastreo en todo el dominio, también en las URLs que sí responden.

Un 503 de diez o quince minutos de vez en cuando no es un problema. Una parada de días sí lo es, y para esos casos Google propone dejar una home indexable con un 200 como página provisional.

Pero ninguna herramienta sustituye a revisar cada cierto tiempo nuestros datos en Search Console. Hay problemas (una caída del servidor, una migración, un bloqueo mal configurado) que pueden ocurrir sin nuestro conocimiento y que se traducen en una caída de clics e impresiones como la de la imagen. Cuanto antes la veamos, menos nos costará.

![Caída brusca de clics e impresiones en Search Console en los últimos días del gráfico](https://emirodgar.com/cdn/images/posts/search-console-caida-clics-impresiones.png){:class="img-responsive"}

## <a name="malos-vecinos"></a>4- Malos vecinos

Dependiendo del tipo de hosting que contratemos, tendremos una IP para nosotros solos o será compartida por otras páginas alojadas físicamente junto a la nuestra.

En éste último escenario es posible que si uno de esos compañeros digitales lleva a cabo prácticas en contra de las directrices de calidad de Google, nos pueda afectar.

Hay herramientas como [Bad Neighborhood](https://www.bad-neighborhood.com/text-link-tool.htm) que nos ayudarán a identificar a vecinos peligrosos antes de exponer nuestra web.

## <a name="configuraciones"></a>5- Configuraciones adicionales

Un buen servidor web nos tiene que permitir llevar a cabo acciones específicas para trabajar en el día a día con nuestra web. Los aspectos que muestro a continuación son cruciales a nivel de SEO técnico.

-   Capacidad de implementar redirecciones
-   Capacidad de comprimir recursos (html, js, imágenes, etc)
-  Capacidad de personalizar las páginas de error 
-   Servidores DNS y configuraciones asociadas

Un buen hosting debe darnos acceso completo a las configuraciones antes mencionadas dado que si no fuéramos capaces de poder operar con redirecciones o personalizar ciertos aspectos de nuestra página estaríamos limitando enormemente factores cruciales para nuestra estrategia SEO.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMzE3NzI5MjkzLDEwMDM3MTAwOTJdfQ==
-->