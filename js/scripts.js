/* variable pokemonRepository to hold what the IIFE will return 
and IIFE assigned to this variable */
let pokemonRepository = (function () {
    // Pokemon list - an array of Pokémon objects used throughout the web app
    let pokemonList = [
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
    // Function to return all array items in pokemonList
    function getAll() {
        return pokemonList;
    }
    // Function to add new object to array pokemonList   
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    // Return value of this IIFE, pokemonList
    return {
        // key-value pair that represents the add function as its value
        add: add,
        // key-value pair that represents the getAll function as its value
        getAll: getAll
    };
})();

// New pokemon
 pokemonRepository.add({
    name: 'Pikachu',
    height: 0.3,
    types: ['Electric']
});




//for loop to display the name and height of each pokemon in the array to the DOM
//add remark to highlight big pokemon
/* for (let i=0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 1.5) {
        document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ") "  + "</p>")
    } else {
      document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "-Wow, that's a big Pokemon!" + "</p>")
    }
} */

//replace above for() loop with forEach() loop
pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height < 1.5) {
        document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") " + "</p>")
    } else {
        document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") " + "-Wow, that's a big Pokémon!" + "</p>")
    }
});