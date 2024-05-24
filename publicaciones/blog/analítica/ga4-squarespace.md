---
title: Configurar Google Analytics 4 Ecommerce en Squarespace 
description: Códigos para configurar desde GTM los eventos de view_item, add_to_cart y purchase
lang: es_ES
author: emirodgar
sitemap: 1
feed: 1
date: 24/05/2023
folder: estrategicos
layout: emirodgar_post
permalink: ga4-squarespace

---

Squarespace es una plataforma de creación y gestión de sitios web todo-en-uno que permite a los usuarios diseñar, construir y mantener sus propios sitios web sin necesidad de conocimientos técnicos avanzados. Es similar a Wix. Aunque trae su propio módulo de analítica, ofrece menos información y visibilidad que Google Analytics, por lo que suele ser recomendable implementar `GA4` para obtener un mayor análisis de nuestras ventas.

> Para este tutorial se ha realizado una implementación a través de Google Tag Manager, insertando los códigos asociados a cada evento.

La implementación que he realizado en mi cliente ha salido del [siguiente tutorial](https://github.com/martintaylorj/GA4-Ecommerce_Squarespace/tree/main), por lo que aquí me limitaré a explicar lo más básico (`view_item`, `add_to_cart` y `purchase`). Para abordar una implementación completa, seguid los pasos completos del tutorial expuesto y hacer extensible las explicaciones que he dado para estos tres eventos del módulo de comercio electrónico de GA4. 

## Crear etiqueta base - GA4 - EC - Main tag

El primer paso será crear la etiqueta base. Para ello utilizaremos el tipo de etiqueta `Google Analytics: evento de GA4`, e incluiremos el ID de medición de nuestra cuenta de Google Analytics 4.
Como será la etiqueta genérica que se lanzará en cualquier momento, dentro de nombre del evento debemos incluir `{{Event}}`.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/a5d862e1-ad35-4625-a669-ce08de4ba525){:class="img-responsive"}

Resumen:

- Nombre de etiqueta: `GA4 - EC - Main tag`
- Tipo de etiqueta: `Google Analytics: evento de GA4`
- Id de medición: `G-XXX` (sustituir por nuestra cuenta)
- Nombre del evento `{{Event}}`
- Comercio electrónico: Activar opción `Enviar datos de comercio electrónico`
- Fuente de datos: `Data Layer`

Esta etiqueta debe dispararse cuando ocurra cualquier evento relacionado con el comercio electrónico. Para ello, crearemos el siguiente activador:

- Nombre disparador: `Custom Event - EC`
- Tipo de activador: `Evento personalizado`
- Nombre del evento: `view_promotion|select_promotion|view_item_list|select_item|view_item|add_to_cart|view_cart|begin_checkout|remove_from_cart|purchase`
- Activar opción: `Utilizar una expresión regular que coincida con`
- Este activador se activa en: `Todos los eventos personalizados`

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/346173c9-6b2f-4caf-996c-2aeda8385ca8){:class="img-responsive"}

## Etiqueta view_item

> Ojo, porque aquí puede depender del template que tengamos instalado. En teoría, Squarespace lanza el evento `ssRawProductDetailPush` cuando se visualiza un producto, pero no siempre he sido capaz de reproducirlo.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/bd279b44-547e-4895-bc8e-fc43cea08baf){:class="img-responsive"}


- Nombre de etiqueta: `GA4 - EC - HTML - view_item`
- Tipo de etiqueta: `HTML personalizado`
- Contenido de etiqueta:

```
<script>
    //view_item: This event signifies that product details were shown to the user. Use this event to discover the most popular items viewed. This will work on the Quick View or the Product Summary

    function productViewDetailsPush() {
        window.dataLayer = window.dataLayer || [];

        // Create an array to store product data
        var products = [];
        var itemListName = null;

        // Select all elements with class "ProductList-meta" to access all of the product blocks (as the parent element)
        var productListBlocks = document.querySelectorAll('.ProductItem-summary');

        // Loop through each product and collect data
        productListBlocks.forEach(function (productListBlocks) {
            // Find the child element with the class "ProductList-title" and get its inner text
            var productTitle = productListBlocks.querySelector('.ProductItem-details-title').innerText;
            var productPrice = productListBlocks.querySelector('.product-price').innerText;

            /* Get the title and price text
            var productTitle = productText.innerText;
            var productPrice = productPriceElement.innerText;
        */
            //Distinguish between the full page product summary and the quick view product summary:

            var productSummaryType = null;

            if (document.querySelector(".sqs-product-quick-view-content")) {
                productSummaryType = "Quick View"
            } if (document.querySelector(".sqs-product-quick-view-content")) {
                productSummaryType = "Quick View"
            }

            if (document.querySelector(".sqs-product-quick-view-content")) {
                itemListName = "Product Summary - Quick View"
            } else {
                itemListName = "Product Summary - Full Page"
            }

            // Add the product data to the array
            products.push({
                item_name: productTitle,
                price: productPrice,
                item_list_name: itemListName

            });
        });

        // Push the array of products into dataLayer
        window.dataLayer.push({
            'event': 'view_item',
            ecommerce: {
                items: products
            }
        });
    }

    // Call the function to push the data
    productViewDetailsPush();
</script>

```

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/59d4a3f2-dd17-4f62-8800-70725336eb12){:class="img-responsive"}


- Nombre disparador: `EC - ssRawProductDetailPush`
- Tipo de activador: `Evento personalizado`
- Nombre del evento: `ssRawProductDetailPush`
- Este activador se activa en: `Todos los eventos personalizados`

