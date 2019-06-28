---
title: Aplicar redirecciones en Jekyll
description: Aprende a redireccionar tus páginas usando el framework Jekyll
lang: es_ES
author: Emirodgar
tags: SEO, Jekyll
date: 28/06/2019
date_modified: 28/06/2019
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
permalink: redirecciones-seo-jekyll

---

# Aplicar redirecciones en Jekyll

Ya he hablado en alguna ocasión del generador de páginas webs **Jekyll** y [cómo optimizarlo para una estrategia SEO](optimizacion-seo-jekyll).

Hoy vamos a ver cómo se pueden implementar redirecciones de forma sencilla.

## Habilitar el módulo de redirecciones

El primer paso será habilitar en el fichero **_config.yml** el plugin asociado a las redirecciones y que nos permitirá utilizarlas dentro del framework. Para ello, dentro del apartado de plugins, añadimos lo siguiente

```
plugins:  
    - jekyll-redirect-from
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI2OTg5MjAwNSwtMjEyMjY0MTM2NF19
-->