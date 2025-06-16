import GameEngine from '../../core/GameEngine';

export default class AdivinaNumero extends GameEngine {
  constructor() {
    super("AdivinaNumero");
    this.min = 1;
    this.max = 100;
    this.maxIntentos = 7;
    this.numeroSecreto = 0;
    this.intentos = 0;
  }

  init() {
    this.numeroSecreto = this.generarNumero();
    this.intentos = 0;
    this.isRunning = true;
    return `¡Nuevo juego! Adivina entre ${this.min} y ${this.max}`;
  }

  /**
   * Procesa intento del usuario
   * @param {number} numero 
   * @returns {object} { exito, mensaje, intentos }
   */
  procesarIntento(numero) {
    if (!this.isRunning) return { 
      exito: false, 
      mensaje: "El juego no está activo" 
    };

    if (isNaN(numero) || numero < this.min || numero > this.max) {
      return {
        exito: false,
        mensaje: `Ingresa un número válido (${this.min}-${this.max})`
      };
    }

    this.intentos++;

    if (numero === this.numeroSecreto) {
      this.isRunning = false;
      const nuevoRecord = this.saveRecord(this.intentos);
      return {
        exito: true,
        mensaje: `¡Correcto! en ${this.intentos} intentos`,
        record: nuevoRecord
      };
    }

    const pista = numero > this.numeroSecreto ? "menor" : "mayor";
    return {
      exito: false,
      mensaje: `El número es ${pista}. Intento ${this.intentos}/${this.maxIntentos}`
    };
  }
}