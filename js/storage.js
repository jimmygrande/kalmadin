class StorageManager {
  static saveRecord(game, score) {
    try {
      const records = JSON.parse(localStorage.getItem('kalmadinRecords')) || {};
      if (!records[game] || score < records[game]) {
        records[game] = score;
        localStorage.setItem('kalmadinRecords', JSON.stringify(records));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error al guardar récord:', error);
      return false;
    }
  }
  
  static getRecord(game) {
    try {
      const records = JSON.parse(localStorage.getItem('kalmadinRecords')) || {};
      return records[game] || 'N/A';
    } catch (error) {
      console.error('Error al obtener récord:', error);
      return 'N/A';
    }
  }
}