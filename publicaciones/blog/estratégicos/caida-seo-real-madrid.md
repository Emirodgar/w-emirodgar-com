---
title: Caída SEO Real Madrid - realmadrid.com
description: Análisis de la caída sufrida en realmadrid.com por una mala migración web
lang: es_ES
sitemap: 1
feed: 1
date: 13/12/2023
folder: estrategicos
layout: emirodgar_post
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: caida-seo-real-madrid
author: emirodgar

---

El otro día, realizando una búsqueda en Internet sobre Sergio Ramos, terminé en la página oficial del Real Madrid, pero curiosamente, en lugar de llegar a la ficha del jugador, fui redireccionado a una genérica del club. Esto me llamó la atención y decidí investigar un poco para entender qué cambios se habían realizado sobre la web. El [Carlos Ortega](https://twitter.com/carlos_darko/status/1734591915499110881) había indagado sobre el posible problema en X, pero quise profundizar más.

## Pérdida de visibilidad SEO

Utilizando la herramienta Sistrix, me sorprendí al ver que el dominio `realmadrid.com` había sufrido **una gran caída a finales de noviembre**.
En la siguiente gráfica podemos ver la evolución de la visibilidad SEO durante los últimos 5 años.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/a72ad024-54df-47c1-b625-f695d8cb7f65){:class="img-responsive"}

Si analizamos sólo el último año podemos concretar cuándo ha sido la caída. Según Sistrix, entre finales de noviembre (28) y principios de diciembre (4). Ya tenemos un marco temporal para analizar lo que ha podido ocurrir.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/d11ea1bf-2943-4fbe-8df2-3515a1d30e11){:class="img-responsive"}

## ¿Por qué ha perdido visibilidad SEO realmadrid.com?

Desde fuera y sin saber exactamente qué se ha hecho, es complicado, no obstante, intentaré analizar bajo mi punto de vista dónde podría estar el problema.
Lo primero que recomiendo hacer en estos casos es analizar dónde ha ocurrido la bajada. Dado que estaba en Sistrix, utilizaré el informe de `Cambios en el Ranking`. 

Como ya habíamos definido el marco temporal, debemos ajustarlo en la plataforma. Yo he usado el 20 de noviembre frente al 11 de diciembre.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/aac7da75-37ba-42af-ac19-f506f32f01e5){:class="img-responsive"}

Ya podemos ver las primeras conclusiones. Múltiples términos, asociados principalmente a exjugadores del Real Madrid que posicionaban en las primeras posiciones de Google España, **han desaparecido de los rankings**.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/91c813a8-1119-423e-8456-e4977cb2be1b){:class="img-responsive"}

Si nos fijamos en las URL por las que posicionaban, veremos que gran parte lo hacen sobre las subcarpetas `/sobre-el-real-madrid/el-club/` y `/futbol/plantilla`

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/fa053062-8e3c-4f06-9c5a-f5b692f872d4){:class="img-responsive"}

Parece que vamos acotando por dónde ha venido el problema. Para entenderlo mejor debemos visitar esas secciones. Al hacerlo, veremos que somos redireccionados a páginas genéricas, es decir, las páginas de las fichas de los jugadores que antes existían, **han sido eliminadas o mal redireccionadas** (aún es pronto para saberlo), lo que cuadra con la caída en visibilidad que muestra Sistrix.

os pongo dos ejemplos:

- La URL de Sergio Ramos (`www.realmadrid.com/sobre-el-real-madrid/el-club/historia/jugadores-de-leyenda-futbol/sergio-ramos-garcia`) redirecciona a `https://www.realmadrid.com/es-ES/el-club`.
- La URL de Luka Modric (`www.realmadrid.com/futbol/plantilla/luka-modric`) redirecciona a `https://www.realmadrid.com/es-ES/futbol/primer-equipo-masculino/plantilla`

## ¿Se ha realizado una mala migración?

Cuando migramos una página o hacemos un cambio de URL es prioritario que cada página antigua sea redireccionada con un código `301` a su versión más nueva. De no existir, como parece ser el caso, deberíamos llevarlo a una genérica lo más parecida posible.
Sinceramente, me parecía muy extraño que el Real Madrid eliminara una sección tan relevante como es la de los jugadores, por lo que navegando por el menú `Club` > `Leyendas del fútbol` llegué a la ficha de mi querido Sergio Ramos y ahí es cuando aprecié que se había añadido una subcarpeta idiomática a la URL, además de otros cambios.

- La página anterior: `https://www.realmadrid.com/sobre-el-real-madrid/el-club/historia/jugadores-de-leyenda-futbol/sergio-ramos-garcia`
- La página nueva: `https://www.realmadrid.com/es-ES/el-club/historia/leyendas-futbol/sergio-ramos-garcia`

El Real Madrid no ha eliminado la sección, ha cambiado la arquitectura de la web (cambiando la URL a algunas secciones y añadiendo una subcarpeta idiomática) pero **no ha realizado una migración adecuada**.
Esto es mi opinión y, sin conocer las razones, no podemos saber si es un fallo o si se ha realizado con conocimiento de causa. Lo único seguro es que están perdiendo tráfico orgánico a través de Google España.

Quizá en la siguiente gráfica se entienda mejor la situación.
Vamos a comparar la visibilidad SEO de las dos secciones que hemos identificado antes que habían sido mal redireccionadas (`/sobre-el-real-madrid/el-club/` y `/futbol/plantilla`) junto con la versión idiomática (`es-ES`), que es lo que sabemos que se ha creado nueva a finales de noviembre y que es donde ahora se alojan las fichas de los jugadores. Aunque cuesta verlo, al final de la gráfica las líneas azul y verde desaparecen (al no haber sido migradas adecuadamente, ya no pueden posicionar por los contenidos que tenían antes) y comienza a posicionar la versión idiomática (línea roja). Eso sí, lo hace sólo con la mitad de visibilidad.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/33f26348-097f-4ca6-991d-8d0ca8cb31ad){:class="img-responsive"}

