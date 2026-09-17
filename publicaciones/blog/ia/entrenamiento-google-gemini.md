---
title: El secreto de Google Gemini y los humanos que entrenan a la IA
description: Descubre la historia de los miles de 'raters' humanos, a menudo sobrecargados y mal pagados, que trabajan en la sombra para entrenar y moderar la IA de Google. Además, lo que su propio arquitecto admite sobre cómo se diseñó realmente el modelo.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 19-09-2025
date_modified: 17/09/2026
folder: ia
permalink: entrenamiento-google-gemini
---

Cada vez que interactuamos con una inteligencia artificial como Gemini, solemos ver un pequeño icono de una chispa o una estrella, vendiéndonos la idea de que estamos ante una especie de "magia tecnológica". Pero, ¿y si te dijera que detrás de esa fachada brillante hay un ejército de miles de personas **sobrecargadas de trabajo y mal pagadas**?

La realidad es que la inteligencia artificial no es mágica. Está siendo construida y refinada cada día por una fuerza laboral humana oculta que corrige sus errores, la entrena y, lo más importante, modera su contenido para que sea seguro para nosotros. Hoy vamos a asomarnos a la trastienda de Google para conocer quiénes son y cómo trabajan. Y en [este artículo de The Guardian](https://www.theguardian.com/technology/2025/sep/11/google-gemini-ai-training-humans) lo detallan muy bien. Os explico lo que me ha parecido más interesante.


## ¿Quiénes son realmente los entrenadores de la IA de Google?

Lejos de ser un proceso automatizado, el refinamiento de los modelos de IA de Google depende de miles de "raters" (evaluadores) humanos. Estas personas no son empleadas directas de Google, sino que trabajan a través de subcontratas como la multinacional japonesa GlobalLogic.

Y no hablamos de mano de obra no cualificada. Muchos de estos trabajadores son **escritores, profesores, licenciados e incluso doctores en campos muy específicos**. Son personas con una gran formación cuyo trabajo consiste en evaluar y corregir las respuestas de la IA para enseñarle a "pensar" y a responder correctamente.

A pesar de su contribución esencial, muchos se sienten parte de lo que una investigadora del Distributed AI Research Institute describe como un **"esquema piramidal de trabajo humano"**: invisibles, esenciales y, en última instancia, prescindibles.



## ¿Cómo es un día de trabajo para un 'rater' de IA?

El trabajo de un evaluador consiste en revisar las respuestas que da la IA a todo tipo de preguntas. Deben comprobar si la información es correcta, si las fuentes son fiables y si el contenido es seguro. Sin embargo, lo que podría parecer un trabajo de control de calidad se convierte a menudo en una carrera contrarreloj.

Los testimonios de varios trabajadores revelan una dinámica de trabajo asfixiante:

* **Plazos imposibles**: Tareas que antes requerían 30 minutos ahora deben completarse en 15, lo que obliga a leer, verificar y evaluar textos de 500 palabras o más a toda prisa.
* **Exposición a contenido extremo**: Algunos evaluadores se ven obligados a revisar material violento o sexualmente explícito generado por la IA **sin ningún tipo de aviso previo, consentimiento o apoyo psicológico** por parte de la empresa.
* **Presión por la cantidad, no la calidad**: Con el tiempo, la directriz cambia de "hazlo bien" a "hazlo rápido". Un trabajador confesó que sus superiores le pidieron que se centrara en "cumplir con los números" y no se preocupara tanto por lo que estaba "publicando ahí fuera".

Esta presión constante no solo genera ansiedad y ataques de pánico en los trabajadores, sino que siembra una duda razonable sobre la fiabilidad final del producto.

## ¿Está la velocidad comprometiendo la calidad y la seguridad?

Todo apunta a que sí. Cuando los plazos priman sobre la precisión, la calidad se resiente. Un trabajador llegó a advertir al Congreso de EE. UU. que el ritmo impuesto haría del predecesor de Gemini un producto **"defectuoso" y "peligroso"**.

No es de extrañar entonces que ocurrieran fiascos públicos como los de AI Overviews, que llegó a sugerir a los usuarios **poner pegamento en la pizza para que el queso no se cayera** o que era saludable comer rocas. Para los trabajadores que veían las "locuras" que el modelo generaba internamente, estos errores públicos no fueron ninguna sorpresa.


## ¿Se están relajando las normas de seguridad?

Quizás el punto más alarmante es el aparente cambio en las políticas de seguridad. Según los testimonios y documentos, las barreras de protección se han ido relajando.

Un ejemplo flagrante es el tratamiento de los discursos de odio. Antes, la IA tenía terminantemente prohibido usar insultos raciales. Ahora, la norma parece haber cambiado: si el usuario utiliza un insulto, **el modelo de IA puede repetirlo**. Ya no puede generarlo por sí mismo, pero sí replicar discursos de acoso, sexismo o estereotipos si el usuario los introduce primero.

Este cambio, por sutil que parezca, es un paso atrás enorme en la promesa de una IA segura y ética. Como afirma un investigador, "la promesa de seguridad de la IA se derrumba en el momento en que la seguridad amenaza el beneficio".

## ¿Y qué dice el hombre que diseñó Gemini?

Frente al relato de los 'raters' desde dentro, resulta revelador escuchar la otra cara de la moneda: la de quien decidió cómo debía ser Gemini desde el principio. Jeff Dean, uno de los ingenieros más veteranos de Google y actual científico jefe de Google DeepMind, ha explicado recientemente en una entrevista recogida por [Search Engine Journal](https://www.searchenginejournal.com/ex-googler-jeff-dean-explains-what-users-should-understand-about-gemini/589593/) cómo se gestó realmente el modelo. Y su relato desmonta, otra vez, la idea de que Gemini nació de un plan maestro.

Según Dean, el proyecto surgió de **fusionar varios equipos** que, de forma paralela dentro de Google Brain y DeepMind, ya perseguían objetivos muy parecidos, y que acabaron uniendo fuerzas bajo un mismo nombre en lugar de competir entre sí.

### La apuesta por ser multimodal desde el primer día

Uno de los puntos que más destaca Dean es que Gemini nunca se planteó como un modelo "de texto" al que después se le añadieron otras capacidades. Se construyó desde el origen para entender texto, imágenes, audio y vídeo a la vez. En sus propias palabras, "queríamos que el modelo fuera bueno en muchas cosas", incluso cuando eso significó renunciar a resultados más pulidos en tareas concretas a corto plazo, como ocurrió al principio con la programación.

### Un efecto secundario que nadie esperaba

Aquí llega el dato más interesante para cualquiera que siga de cerca la evolución de estos modelos: al centrar buena parte de los esfuerzos de ingeniería en mejorar la capacidad de programación de Gemini, el equipo descubrió que esa mejora se "contagiaba" también al razonamiento general del modelo. Dean lo resume así: enfocarse en la programación termina generando "un sistema capaz de razonar y de hacer bien otro tipo de tareas".

Es decir, ni siquiera dentro de Google tenían controlado de antemano qué capacidades se reforzarían entre sí. Buena parte del avance ha sido, literalmente, un hallazgo por el camino, no una hoja de ruta cerrada.

### "Es mejor hojear 10 papers que leer uno a fondo"

Preguntado por cómo distingue una tecnología con futuro de una simple moda pasajera, Dean fue igual de honesto: no existe una fórmula mágica. Su método consiste en **leer en diagonal** la mayor cantidad posible de investigación (prefiere hojear diez artículos que estudiar uno a fondo) para detectar conexiones entre ideas que, por separado, parecen menores, y aceptar que muchas de esas apuestas simplemente no funcionarán.

Dicho de otro modo: detrás de la marca "Gemini" hay un proceso de prueba, error y fusión de equipos bastante más parecido al de cualquier proyecto de ingeniería complejo que a la narrativa de innovación infalible que suele acompañar a estos lanzamientos.

## La paradoja de la IA

La conclusión es tan simple como preocupante. La inteligencia artificial que muchos ven como el futuro se está construyendo sobre un presente de condiciones laborales precarias, y ni siquiera sus propios creadores siguieron un guion tan cerrado como parece desde fuera.

La mayor paradoja es que muchos de estos trabajadores, las personas que mejor conocen las tripas del sistema, **han perdido la confianza en la tecnología que ayudan a construir**. La mayoría afirma que evita usar las herramientas de IA en su vida personal y desaconseja su uso a familiares y amigos.

Como dijo una de las trabajadoras, Rachael Sawyer: "Solo quiero que la gente sepa que la IA se vende como magia tecnológica. Pero no lo es. **Está construida sobre las espaldas de seres humanos mal pagados y con exceso de trabajo**."

Esta precariedad en el entrenamiento explica en parte [por qué la IA de Google todavía comete errores básicos](https://emirodgar.com/ia-google) con datos desactualizados o inconsistentes. Y ahora sabemos, por boca de quien ayudó a diseñarlo, que la precariedad humana no es el único ingrediente improvisado: tampoco las capacidades técnicas del modelo siguieron un guion cerrado desde el principio.
