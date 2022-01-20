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
for (let i=0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") ");
}