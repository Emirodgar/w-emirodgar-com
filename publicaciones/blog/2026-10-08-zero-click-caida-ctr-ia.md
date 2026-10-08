---
title: Zero-click y caída del CTR con la IA, cómo medirla y explicarla
description: Las respuestas de IA en Google reducen los clics a las webs. Te cuento qué dicen los estudios de Pew y Ahrefs, cómo comprobar si te está pasando a ti y cómo explicárselo a un cliente o a dirección.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 08-10-2026
folder: geo
permalink: zero-click-caida-ctr-ia

---

Tus impresiones se mantienen, tu posición también, y los clics bajan. Es la conversación que más se repite con clientes desde que Google enseña respuestas de IA en la página de resultados. Tiene nombre, **zero-click** (búsquedas que se resuelven sin salir de Google), y hay datos para explicarla. También hay trampas para quien los usa mal.

## Qué dicen los estudios

Tres fuentes que conviene conocer, con sus límites:

**Pew Research Center** analizó 68.879 búsquedas de 900 adultos de EE. UU. en marzo de 2025 y publicó sus [resultados en julio de 2025](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/):

- Con resumen de IA, los usuarios hicieron clic en un enlace tradicional en el **8 %** de las visitas. Sin resumen, en el **15 %**.
- Solo el **1 %** de las visitas incluyó un clic en un enlace dentro del propio resumen.
- La sesión terminaba en esa página en el 26 % de las visitas con resumen, frente al 16 % sin él.

**Ahrefs** estudió 300.000 keywords con datos de Search Console, comparando [diciembre de 2023 con diciembre de 2025](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update):

- En las keywords con AI Overview, el CTR del primer resultado en escritorio pasó de 0,073 a 0,016. Ahrefs lo expresa como una reducción del **58 %** sobre el CTR esperado.
- El efecto se reparte: **50,8 %** en la posición 2, **46,4 %** en la 3, **32,6 %** en la 5 y **19,4 %** en la 10.
- Limitaciones: es un análisis retrospectivo con dos años de diferencia, el CTR calculado es de escritorio, y son datos agregados de Search Console, no de usuarios individuales.

