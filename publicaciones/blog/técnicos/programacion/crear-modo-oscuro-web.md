


# Cómo crear un modo oscuro en una web

Muchas páginas ofrecen la opción a sus visitantes de cambiar la plantilla web y pasar de una versión clara (generalmente blanca) a una oscura. 

¿Cómo podemos crear un modo oscuro para una página web?

## Crear el enlace para cambiar

El primer paso será ofrecer el enlace que permita -a través de JavaScript y el almacenamiento interno del navegador- seleccionar la versión clara o la oscura.

```
<a href="#" onclick="localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')" title="Dark/light">Modo oscuro</a>
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbOTc1MzQ0MTIyXX0=
-->