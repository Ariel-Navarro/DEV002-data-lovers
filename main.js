import { aToZ, zToA, charactersAlive, charactersDead, speciesHuman, speciesHalfGiant, spellsZToA, spellsCharm, spellsHex, spellsJinx, spellsTransportation, alReves, potionsDesc } from './data.js';
import data from './harrydata.js';

// Obtenemos los elementos para después hacer los eventos
const test1 = document.querySelector('.test');

const selectCharacters = document.querySelector('#chooseCharacters');

const selectSpells = document.querySelector('#segundoSelect');

const selectBooks = document.querySelector('#tercerSelect');

const selectPotions = document.querySelector('#cuartoSelect')

// Guardamos en una función los templates porque son repetitivos
let templateCharacters = (arr) => {
  arr.forEach(element => {
    const createElement = document.createElement("div")
    createElement.setAttribute("class", 'contenedorCard');
    const templateTest = `
    <div id="template">
    <img  class="imagen" src="imag/incognito.jpg">
       <div class="caja">
       <h4 class="data"> ${element.name}</h4>
       <p class="data">Ancestry: ${element.species}</p>
      <p class="data">Gender: ${element.gender}</p>
       <p class="data">Alive: ${element.alive}</p>
       <p class="data">Specie: ${element.species}</p>
        </div>
   </div>`;

    createElement.innerHTML = templateTest;

    test1.appendChild(createElement);

    return
  });
}

let templateSpells = (arr) => {
  arr.forEach(element => {
    const createElement = document.createElement("div")
    createElement.setAttribute("class", 'contenedorCard');
    const templateTest = `
    <div id="template">  
      <img  class="imagen" src="imag/magic.png">
       <div class="caja">
       <h4 class="data"> ${element.name}</h4>
       ${element.other_name !== null ? `<p class="data">Other name: ${element.other_name}</p>` : `<p class="data">Other name: Unknown</p>`}
      ${element.description !== null ? `<p class="data">Other name: ${element.description}</p>` : `<p class="data">Description: Unknown</p>`}
      ${element.etymology !== null ? `<p class="data">Other name: ${element.etymology}</p>` : `<p class="data">Etymology: Unknown</p>`}
       <p class="data">Spell type: ${element.spell_type}</p>
      </div>
   </div>
    `;
    createElement.innerHTML = templateTest;
    test1.appendChild(createElement);
    return
  });
}

const templateBokks = (arr) => {
  arr.forEach(element => {
    const createElement = document.createElement("div")
    createElement.setAttribute("class", 'contenedorCard');
    const templateTest = `
    <div id="template">
    <img  class="imagenB" src="${element.img}">
       <div class="caja">
       <h4 class="data"> ${element.title}</h4>
          <p class="data">Release Day: ${element.releaseDay}</p>
          <p class="data">Autor: ${element.autor}</p>
          <p class="data">Description: ${element.description}</p>
        </div>
   </div>`;

    createElement.innerHTML = templateTest;

    test1.appendChild(createElement);

    return
  });
}

const templatePotion = (arr) => {
  arr.forEach(element => {
    const createElement = document.createElement("div")
    createElement.setAttribute("class", 'contenedorCard');
    const templateTest = `
    <div id="template">
    <img  class="imagen" src="imag/Pociones.jpg">
       <div class="caja">
       <h4 class="data"> ${element.name}</h4>
        <p class="data">Description: ${element.description}</p>
       </div>
   </div>`;

    createElement.innerHTML = templateTest;

    test1.appendChild(createElement);

  });
}
// Filtramos  a los personajes   --------------------------------

