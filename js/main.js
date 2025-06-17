class GameManager {
  constructor() {
    this.currentGame = null;
    this.games = {
      guess: new GuessGame(),
      memory: new MemoryGame(),
      rps: new RockPaperScissors()
    };
    
    this.initEventListeners();
  }
  
  initEventListeners() {
    document.querySelectorAll('.game-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.loadGame(link.dataset.game);
      });
    });
  }
  
  loadGame(gameType) {
    if (this.games[gameType]) {
      this.currentGame = this.games[gameType];
      document.getElementById('game-container').innerHTML = 
        this.currentGame.getHTML();
      this.currentGame.init();
    }
  }
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.gameManager = new GameManager();
});