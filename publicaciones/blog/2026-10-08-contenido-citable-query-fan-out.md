---
title: Cómo escribir contenido que la IA pueda citar y cubrir el query fan-out
description: Las IA no responden con una sola búsqueda sino con varias, y citan fragmentos, no páginas. Te cuento qué es el query fan-out, cómo detectar las subpreguntas de tu tema y cómo escribir pasajes que se puedan citar.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 08-10-2026
date_modified: 14/10/2026
folder: geo
permalink: contenido-citable-query-fan-out

---

Hay dos ideas que se repiten cada vez que se habla de optimizar para IA: que los asistentes **no hacen una sola búsqueda**, y que **citan fragmentos, no páginas completas**. De ahí salen dos preguntas prácticas. ¿Qué preguntas hace realmente la IA sobre mi tema? Y ¿está mi contenido escrito de forma que alguien pueda citar un trozo suelto?

Te cuento cómo lo abordo yo, separando lo que viene de fuentes oficiales de lo que son estudios de terceros y de lo que es mi opinión.

## Qué es el query fan-out

Cuando haces una pregunta a un motor de respuestas, no lanza solo esa búsqueda. La descompone en **subconsultas** y las lanza por separado, a veces en paralelo. Google lo documenta así para AI Overviews y AI Mode: emplea una técnica de *query fan-out* con "múltiples búsquedas relacionadas en subtemas y fuentes de datos" para encontrar un conjunto más amplio y diverso de enlaces.

