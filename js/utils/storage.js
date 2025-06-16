/**
 * Guarda un record en localStorage
 * @function
 * @param {string} gameName - Nombre del juego
 * @param {number} score - Puntuación obtenida
 */
export const saveRecord = (gameName, score) => {
  const records = JSON.parse(localStorage.getItem('kalmadinRecords')) || {};
  records[gameName] = records[gameName] 
    ? Math.max(records[gameName], score) 
    : score;
  localStorage.setItem('kalmadinRecords', JSON.stringify(records));
};

/**
 * Obtiene records almacenados
 * @function
 * @returns {Object} Records de todos los juegos
 */
export const getRecords = () => {
  return JSON.parse(localStorage.getItem('kalmadinRecords')) || {};
};