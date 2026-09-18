---
title: 5 técnicas de prompting que Anthropic recomienda para sacar más partido a Claude
description: Anthropic ha publicado en su propia documentación técnica cinco recomendaciones concretas para mejorar los resultados de Claude. Te las explico traducidas a un uso práctico, más allá del desarrollador.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 18-09-2026
folder: ia
permalink: prompts-claude-anthropic

---

[Roger Montti](https://www.searchenginejournal.com/anthropic-shares-power-prompts-that-improve-ai-results/589448/) se hizo eco en Search Engine Journal de una guía que Anthropic ha ido ampliando en su [documentación técnica para desarrolladores](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-1): una lista de comportamientos concretos de Claude Fable 5.1 y de instrucciones puntuales para corregirlos cuando no te convienen.

La guía original está pensada para quien integra Claude vía API, con ejemplos de código incluidos. Pero varias de esas instrucciones son perfectamente utilizables por cualquiera que use Claude desde el chat o desde Claude Code para trabajo de contenido, SEO o análisis. Ya hablé en su momento de [técnicas de ingeniería de prompts para ChatGPT](https://emirodgar.com/como-sacar-mas-partido-a-chatgpt-con-ingenieria-de-prompts); esto es el equivalente específico para quien usa Claude, directamente de la fuente.

## 1. Pide prosa directa, sin adornos

Anthropic reconoce algo curioso: Claude Fable 5.1 escribe mejor que sus predecesores en general, pero a veces cae en lo que ellos mismos llaman "prosa amanerada" —sustituir una afirmación directa por una metáfora innecesaria, como decir "esto se gana su lugar" en vez de simplemente "esto sigue siendo importante"—. Es un vicio de estilo que prioriza sonar elaborado sobre comunicar con claridad.

La instrucción que proponen es tan simple como pedirle directamente que elimine ese tipo de prosa. En mi experiencia, funciona igual de bien en español: pídele a Claude que te dé la versión más directa y literal posible, sin florituras, y notarás la diferencia en cualquier texto que te redacte.

## 2. Dile cuándo quieres listas y negritas, y cuándo no

Es el problema inverso al que llevábamos meses corrigiendo: los modelos anteriores abusaban de las listas con viñetas y el texto en negrita. Fable 5.1 ha corregido tanto ese vicio que ahora tiende a quedarse corto, incluso cuando el contenido sí se beneficiaría de estructura.

La solución no es pedir "más formato" sin más, sino decirle exactamente cuándo lo quieres: listas y viñetas cuando el contenido es lo bastante complejo como para necesitarlas, y prosa corrida cuando la conversación es más personal o conceptual. Si trabajas con Claude para redactar artículos o respuestas de atención al cliente, esta es la instrucción que marca la diferencia entre un texto plano ilegible y uno con demasiados bullets.

## 3. Pide que verifique nombres poco conocidos antes de responder

Este es, para mí, el más relevante para cualquiera que use la IA para investigar o documentarse. Anthropic explica que, en el nivel de esfuerzo más económico ("low"), Claude tiende a responder de memoria en vez de buscar, incluso cuando el tema pertenece a un terreno que cambia constantemente, como herramientas de IA o actualizaciones de producto.

La recomendación es explícita: cuando el nombre de una herramienta, persona o producto no te resulte del todo familiar, pídele a la IA que lo busque tal cual lo has escrito antes de responder, en lugar de fiarse de lo que "cree recordar". Tener conocimiento parcial sobre algo es precisamente lo que hace que una respuesta desactualizada suene convincente. Es el mismo motivo por el que, en este blog, cuando escribo sobre datos o herramientas de IA, siempre verifico antes de publicar en vez de dar por buena una primera respuesta.

## 4. En tareas de edición, pide cambios quirúrgicos, no reescrituras completas

Si usas Claude Code o cualquier flujo donde la IA edita archivos (código, pero también documentos largos), Anthropic señala que Fable 5.1 tiende a reescribir el archivo entero para cambios pequeños, lo que cuesta más tiempo y tokens sin cambiar el resultado final.

Pedirle explícitamente que edite de forma quirúrgica, tocando solo lo necesario, evita ese sobrecoste. Es un ajuste técnico, pero si trabajas con documentos largos o plantillas que iteras muchas veces, notarás la diferencia en velocidad.

## 5. Para tareas largas, dile que complete todo antes de parar

El último punto es el que más cambia la forma de trabajar con la IA en tareas complejas y de varios pasos. Por defecto, Claude puede detenerse a mitad de una tarea larga para preguntar "¿sigo con esto?" o describir el siguiente paso en vez de ejecutarlo directamente, algo útil si estás supervisando en tiempo real, pero un freno si le has pedido que resuelva algo de principio a fin.

La instrucción de Anthropic es dejarle claro que nadie va a responder en mitad de la tarea, que actúe con autonomía sobre lo que ya se le ha pedido, y que solo se detenga para acciones irreversibles o cambios reales de alcance. Aplicado a SEO, esto es oro para auditorías largas o análisis de varios pasos: le pides el trabajo completo una vez, no una serie de "¿continúo?" que hay que ir aprobando.

## Un dato que vale la pena recordar

Anthropic afirma que, en el nivel de esfuerzo más bajo (el más barato y rápido), Fable 5.1 iguala o supera a modelos como Opus o Sonnet en varias pruebas, a un coste menor. Si tienes la costumbre de subir siempre al nivel de esfuerzo más alto "por si acaso", merece la pena probar primero el más bajo con estas instrucciones aplicadas: puede que te sobre con eso.

## Mi conclusión

No hace falta ser desarrollador para sacar partido a esto. Lo interesante de que estas recomendaciones vengan directamente de quien construye el modelo es que no son trucos de foro, son el propio fabricante diciéndote qué comportamientos por defecto puedes ajustar y cómo. Si usas Claude a diario para investigar, redactar o analizar datos de SEO, prueba estas cinco instrucciones antes de asumir que "así responde la IA y ya está": casi siempre hay un ajuste de prompt detrás de la respuesta que no te convence.
