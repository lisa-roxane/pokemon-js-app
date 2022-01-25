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
pokemonList.forEach(function(pokemon) {
    if (pokemon.height < 1.5) {
        document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") " + "</p>")
    } else {
        document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") " + "-Wow, that's a big Pokémon!" + "</p>")
    }
});