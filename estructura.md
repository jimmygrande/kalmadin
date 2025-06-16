kalmadin/
├── public/          # Build de producción
├── src/
│   ├── assets/      # Imágenes/sonidos optimizados (WebP/MP3)
│   ├── core/        # Motor de juegos (GameEngine.js)
│   ├── games/       # Lógica modular por juego
│   ├── styles/      # SCSS con variables globales
│   └── utils/       # Helpers (storage.js, analytics.js)
├── scripts/
│   ├── build.js     # Proceso de compilación
│   └── optimize.js  # Conversión automática a WebP
└── webpack.config.js