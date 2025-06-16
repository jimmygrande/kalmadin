// js/utils/storage.js
export const guardarRecord = (juego, puntos) => {
  if (typeof localStorage === "undefined") return;
  const records = JSON.parse(localStorage.getItem('records')) || {};
  records[juego] = puntos;
  localStorage.setItem('records', JSON.stringify(records));
};