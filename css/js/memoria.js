/**
 * JUEGO DE MEMORIA
 * - Baraja cartas.
 * - Maneja clics y comparaciones.
 * - Guarda records en localStorage.
 */
class MemoryGame {
  constructor() {
    this.cards = ['🐶', '🐱', '🐭', '🐹', '🦊', '🐻', '🐼', '🐨'];
    this.matchedPairs = 0;
    this.flippedCards = [];
    this.shuffleCards();
    this.renderBoard();
  }

  /** Baraja las cartas aleatoriamente */
  shuffleCards() {
    this.cards = [...this.cards, ...this.cards] // Duplica para pares
      .sort(() => Math.random() - 0.5);
  }

  /** Dibuja el tablero en el DOM */
  renderBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    this.cards.forEach((emoji, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.dataset.index = index;
      card.addEventListener('click', () => this.flipCard(card));
      board.appendChild(card);
    });
  }
}