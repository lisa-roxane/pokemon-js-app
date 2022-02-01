/* variable pokemonRepository to hold what the IIFE will return 
and IIFE assigned to this variable */
let pokemonRepository = (function () {
    // Pokemon list - an array of Pokémon objects used throughout the web app
    let repository = [
        {
            name: 'Bulbasaur', 
            height: 0.7, 
            types: ['Grass', 'Poison']
        }, 
        {
            name: 'Charizard', 
            height: 1.7, 
            types: ['Fire', 'Flying']
        }, 
        {
            name: 'Butterfree', 
            height: 1.1, 
            types: ['Bug', 'Flying']
        }, 
        {
            name: 'Nidoqueen', 
            height: 1.3, 
            types: ['Ground', 'Poison']
        }
    ];

     // Function to add new object to array pokemonList   
     function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'height' in pokemon &&
            'types' in pokemon
        ) {
            repository.push(pokemon);
        } else {
            console.log("Pokémon is not correct");
        }
    }

    // Function to return all array items in pokemonList
    function getAll() {
        return repository;
    }

    // Add function addListItem()
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        button.addEventListener('click', function () {
            showDetails(pokemon);
        })
    }

    // Add function showDetails()
    function showDetails(pokemon) {
        console.log(pokemon.name);
    }

    // Return value of this IIFE, pokemonList
    return {
        // key-value pair that represents the add function as its value
        add: add,
        // key-value pair that represents the getAll function as its value
        getAll: getAll,
        // key-value pair that represents the addListItem function as its value
        addListItem: addListItem
    };

})();

// New pokemon
 pokemonRepository.add({
    name: 'Pikachu',
    height: 0.3,
    types: ['Electric']
});

console.log(pokemonRepository.getAll());


//for loop to display the name and height of each pokemon in the array to the DOM
//add remark to highlight big pokemon
/* for (let i=0; i < repository.length; i++) {
    if (repository[i].height < 1.5) {
        document.write("<p>" + repository[i].name + " (height: " + repository[i].height + ") "  + "</p>")
    } else {
      document.write("<p>" + repository[i].name + " (height: " + repository[i].height + ") " + "-Wow, that's a big Pokemon!" + "</p>")
    }
} */

//replace above for() loop with forEach() loop
/* Commenting out to use new forEach() loop below
pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height < 1.5) {
        document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") " + "</p>")
    } else {
        document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") " + "-Wow, that's a big Pokémon!" + "</p>")
    }
}); */


// New forEach() loop
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon)
});

