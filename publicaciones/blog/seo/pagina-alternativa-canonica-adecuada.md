---
title: Página alternativa con etiqueta canónica adecuada, qué es y por qué no es un error
description: Search Console muestra miles de URLs como «Página alternativa con etiqueta canónica adecuada» y parece una incidencia. Te explico qué significa, por qué es informativo y qué hacer con el botón de validar corrección.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 15-10-2026
folder: seo
permalink: pagina-alternativa-canonica-adecuada

---

Es una duda que se repite mucho en comunidades SEO: alguien abre el informe de indexación de Search Console, ve más de 7.000 páginas en «Página alternativa con etiqueta canónica adecuada» y pregunta si hay alguna forma de indexarlas en bloque, porque no va a solicitarlas una por una.

La respuesta corta es que **no hay nada que corregir y, por tanto, nada que indexar**. Te explico por qué.

## Qué significa este estado

Search Console agrupa las URLs en el informe de páginas según su situación. Dentro de las que no están indexadas, hay motivos que sí son un problema y otros que son meramente informativos. «Página alternativa con etiqueta canónica adecuada» es de los segundos.

Quiere decir que esa URL declara, con la [etiqueta canónica](https://emirodgar.com/etiqueta-canonica), que su versión principal es **otra URL**, y Google ha respetado esa indicación. Por eso la URL no se indexa ni aparece en los resultados: lo que se indexa y posiciona es la canónica. Es exactamente lo que queríamos que pasara.

![Estado «Página alternativa con etiqueta canónica adecuada» en Search Console con 7,71 mil páginas afectadas, que bajan desde unas 13 mil entre julio y octubre de 2026](https://emirodgar.com/cdn/images/posts/search-console-pagina-alternativa-canonica-adecuada.png){:class="img-responsive"}

Fíjate en que el texto del propio informe dice «Estas páginas no se indexan ni aparecen en Google». Es la descripción de cualquier estado de no indexada, y no implica que algo esté roto.

## El caso típico, las páginas AMP

El ejemplo más claro son las URLs [AMP](https://emirodgar.com/amp). Según las especificaciones del propio proyecto AMP, cuando existe una versión AMP y otra normal de una página, la versión AMP debe llevar una etiqueta canónica apuntando a la versión web (no AMP), y la normal puede apuntar a la AMP con `rel="amphtml"`.

Eso significa que, en un sitio con AMP, **todas las URLs AMP van a aparecer en este estado**, y es lo correcto. Si tienes 7.000 páginas con versión AMP, verás unas 7.000 en este informe. En la imagen se ve además que la cifra va bajando con el tiempo, de unas 13 mil a 7,71 mil, algo habitual cuando se retira AMP o Google va descartando esas URLs de su rastreo.

Lo mismo ocurre con otras variantes que apuntan a una canónica: versiones con parámetros, URLs con barra final o sin ella, o versiones para móvil separadas.

## ¿Se pueden indexar en bloque?

No. No existe una forma de pedir la indexación de múltiples URLs a la vez en Search Console: la solicitud de indexación se hace manualmente, URL a URL. Y en este caso, además, **no tendría sentido hacerlo**: si consiguieras indexar las versiones AMP, competirían con la versión web y generarías justo el [contenido duplicado](https://emirodgar.com/etiqueta-canonica) que la canónica evita.

Si lo que te preocupa es que Google descubra y rastree tus páginas importantes, ayuda más [priorizar la indexación](https://emirodgar.com/priorizar-indexacion) con sitemap y enlazado interno que insistir en solicitudes manuales.

## Para qué sirve el botón «Validar corrección»

Cuando un estado es un error real, Search Console ofrece el botón **Validar corrección**. Lo que hace es pedirle a Google que vuelva a revisar todas las páginas marcadas con ese problema. Si ya están bien, pasan a estado correcto, y si no, siguen como error.

Dos matices importantes:

- **Validar no es indexar.** Que una página supere la validación solo significa que Google ya no ve el problema y queda lista para volver a rastrearse y, si procede, posicionar. La indexación depende después de la calidad y de la [prioridad](https://emirodgar.com/pagina-no-indexa) que Google le dé.
- **Está disponible aunque no haya nada que arreglar.** Como se ve en las capturas, el botón aparece también en estados informativos, como este o como el de «No se ha encontrado (404)». No lo pulses por inercia: si el estado es el esperado, no hay corrección que validar.

![Estado «No se ha encontrado (404)» en Search Console con el botón Validar corrección](https://emirodgar.com/cdn/images/posts/search-console-no-encontrado-404-validar-correccion.png){:class="img-responsive"}

Con los 404 pasa algo parecido: si son URLs que ya no existen y es correcto que así sea, Google las irá descartando solo. Solo conviene actuar cuando una página que debería existir devuelve 404.

## Qué revisar de verdad

Lo único que merece una comprobación rápida es que **la canónica apunte donde tú quieres**. Mira con la herramienta de inspección de URL un par de ejemplos:

1. La «URL canónica declarada por el usuario» es la versión web que esperas.
2. La «URL canónica seleccionada por Google» coincide con la declarada.

Si Google elige una canónica distinta a la tuya, ahí sí hay algo que investigar, y suele aparecer en otro estado: «Duplicada: Google ha elegido una página canónica diferente a la del usuario». Ese es el que te interesa vigilar, no este.

En resumen: no te preocupes por las páginas en «Página alternativa con etiqueta canónica adecuada». Son la prueba de que la canónica funciona.
