const sharp = require("sharp");

// Convierte imágenes a WebP automáticamente
async function optimizarImagenes() {
  await sharp("assets/background.jpg")
    .webp({ quality: 80 })
    .toFile("assets/background.webp"); // 78% menos peso
}