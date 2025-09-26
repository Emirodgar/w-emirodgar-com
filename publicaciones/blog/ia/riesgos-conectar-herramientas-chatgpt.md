---
title: Riesgos de conectar tus herramientas a ChatGPT y otros agentes de IA
description: Conectar tus cuentas de correo, calendario o archivos a ChatGPT puede ser una mala idea. Descubre por qué estos agentes son un riesgo y cómo proteger tus datos.
image: https://emirodgar.com/cdn/images/og/estrategia-seo.png
layout: emirodgar_post
author: Emirodgar
lang: es_ES
sitemap: 1
feed: 1
date: 22-09-2025
folder: ia
permalink: riesgos-conectar-herramientas-chatgpt

---

Leía [este post](https://www.linkedin.com/posts/natzir_deja-de-conectar-herramientas-a-llms-como-activity-7376566546959163393-95En/) de Natzir en LinkedIn y me daba cuenta de los peligros a los que nos exponemos con los automatismos relacionados con [agentes de la IA](/agentes-ia).
**Conectar tu correo, calendario o archivos a un agente de IA puede ser más peligroso de lo que parece.** Dos incidentes recientes han demostrado lo fácil que resulta manipular a estos sistemas y conseguir que filtren información sensible sin que el usuario lo note.  

## ¿Por qué es un problema conectar herramientas a agentes de IA?  
Los agentes como ChatGPT no tienen **sentido común**. No distinguen entre un texto fiable y una instrucción maliciosa. Lo único que hacen es **obedecer lo que leen**. Y cuando les damos acceso directo a información personal o profesional (correo, calendario, documentos, etc.), el riesgo aumenta.  

El gran problema es que muchos usuarios conectan sus cuentas como **superusuarios permanentes**, con acceso a todo. En teoría, esto debería funcionar al revés: el agente debería ajustar sus permisos en función del origen del contenido. Si el texto viene de alguien desconocido, debería operar con mínimos privilegios. Si es tuyo, podría actuar con más confianza.  

## ¿Qué ataques reales se han visto ya?  

### ¿Qué pasó con ShadowLeak?  
En este ataque, el truco era tan simple como **esconder instrucciones dentro de un correo electrónico**. El atacante enviaba un email con texto oculto en HTML (letras en blanco, texto minúsculo, etc.).  

Cuando el usuario pedía al agente algo tan inocente como *“resúmeme mis correos”*, el sistema leía también esas instrucciones invisibles y acababa enviando información personal (PII) al atacante. Todo esto ocurría **dentro de los servidores de OpenAI**, sin que el usuario lo viera ni recibiera alertas.  
[Enlace al caso ShadowLeak](https://lnkd.in/dD8ArV2k).  

### ¿Qué pasó con el ataque al calendario?  
En este caso, ni siquiera hacía falta que aceptaras la invitación. Un atacante podía enviarte un evento con un **prompt malicioso en la descripción**. Si luego pedías al agente *“prepárame el día de mañana”*, este leía tu agenda, procesaba el ataque y terminaba filtrando tus datos.  
[Enlace al caso del calendario](https://lnkd.in/dJa-Kffe).  

## ¿Qué es la "tríada letal" y por qué debes tener cuidado?  
Los expertos llaman a esta combinación la **“tríada letal”**:  

- **Datos privados** (como correos, calendarios o documentos).  
- **Contenido no confiable** (texto que alguien te envía y que tu agente puede leer).  
- **Capacidad de comunicarse fuera** (el agente con acceso a internet o a tus sistemas).  

Si unes estos tres factores, el agente se convierte en un **proxy con tus permisos**, capaz de hacer cosas que nunca aprobarías conscientemente.  

## Entonces, ¿debemos dejar de usar IA?  
No se trata de dejar de usarla, sino de **usar la IA con cabeza**. Conectar todo por defecto como si fuese 100% fiable es un error que puede salir caro.  

Algunas recomendaciones básicas serían:  

- **Evita dar acceso total a tus cuentas**.  
- **Aísla el uso de agentes**: si quieres probar, hazlo en local y sin conexión a internet.  
- **Controla los privilegios**: no des a un agente más permisos de los que realmente necesita.  

## Conclusión  
La IA es una herramienta potente, pero no infalible. **Conectar tus datos sensibles sin restricciones a un agente como ChatGPT es abrir la puerta a riesgos innecesarios.**  

No se trata de desconfiar de la tecnología, sino de recordar que **la seguridad empieza por cómo la usamos nosotros**. La próxima vez que pienses en enlazar tu correo, calendario o Drive a un agente de IA, pregúntate primero si realmente merece la pena.  
