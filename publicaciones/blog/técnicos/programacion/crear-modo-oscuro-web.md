


# Cómo crear un modo oscuro en una web

Muchas páginas ofrecen la opción a sus visitantes de cambiar la plantilla web y pasar de una versión clara (generalmente blanca) a una oscura. 

¿Cómo podemos crear un modo oscuro para una página web? aunque iba a crear mis propios códigos, he partido de [este tutorial](https://flaviocopes.com/dark-mode/).

## Crear el enlace para cambiar

El primer paso será ofrecer el enlace que permita -a través de JavaScript y el almacenamiento interno del navegador- seleccionar la versión clara o la oscura.

```
<a href="#" onclick="localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')" title="Dark/light">Modo oscuro</a>
```

Con este enlace lo que estamos haciendo es seleccionar una versión u otra. 

```
<script id="hello-world"
  type="text/plain"
  target="amp-script">
  document.addEventListener('DOMContentLoaded', (event) => {
  ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
})
</script>
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4NzI5MzgwMTddfQ==
-->