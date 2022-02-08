---
title: Cómo cambiar el nombre al objeto dataLayer (Google Tag Manager)
description: 
image: https://emirodgar.com/cdn/images/og/analitica.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 08/02/2022
folder: analitica
permalink: cambiar-nombre-datalayer

---

Cuando hacemos implementaciones que hacen uso de la capa de datos, por ejemplo el [Ecommerce Mejorado de Google Analytics](https://emirodgar.com/analytics-ecommerce-capa-de-datos), utilizamos el objeto `dataLayer` para transferir información desde la página web a Google Tag Manager.

Aunque el nombre del objeto viene definido por defecto, podemos personalizarlo y utilizar otro que nos guste más. Para ello tendremos que modificar el código base de Tag Manager y, donde indica dataLayer, poner el nombre que queramos utilizar.

La línea que debemos identificar es la última del código; justo antes de donde especificamos el identificador de GTM veremos que aparece `dataLayer`.

```
})(window,document,'script','dataLayer','GTM-XXXX');</script>  
```

En este caso voy a cambiar el valor por defecto por  `capaDatos` y el código modificado quedaría de la siguiente manera:

```
<!-- Google Tag Manager -->  
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
new  Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],  
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=  
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);  
})(window,document,'script','capaDatos','GTM-XXXX');</script>  
<!-- End Google Tag Manager -->
``` 

A partir de ahora cuando queramos enviar información a la capa de datos lo haremos utilizando el objeto `capaDatos` de la siguiente manera:

    <script>  
      capaDatos.push({'nombre':'valor'});  
    </script>

<!--stackedit_data:
eyJoaXN0b3J5IjpbNzY2OTYyOTUsLTY3NTIzNTc0N119
-->