## Etiqueta add_to_cart

- Nombre de etiqueta: `GA4 - EC - HTML - add_to_cart`
- Tipo de etiqueta: `HTML personalizado`
- Contenido de etiqueta:

  ```
  <script>
    var isPushed = false;

    window.dataLayer = window.dataLayer || [];
    var productElement = event.target.closest(".ProductItem-summary");
    var productTitle = productElement.querySelector(".ProductItem-details-title").innerText;
    var productPrice = productElement.querySelector(".product-price").innerText;
    var productQuantity = productElement.querySelector(".product-quantity-input input").value;

    var itemvariantColorRaw = productElement.querySelector('[data-variant-option-name="Color"]');
    var itemvariantSizeRaw = productElement.querySelector('[data-variant-option-name="Size"]');

    var itemVariantColor = null; // Initialize variables with default values
    var itemVariantSize = null;

    if (itemvariantColorRaw) {
        itemVariantColor = itemvariantColorRaw.value;
        //console.log("testcolor is: " + testColorValue);
    }
    if (itemvariantSizeRaw) {
        itemVariantSize = itemvariantSizeRaw.value;
        //console.log("testsize is: " + testSizeValue);
    }
    var variantConcatenated = (itemVariantColor && itemVariantSize) ? itemVariantSize + ' | ' + itemVariantColor : (itemVariantSize || itemVariantColor || null);


    if (!isPushed) {
        dataLayer.push({
            'event': 'add_to_cart',
            'ecommerce': {
                'currencyCode': 'USD',
                'items': [
                    {
                        'item_name': productTitle,
                        'price': productPrice,
                        'quantity': productQuantity,
                        'item_variant': variantConcatenated || null, // Handle both null values
                        'item_variant_color': itemVariantColor,
                        'item_variant_size': itemVariantSize,
                    }
                ]

            }
        });
        isPushed = true; 
    }</script>

  ```

Nuestra etiqueta quedaría de la siguiente manera:

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/e7b4ce3c-47dd-4330-90c0-d10a915d37c7){:class="img-responsive"}


El disparador para esta etiqueta debe tener los siguientes valores:

- Nombre disparador: `EC - add_to_cart`
- Tipo de activador: `Clic - todos los elementos`
- Este activador se activa en: `Click Text contiene AÑADIR AL CARRITO`

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/c3e6c8d0-58f7-4c45-9b5b-7bbdbc50fd1e){:class="img-responsive"}

## Etiqueta purchase

Para registrar la compra, deberemos crear lo siguiente:

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/e0c754ed-8181-4716-b10a-5fd8310564e8){:class="img-responsive"}


- Nombre de etiqueta: `GA4 - EC - HTML - purchase`
- Tipo de etiqueta: `HTML personalizado`
- Contenido de etiqueta:

```
<script>
    fetch(window.location.href).then(function (pageContents) {
        pageContents.text().then(function (bodyText) {
            var parser = new DOMParser();
            var parsed = parser.parseFromString(bodyText, "text/html");

            var orderJson = JSON.parse(parsed.querySelector("script#bootstrap-data").innerText);
            productOrderPush(orderJson);
        });
    });

    function productOrderPush(orderJson) {
        var productListArray = buildProductDataLayerItemArray(orderJson);

        dataLayer.push({

            'event': 'purchase',
            'ecommerce': {
                transaction_id: orderJson.order.orderNumber,
                value: orderJson.order.subtotal.value,
                tax: orderJson.order.taxTotal.value,
                shipping: orderJson.order.shippingTotal.value,
                currency: orderJson.order.subtotal.currency,
                //coupon: "SUMMER_SALE",
                items: productListArray
            }
        });
    };

    function buildProductDataLayerItemArray(orderJson) {

        var dlItemArray = [];

        var itemArray = orderJson.order.entries;

        for (var i = 0; i < itemArray.length; i++) {
            var productID = itemArray[i].id;
            var productTitle = itemArray[i].name;
            var productPrice = itemArray[i].purchasePrice.value;
            var productQuantity = itemArray[i].quantity;

            var itemVariantColor = null;
            var itemVariantSize = null;

            var variantArray = itemArray[i].variantOptions;

            var variantConcatenated = null;
            for (var k = 0; k < variantArray.length; k++) {
                // Declare variant object:

                var variantName = variantArray[k].name;
                var variantValue = variantArray[k].value;

                if (variantName === 'Size') {
                    itemVariantSize = variantValue;
                } else if (variantName === 'Color') {
                    itemVariantColor = variantValue;
                }
                variantConcatenated = (itemVariantColor && itemVariantSize) ? itemVariantSize + ' | ' + itemVariantColor : (itemVariantSize || itemVariantColor || null);

            }

            var productObject = {
                'item_name': productTitle,
                'item_id': productID,
                'price': productPrice,
                'quantity': productQuantity,
                'item_variant': variantConcatenated,
                'item_variant_color': itemVariantColor,
                'item_variant_size': itemVariantSize,
            };

            dlItemArray.push(productObject);
        }

        return dlItemArray;
    };
</script>

```

## Visualizando los resultados

Una vez realizamos los cambios, podremos validar cómo en el módulo de comercio electrónico de GA4 comienzan a aparecer los datos asociados a ventas.

![image](https://github.com/Emirodgar/w-emirodgar-com/assets/4302127/a7da000b-173e-415b-a63a-e7d93821bf0a){:class="img-responsive"}



