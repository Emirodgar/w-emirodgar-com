---
title: Contacto
description: 
lang: es_ES
layout: emirodgar_post
author: Emirodgar
sitemap: 1
feed: 1
folder: estrategicos
category: marketing
date: 27/01/2022
date_modified: 11/09/2026
image: https://emirodgar.com/cdn/images/og/marketing-digital.png
permalink: contacto

---

## ¿Estás listo para vender más con tu negocio?

Gracias por interesarte en mis servicios. Cuéntame qué necesitas y te respondo personalmente en menos de 24-48h laborables.

<style>
.ct-thanks{max-width:560px;margin:0 0 24px;padding:16px 20px;background:#f0f7f2;border:1px solid #bfe0c9;border-radius:4px;color:#1a5c2e;font-size:15px}
.ct-form{max-width:560px;margin:0 0 40px;display:flex;flex-direction:column;gap:14px}
.ct-form[hidden]{display:none}
.ct-form label{display:flex;flex-direction:column;gap:6px;font-size:13px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:.04em}
.ct-form input,.ct-form select,.ct-form textarea{font:inherit;font-size:15px;font-weight:400;text-transform:none;letter-spacing:normal;color:#111;padding:12px 14px;border:1px solid #ccc;border-radius:4px;background:#fff;width:100%}
.ct-form input:focus,.ct-form select:focus,.ct-form textarea:focus{outline:2px solid #111;border-color:#111}
.ct-form textarea{resize:vertical}
.ct-form button{align-self:flex-start;padding:13px 28px;background:#111;color:#fff;border:2px solid #111;border-radius:30px;font-weight:700;font-size:15px;cursor:pointer;transition:background .2s ease,color .2s ease}
.ct-form button:hover{background:#fff;color:#111}
.ct-alt{max-width:560px;font-size:14px;color:#666;border-top:1px solid #eaeaea;padding-top:20px}
.ct-alt a{color:#111}
</style>

<div id="ct-thanks" class="ct-thanks" hidden>Gracias, tu mensaje se ha enviado correctamente. Te responderé personalmente en cuanto lo lea.</div>

<form action="https://formsubmit.co/emirodgar@gmail.com" method="POST" class="ct-form" id="ct-form">
  <input type="hidden" name="_subject" value="Nuevo contacto desde emirodgar.com">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_captcha" value="false">
  <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">
  <input type="hidden" name="_next" value="https://emirodgar.com/contacto?enviado=1">

  <label>Nombre
    <input type="text" name="Nombre" required>
  </label>

  <label>Email
    <input type="email" name="Email" required>
  </label>

  <label>¿Qué necesitas?
    <select name="Motivo" id="ct-motivo">
      <option value="">Selecciona una opción</option>
      <option value="Auditoría SEO gratuita">Auditoría SEO gratuita</option>
      <option value="Reducir mi inversión en PPC">Reducir mi inversión en PPC</option>
      <option value="Garantizar una migración">Garantizar una migración</option>
      <option value="Formar a mi equipo">Formar a mi equipo</option>
      <option value="Vender más">Vender más</option>
      <option value="Medir bien">Medir bien</option>
      <option value="Otro">Otro</option>
    </select>
  </label>

  <label>Cuéntame tu proyecto
    <textarea name="Mensaje" rows="5" required placeholder="Objetivos a corto/medio plazo, en qué punto está tu web hoy, cualquier cosa que me ayude a entender el punto de partida..."></textarea>
  </label>

  <button type="submit">Enviar</button>
</form>

<div class="ct-alt">
<p><b>¿Prefieres otra vía?</b></p>
<ul>
<li>Email: <a href="mailto:emirodgar@gmail.com">emirodgar@gmail.com</a></li>
<li>LinkedIn: <a href="https://es.linkedin.com/in/emirodgar" target="_blank" rel="noopener">perfil de Emirodgar</a></li>
<li>Teléfono: <a href="tel:+34923015199">(+34) 923 015 199</a></li>
</ul>
<p>Si necesitas ayuda con una <a href="estrategia-seo">estrategia</a> o <a href="auditoria-seo">auditoría SEO</a>, cuanto más claros tengas tus objetivos de negocio a corto y medio plazo, mejor podré valorar el proyecto desde el primer mensaje.</p>
</div>

<script>
(function () {
  var params = new URLSearchParams(window.location.search);
  var motivo = params.get('motivo');
  var map = {
    ppc: "Reducir mi inversión en PPC",
    migracion: "Garantizar una migración",
    formacion: "Formar a mi equipo",
    ventas: "Vender más",
    medicion: "Medir bien",
    auditoria: "Auditoría SEO gratuita"
  };
  if (motivo && map[motivo]) {
    var select = document.getElementById('ct-motivo');
    if (select) select.value = map[motivo];
  }
  if (params.get('enviado') === '1') {
    var thanks = document.getElementById('ct-thanks');
    var form = document.getElementById('ct-form');
    if (thanks) thanks.hidden = false;
    if (form) form.hidden = true;
  }
})();
</script>
