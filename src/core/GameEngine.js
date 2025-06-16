/**
 * Motor base para juegos
 * @abstract
 */
export default class GameEngine {
  constructor(name) {
    if (new.target === GameEngine) {
      throw new Error("No se puede instanciar clase abstracta");
    }
    this.gameName = name;
    this.score = 0;
    this.isRunning = false;
  }

  /**
   * Inicializa el juego (método abstracto)
   * @abstract
   */
  init() {
    throw new Error("Método 'init' debe ser implementado");
  }

  /**
   * Guarda el record actual
   * @param {number} score 
   */
  saveRecord(score) {
    try {
      const records = JSON.parse(localStorage.getItem('kalmadinRecords')) || {};
      if (!records[this.gameName] || score < records[this.gameName]) {
        records[this.gameName] = score;
        localStorage.setItem('kalmadinRecords', JSON.stringify(records));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error guardando record:", error);
      return false;
    }
  }
}