class MemoriaGame {
  constructor() {
    this.cards = ['🐶', '🐱', '🐭', '🐹', '🦊', '🐻'];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.moves = 0;
    this.record = StorageManager.getRecord('memoria');
  }
  
  init() {
    this.renderBoard();
    this.startTimer();
  }
  
  renderBoard() {
    const board = document.getElementById('memory-board');
    board.innerHTML = '';
    
    // Duplicar y mezclar cartas
    const allCards = [...this.cards, ...this.cards]
      .sort(() => Math.random() - 0.5);
    
    allCards.forEach((emoji, index) => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.dataset.index = index;
      card.innerHTML = `<span class="hidden">${emoji}</span>`;
      card.addEventListener('click', () => this.flipCard(card));
      board.appendChild(card);
    });
  }
  
  flipCard(card) {
    if (this.flippedCards.length >= 2 || card.classList.contains('flipped')) return;
    
    card.classList.add('flipped');
    this.flippedCards.push(card);
    
    if (this.flippedCards.length === 2) {
      this.moves++;
      document.getElementById('moves-count').textContent = this.moves;
      this.checkMatch();
    }
  }
  
  checkMatch() {
    const [card1, card2] = this.flippedCards;
    const emoji1 = card1.querySelector('span').textContent;
    const emoji2 = card2.querySelector('span').textContent;
    
    if (emoji1 === emoji2) {
      this.matchedPairs++;
      card1.classList.add('matched');
      card2.classList.add('matched');
      
      if (this.matchedPairs === this.cards.length) {
        const newRecord = StorageManager.saveRecord('memoria', this.moves);
        document.getElementById('result-message').textContent = 
          `🎉 ¡Ganaste en ${this.moves} movimientos!`;
        if (newRecord) document.getElementById('result-message').textContent += ' - ¡Nuevo récord!';
      }
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
      }, 1000);
    }
    
    this.flippedCards = [];
  }
  
  getHTML() {
    return `
      <div class="game-content">
        <h2>🃏 Juego de Memoria</h2>
        <p>Encuentra todos los pares de cartas</p>
        <p>Récord actual: ${this.record} movimientos</p>
        
        <div class="game-info">
          <p>Movimientos: <span id="moves-count">0</span></p>
          <p>Tiempo: <span id="timer">0</span>s</p>
        </div>
        
        <div id="memory-board" class="memory-board"></div>
        <p id="result-message"></p>
        <button id="restart-memory">Reiniciar Juego</button>
      </div>
    `;
  }
}