Hay otros ejemplos. En el leak del system prompt de Opus 5.5 que analizó Natzir Turrado, la skill de Deep Research descompone la pregunta en subtemas y lanza subagentes en paralelo. Su ejemplo: una comparativa de CRMs se divide en **precio, funcionalidades, integraciones y opiniones de usuarios**, y cada parte se investiga por separado. Lo conté en [la filtración sobre Claude y el modelo pequeño](https://emirodgar.com/claude-lee-tu-web-modelo-pequeno), con la cautela de que no es información oficial.

Y el fan-out se **personaliza**. En el experimento de iPullRank con Google Personal Intelligence, una pregunta genérica sobre plataformas de streaming acabó buscando listados "para familias" sin que nadie lo pidiera. Está en [cuando AI Mode lee el correo del usuario](https://emirodgar.com/google-personal-intelligence-seo).

## Qué hace ChatGPT en la práctica, según Ahrefs

Ahrefs ha publicado un estudio con 66,6 millones de respuestas de la versión gratuita de ChatGPT (sin sesión iniciada, GPT-5.6 Luna) y 15 millones de consultas de fan-out de agosto y septiembre de 2026. Es una muestra de un modelo en un momento concreto, y ellos mismos avisan de que OpenAI cambia la recuperación constantemente. Pero deja datos útiles:

- **Solo el 14,4 % de las respuestas necesitó buscar en la web.** Cuando buscó, hizo una media de 1,6 consultas. Por tanto, en muchas preguntas, que te mencione depende de lo que ChatGPT ya sabe de tu marca, no de lo que pueda encontrar. Los modelos gratuitos tienden a apoyarse más en lo entrenado para ahorrar costes.
- **El 6,8 % de las consultas usó el operador `site:`** para buscar dentro de una sola web, repartidas en unos 116.000 dominios. Entre los sitios más buscados, tres de cada cuatro eran webs de marca, y 8 de los 10 dominios más consultados eran marcas de consumo. Los minoristas sumaban un 11,9 %, y Reddit y Facebook un 1,9 %.
- **Las consultas se parecen cada vez más a "precio", "oficial" y "reseñas".** "Official" subió del 10,1 % al 13,1 % de las consultas en inglés entre agosto y septiembre, y "price" del 6,0 % al 8,9 % (un 47 % más en términos relativos). "Meaning" y "definition" bajaron en torno a una quinta parte.
- **El tipo de pregunta cambia las fuentes.** En una prueba aparte con 20.000 prompts de EE. UU., las preguntas factuales (precios, características, datos de empresa) citaban una fuente oficial el 84,4 % de las veces, y las comparativas ("A vs B") el 68,3 %. En las comparativas, la mayoría de citas iban a otros sitios.
- **Las fuentes originales ganan a las que resumen.** Con datos de citas de marzo a septiembre, PubMed pasó del puesto 64 al 4 entre los dominios más citados y la FDA entró en el 8, mientras caían páginas de salud que resumen esa investigación, como WebMD. Reddit, Wikipedia y YouTube perdieron cuota.

Lo que me llevo es doble. Para los datos factuales (precios, especificaciones, soporte), tu propia web tiene que responder en texto plano y en una página que se pueda encontrar, porque es donde ChatGPT irá con `site:`. Y para las comparativas, el hueco está en reseñas y páginas que comparan, no solo en la ficha de producto. En su ejemplo de zapatillas de running, las consultas eran sobre todo "best", "2026", "review" y "vs", y "official" aparecía poco. El fan-out de tu sector puede ser muy distinto del global, y por eso conviene mirarlo con datos de tu categoría.

Un apunte: estas cifras son de consultas amplias en inglés, y el propio estudio reconoce que otros trabajos, con prompts comerciales del tipo "mejor X", encontraron más búsquedas y más `site:` por prompt.

## Qué cambia para quien escribe contenido

Antes pensabas en una keyword y en una página. Ahora la consulta del usuario se convierte en un **conjunto de preguntas**, y tu página puede ser elegida por cualquiera de ellas aunque no sea la que escribió el usuario.

- Tienes más puertas de entrada, porque puedes salir por una subconsulta en la que nunca habías pensado.
- Tienes también más competencia, porque cada subconsulta es un concurso aparte.
- La unidad que se evalúa es el **pasaje**. Si tu página responde bien a cinco subpreguntas pero cada respuesta está enterrada, ninguna se cita.

Un matiz importante, y es oficial: Google dice que **no hay requisitos adicionales ni optimizaciones especiales** para aparecer en AI Overviews o AI Mode. Las páginas deben estar indexadas y ser elegibles para mostrar fragmentos, como en la búsqueda clásica. Esto no invalida lo que sigue, pero sí lo coloca en su sitio: es **buen contenido y buen SEO escritos pensando en extracción**, no una disciplina aparte.

## Paso 1. Descubrir las subpreguntas de tu tema

No existe una herramienta que te dé el fan-out exacto de cada motor. Lo que yo haría:

1. **Escribe la consulta principal** y lista a mano las subpreguntas que un experto resolvería para responderla. Para una comparativa: precio, funcionalidades, integraciones, opiniones, alternativas y casos de uso.
2. **Pregunta a los asistentes** y revisa qué búsquedas o pasos muestran mientras investigan, si el tuyo lo enseña. Son una pista, no la verdad.
3. **Mira qué cubren los resultados que ya se citan** para esa consulta. Si todos responden a una subpregunta que tú no tocas, ahí tienes un hueco.
4. **Cruza con tus propios datos:** preguntas de ventas y de soporte, buscador interno, consultas de Search Console. Son preguntas reales formuladas como las hacen tus clientes.

5. **Analiza el fan-out real de tu sector** si tienes herramienta para ello. En Ahrefs Brand Radar, el informe de respuestas de IA permite filtrar ChatGPT y tu mercado, ver la columna de consultas de fan-out y filtrar por palabras como "price", "review", "best" o `site:`. Repetirlo cada mes te dice qué tipos de consulta crecen.

Aviso: esto es un método de trabajo mío, no una técnica validada. El fan-out cambia según el motor, el usuario y el momento, así que trátalo como una lista que se revisa.

## Paso 2. Cubrir cada subpregunta con un pasaje citable

Para cada subpregunta, un bloque que se entienda **por sí solo**. Lo que mejor encaja con lo que he ido recogiendo:

- **Respuesta arriba.** Según Kevin Indig, la IA cita sobre todo el 30 % superior de la página. Resume en cuatro a seis frases que respondan la consulta y que se entiendan aunque se extraigan sueltas.
- **Un encabezado por pregunta**, redactado casi como la pregunta. Los H2 apoyan al H1 y los H3 cuelgan de los H2.
- **Tablas y listas donde toque.** Nectiv detectó que las citaciones de ChatGPT incluyen una tabla 2,3 veces más que las de Google. Son datos de terceros, tómalos como orientación.
- **Cifras con fecha y fuente.** Un dato caduco es la forma más rápida de perder una citación. Según AirOps, los sistemas de IA citan 3 veces más las páginas con menos de tres meses.
- **Frescura real.** El análisis de Prosperity Media sobre Australia midió una edad mediana de 97 días en los listados citados, y refrescarlos cada 90 días concentraba el 54 % de las citas. Cambiar solo el año del título no cuenta.
- **Preguntas frecuentes reales**, con las preguntas que llegan a ventas y soporte, no con las que inventa el equipo de marketing.

Todo esto lo tienes con más contexto en [cómo optimizar para AEO y aparecer en ChatGPT](https://emirodgar.com/como-optimizar-para-aeo-y-aparecer-en-chatgpt) y en [las fuentes que alimentan las citas de la IA](https://emirodgar.com/wikipedia-podcasts-reddit-citas-ia).

### Que el pasaje se entienda suelto

Esto es opinión mía, derivada de cómo funcionan los sistemas de recuperación: los textos largos se dividen en fragmentos antes de buscar en ellos, como expliqué en [el asistente con RAG](https://emirodgar.com/crear-asistente-conocimiento-ia-rag). Si un fragmento empieza con "como vimos antes" o "esto cuesta el doble", nadie sabe de qué hablas.

- Nombra el sujeto en cada bloque: el producto, la marca, la condición.
- Evita referencias a otras partes de la página ("el párrafo anterior", "la tabla de arriba").
- Pon la respuesta antes del matiz, y la condición junto a la cifra a la que afecta.

Un ejemplo ilustrativo con una ficha de producto inventada:

| Difícil de citar | Citable |
|---|---|
| "Como decíamos, el modelo es el más completo. Por eso cuesta lo que cuesta." | "El plan Pro de Acme incluye 5 usuarios, exportación a CSV y soporte por chat. Cuesta 29 € al mes con facturación anual." |

### Y el doble filtro

Si se confirma lo que cuenta la filtración sobre Claude, tu página ya no la ve el modelo grande, sino la respuesta de un modelo pequeño a una pregunta concreta. Formular el contenido como respuesta directa a esa pregunta tiene más opciones de sobrevivir al filtro que un párrafo bien escrito pero disperso.

Y antes que nada, el contenido tiene que estar en el HTML inicial. Si no lo está, no hay pasaje que valga: [qué rastreadores ven tu JavaScript](https://emirodgar.com/csr-vs-ssr-rastreadores-javascript).

## Lo que no haría

- **Una página por cada subpregunta.** Fragmentar un tema en decenas de páginas finas para "cubrir el fan-out" me parece una receta para contenido pobre, y Google no pide nada de eso. Mejor una página buena con secciones claras, y páginas separadas solo cuando la subpregunta merezca la suya.
- **Reescribirlo todo.** Empieza por las páginas que ya tienen exposición o que más negocio aportan.
- **Inflar con preguntas que nadie hace.** Un FAQ de relleno no es cobertura.
- **Prometer resultados.** Nadie sabe hoy cuánto pesa cada factor en cada motor, y los estudios que citan cifras son de muestras concretas.

## Cómo comprobar si funciona

Aquí vuelve la prudencia de siempre. Fija una **línea base** con un grupo pequeño de prompts etiquetados por pregunta de negocio, tócalo después y compara. Los detalles, con sus límites, están en [cómo medir tu visibilidad en la IA sin engañarte](https://emirodgar.com/medir-visibilidad-ia), y la lógica de probar con control y variante en [GEO deja de adivinar y empieza a probar](https://emirodgar.com/geo-empieza-a-probar).

## Conclusiones

- El query fan-out convierte una consulta en varias subpreguntas, y tu contenido puede ser elegido por cualquiera de ellas.
- Google dice que no hay optimizaciones especiales: es buen SEO, escrito para que se pueda extraer.
- Cubre las subpreguntas con bloques que se entiendan sueltos: respuesta arriba, sujeto explícito, cifra con fecha y fuente.
- Prioriza las páginas con más negocio, y mide contra una línea base.

Una página que se puede citar entera se puede citar en trozos. Al revés, no.

*Este artículo forma parte de la guía [Cómo optimizar para AEO y aparecer en respuestas de ChatGPT](https://emirodgar.com/como-optimizar-para-aeo-y-aparecer-en-chatgpt).*
