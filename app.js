// Init Joke
const joke = new Joke();

// Init UI
const ui = new UI();

document.addEventListener("DOMContentLoad", getJoke());

document.getElementById('new-joke').addEventListener('click', newJoke);

function getJoke() {
  joke.getJoke()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

function newJoke() {
  location.reload();
}