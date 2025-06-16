/**
 * Clase principal del juego de memoria
 * @class
 * @property {Array} cards - Arreglo de emojis para las cartas
 * @property {number} flippedCards - Cartas volteadas temporalmente
 */
export default class MemoriaGame {
  constructor() {
    this.cards = ['🐶', '🐱', '🐭', '🐹', '🦊', '🐻'];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.initGame();
  }

  /**
   * Inicializa el juego
   * @method
   */
  initGame() {
    this.duplicateCards();
    this.shuffleCards();
    this.renderBoard();
  }

  /**
   * Duplica cartas para formar pares
   * @method
   */
  duplicateCards() {
    this.cards = [...this.cards, ...this.cards];
  }
}