---
title: Qué puedes aprender mirando la pestaña Network cuando buscas en Google o ChatGPT
description: Cada vez que usas Google o ChatGPT, tu navegador intercambia datos con servicios internos que puedes ver con F12. Te cuento la idea de Mark Williams-Cook, qué se ha encontrado así, cómo mirarlo tú y por qué conviene no pasarse de listo.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 19-10-2026
folder: geo
permalink: network-devtools-google-chatgpt

---

Mark Williams-Cook (AlsoAsked) publicó el 17 de octubre de 2026 una guía para principiantes sobre algo que casi nadie en SEO mira: los **datos de red** que intercambia tu navegador cuando usas Google o ChatGPT. Su tesis es sencilla. Esa conversación entre tu navegador y los servicios que hay detrás está a la vista en la pestaña Network de las DevTools, a un `F12` de distancia, y en ella a veces quedan pistas sobre cómo funcionan estos sistemas por dentro.

Una advertencia antes de seguir: su artículo es de Substack y la parte técnica (el ejemplo manual con el que encontró el fallo de Google) está tras el muro de suscripción. Aquí te cuento lo que se puede leer, lo que ya había contado él en otros sitios y cómo lo aplicaría yo, separando una cosa de la otra.

## Qué dice que ha encontrado así

Según el propio Williams-Cook, mirar esos datos le ha servido para:

