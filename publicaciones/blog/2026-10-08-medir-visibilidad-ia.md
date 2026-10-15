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
date_modified: 15/10/2026
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

Para las AI Overviews y el AI Mode, Search Console tiene ya un informe de IA generativa. Solo da **impresiones**: ni clics, ni consultas, ni valor de negocio. Aun así es dato de primera mano, y una caída brusca es casi la única señal de que algo ha cambiado. Así se ve la evolución diaria de impresiones durante unos tres meses:

![Evolución diaria de impresiones en el informe de IA generativa de Search Console entre julio y octubre de 2026, con 1,28 millones de impresiones en total](https://emirodgar.com/cdn/images/posts/search-console-impresiones-informe-ia-generativa.png){:class="img-responsive"}

Fíjate en que hay un vaivén semanal y una tendencia al alza. Con ese patrón, una bajada de un solo día no significa nada; lo que hay que vigilar es que la tendencia se rompa durante varios días seguidos.

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
- **Repite cada prompt muchas veces y mide el avance como "distancia de golpeo".** Wil Reynolds (Seer Interactive) propone coger los 10 prompts que más le importan a dirección y lanzarlos entre 10 y 30 veces al mes cada uno. En SEO veías pasar de la posición 90 a la 42 y a la 10; en IA, si lanzas un prompt una o dos veces y no sales, concluyes "no somos visibles", y quizá en 50 ejecuciones salías 3. Esa frecuencia de aparición es una métrica de **impulso** (¿voy por buen camino?), no un KPI final para el cuadro de mando de dirección. Cuesta dinero, y él mismo lo reconoce.
- **Hazlo por mercado.** Si vendes en varios países, lanza los prompts localizados en cada uno. En un análisis de Aleyda Solis, el peso de los dominios locales en las citas variaba mucho entre países (24 % en España, 38,3 % en Reino Unido, 41,4 % en Brasil) y entre plataformas, así que una media global esconde lo que pasa en cada mercado.
- **Revisa qué fuentes se citan.** No solo si sales tú, sino quién sale: listados de terceros, Wikipedia, Reddit, podcasts. Eso te dice dónde trabajar fuera de tu web. Lo cuento en [las fuentes que alimentan las citas de la IA](https://emirodgar.com/wikipedia-podcasts-reddit-citas-ia).
- **Vigila la exactitud, no solo la presencia.** Que te nombren mal es peor que no salir. Para eso tienes [cómo auditar y proteger tu marca](https://emirodgar.com/proteccion-marca-ia).

Y aquí van mis motivos para la prudencia con las herramientas de "AI tracking", que desarrollo en [GEO deja de adivinar y empieza a probar](https://emirodgar.com/geo-empieza-a-probar):

1. Las IA no dan la misma respuesta dos veces.
2. No existe una fuente de verdad del volumen de prompts.
3. Cada interacción previa y la personalización cambian la respuesta.
4. Que una URL se cite no prueba que el modelo la haya usado para construir la respuesta.
5. No hay rastro de auditoría entre un prompt y una venta.

Si aun así usas una herramienta, úsala para detectar dónde estás débil y qué probar, no para presumir de un porcentaje de visibilidad.

### Salir no es lo mismo que ser recomendado

Wil Reynolds añade un matiz que casa con la vigilancia de la exactitud: en buscadores, aparecer en la primera página se interpretaba como "este sitio es bueno o creíble". En IA puedes **aparecer y ser antirrecomendado**. Su ejemplo: ChatGPT sugirió mirar "más allá de Airbnb y VRBO", de modo que ambas marcas eran visibles en la respuesta y ninguna era recomendada. Un porcentaje de visibilidad sin una lectura de cómo se te menciona (recomendada, citada de pasada o desaconsejada) puede darte una falsa sensación de éxito. Por eso, al revisar las respuestas de tu panel de prompts, anota también el **tono** de la mención y no solo si sales.

Otra idea suya, que conviene tratar como hipótesis de trabajo y no como regla, es la de la credibilidad previa: la IA, igual que las personas, tiene marcas "grabadas" de antemano. Si le pides una marca de relojes de lujo, ya tiene nombres en la cabeza antes de buscar. Su ejemplo es Banana Republic, que según él sale en el top 10 de Google para "ethical jeans" y casi nunca en la respuesta de la IA, que ya trae sus propias marcas antes de lanzar ninguna búsqueda. Es una observación suya, no un estudio, pero encaja con lo que mide Ahrefs sobre la poca frecuencia con la que ChatGPT busca en la web, que cuento en [el post del query fan-out](https://emirodgar.com/contenido-citable-query-fan-out).

## 5. Negocio: la única capa que paga las facturas

Todo lo anterior es un medio. Lo que decide si sigues invirtiendo es el impacto:

- **Elige pocos KPIs y parte de tus objetivos de negocio**, no de lo que sea fácil de medir. Como punto de partida, Francine Monahan (iPullRank) cita las categorías de Adobe: presencia de marca en IA, citaciones, cuota de voz, sentimiento y exactitud, tráfico de referencia y calidad de la interacción, e impacto en ingresos. No todas te servirán.
- **Interésate por las citaciones comerciales**, las que mueven tu negocio, y no por que tu nombre aparezca en cualquier parte.
- **Mide incrementalidad.** Compara grupos tratados con grupos de control, como en cualquier test SEO. Es la única forma de acercarte a causalidad.
- **Pregunta a los clientes.** El "¿cómo nos conociste?" en formularios es burdo y poco fiable, pero junto con el tráfico "directo" es una señal más.

No te fíes de la correlación entre un porcentaje de visibilidad en una herramienta y las ventas. Yo nunca he visto un estudio serio y controlado que la demuestre.

### Indicadores de credibilidad a largo plazo

Reynolds propone, además, algunos indicadores que miran a medio plazo y que a mí me parecen razonables como complemento (son su propuesta, no una métrica validada):

- **Contenido que las personas comparten.** Qué porcentaje de tu contenido recibe tráfico significativo de personas que lo comparten con otras (LinkedIn, newsletters, blogs de calidad) frente al que solo llega por algoritmos. Si es bajo, es una señal de que el contenido hecho en masa no convence a periodistas ni a prescriptores.
- **Menciones y tráfico desde publicaciones del sector.** Si un medio de referencia aparece en el fan-out de tu tema, ¿te menciona? ¿Esa cifra crece o baja con el tiempo? Puedes seguirlo con una alerta de menciones y con los referrers de GA4.
- **Menciones de personas influyentes.** Rastrear qué dicen de ti (o de tu equipo) quienes marcan la conversación en tu sector, como cuento en [menciones de marca y digital PR](https://emirodgar.com/menciones-marca-digital-pr-ia).

### Mide las señales como un conjunto

Si ninguna métrica prueba por sí sola que la IA te ha influido, la salida es cruzar varias con puntos ciegos distintos. Kevin Indig y Amanda Natividad (SparkToro) lo plantean en Growth Memo (5 de octubre de 2026) en tres capas, que conviene mirar en la misma página cada mes:

1. **Exposición:** cuota de voz, menciones, citaciones, impresiones.
2. **Comportamiento:** búsquedas de marca, visitas directas, o cómo dicen los clientes que te conocieron.
3. **Resultado de negocio:** conversiones e ingresos.

Lo útil está en leerlas juntas, porque cada combinación apunta a un arreglo distinto:

- **Sube la exposición, pero las búsquedas de marca no se mueven.** Las menciones no llegan a los compradores. Es un problema de distribución: mueve contenido y participación a las comunidades y canales de tu audiencia.
- **Suben las búsquedas de marca, pero no la facturación.** Te buscan y no convierten. Es un problema de conversión: revisa las páginas de destino, la oferta o el paso a ventas.
- **Suben marca y visitas directas, y las citas en IA no.** Algo fuera de tu web está funcionando (un podcast, un evento, un socio, el boca a boca) y la IA aún no lo refleja. Localiza la fuente y repítela.
- **Bajan exposición y marca a la vez.** Otro se está llevando las menciones. Audita a quién recomienda la IA en tu categoría y qué fuentes cita.

Dos cautelas sobre las cifras que acompañan a este planteamiento. Graphite estima que la IA puede estar infraatribuida hasta 10 veces, pero es una estimación, no una medición. Y según un análisis recogido en el mismo artículo, el 91 % de las citas aparece en solo uno de los tres motores (ChatGPT, Perplexity o AI Overviews), así que tu presencia en uno no te dice nada de los otros: hay que medirla por superficie.

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
