document.getElementById("data-button").addEventListener("click", () => {
  const url = "https://hp-api.onrender.com/api/characters"; // URL de la API de Harry Potter

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((character) => {
        const characterInfo = `
          <div class="card">
            <h2>${character.name}</h2>
            <img src="${character.image || "HP Logo.png"}" alt="${
          character.name
        }">
            <p>Especie: ${character.species}</p>
            <p>Casa: ${character.house || "Desconocida"}</p>
          </div>
        `;
        document.getElementById("character-info").innerHTML += characterInfo;
      });
    })
    .catch((error) => {
      console.error("Error al obtener los datos de los personajes:", error);
    });
});
