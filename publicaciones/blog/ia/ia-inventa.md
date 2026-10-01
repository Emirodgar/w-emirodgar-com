---
title: Por qué la IA se inventa cosas (alucinaciones) y cómo evitarlo
description: Por qué ChatGPT y otros modelos de IA generan información falsa con total seguridad, qué dice la investigación de OpenAI y cómo reducir las alucinaciones al usarlos.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 30-09-2025
date_modified: 01-10-2026
folder: ia
permalink: por-que-la-ia-se-inventa-cosas-y-como-puede-evitarse
---

ChatGPT y otros modelos de inteligencia artificial generan a veces respuestas falsas pero muy convincentes. La causa está en cómo se entrenan y, sobre todo, en cómo se evalúan. Y aunque no se puede eliminar del todo, sí se puede reducir bastante.

Los sistemas de IA se han convertido en herramientas cotidianas, pero también en generadores de confusión. Uno de sus fallos más conocidos es que **a veces se inventan información**: responden con total seguridad, aunque lo que dicen sea incorrecto. A esto se le llama **alucinación**.

Lo curioso es que ocurre incluso con preguntas sencillas. Entonces, **¿por qué la IA se lo inventa?**

## ¿Por qué los modelos de IA inventan información?

La causa no es un fallo técnico misterioso, sino **la forma en que se entrenan y evalúan estos modelos**. Es la tesis de la investigación de OpenAI [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/), publicada en septiembre de 2025.

La mayoría de evaluaciones funcionan como un examen tipo test en el que **no se penalizan los errores**. Solo cuenta el porcentaje de aciertos. Eso crea un incentivo claro: **arriesgarse a responder**, porque podría ser correcto, es mejor que admitir que no se sabe, que siempre suma cero.

En la práctica, la IA aprende a apostar y a conjeturar. Por eso vemos respuestas que suenan bien aunque no sean reales.

## El origen técnico: predecir la siguiente palabra

El entrenamiento base de un modelo de lenguaje consiste en **predecir la siguiente palabra**. Eso lo convierte en un experto en generar texto coherente (gramática impecable, frases bien construidas), pero no en memorizar datos concretos o poco frecuentes.

Con hechos que aparecen mil veces en internet, acierta. Con datos raros, como la fecha de nacimiento de una persona poco conocida, no hay patrón que seguir. El resultado es una respuesta que **suena plausible**, pero está inventada.

## Modelos antiguos y modelos nuevos: un ejemplo con datos

OpenAI comparó dos modelos en SimpleQA, un test de preguntas factuales cortas:

| | gpt-5-thinking-mini | o4-mini |
|---|---|---|
| Se abstiene (no responde) | 52 % | 1 % |
| Acierta | 22 % | 24 % |
| Se equivoca | 26 % | 75 % |

Según la propia OpenAI, el modelo antiguo acierta un poco más, pero solo porque responde casi siempre. El precio es **tres veces más errores inventados**. El modelo nuevo prefiere decir "no lo sé" antes que arriesgarse.

Por eso un ranking basado solo en aciertos premia al modelo que más adivina, aunque sea el menos fiable.

## ¿Se pueden eliminar las alucinaciones?

No del todo. Algunas preguntas no tienen respuesta posible (datos que el modelo nunca vio, información privada o inexistente), y ahí lo correcto es abstenerse. Pero sí **se pueden reducir mucho** con dos cambios:

1. **En la evaluación:** penalizar más los errores seguros que las abstenciones, y dar crédito parcial a expresar incertidumbre.
2. **En el diseño del sistema:** no depender solo de la memoria del modelo, sino conectarlo a fuentes fiables.

La IA no miente porque quiera, sino porque el sistema actual le recompensa más por adivinar que por callar. La clave está en **evaluaciones que premien la honestidad del "no lo sé"**.

## Cómo reducir las alucinaciones cuando usas IA

Mientras los modelos mejoran, tú también puedes hacer bastante:

- **Activa la búsqueda web o aporta tus propias fuentes.** Un modelo que responde con documentos delante inventa mucho menos que uno que responde de memoria. Es la idea detrás de la técnica RAG (generación aumentada con recuperación).
- **Permite el "no lo sé".** Añade al prompt algo como: *"Si no estás seguro, dímelo en lugar de suponer"*. Funciona porque cambia el incentivo que el modelo ha aprendido.
- **Pide fuentes y compruébalas.** Los enlaces o citas que genera un modelo también pueden estar inventados. Abre cada uno.
- **Desconfía de los datos concretos.** Cifras, fechas, nombres propios, citas textuales y sentencias o leyes son los terrenos donde más se falla.
- **Haz preguntas acotadas.** Cuanto más específico es el contexto que das, menos espacio queda para rellenar huecos. Tienes más ideas en [cómo sacar más partido a ChatGPT con ingeniería de prompts](https://emirodgar.com/como-sacar-mas-partido-a-chatgpt-con-ingenieria-de-prompts).
- **Verifica lo importante con una segunda fuente**, sobre todo en salud, dinero o temas legales.

## Preguntas frecuentes

### ¿Qué es una alucinación en IA?
Es una respuesta que suena plausible y segura pero es falsa o no está respaldada por ninguna fuente.

### ¿Por qué ChatGPT se inventa fuentes y enlaces?
Porque genera texto que *parece* una cita, no la recupera de una base de datos. Si no tiene acceso a búsqueda, puede componer un título, un autor y una URL verosímiles que no existen.

### ¿Los modelos más nuevos alucinan menos?
En general sí, sobre todo los entrenados para abstenerse cuando no están seguros, como muestra la comparación anterior. Pero ninguno está libre de errores.

### ¿Cómo sé si una respuesta de IA es fiable?
Contrasta los datos concretos con una fuente primaria, pide la fuente y ábrela. Si el modelo no puede indicarla, trata la respuesta como una hipótesis.

## Más sobre la fiabilidad de los modelos

Y no es el único reto de fiabilidad: el caso de [Grok y su (falta de) neutralidad](https://emirodgar.com/grok-ia-neutralidad-elon-musk) demuestra que las respuestas de un LLM también pueden estar moldeadas por decisiones humanas, no solo por errores de entrenamiento. De hecho, [quién y cómo entrena realmente a Gemini](https://emirodgar.com/entrenamiento-google-gemini), desde los *raters* que lo evalúan hasta las decisiones de diseño de sus propios ingenieros, explica buena parte de por qué estos modelos aciertan o fallan como lo hacen.
