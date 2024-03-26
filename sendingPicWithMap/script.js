const pokemons = [
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
          number: 1,
          name: 'Bulbasaur',
          type: ['Planta', ' Poison']
     },
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
          number: 4,
          name: 'Charmander',
          type: ['Fogo']
     },
     {
          URL: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
          number: 9,
          name: 'Blastoise',
          type: ['Água']
     },
]

const divResultados = document.getElementById('resultados')
const searchBar = document.getElementById('searching')
const btn = document.getElementById('button')

pokemons.map(el => divResultados.innerHTML += `
     <div>
          <img src='${el.URL}'>
          <h4>Número: ${el.number}</h4>
          <h2>${el.name}</h2>
          <h3>${el.type}</h3>
     </div>
`)

const findPokemon = () => { 
     const showPokemon = pokemons.filter(el => el.name === searchBar.value)
     divResultados.innerHTML += `
          <div>
               <img src='${showPokemon[0].URL}'>
               <h4>Número: ${showPokemon[0].number}</h4>
               <h2>${showPokemon[0].name}</h2>
               <h3>${showPokemon[0].type}</h3>
          </div>
     `
}

btn.addEventListener('click', findPokemon)