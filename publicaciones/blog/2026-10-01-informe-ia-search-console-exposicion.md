---
title: Cómo sacar partido al informe de IA generativa de Search Console
description: El informe de IA generativa de Search Console solo da impresiones, pero cruzado con tráfico y negocio permite medir cuánta exposición tienes. Te cuento el método de Harry Clarkson-Bennett, qué le añado y cómo encaja con mi dashboard.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 01-10-2026
folder: geo
permalink: informe-ia-generativa-search-console

---

Google ya enseña en Search Console cuántas veces aparece tu contenido en sus funciones de IA generativa (AI Overviews y Modo IA). Era lo que llevábamos tiempo pidiendo y, al abrirlo, la reacción habitual es de decepción: no hay clics y tampoco hay consultas.

[Harry Clarkson-Bennett](https://www.searchenginejournal.com/author/harry-clarkson-bennett/), que trabaja SEO en un medio, publicó esta semana en Search Engine Journal un método para convertir ese informe en algo que se pueda llevar a una reunión de negocio. Lo cuento a mi manera, con lo que creo que funciona, lo que matizo y cómo lo he visto en medios.

## Qué te da el informe (y qué no)

El informe da **visibilidad** y nada más. Cuenta impresiones, y según John Mueller, un enlace mostrado directamente cuenta aunque nadie lo pulse, mientras que uno que requiere activación cuenta solo cuando se activa. Es decir, una impresión no es una lectura ni un clic perdido.

Lo que no tienes:

- Clics, así que no sabes cuántas visitas te ha quitado o te ha dado la IA.
- Consultas, así que no sabes con qué búsquedas apareces.
- Valor de negocio, que es lo que le importa a quien paga.

Aun así, para el autor es útil porque es dato de primera mano de la interfaz de IA más usada del mundo. Eso sí, hay que cruzarlo con más cosas.

Y hay otra razón para abrirlo con cierta frecuencia. Como el informe solo te da impresiones, una caída es casi la única señal de que algo ha cambiado: puede ser algo de tu web, del rastreo o de cómo Google muestra la IA, y el informe no te dirá cuál. Así se ve una caída de impresiones en el informe de IA generativa:

![Caída brusca de impresiones en el informe de IA generativa de Search Console en los últimos días del gráfico](https://emirodgar.com/cdn/images/posts/search-console-caida-informe-ia-generativa.png){:class="img-responsive"}

Si no revisas tus datos cada cierto tiempo, te enteras tarde de problemas que han podido ocurrir sin que lo supieras. Revisarlo de forma periódica, por ejemplo cada semana, te permite empezar a investigar cuando la caída tiene días y no meses.

## El método: de la visibilidad a la exposición comercial

La idea es calcular una puntuación de 0 a 100 por cada sección de la web (subcarpeta) combinando cuatro datos:

1. **Visibilidad (V):** impresiones de IA por sección, a partir de la exportación de páginas del informe. Ojo: la exportación se corta en 1.000 filas, así que en webs grandes es una muestra. Conviene comprobar qué parte del total representa.
2. **Sustitución (S), opcional:** qué porcentaje de tus consultas importantes activa una AI Overview. No dice que se haya perdido un clic, solo que estás expuesto.
3. **Dependencia de tráfico (T):** qué parte de las sesiones de esa sección viene de búsqueda orgánica.
4. **Valor comercial (C):** cuánto negocio genera esa sección. Una sola métrica (ingresos, suscripciones, leads) y la misma para todas.

La fórmula es una media geométrica: `(V × S × T × C)^(1/4)`, o `(V × T × C)^(1/3)` si no tienes datos de sustitución. Si no los tienes, no pongas un cero, déjalo en blanco, porque un cero significa que mediste y no encontraste nada.

Lo bueno de la media geométrica es que una sección con mucha visibilidad pero poco negocio no sale con una exposición alta, y al revés. En su ejemplo, Negocios tiene mucha visibilidad y más ingresos, Tecnología tiene visibilidad parecida y bastantes menos ingresos, y Deportes tiene poca visibilidad pero una parte importante de los ingresos.

### Exposición no es riesgo

Dos secciones con la misma exposición pueden tener un riesgo muy distinto. Para acercarse al riesgo propone una puntuación de **resiliencia**: la media de cuatro datos.

- **Búsquedas de marca:** qué parte de la demanda orgánica es por tu marca.
- **Audiencia directa:** cuánto tráfico llega sin intermediarios.
- **Audiencia recurrente:** cuánta gente vuelve.
- **Defendibilidad del contenido:** lo difícil que es copiar o sustituir tu contenido, puntuado de 0 a 100 con criterio propio (unicidad, esfuerzo, experiencia, información propia).

Cuanto más alta, mejor protegida está esa sección frente a la intermediación de la IA.

### Los logs del servidor como señal de demanda

Como extra, propone analizar los logs del servidor para ver qué rastreadores de IA acceden a qué secciones y cada cuánto. Lo más útil es separarlos por función: bots de entrenamiento, de búsqueda y de recuperación. Una advertencia que comparto: los logs prueban el acceso, no el uso. Que un bot de entrenamiento pida una URL no demuestra que ese contenido se haya usado para entrenar un modelo.

Cruzado con el valor del contenido, esto sirve para ver dónde la IA es una amenaza y dónde puede haber una oportunidad, por ejemplo de licenciar contenido. Eso enlaza con lo que contaba sobre [el programa con el que Google empieza a pagar a los editores](https://emirodgar.com/google-paga-editores-ia), y con [cómo monetizar la visibilidad de tu contenido en IA](https://emirodgar.com/monetizar-visibilidad-ia). Y con los logs a la vista, decidir qué bloquear es más fácil: yo ya expliqué [cómo segmento qué bots bloquear](https://emirodgar.com/segmentar-bloqueo-bots) y [cómo bloquear el rastreador de las IA](https://emirodgar.com/bloquear-rastreador-ia). Si quieres saber qué leen, tienes [qué leen los bots de la IA](https://emirodgar.com/que-leen-los-bots-de-la-ia).

## Lo que he visto en medios

El método está pensado desde un medio y es donde mejor se entiende. Llevo años trabajando SEO en periódicos y medios digitales, y hay dos cosas que se repiten:

- **La dependencia de Google es enorme y desigual.** En [el periódico nuevo con Angular que recojo en mis casos de éxito](https://emirodgar.com/casos-exito-seo#periodico-angular), Google News y Discover llegaron a ser la principal fuente de captación, con días de más de 300.000 clics orgánicos. Cuando un medio depende tanto de un solo canal, la variable T de la fórmula pesa mucho, y una sección dependiente de Discover no se parece a una con lectores que vuelven. Sobre cómo se comporta ese canal, tienes [cómo conseguir visibilidad en Google Discover](https://emirodgar.com/google-discover-visibilidad).
- **Las secciones no valen lo mismo.** No es lo mismo el tráfico de actualidad que el de las secciones que generan suscripciones o ingresos publicitarios altos. Por eso me gusta la idea de poner el mismo KPI en todas, porque obliga a salir del "mucho tráfico" y mirar cuánto aporta cada parte. Lo de la defendibilidad lo veo con claridad en medios: la información propia y la cobertura local son mucho más difíciles de sustituir con una respuesta de IA que una nota genérica de agencia.

Esto también conecta con [qué significan las AI Overviews para editores y marcas](https://emirodgar.com/ai-overviews-google-publishers): el tráfico que pierdes no se reparte por igual entre todas las secciones.

## Cómo encaja con mi dashboard

En mi newsletter, [Chuleta SEO](https://newsletter.chuletaseo.com/p/dashboard-seo-gratuito), tienes un dashboard SEO gratuito en Looker Studio que trabaja con datos de Search Console y de Google Analytics 4. Tiene un bloque de **Inteligencia Artificial** que mide el tráfico que llega desde plataformas de LLM y las búsquedas informacionales que pueden estar canibalizadas por las AI Overviews, además de un análisis de contenidos por clústeres o secciones.

Con la metodología de Clarkson-Bennett encaja en varias piezas:

- **La dependencia de tráfico (T):** el dashboard ya separa los canales, así que sacar el porcentaje de sesiones orgánicas por sección es directo.
- **Las secciones:** el análisis de contenidos por clústeres sirve para el mismo trabajo que las subcarpetas.
- **La sustitución (S):** el bloque de búsquedas informacionales potencialmente canibalizadas es una aproximación a esa variable.
- **El tráfico de IA:** te dice cuánto te llega ya desde asistentes, que es una forma de medir el lado positivo.

Dos aclaraciones para no vender más de lo que hay. El dashboard no incluye el informe de IA generativa de Search Console, así que las impresiones de IA tienes que sacarlas aparte. Y su bloque de IA se basa en datos de Search Console y GA4, no en logs del servidor. Para eso necesitas otra fuente. Lo que te da es la mitad del camino con datos que ya tienes a mano.

Para el resto de problemas de datos entre ambas herramientas, recuerda [por qué GA4 y Search Console nunca coinciden](https://emirodgar.com/datos-gsc-ga4). Y si estás empezando con el tráfico de IA, mi post de [SEO para IA](https://emirodgar.com/seo-inteligencia-artificial) explica cómo medirlo.

## Mi opinión: es un modelo, no una medida

Con el método hay que ser prudente:

- **Es una puntuación construida, no un dato.** Normalizar, multiplicar y sacar una raíz da un número cómodo, pero los pesos son una decisión del autor y la fórmula no está validada. Úsala para comparar secciones entre sí, no para presentar una cifra absoluta de riesgo.
- **Depende de la muestra.** Con el límite de 1.000 filas y sin datos de clics, el resultado en webs grandes puede cambiar bastante según lo que quede fuera.
- **La defendibilidad es subjetiva.** Dos personas puntuarán distinto la misma sección. Conviene fijar los criterios antes y que los puntúe más de una persona.
- **Los logs no prueban el uso.** Vale como señal de demanda, no como prueba.

Dicho esto, creo que la idea de fondo es acertada. Un informe de visibilidad no sirve para tomar decisiones hasta que lo cruzas con negocio, y casi nadie lo hace. Es la misma lógica de [medir con datos propios](https://emirodgar.com/predicciones-seo-2027) y de [probar con hipótesis](https://emirodgar.com/geo-empieza-a-probar), no de fiarse del número que te da la herramienta de turno.

Si lo pruebas, empieza por lo simple: exporta las páginas, agrúpalas por sección, añade una sola métrica de negocio y compara. Con eso ya sabes qué parte de tu web merece que le dediques más tiempo.
