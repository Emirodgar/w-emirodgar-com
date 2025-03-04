---
title: Guía SEO para Shopify 
description: Optimizar tu ecommerce con recomendaciones SEO específicas para Shopify 
image: https://emirodgar.com/cdn/images/og/auditoria.png
layout: emirodgar_post
author: Emirodgar
sitemap: 1
feed: 1
folder: seo
date: 27/01/2022
date_modified: 04/03/2025
lang: es_ES
permalink: shopify-seo

---

Actualmente cerca del 4,5% de los principales ecommerces del mundo hacen uso de Shopify como plataforma de comercio electrónico. 

En esta guía quiero trasladar las principales recomendaciones SEO que he trabajado en portales Shopify. Algunas serán comunes a otros portales, otras son específicas de esta plataforma.

## Evitar contenido duplicado debido a la arquitectura y enlazado interno

Por defecto podemos encontrarnos con duplicidades dentro de Shopify de la siguiente manera:

 - **Duplicidad de productos**: vigilemos las URLs de `/products/` y `collections/.*/products/` ya que a veces se generan duplicidades al no establecer bien la etiqueta canónica. Es crucial dejar sólo una versión indexable y asegurarnos de que Google entiende bien la canonical. Para ello será importante reforzar el enlazado interno de esa versión.
 - **Paginación de productos**: debemos evitar que éstas sean indexables aunque sí debemos permitir que Google acceda a las mismas. Por tanto tendrán que tener la metaetiqueta `noindex, follow`
 - **Variantes de un mismo producto**: mucho cuidado cuando generamos múltiples variantes de un producto que apenas aportan valor diferencial. Por ejemplo, diferentes colores, tamaños o cambios nimios. Es preferible trabajarlo a nivel de contenido sobre una única página que crear múltiples. Recomiendo [leer esta guía](https://www.searchenginejournal.com/seo-best-practices-for-color-variations/265323/) para profundizar tanto en el problema como en la solución. 

Cada ecommerce tiene un mercado, público objetivo y estrategia digital diferente por lo que las recomendaciones genéricas deben adaptarse. En el caso de que nuestros productos se busquen asociados a colores, será importante generar una versión específica para cada uno de ellos puesto que de esa forma podremos optar a una captación relevante.

En la siguiente imagen podemos ver un ejemplo de múltiples búsquedas de productos con colores para los que no estamos bien posicionados y cuya captación es inexistente puesto que sólo indexamos una versión de color y además es la misma para todos los idiomas. 

 ![Caso de éxito migración SEO - Emirodgar](https://emirodgar.com/cdn/images/posts/gsc-colores-shopify.jpg){:class="img-responsive"}

Por ello, personalizar cada "modelo + color" tanto en contenido como en idioma en este caso es crucial para poder aspirar a la máxima captación posible.

### Cómo bloquear la indexación de URLs en Shopify
 
Como medida inicial antes de que se haya indexado, podemos hacer uso del [robots.txt para no permitir el rastreo](https://help.shopify.com/en/manual/promoting-marketing/seo/hide-a-page-from-search-engines) pero ojo, eso no garantiza que no sea indexado si Google lo considera de valor. Por ello necesitaremos aplicar la **etiqueta noindex**.

En el caso de Shopify, la etiqueta noindex debe ser programada directamente desde el template de una forma similar a la expuesta a continuación:

```
{ % if template contains 'search' % }
    <meta name="robots" content="noindex">
{ % endif % } 
```

En el ejemplo anterior estamos bloqueando la indexación de las páginas de búsqueda por lo que el código deberá ser actualizado para adaptarse a aquellas partes que queramos que no sean indexadas.

### Accesos bloqueados a través del robots.txt

El robots.txt debería ser usado únciamente para evitar el acceso a las siguientes secciones que requieren de un proceso de identificación previo o cuyas páginas tienen escaso valor SEO:

-   Área de administración
-   Checkout
-   Pedidos
-   Carro de la compra
-   Búsquedas internas

## Redireccionar páginas eliminadas

A medida que pasa el tiempo vamos actualizando, eliminando y creando nuevas URLs. Cuando dejamos atrás una página o queremos consolidar varias para evitar contenido duplicado, debemos hacerlo a través de una **redirección 301** para asegurarnos que la popularidad SEO asociada a las mismas no se pierde. 

Por desgracia Shopify no dispone de este comportamiento de forma automática por lo que la única opción que nos queda es implementarlas de forma individual desde: 

    Tienda Online > Navegación > Redirecciones


## Añadir datos estructurados, principalmente de breadcrumb y productos

Los datos estructurados nos ayudarán a transmitir información relevante a los buscadores y facilitar por tanto la rápido acceso a datos clave asociados tanto al producto como a la navegación del sitio.

Los que recomiendo incluir son:

 - [Productos](https://developers.google.com/search/docs/data-types/product): clave para cualquier ecommerce. Ofrecemos información relevante acerca del precio y otras características.
 - [Artículo](https://developers.google.com/search/docs/data-types/article): para las publicaciones del blog con el objetivo de aparecer en Google Discover y aportar información acerca de fechas de publicación y modificación.
 - [Breadcrumb](https://developers.google.com/search/docs/data-types/breadcrumb): para todo el sitio de cara a facilitar la navegación por el sitio.


### Comprimir y optimizar las imágenes

En cualquier ecommerce las imágenes son un factor clave y muy relevante. El hecho de que estén completamente optimizadas nos ayudará a que la navegación sea más fluida y la experiencia de los usuarios lo más adecuada posible.

Existen múltiples plugins para integrarse con Shopify, por ejemplo [Crush](https://crush.pics/platforms/shopify). Cualquiera que facilite la compresión de las imágenes será válido. También podemos de forma externa a Shopify con aplicaciones como https://squoosh.app/.

## Minimizar el uso de apps, plugins y extensiones

A mayor número de aplicaciones/plugins que tengamos instaladas, peor rendimiento ofrecerá nuestra tienda. Por ello recomiendo ajustar al mínimo y quedarnos únicamente con aquellas que consideremos cruciales.

En el caso de SEO, es recomendable hacer uso de aquellas que ofrecen múltiples funcionalidades (como es el caso de [Smart-SEO](https://apps.shopify.com/smart-seo)) que no instalar varias con una única funcionalidad.

Otras acciones que podemos llevar a cabo para garantizar un buen tiempo de carga y experiencia de los usuarios son:

- Hacer uso de un template rápido y ligero
- Usar imágenes pequeñas y adaptadas a nuestro template
- Evitar los carruseles

 
## Cómo solucionar la estructura de URLs por defecto de productos en Shopify

La estructura de URLs que Shopify genera por defecto para los productos no es precisamente la mejor opción desde el punto de vista del SEO. Cada vez que se añade un producto a una colección, Shopify genera una nueva ruta para ese producto basada en la colección a la que pertenece. Por ejemplo, un mismo producto podría tener estas URLs:

```
/collections/t-shirts/products/example-t-shirt

/collections/clothing/products/example-t-shirt

/collections/mens/products/example-t-shirt

/collections/all/products/example-t-shirt

/products/example-t-shirt
```

Si tienes una tienda con miles de productos y cientos de colecciones, la web puede acabar con un volumen enorme de URLs duplicadas que solo añaden ruido para los motores de búsqueda.

Shopify intenta solucionar esto añadiendo etiquetas `canonical` que indican a Google cuál es la URL principal, pero confiar únicamente en este método no es lo ideal. Google puede ignorar las etiquetas canonical si lo considera oportuno, así que lo mejor es darle directamente una única ruta para cada producto.

La buena noticia es que esta solución es bastante sencilla.

### Cómo arreglarlo

Instala una extensión como `EZFY Theme File Search` o `Liquify Shopify Code Search` para buscar dentro del código de tu tema.

Busca el siguiente código dentro de los archivos `collection.liquid` o `product.liquid` (dependiendo del tema):

```
{{ product.url | within: collection }}
```

Sustituye ese fragmento por:

```
{{ product.url }}

```
Guarda los cambios.

Es posible que este código aparezca en varios lugares, así que asegúrate de cambiarlo en todos los archivos donde lo encuentres.

### Comprobar visualmente el resultado

Si quieres demostrarle a tu cliente lo importante que es este cambio, puedes hacer un rastreo de la web con Screaming Frog antes y después de aplicar la solución. Genera un gráfico 3D para mostrar visualmente cómo la estructura de URLs ha pasado de ser un caos a una versión mucho más limpia y eficiente.

