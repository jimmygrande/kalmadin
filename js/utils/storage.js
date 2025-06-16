/**
 * Sistema de records con validación de entorno
 * @param {string} juego - Nombre del juego
 * @param {number} puntos - Puntuación obtenida
 */
export const guardarRecord = (juego, puntos) => {
  // Verificar disponibilidad de localStorage
  if (typeof localStorage === "undefined") return;
  
  try {
    const records = JSON.parse(localStorage.getItem("kalmadinRecords")) || {};
    
    // Solo guarda si es un nuevo récord
    if (!records[juego] || puntos < records[juego]) {
      records[juego] = puntos;
      localStorage.setItem("kalmadinRecords", JSON.stringify(records));
    }
  } catch (error) {
    console.error("Error en localStorage:", error);
  }
};