selectCharacters.addEventListener('change', () => {
  let valorOption = selectCharacters.value;

  if (valorOption == 'a-z') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const filtro = aToZ(data.characters)

    templateCharacters(filtro)

    // filtramos de Z-A

  } else if (valorOption == 'z-a') {

    const x = document.querySelector(".test")
    x.innerHTML = ""

    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const filterzToA = zToA(data.characters)


    templateCharacters(filterzToA)


    // Filtramos por personajes vivos
  } else if (valorOption == 'alive') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const alive = charactersAlive(data.characters)

    templateCharacters(alive)

    // Filtar por personajes muertos
  } else if (valorOption == "dead") {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const dead = charactersDead(data.characters);

    templateCharacters(dead)

    // Filtramos por especie humana
  } else if (valorOption == 'speciesHuman') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const aaa = speciesHuman(data.characters)

    templateCharacters(aaa)

    // Filtramos por especie half-giant
  } else if (valorOption == 'speciesHalfGiant') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const halfGiant = speciesHalfGiant(data.characters)

    templateCharacters(halfGiant)

  }
});

// Mostrar la data en los botones de personajes
document.getElementById("btnCharac").addEventListener("click", () => {
  document.getElementById('search').style.display = 'block';
  document.getElementById('lupa').style.display = 'block';


  const x = document.querySelector(".test")
  x.innerHTML = ""
  const accederAlDom = document.getElementById('home')
  accederAlDom.style.display = 'none';
  const cardConteiner = document.getElementById('cardConteiner');
  cardConteiner.style.display = 'block';
  document.getElementById("contador").innerHTML = `<spam class="countBlue">You are viewing:</spam> ${data.characters.length} characters`;
  const characters = data.characters;
  templateCharacters(characters)
});

// seleccionamos los HECHIZOS de la A-Z  -----------------------------------

selectSpells.addEventListener('change', () => {

  const x = document.querySelector(".test")
  x.innerHTML = ""

  let valorOption = selectSpells.value;

  if (valorOption == 'spellsa-z') {
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const spells = data.spells;
    templateSpells(spells)

  } else if (valorOption == 'spellsz-a') {
    const x = document.querySelector(".test")
    x.innerHTML = ""

    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const hechizosAtoZ = spellsZToA(data.spells)

    templateSpells(hechizosAtoZ)

    // Filtramos los hechizos de tipo encanto
  } else if (valorOption == 'spellTypeCharm') {
    const x = document.querySelector(".test")
    x.innerHTML = ""

    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const encanto = spellsCharm(data.spells)

    templateSpells(encanto)

    // Filtramos los hechizos de tipo embrujo
  } else if (valorOption == 'spellTypeHex') {
    const x = document.querySelector(".test")
    x.innerHTML = ""

    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const hex = spellsHex(data.spells)

    templateSpells(hex)

    // Filtramos los hechizos de tipo maleficio
  } else if (valorOption == 'spellTypeJinx') {
    const x = document.querySelector(".test")
    x.innerHTML = ""

    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const maleficio = spellsJinx(data.spells)

    templateSpells(maleficio)

    // Filtramos los hechizos de tipo transportación
  } else if (valorOption == 'spellTypeTransportation') {
    const x = document.querySelector(".test")
    x.innerHTML = ""

    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const escoba = spellsTransportation(data.spells)

    templateSpells(escoba)

  }

});

// Mostrar la data en los botones de hechizos
document.getElementById("btnSpells").addEventListener("click", () => {
  document.getElementById('search').style.display = 'none';
  document.getElementById('lupa').style.display = 'none';
  const x = document.querySelector(".test")
  x.innerHTML = ""
  const accederAlDom = document.getElementById('home')
  accederAlDom.style.display = 'none';
  const cardConteiner = document.getElementById('cardConteiner');
  cardConteiner.style.display = 'block';
  document.getElementById("contador").innerHTML = `<spam class="countBlue">You are viewing:</spam> ${data.spells.length} spells`;
  const spells = data.spells;
  templateSpells(spells)
});

//Mostramos los libros del mas antiguo
selectBooks.addEventListener('change', () => {
  let valorOption = selectBooks.value;
  if (valorOption == 'recently') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const libros = data.books

    templateBokks(libros)

  } else if (valorOption == 'oldest') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';


    const oldest = alReves(data.books)

    templateBokks(oldest)

  }
})

