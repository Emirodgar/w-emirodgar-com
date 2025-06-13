document.addEventListener("DOMContentLoaded", function () {
  const lista = document.getElementById("newsletters-list");
  
  fetch("data/newsletters.json")
    .then(response => {
      if (!response.ok) throw new Error("No se pudo cargar el archivo");
      return response.json();
    })
    .then(data => {
      lista.innerHTML = ""; // Limpiar el mensaje de carga
      if (data.length === 0) {
        lista.innerHTML = "<li>No hay newsletters disponibles.</li>";
      } else {
        data.forEach(nl => {
          const li = document.createElement("li");
          li.innerHTML = `
            <strong><a href="${nl.url}" target="_blank" rel="noopener">${nl.nombre}</a></strong>
            <br>
            Categoría: ${nl.categoria} | Seguidores: ${nl.seguidores}
          `;
          lista.appendChild(li);
        });
      }
    })
    .catch(error => {
      console.error("Error al cargar las newsletters:", error);
      lista.innerHTML = "<li>Hubo un error al cargar las newsletters.</li>";
    });
});
