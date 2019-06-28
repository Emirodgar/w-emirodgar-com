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

El primer paso será habilitar en el fichero **_config.yml** el plugin asociado a las redirecciones -*jekyll-redirect-from*- y que nos permitirá utilizarlas dentro del framework. Para ello, dentro del apartado de plugins, añadimos lo siguiente:

```
plugins:  
    - jekyll-redirect-from
```

Si ya teníamos algún plugin cargado, únicamente añadiremos la segunda línea.

## Aplicar redirecciones

Una vez habilitado el plugin, aplicar redirecciones será tan sencillo como incluir los siguientes comandos dentro de nuestras páginas:

El siguiente código nos permitirá definir qué URLs que ya existen en nuestra página web serán redireccionadas a la que estamos definiendo ahora.

```yml
---
title: Redirección 301 de otras URLs a esta página 
redirect_from:
    - /antigua/
    - /otra/antigua/
permalink: /nueva/
---
``` 

Por otro lado también podemos hacer que la página en curso sea redirecciona a otra URL incluso ajena a nuestro dominio.

```yml
---
title: Redirección 301
redirect_to:
  - http://otra-pagina.com
permalink: /nueva/
---
```

También podríamos crear 
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI1NDQ1Mzg1NiwtMjEyMjY0MTM2NF19
-->