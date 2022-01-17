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

Un Sitemap es un listado de URLs que queremos que los buscadores rastreen e indexen. Aunque no es un factor SEO ni un componente crítico para una estrategia SEO, sí nos ayuda a que los robots de búsqueda **conozcan mejor nuestra arquitectura** web y nos **facilita los análisis de rastreo e indexación** a través del informe de Cobertura de Google Search Console.

El documento

    <?xml version="1.0" encoding="UTF-8"?>  
    <urlset  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">  <url>  <loc>https://emirodgar.com/foo.html</loc>  <lastmod>2018-06-04</lastmod>  </url>  
    </urlset>


## Principales errores en los Sitemaps XML

1. Quizá el principal error suele ser que **no hacemos uso de los campos adecuados** que Google necesita para trabajar con el documento. Para solucionarlo bastará con seguir [las indicaciones de la guía oficial](https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap#xml). 

3. Hemos puesto **algún carácter de más**. Para ello podemos hacer uso de cualquier validador online que nos identificará si existe algún error a nivel técnico. Podemos usar [XML validation](https://www.xmlvalidation.com/) o cualquier otro que tengamos a mano.
4. El sitemap **no se forma correctamente al visualizarlo en el navegador** sino que aparece en texto plano (todo en una misma línea y sin formato). En este caso es un problema de configuración del servidor web ya que en lugar de enviar los ficheros xml como `application/xml` lo está haciendo como `text/html`.


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTMzMDQzMDU5OV19
-->