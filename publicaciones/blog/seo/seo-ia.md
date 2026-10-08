---
title: El SEO en la era de la IA - Cómo optimizar para los modelos de lenguaje
description: 
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: ia
date: 28/11/2023
date_modified: 08/10/2026
permalink: seo-inteligencia-artificial

--- 

El tráfico que llega desde las plataformas de inteligencia artificial (basadas en modelos de lenguaje conocidos por las siglas LLMs) está creciendo mes a mes y, además, es de **buena calidad**, dado que los usuarios han realizado una búsqueda más enriquecida.


## ¿Cómo funciona el SEO para IA?

Para aparecer en las respuestas generadas por IA en las **AI Overviews** (AIO) de Google o en herramientas como Perplexiy o Claude, hay que entender cómo realizan estos modelos la búsqueda de información y presentan sus resultados. Al igual que los buscadores tradicionales, hacen uso de un sistema de rastreo por lo que estructurar el contenido de forma clara, facilitar su acceso y tener una marca reconocida y fiable, son **aspectos clave para la indexación y aparición en plataformas de IA**. 

[![image](https://github.com/user-attachments/assets/3fe321b3-6652-4363-b443-05f8a8c82447){:class="img-responsive"}](https://lookerstudio.google.com/u/0/reporting/f3d67536-554f-40ef-a958-f08f7d45f568/page/p_3l3ng3jr6c)

Algunos aspectos clave que debemos trabajar:

 - **Facilitar el rastreo a nuestro sitio**, de la misma manera que siempre lo hemos hecho para los rastreadores de los buscadores tradicionales. Recomiendo revisar el proyecto [llms.txt](https://llmstxt.org/) que ayudará a las plataformas de IA a entender cómo se estructura nuestro sitio.
 - **Asegurarnos de que el contenido es accesible** y no está generado por JavaScript. Los rastreadores de IA no pueden (de momento) renderizar JavaScript.
 - **Generar contenidos simples y fáciles de entender**. Esto es clave para aparecer en los resultados de los LLMs.
 - **Utilizar marcado de datos estructurados** para ayudar a contextualizar nuestro contenido. Esto es de gran valor para el proceso de los LLMs de *retrieval-augmented generation* (RAG).
 - **Trabajar nuestra marca** y, en especial, las menciones y enlaces que podamos conseguir desde fuentes relevantes.

## Cómo comprobar que los agentes de IA descubren tus recursos

Además de ser citados, cada vez más agentes de IA necesitan **descubrir qué herramientas y servicios ofrece un sitio** (una API, un servidor [MCP](https://emirodgar.com/que-es-mcp), un buscador interno...). Google ya lo mide: **Lighthouse 13.5** incluye la auditoría **Agentic Resource Discovery (ARD)**, que valida que el sitio publique un catálogo de recursos conforme a la especificación ARD, todavía en versión de borrador (v0.91).

Lighthouse busca ese catálogo, por este orden, en:

1. La directiva `Agentmap` de `robots.txt`.
2. Una etiqueta `<link>` con `rel="ai-catalog"`.
3. Una cabecera HTTP `Link` con la misma relación.
4. La ruta por defecto `/.well-known/ai-catalog.json` (la especificación propone `/.well-known/ard.json`, y `ai-catalog.json` se mantiene por compatibilidad).

Si no encuentra nada, la auditoría aparece como **"No aplicable"**: no penaliza, simplemente indica que el sitio no es descubrible. Se agrupa en la categoría **Agent Discoverability**, junto a la auditoría de `llms.txt`, y llegará a DevTools con Chrome 156 y a PageSpeed Insights poco después.

Mi lectura: **es una señal de hacia dónde va Google**, pero un estándar en borrador. Si tu sitio no expone herramientas para agentes, no tienes nada que hacer; si lo hace, merece la pena publicar el catálogo y vigilar cómo evoluciona la especificación. Para validarlo puedes [automatizar los análisis de Lighthouse](https://emirodgar.com/automatizar-analisis-lighthouse).

Otra opción es [Is Agentic](https://is-agentic.com/), una herramienta de Vercel que puntúa lo preparado que está tu sitio público para los agentes de IA: contenido renderizado en servidor, códigos HTTP correctos, estructura clara, canonical, idioma declarado y Open Graph como comprobaciones esenciales. Las recomendadas (APIs, OAuth, GraphQL, servidores MCP, comercio electrónico) solo cuentan si tu web las ofrece, y no penaliza por omitir lo que no proporcionas. Lo útil es que te da evidencia y recomendaciones concretas, aunque sigue siendo una puntuación orientativa.

## ¿Cómo ser parte del conocimiento de los LLMs?

Aún es pronto para tener toda la información, pero trabajando los puntos antes mencionados y realizando una monitorización exhaustiva de nuestra presencia en diferentes plataformas podremos ir aprendiendo de lo que funciona y potenciándolo en nuestras estrategias SEO.

Para ello es importante [saber medir el tráfico que nos llega desde las diferentes plataformas de inteligencia artificial](https://newsletter.chuletaseo.com/p/analizar-el-trafico-de-ia-que-llega).
Para ello recomiendo utilizar el [dashboard gratuito de Looker Studio](https://lookerstudio.google.com/u/0/reporting/f3d67536-554f-40ef-a958-f08f7d45f568/page/p_3l3ng3jr6c). Y para ir más allá del tráfico, mira [cómo cruzar el informe de IA generativa de Search Console con datos de negocio](https://emirodgar.com/informe-ia-generativa-search-console).

[![image](https://github.com/user-attachments/assets/e67a2efd-54dd-46b0-8423-0b172c87b52f){:class="img-responsive"}](https://lookerstudio.google.com/u/0/reporting/f3d67536-554f-40ef-a958-f08f7d45f568/page/p_3l3ng3jr6c)

## ¿Por qué el tráfico de IA convierte mejor?

Los usuarios que llegan desde modelos de lenguaje han recibido una **respuesta unificada a sus preguntas**. En lugar de la tradicional búsqueda en la que tenemos que analizar y comparar múltiples resultados, han confiado en la respuesta generada y han decidido navegar hacia nuestro sitio. 

[![image](https://github.com/user-attachments/assets/e1ef74bd-2eca-41a5-a2de-4da855084745){:class="img-responsive"}](https://lookerstudio.google.com/u/0/reporting/f3d67536-554f-40ef-a958-f08f7d45f568/page/p_3l3ng3jr6c)

Si no implicas al usuario, estarás perdiendo el tiempo. Hay demasiada información en Internet y si quieremos prosperar, además de trabajar una [indexación selectiva](https://emirodgar.com/indexacion-selectiva), necesitamos aliearnos con nuestros usuarios. Entender qué están buscando y qué necesitan, será clave para poder posicionar de manera eficiente.


## Las plataformas de IA y el marcado de datos estructurados

Los modelos de lenguaje (`LLMs`), como los de Bing y Microsoft, no utilizan esquemas de datos estructurados de la forma en que se piensa comúnmente. Aunque se menciona que los LLMs valoran contenido fresco y utilizan esquemas durante su proceso de validación para comprobar si la información en sus modelos es correcta, esto no significa que ingieran esquemas durante su entrenamiento. Tampoco utilizan datos estructurados como lo haría una máquina para etiquetar explícitamente elementos y sus relaciones. En lugar de eso, los LLMs funcionan como grandes redes estadísticas de conocimiento del lenguaje, sin construir modelos detallados de entidades. Entonces, aunque sí se recomienda seguir usando el marcado de datos estructurados, éste no será consumido ni utilizado por las plataformas de IA de la misma manera en que lo usan los robots de los buscadores actuales.


## ¿Qué páginas están usando la inteligencia artificial en sus estrategias SEO?

## CNET, pionero con ChatGPT

Uno de los portales que primero incluyeron ChatGPT en la generación de sus contenidos fue el portal periodístico CNET. Recibió muchas críticas dado que sus contenidos, que antes ofrecían análisis exhaustivos y estaban bien documentados, se convirtieron en generalidades e incluso en algunos casos, incluyendo datos incorrectos. Esto irritó a gran parte de su comunidad e incluso Google hizo una [publicación en X](https://twitter.com/searchliaison/status/1613465456429633536) alertando de que **la generación de contenido con fines de mejorar el posicionamiento en lugar de generar valor para los usuarios**, va [en contra de las directrices del buscador](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=es) y podrá ser penalizado.

Como resultado, CNET redujo drásticamente la cantidad de contenido escrito por IA, ya que se dieron cuenta de que la oportunidad de manipular artificialmente las clasificaciones para obtener una ventaja de SEO frente a arruinar su reputación probablemente no valía la pena el esfuerzo.

### LinkedIn y sus páginas colaborativas

LinkedIn es la red social más popular para personas que desean construir relaciones, aprender y encontrar una manera de hacer negocios en línea.

El programa de [artículos colaborativos de LinkedIn](https://www.linkedin.com/pulse/topics/home/) se lanzó a principios de este año y pronto alcanzó a más de 1.5 millones de usuarios orgánicos.
Los artículos **están impulsados por IA** para iniciar una conversación sobre diversos temas y luego se amplían con comentarios y opiniones (ellos lo denomionan perspectivas) de expertos y contribuciones de la comunidad de LinkedIn.

Se estima que se han generado más de 100k artículos de este tipo.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/cc88d3f2-ac98-4e42-8468-2a6b2e2990cf){:class="img-responsive"}

## Bankrate

Bankrate ha seguido una estrategia similar. Ha generado multitud de páginas con contenido básico (por ejemplo, qwé es una tarjeta prepago) y luego utiliza a personas para validar y optimizar esos contenidos. Se trata de una optimización del proceso de generación de contenido pero con un enfoque válido para el SEO.  

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/d3dc0a8d-6062-4cac-a4d9-4cd23bb76685){:class="img-responsive"}

Todos los artículos generados de esta forma están firmados de la misma manera e incluyen información tanto de que han sido generados por inteligencia artificial así como la persona física que los ha revisado.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/b9c0f820-9e8a-463d-95a7-ad6d66c17274){:class="img-responsive"}

## ¿Merece la pena generar contenido con inteligencia artificial?

Mi respuesta rápida es que sí, pero con condiciones. Es una herramienta que nos puede ayudar a **mejorar nuestros procesos de creación de contenidos**, pero no podemos delegar completamente la responsabilidad de la generación del contenido final. Si me apuráis, tampoco creo que sea bueno que la IA sea quién genere el primer boceto.

Mis recomendaciones sería utilizarlas para optimizar nuestra escritura, buscar claridad en las frases, definir un storytelling claro para los usuarios, etc.

### Test A/B de TV 2 Fyn

Uno de los pocos experimentos que conozco es el del portal TV 2 Fyn. Crearon durante 2 meses 40 artículos en un proceso híbrido de IA + humano. Después, compararon con una muestra similar de artículos creados sólo por sus redactores y sin ningún tipo de ayuda.
En los resultados, queda patente que la combinación de humano + IA, posicionó mucho mejor.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/6019b3f1-e116-405d-a620-0ac09d51af6c){:class="img-responsive"}

### La autoridad de dominio tiene mucha importancia

He comentado en varias ocasiones que alinearnos con el concepto EEAT y demostrar autoridad será un aspecto fundamental para las estrategias SEO de los próximos meses.
Un ejemplo lo podemos encontrar en el portal The Verge. Hicieron un experimento para generar artículos con ChatGPT y si nigún tipo de moderación o validación humana.

Sorprendentemente posicionaron los primeros para el término `Best printer 2023` usando un artículo mediocre y en el que no se ofrecía ningun tipo de opinión o valoración subjetiva.
Está claro que **el peso de marca y autoridad tienen gran influencia**, posiblemente a la misma altura que el contenido en sí. 

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/d1f97ffa-57e8-4d56-955e-bbf254344b38){:class="img-responsive"}

## ¿Qué debemos tener en cuenta a la hora de generar contenido con inteligencia artificial?

- **Eficiencia de la IA**: La IA puede agilizar significativamente el proceso de creación de titulares, ahorrando tiempo y recursos.

- **Efectividad en los títulos**: La IA sí puede ayudarnos a definir los titulares más adecuados. No desde el enfoque SEO, pero sí lo que considera que puede llamar más la atención a los usuarios.

- **Colaboración humano-IA**: Los mejores resultados se obtuvieron a menudo cuando los editores humanos refinaron los titulares generados por IA, lo que sugiere un potencial entre la IA y la creatividad humana. Es imprescindible que validemos los contenidos generados y, especialmente en las temáticas sensibles YMYL (*Your Money or Your Life*), nos aseguramos de que no se incluyen errores.

- **Curva de aprendizaje y limitaciones**: Si bien la IA generalmente respondía a instrucciones específicas, hubo casos en los que tuvo dificultades para desarrollar titulares, lo que resalta aún más las limitaciones actuales de la tecnología.

- **Autoridad de marca**: tener autoridad en nuestro sector será fundamental para que nuestros futuros contenidos (generados con o sin IA) tengan una buena aceptación.


