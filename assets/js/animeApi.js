// URL Api
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=00";
const IMGN = "https://pokeapi.co/api/v2/pokemon/";
const anime = document.getElementById("anime");
// let animes = document.getElementById("animes");//INPUT

// Obtener los resultados de la API

  //LA URL ES = A LA URL + LO QUE TENGA EL INPUT
  //api = api + animes.value.toLowerCase();
  //kob56y7
//animes.value = ""; //ESTO ES PARA QUE SE BORRE EL INPUT CUANDO SE ENVIE
const getData = (api) => {
return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      //en fill data se pone  los j son y en este caso toma algo de un json  la variable puede tener cualquier nombre 
      fillData(json);
    })
    

};

function getData2 (pokemon) {
 fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then((response) => response.json())
      .then((json) => {
        //en fill data se pone  los j son y en este caso toma algo de un json  la variable puede tener cualquier nombre 
        fillData2(data);
      })
    };

// Dibujar cards de personajes // Data recibe los Json
const fillData = (data) => {
  let html = "";
  //pj es el contador y ahí guarda la información
  data.forEach((pj) => {
    html += '<div class="col">';
    html += '<div class="card h-100" style="width: 12rem;">';
    html += `<img src="${pj.pokemon.sprites.front_default}" class="card-img-top" alt=""`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pj.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("dataCharacters").innerHTML = html;
};

// Sejecuta la API
anime.onclick = function() {
  getData(API);
};
//https://pokeapi.co/  //https://pokeapi.co/api/v2/pokemon?limit=20&offset=00
//json un array con 20 pokemones hacer lo que hemos hecho hasta ahora
//cards solo con el NAme

//reto taller  //sacar la imagen del pokemón    la url imagen tiene  info de otra api
//fetch  los pokemones con el api y el fetch que traiga los datos del pokemon


