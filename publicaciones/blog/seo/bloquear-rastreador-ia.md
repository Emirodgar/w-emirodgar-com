---
title: Cómo bloquear el rastreador de las inteligencias artificiales
description: Evita que las IA utilicen tu contenido para generar respuestas de los chatbots.
image: https://emirodgar.com/cdn/images/og/auditoria.png
layout: emirodgar_post
sitemap: 1
feed: 1
folder: geo
author: Emirodgar
date: 06/11/2023
date_modified: 09/11/2026
permalink: bloquear-rastreador-ia

---

Los chatbots actuales, como ChatGPT y Google Bard, son capaces de generar texto, traducir idiomas, escribir diferentes tipos de contenido creativo y responder a preguntas de forma informativa. 
Sin embargo, también pueden ser utilizados para fines maliciosos, como la difusión de información falsa o la recopilación de datos personales.

Para protegernos de estos riesgos, es importante **bloquear el rastreo a los robots de búsqueda de los chatbots**.
Esto se puede hacer, a día de hoy, bloqueando el acceso de sus rastreadores a través del fichero `robots.txt`.

## ¿Qué es un rastreador?

Un rastreador web, también conocido como araña web o bot web, es un programa informático que navega sistemáticamente por Internet, visitando páginas web y recopilando (extrayendo) datos de ellas. Los rastreadores web se utilizan principalmente para indexar el contenido web para los motores de búsqueda y para recopilar datos para el entrenamiento de IA.

> La realidad es que en muchos casos los chatbots ignoran esta directiva y acceden a nuestros contenidos, aún así, es la única medida propuesta por los desarrolladores a día de hoy.


## Bloquear el rastreo de ChatGPT

