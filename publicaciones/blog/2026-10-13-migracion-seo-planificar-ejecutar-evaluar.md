---
title: Migración SEO, cómo planificarla, ejecutarla y evaluarla sin perder tráfico
description: Una migración SEO sale mal por falta de planificación más que por problemas técnicos. Te cuento el método en tres fases de Aaron Taylor, con la redirección 301 como pieza central, y qué le añado desde mi experiencia.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 13-10-2026
date_modified: 16/10/2026
folder: seo
permalink: migracion-seo

---

Cuando se habla de una migración, es fácil ser optimista: rastreas la web actual, rastreas el entorno de pruebas, montas el mapa de URLs y monitorizas. Cuatro pasos. En la práctica pasa casi lo contrario: el contenido no se porta bien, el cliente no te deja entrar al entorno de pruebas y se hacen cambios hasta el último minuto, así que el mapa de URLs que te llevó una semana ya está desactualizado el día del lanzamiento.

Aaron Taylor publicó el 8 de octubre de 2026 la versión escrita de una charla en la que cuenta una migración empresarial que lideró este año: dos dominios de ecommerce y tres marcas fusionados en un dominio nuevo, con rediseño, nueva arquitectura de información y unificación de cuentas de Google Merchant Center. Lo cuento a mi manera, con lo que creo que es más útil y lo que añado de mi propia experiencia.

## Los cambios no se suman, se multiplican

El error de partida es pensar que el riesgo es aditivo: un cambio de arquitectura, uno de CMS, uno de dominio y uno de contenido suman cada uno su parte. Según Taylor se comportan más bien como una multiplicación, sobre todo el cambio de dominio, que toca todo lo demás.

Y el problema más grave es el diagnóstico. Si cambias todo a la vez y el tráfico cae, es casi imposible saber qué variable lo ha causado. Siempre que el negocio lo permita, escalona los cambios: primero la arquitectura, luego el diseño, luego el CMS y al final el dominio. Esto lo veo en la práctica cada vez que un cliente quiere "aprovechar y cambiarlo todo".

Los tipos de migración más habituales son el cambio de dominio, de HTTP a HTTPS (ya poco común), de CMS, el rediseño y la reconstrucción de la arquitectura de información, y en proyectos grandes casi nunca es solo uno.

## Fase 1: definir y planificar

Antes de tocar nada, hay que alinearse con el cliente sobre para qué sirve la migración:

- Qué se quiere conseguir y cómo se va a medir el éxito.
- Si hay prioridades que compiten entre sí. "Cambiarlo todo a la vez sin perder tráfico" es un clásico.
- **Quién decide al final si ha sido un éxito.** Si esa persona no está en la reunión inicial, trabajas hacia un objetivo que no has visto.

El plan debe responder a cuatro cosas:

1. **Roles y responsables**, con fechas.
2. **Referencias previas a la migración:** clics y datos orgánicos de Search Console y GA4, posiciones y cuota de visibilidad frente a competidores. Sin esto no podrás evaluar nada después.
3. **Plan de vuelta atrás.** Defínelo antes de necesitarlo para no decidir bajo presión. En el caso de Taylor, el cliente mantenía una copia activa de ambas webs antiguas para poder revertir las redirecciones.
4. **Lanzamiento y fases.** A ser posible en un periodo de poca venta y empezando por los mercados menos importantes, para aplicar lo aprendido a los prioritarios.

Una vez fijada la fecha de lanzamiento, calcula todos los entregables hacia atrás desde ella. Y algunos consejos que menciona: lanzar a principios de semana (de lunes a miércoles) para tener margen de arreglar lo que falle, llevar un único documento de seguimiento para no perder recomendaciones entre correos y mensajes, e implicarse pronto en las plantillas (el enlazado interno de categorías y las fichas de producto son mucho más fáciles de definir antes de construirlas).

## Fase 2: ejecución

La ejecución se reparte en tres elementos: la web actual, el entorno de pruebas y la capa que los une, el mapa de redirecciones.

### La web actual

Es tu punto de referencia y la fuente del mapa de redirecciones. Rastréala y guarda el rastreo para poder compararlo después (Taylor usa Screaming Frog en modo base de datos), conectando Search Console, GA4 y PageSpeed Insights. Extrae las URLs con más tráfico y más enlaces desde Search Console y Ahrefs, e incluye las no canónicas (variantes de producto o navegación por facetas) si tienen tráfico o backlinks.

### El entorno de pruebas

Aquí hay que revisarlo todo antes de que salga a producción:

- Consigue acceso y que tu IP esté autorizada. Si el `robots.txt` bloquea o hay `noindex`, anúlalos en el rastreador, o no obtendrás información.
- Compara el rastreo de pruebas con el de la web actual para detectar cambios de estructura, metadatos y enlaces.
- Prepara el `robots.txt` con el que lanzará la web nueva y pruébalo contra el rastreo de pruebas para no bloquear por error URLs importantes.
- Si da tiempo, audita el contenido: comprueba que se ha portado bien y decide, con los datos de la web actual, qué se redirige, qué se fusiona, qué se elimina y qué se refresca. **Lo que no llegue al lanzamiento va a una fase dos**, no retrasa la salida.

