const listaPokemon = document.querySelector('#listaPokemon');
let URL = "https://pokeapi.co/api/v2/pokemon/";



let i = 1;
function GeneracionURL() {
    if (i <= 151) {
        fetch(URL + i)
            .then(response => response.json())
            .then(data => {mostrarPokemon(data)});
             setTimeout(GeneracionURL, 1);    
        i++;
    }
}
GeneracionURL();

function mostrarPokemon(poke) {
    let tipos = poke.types.map((type) => `<p class="${type.type.name}">${type.type.name}</p>`);
    tipos = tipos.join(" ");
    console.log(tipos);

    const div = document.createElement('div');
    div.classList.add('pokemon_container');
    div.innerHTML = `<div class="pokemon_container">
                        <div class="pokemon_imagen">
                            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke}">
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