A efectos SEO, esto equivale a empezar desde cero con una nueva sección. Es posible que a medio y largo plazo recuperen el tráfico que tenían, **pero no será algo rápido**. De haber ejecutado correctamente las redirecciones (aún están a tiempo de hacerlo), la caída apenas hubiera afectado al tráfico. Me ha recordado a la migración de FNAC que salió mal y que he explicado muchas veces como [caso de éxito SEO](https://emirodgar.com/casos-exito-seo#ecommerce).

## Problemas con renderizado

Soy muy curioso, así que he querido investigar si sólo se había realizado un cambio a nivel de arquitectura o si había algo más.
Al parecer, se trata de una aplicación desplegada a través de [Scully](https://scully.io/), un CMS que utiliza el framework Javascript de Angular. 

Si eres SEO y estás leyendo esto, **seguro que te habrá dado un escalofrío**. Todos sabemos que Angular, aunque sea una tecnología de Google, no es muy amiga de los rastreadores y tiende a complicar nuestro trabajo de **rastreo e indexación**. Todo depende de cómo se haya configurado el renderizado o prerendeerizado para facilitar las cosas a Google. El hecho de usar [Angular Universal](https://blog.angular-university.io/angular-universal/) puede ayudar bastante con [el renderizado a nivel de servidor](https://angular.io/guide/ssr).

> Angular funciona de una manera curiosa. En lugar de tener múltiples URL que conforman una página (como suele ser lo normal con otras tecnologías), sólo existe una página con un esqueleto base. En función de lo que el usuario quiere, se elimina y añade el contenido sobre ese esqueleto. En la práctica resulta una manera muy eficaz de interactuar con una web dado que **la experiencia de los usuarios y el tiempo de carga es fantástico**. El problema lo tenemos con los robots de búsqueda.

Para asegurarnos que los buscadores entienden todas las posibilidades que existen, **necesitamos hacer un renderizado previo de todas las URL por las que nos gustaría posicionar** y hacerlo accesible a los robots de búsqueda. En términos técnicos, cuando un usuario accede a nuestra página con Angular y le rellenamos los datos que quiere ver, se denomina `CSR` (*Client Side Rendering* - Renderizado del lado del cliente) y cuando se lo preparamos internamente para que cuando accedan, los datos ya estén ahí, se denomina `SSR` (*Server Side Rendering* - Renderizado del lado del servidor).

Continumemos con el análisis. En la página del Real Madrid han hecho un buen trabajo con el `SSR`, dado que cada URL tiene su propio contenido que es accesible por los buscadores. En caso de haberlo hecho mal, veríamos una página en blanco. Esto, imagino que lo habrán verificado desde la herramienta de [Inspección de URLs de Google Search Console](https://support.google.com/webmasters/answer/9012289?hl=es), dado que ahí podemos **validar la versión final renderizada a la que tiene acceso el robot de búsqueda**.

No obstante, en un vistazo rápido, he visto algunas cosas mejorables.
El siguiente enlace que os muestro, desde la ficha de Sergio Ramos hacia el índice de leyendas, aunque es accionable para un usuario, no aparece en el renderizado quee hacemos a los buscadores. Es muy problable que exista un problema con el enlazado interno dentro de los `breadcrumbs` o contenidos. He descartado problemas en los enlaces de los menús (principal y footer). 

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/46bbab9a-8e3b-4048-813a-6bf026fbfbfb){:class="img-responsive"}

Recordad que cuando se trabajan con `SSR`, es posible que esta versión sólo se envíe a los robots de búsqueda, por lo que para aseguraros de que veis lo mismo que `Googlebot` será necesario emular el acceso utilizando el mismo `user-agent` (os lo explico en la siguiente imagen). Con ello tendríamos la seguridad de que recibimos lo mismo que el robot de Google. Es cierto que también [se puede hacer el filtro a través de IP](https://emirodgar.com/detectar-googlebot) en lugar de `user-agent`, en cuyo caso la única manera que poder validar el renderizado final sería a través de la herramienta de [Inspección de URLs de Google Search Console](https://support.google.com/webmasters/answer/9012289?hl=es). Yo os puedo decir únicamente lo que veo desde fuera.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/4aa1a2b2-af13-4ac2-a9ce-e406d989b047){:class="img-responsive"}

Con ello podemos constatar que el enlace de "Leyendas" no aparece en el código fuente, donde sólo se reflejan los enlaces incluidos en el menú de navegación de la página: leyendas de fútbol y baloncesto. Si yo estuviera a cargo de la web del Real Madrid, me aseguraría que todos los enlaces, contenidos y material multimedia se renderiza correctamente en la versión `SSR`.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/7e404168-4bf2-4084-bb56-33e666a1d836){:class="img-responsive"}

A mayores, y por no extenderme mucho más, también he visto que los títulos de múltiples páginas son idénticos, dado que en el renderizado de la página es un componente que no se actualiza con cada petición de URL. Sin un `meta title` único y optimizado, será muy difícil que recuperen el posicionamiento perdido. Creo que aún **se puede optimizar un poco más el renderizado a nivel de servidor que se le envía a los buscadores**.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/67a48584-0368-4381-8ede-43b04573f48d){:class="img-responsive"}