Un ejemplo que da: dos semanas antes del lanzamiento, el entorno de pruebas se rastreaba con más de 106.000 URLs, casi todas desperdicio de rastreo. Trabajando con el desarrollador lo redujeron a algo más de 10.500 sin perder ninguna página comercial.

### El mapa de redirecciones

Es lo que conecta el dominio antiguo con el nuevo, y lo que más cuidado exige:

- Recoge todas las URLs, no solo páginas: imágenes, PDF y cualquier recurso que aporte tráfico. Sirven un rastreo, los sitemaps XML o una exportación del CMS.
- Usa redirecciones 301 limpias, sin cadenas ni bucles, y cuida las mayúsculas y minúsculas para no generar 404.
- Redirige a páginas **semánticamente relacionadas**, no todo a la home. Y con precisión: un recambio no debe redirigir al producto al que pertenece.
- Las páginas sin valor ni tráfico pueden devolver un 410, y las finas relacionadas se pueden fusionar en una página principal.
- **Construye el mapa tarde.** Los clientes cambian cosas hasta el último momento. Pacta además un periodo de congelación en el que las URLs dejen de cambiar, para poder implementarlo bien.
- No olvides las imágenes: pueden traer mucho tráfico en algunos sectores. Mapea sus URL con 301 y actualiza las rutas en la biblioteca multimedia y la CDN.

## El día del lanzamiento

Reserva el día entero y reparte las tareas por adelantado entre SEO, desarrollador y cliente.

**SEO:**
- Rastrea la web en producción y comprueba `robots.txt`, `nofollow` y `noindex`, canonicales y hreflang. Hay webs que salen con las canonicales apuntando todavía al entorno de pruebas.
- Verifica que los enlaces internos apuntan al dominio nuevo y no al antiguo redirigido, y que el JavaScript se renderiza bien.
- Comprueba que Search Console, GA4 y Tag Manager funcionan.
- Revisa Search Console por si hay acciones manuales o solicitudes de eliminación heredadas.
- Anota la fecha de migración en GA4, Search Console y las demás herramientas.
- Prueba todas las redirecciones rastreando las URLs antiguas en modo lista contra tu mapa.
- Revisa en un móvil real y en distintos navegadores.

**Desarrollador:**
- Actualizar el DNS a la nueva IP y bajar temporalmente el TTL para que se refresque más rápido, revirtiéndolo unas horas después.
- Quitar los bloqueos: contraseña, `noindex` y el `robots.txt` del entorno de pruebas.
- Implementar todas las redirecciones, incluidos los 410.
- Dar de alta las propiedades de Search Console y Bing Webmaster Tools con sus sitemaps y enviar el cambio de dirección en Search Console (requiere ser propietario). Si el dominio tiene versión con www y sin www, **configura el cambio de dirección en las dos**. Es un matiz que Google ha añadido a su documentación y que John Mueller recomendó este mismo mes para que la migración se procese entera.
- Actualizar el sitemap XML para que solo liste URLs del dominio nuevo. Si sigue enviando las del antiguo, mandas señales de canonicalización contradictorias.

**Cliente:**
- Actualizar redes sociales, enlaces de Google Business Profile, directorios y URLs de destino de anuncios.
- Pedir a los backlinks más potentes que actualicen su enlace, para que no dependan de una redirección.
- Publicar un artículo anunciando el cambio.
- **Seguir renovando el dominio antiguo**, para conservar la autoridad de las redirecciones y evitar que alguien lo registre.

## Fase 3: evaluar

Cuando la web está en marcha, el trabajo pasa a ser vigilar y corregir pronto.

- Haz un informe comparado con tus referencias previas. Taylor usa Looker Studio con una fuente de datos que mezcla las propiedades antigua y nueva de Search Console, para ver el cruce en una sola vista, desglosado por dispositivo, país y tipo de contenido.
- Vigila la indexación. Divide el sitemap por secciones (productos, blog, categorías) y compara URLs enviadas e indexadas en cada una: así sabes qué sección se atasca. Si algo no se indexa, mira el lado técnico (canonicales, `noindex`, `robots.txt`) y el de calidad (contenido fino, duplicado o soft 404).
- Si el tráfico no se recupera, revisa por este orden: redirecciones (cadenas y bucles), indexación (errores 4xx y 5xx), renderizado de JavaScript y velocidad, y cambios en contenido, navegación y jerarquía de URLs.
- No des la migración por cerrada cuando el tráfico se recupere. Un propietario de una web contó en Reddit que, tras recuperar todo el tráfico en abril de 2026 con un cambio de dominio, cuatro meses después Google volvió a mostrar el dominio antiguo: las más de 5.000 páginas del nuevo pasaron a "Rastreada, actualmente no indexada" y sus impresiones cayeron de unas 5.000 diarias a 20 por semana. John Mueller respondió que a veces estos procesos tardan especialmente mucho, y que conviene tener el cambio de dirección en www y sin www. Roger Montti, en Search Engine Journal, recuerda que ante algo así conviene tratarlo como un problema de canonicalización: Google elige qué dominio indexa, y los enlaces externos que apuntan al antiguo pueden inclinar la balanza.

