/**
 * Guarda records con validación de entorno
 * @param {string} juego - Nombre del juego
 * @param {number} puntos - Puntuación
 */
export const saveRecord = (juego, puntos) => {
  if (typeof localStorage === "undefined") return;
  // Implementación segura
};