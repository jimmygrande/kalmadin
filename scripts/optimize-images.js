const sharp = require('sharp');
const fs = require('fs');

// Convierte todas las imágenes a WebP
async function optimizarImagenes() {
  const imagenes = fs.readdirSync('src/assets/originales');
  
  for (const img of imagenes) {
    await sharp(`src/assets/originales/${img}`)
      .webp({ quality: 80, lossless: true })
      .toFile(`public/assets/${img.split('.')[0]}.webp`);
  }
}

optimizarImagenes();