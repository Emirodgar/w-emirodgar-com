---
title: Error en el formato del sitemap XML
description: 
lang: es_ES
author: emirodgar
sitemap: 1
feed: 1
folder: programacion
layout: emirodgar_post
permalink: error-formato-sitemap-xml

---

Un Sitemap es un listado de URLs que queremos que los buscadores rastreen e indexen. Aunque no es un [factor SEO](https://emirodgar.com/factores-seo) ni un componente crítico para una estrategia SEO, sí nos ayuda a que los robots de búsqueda **conozcan mejor nuestra arquitectura** web y nos **facilita los análisis de rastreo e indexación** a través del informe de Cobertura de Google Search Console.

El contenido de un sitemap XML es como el que se muestra a continuación:

    <?xml version="1.0" encoding="UTF-8"?>  
    <urlset  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">  
     <url>
      <loc>https://emirodgar.com/consultor-seo</loc>
      <lastmod>2018-06-04</lastmod>
     </url>  
    </urlset>


## Principales errores en los Sitemaps XML

1. Quizá el principal error suele ser que **no hacemos uso de los campos adecuados** que Google necesita para trabajar con el documento. Para solucionarlo bastará con seguir [las indicaciones de la guía oficial](https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap#xml). 

2. Hemos puesto **algún carácter de más**. Para ello podemos hacer uso de cualquier validador online que nos identificará si existe algún error a nivel técnico. Podemos usar [XML validation](https://www.xmlvalidation.com/) o cualquier otro que tengamos a mano.
3. El sitemap **no se forma correctamente al visualizarlo en el navegador** sino que aparece en texto plano (todo en una misma línea y sin formato). En este caso es un problema de configuración del servidor web ya que en lugar de enviar los ficheros xml como `application/xml` lo está haciendo como `text/html`. 

## Cómo cambiar el formato para que aparezca bien formado

El primer paso sería analizar cómo se está construyendo ese fichero XML para abordar la solución. En el caso de que sea un fichero previamente creado (estático) y con extensión `xml` necesitaremos acceso al archivo de configuración y, dependiendo de cuál sea el servidor que estemos usando, hacer el ajuste necesario. 

Por ejemplo, en el caso de Apache se podría configurar a través del fichero `.htaccess` añadiendo el siguiente código:

```
AddType application/xml .xml
```

Si por otro lado se trata de un fichero (php, asp, etc) que crea de forma dinámica el documento xml, entonces tendremos que asegurarnos de que al final de la ejecución envía como cabecera el formato adecuado en el que queremos que sea procesado en el navegador. 



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNDAwNjUzNjRdfQ==
-->