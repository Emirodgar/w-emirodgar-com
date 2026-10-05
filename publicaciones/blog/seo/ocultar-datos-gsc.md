---
title: Cómo ocultar datos sensibles en Google Search Console al compartir pantalla
description: Cuatro formas de ocultar URLs, clics, impresiones y ejes de los gráficos de Search Console cuando compartes pantalla, y una alternativa mejor si el cliente necesita ver sus datos.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 20-09-2024
date_modified: 05/10/2026
folder: seo
permalink: ocultar-datos-gsc

---


Como consultores SEO, es común que tengamos que compartir datos de Google Search Console con clientes o colegas (o [filtrarlos con regex para encontrar oportunidades ocultas](https://emirodgar.com/regex-google-search-console)). El problema es que esos informes casi siempre contienen información que no queremos enseñar a todos. En este artículo te cuento cómo ocultarla al compartir pantalla en una presentación o videollamada.

## Por qué es importante proteger tus datos

Los informes de Search Console pueden contener:

- URLs específicas de tu sitio web
- Datos de tráfico y rendimiento
- Palabras clave por las que tu sitio está posicionado
- Problemas técnicos y de seguridad

Compartir esta información sin criterio puede poner en riesgo tu estrategia SEO o la de tus clientes. Y si trabajas con varias cuentas, basta una pestaña abierta de otro proyecto para que se vea algo que no debía verse.

## Métodos para ocultar datos sensibles

### 1. Comparte una ventana o una pestaña, no la pantalla completa

Es lo más simple y lo primero que haría. Google Meet, Teams y Zoom permiten compartir solo una ventana o una pestaña del navegador. Así no se ven otras pestañas, notificaciones ni escritorio.

Si usas Windows, un escritorio virtual aísla aún más la presentación:

1. Presiona `Win + Tab` para abrir la vista de tareas.
2. Selecciona "Nuevo escritorio" y abre ahí solo Search Console.
3. Usa `Win + Ctrl + flecha izquierda` o `Win + Ctrl + flecha derecha` para cambiar de escritorio rápidamente.

Esto no oculta datos dentro de Search Console, pero evita que se cuele nada más.

### 2. Herramientas de edición en tiempo real

Existen aplicaciones que te permiten dibujar o colocar formas sobre tu pantalla en tiempo real:

- Para Windows: Epic Pen
- Para Mac: Annotate

Estas herramientas te permiten cubrir datos sensibles con rectángulos o desenfoque mientras compartes tu pantalla. Su pega es que lo haces a mano y en directo, así que es fácil olvidarse de algo.

### 3. Utiliza código Javascript

La mayoría de los navegadores nos permiten ejecutar código directamente en la consola.

Lo más normal es que sea pulsando la tecla `F12` o pulsando con el botón derecho y seleccionando la opción de `Inspeccionar`. Cuando se abra el panel, tendremos que ir a la pestaña de `Console` y ejecutar el siguiente código:

```javascript

const totals = document.querySelectorAll('.nnLLaf');

totals.forEach(total => {
  total.style.cssText = `
    filter: blur(5px);
    user-select: none; 
  `;
});

```

A continuación veremos cómo los datos del informe de rendimiento de Search Console se vuelven borrosos, ocultando su información.
Este código sirve para cualquier informe de GSC.

![Informe de rendimiento de Search Console con los totales de clics e impresiones desenfocados](https://github.com/user-attachments/assets/02c938c8-777e-4f8f-a521-41e3b7a592f7){:class="img-responsive"}

Si queremos también ocultar los ejes de los gráficos para no dar información, podemos usar este código:

```javascript

const totals = document.querySelectorAll('.V67aGc');

totals.forEach(total => {
  total.style.cssText = `
    filter: blur(5px);
    user-select: none; 
  `;
});

```

Al usar ambos, toda la información cualitativa del gráfico se ocultará.

![Gráfico de Search Console con los totales y los ejes desenfocados](https://github.com/user-attachments/assets/ceebefde-d3c6-46a7-bf51-b50235c582f2){:class="img-responsive"}

Tres cosas a tener en cuenta con este método:

- **Las clases `.nnLLaf` y `.V67aGc` son internas de Google.** Pueden cambiar en cualquier momento sin aviso. Si el código deja de funcionar, haz clic derecho sobre uno de los números, elige `Inspeccionar` y sustituye la clase por la que veas ahora.
- **El efecto se pierde al recargar la página.** Tendrás que ejecutarlo de nuevo, y conviene hacerlo antes de empezar a compartir y no durante. Para no copiarlo cada vez, puedes guardarlo en `Sources > Snippets` de las herramientas de desarrollo de Chrome y lanzarlo con un clic.
- **Chrome puede no dejarte pegar código en la consola.** Es una protección contra estafas. Escribe `allow pasting`, pulsa Intro y vuelve a pegarlo. Y como regla general, ejecuta solo código que entiendas.

Además, el código solo desenfoca los totales y los ejes. Las tablas de consultas y páginas siguen visibles, así que si no quieres enseñarlas, evita pasar a esas pestañas.

### 4. Preparar capturas de pantalla editadas

Si sabes de antemano qué información vas a compartir:

1. Toma capturas de pantalla de los informes relevantes.
2. Edita estas imágenes para ocultar datos sensibles.
3. Comparte las imágenes editadas en lugar de tu pantalla en vivo.

Es el método más seguro porque no hay nada que se pueda ver por error.

## Si el cliente necesita ver sus datos, dale acceso

A veces compartir pantalla no es la mejor solución. Si el cliente va a consultar sus datos de forma recurrente, lo más limpio es darle acceso a su propiedad en Search Console desde `Ajustes > Usuarios y permisos`. Con el permiso **Restringido** puede ver los informes sin modificar la configuración.

Así no dependes de ocultar nada, y cada persona ve únicamente la propiedad que le corresponde.

## Mejores prácticas al compartir informes de Search Console

- **Planifica con anticipación.** Decide qué datos son esenciales para tu presentación y cuáles pueden omitirse.
- **Comunica claramente.** Informa a tu audiencia de que algunos datos se han ocultado por confidencialidad.
- **Utiliza datos agregados.** Cuando sea posible, muestra tendencias y datos generales en lugar de información específica.
- **Practica antes de la presentación.** Familiarízate con las herramientas y técnicas que vas a utilizar.
- **Revisa dos veces.** Antes de empezar a compartir, comprueba que no hay datos sensibles visibles, incluidas otras pestañas y notificaciones.

## Conclusiones

Lo más seguro es combinar dos cosas: compartir solo una ventana o pestaña y desenfocar lo que haga falta con el código. Y si la relación con el cliente es continua, darle acceso restringido te ahorra todo lo demás.
