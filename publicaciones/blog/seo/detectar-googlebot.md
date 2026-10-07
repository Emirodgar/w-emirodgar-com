---
title: Cómo detectar a Googlebot
description: Cómo comprobar que una visita es realmente Googlebot u otro robot oficial con DNS inversa, rangos de IP publicados y User-Agent, y qué hacer si te bloquea el firewall.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
date: 19/05/2021
date_modified: 07/10/2026
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: seo
permalink: detectar-googlebot

--- 

En ciertas ocasiones es necesario identificar si el visitante de nuestro sitio es el robot de búsqueda de Google (Googlebot) y tomar ciertas acciones: filtrar logs, no bloquearlo en un firewall o CDN, o descartar a quien se hace pasar por él.

> No debemos ofrecer contenido diferente al robot y a los usuarios ya que eso sería *cloaking* y podría ser penalizado.

## ¿Cómo identificar al robot de Google?

Google [documenta oficialmente](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot) dos formas de verificar a sus rastreadores: la **DNS inversa** (manual) y la **comparación de la IP con los rangos publicados** (automática). El `User-Agent` sirve para saber qué robot dice ser el visitante, pero **nunca para confirmarlo**.

| Método | Fiabilidad | Coste | Cuándo usarlo |
|---|---|---|---|
| `User-Agent` | Baja (se falsifica con una línea) | Mínimo | Primer filtro o segmentar logs |
| DNS inversa + DNS directa | Alta | Medio (dos consultas DNS) | Verificaciones puntuales o con caché |
| Rangos de IP oficiales (JSON) | Alta | Bajo | Firewalls, CDN, análisis de logs a gran escala |

### DNS inversa

Es el proceso clásico y sigue siendo válido. El proceso oficial es el siguiente:

1.  Ejecuta una consulta DNS inversa sobre la IP que aparece en tus logs.
2.  Comprueba que el dominio devuelto es `googlebot.com`, `google.com` o `googleusercontent.com`.
3.  Ejecuta una consulta DNS directa sobre ese nombre de dominio.
4.  Comprueba que devuelve la misma IP del acceso original. Este paso es el que evita la suplantación: quien controla la DNS inversa de su propia IP puede poner el nombre que quiera, pero no puede hacer que `googlebot.com` apunte a su servidor. **No lo omitas**.

Veamos un ejemplo con la herramienta `host`:

    host 66.249.66.1
    1.66.249.66.in-addr.arpa domain name pointer crawl-66-249-66-1.googlebot.com.

    host crawl-66-249-66-1.googlebot.com
    crawl-66-249-66-1.googlebot.com has address 66.249.66.1

La IP coincide, así que es Googlebot. El dominio que devuelve la DNS inversa depende del tipo de robot:

| Tipo de robot | Máscara de DNS inversa |
|---|---|
| Rastreadores comunes (Googlebot) | `crawl-***-***-***-***.googlebot.com` o `geo-crawl-***-***-***-***.geo.googlebot.com` |
| Rastreadores de casos especiales (AdsBot...) | `rate-limited-proxy-***-***-***-***.google.com` |
| Recuperadores activados por el usuario (Google Site Verifier...) | `***-***-***-***.gae.googleusercontent.com` o `google-proxy-***-***-***-***.google.com` |

Por eso un host de `google.com` o `googleusercontent.com` no significa que sea Googlebot, sino un servicio de Google. Para saber exactamente qué es, mira el tipo de rastreador y su `User-Agent`.

Es el método más fiable pero el que más recursos implica, así que en producción conviene **cachear el resultado por IP** y no ejecutarlo en cada petición.

### Rangos de IP oficiales

Desde 2021 Google publica sus rangos de IP en formato JSON (CIDR), lo que permite verificar a un robot sin hacer consultas DNS: basta con comprobar si la IP está dentro de alguno de los rangos. Hay un archivo por tipo de robot, todos en `gstatic.com`:

