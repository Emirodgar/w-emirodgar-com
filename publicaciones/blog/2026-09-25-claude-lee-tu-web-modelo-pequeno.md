---
title: "Filtración: Claude ya no lee tu web directamente, primero la resume un modelo pequeño"
description: Un análisis no oficial de Natzir Turrado sobre el leak del system prompt de Opus 5.5 revela que Claude ya no recibe tu página en su contexto, sino la respuesta de un modelo intermedio. Te explico qué cambia y qué implica para tu SEO y GEO.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 25-09-2026
folder: geo
permalink: claude-lee-tu-web-modelo-pequeno

---

Aviso antes de nada: lo que cuento aquí **no es información oficial de Anthropic**, es una filtración. [Natzir Turrado](https://www.linkedin.com/posts/natzir_bombazo-seo-ai-search-claude-ya-no-share-7508412387046297600-TU56/) —especialista en visibilidad en buscadores tradicionales y de IA, cofundador de AdRanger.io— lleva tiempo siguiendo los leaks de system prompts que publica Pliny para entender cómo buscan y extraen información las LLMs (de hecho, así llegó a reportarle a Anthropic un bug en uno de sus sistemas de extracción). Con el leak del system prompt de Opus 5.5 —el modelo que ya integra Claude con Cowork—, Natzir ha encontrado un cambio que me parece de lo más relevante que he leído sobre SEO en IA en lo que va de año.

## ¿Cómo leía Claude tu página hasta ahora?

Hasta el leak de Opus 5 (julio), cuando alguien pegaba una URL en el chat de Claude, WebFetch descargaba esa URL, la convertía a markdown, y ese markdown entraba **directamente en el contexto del modelo grande**. Es decir, Opus "leía" tu página tal cual, con sus propios ojos.

## ¿Qué cambia con Opus 5.5?

Esto ya no funciona así. Según el leak, ahora el proceso tiene un paso intermedio:

1. WebFetch sigue descargando la URL y convirtiéndola a markdown (eso no cambia).
2. Pero antes de llegar a Opus, **un modelo pequeño y rápido lee ese markdown y responde a la pregunta concreta que le hace Opus** sobre esa página.
3. Opus recibe la respuesta de ese modelo pequeño, no el contenido de tu página. Tu web, literalmente, nunca entra en el contexto del modelo grande.

Este comportamiento no es nuevo en sí mismo: es el mismo que ya usaba la herramienta WebFetch de Claude Code. Lo que cambia es que ahora **llega también a la app principal de Claude**, el chat que usa cualquier usuario, no solo quien programa.

## El doble filtro que ahora tiene que superar tu contenido

Hay dos criba antes de que Opus vea nada relacionado con tu página:

- **La extracción de HTML a markdown.** Si algo no sobrevive a esa conversión (contenido cargado por JavaScript, texto escondido en pestañas o acordeones mal implementados), ya no existe para el sistema. Esto es justo lo que llevo explicando desde hace tiempo sobre [SEO técnico en la era de la inteligencia artificial](https://emirodgar.com/seo-tecnico-en-la-era-de-la-inteligencia-artificial): lo que no está en el HTML, no está.
- **Lo que el modelo pequeño considere relevante para esa pregunta concreta.** Aunque tu contenido sobreviva a la extracción, ahora depende también de que ese modelo intermedio decida que responde a lo que Opus le ha preguntado. Puedes tener la información correcta en la página y aun así no pasar el filtro si no está formulada de forma que responda directamente a la pregunta.

## Otros cambios que trae el mismo leak

Además del cambio en WebFetch, Natzir documenta varios ajustes más en cómo busca y cita Claude:

- **Desaparecen las instrucciones de búsqueda rígidas** que llevaban desde Sonnet 3.7 (queries de 1 a 6 palabras, sin operadores, límites de llamadas, preferencia por fuentes originales). Ahora el criterio para decidir cuándo buscar cabe en un párrafo: todo lo que describe el mundo actual —cargos, precios, normas vigentes, rankings— aunque el modelo "crea" conocerlo de memoria.
- **Busca en secuencia, no en paralelo:** cada hallazgo condiciona la siguiente búsqueda, en vez de lanzar varias consultas a la vez sin relación entre ellas.
- **Orden de prioridad de fuentes:** primero los conectores de tus propios datos, después WebSearch/WebFetch, y el navegador solo como último recurso, para login, formularios o páginas que WebFetch no puede renderizar.
- **WebSearch solo devuelve resultados desde EE.UU.**, con filtros de dominios permitidos y bloqueados.
- **WebFetch cachea cada URL 15 minutos** y no sigue redirecciones entre dominios distintos. Y si un sitio está bloqueado por motivos legales, el sistema no puede saltárselo con curl, caché o un mirror.
- **Nuevos widgets** para tarjetas de enlaces (de 1 a 6, sin inventarse URLs), tarjetas de producto y listas de lugares, aunque estas últimas no pueden usar datos de Google Places.
- **El fan-out de Deep Research se confirma en el propio prompt:** la skill descompone la pregunta en subtemas y lanza entre 1 y 6 (o más) subagentes en paralelo según la complejidad. El ejemplo que pone Natzir es útil para visualizarlo: una comparativa de CRMs se puede dividir en precio, funcionalidades, integraciones y opiniones de usuarios, cada una investigada por un subagente distinto.

## ¿Qué implica esto para tu estrategia de SEO y GEO?

La conclusión de Natzir es la que más me interesa trasladar: ya no basta con que tu contenido sobreviva a la extracción a markdown. Ahora tiene que **responder directamente la pregunta concreta que Opus le hace al modelo pequeño**, no solo contener la información en algún lugar de la página.

En la práctica, esto refuerza algo que ya defiendo cuando hablo de [cómo testar tu estrategia GEO en vez de adivinar](https://emirodgar.com/geo-empieza-a-probar): cuanto más arriba y de forma más explícita respondas a la pregunta que un usuario (o un modelo) puede hacerse sobre tu producto o servicio, menos dependes de que un filtro intermedio "interprete" correctamente tu contenido. Un bloque claro de características, precio o comparativa, formulado como respuesta directa a una pregunta, tiene más opciones de sobrevivir a este doble filtro que un párrafo bien escrito pero disperso.

También cambia un poco cómo pienso el bloqueo de bots: si te preocupa que un rastreador de IA acceda a tu contenido (algo que ya traté al hablar de [cómo segmentar el bloqueo de bots sin pasarte de frenada](https://emirodgar.com/segmentar-bloqueo-bots)), recuerda que ahora ni siquiera el propio Claude "ve" tu página tal cual: la ve a través de un resumen filtrado por otro modelo. Bloquear o no bloquear deja de ser una decisión binaria sobre "quién entra"; también importa qué sobrevive una vez dentro.

## Mi conclusión

Como toda filtración, esto hay que cogerlo con la cautela correspondiente: no es un anuncio oficial de Anthropic, es la lectura de alguien que lleva tiempo siguiendo estos leaks con criterio. Pero si se confirma, es un cambio de fondo, no de forma: pasamos de "¿me lee la IA?" a "¿supero el filtro del modelo que decide qué le cuenta a la IA?". Y esa es una pregunta bastante distinta a la que la mayoría nos estábamos haciendo hasta ahora.
