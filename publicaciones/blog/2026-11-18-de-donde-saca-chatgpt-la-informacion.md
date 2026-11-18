---
title: De dónde saca ChatGPT la información, 4 fuentes y qué puedes hacer en cada una
description: ChatGPT responde con datos de entrenamiento, búsquedas en vivo, contenido licenciado y tu propio contexto. Te cuento cuándo usa cada una, qué dicen los estudios de Ahrefs y qué puede hacer tu web.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 18-11-2026
folder: geo
permalink: de-donde-saca-chatgpt-la-informacion

---

Cuando alguien me pregunta cómo aparecer en ChatGPT, lo primero que hago es devolverle otra pregunta: ¿de dónde está sacando la respuesta? Porque no es una sola fuente, y de cuál sea depende lo que puedes hacer. Ahrefs ha publicado una guía muy completa, [Where Does ChatGPT Get Its Information?](https://ahrefs.com/blog/where-does-chatgpt-get-its-information/), y te resumo lo que me parece útil, con sus límites.

## Las cuatro fuentes

Según Ahrefs, ChatGPT responde con información de cuatro sitios, y cuál usa depende de la pregunta:

| Fuente | Cuándo se usa | ¿Puede influir tu web? |
|---|---|---|
| **Datos de entrenamiento** | Siempre, es el conocimiento base | Solo a largo plazo e indirectamente |
| **Búsqueda web en vivo** | Cuando la pregunta "se beneficiaría de información actual", o cuando el usuario elige Search | Sí: posicionando para el tema y dejando entrar a su rastreador de búsqueda |
| **Contenido de editores licenciado** | Junto con la búsqueda, para noticias, reseñas, recetas… | Solo si te cubren esas publicaciones |
| **Contexto del usuario** | Siempre que exista: prompt, archivos, memoria, apps conectadas | Solo si el usuario te trae: un enlace, un archivo o tu app conectada |

## 1. Entrenamiento: lento, indirecto y opaco

El entrenamiento es de donde sale el conocimiento general del modelo. OpenAI dice que usa información pública de internet, datos de acuerdos con terceros y datos aportados por usuarios, entrenadores humanos e investigadores. El último desglose detallado fue el de GPT-3 en 2020, con Common Crawl filtrado en torno al 60 %, WebText2 al 22 %, libros al 16 % y Wikipedia al 3 %. Desde entonces, la información que comparte es cada vez menor, así que nadie fuera de OpenAI sabe qué hay hoy.

Lo que implica para ti: si tu web es pública y no bloquea el rastreador de entrenamiento, es probable que tus páginas acaben en los datos de futuros modelos. Es así como ChatGPT puede "conocer" tu marca sin buscarla, pero es lento (aparece en el siguiente modelo, meses después) y no ves qué aprendió. Además tiene fecha de corte: según Ahrefs, la de los modelos actuales es la primavera de 2026, y para todo lo posterior la respuesta tiene que venir de una búsqueda.

¿Puedes impedirlo? Sí, bloqueando `GPTBot` en `robots.txt`. Ahrefs mide que es el rastreador de IA más bloqueado (en torno a un 6 % de unos 140 millones de sitios). Pero **bloquear `GPTBot` no te saca de la búsqueda de ChatGPT**, que depende de otro rastreador, `OAI-SearchBot`. Los dos ajustes son independientes, y OpenAI indica que, si permites ambos, puede usar un único rastreo para los dos fines. Lo desarrollo en [cómo bloquear el rastreador de las IA](https://emirodgar.com/bloquear-rastreador-ia) y en [bloquear bots sin criterio](https://emirodgar.com/segmentar-bloqueo-bots).

## 2. Búsqueda en vivo: donde más puedes mover

En una prueba propia con 12 preguntas en un ChatGPT sin sesión, 9 activaron una búsqueda: actualidad, precios, recomendaciones de producto y todo lo que pedía fuentes. Solo las definiciones simples ("qué es un backlink") se respondieron con el entrenamiento. Es una muestra pequeña, pero ilustra la idea.

Y no es una búsqueda menor: en noviembre de 2026, el responsable de producto de consumo de ChatGPT dijo a Big Technology que sus búsquedas web suman aproximadamente una quinta parte del volumen de Google, contando cada pregunta que va a la web como una búsqueda. Es una declaración de OpenAI, no una medición independiente.

### No pega tu pregunta en un buscador

ChatGPT reescribe la consulta en una o varias búsquedas más concretas. Es el *query fan-out* que cuento en [cómo escribir contenido citable y cubrir el fan-out](https://emirodgar.com/contenido-citable-query-fan-out). En un estudio de Ahrefs con 66,6 millones de respuestas de ChatGPT gratuito sin sesión (agosto y septiembre de 2026), las respuestas con fan-out tenían en torno a 1,6 consultas cada una. Y dos patrones llaman la atención:

- **El 6,8 % de esas consultas usaban el operador `site:`**, es decir, buscaban dentro de un solo sitio. Tres de cada cuatro iban a webs de marca. ChatGPT se salta a veces la web abierta y va directo a la fuente que cree que tiene la respuesta: si preguntan por tu producto, puede consultar tu web.
- **"Official" aparecía en el 13,1 % de las búsquedas en inglés de septiembre**, frente al 10,1 % de agosto. Busca la fuente primaria, lo que favorece a la marca u organismo sobre el que se pregunta frente a los listados de terceros.

Otro estudio académico que cita Ahrefs (80 preguntas, 20 ejecuciones cada una) vio que los modelos nunca buscaban con las palabras exactas del usuario, y que en preguntas hechas en chino, en torno al 70 % de las ejecuciones con búsquedas visibles buscaron solo en inglés. Son modelos y datos concretos, pero recuerda que lo que escribe el usuario no es lo que se busca.

### Qué páginas cita

OpenAI dice que ordena los resultados "con múltiples factores" y no los enumera. Lo que sí hay son datos de Ahrefs, sobre todo de EE. UU. y en inglés:

- **Depende del tipo de pregunta.** En 4.000 prompts de octubre de 2026, el 82 % de las citas de salud fue a sitios gubernamentales, médicos y académicos; el 63 % de las definiciones a diccionarios y enciclopedias; el 59 % de las preguntas de marca a webs de empresa; en compras lideraban los comercios (28 %); y en "mejor X" y comparativas, los sitios de reseñas (27 %).
- **Se citan páginas de la búsqueda web normal.** En un estudio de 1,4 millones de prompts, ChatGPT citó el 88 % de las páginas que obtuvo de búsqueda web, pero solo el 12 % de las de noticias y menos del 2 % de Reddit, YouTube y artículos académicos.
- **Importa que el título case con la pregunta.** Las páginas citadas tenían títulos más parecidos a la pregunta que las recuperadas y no citadas (similitud de 0,60 frente a 0,48).
- **Prefiere páginas más recientes que Google.** En 17 millones de citas, las URLs citadas eran 458 días más nuevas que los resultados orgánicos de Google.
- **Posicionar en el tema ayuda, aunque no sea la misma página.** El 31,8 % de las citas venía de un sitio que posiciona en Google para esa pregunta, pero solo el 10 % era la página exacta que posiciona.
- **El schema no cambió nada.** Cuando 1.885 páginas ya citadas añadieron datos estructurados, sus citas en ChatGPT no cambiaron de forma estadísticamente significativa. Coincide con lo que cuento en [datos estructurados y la IA](https://emirodgar.com/datos-estructurados-seo-llm).

### ¿Usa Google o Bing?

Ahrefs lo resume con honestidad: no se sabe del todo. OpenAI nombra a Microsoft (Bing) como proveedor, tiene su propio rastreador e índice, y recibe contenido directo de socios. En 2025 se publicó que usó un servicio de scraping para obtener resultados de Google en temas de tiempo real, algo que OpenAI no ha confirmado. Y lo importante: solo en torno al 8 % de las citas de ChatGPT estaba en el top 10 de Bing, y otro 8 % en el de Google, para la misma pregunta. Lo que ChatGPT cita no se predice mirando tu ranking en ninguno de los dos.

### Pocas citas se repiten

Glen Allsopp siguió más de 1.300 prompts diarios durante cuatro semanas: solo en torno a una cuarta parte de las páginas citadas para un prompt se repetían al día siguiente. Los dominios que más se citaban cambiaban un 14 % de un día para otro, frente al 74 % del resto. Por eso en [medir tu visibilidad en IA](https://emirodgar.com/medir-visibilidad-ia) insisto en muestrear varias veces y no fiarte de una captura.

## 3. Contenido licenciado

OpenAI tiene acuerdos con algunos editores y, según Ahrefs, ChatGPT puede mostrar resúmenes de sus artículos junto a los resultados de búsqueda en noticias, reseñas o recetas. Tu web solo influye aquí de forma indirecta: apareciendo en esas publicaciones. Es otra razón para trabajar menciones y relaciones públicas, como cuento en [Wikipedia, podcasts y Reddit, las fuentes que alimentan las citas de la IA](https://emirodgar.com/wikipedia-podcasts-reddit-citas-ia).

## 4. Tu propio contexto

ChatGPT también responde con lo que el usuario le aporta: su prompt, archivos, memoria, historial y apps conectadas. Esa memoria puede modificar las búsquedas. OpenAI pone el ejemplo de alguien que ha dicho que es vegano y vive en San Francisco: pedir restaurantes cercanos puede generar la búsqueda "buenos restaurantes veganos San Francisco". Y puede usar la ubicación aproximada según la IP, que comparte con los proveedores de búsqueda, pero no la IP en sí.

Consecuencia práctica: igual que pasa con [Google y su inteligencia personal](https://emirodgar.com/google-personal-intelligence-seo), no hay una única respuesta que optimizar.

## Qué haría yo

1. **Dejar entrar a `OAI-SearchBot`** si quieres aparecer en ChatGPT, y decidir `GPTBot` por separado según tu política de contenido. Comprobar con logs, no solo con `robots.txt`.
2. **Tener páginas "oficiales" claras** para tu marca y tus productos: ChatGPT busca la fuente primaria y a veces consulta tu web directamente.
3. **Alinear los títulos con las preguntas reales** y mantener fechas y datos al día.
4. **Reforzar lo que no controlas**: reseñas, listados de terceros y menciones, que dominan las consultas de "mejor X".
5. **Medir con prompts reales** y varias ejecuciones, no con tu posición en Google.

## Conclusiones

- ChatGPT usa cuatro fuentes: entrenamiento, búsqueda en vivo, contenido licenciado y el contexto del usuario.
- Sobre la búsqueda en vivo es donde más puedes actuar, y depende del tipo de pregunta.
- Bloquear el entrenamiento no te quita de la búsqueda de ChatGPT.
- Tu ranking en Google o Bing predice mal tus citas: hay que mirar las respuestas reales.

Casi todos estos datos vienen de Ahrefs y de estudios de EE. UU. en inglés, así que sirven como dirección y no como objetivo para tu mercado.

*Este artículo forma parte de la guía [Cómo optimizar para AEO y aparecer en respuestas de ChatGPT](https://emirodgar.com/como-optimizar-para-aeo-y-aparecer-en-chatgpt).*
