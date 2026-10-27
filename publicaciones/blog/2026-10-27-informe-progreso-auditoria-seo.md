---
title: Cómo convertir una auditoría SEO técnica en un informe de progreso
description: Una auditoría es una foto y no dice si el sitio mejora o empeora. Te cuento cómo montar un registro de hallazgos que sobreviva a cada rastreo, por qué las cifras suben aunque trabajes bien y qué poner en el informe mensual.
image: https://emirodgar.com/cdn/images/og/auditoria.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 27-10-2026
folder: seo
permalink: informe-progreso-auditoria-seo

---

Entregas una [auditoría SEO](https://emirodgar.com/auditoria-seo) con 300 incidencias. Tres meses después repites el rastreo y salen 310. El cliente solo ve el número, y el número dice que no has hecho nada.

Pasa con más frecuencia de la que se reconoce, y casi nunca es un problema técnico. Es un problema de cómo se cuenta el trabajo. Una auditoría es una foto, y una foto no enseña la dirección. Mike Hakob lo cuenta desde la óptica de una agencia en [Sitebulb](https://sitebulb.com/resources/guides/technical-seo-audit-reports-how-to-turn-them-into-client-retention-tools/): comparar rastreos permite responder qué ha cambiado. Hasta ahí coincido. Lo que sigue es cómo lo monto yo, porque comparar dos rastreos es solo el punto de partida.

## Primer problema: las cifras suben aunque trabajes bien

Antes de enseñar una comparación hay que saber por qué dos rastreos no son comparables sin más. Estas son las causas habituales:

- **Cambió el alcance del rastreo.** Si el segundo rastreo llega a más URLs (activaste JavaScript, ampliaste el límite, añadiste el sitemap, entraste en una sección que antes no veías), aparecen incidencias que ya existían y no se habían visto. Parece una regresión y es visibilidad.
- **Cambió la configuración.** Otro user-agent, otra velocidad, otro tratamiento de parámetros o de canónicas. Guarda la configuración del rastreo junto al informe, igual que guardas el resultado.
- **El sitio creció.** Cien productos nuevos con el mismo fallo de plantilla suman cien incidencias nuevas aunque el fallo sea uno.
- **Se arregló algo y se destapó otra cosa.** Corriges una cadena de redirecciones y por fin se rastrea la sección que había detrás.

Por eso en cada informe fijo una cabecera: fecha, herramienta, configuración y número de URLs rastreadas. Si ese número ha cambiado de forma notable, lo primero que digo es que la comparación tiene un asterisco.

## Contar plantillas, no URLs

Un recuento de incidencias premia al sitio pequeño y castiga al grande. Cuenta las incidencias como **causas**, no como URLs afectadas: "las fichas de producto no tienen canónica" es una incidencia, aunque afecte a 4.000 páginas. Con ese criterio, pasar de 300 a 310 puede ser 12 causas resueltas y 22 nuevas, y eso se explica.

Para decidir qué va arriba conviene cruzar cada causa con dos datos que el cliente entiende:

1. **Cuántas URLs afecta**, y qué parte de ellas recibe clics en Google Search Console.
2. **Qué sección es**, según lo que aporta al negocio (categorías que venden, blog que capta, páginas legales que no mueven nada).

Una incidencia en 4.000 URLs sin un solo clic importa menos que una en 20 páginas que traen el 30 % del tráfico. La herramienta de rastreo no te lo dice, así que hay que juntarlo a mano o con un script.

## El registro de hallazgos

Lo que propongo es dejar de tratar la auditoría como un documento y llevar un registro vivo, una hoja con una fila por causa. Estas son las columnas:

| Columna | Para qué sirve |
|---|---|
| ID estable | Que la causa se llame igual en todos los informes |
| Descripción y plantilla afectada | Qué falla y dónde |
| Fecha de detección | Desde cuándo se conoce |
| Estado | Abierta, en desarrollo, resuelta, verificada, descartada |
| Responsable | Quién tiene que hacer algo (cliente, desarrollo, contenido, tú) |
| URLs y clics afectados | Para priorizar con datos |
| Fecha de resolución y de verificación | Casi nadie lo anota, y es lo que evita discusiones |

Hay dos estados que importan más de lo que parece. **Verificada** no es lo mismo que resuelta: resuelta es que dicen que lo han hecho, verificada es que lo has visto en un rastreo posterior. Y **descartada** necesita un motivo, porque dentro de un año alguien preguntará por qué no se arregló aquello y tendrás la respuesta.

El ID estable resuelve justo la pregunta de "¿qué pasó con los problemas antiguos?". En el informe no hay una lista nueva: hay las mismas causas con su estado actualizado y, al final, las que han aparecido desde el último rastreo.

## Qué cabe en una página

Un informe mensual debería caber en una página y leerse en este orden:

1. **Una frase de dirección.** Mejora, se mantiene o empeora, y por qué.
2. **Causas resueltas y verificadas este periodo**, con el impacto esperado. Dicho como esperado, no como conseguido.
3. **Causas nuevas**, separando las que son consecuencia de un cambio en el sitio de las que son visibilidad nueva por cambiar el alcance del rastreo.
4. **Bloqueos**: lo que está parado y a quién espera. Importa porque a veces el motivo del retraso no es el consultor.
5. **Lo siguiente**: máximo tres acciones, con responsable y fecha.

El resto (el listado completo, los gráficos, el detalle por URL) va a un anexo. Un informe de 40 páginas se archiva sin abrirlo.

## Rastrea también después de cada despliegue

Un rastreo mensual descubre el problema semanas después de que lo introduzca alguien. Para sitios con cambios frecuentes, lo más rentable es un rastreo corto tras cada publicación relevante (plantilla, cambio de navegación, nuevo módulo), comparado con el anterior y centrado en lo crítico: códigos de respuesta, canónicas, `noindex`, robots.txt, enlaces internos y datos estructurados.

Eso convierte el informe en algo distinto. Ya no dices "han aparecido 20 errores", sino "el despliegue del jueves quitó la canónica de las fichas". Es la misma lógica de comparar antes y después que se usa en [una migración](https://emirodgar.com/migracion-seo), aplicada a la vida normal de la web y no a un cambio puntual.

## Qué no prometer

Resolver una incidencia técnica no equivale a más tráfico, y conviene que el cliente lo sepa desde el principio. Corregir una canónica o una cadena de redirecciones reduce un riesgo o quita una fricción, pero lo que ocurra en clics depende de muchas cosas más. Por eso anoto cada cambio importante con su fecha en las gráficas de Search Console y hablo de coincidencias en el tiempo, no de causas. Si mejora, lo cuento. Si no mejora, también, y explico por qué sigo creyendo que valía la pena hacerlo.

Y una cautela sobre el argumento comercial: se suele decir que un buen reporting retiene clientes. En la [encuesta de AgencyAnalytics de 2026](https://agencyanalytics.com/agency-benchmarks-2026), que cita Hakob, el 76 % de los profesionales de agencia lo considera muy importante para retener. Es una percepción de agencias, no una medición de retención, y un informe brillante no compensa un trabajo que no mueve nada. Si el informe solo sirve para que no te echen, el problema está antes del informe.

## Conclusiones

- Una auditoría muestra el estado. Para mostrar la dirección necesitas el mismo registro actualizado en cada ciclo.
- Antes de comparar dos rastreos, comprueba que el alcance y la configuración son los mismos.
- Cuenta causas, no URLs, y priorízalas con clics y valor de negocio.
- Distingue entre resuelta y verificada, y anota por qué descartas lo que descartas.
- Un informe de una página que responda "mejora o empeora y qué hacemos ahora" vale más que cuarenta con el listado completo.