- **Descubrir un fallo en la búsqueda de Google** que le valió una recompensa de 13.337 $ del programa de bug bounty de Google.
- **Ver nombres de parámetros y valores reales**, como un `site_quality_score` o un `rq_semantic_class`, este último el origen de su herramienta [QueryClassifier](https://queryclassifier.com/).
- Ser de los primeros en detectar **los distintos conjuntos de fuentes** de los que ChatGPT saca sus resultados, y más tarde **las ventanas de frescura** que pide cuando busca.
- Reunir evidencia de que **ChatGPT sigue leyendo Reddit igual que antes**, aunque lo cite mucho menos.

Son afirmaciones suyas, y yo no he podido comprobar ninguna. Aun así, la última merece atención porque encaja con un cambio que ya conté: según Ahrefs Brand Radar, en ChatGPT las citas a Reddit pasaron de una de cada cinco respuestas en marzo de 2026 a una de cada 43 a finales de septiembre, como recojo en [Wikipedia, podcasts y Reddit](https://emirodgar.com/wikipedia-podcasts-reddit-citas-ia). Si Williams-Cook tiene razón, **que una fuente se cite menos no significa que el modelo la lea menos**, y eso es justo lo que no ves si solo mides citas. Lo trato como hipótesis, no como un hecho.

## Qué son los datos de red, sin tecnicismos

Williams-Cook usa una imagen que me gusta: cajas que viajan entre tu navegador y un almacén. Algunas llevan una etiqueta clara, otras una que no significa nada, y otras puedes abrirlas y deducir qué pasa por lo que llevan dentro.

Detrás de Google no hay un buscador monolítico, sino un montón de subsistemas pequeños que se hablan entre sí. Los sistemas más cercanos al usuario necesitan saber qué has buscado y reciben puntuaciones y señales generadas en otras partes. Esas señales tienen que viajar, y a veces lo hacen a través de tu navegador. Como dice él, a veces nadie se acordó de quitarles la etiqueta.

## Cómo mirarlo tú

Es la misma pestaña que uso para [comprobar que GA4 está instalado](https://emirodgar.com/comprobar-ga4-instalado-consola), aplicada a otro sitio:

1. Abre Google o ChatGPT y pulsa `F12`.
2. Ve a la pestaña **Network** y filtra por **Fetch/XHR**.
3. Haz una búsqueda o lanza un prompt.
4. Haz clic en cualquier petición de la lista. Verás cuatro pestañas:
   - **Headers**: instrucciones y metadatos de la petición.
   - **Payload**: lo que has enviado.
   - **EventStream**: lo que va llegando en vivo mientras se genera la respuesta (ChatGPT lo usa mucho).
   - **Response**: lo que te devuelve el servidor.

Si quieres moverte mejor por las DevTools, tienes más trucos en [cómo usar la consola de Chrome](https://emirodgar.com/consola-devtools-chrome).

Mi consejo, y aquí ya es opinión mía: **empieza con una pregunta concreta**. Por ejemplo, "¿qué manda ChatGPT cuando le pido algo reciente?". Mirar sin pregunta es perderse entre cientos de peticiones, y por eso él mismo habla de apoyarse hoy en un agente de IA para las partes tediosas.

## La parte filosófica: ventajas acumuladas

Lo más interesante del artículo, para mí, no es la técnica sino el planteamiento. Williams-Cook compara el SEO con un juego: conocerse las reglas no te hace jugar bien, y lo que marca la diferencia son **pequeñas ventajas acumuladas** que tu competencia no puede copiar en diez minutos, a diferencia de un listado o un truco.

Lo ilustra con piedra, papel o tijera. Si tu rival juega siempre piedra, lo "óptimo" parece jugar siempre papel, pero ganarás cinco o diez partidas hasta que se dé cuenta y cambie. Lo mejor es jugar al azar pero con **algo más de papel**: tu ventaja no se nota, nadie tiene motivo para adaptarse y vas abriendo hueco poco a poco.

De ahí su paralelismo entre sombrero negro y blanco. El sombrero negro funciona y puede dar mucho dinero a corto plazo, pero obliga a Google o a ChatGPT a cambiar las reglas, y entonces la ventaja se evapora y a veces se lleva el dominio por delante. El sombrero blanco es "jugar un poco más de papel": generar valor sin que nadie tenga que cambiar nada, y acumularlo con el tiempo. Es una analogía, no una demostración, pero describe bien lo que ya veo en proyectos que aguantan los cambios de algoritmo.

## Qué haría yo con esto

- **Usa los datos de red para formular hipótesis, no para sacar conclusiones.** Lo que ves en tu navegador es una muestra de una petición. Contrástalo repitiendo, como explico en [cómo medir tu visibilidad en la IA](https://emirodgar.com/medir-visibilidad-ia): una medición no es un dato.
- **No asumas que un parámetro significa lo que su nombre sugiere.** Un `site_quality_score` visto en una petición no te dice cómo se calcula ni cuánto pesa en el ranking.
- **Mira lo que es tuyo.** Observar el tráfico de tu propio navegador es una cosa. Intentar explotar lo que encuentras es otra, y la forma correcta de hacerlo es la de Williams-Cook: reportarlo por el programa de recompensas del propietario. No publiques ni uses fallos que no te pertenecen.
- **Revisa los términos de uso** de cada servicio antes de automatizar nada.
- **Usa lo aprendido para probar, no para fabricar.** Lo que mejor encaja con su idea de acumular ventajas es lo que propongo en [GEO deja de adivinar y empieza a probar](https://emirodgar.com/geo-empieza-a-probar): hipótesis, prueba, medición.

## Conclusiones

- La pestaña Network de Chrome te deja ver qué piden y qué devuelven Google y ChatGPT cuando buscas o conversas.
- Según Williams-Cook, ahí ha encontrado desde un fallo premiado con 13.337 $ hasta señales sobre fuentes, frescura y lectura de Reddit. Son afirmaciones suyas, y parte del detalle está tras un muro de pago.
- Que algo aparezca en una petición no explica cómo se usa en el ranking: es una pista, no una fórmula.
- La idea de fondo vale más que la técnica: ganar por pequeñas ventajas acumulables, no por trucos que se agotan.

*Fuente: [Wiretapping the SERP](https://markwilliamscook.substack.com/), de Mark Williams-Cook (17 de octubre de 2026). Este artículo forma parte de la guía [GEO deja de adivinar y empieza a probar](https://emirodgar.com/geo-empieza-a-probar).*
