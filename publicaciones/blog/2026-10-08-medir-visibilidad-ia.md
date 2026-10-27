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
date_modified: 27/10/2026
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
- **No des por estable el etiquetado.** Hacia el 9 de octubre de 2026, con el lanzamiento de GPT-6, ChatGPT dejó de añadir `utm_source=chatgpt.com` a sus enlaces. Según Cedric Huesler (Adobe), abría los enlaces con `noopener,noreferrer`, de modo que sin etiqueta ni referrer las visitas caían en "directo". En unas 500 páginas con al menos un 5 % de visitas desde ChatGPT, las visitas de ChatGPT bajaron unas 31.000 al día y el tráfico directo subió unas 26.000, mientras la búsqueda cayó un 7 %. El 15 de octubre Huesler indicó que fue un error y que ChatGPT vuelve a etiquetar. Lo útil para tu analítica: marca ese periodo en tus informes y no interpretes la bajada de ChatGPT ni la subida de directo como un cambio real de demanda. Los visitantes "directos" nuevos se comportaban como los de ChatGPT (por ejemplo, la proporción que veía el aviso de consentimiento en móvil pasó del 36 % al 44 %, frente al 55 % de ChatGPT), un indicio, no una confirmación.
- **Comprueba qué mete cada canal.** Según la [guía GEO 2027 de GDdash](https://gddash.com/geo-optimization-guide/), que revisó la [documentación del grupo de canales por defecto](https://support.google.com/analytics/answer/9756891) el 13 de octubre de 2026, GA4 tiene un canal de asistentes de IA, pero AI Overviews y AI Mode siguen dentro de Orgánico. Verifica la definición vigente en tu propiedad y, si creas reglas propias, recuerda que se aplican por orden: la primera que coincide gana. Y no compares sin más sesiones, eventos y primer usuario, porque son ámbitos distintos.
- **Compáralo con la búsqueda tradicional**, no lo mires aislado. Ahrefs observó sobre unos 75.000 sitios que ChatGPT como fuente de tráfico directo sigue siendo minúsculo (un 0,32 %). Es un dato de una muestra concreta, pero sirve para no esperar un volumen que quizá no tengas.

Marie Haynes llega a una conclusión parecida con datos de GA4 de 12 meses de 100 sitios (más de 145 millones de sesiones): las sesiones de ChatGPT equivalían al 0,62 % de las de Google orgánico, y al 0,73 % sumando el resto de asistentes. Además, según ella, el crecimiento de las visitas desde ChatGPT se frenó en agosto de 2025. Es una muestra pequeña y de una sola fuente, pero coincide con la de Ahrefs en el orden de magnitud: para la mayoría de webs, este canal pesa poco en volumen.

La calidad es otra historia. Ethan Smith, de Graphite, afirmaba que el tráfico desde ChatGPT convierte hasta seis veces mejor que el de Google. Yo lo tomaría como hipótesis a comprobar en tu web y no como regla, porque depende del sector y de la intención. En la muestra de Haynes (55 sitios con conversiones configuradas), ChatGPT convertía al 13,8 % frente al 3,02 % de Google orgánico, más de 4,5 veces mejor, pero Google seguía generando el 96,5 % de las conversiones (964 frente a 36 de todos los asistentes juntos). Un canal que convierte mejor no tiene por qué pesar más en facturación. Y un dato previo que también apunta a la medición: en 45 de esos 100 sitios no había ningún evento clave configurado, así que antes de medir la IA conviene tener definido qué es una conversión.

Si quieres un punto de partida, el [dashboard gratuito de Looker Studio](https://emirodgar.com/seo-inteligencia-artificial) que enlazo en mi guía de SEO para IA incluye un bloque de tráfico de plataformas de LLM.

## 4. Menciones y citas

Esta es la capa donde más gente se engaña. Medir si te citan es posible, pero es **estimar**:

- **Línea base antes de tocar nada.** Define un grupo de prompts, lánzalos a diario durante al menos una semana y mira patrones, no el dato de un día. Una sola medición puede verse mucho mejor o peor de lo normal.
- **Prompts cortos y etiquetados por pregunta de negocio**, que salgan de las subpreguntas de tu tema (el [query fan-out](https://emirodgar.com/contenido-citable-query-fan-out)): comparativas, recomendaciones, casos de uso, datos de producto. Una marca puede ser fuerte en general y casi invisible en el caso de uso que más te importa, y la media lo esconde.
- **Repite cada prompt muchas veces y mide el avance como "distancia de golpeo".** Wil Reynolds (Seer Interactive) propone coger los 10 prompts que más le importan a dirección y lanzarlos entre 10 y 30 veces al mes cada uno. En SEO veías pasar de la posición 90 a la 42 y a la 10; en IA, si lanzas un prompt una o dos veces y no sales, concluyes "no somos visibles", y quizá en 50 ejecuciones salías 3. Esa frecuencia de aparición es una métrica de **impulso** (¿voy por buen camino?), no un KPI final para el cuadro de mando de dirección. Cuesta dinero, y él mismo lo reconoce.
- **Escribe qué cuenta cada métrica.** Numerador, denominador, muestra y cómo tratas los casos sin marca. Guarda aparte las ejecuciones fallidas o vacías y las respuestas válidas en las que simplemente no sales: si las mezclas, el porcentaje sube o baja sin que haya cambiado nada. Y no inventes una precisión que no hay: no existe un número de prompts ni una frecuencia universales, así que elígelos según tus recursos y la variabilidad que veas.
- **Revisa a mano lo que etiqueta una máquina.** Ethan Lazuk explica en [su análisis de las puntuaciones de visibilidad](https://ethanlazuk.com/blog/what-does-your-geo-visibility-score-actually-measure-why-prompt-selection-matters-hamsterdam-research/) que las instrucciones que se dan al modelo juez pueden cambiar la nota de respuestas que no han cambiado. Mi recomendación, en la línea de lo que plantea la guía de GDdash: revisa a mano una muestra de las menciones, citas y juicios que etiqueta la herramienta, y apunta dónde discrepas.
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

### Bing Webmaster Tools: Topics Portfolio

Hay una fuente de primera mano para las citas en la IA de Microsoft. El informe AI Performance de Bing Webmaster Tools ya enseñaba las consultas de grounding en las que aparece tu sitio y las páginas citadas, y el 13 de octubre de 2026 Microsoft [añadió en beta Topics Portfolio](https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/), una pestaña que agrupa esas consultas por temas.

Para cada tema te da tres datos del ecosistema, no solo tuyos: el tamaño del tema (citas totales de todos los sitios), cuántos sitios se citan (lo saturado que está) y cuántas consultas distintas tiene. Dentro de un tema ves las consultas donde ya sales y las **Opportunity Queries**: consultas donde se cita a otros sitios y al tuyo no. Es la parte más útil, porque permite hacer un content gap con datos de Bing y Copilot y no con suposiciones. Josep Deulofeu [lo explicaba en LinkedIn](https://www.linkedin.com/posts/josep-deulofeu-mayoral_nueva-herramienta-gratuita-para-%F0%9D%97%BA%F0%9D%97%B2%F0%9D%97%B7%F0%9D%97%BC%F0%9D%97%BF%F0%9D%97%AE%F0%9D%97%BF-share-7517557379186548737-boQj/) con una tienda de joyería: una oportunidad como "how to measure ring size" apunta a una guía de tallas que quizá falta en la web.

Para usarlo:

1. Entra en AI Performance y abre la pestaña de temas, con una ventana de uno, dos o tres meses.
2. Empieza por los temas donde ya concentras citas y revisa después las Opportunity Queries.
3. Mira qué sitios consiguen esas citas y por qué antes de decidir qué contenido crear.

Tómalo como señal de planificación, no como medición exacta: Microsoft avisa de que los números son aproximados (las citas de oportunidad salen en rangos), de que la clasificación por temas la hace una IA y puede fallar, y de que pueden colarse consultas de marca de la competencia como "oportunidad". Solo aparece si tu sitio tiene datos suficientes, así que una web pequeña puede no verlo. Mide Bing y Copilot, no ChatGPT ni Google.

### Salir no es lo mismo que ser recomendado

Wil Reynolds añade un matiz que casa con la vigilancia de la exactitud: en buscadores, aparecer en la primera página se interpretaba como "este sitio es bueno o creíble". En IA puedes **aparecer y ser antirrecomendado**. Su ejemplo: ChatGPT sugirió mirar "más allá de Airbnb y VRBO", de modo que ambas marcas eran visibles en la respuesta y ninguna era recomendada. Un porcentaje de visibilidad sin una lectura de cómo se te menciona (recomendada, citada de pasada o desaconsejada) puede darte una falsa sensación de éxito. Por eso, al revisar las respuestas de tu panel de prompts, anota también el **tono** de la mención y no solo si sales.

Otra idea suya, que conviene tratar como hipótesis de trabajo y no como regla, es la de la credibilidad previa: la IA, igual que las personas, tiene marcas "grabadas" de antemano. Si le pides una marca de relojes de lujo, ya tiene nombres en la cabeza antes de buscar. Su ejemplo es Banana Republic, que según él sale en el top 10 de Google para "ethical jeans" y casi nunca en la respuesta de la IA, que ya trae sus propias marcas antes de lanzar ninguna búsqueda. Es una observación suya, no un estudio, pero encaja con lo que mide Ahrefs sobre la poca frecuencia con la que ChatGPT busca en la web, que cuento en [el post del query fan-out](https://emirodgar.com/contenido-citable-query-fan-out).

## 5. Negocio: la única capa que paga las facturas

Todo lo anterior es un medio. Lo que decide si sigues invirtiendo es el impacto:

- **Elige pocos KPIs y parte de tus objetivos de negocio**, no de lo que sea fácil de medir. Como punto de partida, Francine Monahan (iPullRank) cita las categorías de Adobe: presencia de marca en IA, citaciones, cuota de voz, sentimiento y exactitud, tráfico de referencia y calidad de la interacción, e impacto en ingresos. No todas te servirán.
- **Interésate por las citaciones comerciales**, las que mueven tu negocio, y no por que tu nombre aparezca en cualquier parte.
- **Mide incrementalidad.** Compara grupos tratados con grupos de control, como en cualquier test SEO. Es la única forma de acercarte a causalidad.
- **Pregunta a los clientes.** El "¿cómo nos conociste?" en formularios es burdo y poco fiable, pero junto con el tráfico "directo" es una señal más. Abby Gleason (SEO en Compass, antes en Upwork y Scribd) lo defiende en [The Search Session](https://www.advancedwebranking.com/blog/measure-seo-beyond-traffic) con un argumento que comparto: si te quedas solo con el tráfico de referencia de los asistentes, puede parecer el 1 % de las visitas y, sin embargo, ser una parte mucho mayor de las razones que los clientes declaran. Es un ejemplo ilustrativo suyo, no un dato medido, pero explica por qué la analítica sola se queda corta cuando el recorrido empieza en YouTube, TikTok o ChatGPT y termina en Google.
- **Que los prompts salgan de clientes reales.** Gleason construye su panel a partir de las palabras clave que más convierten, es decir, de los temas que ya sabe que generan ingresos, y los convierte en prompts. Lo reconoce como "no una ciencia exacta", y yo añadiría que las mismas encuestas y las conversaciones con atención al cliente son mejor punto de partida que dejar que la herramienta proponga sus propios prompts.

No te fíes de la correlación entre un porcentaje de visibilidad en una herramienta y las ventas. Yo nunca he visto un estudio serio y controlado que la demuestre.

### Calcular el ROI sin inventarte la precisión

Si te piden una cifra de retorno, Ahrefs propone una fórmula sencilla: **ROI = (ingresos por IA − coste de IA) ÷ coste de IA × 100**. Lo delicado está en qué metes en cada lado:

- **Costes:** reparte solo la parte dedicada a IA. En su ejemplo trimestral (27.000 $) cuentan entera la herramienta de seguimiento y la agencia especializada, y un tercio del equipo de contenido y de la suite SEO.
- **Ingresos rastreados:** las conversiones con origen en IA que ves en analítica. Con 40 conversiones a 900 $ de media son 36.000 $ y un ROI del 33 %. Si usas el dato real del CRM en lugar de la media, las mismas 40 conversiones sumaron 42.000 $.
- **Ingresos autorreportados:** si el 10 % de los clientes nuevos dice que te conoció por IA y esos clientes generaron 400.000 $, estimas 40.000 $ de ingresos de IA. Es una estimación, no una medición.
- **Valor equivalente en publicidad:** impresiones estimadas multiplicadas por un CPM de 25 a 45 $. Es hipotético, y Ahrefs avisa de que los datos de su índice se rastrean con menos frecuencia, así que son menos fiables.

La conclusión que comparto es la de que **la atribución perfecta no es posible** (la respuesta puede no generar visita, el referrer se pierde y no todos declaran la fuente), y probablemente tanto lo rastreado como lo autorreportado se quedan cortos. Mejor una estimación que uses igual cada trimestre, para comparar tendencias, que una cifra exacta que no puedes defender. Y recuerda que parte del valor está antes del clic: la IA influye en qué marca recuerda el usuario y en su lista de opciones.

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

## Cuando la propia SERP deja de ser un objeto estable

Hay un problema de fondo que afecta a todas las capas anteriores, y Mike King lo desarrolla en [Generative SERPs](https://ipullrank.com/generative-serps) (15 de octubre de 2026): si un modelo compone la página de resultados para cada consulta, **la SERP deja de ser una página que puedas capturar y comparar**. Según King, cambia la presentación, no la selección de resultados, que sigue dependiendo de la misma capa de recuperación. Lo que se rompe es la medición. Ojo con el alcance: el paper de Google en el que se apoya habla de interfaces generativas, no de SERPs ni de AI Mode, así que la extrapolación a la búsqueda es una inferencia del propio King.

Añade un dato que obliga a la prudencia: Nozzle analizó 27,5 millones de resultados entre el 20 de agosto y el 9 de octubre de 2026 y detectó SERPs "envenenadas" (alteradas de forma anómala) que pasaron del 0,17 % al 8,0 % desde el 13 de septiembre, con un pico cercano a una cuarta parte entre el 27 y el 29 de septiembre. La mayoría fueron episodios cortos (el 80 % duró una sola SERP y el 77,9 % volvió a la normalidad en tres días), pero en ellas un sitio habitual del top 10 faltó en el 58,6 % de los casos, frente al 2,7 % en condiciones normales. Es un solo análisis, pero sirve para entender que una caída puntual de posiciones puede ser un artefacto y no un cambio real.

Lo que recomienda King, y que encaja con lo que ya he dicho arriba:

- **Muestrea varias veces al día** y compara cada muestra con la última verificada, descartando las anómalas.
- **Reporta la visibilidad como una tasa** de recuperación y citación, con intervalos de confianza entre días y ubicaciones, y trata los resultados como una distribución.
- **Usa la posición media de Search Console solo como tendencia.**
- **Segmenta por ubicación y perfil**, y considera la diferencia entre segmentos como un hallazgo, no como ruido.
- **Ancla cualquier tracker a Search Console y al tráfico de referencia:** si impresiones y clics se mantienen mientras el tracker cae, sospecha primero del tracker.

King anticipa además que el rank tracking será más caro, porque requiere más muestras.

### Qué ha cambiado en la recogida de datos de Google

SISTRIX ha publicado [por qué está cambiando la recogida de datos de rankings de Google](https://www.sistrix.com/support/google-ranking-data-collection/), y su cronología ayuda a entender de dónde vienen estas anomalías. Es la explicación de un proveedor, no un comunicado de Google, pero coincide con lo que se ve en los datos:

- **Septiembre de 2025:** Google pasó a devolver un máximo de 10 resultados por consulta, sin avisar. Antes bastaba una petición para obtener los 100 primeros resultados orgánicos y ahora hacen falta diez. SISTRIX lo relaciona con la bajada de impresiones y la mejora de la posición media que muchas webs vieron en Search Console a mediados de ese mes, un cambio de medición y no una pérdida real de posiciones.
- **Junio de 2026:** Google enruta los clics a través de URLs internas `/goto`, cuyo destino solo se conoce siguiéndolas.
- **Septiembre de 2026:** aparecen resultados divergentes, que parecen reales pero contienen otras webs. Afectan a proveedores de datos de todo el sector y encajan con las SERPs alteradas que midió Nozzle.
- **Más allá del top 10:** Google ha dejado de mostrar 100 resultados orgánicos en todas las búsquedas, y muchas listas terminan antes de la posición 100.

Qué significa para tus informes:

- **El top 10 sigue siendo fiable**, y el índice de visibilidad apenas se resiente, porque las posiciones de la primera página concentran casi todo su valor. Para comparar a largo plazo, SISTRIX recomienda fijarse en el número de palabras clave en el top 10.
- **Las posiciones profundas son más ruidosas.** Que un dominio salga del top 100 puede deberse a que la lista se ha acortado, y las métricas de "keywords en el top 100" fluctúan más porque esas páginas se actualizan con menos frecuencia.
- **Las actualizaciones bajo demanda están desactivadas en SISTRIX desde septiembre de 2026**, porque se saltarían sus comprobaciones. Si un resultado no las supera, lo descartan y vuelven a recoger la palabra clave hasta obtener uno verificado, así que algunas se actualizan menos de lo configurado. Mira la fecha de la última actualización de cada una antes de sacar conclusiones.

Así que, si te cae una posición en un tracker, contrástala primero con Search Console y con el tráfico, como decía arriba.

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
