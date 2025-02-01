const listaPokemon = document.querySelector('#listaPokemon');
let URL = "https://pokeapi.co/api/v2/pokemon/";


 function fetchPokemons() {
    for (let i = 1; i <= 151; i++) {
            const response =  fetch(URL + id);
            const data =  response.json();
            mostrarPokemon(data);
    }

    }

fetchPokemons();

function mostrarPokemon(poke) {
    let tipos = poke.types.map((type) => `<p class="${type.type.name}">${type.type.name}</p>`);
    tipos = tipos.join(" ");
    console.log(tipos);

    const div = document.createElement('div');
    div.classList.add('pokemon_container');
    div.innerHTML = `<div class="pokemon_container">
                        <div class="pokemon_imagen">
                            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
                        </div>
                    <div class="pokemon_inforacion">
                        <div class="nombre_container">
                            <p class="id_pokemon">${"#" + poke.id} </p>
                            <h2 class="nombre_Pokemon">${poke.name}</h2>
                        </div>
                        <div class="pokemon_tipos">
                            ${tipos}
                        </div>
                        <div class="pokemon_stats">
                            <p class="stat">${poke.height + "m"}</p>
                            <p class="stat">${poke.weight + "kg"}</p>
                        </div>
                    </div>
                </div>`;

    listaPokemon.append(div);
}