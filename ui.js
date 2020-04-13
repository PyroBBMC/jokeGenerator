class UI {
  constructor() {
    this.setup = document.getElementById('lead');
    this.punchline = document.getElementById('punchline');
  }

  paint(joke) {
    this.setup.textContent = joke.setup;
    this.punchline.textContent = joke.punchline;
  }
}