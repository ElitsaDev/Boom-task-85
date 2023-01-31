import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready

    const ul = document.querySelector("ul");
    const pokemonCount = 10;
    const url = `https://pokeapi.co/api/v2/pokemon`;


    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.status));
        }
    }

    function toJSON(response) {
        return response.json();
    }

    fetch(`${url}?limit=${pokemonCount}`)
    .then(checkStatus)
    .then(toJSON)
    .then((data) => {

        data.results.forEach(pokemon => {
            let li = document.createElement('li');
            li.innerText = pokemon.name;
            ul.append(li);

        });
    });
});
