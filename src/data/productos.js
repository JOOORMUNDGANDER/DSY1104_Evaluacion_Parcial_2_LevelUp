// src/data/productos.js
export const productos = [
  // === JUEGOS DE MESA ===
  {
    id: "JM001",
    codigo: "JM001",
    categoria: "juegos-mesa",
    nombre: "Catan",
    precio: 29990,
    imagen: "/assets/images/catan.jpg",
    descripcion: "Juego de estrategia para 3-4 jugadores. ¡Conquista territorios y domina el mundo!"
  },
  {
    id: "JM002",
    codigo: "JM002",
    categoria: "juegos-mesa",
    nombre: "Carcassonne",
    precio: 24990,
    imagen: "/assets/images/carcassonne.jpg",
    descripcion: "Construye ciudades, caminos y monasterios en este clásico juego de colocación de fichas."
  },
  {
    id: "JM003",
    codigo: "JM003",
    categoria: "juegos-mesa",
    nombre: "Pandemic",
    precio: 27990,
    imagen: "/assets/images/pandemic.jpg",
    descripcion: "Juego cooperativo donde trabajas en equipo para detener pandemias globales."
  },
  {
    id: "JM004",
    codigo: "JM004",
    categoria: "juegos-mesa",
    nombre: "Azul",
    precio: 22990,
    imagen: "/assets/images/azul.jpg",
    descripcion: "Juego de estrategia abstracta para 2-4 jugadores, ganador del Spiel des Jahres."
  },

  // === ACCESORIOS ===
  {
    id: "AC001",
    codigo: "AC001",
    categoria: "accesorios",
    nombre: "Controlador Inalámbrico Xbox Series X",
    precio: 59990,
    imagen: "/assets/images/xbox-controller.jpg",
    descripcion: "Controlador oficial con baja latencia y batería de larga duración."
  },
  {
    id: "AC002",
    codigo: "AC002",
    categoria: "accesorios",
    nombre: "Auriculares Gamer HyperX Cloud II",
    precio: 79990,
    imagen: "/assets/images/hyperx-cloud.jpg",
    descripcion: "Sonido envolvente 7.1, micrófono desmontable y almohadillas cómodas."
  },
  {
    id: "AC003",
    codigo: "AC003",
    categoria: "accesorios",
    nombre: "Teclado Mecánico Razer BlackWidow",
    precio: 99990,
    imagen: "/assets/images/blackwidow.jpg",
    descripcion: "Teclado con switches verdes, retroiluminación Chroma y diseño resistente."
  },
  {
    id: "AC004",
    codigo: "AC004",
    categoria: "accesorios",
    nombre: "Mousepad XXL para escritorio",
    precio: 39990,
    imagen: "/assets/images/mousepad-xxl.jpg",
    descripcion: "Mousepad de tela de 120x60cm, base antideslizante y bordes cosidos."
  },

  // === CONSOLAS ===
  {
    id: "CO001",
    codigo: "CO001",
    categoria: "consolas",
    nombre: "PlayStation 5",
    precio: 549990,
    imagen: "/assets/images/ps5.jpg",
    descripcion: "Consola de última generación con SSD ultrarrápido y gráficos 4K."
  },
  {
    id: "CO002",
    codigo: "CO002",
    categoria: "consolas",
    nombre: "Nintendo Switch OLED",
    precio: 429990,
    imagen: "/assets/images/switch-oled.jpg",
    descripcion: "Pantalla OLED de 7, sonido mejorado y base con puerto LAN."
  },
  {
    id: "CO003",
    codigo: "CO003",
    categoria: "consolas",
    nombre: "Steam Deck 512GB",
    precio: 699990,
    imagen: "/assets/images/steam-deck.jpg",
    descripcion: "Consola portátil para jugar juegos de Steam con Linux y Windows."
  },

  // === COMPUTADORES GAMERS ===
  {
    id: "CG001",
    codigo: "CG001",
    categoria: "computadores-gamers",
    nombre: "PC Gamer ASUS ROG Strix",
    precio: 1299990,
    imagen: "/assets/images/rog-strix.jpg",
    descripcion: "Intel Core i7, 16GB RAM, RTX 3070, SSD 1TB. Listo para cualquier juego."
  },
  {
    id: "CG002",
    codigo: "CG002",
    categoria: "computadores-gamers",
    nombre: "PC Gamer MSI Infinite",
    precio: 1499990,
    imagen: "/assets/images/msi-infinite.jpg",
    descripcion: "Intel i9, RTX 4080, 32GB RAM, SSD 2TB. Máximo rendimiento."
  },
  {
    id: "CG003",
    codigo: "CG003",
    categoria: "computadores-gamers",
    nombre: "PC Gamer All-In-One Razer",
    precio: 1799990,
    imagen: "/assets/images/razer-aio.jpg",
    descripcion: "Todo en uno con pantalla 4K, refrigeración líquida y diseño premium."
  },

  // === SILLAS GAMERS ===
  {
    id: "SG001",
    codigo: "SG001",
    categoria: "sillas-gamers",
    nombre: "Silla Gamer Secretlab Titan",
    precio: 349990,
    imagen: "/assets/images/secretlab.jpg",
    descripcion: "Diseño ergonómico, soporte lumbar ajustable y tapiz de cuero premium."
  },
  {
    id: "SG002",
    codigo: "SG002",
    categoria: "sillas-gamers",
    nombre: "Silla Noblechairs Hero",
    precio: 319990,
    imagen: "/assets/images/noblechairs.jpg",
    descripcion: "Tapiz de cuero sintético, soporte lumbar ajustable y diseño deportivo."
  },
  {
    id: "SG003",
    codigo: "SG003",
    categoria: "sillas-gamers",
    nombre: "Silla GTPlayer RGB",
    precio: 289990,
    imagen: "/assets/images/gtplayer.jpg",
    descripcion: "Silla con luces RGB, reposapiés extensible y diseño futurista."
  },

  // === MOUSE ===
  {
    id: "MS001",
    codigo: "MS001",
    categoria: "mouse",
    nombre: "Mouse Gamer Logitech G502 HERO",
    precio: 49990,
    imagen: "/assets/images/g502.jpg",
    descripcion: "Sensor HERO 25K, 11 botones programables y RGB personalizable."
  },
  {
    id: "MS002",
    codigo: "MS002",
    categoria: "mouse",
    nombre: "Mouse Razer Viper 8KHz",
    precio: 69990,
    imagen: "/assets/images/viper.jpg",
    descripcion: "Sensor óptico de 8000Hz, peso ultraligero y diseño ambidiestro."
  },
  {
    id: "MS003",
    codigo: "MS003",
    categoria: "mouse",
    nombre: "Mouse Logitech G Pro X Superlight",
    precio: 79990,
    imagen: "/assets/images/g-pro.jpg",
    descripcion: "Solo 63g, sensor HERO 25K y batería de 70 horas."
  },

  // === MOUSEPAD ===
  {
    id: "MP001",
    codigo: "MP001",
    categoria: "mousepad",
    nombre: "Mousepad Razer Goliathus Extended Chroma",
    precio: 29990,
    imagen: "/assets/images/goliathus.jpg",
    descripcion: "Superficie optimizada para precisión, con iluminación Chroma RGB."
  },
  {
    id: "MP002",
    codigo: "MP002",
    categoria: "mousepad",
    nombre: "Mousepad SteelSeries QcK+",
    precio: 19990,
    imagen: "/assets/images/qck.jpg",
    descripcion: "Superficie optimizada para precisión, bordes cosidos y base antideslizante."
  },
  {
    id: "MP003",
    codigo: "MP003",
    categoria: "mousepad",
    nombre: "Mousepad HyperX Fury S Pro",
    precio: 24990,
    imagen: "/assets/images/fury.jpg",
    descripcion: "Tamaño XXL, superficie texturizada y base de goma densa."
  },

  // === POLERAS PERSONALIZADAS ===
  {
    id: "PP001",
    codigo: "PP001",
    categoria: "poleras-personalizadas",
    nombre: "Polera Gamer Personalizada 'Level-Up'",
    precio: 14990,
    imagen: "/assets/images/Camiseta_levelup.jpg",
    descripcion: "100% algodón, diseño exclusivo Level-Up Gamer."
  },

  // === POLERONES GAMERS ===
  {
    id: "PO001",
    codigo: "PO001",
    categoria: "polerones-gamers",
    nombre: "Poleron 'Stay Frosty'",
    precio: 54990,
    imagen: "/assets/images/poleron-frosty.jpg",
    descripcion: "Polar térmico, capucha con cordón y estampado resistente."
  },
  {
    id: "PO002",
    codigo: "PO002",
    categoria: "polerones-gamers",
    nombre: "Poleron 'Respawn in 5...4...3...'",
    precio: 52990,
    imagen: "/assets/images/poleron-respawn.jpg",
    descripcion: "Diseño gamer, bolsillo canguro y tela suave interior."
  },

  // === PERIFÉRICOS PARA STREAMING ===
  {
    id: "ST001",
    codigo: "ST001",
    categoria: "perifericos-streaming",
    nombre: "Micrófono Elgato Wave 3",
    precio: 129990,
    imagen: "/assets/images/wave3.jpg",
    descripcion: "Micrófono USB con calidad de estudio, software de control y filtro pop integrado."
  },
  {
    id: "ST002",
    codigo: "ST002",
    categoria: "perifericos-streaming",
    nombre: "Cámara Logitech Brio 4K",
    precio: 189990,
    imagen: "/assets/images/brio.jpg",
    descripcion: "Cámara 4K con HDR, corrección de luz automática y enfoque rápido."
  },
  {
    id: "ST003",
    codigo: "ST003",
    categoria: "perifericos-streaming",
    nombre: "Elgato Key Light Air",
    precio: 99990,
    imagen: "/assets/images/keylight.jpg",
    descripcion: "Luz LED RGB ajustable, controlable por app y con modo de luz natural."
  },
  {
    id: "ST004",
    codigo: "ST004",
    categoria: "perifericos-streaming",
    nombre: "Controlador Stream Deck Mini",
    precio: 89990,
    imagen: "/assets/images/streamdeck-mini.jpg",
    descripcion: "6 teclas programables para cambiar escenas, sonidos y acciones en vivo."
  },

  // === ILUMINACIÓN RGB ===
  {
    id: "IL001",
    codigo: "IL001",
    categoria: "iluminacion-rgb",
    nombre: "Tiras LED Razer Chroma",
    precio: 39990,
    imagen: "/assets/images/razer-leds.jpg",
    descripcion: "Tiras RGB sincronizables con juegos y periféricos Razer."
  },
  {
    id: "IL002",
    codigo: "IL002",
    categoria: "iluminacion-rgb",
    nombre: "Lámpara Philips Hue Play",
    precio: 59990,
    imagen: "/assets/images/hue-play.jpg",
    descripcion: "Luz ambiental para detrás del monitor, controlable por app."
  },
  {
    id: "IL003",
    codigo: "IL003",
    categoria: "iluminacion-rgb",
    nombre: "Ventilador RGB Corsair LL120",
    precio: 45990,
    imagen: "/assets/images/ll120.jpg",
    descripcion: "Ventilador de CPU con 16 LEDs RGB direccionables y bajo ruido."
  }
];
