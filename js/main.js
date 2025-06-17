class GameManager {
  constructor() {
    this.games = {
      adivina: new AdivinaGame(),
      memoria: new MemoriaGame(),
      piedrapapel: new PiedraPapelGame()
    };
    
    this.setupNavigation();
  }
  
  setupNavigation() {
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const gameId = e.target.dataset.game;
        this.loadGame(gameId);
      });
    });
  }
  
  loadGame(gameId) {
    const game = this.games[gameId];
    if (game) {
      document.getElementById('game-container').innerHTML = game.getHTML();
      game.init();
    }
  }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  window.gameManager = new GameManager();
});