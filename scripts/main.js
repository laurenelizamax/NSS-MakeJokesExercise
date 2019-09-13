let jokeDiv = document.querySelector("#myJoke");

const API = {
    getJokes: () => {
        return fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
          "accept": "application/json"
    },
        }) .then(response => response.json())
        .then(result => jokeDiv.innerHTML = createJokes(result))
}}

const createJokes =  (jokeObject) => {
        return `
        <div class="joke">
        <h3>${jokeObject.joke}</h3>
        </div>
        `
    }

    document.getElementById("button").addEventListener("click",  event => {
        API.getJokes();

      });


