---
title: Guía SEO pra Shopify 
description: Optimizar tu ecommerce con recomendaciones SEO específicas para Shopify 
image: https://emirodgar.com/cdn/images/og/auditoria.png
date: 31/10/2019
author: Emirodgar
tags: seo, auditoría, shopify
lang: es_ES
permalink: shopify-seo

---

# Guía SEO pra Shopify

Actualmente cerca del 4,5% de los principales ecommerces del mundo hacen uso de Shopify como plataforma de comercio electrónico. 

En esta guía quiero trasladar las principales recomendaciones SEO que he trabajado en portales Shopify. Algunas serán comunes a otros portales, otras son específicas de esta plataforma.

## Puntos a trabajar dentro de Shopify

Por defecto -y sin una configuración adecuada- Shopify, los puntos que debemos trabajar y mejorar serán:

 ### Evitar contenido duplicado debido a la arquitectura y enlazado interno.

Por defecto podemos encontrarnos con duplicidades dentro de Shopify de la siguiente manera:

 - Duplicidad de productos: vigilemos las URLs de `/products/` y `collections/.*/products/` ya que a veces se generan duplicidades al no establecer bien la etiqueta canónica. 
 - **Paginación de productos**: debemos evitar que éstas sean indexables aunque sí debemos permitir que Google acceda a las mismas.
 - **Variantes de un mismo producto**: mucho cuidado cuando generamos múltiples variantes de un producto que apenas aportan valor diferencial. Por ejemplo, diferentes colores, tamaños o cambios nimios. Es preferible trabajarlo a nivel de contenido sobre una única página que crear múltiples. Recomiendo [leer esta guía](https://www.searchenginejournal.com/seo-best-practices-for-color-variations/265323/) para profundizar tanto en el problema como en la solución.
 
 En el caso de que no seamos capaces de limitar los accesos a nivel técnico, podemos hacer uso del [robots.txt para no permitir el rastreo](https://help.shopify.com/en/manual/promoting-marketing/seo/hide-a-page-from-search-engines) pero ojo, eso no evitará su indexación. Para ello necesitaremos aplicar la etiqueta noindex.

En el caso de Shopify, debemos programarlo directamente desde el template de la siguiente manera:

    {% if template contains 'search' %}
    <meta name="robots" content="noindex">
    {% endif %} 

Lógicamente necesitaremos especificar cada caso (condición) en la que queramos que aparezca el noindex y por lo tanto dichas URLs no sean indexadas.

El robots.txt debería ser usado únciamente para evitar el acceso a las siguientes secciones:

-   Área de administración
-   Checkout
-   Pedidos
-   Carro de la compra
-   Búsquedas internas

### Redireccionar páginas antiguas

Cuando dejamos atrás una página o queremos consolidar varias para evitar contenido duplicado, debemos hacerlo a través de una redirección 301. 

Por desgracia no hay una forma -a excepción del servidor web- para hacerlo de forma automática por lo que la única opción que nos queda es implementarlas de forma individual desde 

    Tienda Online > Navegación > Redirecciones


### Añadir datos estructurados, principalmente de breadcrumb y productos.

Los datos estructurados nos ayudarán a transmitir información relevante a los buscadores y facilitar por tanto la rápido acceso a datos clave asociados tanto al producto como a la navegación del sitio.

Los que recomiendo incluir son:



 - Gestionar adecuadamente las páginas asociadas a las versiones del producto.
 - Comprimir y optimizar las imágenes.
 - Ajustar las apps necesarias para que el tiempo de carga 

 
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTgzNzEzNjk1NSw0MTA1MDQ2MDksNTcyOD
k4NzU3XX0=
-->