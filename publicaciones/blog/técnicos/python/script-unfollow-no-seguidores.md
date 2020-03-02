---
description: Guía de instalación para comenzar a trabajar con Python
lang: es_ES
author: Emirodgar
sitemap: 1
feed: 1
folder: programacion
date: 16/01/2020
image: https://emirodgar.com/cdn/images/og/marketing-digital.png
permalink: script-python-twitter-unfollow

---

# Script en Python para hacer unfollow de aquellos que no nos siguen

Si llevamos muchos años en Twitter y seguimos a mucha gente suele ser complicado atender a todos ellos y a menudo tenemos que recurrir a listas para estar al tanto de lo que realmente nos interesa.

Para poder hacer un poco de limpieza, podemos programar un script en Python que nos ayude a despejar nuestros seguidos de gente que no nos sigue de vuelta aunque este script se puede adaptar fácilmente para limpiar también nuestro *timeline* de aquelos perfiles que no publican, que no interactúan con nosotros o que tienen métricas *SPAM*. 

Una vez [instalado Python](https://emirodgar.com/instalar-python) en nuestro ordenador, creamos el script: unfollow.py.

Para este script usaremos la librería tweepy por lo que el primer paso será importarla y acto seguido preparar un array con los datos de acceso a nuestro perfil.

```python
import tweepy
config = {
        "screen_name": "Emirodgar",
        "CONSUMER_KEY": "XXXX",
        "CONSUMER_SECRET": "XXXXX",
        "ACCESS_TOKEN": "XXXX-XXXX",
        "ACCESS_SECRET": "XXXX"
}
```
El siguiente paso será crear la conexión de nuestro perfil con Twitter a través de su A

```python
auth = tweepy.OAuthHandler(config["CONSUMER_KEY"], config["CONSUMER_SECRET"])
auth.set_access_token(config["ACCESS_TOKEN"], config["ACCESS_SECRET"])

api = tweepy.API(auth)
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2MzQ3NzU0NjgsMTUyODEwNjA1MywtND
IwMDQxMjQ0XX0=
-->