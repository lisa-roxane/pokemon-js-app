/* variable pokemonRepository to hold what the IIFE will return 
and IIFE assigned to this variable */
let pokemonRepository = (function () {
    // An array of Pokémon objects
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container');
 
    // function to add new pokemon to the array, pokemonList
     function add(pokemon) {
        if (typeof pokemon === 'object' && 'name' in pokemon) {
            pokemonList.push(pokemon);
        } else {
            console.log("Please enter a valid Pokémon.");
        }
    }

    // Function to return all array items in pokemonList
    function getAll() {
        return pokemonList;
    }

     
    // Function to create a button as a pokémon list item
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');

        button.innerText = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
        button.classList.add('button-class');

        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);

    } 
        
    // Function to load image, height and types details about pokémon
    function loadDetails(item) {
        showLoadingSpinner();
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            hideLoadingSpinner();
            return response.json();
        }).then(function (details) {
        // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            hideLoadingSpinner();
            console.error(e);
        });
    }

    // Function to load list of pokémon from apiUrl
    function loadList() {
        showLoadingSpinner();
        return fetch(apiUrl).then(function (response) {
            hideLoadingSpinner();
            return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
            hideLoadingSpinner();
            console.error(e);
        });
    }

   
 
    // Function to show loading spinner
    function showLoadingSpinner() {
        let loadingContainer = document.querySelector('#loading-container');

        // Clear preexxisting content
        loadingContainer.innerHTML = '';

        // Add spinner element
        let spinner = document.createElement('div');
        spinner.classList.add('spinner');
        loadingContainer.appendChild(spinner);

        // Make container and spinner visible
        loadingContainer.classList.add('is-visible');
    }

    // Funtion to hide loading animation
    function hideLoadingSpinner() {
        let loadingContainer = document.querySelector('#loading-container');
        loadingContainer.classList.remove('is-visible');
    }

   
    // function that loads details from api then (formerly prints details to console) displays details in modal
    function showDetails(item) {
        loadDetails(item).then (function () {
            console.log(item);
        });
    }

   

    //Return value of this IIFE, pokemonList
    return {
        // key-value pair that represents the add function as its value
        add: add,
        // key-value pair that represents the getAll function as its value
        getAll: getAll,
        // key-value pair that represents the addListItem function as its value
        addListItem: addListItem,
        // key-value pair that represents the loadList function as its value
        loadList: loadList,
        // key-value pair that represents the loadDetails function as its value
        loadDetails: loadDetails,
        // key-value pair that represents the showDetails function as its value
        showDetails: showDetails,
        // key-value pait that represents the showModal function as its value
        //showModal: showModal
    };
})();

pokemonRepository.loadList().then(function() {
    // New forEach() loop
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon)
    });
});