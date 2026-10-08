---
title: Cómo medir tu visibilidad en la IA sin engañarte
description: No existe una métrica estándar para medir la visibilidad en ChatGPT, Gemini o AI Overviews. Te cuento qué puedes medir de verdad, con qué datos, y qué señales conviene tratar con desconfianza.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 08-10-2026
folder: geo
permalink: medir-visibilidad-ia

---

Cuando alguien me pregunta cómo medir la visibilidad de su marca en la IA, la primera respuesta es incómoda: **no hay una métrica estándar, y la mayoría de lo que se vende como tal mide menos de lo que promete**.

Eso no significa que no se pueda medir nada. Significa que hay que separar lo que se puede **comprobar** de lo que solo se puede **estimar**, y no mezclarlo en el mismo informe. Yo lo ordeno en cinco capas, de la más fiable a la menos.

## 1. Acceso: ¿te pueden leer?

Antes de medir si te citan, comprueba si te pueden leer. Es la capa más sólida porque se basa en datos tuyos:

- **Logs del servidor, CDN o WAF.** Muestran qué rastreadores de IA piden qué secciones y cada cuánto. Separa los bots de entrenamiento, los de búsqueda y los de recuperación, porque no significan lo mismo.
- **Microsoft Clarity, si no tienes logs.** Su dashboard gratuito **Bot Activity** enseña la actividad de bots, y desde septiembre de 2026 agrupa las URLs por tipo de página. Lo conté en [bloquear bots sin criterio](https://emirodgar.com/segmentar-bloqueo-bots).
- **Errores de los bots que sí quieres.** Peticiones de GPTBot, PerplexityBot o ClaudeBot que acaban en 404, 499 o 5xx son páginas que intentaron leer y no pudieron. Y si no ves ninguna petición, revisa robots.txt, el firewall y el anti-bots.

Una advertencia: **los logs prueban el acceso, no el uso.** Que un bot pida una URL no demuestra que esa página acabe en una respuesta. Y ojo con los bots que suplantan a uno real: verifica la IP en lugar de fiarte del `User-Agent`, como explico en [cómo detectar a Googlebot](https://emirodgar.com/detectar-googlebot).

Qué ven realmente estos bots es otro tema, y lo tienes en [qué leen los bots de la IA](https://emirodgar.com/que-leen-los-bots-de-la-ia).

## 2. Exposición en Google

Para las AI Overviews y el AI Mode, Search Console tiene ya un informe de IA generativa. Solo da **impresiones**: ni clics, ni consultas, ni valor de negocio. Aun así es dato de primera mano, y una caída brusca es casi la única señal de que algo ha cambiado.

Mi recomendación es abrirlo con una periodicidad fija, por ejemplo semanal, y cruzarlo con tráfico y valor comercial por sección de la web. El método completo está en [cómo sacar partido al informe de IA generativa de Search Console](https://emirodgar.com/informe-ia-generativa-search-console).

## 3. Tráfico que llega desde asistentes

Aquí está lo medible en GA4, con una limitación: parte del tráfico de IA acaba en "directo" cuando no llega referrer ni UTM.

- **Crea un segmento o un grupo de canales de IA** con las fuentes de los asistentes (ChatGPT, Perplexity, Gemini, Copilot, Claude). Los dominios de origen cambian con el tiempo, así que revisa las fuentes reales que aparecen en tu propia propiedad en lugar de copiar una lista.
- **Aprovecha los UTM.** ChatGPT los añade en las respuestas basadas en fuentes web, y desde octubre de 2026 Google Gemini añade parámetros UTM a sus enlaces. Aún no está documentado en qué casos se aplica, así que contrasta con los logs del servidor, donde el UTM sí queda registrado.
- **Compáralo con la búsqueda tradicional**, no lo mires aislado. Ahrefs observó sobre unos 75.000 sitios que ChatGPT como fuente de tráfico directo sigue siendo minúsculo (un 0,32 %). Es un dato de una muestra concreta, pero sirve para no esperar un volumen que quizá no tengas.

La calidad es otra historia. Ethan Smith, de Graphite, afirmaba que el tráfico desde ChatGPT convierte hasta seis veces mejor que el de Google. Yo lo tomaría como hipótesis a comprobar en tu web y no como regla, porque depende del sector y de la intención.

Si quieres un punto de partida, el [dashboard gratuito de Looker Studio](https://emirodgar.com/seo-inteligencia-artificial) que enlazo en mi guía de SEO para IA incluye un bloque de tráfico de plataformas de LLM.

## 4. Menciones y citas

Esta es la capa donde más gente se engaña. Medir si te citan es posible, pero es **estimar**:

- **Línea base antes de tocar nada.** Define un grupo de prompts, lánzalos a diario durante al menos una semana y mira patrones, no el dato de un día. Una sola medición puede verse mucho mejor o peor de lo normal.
- **Prompts cortos y etiquetados por pregunta de negocio**, que salgan de las subpreguntas de tu tema (el [query fan-out](https://emirodgar.com/contenido-citable-query-fan-out)): comparativas, recomendaciones, casos de uso, datos de producto. Una marca puede ser fuerte en general y casi invisible en el caso de uso que más te importa, y la media lo esconde.
- **Revisa qué fuentes se citan.** No solo si sales tú, sino quién sale: listados de terceros, Wikipedia, Reddit, podcasts. Eso te dice dónde trabajar fuera de tu web. Lo cuento en [las fuentes que alimentan las citas de la IA](https://emirodgar.com/wikipedia-podcasts-reddit-citas-ia).
- **Vigila la exactitud, no solo la presencia.** Que te nombren mal es peor que no salir. Para eso tienes [cómo auditar y proteger tu marca](https://emirodgar.com/proteccion-marca-ia).

Y aquí van mis motivos para la prudencia con las herramientas de "AI tracking", que desarrollo en [GEO deja de adivinar y empieza a probar](https://emirodgar.com/geo-empieza-a-probar):

1. Las IA no dan la misma respuesta dos veces.
2. No existe una fuente de verdad del volumen de prompts.
3. Cada interacción previa y la personalización cambian la respuesta.
4. Que una URL se cite no prueba que el modelo la haya usado para construir la respuesta.
5. No hay rastro de auditoría entre un prompt y una venta.

Si aun así usas una herramienta, úsala para detectar dónde estás débil y qué probar, no para presumir de un porcentaje de visibilidad.

## 5. Negocio: la única capa que paga las facturas

Todo lo anterior es un medio. Lo que decide si sigues invirtiendo es el impacto:

- **Elige pocos KPIs y parte de tus objetivos de negocio**, no de lo que sea fácil de medir. Como punto de partida, Francine Monahan (iPullRank) cita las categorías de Adobe: presencia de marca en IA, citaciones, cuota de voz, sentimiento y exactitud, tráfico de referencia y calidad de la interacción, e impacto en ingresos. No todas te servirán.
- **Interésate por las citaciones comerciales**, las que mueven tu negocio, y no por que tu nombre aparezca en cualquier parte.
- **Mide incrementalidad.** Compara grupos tratados con grupos de control, como en cualquier test SEO. Es la única forma de acercarte a causalidad.
- **Pregunta a los clientes.** El "¿cómo nos conociste?" en formularios es burdo y poco fiable, pero junto con el tráfico "directo" es una señal más.

No te fíes de la correlación entre un porcentaje de visibilidad en una herramienta y las ventas. Yo nunca he visto un estudio serio y controlado que la demuestre.

## Un cuadro de mando mínimo

Si tuviera que montarlo hoy para una web con poco tiempo:

| Pregunta | Dato | Frecuencia |
|---|---|---|
| ¿Me pueden leer? | Logs o Clarity, errores de bots de IA | Mensual |
| ¿Cuánta exposición tengo en Google? | Informe de IA generativa de Search Console | Semanal |
| ¿Cuánto tráfico llega de asistentes? | GA4, segmento de IA y logs | Semanal |
| ¿Qué dicen de mí? | Panel pequeño de prompts etiquetados | Quincenal o mensual |
| ¿Qué aporta al negocio? | Conversión e ingresos de ese tráfico, encuestas | Mensual |

## Conclusiones

- Separa lo que puedes comprobar (acceso, impresiones, tráfico) de lo que solo puedes estimar (menciones y citas).
- Empieza por una línea base y compara contra ella, no contra el dato de un día.
- Pocos KPIs, ligados a negocio.
- Desconfía de cualquier cifra de visibilidad que no pueda explicar cómo se ha medido.

Mejor una medición modesta y honesta que un panel precioso que nadie puede defender.

*Este artículo forma parte de la guía [GEO deja de adivinar y empieza a probar](https://emirodgar.com/geo-empieza-a-probar).*