//Mostrar la data en el boton de libros
document.getElementById("btnBooks").addEventListener("click", () => {
  document.getElementById('search').style.display = 'none';
  document.getElementById('lupa').style.display = 'none';
  const x = document.querySelector(".test")
  x.innerHTML = ""
  const accederAlDom = document.getElementById('home')
  accederAlDom.style.display = 'none';
  const cardConteiner = document.getElementById('cardConteiner');
  cardConteiner.style.display = 'block';
  document.getElementById("contador").innerHTML = `<spam class="countBlue">You are viewing:</spam> ${data.books.length} books`;
  const books = data.books;
  templateBokks(books)
});

//Mostrar filtro posiones
selectPotions.addEventListener('change', () => {
  let valorOption = selectPotions.value;
  if (valorOption == 'ascendiente') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const pociones = data.potions

    templatePotion(pociones)

  } else if (valorOption == 'descendiente') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const pocionesDes = potionsDesc(data.potions)

    templatePotion(pocionesDes)

  }
})

//Mostrar la data en el boton de posiones
document.getElementById("btnPotions").addEventListener("click", () => {
  document.getElementById('search').style.display = 'none';
  document.getElementById('lupa').style.display = 'none';
  const x = document.querySelector(".test")
  x.innerHTML = ""
  const accederAlDom = document.getElementById('home')
  accederAlDom.style.display = 'none';
  const cardConteiner = document.getElementById('cardConteiner');
  cardConteiner.style.display = 'block';
  document.getElementById("contador").innerHTML = `<spam class="countBlue">You are viewing:</spam> ${data.potions.length} potions`;
  const potions = data.potions;
  templatePotion(potions)

});

document.getElementById('search').style.display = 'none';
document.getElementById('lupa').style.display = 'none';

// Dandole funcionalidad a la barra de búsqueda
document.addEventListener('keyup', e => {
  const x = document.querySelector(".test")
  x.innerHTML = ""

  const o = document.querySelector("#home")
  o.innerHTML = ""


  if (e.target.matches('#search')) {

    let inputSearch = (e.target.value).toLowerCase();

    // dios contiene el nuevo array
    let buscarPersonajes = (data.characters).filter(elemento => (elemento.name).toLowerCase().includes(inputSearch))

    buscarPersonajes.forEach(element => {

      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">
          <img  class="imagen" src="imag/incógnito.jpg">
           <div class="caja">
           <h4 class="data"> ${element.name}</h4>
        <p class="data">Ancestry: ${element.species}</p>
       <p class="data">Gender: ${element.gender}</p>
        <p class="data">Alive: ${element.alive}</p>
        <p class="data">Specie: ${element.species}</p>
          </div>
       </div>
        `;
      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);

    });
  }
})

// Funcionalidad al botón de "Home"
const boton = document.getElementById('button')
boton.addEventListener('click', () => {
  const x = document.querySelector(".test")
  x.innerHTML = ""
  const accederAlDom = document.getElementById('home')
  accederAlDom.style.display = 'block';

  const cardConteiner = document.getElementById('cardConteiner');
  cardConteiner.style.display = 'block';
  document.getElementById('contador').style.display = 'none';
})

// Gráfico cirular sobre el género de los personajes
// const mostrarMale = (data.characters).filter(e => e.gender == "male")


// const mostrarFemale = (data.characters).filter(e => e.gender == "female")

// google.charts.load('current', { 'packages': ['corechart'] });
// google.charts.setOnLoadCallback(drawChart);

// // Dibujar el gráfico y establecer los valores del gráfico
// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//     ['Task', 'Hours per Day'],
//     ['Male', 269],
//     ['Female', 134],

//   ]);

//   // Añadir un título y definir la anchura y la altura del gráfico
//   var options = { 'title': 'Data about the characters', 'width': 355, 'height': 370 };

//   // Mostrar el gráfico dentro del elemento <div> con id="piechart"
//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//   chart.draw(data, options);
// }