Otro caso que conviene tener presente es el que cuenta Marie Haynes: un blog migró a un dominio nuevo con todas las buenas prácticas (cambio de dirección, redirecciones, enlaces internos y sitemap) y cerca del 98 % de las URLs figuraban como no indexadas. Ni siquiera las que el informe daba por indexadas lo estaban al inspeccionarlas, y no había acción manual ni contenido duplicado. Google apuntaba a que la calidad de página debía ser suficiente para justificar la indexación, y el contenido, aunque correcto y completo, apenas aportaba nada original frente a otros sitios. Tras cuatro meses solo estaba indexada la página de inicio. Haynes aclara que no puede demostrarlo: su hipótesis es que la migración pudo disparar una evaluación de calidad más exigente que en el dominio antiguo. Si el problema no es técnico, su consejo es crear un grupo pequeño de contenidos realmente originales, con experiencia propia, y reescribir las páginas de mejor rendimiento con información que no exista en otro sitio. Es una teoría de un solo caso, pero añade una pregunta al diagnóstico: antes de culpar a las redirecciones, ¿merece este contenido ser indexado?

Para reducir ese riesgo, antes de migrar rastrea el dominio antiguo para detectar enlaces internos con URL absoluta que sigan apuntando a él (menús, footer o enlaces dentro del contenido). Y comprueba cómo se hace la redirección: una redirección a nivel de registrador puede no conservar la ruta de cada URL, y el reenvío HTTPS falla si el dominio antiguo no tiene certificado SSL.

Para los resultados, en su caso había previsto una caída del 30 % de tráfico los tres primeros meses. A los 60 días recuperaba el 75 % de los clics anteriores, y el 86 % si se compara con el mismo periodo del año pasado, que elimina el efecto de las campañas de temporada. Es un solo caso, de un ecommerce grande, pero sirve para tener en mente que **una caída temporal es normal y conviene pactarla con el cliente antes**.

## Cuando la migración suma más de lo esperado

Hasta aquí hemos hablado de migrar sin perder tráfico, pero una migración también puede ser la solución a un problema. Te cuento un caso propio.

Un cliente llegó a nosotros a principios de 2025 con una caída severa de tráfico. Tenía dos dominios independientes, el principal y uno secundario, y estuvimos meses peleando el repunte, incluida una recaída en marzo. Decidimos cortar por lo sano: **unificar el dominio secundario dentro del principal**. La migración se ejecutó en mayo de 2026.

![Gráfico de Sistrix con el índice de visibilidad de dos dominios de un mismo cliente: tras fusionar el secundario en el principal en mayo de 2026, el principal alcanza máximos históricos y el secundario cae a cero](https://emirodgar.com/cdn/images/posts/sistrix-fusion-dominios-visibilidad.png){:class="img-responsive"}

En el gráfico de Sistrix, la línea roja es el dominio principal y la azul el secundario. Tras la fusión, la azul cae a cero, como es lógico, y la roja sube hasta niveles de visibilidad que no se veían desde el máximo de principios de 2024. No fue 1+1=2: el principal superó lo que habían conseguido los dos dominios por separado.

Tres matices para leerlo con cabeza:

- **Es un solo caso y una correlación.** El principal ya venía subiendo antes de la migración, así que parte de la mejora es fruto del trabajo previo y de la evolución de Google. La fusión parece haber acelerado y consolidado esa subida, pero no puedo aislar su efecto.
- **No es una receta.** Que dos dominios compitan o se resten autoridad entre sí es una hipótesis, no una norma. Fusionar solo tiene sentido si hay motivos de negocio y SEO para hacerlo.
- **Se hizo con el método de este artículo:** referencias previas, mapa de redirecciones 301 y seguimiento posterior. Sin eso, la misma decisión habría podido salir mal.

La moraleja es que el SEO no es una ciencia exacta de manual. A veces conviene salirse de lo convencional, tener ideas creativas y atreverse a testear, siempre con un plan de vuelta atrás.

## Lo que añado

Una redirección 301 transfiere señales, pero no sustituye al contenido. En la [migración de ALD Automotive a Ayvens](https://emirodgar.com/ayvens-ald-seo) se ve bien: dos años después, la marca antigua sigue posicionando por delante de la nueva, y un subdominio de pruebas indexado repartió señales. Por eso insisto en dos cosas: mantener algo de contenido que explique el cambio de marca y asegurarse de que ningún entorno de pruebas queda indexable.

Si estás planificando un cambio de plataforma en tu tienda, también tienes mi [servicio de consultoría SEO para ecommerce](https://emirodgar.com/consultor-seo-ecommerce), y para el caso de Shopify, la [guía SEO para Shopify](https://emirodgar.com/shopify-seo).
