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

## Bloquear el acceso a SGE (búsqueda generativa de Google)

En este caso ya no estamos hablando de un chatbot sino de la búsqueda generativa de Google, una respuesta de inteligencia artificial que se incluye directamente en la página de resultados.
Por desgracia esta respuesta se basa en el rastreo e indexación del robot principal de Google, por lo que no hay manera de evitar su acceso a no ser que no queramos aparecer en Google.

Además de bloquear a los rastreadores de chatbots e inteligencias artificiales, existen [listados de robots spam](https://emirodgar.com/listado-robots-bloquear) que consumen nuestros recursos ni aportarnos ningún valor. Os recomiendo bloquearlos.

## Seguimiento de medios digitales que han bloqueado a los chatbots existentes

El proyecto [News Websites Blocking LLM Dataset Bots - Research Data](https://docs.google.com/spreadsheets/d/122X_gX8e7xYfiDO4_zPx1aqh3CgpXUr4X2ijiOh9x88/edit#gid=1611081988) está haciendo seguimiento de la postura de los grandes medios digitales frente a los rastreadores de IA. Actualmente, en España sólo un medio bloquea a los rastreadores frente al 50% de los medios en EEUU.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/63ff136b-baee-4a8c-aec7-6b92a10f3a11){:class="img-responsive"}



