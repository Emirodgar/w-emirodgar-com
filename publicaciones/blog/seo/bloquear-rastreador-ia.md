---
title: Cómo bloquear el rastreador de las inteligencias artificiales
description: Evita que las IA utilicen tu contenido para generar respuestas de los chatbots.
image: https://emirodgar.com/cdn/images/og/auditoria.png
layout: emirodgar_post
sitemap: 1
feed: 1
folder: seo
author: Emirodgar
date: 06/11/2023
permalink: bloquear-rastreador-ia

---

Los chatbots actuales, como ChatGPT y Google Bard, son capaces de generar texto, traducir idiomas, escribir diferentes tipos de contenido creativo y responder a preguntas de forma informativa. 
Sin embargo, también pueden ser utilizados para fines maliciosos, como la difusión de información falsa o la recopilación de datos personales.

Para protegernos de estos riesgos, es importante bloquear el rastreo a los robots de búsqueda de los chatbots. Esto se puede hacer, a día de hoy, bloqueando su acceso a través del fichero `robots.txt`.

> La realidad es que en muchos casos ignoran esta directiva y acceden a nuestros contenidos, aún así, es la única medida propuesta a día de hoy.


## Bloquear el rastreo de ChatGPT

ChatGPT, de OpenIA, utiliza el robot de rastreo [GTPbot](https://platform.openai.com/docs/gptbot), el cuál puede ser bloqueado con la siguiente instrucción desde el fichero `robots.txt`:

```
User-agent: GPTBot
Disallow: /
```

También tenemos la opción de identificar el `user-agent` de la visita a nuestra página y bloquear si detectamos que se trata de `ChatGPT-User`. o bloquear [las IPs que utilizan](https://openai.com/gptbot.json). 
Todas las medidas pueden convivir.

## Bloquear el rastreo de Google Bard y Vertex AI

Ambas aplicaciones, de Google, y las futuras que estén relacionadas con la inteligencia artificial, pueden ser bloqueadas a través del fichero `robots.txt`.
Al igual que el caso de GTPbot, podemos bloquear al rastreador `Google-Extended`, que es el que utilizan estas aplicaciones. Os dejo el [listado de user-agents que utiliza Google](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers?hl=en#google-extended). 

Mucho cuidado con utilizar otro `user-agent` que no sea el asociado a estas dos aplicaciones, ya que podríamos provocar la desindexación de nuestra página.

