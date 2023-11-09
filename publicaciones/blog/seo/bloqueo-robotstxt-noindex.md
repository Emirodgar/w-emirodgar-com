---
title: Problemas al rastrear con robots.txt y noindex
description: Ambas directivas pueden ser excluyentes y generar problemas de indexación de nuestras páginas.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
date: 09/11/2023
permalink: bloqueo-robotstxt-noindex

---

> A día de hoy es fundamental [priorizar la indexación de las páginas clave](https://emirodgar.com/priorizar-indexacion) para asegurarnos de que nuestros contenidos de valor son indexados por los rastreadores.

Cuando hablamos de rastreo e indexación, es crucial entender y utilizar de forma correcta las herramientas que los buscadores ponen a nuestro alcance. Las dos más importantes, son: el fichero `robots.txt` y la directiva `noindex`.

## Evitar el rastreo con el fichero robots.txt

El fichero `robots.txt` es un archivo que se utiliza para indicar a los robots de los motores de búsqueda qué páginas de un sitio web pueden o no rastrear. 
Se trata de una recomendación que puede ser ignorada por los buscadores y sólo afecta al rastreo, no a la indexación.

Este fichero debe estar siempre en la raíz del sitio y tener ese mismo nombre. Si disponemos de subdominios, cada uno de ellos podrá tener su propio fichero. En el caso de esta página, se ubica en:

```
https://emirodgar.com/robots.txt
```

En mi caso, he especificado que quiero bloquear el rastreo a una serie de [robots de herramientas conocidas](https://emirodgar.com/listado-robots-bloquear) y también a los [rastreadores de las inteligencias artificiales](https://emirodgar.com/bloquear-rastreador-ia).

Para bloquear el rastreo debemos hacer uso de la directiva `Disallow` de la siguiente manera:

```
User-agent: *
Disallow: /privado/
```

Si queremos bloquear a un robot en concreto, debemos  sustituir el `User-agent: *` del código anterior por el nombre del rastreado, por ejemplo: `User-agent: Googlebot`.

La instrucción anterior evitará que se rastree la subcarpeta `/privado/`

## Evitar la indexación con noindex

Como indiqué antes, la directiva `disallow` puede ser ignorada por los rastreadores por lo que **no garantiza que una página no aparezca en los buscadores**.
La única manera efectiva para evitar que una página sea indexada es utilizar la directiva `noindex`.

```

```

## Cuidado al usar ambas directrices a la vez

> La directiva `disallow` bloquea el rastreo, pero no el indexado, mientras que la directiva `noindex` bloquea el indexado, pero no el rastreo.

La directiva `disallow` del `robots.txt` impide que los robots rastreen una página, pero no impide que la indexen. Esto significa que los motores de búsqueda pueden ver la página y su contenido, pero no la incluirán en los resultados de búsqueda.
 - Si la página ya estaba indexada, es muy posible que, al bloquear el rastreo, no se actualicen los contenidos y quede desactualizada.
 - Si la página nunca había sido indexada, es muy posible que nunca lo haga, dado que no será rastreada. Es posible que si existe mucho enlazado interno y externo hacia esa página, los buscadores consideren ignorar la directiva de rastreo e indexen la URL. De ser el caso, nos informarán a través de Google Search Console (ejemplo en la siguiente imagen). 

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/ce4b07cc-4a7d-44db-bc8a-c37a4b752f7a){:class="img-responsive"}


La directiva `noindex` impide que los motores de búsqueda indexen una página, pero no impide que la rastreen. Esto significa que los robots pueden ver la página y su contenido, pero no la tendrán en cuenta al calcular la relevancia de las páginas para las consultas de búsqueda.
 - Si incluimos `noindex` a una URL que previamente ya estaba bloqueada por la directiva `disallow` es muy probable que, al no ser rastreada, no se actualice esta información y que la página siga presente en el índice de búsqueda. Si queremos eliminarla, tendremos que permitir primero el rastreo para que se pueda encontrar la directiva de `noindex` y proceder así a su desindexación.