**El experimento con AI Mode**, que cuento en [qué significan las AI Overviews para editores](https://emirodgar.com/ai-overviews-google-publishers): al forzar las búsquedas a AI Mode, el porcentaje que acababa en una web externa cayó **18,8 puntos porcentuales**. Con las cautelas de una muestra joven y siete días de duración.

## Cómo leer estos datos

- **No son tu caída.** Son promedios. Tu pérdida puede ser mayor o inexistente según qué tipo de consulta te trae el tráfico.
- **Son sobre todo EE. UU. e inglés.** Pew es estadounidense, y en el estudio de Ahrefs no he visto desglose por mercado. No sé en qué medida se trasladan tal cual a España.
- **Dos números del mismo estudio no son comparables entre sí.** El 58 % de Ahrefs no equivale a la caída bruta de 0,073 a 0,016.
- **Las curvas clásicas de CTR ya no sirven sin matices.** Las que recogí en [tráfico y CTR en los resultados de Google](https://emirodgar.com/ctr-resultados-google) no distinguen si hay una respuesta de IA arriba.

Lo que sí sostienen los tres estudios es la dirección: cuando hay respuesta de IA, se hace menos clic en las webs.

## Cómo comprobar si te está pasando a ti

Antes de culpar a la IA, descarta lo demás. Mi orden de trabajo en Search Console:

1. **Compara dos periodos largos** (por ejemplo, 3 meses con los 3 anteriores y con el mismo periodo del año pasado) para quitar estacionalidad.
2. **Separa consultas de marca y de no marca.** Las de marca suelen resistir mejor. Con [regex en Search Console](https://emirodgar.com/regex-google-search-console) puedes montar el filtro en un minuto.
3. **Separa consultas informacionales de comerciales.** Si el CTR cae sobre todo en "qué es", "cómo" y "por qué", y mucho menos en "comprar" o "precio", el patrón encaja con la IA.
4. **Mira impresiones, clics, CTR y posición juntos.** Impresiones estables o al alza, posición similar y clics a la baja es el patrón típico. No es una prueba, pero es compatible. Una caída de impresiones apunta a otra cosa.
5. **Descarta lo técnico y lo algorítmico:** fechas de core updates, errores de indexación y cambios en el sitio. Si coinciden, la IA no es la única sospechosa.
6. **Mira el informe de IA generativa** para saber en cuántas impresiones apareces en esas funciones. Cómo leerlo está en [cómo sacar partido a ese informe](https://emirodgar.com/informe-ia-generativa-search-console).
7. **Contrasta con GA4.** Los datos de ambas herramientas nunca coinciden del todo, y [aquí explico por qué](https://emirodgar.com/datos-gsc-ga4).

Con todo eso tendrás una hipótesis defendible. No una certeza.

## Qué medir en su lugar

Si el clic baja, el CTR deja de ser el mejor termómetro. Lo que yo pondría al lado:

- **Conversiones e ingresos por página de destino**, no solo sesiones.
- **Tráfico y búsquedas de marca**, que es demanda propia y no depende de una respuesta de IA.
- **Exposición**, es decir, cuántas veces apareces, aunque no te pulsen. La [posición media por sí sola engaña](https://emirodgar.com/posicion-media-search-console-kpi), igual que el CTR aislado.
- **Valor por sección** de la web, para saber qué parte del tráfico perdido te importaba de verdad. El método está en el post del informe de IA generativa.

Y una hipótesis a comprobar, no a dar por buena: Google afirma que los clics que sí llegan desde páginas con AI Overviews son de mayor calidad. Contrástalo con tu conversión por segmento antes de repetirlo a nadie.

## Cómo explicárselo a un cliente o a dirección

La conversación que mejor me ha funcionado no empieza con una excusa. Una estructura que uso:

1. **Qué ha cambiado en el mercado.** Dos o tres datos con su fuente, dichos con sus límites.
2. **Qué parte de tu caída encaja.** Enseña el patrón: impresiones estables, clics a la baja, y en qué tipo de consultas.
3. **Qué parte no encaja.** Si hay otras causas, dilo.
4. **Qué mediremos a partir de ahora.** Conversiones, marca y exposición, no solo tráfico.
5. **Qué vamos a hacer.** Pocas acciones, con responsable y fecha.

Un matiz de tono. No prometas recuperar el tráfico de 2023, porque nadie sabe si volverá. Promete lo que sí controlas: qué consultas priorizar, qué contenido es citable y qué cuenta como éxito.

## Qué haría con el contenido

- **Priorizar consultas que una respuesta no resuelve:** comparar, decidir, comprar, ver, reservar o contratar.
- **No obsesionarse con el tráfico informacional puro** que ya no deja clics y no convierte. Mantenerlo si construye marca o te hace citable, y revisar si compensa el esfuerzo.
- **Escribir para que te citen**, como cuento en [cómo escribir contenido citable](https://emirodgar.com/contenido-citable-query-fan-out).
- **Reforzar la demanda de marca** y los canales propios, como el correo.
- **No poner todos los huevos en Google.** Reddit, YouTube o la prensa también alimentan respuestas, y lo cuento en [las fuentes que alimentan las citas de la IA](https://emirodgar.com/wikipedia-podcasts-reddit-citas-ia).

## Conclusiones

- Los estudios apuntan, con límites, a que una respuesta de IA reduce los clics: Pew midió un 8 % frente a un 15 %, y Ahrefs una caída del 58 % en la primera posición.
- Son promedios en EE. UU.; tu caída puede ser distinta.
- Antes de atribuirlo a la IA, compara periodos, separa marca y no marca, informacional y comercial, y descarta causas técnicas.
- Mide también conversión, marca y exposición, no solo clics.
- Explícalo con datos, con límites y con un plan.

El clic es solo una de las formas en que una web aporta valor. Ahora toca medir el resto.

*Este artículo forma parte de la guía [AI Overviews en Google qué significa para editores y marcas en 2026](https://emirodgar.com/ai-overviews-google-publishers).*
