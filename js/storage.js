const StorageManager = {
  saveRecord(game, score) {
    try {
      const records = JSON.parse(localStorage.getItem('kalmadinRecords')) || {};
      if (!records[game] || score < records[game]) {
        records[game] = score;
        localStorage.setItem('kalmadinRecords', JSON.stringify(records));
        return true;
      }
      return false;
    } catch (e) {
      console.error('Error al guardar récord:', e);
      return false;
    }
  },
  
  getRecord(game) {
    try {
      const records = JSON.parse(localStorage.getItem('kalmadinRecords')) || {};
      return records[game] || 0;
    } catch (e) {
      console.error('Error al obtener récord:', e);
      return 0;
    }
  }
};