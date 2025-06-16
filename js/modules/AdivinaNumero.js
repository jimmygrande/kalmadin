/**
 * Juego "Adivina el Número" (v2.0)
 * - Encapsulación en clase
 * - Validación robusta de inputs
 * - Records persistentes
 */
export default class AdivinaNumero {
  constructor() {
    this.numeroSecreto = this.generarNumero(1, 100);
    this.intentos = 0;
    this.record = this.obtenerRecord();
  }

  /**
   * Genera un número aleatorio entre min y max
   * @param {number} min - Límite inferior
   * @param {number} max - Límite superior
   * @returns {number} - Número aleatorio
   */
  generarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Valida y procesa el intento del usuario
   * @param {string} input - Valor del input
   * @returns {Object} - { esCorrecto, mensaje }
   */
  validarIntento(input) {
    const numero = parseInt(input);
    
    // Validación exhaustiva
    if (isNaN(numero)) return { 
      esCorrecto: false, 
      mensaje: "❌ ¡Debe ser un número!" 
    };
    
    if (numero < 1 || numero > 100) return {
      esCorrecto: false,
      mensaje: "🔢 Entre 1 y 100 sólo"
    };

    this.intentos++;
    
    // Lógica de comparación
    if (numero === this.numeroSecreto) {
      this.actualizarRecord();
      return {
        esCorrecto: true,
        mensaje: `🎉 ¡Correcto! en ${this.intentos} intentos`
      };
    }
    
    return {
      esCorrecto: false,
      mensaje: `El número es ${numero > this.numeroSecreto ? "menor" : "mayor"}`
    };
  }
}