ChatGPT, de OpenIA, utiliza el robot de rastreo [GTPbot](https://platform.openai.com/docs/gptbot), el cuál puede ser bloqueado con la siguiente instrucción desde el fichero `robots.txt`:

```
User-agent: GPTBot
Disallow: /
```

También tenemos la opción de identificar el `user-agent` de la visita a nuestra página y bloquear si detectamos que se trata de `ChatGPT-User`. o bloquear [las IPs que utilizan](https://openai.com/gptbot.json). 
Todas las medidas pueden convivir.

> Tanto las IPs como [el user-agent pueden cambiar](https://emirodgar.com/cambiar-user-agent-chrome), por lo que la medida más escalable en el tiempo será bloquear a través del `robots.txt`. 

## Bloquear el rastreo de Google Bard y Vertex AI

Ambas aplicaciones, de Google, y las futuras que estén relacionadas con la inteligencia artificial, pueden ser bloqueadas a través del fichero `robots.txt`.
Al igual que el caso de GTPbot, podemos bloquear al rastreador `Google-Extended`, que es el que utilizan estas aplicaciones. Os dejo el [listado de user-agents que utiliza Google](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers?hl=en#google-extended).

```
User-agent: Google-Extended
Disallow: /
```

> Mucho cuidado con utilizar otro `user-agent` que no sea el asociado a estas dos aplicaciones, ya que podríamos provocar la desindexación de nuestra página. Recordad las [consecuencias de bloquear el Javascript y el CSS a los robots de búsqueda](https://emirodgar.com/bloquear-indexacion-js-css).

Si preferimos bloquear al robot con otros métodos más fiables que no sea a través del fichero `robots.txt` tendremos que [identificar a Googlebot](https://emirodgar.com/detectar-googlebot) y asegurarnos que se trata de `Google-Extended`. Una vez que tengamos esa certeza, podemos generar una respuesta de error `404` o de prohibido el acceso `403`. 

## Bloquear otros robots de IA

Además de los dos antes expuestos, podemos seguir las mismas instrucciones para bloquear los siguientes:

- CCBot
- Anthoropic IA
- Cohere-ai

## Bloquear el acceso a SGE (búsqueda generativa de Google)

En este caso ya no estamos hablando de un chatbot sino de la búsqueda generativa de Google, una respuesta de inteligencia artificial que se incluye directamente en la página de resultados.
Por desgracia esta respuesta se basa en el rastreo e indexación del robot principal de Google, por lo que no hay manera de evitar su acceso a no ser que no queramos aparecer en Google.

> **Actualización (octubre de 2026):** la [guía GEO 2027 de GDdash](https://gddash.com/geo-optimization-guide/) remite a un [control de inclusión de IA generativa en Search Console](https://support.google.com/webmasters/answer/16908024), que documenta Google y que puede heredarse entre propiedades. No lo he probado, así que revisa su documentación antes de tocar nada. Es una decisión distinta de la indexación y de `Google-Extended`, y conviene tomarla con quien decida la política de contenidos, no como un ajuste técnico más. Para que te hagas una idea de lo que cuesta, hay un [experimento real de Zyppy](https://signal.zyppy.com/p/we-opted-out-of-google-ai-search) con los datos de un solo sitio, que cuento en [Google AI Mode, qué es y qué puedes hacer como SEO](https://emirodgar.com/google-ai-mode-seo).

Además de bloquear a los rastreadores de chatbots e inteligencias artificiales, existen [listados de robots spam](https://emirodgar.com/listado-robots-bloquear) que consumen nuestros recursos ni aportarnos ningún valor. Os recomiendo bloquearlos.

## Qué dice Google que puedes (y no puedes) poner en un robots.txt

Gary Illyes y Cherry Prommawin han dedicado un [vídeo de la serie Non-Canonical Cabinet](https://www.seroundtable.com/google-video-robots-txt-rules-42355.html) a qué cabe realmente en este fichero. Varias de sus advertencias afectan directamente a lo que has visto arriba:

- **Sigue el estándar RFC 9309.** El parseador solo entiende cuatro reglas (`user-agent`, `allow`, `disallow` y `sitemap`) y descarta en silencio cualquier línea que no reconozca. Una regla que a ti te parece obvia puede no estar haciendo nada, así que valida la sintaxis y prueba las URLs concretas.
- **El `user-agent` solo admite letras y guiones.** No hay emojis ni caracteres no ingleses en el token, y el nombre tiene que ser el del rastreador que quieres bloquear, no uno inventado.
- **Codifica con porcentajes las rutas con caracteres internacionales o emojis.** Google los interpreta, pero otros rastreadores más antiguos pueden fallar y saltarse la línea entera.
- **Bloquear el acceso no es lo mismo que prohibir el entrenamiento.** `robots.txt` es un protocolo de preferencias de acceso: dice qué puede rastrear un bot, no qué hace con lo que ya ha obtenido.
- **No es un mecanismo de seguridad.** Solo lo respetan los rastreadores que quieren hacerlo. Si hay algo que no debe verse, protégelo de verdad.

Y una cosa más sobre los comentarios con `#`: se ignoran, pero un fichero lleno de relleno malgasta ancho de banda.

## Entrenar, buscar y obedecer al usuario no es lo mismo

Los operadores ya distinguen varios rastreadores según para qué sirven, y bloquear uno no implica bloquear el resto. Según la documentación que recoge la [guía GEO 2027 de GDdash](https://gddash.com/geo-optimization-guide/):

| Operador | Búsqueda | Posible entrenamiento | A petición del usuario |
|---|---|---|---|
| OpenAI | `OAI-SearchBot` | `GPTBot` | `ChatGPT-User` |
| Anthropic | `Claude-SearchBot` | `ClaudeBot` | `Claude-User` |
| Perplexity | `PerplexityBot` | | `Perplexity-User` |

Lo que cambia en la práctica:

- **Bloquear `GPTBot` no te saca de ChatGPT Search.** Si quieres que te descubran allí, el que importa es `OAI-SearchBot`. Aplica lo mismo a `ClaudeBot` frente a `Claude-SearchBot`. Y a la inversa: dejar pasar al bot de búsqueda no obliga a permitir el entrenamiento.
- **`Google-Extended` no es "el rastreador de AI Overviews".** Es una decisión sobre el uso del contenido por parte de la IA de Google que se toma aparte de la de Search. Un artículo de Backlinko que recomienda permitir `GPTBot`, `Google-Extended`, `ClaudeBot` y `PerplexityBot` a la vez lo describe así y mezcla entrenamiento, búsqueda y petición del usuario. Yo no copiaría esa lista en bloque.
- **Las visitas "a petición del usuario" funcionan distinto.** Cada operador documenta cómo trata `robots.txt` en ese caso, así que míralo en su documentación en lugar de suponerlo.
- **No te fíes solo del `user-agent`.** Si bloqueas o permites por cortafuegos, combina el rango de IP oficial del operador con el `user-agent`, y refresca los rangos. Perplexity, por ejemplo, [publica sus rangos](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) para eso. Para diagnosticar fallos reales, usa logs y códigos de estado antes de abrir el acceso a ciegas.
- **Aplica la política en todos los dominios y subdominios** donde viva el contenido. Una regla correcta en el dominio principal no arregla un bloqueo en el host de imágenes o de documentación.
- **Si el problema es carga de servidor**, Anthropic documenta `Crawl-delay` en lugar de un bloqueo total, y solo lo aplicaría si de verdad tienes un problema de carga.

Qué bloqueas y qué no depende de tu objetivo, y lo mejor es dejarlo escrito: bot, propósito, host y quién lo decide. Cómo repartirlo con más detalle lo cuento en [segmentar el bloqueo de bots](https://emirodgar.com/segmentar-bloqueo-bots).

## Bing separa entrenamiento y grounding

El 30 de octubre de 2026 Microsoft [anunció unas preferencias nuevas para editores](https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/) que reparten en dos decisiones independientes lo que hasta ahora se resolvía con `NoArchive` y `NoCache`. Ninguna de las dos afecta a que tus páginas salgan en los resultados normales de Bing.

- **Entrenamiento (`ai-training`).** Se puede declarar en el `robots.txt` para todo el sitio o para una ruta, con el agente `__usage_ai-training`, y también página a página. Si lo pones a nivel de página, manda sobre lo que diga el `robots.txt`.
- **Grounding (`ai-grounding`).** Es lo que usa Microsoft para apoyar sus respuestas generadas en contenido web (Bing, Copilot, Microsoft 365). Solo se declara por página y no existe una regla global en `robots.txt`.

Las dos se declaran con una etiqueta `meta` o una cabecera HTTP:

```html
<meta name="Bingbot" content="ai-training:disallow">
<meta name="Bingbot" content="ai-grounding:disallow">
```

```
X-Robots-Tag: Bingbot: ai-training:disallow
X-Robots-Tag: Bingbot: ai-grounding:disallow
```

Para el grounding hay tres valores: `Allow` (el de por defecto), `Disallow` y `DisallowExtended`, que deja a Microsoft usar tu contenido en sus propios productos pero no en los servicios de grounding que da a terceros. Si no declaras nada, se entiende que lo permites, tanto para entrenar como para el grounding.

Fechas que conviene apuntar:

- **1 de febrero de 2027:** Microsoft empieza a respetar las preferencias nuevas al rastrear.
- **1 de marzo de 2027:** `NoArchive` y `NoCache` dejan de leerse como preferencia de entrenamiento o grounding. Quien los use tiene que publicar las nuevas, y para el grounding apuntar además una preferencia transitoria en Bing Webmaster Tools (válida hasta que se recorra la página o hasta el 30 de septiembre de 2027, lo que ocurra antes).

La advertencia es la de siempre: el propio Microsoft avisa de que `Disallow` o `DisallowExtended` en grounding reducen tu visibilidad en las experiencias de IA. Bloquear el grounding es dejar de ser fuente en las respuestas, no solo dejar de entrenar. Si lo que quieres es no alimentar modelos pero seguir apareciendo como fuente, la combinación es entrenamiento en `Disallow` y grounding en `Allow`.

## Hacia un control de entrenamiento común en robots.txt

El 30 de octubre de 2026 Google [anunció que respaldará un control de entrenamiento de IA compartido](https://developers.google.com/search/blog/2026/10/ai-training-control?hl=es-419) en `robots.txt`. La idea sale del grupo de trabajo AIPREF del IETF y es una propuesta en borrador, no un estándar cerrado: en lugar de repetir una regla para cada empresa, declaras una preferencia general con un "token de política" y la leen todos los proveedores de IA que lo adopten.

Lo que cuenta Google sobre cómo lo tratará:

- **Si desactivas el entrenamiento con ese token** y no has indicado nada explícito para `Google-Extended`, Google lo interpretará como que rechazas `Google-Extended`.
- **Las reglas por empresa siguen funcionando** junto al token. Puedes poner una preferencia amplia y afinarla después para un operador concreto.
- **Permitir `Google-Extended` de forma explícita** es lo que, según Google, hace a un sitio apto para salir en las respuestas y recibir clics a través del anclaje en las apps con Gemini.
- **No hay fecha cerrada.** El objetivo declarado es admitirlo, junto con otros proveedores, en 2027.

Mi lectura: hoy no hay nada que cambiar en tu `robots.txt`, porque el token aún es un borrador y Google solo habla de planes. Lo que sí conviene es apuntar tu política actual (qué bot entrena, cuál busca, cuál actúa a petición del usuario) para que, cuando llegue, sea cuestión de traducirla y no de decidirla desde cero. Y recuerda lo de siempre: es una preferencia de acceso y de uso que respetan los operadores que quieren hacerlo, no una barrera técnica. De momento lo único que ya puedes aplicar son las preferencias que he descrito para Bing y las reglas por rastreador de arriba.

## Seguimiento de medios digitales que han bloqueado a los chatbots existentes

El proyecto [News Websites Blocking LLM Dataset Bots - Research Data](https://docs.google.com/spreadsheets/d/122X_gX8e7xYfiDO4_zPx1aqh3CgpXUr4X2ijiOh9x88/edit#gid=1611081988) está haciendo seguimiento de la postura de los grandes medios digitales frente a los rastreadores de IA. Actualmente, en España sólo un medio bloquea a los rastreadores frente al 50% de los medios en EEUU.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/63ff136b-baee-4a8c-aec7-6b92a10f3a11){:class="img-responsive"}

*Este artículo forma parte de la guía [SEO técnico en la era de la inteligencia artificial](https://emirodgar.com/seo-tecnico-en-la-era-de-la-inteligencia-artificial).*