| Tipo | Archivo |
|---|---|
| Rastreadores comunes (Googlebot) | [common-crawlers.json](https://www.gstatic.com/crawling/ipranges/common-crawlers.json) |
| Rastreadores de casos especiales | [special-crawlers.json](https://www.gstatic.com/crawling/ipranges/special-crawlers.json) |
| Recuperadores activados por el usuario | [user-triggered-fetchers.json](https://www.gstatic.com/crawling/ipranges/user-triggered-fetchers.json) y [user-triggered-fetchers-google.json](https://www.gstatic.com/crawling/ipranges/user-triggered-fetchers-google.json) |
| Agentes activados por el usuario | [user-triggered-agents.json](https://www.gstatic.com/crawling/ipranges/user-triggered-agents.json) |

Para servicios de Google que no son rastreadores existe además el listado general [goog.json](https://www.gstatic.com/ipranges/goog.json).

> El archivo que antes se llamaba `googlebot.json` es ahora `common-crawlers.json`. Si tu CDN, firewall o script todavía apunta al nombre antiguo, revísalo. Los rangos cambian, así que **descárgalos de forma periódica** en lugar de copiarlos a mano una sola vez.

### User Agent

La otra opción es consultar el `User-Agent`. Google ofrece un [listado completo](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers) de los de todos sus robots, tanto de los de búsqueda como los asignados a otros servicios.

Por ejemplo, el `User-Agent` de Googlebot para móvil, que es el que rastrea la mayoría de las webs, es similar a este (la versión de Chrome, `W.X.Y.Z`, cambia con el tiempo):

    Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)

Por eso conviene buscar el token `Googlebot` y no comparar la cadena completa. La pega es que cualquiera puede usar ese mismo valor, así que el `User-Agent` solo debe servir de filtro previo y la confirmación debe hacerse con la DNS inversa o los rangos de IP.

Si lo que buscas es lo contrario, hacerte pasar tú por Googlebot para auditar tu web, te explico [cómo emular su acceso](https://emirodgar.com/emular-googlebot).

## ¿Y con otros robots?

El mismo principio (no fiarte del `User-Agent`) aplica a los demás rastreadores. Estos son los métodos que publica cada empresa:

| Robot | DNS inversa | Rangos de IP oficiales |
|---|---|---|
| Googlebot | `googlebot.com`, `google.com`, `googleusercontent.com` | [JSON de Google](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot) |
| Bingbot | `*.search.msn.com` | [bingbot.json](https://www.bing.com/toolbox/bingbot.json) y la herramienta [Verify Bingbot](https://www.bing.com/toolbox/verify-bingbot), también disponible en Bing Webmaster Tools |
| Applebot | `*.applebot.apple.com` | [applebot.json](http://search.developer.apple.com/applebot.json) |
| OAI-SearchBot, GPTBot y ChatGPT-User (OpenAI) | No documentada | [searchbot.json](https://openai.com/searchbot.json), [gptbot.json](https://openai.com/gptbot.json) y [chatgpt-user.json](https://openai.com/chatgpt-user.json) |

Los robots de IA son de los más suplantados, así que si has decidido [bloquear a un rastreador de IA](https://emirodgar.com/bloquear-rastreador-ia) o permitirle el acceso solo a ciertas secciones, verifica la IP además del `User-Agent`. De lo contrario, bloquearás solo a los que cumplen las reglas y dejarás pasar a los que mienten.

## Contrastar con Search Console

Si quieres saber cómo te rastrea Google realmente, el informe de **Estadísticas de rastreo** de Search Console muestra las peticiones por tipo de robot, código de respuesta y tiempo medio de respuesta. Úsalo como contraste con tus logs: si en tu servidor ves muchas más visitas de "Googlebot" que las que indica Search Console, parte de ellas serán falsas.

## Problemas al bloquear a Googlebot

Google actualiza sus rangos de IPs con poca frecuencia, pero cuando ocurre debemos estar atentos si utilizamos CDNs o firewalls (por ejemplo si [bloqueas el acceso a ciertos países](https://emirodgar.com/bloquear-acceso-pais)) para asegurarnos de que entienden que se trata de `Googlebot` y no bloquean su acceso. En el caso de que nuestro sistema de seguridad bloquee al rastreador de Google por equivocación, suele generar caída en los rastreos (línea azul) y aumento del tiempo medio de respuesta (línea naranja). En la siguiente imagen podemos ver un ejemplo real en el que el CDN Akamai no actualizó rápidamente el listado de IPs, lo que provocó un problema al rastreo del sitio.

![image](https://github.com/user-attachments/assets/bbb836f8-5575-4aa4-bfdd-6dce6573096a){:class="img-responsive"}

Para evitarlo, verifica con los rangos oficiales en el firewall en lugar de listas de IP copiadas a mano, y comprueba tras cada cambio de reglas que Googlebot sigue recibiendo respuestas `200`.

## Fuentes

*   [Verificar Googlebot y otros rastreadores de Google](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot)
*   [Rastreadores comunes de Google](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers)
*   [How to verify that Bingbot is Bingbot](https://blogs.bing.com/webmaster/2012/08/31/how-to-verify-that-bingbot-is-bingbot)
*   [Verificar Applebot](https://support.apple.com/en-us/119829)
*   [Documentación de rastreadores de OpenAI](https://developers.openai.com/api/docs/bots)
