---
title: Problemas al rastrear e indexar con robots.txt y noindex
description: Bloquear con robots.txt no impide que Google indexe una URL, y si además le pones noindex, Google nunca llegará a verlo. Te enseño un caso real con más de 9.000 URLs indexadas pese al bloqueo.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
date: 09/11/2023
date_modified: 27/10/2026
permalink: bloqueo-robotstxt-noindex

---

> A día de hoy es fundamental [priorizar la indexación de las páginas clave](https://emirodgar.com/priorizar-indexacion) para asegurarnos de que nuestros contenidos de valor son indexados por los rastreadores.

Cuando hablamos de rastreo e indexación, es crucial entender y utilizar de forma correcta las herramientas que los buscadores ponen a nuestro alcance. Las dos más importantes son el fichero `robots.txt` y la directiva `noindex`. El error más habitual es creer que hacen lo mismo. **No lo hacen, y combinarlas mal es una de las formas más fáciles de acabar con URLs indexadas que no querías en el índice.**

## Evitar el rastreo con el fichero robots.txt

El fichero `robots.txt` indica a los robots de los motores de búsqueda qué URLs de un sitio pueden o no rastrear. Los buscadores serios lo respetan, pero es un protocolo de cortesía, no un mecanismo de seguridad: cualquier rastreador puede ignorarlo. Y, sobre todo, **solo afecta al rastreo, no a la indexación**.

Este fichero debe estar siempre en la raíz del sitio y tener ese mismo nombre. Si disponemos de subdominios, cada uno de ellos necesita su propio fichero. En el caso de esta página, se ubica en:

```
https://emirodgar.com/robots.txt
```

En mi caso, he especificado que quiero bloquear el rastreo a una serie de [robots de herramientas conocidas](https://emirodgar.com/listado-robots-bloquear) y también a los [rastreadores de las inteligencias artificiales](https://emirodgar.com/bloquear-rastreador-ia).

Para bloquear el rastreo hay que usar la directiva `Disallow`:

```
User-agent: *
Disallow: /privado/
```

Si queremos bloquear a un robot en concreto, sustituimos el `User-agent: *` por el nombre del rastreador, por ejemplo `User-agent: Googlebot`. La instrucción anterior evita que se rastree la carpeta `/privado/` y todo lo que cuelga de ella. Si necesitas patrones más finos, tienes [cómo usar expresiones regulares en el robots.txt](https://emirodgar.com/regex-robots-txt).

## Evitar la indexación con noindex

La directiva `Disallow` no garantiza que una página no aparezca en los buscadores. Para evitar que una URL se indexe hay que usar `noindex`, ya sea como metaetiqueta en el HTML:

```
<meta name="robots" content="noindex">
```

o como cabecera HTTP, que es la única opción para ficheros que no son HTML, como los PDF:

```
X-Robots-Tag: noindex
```

Dos matices que conviene tener presentes:

 - Google dejó de soportar la directiva `noindex` dentro del propio `robots.txt` en septiembre de 2019. Si ves una línea `Noindex:` en un fichero, no hace nada.
 - Para que Google vea el `noindex`, la página tiene que poder rastrearse. Es la clave de todo lo que sigue.

## Cuidado al usar ambas directivas a la vez

> `Disallow` bloquea el rastreo, pero no la indexación. `noindex` bloquea la indexación, pero necesita que la página se rastree para poder leerse.

Una URL bloqueada en `robots.txt` no se rastrea, así que Google **no ve su contenido ni sus etiquetas**. Pero si esa URL recibe enlaces, internos o externos, Google conoce su existencia y puede indexarla igualmente, sin contenido, a partir de la URL y del texto de los enlaces que apuntan a ella. De ahí que a veces veas resultados sin descripción o con el mensaje de que no hay información disponible por el `robots.txt`.

### Un caso real, más de 9.000 URLs indexadas pese al bloqueo

Esto no es una rareza teórica. En un proyecto en el que trabajo, Search Console avisa de que 9,34 mil páginas están afectadas por el estado **"Se ha indexado aunque un archivo robots.txt la tenía bloqueada"**. Lo interesante es la evolución: prácticamente cero hasta finales de agosto de 2026 y una subida escalonada desde entonces, hasta estabilizarse en octubre. Cada escalón es una tanda de URLs que Google descubre por enlaces y decide indexar aunque no pueda rastrearlas.

![Gráfico de Search Console con 9,34 mil páginas indexadas aunque un archivo robots.txt las tenía bloqueadas, creciendo desde agosto hasta octubre de 2026](https://emirodgar.com/cdn/images/posts/search-console-indexado-aunque-bloqueado-robots.png){:class="img-responsive"}

Si inspeccionamos una de esas URLs, la ficha lo deja claro:

![Inspección de URL en Search Console con rastreo no permitido por robots.txt, obtención de página bloqueada, indexación permitida y la propia URL como canónica seleccionada por Google](https://emirodgar.com/cdn/images/posts/search-console-inspeccion-bloqueada-robots-indexacion-permitida.png){:class="img-responsive"}

 - **¿Se permite el rastreo?** No, está bloqueada por el archivo robots.txt. La obtención de la página da error por el mismo motivo.
 - **¿Se permite la indexación?** Sí. Google no ha podido leer la página, así que no ha encontrado ningún `noindex`, y por tanto nada le impide indexarla.
 - **Canónica seleccionada por Google:** la propia URL inspeccionada. Como no se rastrea, no puede leer ningún `rel="canonical"`, y la consolidación de señales que esperabas no se produce.

El resultado es lo peor de los dos mundos: Google gasta recursos en descubrir esas URLs, las indexa sin contenido y tú no puedes controlar cómo se muestran.

### Qué pasa en cada escenario

 - **La página ya estaba indexada y bloqueas el rastreo:** Google no podrá actualizarla, así que el título y el resumen que muestra pueden quedar desfasados, y lo seguirá mostrando mientras tenga señales de que existe.
 - **La página nunca se indexó y la bloqueas:** lo normal es que no aparezca, pero si recibe mucho enlazado interno o externo, Google puede indexar la URL sin contenido. Es el caso de la imagen anterior, y Search Console lo avisa con ese estado.
 - **Añades `noindex` a una URL bloqueada:** no sirve de nada, porque Google nunca llegará a leerlo. Si quieres desindexarla, primero hay que **permitir el rastreo** (quitar el `Disallow`) para que se lea el `noindex`, esperar a que desaparezca del índice y solo entonces, si hace falta, volver a bloquear.

## Cómo resolverlo

1. **Decide qué quieres de cada grupo de URLs.** Si no quieres que se indexen, la herramienta es `noindex` (o una redirección, o un 404/410 si la página ya no debe existir), no `robots.txt`.
2. **Quita el `Disallow` de esas URLs** y añade `noindex` en la metaetiqueta o en la cabecera `X-Robots-Tag`. Es contraintuitivo, pero necesitas que Googlebot entre para leerlo.
3. **Revisa el enlazado interno.** Si tu propia web enlaza a miles de URLs que luego bloqueas, estás empujando a Google a descubrirlas. Mejor corregir la causa que taparla con el `robots.txt`, como explico en [robots.txt como tirita de una arquitectura deficiente](https://emirodgar.com/robots-txt-arquitectura-web).
4. **Supervisa el informe de indexación de Search Console.** Cuando Google rastree las URLs y vea el `noindex`, pasarán de "Se ha indexado aunque un archivo robots.txt la tenía bloqueada" a "Excluida por la etiqueta noindex" y el número bajará. Tarda semanas, no días.
5. **Si necesitas que desaparezcan ya de los resultados**, la herramienta de eliminación de URLs de Search Console las oculta temporalmente, pero no sustituye a lo anterior. Tienes el detalle en [cómo eliminar una URL de Google](https://emirodgar.com/eliminar-url-google).
6. **Solo cuando estén fuera del índice**, puedes volver a bloquear el rastreo si el objetivo es ahorrar presupuesto de rastreo en secciones enormes. Lo explico en [indexación selectiva](https://emirodgar.com/indexacion-selectiva).

En resumen: `robots.txt` decide qué se rastrea y `noindex` decide qué se indexa. Si quieres que algo no aparezca en Google, no lo bloquees, déjalo rastrear con `noindex`.
