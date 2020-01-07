


# Cookies SameSite: guía para entender cómo funcionan

Las cookies son, a día de hoy, la forma más utilizada para guardar y mantener información entre un usuario y una o varias páginas web. Éstas se guardan en el navegador (Chrome, Firefox, Edge, etc.) y normalmente se usan para guardar sesiones, preferencias en aplicaciones o seguimiento de analítica web.

Se componen de una clave y de un valor y de unas condiciones que le indican cuándo y cómo se debe utilizar dicha información.

    clave=valor
    nombre=emilio

Con el objetivo de preservar la privacidad de los usuarios, los navegadores han ido evolucionando y siendo más restrictivos a la hora de aceptar cookies.

## Tipos de cookies

Existen dos tipos de cookies: **first**-party y **third**-party.

Aquellas cookies generadas por la página web en la que estamos navegando serán consideradas como first-party (ya que son propias de dicha página) y las que correspondan a otra página sobre la que no estamos navegando, serán third-party.

## Atributo SameSite

El atributo SameSite nace como respuesta a la necesidad de especificar aquellas zonas grises que existen entre los dos tipos actuales de Cookies.

Este atributo puede tener valor (`Strict` o `Lax`) o puede no ser especificado (none).

### Valor SameSite None

Si no especificamos este atributo, por defecto será `none`. En este caso no estamos restringiendo la creación de la cookie y ésta se generará y almacenará en el nave en todos los casos. 

### Valor SameSite Strict

Si configuramos la cookie con SameSite `Strict` implicará que la cookie sólo se creará cuando el usuario esté en nuestra página navegando y la URL sea exactamente la misma para la que la cookie ha sido definida, es decir, funcionará como una first-party.

Si el usuario accede a nuestra web desde un enlace externo, por ejemplo a través del email o de otra web, la cookie no saltará por no tratarse de una petición inicial lanzada desde nuestro dominio.

### Valor SameSite Lax




<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3MDg3ODI3OCw2MTgwOTQ0MywyMDAyNj
c2NDQ4LDY4Nzg0MjYsLTE1ODE4MjA5NTEsNzMwOTk4MTE2XX0=

-->