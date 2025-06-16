kalmadin/
├── public/                  # Build final
├── src/
│   ├── core/
│   │   ├── GameEngine.js    # Clase base para juegos
│   │   └── Analytics.js     # Seguimiento de métricas
│   ├── games/
│   │   ├── Memoria/         # Juego completo
│   │   ├── AdivinaNumero/
│   │   └── PiedraPapel/
│   ├── assets/
│   │   ├── optimized/       # Imágenes en WebP
│   │   └── sounds/
│   ├── styles/
│   │   ├── _variables.scss  # Variables globales
│   │   └── main.scss        # Estilos compilados
│   └── utils/
│       ├── storage.js       # Gestión de datos
│       └── helpers.js       # Funciones reutilizables
├── scripts/
│   ├── build.js             # Proceso de compilación
│   └── optimize-images.js   # Conversión a WebP
└── webpack.config.js        # Bundling profesional