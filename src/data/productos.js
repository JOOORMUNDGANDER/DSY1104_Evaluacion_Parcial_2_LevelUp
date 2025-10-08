// src/data/productos.js

export const productos = [
  // === JUEGOS DE MESA ===
  {
    id: "OF006",
    codigo: "OF006",
    categoria: "juegos-mesa",
    nombre: "Catan",
    precio: 24990,
    precioOriginal: 29990,
    imagen: "/assets/images/catan.jpg",
    descripcion: "Juego de estrategia para 3-4 jugadores. ¡Conquista territorios y domina el mundo!",
    oferta: true
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
    {
  id: "JM005",
  codigo: "JM005",
  categoria: "juegos-mesa",
  nombre: "Terraforming Mars",
  precio: 34990,
  // imagen: "/assets/images/terraforming-mars.jpg",
  descripcion: "Juego competitivo de estrategia donde los jugadores colaboran y compiten para hacer habitable Marte.",
  especificaciones: {
    "Jugadores": "1-5",
    "Duración": "120 minutos",
    "Edad recomendada": "12+",
    "Componentes": "Tablero principal, tableros individuales, cartas, marcadores, fichas"
  }
},
{
  id: "JM006",
  codigo: "JM006",
  categoria: "juegos-mesa",
  nombre: "Dixit Odyssey",
  precio: 28990,
  // imagen: "/assets/images/dixit-odyssey.jpg",
  descripcion: "Juego de imaginación e interpretación visual con cartas ilustradas únicas.",
  especificaciones: {
    "Jugadores": "3-12",
    "Duración": "30-45 minutos",
    "Edad recomendada": "8+",
    "Contenido": "84 cartas ilustradas, tablero de puntuación, fichas de votación"
  }
},
{
  id: "JM007",
  codigo: "JM007",
  categoria: "juegos-mesa",
  nombre: "7 Wonders",
  precio: 31990,
  // imagen: "/assets/images/7wonders.jpg",
  descripcion: "Construye una civilización y maravillas del mundo antiguo a través de un dinámico drafting de cartas.",
  especificaciones: {
    "Jugadores": "3-7",
    "Duración": "30 minutos",
    "Edad recomendada": "10+",
    "Contenido": "Tableros de civilización, cartas, fichas, instrucciones"
  }
},
{
  id: "JM008",
  codigo: "JM008",
  categoria: "juegos-mesa",
  nombre: "Wingspan",
  precio: 35990,
  // imagen: "/assets/images/wingspan.jpg",
  descripcion: "Juego de motor de cartas sobre la observación y colección de aves. Ganador del Kennerspiel des Jahres.",
  especificaciones: {
    "Jugadores": "1-5",
    "Duración": "40-70 minutos",
    "Edad recomendada": "10+",
    "Contenido": "Tableros, cartas de aves, huevos, dados personalizados"
  }
},
{
  id: "JM009",
  codigo: "JM009",
  categoria: "juegos-mesa",
  nombre: "Codenames",
  precio: 21990,
  // imagen: "/assets/images/codenames.jpg",
  descripcion: "Descubre a los agentes secretos de tu equipo usando pistas y palabras clave.",
  especificaciones: {
    "Jugadores": "2-8",
    "Duración": "15 minutos",
    "Edad recomendada": "14+",
    "Contenido": "Cartas de palabras, cartas de agente, cronómetro"
  }
  },

  // === ACCESORIOS ===
  {
    id: "AC001",
    codigo: "AC001",
    categoria: "accesorios",
    nombre: "Controlador Inalámbrico Xbox Series X",
    precio: 59990,
    imagen: "/assets/images/xbox-controller.jpg",
    descripcion: "Controlador oficial con baja latencia y batería de larga duración.",
    especificaciones: {
      "Conexión": "Inalámbrica Bluetooth / 2.4GHz",
      "Batería": "Hasta 40 horas",
      "Compatibilidad": "Xbox Series X|S, Windows",
      "Peso": "275g",
      "Características": "Gatillos adaptativos, retroalimentación háptica"
    }
  },
  {
    id: "OF003",
    codigo: "OF003",
    categoria: "accesorios",
    nombre: "Auriculares Gamer HyperX Cloud II",
    precio: 69990,
    precioOriginal: 79990,
    imagen: "/assets/images/hyperx-cloud.jpg",
    descripcion: "Sonido envolvente 7.1, micrófono desmontable y almohadillas cómodas.",
    oferta: true,
    especificaciones: {
      "Sonido": "7.1 Surround",
      "Controlador": "53mm",
      "Micrófono": "Desmontable, omnidireccional",
      "Conexión": "USB con adaptador 3.5mm",
      "Compatibilidad": "PC, PS4, PS5, Switch"
    }
  },
  {
    id: "AC003",
    codigo: "AC003",
    categoria: "accesorios",
    nombre: "Teclado Mecánico Razer BlackWidow",
    precio: 99990,
    imagen: "/assets/images/blackwidow.jpg",
    descripcion: "Teclado con switches verdes, retroiluminación Chroma y diseño resistente.",
    especificaciones: {
      "Switches": "Razer Green (táctiles y clic)",
      "Teclas": "104 + 5 teclas macro",
      "Iluminación": "RGB Chroma",
      "Conexión": "USB-C",
      "Durabilidad": "80 millones de pulsaciones"
    }
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
    {
  id: "AC005",
  codigo: "AC005",
  categoria: "accesorios",
  nombre: "Soporte Dual Charging Dock PS5",
  precio: 24990,
  // imagen: "/assets/images/ps5-dock.jpg",
  descripcion: "Base de carga rápida para dos controles DualSense simultáneamente.",
  especificaciones: {
    "Compatibilidad": "Controles DualSense de PS5",
    "Conexión": "USB-C",
    "Tiempo de carga": "~2 horas",
    "Indicadores LED": "Rojo (cargando), Azul (completo)",
    "Seguridad": "Protección contra sobrecarga y sobrecalentamiento"
  }
},
{
  id: "AC006",
  codigo: "AC006",
  categoria: "accesorios",
  nombre: "Base enfriadora para laptop gamer",
  precio: 17990,
  // imagen: "/assets/images/laptop-cooler.jpg",
  descripcion: "Plataforma ajustable con 5 ventiladores LED y puertos USB extras.",
  especificaciones: {
    "Compatibilidad": "Laptops hasta 17\"",
    "Ventiladores": "5 con LED azul",
    "Altura regulable": "Sí, 6 posiciones",
    "Puertos": "2x USB 2.0"
  }
},
{
  id: "AC007",
  codigo: "AC007",
  categoria: "accesorios",
  nombre: "Antideslizante para silla gamer",
  precio: 9990,
  // imagen: "/assets/images/silla-pad.jpg",
  descripcion: "Alfombrilla circular, protege el piso y evita que deslice la silla.",
  especificaciones: {
    "Diámetro": "120 cm",
    "Material": "Poliéster, antifricción",
    "Color": "Negro",
    "Lavable": "Sí"
  }
},
{
  id: "AC008",
  codigo: "AC008",
  categoria: "accesorios",
  nombre: "Adaptador Bluetooth USB 5.0",
  precio: 6990,
  // imagen: "/assets/images/bluetooth-usb.jpg",
  descripcion: "Conecta auriculares, controles o smartphones al PC.",
  especificaciones: {
    "Versión": "Bluetooth 5.0",
    "Compatibilidad": "Windows, MacOS",
    "Alcance": "Hasta 20 metros",
    "Conexión": "USB-A"
  }
},
{
  id: "AC009",
  codigo: "AC009",
  categoria: "accesorios",
  nombre: "Bolso rígido protector para consola",
  precio: 25990,
  // imagen: "/assets/images/bolso-consola.jpg",
  descripcion: "Case resistente para transportar tu consola y accesorios.",
  especificaciones: {
    "Compatibilidad": "PS5, Xbox Series X|S, Switch",
    "Material": "EVA rígido",
    "Espacios": "Para consola, controles y cables"
  }
},

  // === CONSOLAS ===
  {
    id: "OF001",
    codigo: "OF001",
    categoria: "consolas",
    nombre: "PlayStation 5",
    precio: 499990,
    precioOriginal: 549990,
    imagen: "/assets/images/ps5.jpg",
    descripcion: "Consola de última generación con SSD ultrarrápido y gráficos 4K.",
    oferta: true,
    especificaciones: {
      "CPU": "AMD Zen 2, 8 núcleos @ 3.5GHz",
      "GPU": "AMD RDNA 2, 10.28 TFLOPS",
      "RAM": "16GB GDDR6",
      "Almacenamiento": "825GB SSD NVMe",
      "Resolución": "Hasta 4K @ 120Hz"
    }
  },
  {
    id: "CO002",
    codigo: "CO002",
    categoria: "consolas",
    nombre: "Nintendo Switch OLED",
    precio: 429990,
    imagen: "/assets/images/switch-oled.jpg",
    descripcion: "Pantalla OLED de 7, sonido mejorado y base con puerto LAN.",
    especificaciones: {
      "Pantalla": "7\" OLED",
      "Resolución": "1280x720",
      "Almacenamiento": "64GB (ampliable con microSD)",
      "Batería": "Hasta 9 horas",
      "Conectividad": "Wi-Fi, Bluetooth, LAN (en base)"
    }
  },
  {
    id: "CO003",
    codigo: "CO003",
    categoria: "consolas",
    nombre: "Steam Deck 512GB",
    precio: 699990,
    imagen: "/assets/images/steam-deck.jpg",
    descripcion: "Consola portátil para jugar juegos de Steam con Linux y Windows.",
    especificaciones: {
      "CPU": "AMD Zen 2, 4 núcleos @ 2.4-3.5GHz",
      "GPU": "AMD RDNA 2, 1.6 TFLOPS",
      "RAM": "16GB LPDDR5",
      "Almacenamiento": "512GB SSD NVMe",
      "Pantalla": "7\" LCD, 1280x800"
    }
  },
    {
  id: "CO004",
  codigo: "CO004",
  categoria: "consolas",
  nombre: "Xbox Series X",
  precio: 469990,
  // imagen: "/assets/images/xbox-series-x.jpg",
  descripcion: "Consola de rendimiento extremo con juegos en 4K y almacenamiento de alta velocidad.",
  especificaciones: {
    "CPU": "AMD Zen 2, 8 núcleos @ 3.8GHz",
    "GPU": "AMD RDNA 2, 12 TFLOPS",
    "RAM": "16GB GDDR6",
    "Almacenamiento": "1TB SSD NVMe",
    "Resolución": "Hasta 8K HDR"
  }
},
{
  id: "CO005",
  codigo: "CO005",
  categoria: "consolas",
  nombre: "Xbox Series S",
  precio: 299990,
  // imagen: "/assets/images/xbox-series-s.jpg",
  descripcion: "Consola compacta, digital y ultra silenciosa, perfecta para gaming en alta definición.",
  especificaciones: {
    "CPU": "AMD Zen 2, 8 núcleos @ 3.6GHz",
    "GPU": "AMD RDNA 2, 4 TFLOPS",
    "RAM": "10GB GDDR6",
    "Almacenamiento": "512GB SSD NVMe",
    "Resolución": "1440p hasta 120Hz"
  }
},
{
  id: "CO006",
  codigo: "CO006",
  categoria: "consolas",
  nombre: "Nintendo Switch Lite",
  precio: 219990,
  // imagen: "/assets/images/switch-lite.jpg",
  descripcion: "Consola portátil ideal para juego individual y en movimiento.",
  especificaciones: {
    "Pantalla": "5.5” LCD",
    "Resolución": "1280x720",
    "Batería": "Hasta 7 horas",
    "Almacenamiento": "32GB (microSD ampliable)"
  }
},
{
  id: "CO007",
  codigo: "CO007",
  categoria: "consolas",
  nombre: "PlayStation 5 Digital Edition",
  precio: 449990,
  // imagen: "/assets/images/ps5-digital.jpg",
  descripcion: "La versión digital de la popular PS5, sin lector de discos.",
  especificaciones: {
    "CPU": "AMD Zen 2, 8 núcleos @ 3.5GHz",
    "GPU": "AMD RDNA 2, 10.28 TFLOPS",
    "RAM": "16GB GDDR6",
    "Almacenamiento": "825GB SSD NVMe",
    "Resolución": "Hasta 4K @ 120Hz"
  }
},
{
  id: "CO008",
  codigo: "CO008",
  categoria: "consolas",
  nombre: "Atari VCS 800",
  precio: 199990,
  // imagen: "/assets/images/atari-vcs.jpg",
  descripcion: "Moderna consola retro compatible con juegos clásicos y actuales.",
  especificaciones: {
    "CPU": "AMD Ryzen Embedded R1606G",
    "GPU": "AMD Vega 3",
    "RAM": "8GB DDR4 upgradable",
    "Almacenamiento": "32GB eMMC + ampliable SSD",
    "Salida": "HDMI 2.0"
  }
  },
    
  // === COMPUTADORES GAMERS ===
  {
    id: "OF004",
    codigo: "OF004",
    categoria: "computadores-gamers",
    nombre: "PC Gamer ASUS ROG Strix",
    precio: 1199990,
    precioOriginal: 1299990,
    imagen: "/assets/images/rog-strix.jpg",
    descripcion: "Intel Core i7, 16GB RAM, RTX 3070, SSD 1TB. Listo para cualquier juego.",
    oferta: true,
    especificaciones: {
      "Procesador": "Intel Core i7-12700K",
      "RAM": "16GB DDR5 4800MHz",
      "GPU": "NVIDIA RTX 3070 8GB",
      "Almacenamiento": "1TB SSD NVMe",
      "Fuente": "650W 80+ Gold"
    }
  },
  {
    id: "CG002",
    codigo: "CG002",
    categoria: "computadores-gamers",
    nombre: "PC Gamer MSI Infinite",
    precio: 1499990,
    imagen: "/assets/images/msi-infinite.jpg",
    descripcion: "Intel i9, RTX 4080, 32GB RAM, SSD 2TB. Máximo rendimiento.",
    especificaciones: {
      "Procesador": "Intel Core i9-13900K",
      "RAM": "32GB DDR5 6000MHz",
      "GPU": "NVIDIA RTX 4080 16GB",
      "Almacenamiento": "2TB SSD NVMe",
      "Fuente": "850W 80+ Platinum"
    }
  },
  {
    id: "CG003",
    codigo: "CG003",
    categoria: "computadores-gamers",
    nombre: "PC Gamer All-In-One Razer",
    precio: 1799990,
    imagen: "/assets/images/razer-aio.jpg",
    descripcion: "Todo en uno con pantalla 4K, refrigeración líquida y diseño premium.",
    especificaciones: {
      "Procesador": "Intel Core i7-12700H",
      "RAM": "32GB DDR4",
      "GPU": "NVIDIA RTX 3060",
      "Pantalla": "27\" 4K UHD",
      "Refrigeración": "Líquida 240mm"
    }
  },
    {
  id: "CG004",
  codigo: "CG004",
  categoria: "computadores-gamers",
  nombre: "PC Gamer Lenovo Legion T5",
  precio: 1099990,
  // imagen: "/assets/images/legion-t5.jpg",
  descripcion: "AMD Ryzen 7, RTX 3060 Ti, 16GB RAM y SSD 1TB. Ideal para juegos exigentes.",
  especificaciones: {
    "Procesador": "AMD Ryzen 7 5800X",
    "RAM": "16GB DDR4 3200MHz",
    "GPU": "NVIDIA RTX 3060 Ti 8GB",
    "Almacenamiento": "1TB SSD NVMe",
    "Fuente": "750W 80+ Bronze"
  }
},
{
  id: "CG005",
  codigo: "CG005",
  categoria: "computadores-gamers",
  nombre: "PC Gamer HP Omen 25L",
  precio: 1149990,
  // imagen: "/assets/images/hp-omen-25l.jpg",
  descripcion: "PC de torre con Intel i7, RTX 4060, lista para streaming y VR.",
  especificaciones: {
    "Procesador": "Intel Core i7-13700F",
    "RAM": "16GB DDR5 4800MHz",
    "GPU": "NVIDIA RTX 4060 8GB",
    "Almacenamiento": "1TB SSD NVMe",
    "Fuente": "600W 80+"
  }
},
{
  id: "CG006",
  codigo: "CG006",
  categoria: "computadores-gamers",
  nombre: "PC Gamer Alienware Aurora R13",
  precio: 1799990,
  // imagen: "/assets/images/alienware-r13.jpg",
  descripcion: "Máximo rendimiento con Intel i9 y RTX 3080, refrigeración líquida.",
  especificaciones: {
    "Procesador": "Intel Core i9-12900KF",
    "RAM": "32GB DDR5 5200MHz",
    "GPU": "NVIDIA RTX 3080 10GB",
    "Almacenamiento": "2TB SSD NVMe",
    "Enfriamiento": "Líquido"
  }
},
{
  id: "CG007",
  codigo: "CG007",
  categoria: "computadores-gamers",
  nombre: "PC Gamer Acer Predator Orion 3000",
  precio: 1399990,
  // imagen: "/assets/images/predator-orion.jpg",
  descripcion: "Diseño compacto, Intel i5, RTX 3060 y RGB personalizable.",
  especificaciones: {
    "Procesador": "Intel Core i5-13500",
    "RAM": "16GB DDR4 3600MHz",
    "GPU": "NVIDIA RTX 3060 12GB",
    "Almacenamiento": "1TB SSD NVMe"
  }
},
{
  id: "CG008",
  codigo: "CG008",
  categoria: "computadores-gamers",
  nombre: "PC Gamer Gigabyte Aorus",
  precio: 1599990,
  // imagen: "/assets/images/aorus-gaming.jpg",
  descripcion: "Ryzen 9, RTX 3070 Ti y LEDs RGB. Ideal para entusiastas.",
  especificaciones: {
    "Procesador": "AMD Ryzen 9 7900X",
    "RAM": "32GB DDR5 5600MHz",
    "GPU": "NVIDIA RTX 3070 Ti 8GB",
    "Almacenamiento": "1TB SSD NVMe"
  }
  },

  // === SILLAS GAMERS ===
  {
    id: "OF002",
    codigo: "OF002",
    categoria: "sillas-gamers",
    nombre: "Silla Gamer Secretlab Titan",
    precio: 299990,
    precioOriginal: 349990,
    imagen: "/assets/images/secretlab.jpg",
    descripcion: "Diseño ergonómico, soporte lumbar ajustable y tapiz de cuero premium.",
    oferta: true
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
    {
  id: "SG004",
  codigo: "SG004",
  categoria: "sillas-gamers",
  nombre: "Silla DXRacer Formula Series",
  precio: 269990,
  // imagen: "/assets/images/dxracer-formula.jpg",
  descripcion: "Diseño ergonómico tipo competición, con soporte lumbar y cojín cervical incluidos.",
  especificaciones: {
    "Material": "Cuero PU y estructura de acero",
    "Reclinación": "90° - 135°",
    "Altura ajustable": "Sí",
    "Peso máximo": "120kg",
    "Base": "Metal reforzado"
  }
},
{
  id: "SG005",
  codigo: "SG005",
  categoria: "sillas-gamers",
  nombre: "Silla Talius Mamba RGB",
  precio: 259990,
  // imagen: "/assets/images/talius-mamba.jpg",
  descripcion: "Silla con tiras RGB integradas y reposabrazos 3D.",
  especificaciones: {
    "Material": "Cuero sintético y malla",
    "Reclinación": "Hasta 150°",
    "Peso máximo": "130kg",
    "Luces": "RGB laterales USB"
  }
},
{
  id: "SG006",
  codigo: "SG006",
  categoria: "sillas-gamers",
  nombre: "Silla Cougar Armor S",
  precio: 279990,
  // imagen: "/assets/images/cougar-armor.jpg",
  descripcion: "Silla premium ergonómica, cojines incluidos y tela transpirable.",
  especificaciones: {
    "Material": "Microfibra, base acero",
    "Peso máximo": "150kg",
    "Reclinación": "180°",
    "Reposabrazos": "Ajustables 4D"
  }
},
{
  id: "SG007",
  codigo: "SG007",
  categoria: "sillas-gamers",
  nombre: "Silla ThunderX3 BC3 Boss",
  precio: 219990,
  // imagen: "/assets/images/thunderx3-bc3.jpg",
  descripcion: "Silla estilo racing de tela con espuma premium.",
  especificaciones: {
    "Material": "Tela microperforada y poliuretano",
    "Peso máximo": "150kg",
    "Reclinación": "165°",
    "Soporte": "Ergonómico, cojines incluidos"
  }
},
{
  id: "SG008",
  codigo: "SG008",
  categoria: "sillas-gamers",
  nombre: "Silla gamer Trust GXT 707",
  precio: 209990,
  // imagen: "/assets/images/trust-gxt707.jpg",
  descripcion: "Ajuste total con respaldo reclinable, diseño resistente y cojín lumbar.",
  especificaciones: {
    "Material": "Simil cuero",
    "Peso máximo": "120kg",
    "Base": "Con ruedas nylon reforzadas",
    "Soportes": "Cervical y lumbar removibles"
  }
},

  // === MOUSE ===
  {
    id: "OF005",
    codigo: "OF005",
    categoria: "mouse",
    nombre: "Mouse Gamer Logitech G502 HERO",
    precio: 39990,
    precioOriginal: 49990,
    imagen: "/assets/images/g502.jpg",
    descripcion: "Sensor HERO 25K, 11 botones programables y RGB personalizable.",
    oferta: true,
    especificaciones: {
      "Sensor": "HERO 25K",
      "DPI": "Hasta 25,600",
      "Botones": "11 programables",
      "Peso": "121g",
      "Iluminación": "RGB personalizable"
    }
  },
  {
    id: "MS002",
    codigo: "MS002",
    categoria: "mouse",
    nombre: "Mouse Razer Viper 8KHz",
    precio: 69990,
    imagen: "/assets/images/viper.jpg",
    descripcion: "Sensor óptico de 8000Hz, peso ultraligero y diseño ambidiestro.",
    especificaciones: {
      "Sensor": "Razer Focus+",
      "Frecuencia": "8000Hz",
      "Peso": "74g",
      "DPI": "Hasta 20,000",
      "Diseño": "Ambidiestro"
    }
  },
  {
    id: "MS003",
    codigo: "MS003",
    categoria: "mouse",
    nombre: "Mouse Logitech G Pro X Superlight",
    precio: 79990,
    imagen: "/assets/images/g-pro.jpg",
    descripcion: "Solo 63g, sensor HERO 25K y batería de 70 horas.",
    especificaciones: {
      "Peso": "63g",
      "Sensor": "HERO 25K",
      "Batería": "Hasta 70 horas",
      "DPI": "Hasta 25,600",
      "Conexión": "Inalámbrico Lightspeed"
    }
  },
    {
  id: "MS004",
  codigo: "MS004",
  categoria: "mouse",
  nombre: "Mouse Corsair Dark Core RGB Pro",
  precio: 89990,
  // imagen: "/assets/images/darkcore.jpg",
  descripcion: "Mouse inalámbrico RGB con sensor de alta precisión y carga rápida Qi.",
  especificaciones: {
    "Sensor": "PixArt PAW3392",
    "DPI": "Hasta 18,000",
    "Conectividad": "Bluetooth / 2.4GHz",
    "Autonomía": "Hasta 50 horas",
    "Iluminación": "9 zonas RGB personalizables"
  }
},
{
  id: "MS005",
  codigo: "MS005",
  categoria: "mouse",
  nombre: "Mouse SteelSeries Rival 600",
  precio: 69990,
  // imagen: "/assets/images/rival600.jpg",
  descripcion: "Sensor dual para máxima precisión, sistema de pesas ajustable.",
  especificaciones: {
    "Sensor": "TrueMove3+ dual",
    "DPI": "Hasta 12,000",
    "Peso": "96g a 128g (ajustable)",
    "Botones": "8 programables",
    "Conexión": "USB"
  }
},
{
  id: "MS006",
  codigo: "MS006",
  categoria: "mouse",
  nombre: "Mouse Glorious Model O",
  precio: 54990,
  // imagen: "/assets/images/model-o.jpg",
  descripcion: "Ultraligero con 67g, cable flexible y RGB.",
  especificaciones: {
    "Sensor": "Pixart PMW-3360",
    "DPI": "Hasta 12,000",
    "Peso": "67g",
    "Iluminación": "RGB",
    "Conexión": "USB"
  }
},
{
  id: "MS007",
  codigo: "MS007",
  categoria: "mouse",
  nombre: "Mouse Redragon M808 Storm",
  precio: 29990,
  // imagen: "/assets/images/redragon-m808.jpg",
  descripcion: "Diseño de panal ultraligero con iluminación RGB controlable.",
  especificaciones: {
    "Sensor": "Pixart 3327",
    "DPI": "Hasta 12,400",
    "Peso": "85g",
    "Iluminación": "RGB dinámica",
    "Botones": "7 programables"
  }
},
{
  id: "MS008",
  codigo: "MS008",
  categoria: "mouse",
  nombre: "Mouse ASUS ROG Gladius III",
  precio: 79990,
  // imagen: "/assets/images/rog-gladius3.jpg",
  descripcion: "Sensor óptico de 26,000 DPI, switches intercambiables y diseño ergonómico.",
  especificaciones: {
    "Sensor": "ROG AimPoint 26,000 DPI",
    "Peso": "89g",
    "Botones": "6 programables",
    "Iluminación": "Aura RGB",
    "Switches": "Intercambiables"
  }
  },

  // === MOUSEPAD ===
  {
    id: "OF010",
    codigo: "OF010",
    categoria: "mousepad",
    nombre: "Mousepad Razer Goliathus Extended Chroma",
    precio: 23990,
    precioOriginal: 29990,
    imagen: "/assets/images/goliathus.jpg",
    descripcion: "Superficie optimizada para precisión, con iluminación Chroma RGB.",
    oferta: true
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
    id: "OF009",
    codigo: "OF009",
    categoria: "polerones-gamers",
    nombre: "Poleron 'Stay Frosty'",
    precio: 44990,
    precioOriginal: 54990,
    imagen: "/assets/images/poleron-frosty.jpg",
    descripcion: "Polar térmico, capucha con cordón y estampado resistente.",
    oferta: true
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
    id: "OF007",
    codigo: "OF007",
    categoria: "perifericos-streaming",
    nombre: "Micrófono Elgato Wave 3",
    precio: 109990,
    precioOriginal: 129990,
    imagen: "/assets/images/wave3.jpg",
    descripcion: "Micrófono USB con calidad de estudio, software de control y filtro pop integrado.",
    oferta: true,
    especificaciones: {
      "Tipo": "Condensador USB",
      "Patrón": "Cardioide",
      "Frecuencia": "20Hz - 20kHz",
      "Muestreo": "48kHz / 24-bit",
      "Software": "Wave Link (mixer y efectos)"
    }
  },
  {
    id: "ST002",
    codigo: "ST002",
    categoria: "perifericos-streaming",
    nombre: "Cámara Logitech Brio 4K",
    precio: 189990,
    imagen: "/assets/images/brio.jpg",
    descripcion: "Cámara 4K con HDR, corrección de luz automática y enfoque rápido.",
    especificaciones: {
      "Resolución": "4K UHD @ 30fps",
      "HDR": "Sí",
      "Campo": "90°",
      "Enfoque": "Automático",
      "Micrófonos": "Estéreo"
    }
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
    descripcion: "6 teclas programables para cambiar escenas, sonidos y acciones en vivo.",
    especificaciones: {
      "Teclas": "6 LCD programables",
      "Software": "Elgato Stream Deck",
      "Conexión": "USB 3.0",
      "Compatibilidad": "OBS, Twitch, Discord, Spotify",
      "Pantalla": "OLED de 5.5\""
    }
  },
    {
  id: "ST005",
  codigo: "ST005",
  categoria: "perifericos-streaming",
  nombre: "Micrófono Shure MV7",
  precio: 199990,
  // imagen: "/assets/images/shure-mv7.jpg",
  descripcion: "Micrófono híbrido USB/XLR con sonido profesional y control táctil.",
  especificaciones: {
    "Tipo": "Dinámico",
    "Conexión": "USB y XLR",
    "Patrón": "Cardioide",
    "Respuesta de frecuencia": "50Hz - 16kHz",
    "Requisitos": "Windows, macOS, iOS"
  }
},
{
  id: "ST006",
  codigo: "ST006",
  categoria: "perifericos-streaming",
  nombre: "Webcam Razer Kiyo Pro",
  precio: 149990,
  // imagen: "/assets/images/kiyo-pro.jpg",
  descripcion: "Cámara Full HD con sensor adaptativo a la luz y anillo de iluminación.",
  especificaciones: {
    "Resolución": "1080p @ 60fps",
    "Lente": "Gran angular",
    "Iluminación": "Anillo ajustable",
    "Conexión": "USB 3.0"
  }
},
{
  id: "ST007",
  codigo: "ST007",
  categoria: "perifericos-streaming",
  nombre: "Elgato Green Screen",
  precio: 129990,
  // imagen: "/assets/images/green-screen.jpg",
  descripcion: "Panel chroma plegable y portátil, fácil despliegue para streams.",
  especificaciones: {
    "Tamaño": "148 x 180 cm",
    "Material": "Tela poliéster",
    "Portabilidad": "Estructura retráctil"
  }
},
{
  id: "ST008",
  codigo: "ST008",
  categoria: "perifericos-streaming",
  nombre: "Soporte brazo articulado Blue Compass",
  precio: 89990,
  // imagen: "/assets/images/blue-compass.jpg",
  descripcion: "Brazo premium para micrófono, rotación de 360° y manejo integrado de cable.",
  especificaciones: {
    "Longitud": "80cm total",
    "Rotación": "360°",
    "Compatibilidad": "Micrófonos estándar",
    "Carga máxima": "1kg"
  }
},
{
  id: "ST009",
  codigo: "ST009",
  categoria: "perifericos-streaming",
  nombre: "Elgato Cam Link 4K",
  precio: 109990,
  // imagen: "/assets/images/camlink4k.jpg",
  descripcion: "Convierte tu cámara réflex, videocámara o action cam en webcam 4K.",
  especificaciones: {
    "Resolución máxima": "4K @ 30fps",
    "Conexión": "USB 3.0",
    "Compatibilidad": "HDMI cámaras DSLR/mirrorless"
  }
},

  // === ILUMINACIÓN RGB ===
  {
    id: "OF008",
    codigo: "OF008",
    categoria: "iluminacion-rgb",
    nombre: "Tiras LED Razer Chroma",
    precio: 29990,
    precioOriginal: 39990,
    imagen: "/assets/images/razer-leds.jpg",
    descripcion: "Tiras RGB sincronizables con juegos y periféricos Razer.",
    oferta: true,
    especificaciones: {
      "Longitud": "2 metros",
      "LEDs": "10 LEDs direccionables",
      "Control": "Razer Chroma RGB",
      "Compatibilidad": "Razer Synapse, juegos, Philips Hue",
      "Conexión": "USB + alimentación 5V"
    }
  },
  {
    id: "IL002",
    codigo: "IL002",
    categoria: "iluminacion-rgb",
    nombre: "Lámpara Philips Hue Play",
    precio: 59990,
    imagen: "/assets/images/hue-play.jpg",
    descripcion: "Luz ambiental para detrás del monitor, controlable por app.",
    especificaciones: {
      "Tipo": "Luz LED ambiental",
      "Control": "App Philips Hue",
      "Colores": "16 millones (RGB)",
      "Conexión": "Puente Philips Hue (requerido)",
      "Uso": "Interior, detrás de TV/monitor"
    }
  },
  {
    id: "IL003",
    codigo: "IL003",
    categoria: "iluminacion-rgb",
    nombre: "Ventilador RGB Corsair LL120",
    precio: 45990,
    imagen: "/assets/images/ll120.jpg",
    descripcion: "Ventilador de CPU con 16 LEDs RGB direccionables y bajo ruido.",
    especificaciones: {
      "Tamaño": "120mm",
      "RPM": "400 - 1500 RPM",
      "Ruido": "Hasta 29 dBA",
      "LEDs": "16 RGB direccionables",
      "Conexión": "PWM + Corsair iCUE"
    }
  },
  {
  id: "IL004",
  codigo: "IL004",
  categoria: "iluminacion-rgb",
  nombre: "Nanoleaf Shapes Hexagons Starter Kit",
  precio: 189990,
  // imagen: "/assets/images/nanoleaf-hex.jpg",
  descripcion: "Paneles LED modulares con sincronización musical y control por voz.",
  especificaciones: {
    "Unidades incluidas": "9 paneles hexagonales",
    "Colores": "16 millones",
    "Control": "App Nanoleaf / Google Assistant / Alexa",
    "Montaje": "Adhesivo o magnético",
    "Sincronización": "Reacciona al sonido y contenido en pantalla"
  }
},
{
  id: "IL005",
  codigo: "IL005",
  categoria: "iluminacion-rgb",
  nombre: "Philips Hue Go v2",
  precio: 89990,
  // imagen: "/assets/images/hue-go.jpg",
  descripcion: "Lámpara portátil RGB recargable con control por app y voz.",
  especificaciones: {
    "Tipo": "Luz LED portátil",
    "Colores": "16 millones",
    "Batería": "Hasta 18 horas",
    "Control": "App/Google/Alexa",
    "Conexión": "Bluetooth/Bridge Philips Hue"
  }
},
{
  id: "IL006",
  codigo: "IL006",
  categoria: "iluminacion-rgb",
  nombre: "Kit LED Corsair iCUE LS100",
  precio: 99990,
  // imagen: "/assets/images/ls100.jpg",
  descripcion: "Tiras LED inteligentes para monitor, sincronizables con juegos.",
  especificaciones: {
    "Longitud": "4x 450 mm",
    "Colores": "RGB direccionable",
    "Control": "Corsair iCUE",
    "Montaje": "Adhesivo"
  }
},
{
  id: "IL007",
  codigo: "IL007",
  categoria: "iluminacion-rgb",
  nombre: "Lámpara Trust GXT 256 Exxo",
  precio: 34990,
  // imagen: "/assets/images/trust-exxo.jpg",
  descripcion: "Lámpara de mesa RGB, varios modos de luz y control táctil.",
  especificaciones: {
    "Tipo": "Luz de escritorio",
    "Colores": "RGB y blanco cálido",
    "Control": "Táctil y por app",
    "Base": "Antideslizante"
  }
},
{
  id: "IL008",
  codigo: "IL008",
  categoria: "iluminacion-rgb",
  nombre: "Paneles LED Cololight Plus",
  precio: 129990,
  // imagen: "/assets/images/cololight-plus.jpg",
  descripcion: "Paneles hexagonales RGB expandibles compatibles con Alexa.",
  especificaciones: {
    "Unidades": "6 paneles básicos",
    "Colores": "16 millones",
    "Control": "App/Alexa/Google Home",
    "Montaje": "Magnético/adhesivo"
  }
},
  
];