const anime = document.getElementById("anime");
//const dataCharacters =document.getElementById("dataCharacters")

function obteniendoPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .then((data) => {
      contenHtml(data);
    });
}

function cantidadPokemon(pokes) {
  for (let i = 1; i < pokes; i++) {
    obteniendoPokemon(i);
  }
}

function contenHtml(pokemon) {
  const card = document.createElement("div");
  card.classList.add("card");

  const contenidoimg = document.createElement("div");
  contenidoimg.classList.add("img-container");

  const imagen = document.createElement("img");
  imagen.src = pokemon.sprites.front_default;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  card.appendChild(contenidoimg);
  card.appendChild(imagen);
  card.appendChild(name);

  dataCharacters.appendChild(card);
}

anime.onclick = function () {
  cantidadPokemon(21);
};

