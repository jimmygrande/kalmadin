class GuessGame {
  constructor() {
    this.secretNumber = this.generateNumber(1, 100);
    this.attempts = 0;
    this.maxAttempts = 7;
    this.record = StorageManager.getRecord('guess');
  }
  
  generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  init() {
    document.getElementById('guess-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.checkGuess();
    });
  }
  
  checkGuess() {
    const input = document.getElementById('guess-input');
    const message = document.getElementById('guess-message');
    const num = parseInt(input.value);
    
    if (isNaN(num) || num < 1 || num > 100) {
      message.textContent = '❌ Ingresa un número válido (1-100)';
      return;
    }
    
    this.attempts++;
    
    if (num === this.secretNumber) {
      const newRecord = StorageManager.saveRecord('guess', this.attempts);
      message.textContent = `🎉 ¡Correcto! en ${this.attempts} intentos`;
      if (newRecord) {
        message.textContent += ' - ¡Nuevo récord!';
      }
      return;
    }
    
    message.textContent = `El número es ${num > this.secretNumber ? 'menor' : 'mayor'}`;
    input.value = '';
  }
  
  getHTML() {
    return `
      <div class="game-content">
        <h2>🔢 Adivina el Número</h2>
        <p>Intenta adivinar un número entre 1 y 100</p>
        <p>Récord actual: ${this.record} intentos</p>
        
        <form id="guess-form">
          <input type="number" id="guess-input" min="1" max="100" required>
          <button type="submit">Adivinar</button>
        </form>
        
        <p id="guess-message"></p>
        <p>Intentos: ${this.attempts}/${this.maxAttempts}</p>
      </div>
    `;
  }
}