class AdivinaGame {
  constructor() {
    this.secretNumber = this.generateNumber();
    this.attempts = 0;
    this.maxAttempts = 7;
    this.record = StorageManager.getRecord('adivina');
  }
  
  generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  init() {
    const form = document.getElementById('guess-form');
    const input = document.getElementById('guess-input');
    const message = document.getElementById('guess-message');
    const attemptsDisplay = document.getElementById('attempts-count');
    
    form.addEventListener('submit', e => {
      e.preventDefault();
      this.checkGuess(input.value);
      input.value = '';
    });
    
    attemptsDisplay.textContent = this.attempts;
  }
  
  checkGuess(userInput) {
    const num = parseInt(userInput);
    const message = document.getElementById('guess-message');
    const attemptsDisplay = document.getElementById('attempts-count');
    
    // Validación
    if (isNaN(num) {
      message.textContent = '❌ ¡Debe ser un número!';
      return;
    }
    
    if (num < 1 || num > 100) {
      message.textContent = '🔢 El número debe estar entre 1 y 100';
      return;
    }
    
    this.attempts++;
    attemptsDisplay.textContent = this.attempts;
    
    if (num === this.secretNumber) {
      const newRecord = StorageManager.saveRecord('adivina', this.attempts);
      message.textContent = `🎉 ¡Correcto! en ${this.attempts} intentos`;
      if (newRecord) message.textContent += ' - ¡Nuevo récord!';
    } else {
      message.textContent = `El número es ${num > this.secretNumber ? 'menor' : 'mayor'}`;
    }
  }
  
  getHTML() {
    return `
      <div class="game-content">
        <h2>🔢 Adivina el Número</h2>
        <p>Intenta adivinar un número entre 1 y 100</p>
        <p>Récord actual: ${this.record} intentos</p>
        
        <form id="guess-form">
          <input 
            type="number" 
            id="guess-input" 
            placeholder="Tu número..."
            min="1"
            max="100"
            required
          >
          <button type="submit">Adivinar</button>
        </form>
        
        <p id="guess-message"></p>
        <p>Intentos: <span id="attempts-count">0</span>/${this.maxAttempts}</p>
      </div>
    `;
  }
}