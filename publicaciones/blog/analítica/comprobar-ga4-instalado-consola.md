---
title: Cómo comprobar desde la consola del navegador que tenemos GA4 instalado
description: Comprueba en 3 pasos si una web tiene Google Analytics 4 instalado y enviando datos, usando solo la pestaña Network de las DevTools y buscando la petición collect con el ID G-.
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: analitica
date: 12/10/2026
layout: emirodgar_post
image: https://emirodgar.com/cdn/images/og/analitica.png
permalink: comprobar-ga4-instalado-consola

---

Tener el código de **Google Analytics 4** en el HTML no significa que esté midiendo. Puede que la etiqueta esté duplicada, que la bloquee un banner de cookies mal configurado o que apunte a una propiedad que no es la tuya. La forma más fiable de saberlo es mirar si la página **envía realmente peticiones a los servidores de Google**, y para eso solo necesitas las DevTools del navegador.

Sirve tanto para validar tu propia web como para auditar la de un cliente o la de un competidor sin pedir accesos a nadie.

## Paso 1. Abre DevTools y ve a la pestaña Network

Abre la página que quieres inspeccionar y pulsa `F12` (o `Ctrl + Shift + I` en Windows y Linux, `Cmd + Option + I` en Mac). Selecciona la pestaña **Network** (Red).

Si quieres más atajos, tienes una recopilación de [trucos para exprimir la consola de Google Chrome](https://emirodgar.com/consola-devtools-chrome).

> Consejo: marca la casilla **Preserve log** si la web redirige o cambia de URL al cargar, y **Disable cache** para que no se te escape ninguna petición.

## Paso 2. Filtra por collect

En la caja de filtro escribe `collect` (o `/g/collect`). La lista se reducirá a las peticiones que GA4 usa para enviar datos.

## Paso 3. Recarga la página y busca el ID de medición

Recarga con `F5` (o `Ctrl + R`) para registrar la carga inicial. Aparecerán una o varias peticiones `collect`. Haz clic en una de ellas y abre la pestaña **Payload** (o mira la URL de la petición, en **Headers**).

Lo que buscas es el parámetro `tid`. Si su valor empieza por **`G-`**, la web tiene GA4 instalado y está enviando datos. En mi caso:

![Comprobar GA4 en la pestaña Network de las DevTools de Chrome](https://emirodgar.com/cdn/images/posts/comprobar-ga4-devtools-network.png){:class="img-responsive"}

Vemos varias peticiones del tipo `collect?v=2&tid=G-Y7HB3S34Y5...` con estado `200` o `204`. El `v=2` indica que es el protocolo de GA4 y el `tid` es el **ID de medición** de la propiedad. Es decir, GA4 está instalado y funcionando.

## Qué parámetros te interesan de la petición

Dentro del Payload encontrarás, entre otros:

- `tid`: el ID de medición (`G-XXXXXXXXXX`). Compruébalo contra el de tu propiedad.
- `en`: el nombre del evento (`page_view`, `scroll`, `click`...).
- `dl`: la URL de la página donde se ha disparado.
- `cid`: el identificador del cliente.

Si ves **varios `tid` distintos** en la misma página, hay más de una propiedad recibiendo datos, algo habitual cuando conviven una etiqueta en el código y otra en Tag Manager.

## Cómo interpretar lo que ves

- **Estado 200 o 204**: la petición ha llegado bien. Es lo normal.
- **Estado `(blocked)`**: algo la ha bloqueado, normalmente una extensión como un adblocker o una política de privacidad. En la captura se ve alguna en rojo por este motivo, y no implica que GA4 no funcione para el resto de usuarios.
- **No aparece ninguna petición `collect`**: puede que GA4 no esté instalado, que no se dispare hasta aceptar las cookies o que se cargue con retraso. Interactúa con la página, acepta el banner y vuelve a mirar.
- **Peticiones a dominios propios**: si la web usa implementación *server-side*, las peticiones irán a un dominio propio en lugar de `google-analytics.com`. Filtra entonces por `tid=G-` para encontrarlas.

## Métodos alternativos dentro de DevTools

### Comprobar el dataLayer desde la pestaña Console

Escribe `dataLayer` y pulsa Enter. Si devuelve un array con objetos que incluyen comandos como `config` o `event`, la web usa Google Tag Manager o `gtag.js`. Es un indicio, pero no demuestra que los datos lleguen a GA4, por eso la pestaña Network sigue siendo la prueba definitiva. Más sobre esto en [cómo trabajar con la capa de datos](https://emirodgar.com/analytics-ecommerce-capa-de-datos) o [cómo cambiar su nombre](https://emirodgar.com/cambiar-nombre-datalayer), que cambia lo que tendrás que escribir en la consola.

### Búsqueda global en el código

Pulsa `Ctrl + Shift + F` (o `Cmd + Option + F` en Mac) para abrir la búsqueda global de DevTools y busca `G-`. Rastreará el HTML y los archivos JavaScript cargados en busca de IDs de medición. Te sirve para localizar dónde está definida la etiqueta.

### Tag Assistant

Si el sitio usa Tag Manager, [Tag Assistant](https://tagassistant.google.com/) te enseña qué etiquetas se disparan y con qué datos, y **DebugView** dentro de GA4 (Administrar > DebugView) muestra los eventos en tiempo real.

## Y si todavía conservas rastros de Universal Analytics

Universal Analytics dejó de procesar datos hace tiempo. Si en el código encuentras un `UA-XXXXXXX-X` o peticiones a `/collect` sin `v=2`, es código muerto. Aquí te cuento [cómo detectarlo y limpiarlo](https://emirodgar.com/google-analytics-migracion-ga4), y aquí las [diferencias entre versiones de Google Analytics](https://emirodgar.com/versiones-google-analytics) para reconocerlas.

## Conclusiones

Para saber si una web tiene GA4 funcionando basta con abrir la pestaña Network, filtrar por `collect` y localizar un `tid` que empiece por `G-`. Es una comprobación de menos de un minuto que te ahorra mucho tiempo antes de empezar a [buscar errores en los datos](https://emirodgar.com/errores-comunes-analytics).
