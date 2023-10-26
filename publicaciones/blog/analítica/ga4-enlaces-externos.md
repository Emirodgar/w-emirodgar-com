---
title: Cómo ver los enlaces externos en GA4
description: 
image: https://emirodgar.com/cdn/images/og/analitica.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 26/10/2023
folder: analitica
permalink: ga4-enlaces-externos

--- 

De manera nativa, Google Analytics 4 nos permite registrar los clics realizados a enlaces externos a nuestra página web. El problema suele venir que cuando queremos analizarlos, esa información no es muy accesible.

## Habilita el seguimiento de enlaces externos

El primer paso que tenemos que hacer es asegurarnos que tenemos habilitada esta opción. Para ello debemos ir a `Administrar`, `Flujos de datos` y hacemos clic sobre el flujo de datos web.
En el nuevo panel que se despliega, haremos clic sobre la rueda dentada de `Medición mejorada`.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/66f586a8-22c6-4fb8-8ba4-fa3cf054ef2f){:class="img-responsive"}

Ahora debemos asegurarnos que el apartado de `Clics de salida` está activado (check azul como el de la siguiente imagen).

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/937aed18-fe95-4c8c-8a45-2f34c2176907){:class="img-responsive"}

## Validamos que se recogen los enlaces

Antes de avanzar, es importante validar que la implementación recoge los enlaces externos, para ello usaremos el informe de `En tiempo real`. Vamos a nuestra página web y hacemos clic en cualquier enlace externo.
Desde el informe de tiempo real de GA4, vamos al cuadro de `Número de eventos por Nombre de evento` y buscamos el evento de `click`

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/cf7d9813-b5a9-4c1a-ab16-e5839bfe1dfb){:class="img-responsive"}

Si hacemos clic en dicho evento, accederemos a todas las propiedades del mismo, entre las cuales se encuentra `link_url`, que es donde GA4 almacena el valor de los enlaces externos.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/55f4064f-92ed-4202-9d5f-119a9bba6c65){:class="img-responsive"}

Si hacemos otro clic en `link_url` podremos validar si el valor que se muestra coincide con el enlace externo sobre el que previamente habíamos hecho clic. De ser así, podemos dar por válida la implementación.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/d9530560-8a7f-43ff-aa50-e9fd1b71dd4d){:class="img-responsive"}

## Configurar un informe para analizar los clics en enlaces externos

GA4 no incluye esta información de manera automática en los informes, dado que no sabe de antemano qué dimensiones o métricas nos interesa analizar.
Para poder acceder a toda esta información, necesitamos crear una dimensión personalizada que incluya este valor.

### Crear dimensión personalizada

Vamos a `Administrar`, seleccionamos `Definiciones personalizadas` y pulsamos sobre el botón de `Crear dimensión personalizada`.
En el nombre de la dimensión podemos utilizar el que nosotros queramos, eso sí, utilizar algo descriptivo. 

En este caso concreto, el alcance (o ámbito) debe de ser de tipo `Evento` y en la opción de `parámetro de evento` debemos especificar el mismo que GA4 utiliza por defecto, en este caso: `link_url`.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/81844d33-39a3-42cb-97b4-4f1710f03707){:class="img-responsive"}

Una vez que lo tengamos, pulsamos sobre guardar.
La creación de una dimensión personalizada no tiene carácter retroactivo, es decir, empieza a funcionar en el momento en el que se ha creado, por lo que tendremos que esperar varios días a que recoja información.
Mientras tanto, podemos ir creando el informe que nos permitirá analizar esta información.

### Crear informe de clics externos

EL último paso será crear el informe que refleje los clics externos realizados en nuestra página.
Mi recomendación es crear una exploración en blanco dentro del menú de `Explorar`.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/66d768e6-1974-4992-987f-e4b81b291d2c){:class="img-responsive"}

Cuando hacemos clic en Crear una exploración en blanco, se nos abre un panel donde podremos seleccionar aquellas dimensiones y métricas que queremos analizar.
Mi recomendación será la siguiente:

**Dimensiones**
 - `Nombre del evento`: para filtrar sólo los eventos de tipo clic
 - `Link_URL`: dimensión personalizada que hemos creado que incluye el enlace externo.
 - `Título de la página`: para saber desde qué páginas se ha hecho clic.

**Métricas**
 - `Número de eventos`: nos reflejará el número de veces que se ha hecho clic.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/3014b507-79b2-403a-a9e2-3ddd855483fd){:class="img-responsive"}

Recordad seleccionar un rango de fechas que coincida con la creación de la dimensión personalizada. Si es anterior, el informe no reflejará ningún dato.


Una vez que hemos seleccionado las dimensiones y métricas, pasamos al segundo bloque de `Configuración`.
Aquí debemos establecer en filas, las dimensiones que queremos analizar:  `Título de la página` y `Link_URL`. 
Muy importante, ampliar el número de filas ya que por defecto sólo vienen 10.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/90bcc44b-eed4-4831-b91b-e87782c7b727){:class="img-responsive"}

Un poco más abajo, en valores, incluímos el `Número de eventos`.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/ec01fe28-c846-43d9-a03c-8310e2cc8130){:class="img-responsive"}

Por último, nos queda limitar el informe a lo que realmente queremos. Podemos hacerlo de varias maneras. Lo más genérico sería filtrar por `Nombre del evento` que sea igual a `Click`. De esa manera sólo se mostrarán enlaces.
También tenemos la opción, si sólo queremos analizar un segmento concreto de enlaces externos, utilizar la dimensión personalizada `Link_URL` para incluir sólo los que nos interesan. En la siguiente imagen podéis ver que se ha filtrado para incluir sólo los de Amazon.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/8d389d2b-84b4-4626-819a-3851bee0a98a){:class="img-responsive"}

Una vez aplicados estos cambios, podremos acceder al informe final. Éste es sólo un ejemplo, podemos jugar con las dimensiones y métricas para hacer diferentes variaciones según lo que nos interese analizar.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/fde34f74-a38d-46bf-a460-d3122d7ea170){:class="img-responsive"}










