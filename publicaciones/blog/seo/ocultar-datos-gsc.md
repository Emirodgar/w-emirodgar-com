---
title: Cómo ocultar datos sensibles en Google Search Console al compartir pantalla
description: Aprende a proteger tu información confidencial mientras compartes informes de Google Search Console en presentaciones o videollamadas.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 20-09-2024
folder: seo
permalink: ocultar-datos-gsc

---


Como consultores SEO, es común que tengamos que compartir informes y datos de Google Search Console con clientes o colegas. Sin embargo, estos informes a menudo contienen información sensible que no queremos que sea visible para todos. En este artículo, te mostraré cómo puedes ocultar datos confidenciales al compartir tu pantalla durante presentaciones o videollamadas.

## Por qué es importante proteger tus datos

Antes de entrar en los detalles técnicos, es crucial entender por qué debemos ser cuidadosos con la información que compartimos. Los informes de Search Console pueden contener:

- URLs específicas de tu sitio web
- Datos de tráfico y rendimiento
- Palabras clave por las que tu sitio está posicionado
- Problemas técnicos y de seguridad

Compartir esta información indiscriminadamente podría poner en riesgo tu estrategia SEO o la de tus clientes.

## Métodos para ocultar datos sensibles

### 1. Utilizar el modo de enfoque de Windows

Si estás utilizando Windows 10 o superior, puedes aprovechar el "Modo de enfoque" para ocultar partes específicas de tu pantalla:

1. Presiona Win + Tab para abrir la vista de tareas
2. Selecciona "Nueva área de trabajo"
3. Abre Google Search Console en esta nueva área
4. Usa Win + Ctrl + D para alternar entre áreas de trabajo rápidamente

### 2. Herramientas de edición en tiempo real

Existen aplicaciones que te permiten dibujar o colocar formas sobre tu pantalla en tiempo real:

- Para Windows: Epic Pen
- Para Mac: Annotate

Estas herramientas te permiten cubrir datos sensibles con rectángulos o desenfoque mientras compartes tu pantalla.

### 3. Utiliza código Javascript

La mayoría de los navegadores nos permiten ejecutar código directamente en la consola. 

Lo más normal es que sea pulsando la tecla `F12` o pulsando con el botón derecho y seleccionando la opción de `Inspeccionar`.
Cuando se abra el panel, tendremos que ir a la pestaña de `Console` y ejecutar el siguiente código:

```javascript

const totals = document.querySelectorAll('.nnLLaf');

totals.forEach(total => {
  total.style.cssText = `
    filter: blur(5px);
    user-select: none; /* Opcional: Deshabilitar selección */
  `;
});

```

A continuación veremos cómo los datos del informe de rendimiento de Search Console se vuelven borrosos, ocultando su información.
Este código sirve para cualquier informe de GSC.

![image](https://github.com/user-attachments/assets/02c938c8-777e-4f8f-a521-41e3b7a592f7){:class="img-responsive"}

Si queremos también ocultar los ejes de los gráficos para no dar información, podemos usar este código:

```javascript

const totals = document.querySelectorAll('.V67aGc');

totals.forEach(total => {
  total.style.cssText = `
    filter: blur(5px);
    user-select: none; /* Opcional: Deshabilitar selección */
  `;
});

```

Al usar ambos, toda la información cualitativa del gráfico se ocultará

![image](https://github.com/user-attachments/assets/ceebefde-d3c6-46a7-bf51-b50235c582f2){:class="img-responsive"}


### 3. Preparar capturas de pantalla editadas

Si sabes de antemano qué información vas a compartir:

1. Toma capturas de pantalla de los informes relevantes
2. Edita estas imágenes para ocultar datos sensibles
3. Comparte las imágenes editadas en lugar de tu pantalla en vivo

Mejores prácticas al compartir informes de Search Console

- Planifica con anticipación: Decide qué datos son esenciales para tu presentación y cuáles pueden omitirse.
- Comunica claramente: Informa a tu audiencia que algunos datos han sido ocultados por razones de confidencialidad.
- Utiliza datos agregados: Cuando sea posible, muestra tendencias y datos generales en lugar de información específica.
- Practica antes de la presentación: Familiarízate con las herramientas y técnicas que utilizarás para ocultar información.
- Revisa dos veces: Antes de iniciar la compartición de pantalla, verifica que no haya datos sensibles visibles.
