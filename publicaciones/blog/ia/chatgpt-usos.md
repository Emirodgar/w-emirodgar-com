---
title: Cómo sacar más partido a ChatGPT con ingeniería de prompts
description: Técnicas prácticas y plantillas para escribir prompts claros que consiguen mejores respuestas de ChatGPT.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 29-09-2025
folder: ia
permalink: como-sacar-mas-partido-a-chatgpt-con-ingenieria-de-prompts/
---

## ¿Qué es la ingeniería de prompts?
La ingeniería de prompts es simplemente el arte de escribir instrucciones claras para modelos como ChatGPT. No es magia: se trata de dar contexto, definir el formato deseado y guiar el tono y el nivel de detalle. Con buenos prompts obtendrás respuestas más útiles, rápidas y aprovechables.

## ¿Por qué importa dar instrucciones precisas?
Porque ChatGPT intenta cumplir lo que le pides. Si la petición es ambigua recibirás una respuesta genérica. Cuanto más concreto seas, mejor resultado tendrás: menos vuelta atrás, menos edición y más productividad.

## ¿Cómo funcionan los ejemplos y por qué usarlos?
Dar ejemplos significa mostrar cómo quieres que se responda. En vez de preguntar algo abierto, le das el formato esperado con un par de casos.

**Ventajas:**
* El modelo entiende el formato y no solo el contenido.
* Sirve para extracción de datos, conversiones o resúmenes con plantilla fija.
* No hace falta que los ejemplos sean perfectos; lo importante es el formato.

**Ejemplo práctico (plantilla):**
> Extrae los códigos IATA de los aeropuertos. Responde solo con los códigos, separados por comas.
>
> **Ejemplos:**
> - "Vuelo Madrid (MAD) a Barcelona (BCN)" -> MAD, BCN
> - "Salida desde Málaga (AGP)" -> AGP
>
> **Ahora extrae de:** "Llegué a Bilbao (BIO) y luego volé a Palma (PMI)"


## ¿Cómo funciona asignar un rol y cuándo usarlo?
Pedirle al modelo que actúe como alguien cambia el tono y el enfoque. Por ejemplo, antes de una simulación de entrevista puedes decir “Actúa como director de recursos humanos” o, en temas SEO, "Actúa como consultor SEO con 10 años de experiencia".

**Cuándo usarlo:** cuando necesites un punto de vista profesional, estilo concreto o una estructura típica de un rol (por ejemplo: auditor, jurista, profesor).


## ¿Cómo añadir personalidad y conocimiento previo?
Si quieres texto menos genérico, añade adjetivos y contexto: “responde de forma ingeniosa y directa” o “imagina que hablas a un público sin conocimientos técnicos”. También puedes darle conocimiento previo (datos, métricas o supuestos) que use para generar la respuesta.

**Ejemplo:**
> Actúa como profesor de 2º de ESO. Explica en 3 líneas qué es el SEO y pon un ejemplo práctico.


## ¿Qué significa pedir primero datos y luego el texto final?
Una estrategia muy eficiente es dividir la tarea en dos pasos:
1.  Pedir datos o ideas (listas, esquemas, puntos clave).
2.  Usar esos datos para pedir el texto definitivo (artículo, email, tweet).

Esto evita respuestas vagas y permite refinar antes de redactar. Además, te da control sobre la estructura y el nivel de detalle.

**Ejemplo de flujo:**
> “Dame 5 titulares posibles para un artículo sobre SEO local.”
>
> “Escribe el artículo a partir del titular 3, manteniendo un tono directo y con subtítulos.”

## ¿Por qué pedir razonamiento paso a paso y qué limites tiene?
Pedir razonamiento paso a paso ayuda en problemas complejos (lógica, planificaciones, cálculos). Pedirle que explique su proceso suele mejorar la calidad final porque obliga al modelo a estructurar la respuesta.

**Advertencia práctica:** no siempre necesitas (ni quieres) una explicación larga. Para entregables directos (emails, textos comerciales) pide solo el resultado. Usa razonamiento paso a paso cuando necesites verificar la lógica o entender cómo se ha llegado a una conclusión.


## ¿Cómo combinar las técnicas en plantillas rápidas?
Aquí tienes plantillas que puedes copiar y adaptar:

**1. Extracción estructurada**
> **Tarea:** extraer \[X] de este texto.
> **Formato de salida:** JSON con campos `{nombre, código, ciudad}`.
> **Ejemplos:**
> - "..." -> `{...}`
> **Texto:** "\[pega aquí]"

**2. Reescritura con estilo**
> Actúa como redactor profesional. Reescribe este texto para que suene más directo y amigable, máximo 200 palabras:
> \[texto original]

**3. Generación + redacción (dos pasos)**
> **Paso 1:** Dame 8 ideas de contenido sobre \[tema], con 1 línea de descripción cada una.
> **Paso 2:** Redacta el post para la idea número 2; longitud 500–700 palabras, tono cercano.

**4. Simulación de rol con detalles**
> Actúa como \[rol] con X años de experiencia. Dime 5 recomendaciones prácticas para \[problema] y explica brevemente cada una.


## ¿Qué errores comunes debo evitar?
* **Pedir algo demasiado abierto.** (“Háblame del SEO” → respuesta genérica).
* **No definir formato.** Si quieres una lista, pídela.
* **Pedir respuestas contradictorias.** Evita dar instrucciones opuestas.
* **No aprovechar el paso a paso.** Pedir el resultado final sin estructurar suele obligar a rehacerlo.


## ¿Cómo medir si un prompt funciona?
Haz una prueba rápida:
* Si la respuesta necesita más de dos correcciones para ser útil, ajusta el prompt.
* Si la estructura está bien pero falta tono, añade indicaciones de estilo.
* Si faltan datos, pide primero un esquema o preguntas necesarias.


## ¿Por dónde empezar si nunca has escrito prompts?
1.  Define qué quieres (entregable claro).
2.  Indica formato (lista, JSON, titular, artículo).
3.  Añade rol y tono si lo necesitas.
4.  Pide un ejemplo o un esquema antes del texto final.
5.  Repite y ajusta: mejora el prompt con lo aprendido.


## Conclusión: ¿qué debes recordar?
* **Sé claro:** formato, rol y tono importan.
* **Divide tareas:** primero datos, luego redacción.
* **Usa ejemplos** para fijar el formato (no hace falta que sean perfectos).
* **Pide razonamiento** cuando la lógica sea esencial.

Si quieres plantillas específicas para trabajar contenido o auditorías rápidas, puedo prepararte una colección práctica. Y si prefieres, te las puedo entregar adaptadas a un caso real (por ejemplo, una pieza para tu web o una idea de tuit). También puedes conocer más sobre mí en la [página de Emilio](/emilio-rodriguez).

### Checklist rápido
- [ ] ¿He dicho qué quiero exactamente?
- [ ] ¿He definido formato y longitud?
- [ ] ¿He puesto un rol o estilo si hace falta?
- [ ] ¿He pedido primero esquema/datos cuando el tema es complejo?

¡Listo! Empieza por una plantilla simple, prueba y afina. Con unos pocos ajustes verás cómo mejoran las respuestas de ChatGPT.
