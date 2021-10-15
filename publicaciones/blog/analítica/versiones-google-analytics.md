

---
title: Versiones de Google Analytics 
description: 
image: https://emirodgar.com/cdn/images/og/analitica.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
folder: analitica
permalink: versiones-google-analytics

--- 

Google Analytics ha ido -como cualquier otra herramienta digital- evolucionando desde sus orígenes hasta la fecha actual. S se estima que está presente en un 55% de las páginas globales lo que nos indica hasta qué punto es un producto de análisis web consolidado y utilizado.

Sus orígenes se remontan a abril de 2005, fecha en la que Google compró Urchin Analytics para usarlo como base de su futuro Analytics.

A partir de ese momento, el código de seguimiento de Urchin ha ido sufriendo evoluciones que han permitido una mejor y más eficiente medición. En la siguiente tabla muestro dichos códigos y los años en los que fueron lanzados.

| Año | Versión de Analytics | Librería Javascript
|--|--|--|
| 2005 | Urchin Analytics  | urchin.js |
| 2007 | Analytics Síncrono  | ga.js |
| 2009 | Analytics Asíncrono  | ga.js |
| 2012| Analytics con medición de anuncios | dc.js |
| 2013| Analytics Universal | analytics.js |
| 2017| Global Site Tag | gtag.js |
| 2020| Analytics 4 | gtag.js |

Cada versión ha permitido incorporar nuevas funcionalidades y mejorar el rigor en los datos. Aunque la versión más actualizada es la 4 (GA4) Google Analytics funciona y permite recoger y procesar información con cualquier versión asíncrona (2009).

## Historia de los códigos

La primera versión del código era la de Urchin y aunque Google adaptó dicha librería, el auge de Analytics no comenzó hasta 2009 con la presentación de su **código asíncrono** cuyas ventajas frente a versiones pasadas eran un mejor tiempo de carga y fiablidad en la recogida de información.

Este código tenía como característica principal el usar el comando `_gaq.push` para enviar información a Analytics. Este comando también se usó en la versión de Analytics con medición de anuncios (*Analytics with Display Advertising*).

### Primer paso hacia la personalización de la medición

Google Analytics Universal, una de las versiones más extendidas y utilizadas hasta el momento, trajo consigo cambios y mejoras asociadas a la medición de los usuarios como los segmentos avanzados, métricas y dimensiones personalizadas, medición multidispositivo, etc.



    <script> 
    (function(i,s,o,g,r,a,m){i[‘GoogleAnalyticsObject’]=r;i[r]=i[r]||function(){
     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) 
     })(window,document,’script’,’//www.google-analytics.com/analytics.js’,’ga’); 
     
    ga(‘create’, ‘UA-XXXX-Y’, ‘auto’); 
    ga(‘send’, ‘pageview’); 
    </script>

### Un código para medirlos a todos

Google Marketing Platform iba tomando forma y era necesario un sistema más robusto para registrar y compartir información. Con ese fin nació Global Site Tag, para poder estandarizar y compartir información entre Analytics, Ads, DoubleClick y cualquier otro servicio de Google susceptible de entrar en su plataforma.

En este punto la medición ya no iba a través de Analytics sino que se realizaba a través de Tag Manager. 

    <script async src=”https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-1″></script>    
    <script>    
    window.dataLayer = window.dataLayer || [];    
    function gtag(){dataLayer.push(arguments);}    
      gtag(‘js’, new Date());    
      gtag(‘config’, ‘UA-XXXXXXXXX-1’);    
    </script>

### La consolidación de la medición

Hasta este punto, si queríamos medir una web y una app teníamos que hacerlo a través de dos propiedades diferentes. GA4 nace con el objetivo de unificar toda la medición bajo una única cuenta.

Para ello cambia la tradicional medición de página vista (`pageview`) a eventos, independientemente de dónde se estén generando (web, app, etc.).

La independencia y libertad que GA4 ofrece es algo  
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyODIxNzg0MDUsLTE2NjA0MTgyNzFdfQ
==
-->