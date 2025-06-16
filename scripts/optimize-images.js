const sharp = require('sharp');
sharp('src/assets/original.jpg').webp().toFile('public/assets/optimized.webp');