---
title: Cómo montar tu primer agente de IA para SEO con Claude (paso a paso)
description: Chris Hanna explica en el blog de Semrush cómo combinar Conectores y Skills de Claude para automatizar tareas de SEO. Te resumo el proceso paso a paso y mi lectura de cada fase.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 25-09-2026
folder: ia
permalink: agente-seo-claude

---

[Chris Hanna](https://www.semrush.com/blog/seo-ai-agent/) publicó en el blog de Semrush una guía muy práctica sobre cómo montar tu primer agente de IA para SEO. Me ha parecido de las mejores explicaciones que he leído sobre el tema porque no se queda en la teoría de "los agentes son el futuro": detalla el proceso real de combinar **Conectores** y **Skills** de Claude para automatizar tareas que, hoy, la mayoría seguimos haciendo a mano.

Antes de nada, una matización que comparto con Hanna: un agente de SEO no tiene por qué ser 100 % autónomo. De hecho, casi siempre vas a obtener mejores resultados si dejas un punto de aprobación humana en el proceso, sobre todo en tareas donde hay criterio editorial o riesgo de marca de por medio. Un agente sigue pudiendo alucinar, y el coste de ese error depende de la tarea.

## 1. Define un único workflow, bien acotado

Antes de construir nada, tienes que tener claro qué quieres que haga el agente. Hay muchas tareas donde un agente puede ayudarte: briefings de contenido, minería de datos de consultas, investigación de competencia, clustering de keywords, detección de contenido en decadencia, auditorías técnicas, enlazado interno a escala, reporting...

La recomendación de Hanna, con la que estoy totalmente de acuerdo, es empezar simple. Elige una única tarea repetible para tu primer agente. Es tentador querer automatizar un proceso completo de principio a fin, pero cuanto más largo y complejo es el workflow, más fácil es que un error en un paso intermedio arruine todo el resultado final.

## 2. Identifica inputs y outputs claros

Una vez acotada la tarea, define con precisión qué entra y qué sale en cada paso. Por ejemplo: usar un export de Search Console como input, generar un CSV como resultado intermedio y terminar con un documento Word como output final.

Esto no es un detalle menor. Un agente que no sabe exactamente qué formato de entrada va a recibir ni qué formato de salida se espera de él improvisa, y cuando un agente improvisa, el resultado deja de ser repetible. La repetibilidad es literalmente el motivo por el que estás montando un agente en vez de hacerlo a mano cada vez.

## 3. Conecta tus fuentes de datos vía MCP

Aquí es donde el proceso se vuelve realmente potente. Conectando distintas fuentes de datos, el agente puede investigar en varios pasos sobre plataformas donde normalmente tendrías que iniciar sesión tú mismo. En Claude, se hace desde "Conectores" > "Añadir conector" > "Explorar conectores".

Entre las opciones disponibles: Semrush MCP, Ahrefs, Google Analytics, Search Console, DataForSEO y varias más. Si no tienes claro qué es exactamente el MCP o cómo funciona por debajo, lo expliqué con detalle en [qué es el Protocolo de Contexto de Modelo (MCP)](https://emirodgar.com/que-es-mcp): en resumen, es el estándar que permite que Claude "hable" con esas herramientas externas sin que tengas que copiar y pegar datos entre pestañas.

Y si tu agente no va a usar un conector, sino que va a leer páginas directamente (por ejemplo, para analizar competencia), ten en cuenta que Claude ya no procesa esa página tal cual: primero pasa por un modelo intermedio que filtra qué es relevante. Lo cuento con detalle en [Claude ya no lee tu web directamente, primero la resume un modelo pequeño](https://emirodgar.com/claude-lee-tu-web-modelo-pequeno), y es algo a tener en cuenta al diseñar los prompts de tu Skill: cuanto más claro dejes qué necesitas extraer de cada página, menos depende el resultado de ese filtro intermedio.

## 4. Usa Skills en vez de repetir instrucciones

En un proceso agéntico vas a dar las mismas instrucciones una y otra vez. En lugar de escribirlas a mano cada vez, se usan las **Skills**: básicamente un procedimiento (un "SOP") que el agente sigue cada vez que lo invocas. Se crean desde "Personalizar" > "Skills" > "Añadir" > "Crear una Skill".

El truco que más me ha gustado de la guía original: en vez de escribir la Skill a mano desde cero, deja que Claude ejecute el proceso una primera vez y, cuando termine, pídele que convierta lo que acaba de hacer en una Skill reutilizable. Generar la Skill con la propia IA es mucho más rápido que documentarla tú a mano, y de paso te aseguras de que refleja lo que realmente funcionó, no lo que creías que iba a funcionar.

## 5. Añade ficheros de contexto relevantes

Antes de lanzar la Skill, dale contexto adicional. Hanna recomienda un "fichero de contexto de negocio" con información como productos clave, competidores, páginas importantes y reglas generales para la IA. Yo añadiría también las directrices de marca si el agente va a producir contenido que se publique tal cual, sin pasar por una revisión editorial completa.

Este paso conecta directamente con algo que ya comenté al hablar de [las técnicas de prompting que recomienda Anthropic para Claude](https://emirodgar.com/prompts-claude-anthropic): cuanto menos tenga que "adivinar" el modelo sobre tu negocio, menos probable es que rellene los huecos con información genérica o directamente inventada.

## 6. Ejecuta, revisa y refina

Con todo configurado, basta con invocar la Skill en Claude para que arranque el proceso. Revisa los resultados y ajusta el fichero de la Skill según lo que veas: qué se te ha quedado corto, qué instrucción ha entendido mal el modelo, qué paso conviene dividir en dos.

Esto es, en el fondo, la misma lógica de iteración que defiendo en [GEO deja de adivinar y empieza a probar](https://emirodgar.com/geo-empieza-a-probar): no esperes que la primera versión de tu agente sea la definitiva. Trátalo como un proceso que documentas, mides y mejoras con cada ejecución, no como una automatización que configuras una vez y olvidas.

## Mi conclusión

Lo que más valoro de este enfoque es que no requiere saber programar. Con Conectores y Skills, montar un agente de SEO se parece más a documentar bien un proceso que ya sabes hacer que a desarrollar software. Si trabajas con clientes o llevas varios proyectos a la vez, esta es exactamente el tipo de tarea repetible —briefings, minería de consultas, reporting— donde un agente bien acotado te devuelve horas a la semana sin que tengas que ceder el criterio final, porque sigues siendo tú quien revisa y aprueba lo que sale.
