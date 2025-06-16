export default class AdivinaNumero {
  constructor() {
    this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
    this.intentos = 0; // Variable ahora encapsulada
  }
}