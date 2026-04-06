// -------------------- DATOS LOCALES --------------------
const CATEGORIAS_BD = [
  "Auriculares Gamer",
  "Multimedia",
  "Auriculares Ejecutivos",
  "Auriculares para la Escucha",
  "Bancos de Carga",
  "Teclados",
  "Motorizados",
  "Intercomunicadores Ejeas",
  "Smartwatch",
  "Cargadores Xiaomi Turbo Charger",
  "Auriculares de Monitoreo",
  "Micrófono de Solapa",
  "Enfriadores Móviles"
];

const PRODUCTOS_BD = [
  {
    "nombre": "P30",
    "categoria": "Auriculares Gamer",
    "descripcion": "Auriculares gamer estéreo con sonido envolvente 7.1 virtual, micrófono con cancelación de ruido omnidireccional y luces LED integradas. Almohadillas de espuma viscoelástica para largas sesiones.",
    "precio": 20,
    "imagen": "img/prod_p30.jpg"
  },
  {
    "nombre": "P36 Cobra",
    "categoria": "Auriculares Gamer",
    "descripcion": "Audífonos gaming premium con drivers de 50mm para graves profundos. Micrófono flexible, estructura de metal reforzado y control de volumen en el cable trenzado ultrarresistente.",
    "precio": 25,
    "imagen": "img/prod_p36-cobra.jpg"
  },
  {
    "nombre": "P50",
    "categoria": "Auriculares Gamer",
    "descripcion": "Headset de alta precisión con audio espacial, diadema autoajustable y orejeras transpirables. Cuenta con conectividad USB multiplataforma y aislamiento acústico pasivo avanzado.",
    "precio": 30,
    "imagen": "img/prod_p50.jpg"
  },
  {
    "nombre": "K89",
    "categoria": "Auriculares Gamer",
    "descripcion": "Audífonos competitivos ligeros con tecnología de baja latencia. Sistema de iluminación RGB vibrante, micrófono abatible con mute automático y conector jack de 3.5mm.",
    "precio": 22,
    "imagen": "img/prod_k89.jpg"
  },
  {
    "nombre": "Zombiescast B5",
    "categoria": "Auriculares Gamer",
    "descripcion": "Auriculares over-ear con vibración háptica inmersiva, sonido estéreo de alta resolución y micrófono desmontable. Ideales para setups de streaming gracias a su diseño vanguardista.",
    "precio": 28,
    "imagen": "img/prod_zombiescast-b5.jpg"
  },
  {
    "nombre": "Inva",
    "categoria": "Auriculares Gamer",
    "descripcion": "Diseño ultraligero de 250g pensado para torneos eSports. Drivers magnéticos de neodimio, cable mallado anti-enredos y compatibilidad total con PC, PS5 y Xbox.",
    "precio": 20,
    "imagen": "img/prod_inva.jpg"
  },
  {
    "nombre": "X35",
    "categoria": "Auriculares Gamer",
    "descripcion": "Disfruta de sonido cristalino con los X35. Integran diafragmas optimizados para frecuencias medias y altas, RGB dinámico de 16 millones de colores y estructura ergonómica.",
    "precio": 24,
    "imagen": "img/prod_x35.jpg"
  },
  {
    "nombre": "H03",
    "categoria": "Auriculares Gamer",
    "descripcion": "Auriculares entry-level de alto valor. Sonido estéreo 2.0 balanceado, bajos potenciados, micrófono pivotante y almohadillas de ecocuero súper suaves para máxima comodidad.",
    "precio": 19,
    "imagen": "img/prod_h03.jpg"
  },
  {
    "nombre": "Auriculares Dobles M22",
    "categoria": "Multimedia",
    "descripcion": "Audífonos in-ear alámbricos ideales para multimedia. Cable reforzado en TPE de 1.2 metros, impedancia de 16 ohmios y calidad de audio superior con graves acentuados.",
    "precio": 25,
    "imagen": "img/prod_auriculares-dobles-m22.jpg"
  },
  {
    "nombre": "Auriculares Dobles DX-42",
    "categoria": "Multimedia",
    "descripcion": "Ofrecen un escenario sonoro amplio para música y películas. Sensibilidad de 105dB, conector bañado en oro, control multimedia con respuesta háptica y diseño resistente al sudor.",
    "precio": 27,
    "imagen": "img/prod_auriculares-dobles-dx-42.jpg"
  },
  {
    "nombre": "Auriculares A9 Pro",
    "categoria": "Multimedia",
    "descripcion": "Auriculares TWS Bluetooth 5.3 con cancelación activa de ruido (ANC). Autonomía de hasta 6 horas continuas, estuche de carga inteligente y control táctil capacitivo.",
    "precio": 30,
    "imagen": "img/prod_auriculares-a9-pro.jpg"
  },
  {
    "nombre": "Auriculares M20 Pro",
    "categoria": "Multimedia",
    "descripcion": "Tecnología Bluetooth de última generación con bajos tipo subwoofer. Emparejamiento automático, protección IPX5 contra agua y pantalla LED indicadora de batería en el estuche.",
    "precio": 28,
    "imagen": "img/prod_auriculares-m20-pro.jpg"
  },
  {
    "nombre": "Auriculares N35 Pro",
    "categoria": "Multimedia",
    "descripcion": "Reducción de ruido ambiental ENC para llamadas claras. Baja latencia de 65ms ideal para juegos móviles, diseño ergonómico in-ear con almohadillas de silicona premium.",
    "precio": 30,
    "imagen": "img/prod_auriculares-n35-pro.jpg"
  },
  {
    "nombre": "Auriculares YD03",
    "categoria": "Multimedia",
    "descripcion": "Auriculares Bluetooth con diseño elegante y pantalla LED en formato espejo. Controles táctiles integrados, sonido hifi estéreo 9D y carga rápida a través de Type-C.",
    "precio": 22,
    "imagen": "img/prod_auriculares-yd03.jpg"
  },
  {
    "nombre": "Auriculares YD04",
    "categoria": "Multimedia",
    "descripcion": "Auriculares deportivos compactos con hasta 5 horas de autonomía. Micrófono HD incorporado, protección contra salpicaduras y bajos potenciados para disfrutar cada canción.",
    "precio": 23,
    "imagen": "img/prod_auriculares-yd04.jpg"
  },
  {
    "nombre": "YYK-520",
    "categoria": "Auriculares Ejecutivos",
    "descripcion": "Auricular manos libres Bluetooth 5.1 con brazo giratorio de 180° para ambas orejas. Batería de gran capacidad de 500mAh con estuche tipo ejecutivo y reducción de viento.",
    "precio": 35,
    "imagen": "img/prod_yyk-520.jpg"
  },
  {
    "nombre": "YYK-525",
    "categoria": "Auriculares Ejecutivos",
    "descripcion": "Manos libres premium para negocios con micrófono doble para ENC. Diseño ultradelgado, comandos de voz inteligentes y autonomía de hasta 12 horas en conversación continua.",
    "precio": 38,
    "imagen": "img/prod_yyk-525.jpg"
  },
  {
    "nombre": "Intrauditivo Individual Z-360BT",
    "categoria": "Auriculares para la Escucha",
    "descripcion": "Auricular individual discreto con Bluetooth 5.0. Pesa tan solo 3 gramos, ajuste invisible e incorpora un botón multifunción para gestionar música y llamadas de forma discreta.",
    "precio": 15,
    "imagen": "img/prod_intrauditivo-individual-z-360bt.jpg"
  },
  {
    "nombre": "Powerbank de 50 mil MAP con panel y carga corriente",
    "categoria": "Bancos de Carga",
    "descripcion": "Cargador portátil de 50,000 mAh reales con linterna LED brillante. Incluye pequeño panel solar de respaldo para emergencias, 4 salidas USB simultáneas y protección de sobrevoltaje.",
    "precio": 40,
    "imagen": "img/prod_powerbank-de-50-mil-map-con-panel-y-carga-corriente.jpg"
  },
  {
    "nombre": "Powerbank de 50 mil MAP carga corriente",
    "categoria": "Bancos de Carga",
    "descripcion": "Inmensa capacidad de reserva: hasta 10 cargas completas para smartphones promedio. Carga rápida bidireccional de 22.5W, pantalla digital LCD e indicador inteligente de carga segura.",
    "precio": 35,
    "imagen": "img/prod_powerbank-de-50-mil-map-carga-corriente.jpg"
  },
  {
    "nombre": "Mini Teclado Bluetooth Recargable",
    "categoria": "Teclados",
    "descripcion": "Teclado ultra delgado (7mm) y ligero. Switch de tijera silencioso, batería recargable vía Micro USB que dura semanas, y compatible de forma nativa con Android, iOS, Windows y Mac.",
    "precio": 18,
    "imagen": "img/prod_mini-teclado-bluetooth-recargable.jpg"
  },
  {
    "nombre": "Combo Teclado Puerto USB - Baterías",
    "categoria": "Teclados",
    "descripcion": "Set inálambrico 2.4GHz Plug & Play que incluye teclado completo de 104 teclas y ratón óptico de 1200 DPI. Receptor USB unificado y diseño resistente a salpicaduras.",
    "precio": 20,
    "imagen": "img/prod_combo-teclado-puerto-usb-bater-as.jpg"
  },
  {
    "nombre": "Holder Araña Anti Vibración de Manubrio",
    "categoria": "Motorizados",
    "descripcion": "Soporte para celulares de aleación de plástico rígido. Diseño de araña estabilizadora que absorbe fuertes vibraciones, rotación 360° y compatible con teléfonos de 4 a 7 pulgadas.",
    "precio": 15,
    "imagen": "img/prod_holder-ara-a-anti-vibraci-n-de-manubrio.jpg"
  },
  {
    "nombre": "Holder Araña Anti Vibración con Carga Tipo C y MagSafe de Agarre al Espejo",
    "categoria": "Motorizados",
    "descripcion": "Soporte avanzado para motocicleta al espejo retrovisor. Incluye puerto USB y Tipo C incorporado para carga rápida directa en ruta y compatibilidad magnética estilo MagSafe.",
    "precio": 30,
    "imagen": "img/prod_holder-ara-a-anti-vibraci-n-con-carga-tipo-c-y-magsafe-de-agarre-al-espejo.jpg"
  },
  {
    "nombre": "Holder de Araña",
    "categoria": "Motorizados",
    "descripcion": "Soporte tipo araña tradicional de silicona flexible y elástica. Adaptable a cualquier tipo de manubrio, sujetando las cuatro esquinas del dispositivo sin bloquear botones o pantallas.",
    "precio": 12,
    "imagen": "img/prod_holder-de-ara-a.jpg"
  },
  {
    "nombre": "Holdr Porta Vaso",
    "categoria": "Motorizados",
    "descripcion": "Accesorio rígido de montaje en manubrio o defensas para llevar botellas, vasos térmicos o bebidas. Interior de goma antideslizante para evitar que el contenido se derrame con el viento.",
    "precio": 10,
    "imagen": "img/prod_holdr-porta-vaso.jpg"
  },
  {
    "nombre": "Holder para Carro",
    "categoria": "Motorizados",
    "descripcion": "Soporte ajustable universal para parabrisas o tablero de auto mediante ventosa de gel adherente súper fuerte. Brazo extensible telescópico y mecanismo de liberación de un solo botón.",
    "precio": 14,
    "imagen": "img/prod_holder-para-carro.jpg"
  },
  {
    "nombre": "Auriculares para Casco BT12",
    "categoria": "Motorizados",
    "descripcion": "Sistema Bluetooth 5.0 ultradelgado diseñado para el interior de cascos abatibles y completos. Respuesta automática de llamadas y sonido de graves mejorados sin cables molestos.",
    "precio": 25,
    "imagen": "img/prod_auriculares-para-casco-bt12.jpg"
  },
  {
    "nombre": "Auriculares para Casco BT35",
    "categoria": "Motorizados",
    "descripcion": "Audio inalámbrico para motos con sistema inteligente antipolvo y resistente a salpicaduras ligeras. Micrófono de barra rígida moldeable, reduce ruidos del viento a más de 80km/h.",
    "precio": 28,
    "imagen": "img/prod_auriculares-para-casco-bt35.jpg"
  },
  {
    "nombre": "Auriculares para Casco Y30",
    "categoria": "Motorizados",
    "descripcion": "Conectividad estéreo de alta fidelidad, excelente para viajes largos en moto. Incorpora altavoces mejorados Hi-Fi y botones grandes exteriores fáciles de presionar incluso con guantes.",
    "precio": 30,
    "imagen": "img/prod_auriculares-para-casco-y30.jpg"
  },
  {
    "nombre": "Intercomunicador Y13 Pro",
    "categoria": "Motorizados",
    "descripcion": "Intercom para motociclistas con radio FM integrada, alcance de hasta 50 metros. Permite conectar el celular para música, GPS y cuenta con resistencia al agua IPX6.",
    "precio": 35,
    "imagen": "img/prod_intercomunicador-y13-pro.jpg"
  },
  {
    "nombre": "Intercomunicador Y20 Max",
    "categoria": "Motorizados",
    "descripcion": "Sistema de intercomunicación 2 vías potente para piloto-copiloto o comunicación entre motos corta. DSP de ruido, hasta 1000 horas de standby y comandos por asistente de voz.",
    "precio": 40,
    "imagen": "img/prod_intercomunicador-y20-max.jpg"
  },
  {
    "nombre": "Intercomunicador Y80 2X",
    "categoria": "Motorizados",
    "descripcion": "Intercomunicador dual band Full-Duplex que permite conectar con múltiples motocicletas (hasta 2 de forma simultánea). Certificación IP67 ideal para lluvias torrenciales y viajes extremos.",
    "precio": 45,
    "imagen": "img/prod_intercomunicador-y80-2x.jpg"
  },
  {
    "nombre": "Cargador de Moto (USB-USB) (USB-Tipo C)",
    "categoria": "Motorizados",
    "descripcion": "Toma de corriente dual instalable en el manillar o fusibles de moto. 12V-24V con salida inteligente 3.1A para puerto tipo A y Tipo C simultáneamente. Incluye tapa impermeable.",
    "precio": 15,
    "imagen": "img/prod_cargador-de-moto-usb-usb-usb-tipo-c.jpg"
  },
  {
    "nombre": "EJEAS V6 Pro",
    "categoria": "Intercomunicadores Ejeas",
    "descripcion": "El estándar de oro en comunicación. Intercom Bluetooth de hasta 1200m de alcance, soporta hasta 6 motociclistas rotativos. DSP de alta velocidad y batería de 850mAh.",
    "precio": 40,
    "imagen": "img/prod_ejeas-v6-pro.jpg"
  },
  {
    "nombre": "EJEAS Q7",
    "categoria": "Intercomunicadores Ejeas",
    "descripcion": "Sistema Bluetooth 5.1 que empareja y activa intercom al instante en 1 segundo. Chip Qualcomm avanzado, cancelación de ruido CVC e impermeable IP65. Alcance comprobado de 800m.",
    "precio": 35,
    "imagen": "img/prod_ejeas-q7.jpg"
  },
  {
    "nombre": "EJEAS Q8",
    "categoria": "Intercomunicadores Ejeas",
    "descripcion": "Modelo insignia con tecnología Mesh para comunicación simultánea con hasta 6 pilotos de manera ininterrumpida. Calidad de audio estéreo 3D y sistema de auto-reconexión si alguien sale del rango.",
    "precio": 38,
    "imagen": "img/prod_ejeas-q8.jpg"
  },
  {
    "nombre": "EJEAS K1",
    "categoria": "Intercomunicadores Ejeas",
    "descripcion": "Unidad de intercomunicación compacta y delgada, ideal para no comprometer la estética del casco. Soporta 2 pasajeros simultáneos, alcance de 500m con conexión HD continua.",
    "precio": 30,
    "imagen": "img/prod_ejeas-k1.jpg"
  },
  {
    "nombre": "EJEAS X10",
    "categoria": "Intercomunicadores Ejeas",
    "descripcion": "Cámara y comunicador 2 en 1. Grabación de video Full HD 1080p con lente gran angular, comunicación Bluetooth simultánea y batería masiva para registros largos de tus viajes moteros.",
    "precio": 42,
    "imagen": "img/prod_ejeas-x10.jpg"
  },
  {
    "nombre": "Smartwatch I90 Suit Extreme",
    "categoria": "Smartwatch",
    "descripcion": "Reloj inteligente ultrarresistente tipo deportivo-militar. Monitor de frecuencia cardíaca 24/7, medición de oxígeno en sangre, certificación IP68 y más de 100 modos deportivos.",
    "precio": 50,
    "imagen": "img/prod_smartwatch-i90-suit-extreme.jpg"
  },
  {
    "nombre": "Smartwatch Howear Ultra 2 Call 5G",
    "categoria": "Smartwatch",
    "descripcion": "Pantalla AMOLED infinita de alta resolución y cristal de zafiro. Compatible con recepción de llamadas vía Bluetooth de alta fidelidad, notificaciones en tiempo real corporativas y GPS.",
    "precio": 70,
    "imagen": "img/prod_smartwatch-howear-ultra-2-call-5g.jpg"
  },
  {
    "nombre": "Cargador de 33W",
    "categoria": "Cargadores Xiaomi Turbo Charger",
    "descripcion": "Cargador rápido Xiaomi original 33W QC3.0. Tecnología de control de temperatura de múltiples capas inteligente, ideal para cargar la mitad tu batería en 30 minutos. Compatible y seguro.",
    "precio": 20,
    "imagen": "img/prod_cargador-de-33w.jpg"
  },
  {
    "nombre": "Cargador de 67W",
    "categoria": "Cargadores Xiaomi Turbo Charger",
    "descripcion": "Cargador avanzado Xiaomi 67W. Incluye cable USB a Tipo C de 6 amperios. Carga completa del dispositivo en menos de 45 minutos. Componentes de nitruro de galio (GaN) anti-calentamiento.",
    "precio": 30,
    "imagen": "img/prod_cargador-de-67w.jpg"
  },
  {
    "nombre": "Cargador de 120W",
    "categoria": "Cargadores Xiaomi Turbo Charger",
    "descripcion": "La máxima velocidad de carga. HyperCharge Xiaomi 120W. Lleva tu teléfono del 0% al 100% en tan solo 15-20 minutos. El bloque incluye chip de protección de 9 niveles contra descargas.",
    "precio": 50,
    "imagen": "img/prod_cargador-de-120w.jpg"
  },
  {
    "nombre": "INEAR ZXT (Púrpura, Negro, Transparente)",
    "categoria": "Auriculares de Monitoreo",
    "descripcion": "Monitores de estudio in-ear con arquitectura de drivers dinámicos compuestos. Afinación acústica plana para músicos y productores, reducción de ruido pasiva extrema y calce ergonómico seguro.",
    "precio": 25,
    "imagen": "img/prod_inear-zxt-p-rpura-negro-transparente.jpg"
  },
  {
    "nombre": "INEAR ODIN",
    "categoria": "Auriculares de Monitoreo",
    "descripcion": "Avanzados monitores in-ear con sistema de múltiple balanceo. Respuesta en frecuencias sumamente detallada, logrando resaltar cada instrumento en vivo con su sonido analítico cristalino.",
    "precio": 28,
    "imagen": "img/prod_inear-odin.jpg"
  },
  {
    "nombre": "Cable Múltiple ODIN Q7",
    "categoria": "Auriculares de Monitoreo",
    "descripcion": "Cable de reemplazo OFC bañado en plata para monitores in-ear. Núcleo trenzado de 4 hilos sin enredos que mejora exponencialmente la transmisión de la señal auditiva minimizando interferencias.",
    "precio": 15,
    "imagen": "img/prod_cable-m-ltiple-odin-q7.jpg"
  },
  {
    "nombre": "Cable de Repuesto: Con/Sin Micrófono",
    "categoria": "Auriculares de Monitoreo",
    "descripcion": "Cable universal estándar de 2 pines y jack de 3.5mm para monitores intrauditivos. Seleccionable en versión con control de llamadas incluido o cable de audio directo clásico.",
    "precio": 10,
    "imagen": "img/prod_cable-de-repuesto-con-sin-micr-fono.jpg"
  },
  {
    "nombre": "Micrófono K15 (Entrada Tipo C -Plus-iPhone)",
    "categoria": "Micrófono de Solapa",
    "descripcion": "Sistema de micrófono inalámbrico Lavalier recargable 2.4GHz Plug & Play. Rango eficaz de recepción de 20 metros sin delays. Ideal para grabar TikTok, vlogs, entrevistas o transmisiones en directo.",
    "precio": 20,
    "imagen": "img/prod_micr-fono-k15-entrada-tipo-c-plus-iphone.jpg"
  },
  {
    "nombre": "Micrófono K61 (Tipo C)",
    "categoria": "Micrófono de Solapa",
    "descripcion": "Micrófono condenser para PC o móviles Tipo-C. Incorpora patrón polar omnidireccional con espuma corta viento de alta densidad y sujeción tipo corbata firme de metal premium.",
    "precio": 25,
    "imagen": "img/prod_micr-fono-k61-tipo-c.jpg"
  },
  {
    "nombre": "Enfriador CX07",
    "categoria": "Enfriadores Móviles",
    "descripcion": "Cooler semiconductor magnético avanzado para teléfonos móviles. Efecto de refrigeración extrema para largas jornadas prolongadas de gaming, evitando caídas de fotogramas por Thermal Throttling.",
    "precio": 15,
    "imagen": "img/prod_enfriador-cx07.jpg"
  },
  {
    "nombre": "Enfriador DL05",
    "categoria": "Enfriadores Móviles",
    "descripcion": "Ventilador enfriador RGB con abrazaderas extensibles, capaz de bajar la temperatura del teléfono hasta 10 grados en 3 minutos. Cuenta con pantalla de temperatura digital LCD y diseño silencioso.",
    "precio": 18,
    "imagen": "img/prod_enfriador-dl05.jpg"
  }
];

// -------------------- ADMIN CACHE --------------------
async function obtenerProductos() {
  const cached = localStorage.getItem("tech_products");
  if (cached) {
    let parsed = JSON.parse(cached);
    let bdImgMap = {};
    PRODUCTOS_BD.forEach(p => bdImgMap[p.nombre] = p.imagen);
    parsed = parsed.map(p => {
      // Usar imagen de BD si el producto no tiene una propia
      if (bdImgMap[p.nombre] && (!p.imagen || p.imagen === 'img/generico.png')) {
        p.imagen = bdImgMap[p.nombre];
      }
      // Migrar URLs antiguas de Drive (uc?export=view → thumbnail)
      if (p.imagen && p.imagen.includes('drive.google.com/uc')) {
        const idMatch = p.imagen.match(/[?&]id=([a-zA-Z0-9_-]+)/);
        if (idMatch) p.imagen = `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w600`;
      }
      return p;
    });
    localStorage.setItem("tech_products", JSON.stringify(parsed));
    return parsed;
  }

  const products = PRODUCTOS_BD;
  localStorage.setItem("tech_products", JSON.stringify(products));
  return products;
}

async function obtenerDatosGenerales() {
  // Defaults actualizados — si el caché tiene URLs antiguas de Facebook las corregimos
  const DEFAULTS = {
    nombre: "Tech Store Nicaragua",
    ubicacion: "Managua, Colonia 9 de Junio, Terminal de Ruta 119 2c al sur 1c abajo 1/2c al sur MI, Managua, Nicaragua",
    facebook: "https://www.facebook.com/p/Tech-Store-Nicaragua-61556545501927/",
    instagram: "https://www.instagram.com/techstorenic/",
    whatsapp: "50581503116"
  };

  let cached = localStorage.getItem("tech_datos");
  if (cached) {
    let datos = JSON.parse(cached);
    // Forzar actualización si la URL de Facebook o WhatsApp difiere de los defaults
    const needsUpdate =
      datos.ubicacion === "Managua, Nicaragua" ||
      datos.facebook !== DEFAULTS.facebook ||
      datos.whatsapp !== DEFAULTS.whatsapp;
    if (needsUpdate) {
      datos = Object.assign({}, DEFAULTS, {
        nombre: datos.nombre || DEFAULTS.nombre,
        ubicacion: (datos.ubicacion && datos.ubicacion !== "Managua, Nicaragua") ? datos.ubicacion : DEFAULTS.ubicacion
      });
      localStorage.setItem("tech_datos", JSON.stringify(datos));
    }
    return datos;
  }

  localStorage.setItem("tech_datos", JSON.stringify(DEFAULTS));
  return DEFAULTS;
}

async function aplicarDatosGenerales() {
  const datos = await obtenerDatosGenerales();

  const headerTitle = document.querySelector(".logo-container h1");
  if (headerTitle) headerTitle.textContent = datos.nombre;

  const footerCopyright = document.getElementById("footer-nombre-copyright");
  if (footerCopyright) footerCopyright.textContent = "© " + new Date().getFullYear() + " " + datos.nombre;

  const footerUbicacion = document.getElementById("footer-ubicacion");
  if (footerUbicacion) footerUbicacion.textContent = "Ubicación: " + datos.ubicacion;

  const linkFb = document.getElementById("link-facebook");
  if (linkFb) linkFb.href = datos.facebook;

  const linkIg = document.getElementById("link-instagram");
  if (linkIg) linkIg.href = datos.instagram;

  const linkWa = document.getElementById("link-whatsapp");
  if (linkWa) linkWa.href = "https://wa.me/" + datos.whatsapp;
}

// -------------------- ELEMENTOS --------------------
const heroContainer = document.getElementById("hero-cards");
const catalogoContainer = document.getElementById("catalogo-container");
const catalogoGrid = document.getElementById("catalogo-grid");
const productSlider = document.getElementById("product-slider");
const searchInput = document.getElementById("search-input");
const btnCatalogo = document.getElementById("btn-catalogo");
const btnBuscar = document.getElementById("btn-buscar");

// -------------------- WHATSAPP --------------------
function enviarWhatsApp(mensaje) {
  const cached = localStorage.getItem("tech_datos");
  let numero = "50576112321";
  if (cached) {
    const d = JSON.parse(cached);
    if (d.whatsapp) numero = d.whatsapp;
  }
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

function escribirAhora(nombreProducto) {
  const mensaje = `\u00a1Hola! Estoy interesado en el producto: *${nombreProducto}*. \u00bfPodr\u00edas darme m\u00e1s informaci\u00f3n?`;
  enviarWhatsApp(mensaje);
}

// Función global para el botón de contacto general
function contactar() {
  const mensaje = "\u00a1Hola! Me gustar\u00eda obtener m\u00e1s informaci\u00f3n sobre sus productos.";
  enviarWhatsApp(mensaje);
}

// -------------------- HELPER IMAGEN --------------------
function procesarUrlImagen(url) {
  if (!url || url.trim() === '') return 'img/generico.png';
  url = url.trim();
  // Detectar links de Google Drive y convertir al formato de miniatura (thumbnail)
  const driveFileMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  const driveOpenMatch = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  const driveUcMatch = url.match(/drive\.google\.com\/uc\?.*[?&]id=([a-zA-Z0-9_-]+)/);
  const driveUcSimple = url.match(/drive\.google\.com\/uc\?export=view&id=([a-zA-Z0-9_-]+)/);
  if (driveFileMatch) return `https://drive.google.com/thumbnail?id=${driveFileMatch[1]}&sz=w600`;
  if (driveOpenMatch) return `https://drive.google.com/thumbnail?id=${driveOpenMatch[1]}&sz=w600`;
  if (driveUcMatch) return `https://drive.google.com/thumbnail?id=${driveUcMatch[1]}&sz=w600`;
  if (driveUcSimple) return `https://drive.google.com/thumbnail?id=${driveUcSimple[1]}&sz=w600`;
  return url;
}

function agendarPedido(product) {
  const formOverlay = document.createElement("div");
  formOverlay.className = "producto-overlay";

  formOverlay.innerHTML = `
    <div class="producto-detalle-profesional" style="max-width: 400px; flex-direction: column; gap: 15px; text-align: left;">
      <h2 style="color: #003366; text-align: center; margin-bottom: 5px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">calendar_month</span> Agendar Pedido</h2>
      <p style="text-align: center; margin-bottom: 10px; color: #555; width: 100%;">Estás agendando: <strong>${product.nombre}</strong></p>
      
      <div class="form-group">
        <label>Nombre completo</label>
        <input type="text" id="agenda-nombre" placeholder="Ej. Juan Pérez">
      </div>
      <div class="form-group">
        <label>Número de WhatsApp</label>
        <input type="tel" id="agenda-numero" placeholder="Ej. 8888-8888">
      </div>
      <div class="form-group">
        <label>Ubicación</label>
        <input type="text" id="agenda-ubicacion" placeholder="Ej. Managua, Linda Vista">
      </div>
      <div class="form-group">
        <label>Horario</label>
        <input type="text" id="agenda-horario" placeholder="Ej. Por la mañana, 10 AM">
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 15px; width: 100%;">
        <button class="btn-cerrar-form volver-btn" style="margin-top: 0;">Cancelar</button>
        <button class="btn-enviar-agenda producto-btn" style="margin-top: 0; margin-left: auto;">Confirmar y Enviar</button>
      </div>
    </div>
  `;

  document.body.appendChild(formOverlay);

  formOverlay.querySelector(".btn-enviar-agenda").onclick = () => {
    const nombre = document.getElementById("agenda-nombre").value.trim();
    const numero = document.getElementById("agenda-numero").value.trim();
    const ubicacion = document.getElementById("agenda-ubicacion").value.trim();
    const horario = document.getElementById("agenda-horario").value.trim();

    if (!nombre || !numero || !ubicacion || !horario) {
      alert("Por favor completa todos los campos para poder agendar.");
      return;
    }

    const mensaje = `[NUEVO PEDIDO AGENDADO]\n\nProducto: ${product.nombre}\nPrecio: $${product.precio}\n\nCliente: ${nombre}\nContacto: ${numero}\nUbicación: ${ubicacion}\nHorario: ${horario}`;
    enviarWhatsApp(mensaje);

    formOverlay.remove();
  };

  formOverlay.querySelector(".btn-cerrar-form").onclick = () => {
    formOverlay.remove();
  };

  formOverlay.addEventListener("click", (e) => {
    if (e.target === formOverlay) formOverlay.remove();
  });
}

function comprarProducto(product) {
  const formOverlay = document.createElement("div");
  formOverlay.className = "producto-overlay";

  const cuentas = {
    "bac": "XXXX-XXXX-XXXX-XXXX (BAC)",
    "banpro": "YYYY-YYYY-YYYY-YYYY (Banpro)",
    "lafise": "ZZZZ-ZZZZ-ZZZZ-ZZZZ (Banco Lafise)",
    "ficohsa": "WWWW-WWWW-WWWW-WWWW (Banco Ficohsa)"
  };

  formOverlay.innerHTML = `
    <div class="producto-detalle-profesional" style="max-width: 450px; flex-direction: column; gap: 15px; text-align: left;">
      <h2 style="color: #003366; text-align: center; margin-bottom: 5px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;">
        <span class="material-symbols-outlined">account_balance</span> Pagar con Transferencia
      </h2>
      <p style="text-align: center; margin-bottom: 15px; color: #555; width: 100%; font-size: 14px;">
        Estás comprando: <strong>${product.nombre}</strong> ($${product.precio})
      </p>

      <div class="form-group">
        <label>Selecciona tu banco:</label>
        <select id="select-banco" style="padding: 10px; border-radius: 8px; border: 1px solid #ccc; font-size: 15px; outline: none;">
          <option value="" disabled selected>-- Elige un banco --</option>
          <option value="bac">BAC Credomatic</option>
          <option value="banpro">Banpro</option>
          <option value="lafise">Banco Lafise</option>
          <option value="ficohsa">Banco Ficohsa</option>
        </select>
      </div>

      <div id="tutorial-pago" style="display: none; background: #eef7ff; padding: 15px; border-radius: 10px; border-left: 4px solid #00AEEF; margin-top: 10px;">
        <h3 style="margin-top:0; color:#003366; font-size: 16px;">Pasos para confirmar tu pago:</h3>
        <ol style="margin-bottom:0; padding-left:20px; color:#444; font-size: 14px; line-height: 1.6;">
          <li>Transfiere la cantidad exacta de <strong>$${product.precio}</strong> a la siguiente cuenta bancaria:</li>
          <li style="margin: 10px 0; font-size: 15px; color: #000;"><strong><span id="cuenta-banco-texto"></span></strong></li>
          <li>Toma una captura de pantalla del recibo o transferencia exitosa.</li>
          <li>Haz clic en el botón de abajo para enviarnos tu comprobante por WhatsApp y terminar el pedido.</li>
        </ol>
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 20px; width: 100%;">
        <button class="btn-cerrar-compra volver-btn" style="margin-top: 0; background: #888;">Cancelar</button>
        <button class="btn-enviar-comprobante producto-btn" style="margin-top: 0; margin-left: auto; background: #28a745; display: none;"><span class="material-symbols-outlined">send</span> Enviar Comprobante</button>
      </div>
    </div>
  `;

  document.body.appendChild(formOverlay);

  const selectBanco = formOverlay.querySelector("#select-banco");
  const tutorialPago = formOverlay.querySelector("#tutorial-pago");
  const cuentaTexto = formOverlay.querySelector("#cuenta-banco-texto");
  const btnEnviar = formOverlay.querySelector(".btn-enviar-comprobante");

  selectBanco.addEventListener("change", (e) => {
    const banco = e.target.value;
    if (cuentas[banco]) {
      cuentaTexto.textContent = cuentas[banco];
      tutorialPago.style.display = "block";
      btnEnviar.style.display = "inline-flex";
    }
  });

  btnEnviar.onclick = () => {
    const banco = selectBanco.options[selectBanco.selectedIndex].text;
    const mensaje = `[PAGO POR TRANSFERENCIA]\n\nProducto: ${product.nombre}\nPrecio a pagar: $${product.precio}\nBanco de transferencia: ${banco}\n\n[Adjunta aquí la captura de tu comprobante de pago para procesar el pedido]`;
    enviarWhatsApp(mensaje);
    formOverlay.remove();
  };

  formOverlay.querySelector(".btn-cerrar-compra").onclick = () => {
    formOverlay.remove();
  };

  formOverlay.addEventListener("click", (e) => {
    if (e.target === formOverlay) formOverlay.remove();
  });
}

// -------------------- MODAL PRODUCTO --------------------
function mostrarProducto(product) {
  cerrarDetalle();

  const overlay = document.createElement("div");
  overlay.className = "producto-overlay";

  overlay.innerHTML = `
    <div class="producto-detalle-profesional">
      <div class="detalle-imagen">
        <img src="${product.imagen || 'img/generico.png'}" style="aspect-ratio:1/1; object-fit:cover; width:100%; max-width:350px; border-radius:15px; border: 1px solid #eee; background: white;">
      </div>

      <div class="detalle-info">
        <h2 class="detalle-titulo">${product.nombre}</h2>
        <div class="detalle-categoria"><span>Categoría:</span> ${product.categoria}</div>
        <p class="detalle-desc">${product.descripcion}</p>
        <div class="detalle-precio">$${product.precio}</div>

        <div class="detalle-acciones">
          <button class="btn-agendar producto-btn btn-amarillo"><span class="material-symbols-outlined">calendar_month</span> Agendar Pedido</button>
          <button class="btn-comprar producto-btn btn-verde"><span class="material-symbols-outlined">credit_card</span> Comprar Ahora</button>
        </div>

        <button class="btn-cerrar volver-btn btn-outline"><span class="material-symbols-outlined">close</span> Volver al Catálogo</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  overlay.querySelector(".btn-agendar").onclick = () => agendarPedido(product);
  overlay.querySelector(".btn-comprar").onclick = () => comprarProducto(product);
  overlay.querySelector(".btn-cerrar").onclick = cerrarDetalle;

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) cerrarDetalle();
  });
}

function cerrarDetalle() {
  const overlay = document.querySelector(".producto-overlay");
  if (overlay) overlay.remove();
  document.body.style.overflow = "auto";
}

// -------------------- IMÁGENES POR CATEGORÍA --------------------
const IMAGENES_CATEGORIAS = {
  "Auriculares Gamer": "img/prod_p30.jpg",
  "Multimedia": "img/prod_auriculares-a9-pro.jpg",
  "Auriculares Ejecutivos": "img/prod_yyk-520.jpg",
  "Auriculares para la Escucha": "img/prod_intrauditivo-individual-z-360bt.jpg",
  "Bancos de Carga": "img/prod_powerbank-de-50-mil-map-con-panel-y-carga-corriente.jpg",
  "Teclados": "img/prod_mini-teclado-bluetooth-recargable.jpg",
  "Motorizados": "img/prod_holder-ara-a-anti-vibraci-n-de-manubrio.jpg",
  "Intercomunicadores Ejeas": "img/prod_ejeas-v6-pro.jpg",
  "Smartwatch": "img/prod_smartwatch-i90-suit-extreme.jpg",
  "Cargadores Xiaomi Turbo Charger": "img/prod_cargador-de-33w.jpg",
  "Auriculares de Monitoreo": "img/prod_inear-odin.jpg",
  "Micrófono de Solapa": "img/prod_micr-fono-k15-entrada-tipo-c-plus-iphone.jpg",
  "Enfriadores Móviles": "img/prod_enfriador-cx07.jpg"
};

// -------------------- CATEGORÍAS --------------------
async function cargarCategorias() {
  try {
    const categories = CATEGORIAS_BD;

    heroContainer.innerHTML = "";

    categories.forEach(categoria => {
      const card = document.createElement("div");
      card.className = "hero-card";

      const imgSrc = IMAGENES_CATEGORIAS[categoria] || "img/generico.png";

      card.innerHTML = `
        <img src="${imgSrc}" style="aspect-ratio: 1/1; object-fit: cover; width: 100%; border-radius: 10px 10px 0 0;">
        <h3>${categoria}</h3>
      `;

      card.onclick = () => cargarCatalogo(categoria);
      heroContainer.appendChild(card);
    });

  } catch (err) {
    console.error(err);
  }
}

// -------------------- PRODUCTOS --------------------
async function cargarProductos() {
  try {
    const products = await obtenerProductos();

    productSlider.innerHTML = "";

    products.slice(0, 3).forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.imagen || 'img/generico.png'}" style="aspect-ratio:1/1; object-fit:cover; width:100%; border-radius:15px; border: 1px solid #eee; background: white;">
        <h3>${product.nombre}</h3>
        <p class="categoria">${product.categoria}</p>
        <p class="descripcion">${product.descripcion}</p>
        <p class="precio">$${product.precio}</p>
      `;

      card.onclick = () => mostrarProducto(product);
      productSlider.appendChild(card);
    });

  } catch (err) {
    console.error(err);
  }
}

// -------------------- BUSCADOR --------------------
function ejecutarBusqueda() {
  const query = searchInput.value.trim();
  cargarCatalogo(null, query);
}

// Mostrar input / buscar
if (btnBuscar && searchInput) {
  btnBuscar.addEventListener("click", () => {

    if (!searchInput.classList.contains("activo")) {
      searchInput.classList.add("activo");
      searchInput.focus();
    } else {
      ejecutarBusqueda();
    }

  });
}

// ENTER
if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ejecutarBusqueda();
    }
  });
}

// -------------------- CATÁLOGO --------------------
async function cargarCatalogo(categoria = null, buscar = "") {
  try {
    const products = await obtenerProductos();

    catalogoGrid.innerHTML = "";

    let filtrados = products;

    if (categoria) {
      filtrados = filtrados.filter(p => p.categoria === categoria);
    }

    if (buscar) {
      filtrados = filtrados.filter(p =>
        p.nombre.toLowerCase().includes(buscar.toLowerCase())
      );
    }

    // Filtro de precio
    const precioMinInput = document.getElementById('filtro-precio-min');
    const precioMaxInput = document.getElementById('filtro-precio-max');
    const precioMin = precioMinInput && precioMinInput.value !== '' ? parseFloat(precioMinInput.value) : 0;
    const precioMax = precioMaxInput && precioMaxInput.value !== '' ? parseFloat(precioMaxInput.value) : Infinity;
    if (precioMin > 0 || precioMax < Infinity) {
      filtrados = filtrados.filter(p => p.precio >= precioMin && p.precio <= precioMax);
    }

    filtrados.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.imagen || 'img/generico.png'}" style="aspect-ratio: 1/1; object-fit: cover; width: 100%; border-radius: 8px;">
        <h3>${product.nombre}</h3>
        <p class="categoria">${product.categoria}</p>
        <p class="descripcion">${product.descripcion}</p>
        <p class="precio">$${product.precio}</p>
      `;

      card.onclick = () => mostrarProducto(product);
      catalogoGrid.appendChild(card);
    });

    catalogoContainer.style.display = "block";
    productSlider.parentElement.style.display = "none";

    // Scroll automático hacia el contenedor del catálogo
    catalogoContainer.scrollIntoView({ behavior: "smooth", block: "start" });

  } catch (err) {
    console.error(err);
  }
}

// -------------------- BOTÓN CATÁLOGO --------------------
if (btnCatalogo) {
  btnCatalogo.onclick = () => cargarCatalogo();
}

// -------------------- FILTRO DE PRECIO --------------------
const btnAplicarPrecio = document.getElementById("btn-aplicar-precio");
const btnLimpiarPrecio = document.getElementById("btn-limpiar-precio");
if (btnAplicarPrecio) {
  btnAplicarPrecio.onclick = () => cargarCatalogo();
}
if (btnLimpiarPrecio) {
  btnLimpiarPrecio.onclick = () => {
    const minInput = document.getElementById('filtro-precio-min');
    const maxInput = document.getElementById('filtro-precio-max');
    if (minInput) minInput.value = '';
    if (maxInput) maxInput.value = '';
    cargarCatalogo();
  };
}

// -------------------- INIT --------------------
document.addEventListener("DOMContentLoaded", () => {
  aplicarDatosGenerales();
  if (heroContainer) cargarCategorias();
  if (productSlider) cargarProductos();
});


// -------------------- FAQ --------------------
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {

    const item = btn.parentElement;

    // cerrar otros
    document.querySelectorAll(".faq-item").forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // toggle actual
    item.classList.toggle("active");
  });
});

// -------------------- ESTILOS --------------------
const style = document.createElement("style");
style.textContent = `
.producto-overlay {
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:9999;
}
.producto-detalle-profesional {
  background:#fff;
  border-radius:20px;
  max-width:950px;
  width:90%;
  max-height: 90vh;
  overflow-y: auto;
  display:flex;
  flex-wrap:wrap;
  gap:40px;
  padding:40px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  position: relative;
  align-items: center;
}
.detalle-imagen {
  flex: 1;
  min-width: 250px;
  display: flex;
  justify-content: center;
}
.detalle-imagen img {
  width:100%;
  max-width: 350px;
  border-radius:15px;
  object-fit: cover;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.detalle-info {
  flex: 1.5;
  min-width: 300px;
  display: flex;
  flex-direction: column;
}
.detalle-titulo {
  font-size: 32px;
  color: #003366;
  margin: 0 0 15px 0;
  line-height:1.2;
}
.detalle-categoria {
  background: #eef7ff;
  color: #00AEEF;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  align-self: flex-start;
  margin-bottom: 20px;
}
.detalle-categoria span {
  color: #555;
  font-weight: normal;
}
.detalle-desc {
  font-size: 17px;
  color: #444;
  line-height: 1.6;
  margin-bottom: 25px;
}
.detalle-precio {
  font-size: 36px;
  font-weight: 900;
  color: #28a745;
  margin-bottom: 30px;
}
.detalle-acciones {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  width: 100%;
}
.producto-btn {
  background:#00AEEF;
  color:#fff;
  border:none;
  padding:15px 25px;
  font-weight: bold;
  font-size: 16px;
  border-radius:10px;
  cursor:pointer;
  flex: 1;
  text-align: center;
  transition: all 0.3s;
}
.producto-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}
.btn-amarillo { background: #ffc107; color: #000; }
.btn-verde { background: #28a745; }
.volver-btn {
  margin-top:10px;
  background:#555;
  color:white;
  border:none;
  padding:12px 20px;
  border-radius:10px;
  cursor:pointer;
  transition: 0.3s;
}
.btn-outline {
  background: transparent;
  color: #555;
  border: 1px solid #ccc;
  align-self: flex-start;
  font-weight: bold;
}
.btn-outline:hover {
  background: #eee;
  color: #000;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
}
.form-group label {
  font-weight: bold;
  color: #003366;
  font-size: 14px;
}
.form-group input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.3s;
}
.form-group input:focus {
  border-color: #00AEEF;
}
.producto-detalle-profesional::-webkit-scrollbar,
.custom-scroll-container::-webkit-scrollbar {
  width: 6px;
}
.producto-detalle-profesional::-webkit-scrollbar-track,
.custom-scroll-container::-webkit-scrollbar-track {
  background: transparent;
}
.producto-detalle-profesional::-webkit-scrollbar-thumb,
.custom-scroll-container::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}
.producto-detalle-profesional::-webkit-scrollbar-thumb:hover,
.custom-scroll-container::-webkit-scrollbar-thumb:hover {
  background: #999;
}
`;
document.head.appendChild(style);

/* -------------------- ADMIN LOGIC -------------------- */
const btnAdmin = document.getElementById("btn-admin");
const btnCerrarSesion = document.getElementById("btn-cerrar-sesion");
const btnAgregar = document.getElementById("btn-agregar-producto");
const btnEliminar = document.getElementById("btn-eliminar-producto");
const btnEditarData = document.getElementById("btn-editar-datos");
const btnEditarProd = document.getElementById("btn-editar-producto");

function checkAdmin() {
  const esAdmin = sessionStorage.getItem("isAdmin") === "true";
  if (esAdmin) {
    if (btnAdmin) btnAdmin.style.display = "none";
    if (btnCerrarSesion) btnCerrarSesion.style.display = "inline-block";
    if (btnAgregar) btnAgregar.style.display = "inline-block";
    if (btnEliminar) btnEliminar.style.display = "inline-block";
    if (btnEditarData) btnEditarData.style.display = "inline-block";
    if (btnEditarProd) btnEditarProd.style.display = "inline-block";
  } else {
    if (btnAdmin) btnAdmin.style.display = "";
    if (btnCerrarSesion) btnCerrarSesion.style.display = "none";
    if (btnAgregar) btnAgregar.style.display = "none";
    if (btnEliminar) btnEliminar.style.display = "none";
    if (btnEditarData) btnEditarData.style.display = "none";
    if (btnEditarProd) btnEditarProd.style.display = "none";
  }
}
checkAdmin();

if (btnCerrarSesion) {
  btnCerrarSesion.onclick = () => {
    if (confirm("\u00bfDeseas cerrar la sesi\u00f3n de administrador?")) {
      sessionStorage.removeItem("isAdmin");
      checkAdmin();
      alert("Sesi\u00f3n de administrador cerrada.");
    }
  };
}


if (btnAdmin) {
  btnAdmin.onclick = () => {
    const formOverlay = document.createElement("div");
    formOverlay.className = "producto-overlay";
    formOverlay.innerHTML = `
      <div class="producto-detalle-profesional" style="max-width: 350px; flex-direction: column; gap: 15px;">
        <h2 style="color: #003366; text-align: center;">Acceso Admin</h2>
        <div class="form-group"><label>Usuario</label><input type="text" id="admin-user"></div>
        <div class="form-group"><label>Contraseña</label><input type="password" id="admin-pass"></div>
        <div style="display:flex; justify-content:space-between; margin-top:10px;">
          <button class="btn-cancel-admin volver-btn" style="margin-top:0;">Cerrar</button>
          <button class="btn-login-admin producto-btn" style="margin-top:0; background:#003366;">Ingresar</button>
        </div>
      </div>
    `;
    document.body.appendChild(formOverlay);

    formOverlay.querySelector(".btn-login-admin").onclick = () => {
      const u = document.getElementById("admin-user").value;
      const p = document.getElementById("admin-pass").value;
      if (u === "YeltsinTechStore" && p === "A1B2C3D4") {
        sessionStorage.setItem("isAdmin", "true");
        checkAdmin();
        alert("¡Bienvenido Administrador!");
        formOverlay.remove();
      } else {
        alert("Credenciales incorrectas.");
      }
    };
    formOverlay.querySelector(".btn-cancel-admin").onclick = () => formOverlay.remove();
  };
}

if (btnAgregar) {
  btnAgregar.onclick = () => {
    const catBtnsHtml = CATEGORIAS_BD.map(cat =>
      `<button type="button" class="cat-btn" data-cat="${cat}">${cat}</button>`
    ).join('');

    const formOverlay = document.createElement("div");
    formOverlay.className = "producto-overlay";
    formOverlay.innerHTML = `
      <div class="producto-detalle-profesional" style="max-width: 500px; flex-direction: column; gap: 15px; text-align: left;">
        <h2 style="color: #28a745; text-align: center; margin-bottom: 5px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">add_circle</span> Agregar Producto</h2>

        <div class="form-group"><label>Nombre</label><input type="text" id="add-nombre"></div>

        <div class="form-group">
          <label>Categoría &nbsp;<span id="add-cat-label" style="color:#00AEEF; font-size:13px;"></span></label>
          <input type="hidden" id="add-categoria">
          <div class="cat-picker">${catBtnsHtml}</div>
        </div>

        <div class="form-group"><label>Precio ($)</label><input type="number" id="add-precio" min="0"></div>
        <div class="form-group"><label>Descripción</label><input type="text" id="add-descripcion"></div>

        <div class="form-group">
          <label>Imagen — URL o link de Google Drive</label>
          <input type="text" id="add-imagen" placeholder="https://... o link de compartir de Drive">
          <small style="color:#888; margin-top:4px; display:block;">Los links de Google Drive se convierten automáticamente.</small>
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 10px; width: 100%;">
          <button class="btn-cancel-add volver-btn" style="margin-top: 0;">Cancelar</button>
          <button class="btn-confirm-add producto-btn" style="margin-top: 0; margin-left: auto; background: #28a745;">Agregar</button>
        </div>
      </div>
    `;
    document.body.appendChild(formOverlay);

    // Selector de categorías
    formOverlay.querySelectorAll('.cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        formOverlay.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('cat-btn-active'));
        btn.classList.add('cat-btn-active');
        document.getElementById('add-categoria').value = btn.dataset.cat;
        document.getElementById('add-cat-label').textContent = '✓ ' + btn.dataset.cat;
      });
    });

    formOverlay.querySelector(".btn-confirm-add").onclick = async () => {
      const pNombre = document.getElementById("add-nombre").value.trim();
      const pCat = document.getElementById("add-categoria").value.trim();
      const pPrecio = document.getElementById("add-precio").value.trim();
      const pDesc = document.getElementById("add-descripcion").value.trim();
      const pImagen = procesarUrlImagen(document.getElementById("add-imagen").value.trim());

      if (!pNombre || !pCat || !pPrecio || !pDesc) return alert("Completa todos los campos obligatorios.");

      const productos = await obtenerProductos();
      productos.push({
        nombre: pNombre,
        categoria: pCat,
        precio: parseFloat(pPrecio),
        descripcion: pDesc,
        imagen: pImagen
      });
      localStorage.setItem("tech_products", JSON.stringify(productos));
      alert("Producto agregado correctamente.");
      formOverlay.remove();
      cargarProductos();
      if (document.getElementById("catalogo-container").style.display === "block") cargarCatalogo();
    };

    formOverlay.querySelector(".btn-cancel-add").onclick = () => formOverlay.remove();
  };
}

if (btnEliminar) {
  btnEliminar.onclick = async () => {
    const productos = await obtenerProductos();

    const formOverlay = document.createElement("div");
    formOverlay.className = "producto-overlay";

    let prodConIndex = productos.map((p, i) => Object.assign({}, p, { _oIdx: i }));
    prodConIndex.sort((a, b) => {
      if (a.categoria === b.categoria) return a.nombre.localeCompare(b.nombre);
      return a.categoria.localeCompare(b.categoria);
    });

    let htmlList = prodConIndex.map(p => `
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eaeaea; padding:12px 15px; background: #fdfdfd; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
        <span style="color:#333;"><small style="color:#888;">${p.categoria}</small><br><strong>${p.nombre}</strong> <br> <small style="color:#00AEEF; font-weight:bold;">$${p.precio}</small></span>
        <button onclick="borrarProd(${p._oIdx})" style="background:#dc3545; color:white; border:none; border-radius:6px; cursor:pointer; padding:8px 12px; transition:0.3s; display:flex; align-items:center; justify-content:center;" onmouseover="this.style.opacity=0.8" onmouseout="this.style.opacity=1"><span class="material-symbols-outlined" style="font-size:18px;">delete</span></button>
      </div>
    `).join("");

    formOverlay.innerHTML = `
      <div class="producto-detalle-profesional" style="max-width: 500px; flex-direction: column; gap: 15px; text-align: left; padding: 30px;">
        <h2 style="color: #dc3545; text-align: center; margin-bottom: 0; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">delete</span> Eliminar Producto</h2>
        <div class="custom-scroll-container" id="lista-borrar" style="display:flex; flex-direction:column; gap:8px; max-height: 50vh; overflow-y: auto; padding-right: 10px; border: 1px solid #eee; border-radius: 8px; padding: 10px;">${htmlList}</div>
        <button class="btn-cancel-del volver-btn" style="margin-top:10px; width:100%;">Cerrar</button>
      </div>
    `;
    document.body.appendChild(formOverlay);

    window.borrarProd = (idx) => {
      if (!confirm("¿Seguro que deseas borrar este producto?")) return;
      productos.splice(idx, 1);
      localStorage.setItem("tech_products", JSON.stringify(productos));
      alert("Producto eliminado.");
      formOverlay.remove();
      cargarProductos();
      if (document.getElementById("catalogo-container").style.display === "block") cargarCatalogo();
      btnEliminar.click(); // reabrir para mostrar actualizado
    };

    formOverlay.querySelector(".btn-cancel-del").onclick = () => formOverlay.remove();
  };
}

/* -------------------- EDITAR GENERAL -------------------- */
if (btnEditarData) {
  btnEditarData.onclick = async () => {
    const datos = await obtenerDatosGenerales();

    const formOverlay = document.createElement("div");
    formOverlay.className = "producto-overlay";
    formOverlay.innerHTML = `
      <div class="producto-detalle-profesional" style="max-width: 450px; flex-direction: column; gap: 15px; text-align: left; padding: 30px;">
        <h2 style="color: #17a2b8; text-align: center; margin-bottom: 5px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">settings</span> Editar Datos Generales</h2>
        
        <div class="form-group"><label>Nombre del Negocio</label><input type="text" id="edit-nombre" value="${datos.nombre}"></div>
        <div class="form-group"><label>Ubicación</label><input type="text" id="edit-ubicacion" value="${datos.ubicacion}"></div>
        <div class="form-group"><label>Facebook Link</label><input type="text" id="edit-fb" value="${datos.facebook}"></div>
        <div class="form-group"><label>Instagram Link</label><input type="text" id="edit-ig" value="${datos.instagram}"></div>
        <div class="form-group"><label>WhatsApp (solo números)</label><input type="text" id="edit-wa" value="${datos.whatsapp}"></div>

        <div style="display: flex; justify-content: space-between; margin-top: 15px; width: 100%;">
          <button class="btn-cancel-edit-data volver-btn" style="margin-top: 0;">Cancelar</button>
          <button class="btn-confirm-edit-data producto-btn" style="margin-top: 0; margin-left: auto; background: #17a2b8;">Guardar</button>
        </div>
      </div>
    `;
    document.body.appendChild(formOverlay);

    formOverlay.querySelector(".btn-confirm-edit-data").onclick = () => {
      const pNombre = document.getElementById("edit-nombre").value.trim();
      const pUbi = document.getElementById("edit-ubicacion").value.trim();
      const pFb = document.getElementById("edit-fb").value.trim();
      const pIg = document.getElementById("edit-ig").value.trim();
      const pWa = document.getElementById("edit-wa").value.trim();

      if (!pNombre || !pUbi || !pFb || !pIg || !pWa) return alert("Completa todos los campos.");

      const nuevosDatos = {
        nombre: pNombre,
        ubicacion: pUbi,
        facebook: pFb,
        instagram: pIg,
        whatsapp: pWa
      };
      localStorage.setItem("tech_datos", JSON.stringify(nuevosDatos));
      alert("Datos actualizados correctamente.");
      formOverlay.remove();
      aplicarDatosGenerales();
    };

    formOverlay.querySelector(".btn-cancel-edit-data").onclick = () => formOverlay.remove();
  };
}

/* -------------------- EDITAR PRODUCTO -------------------- */
if (btnEditarProd) {
  btnEditarProd.onclick = async () => {
    const productos = await obtenerProductos();

    const formOverlay = document.createElement("div");
    formOverlay.className = "producto-overlay";

    let prodConIndex = productos.map((p, i) => Object.assign({}, p, { _oIdx: i }));
    prodConIndex.sort((a, b) => {
      if (a.categoria === b.categoria) return a.nombre.localeCompare(b.nombre);
      return a.categoria.localeCompare(b.categoria);
    });

    let htmlList = prodConIndex.map(p => `
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eaeaea; padding:12px 15px; background: #fdfdfd; border-radius: 8px; margin-bottom: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
        <span style="color:#333;"><small style="color:#888;">${p.categoria}</small><br><strong>${p.nombre}</strong> <br> <small style="color:#00AEEF; font-weight:bold;">$${p.precio}</small></span>
        <button onclick="editarProd(${p._oIdx})" style="background:#ffc107; color:black; border:none; border-radius:6px; cursor:pointer; padding:8px 12px; transition:0.3s; display:flex; align-items:center; justify-content:center;" onmouseover="this.style.opacity=0.8" onmouseout="this.style.opacity=1"><span class="material-symbols-outlined" style="font-size:18px;">edit</span></button>
      </div>
    `).join("");

    formOverlay.innerHTML = `
      <div class="producto-detalle-profesional" style="max-width: 500px; flex-direction: column; gap: 15px; text-align: left; padding: 30px;">
        <h2 style="color: #ffc107; text-align: center; margin-bottom: 0; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">edit</span> Editar Producto</h2>
        <div class="custom-scroll-container" id="lista-editar" style="display:flex; flex-direction:column; gap:8px; max-height: 50vh; overflow-y: auto; padding-right: 10px; border: 1px solid #eee; border-radius: 8px; padding: 10px;">${htmlList}</div>
        <button class="btn-cancel-edit volver-btn" style="margin-top:10px; width:100%;">Cerrar</button>
      </div>
    `;
    document.body.appendChild(formOverlay);

    window.editarProd = (idx) => {
      const p = productos[idx];
      const imgActual = (p.imagen && p.imagen !== 'img/generico.png') ? p.imagen : '';

      const catBtnsHtmlEdi = CATEGORIAS_BD.map(cat =>
        `<button type="button" class="cat-btn${cat === p.categoria ? ' cat-btn-active' : ''}" data-cat="${cat}">${cat}</button>`
      ).join('');

      const formEdit = document.createElement("div");
      formEdit.className = "producto-overlay";
      formEdit.innerHTML = `
        <div class="producto-detalle-profesional" style="max-width: 500px; flex-direction: column; gap: 15px; text-align: left;">
          <h2 style="color: #ffc107; text-align: center; margin-bottom: 5px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">edit</span> Editando: ${p.nombre}</h2>

          <div class="form-group"><label>Nombre</label><input type="text" id="edi-nombre" value="${p.nombre}"></div>

          <div class="form-group">
            <label>Categoría &nbsp;<span id="edi-cat-label" style="color:#00AEEF; font-size:13px;">${p.categoria ? '✓ ' + p.categoria : ''}</span></label>
            <input type="hidden" id="edi-categoria" value="${p.categoria}">
            <div class="cat-picker">${catBtnsHtmlEdi}</div>
          </div>

          <div class="form-group"><label>Precio ($)</label><input type="number" id="edi-precio" value="${p.precio}" min="0"></div>
          <div class="form-group"><label>Descripción</label><input type="text" id="edi-descripcion" value="${p.descripcion.replace(/"/g, '&quot;')}"></div>

          <div class="form-group">
            <label>Imagen — URL o link de Google Drive</label>
            <input type="text" id="edi-imagen" value="${imgActual}" placeholder="https://... o link de compartir de Drive">
            <small style="color:#888; margin-top:4px; display:block;">Los links de Google Drive se convierten automáticamente.</small>
          </div>

          <div style="display: flex; justify-content: space-between; margin-top: 10px; width: 100%;">
            <button class="btn-cancel-edi volver-btn" style="margin-top: 0;">Cancelar</button>
            <button class="btn-confirm-edi producto-btn" style="margin-top: 0; margin-left: auto; background: #ffc107; color: black;">Guardar Cambios</button>
          </div>
        </div>
      `;
      document.body.appendChild(formEdit);

      // Selector de categorías
      formEdit.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          formEdit.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('cat-btn-active'));
          btn.classList.add('cat-btn-active');
          document.getElementById('edi-categoria').value = btn.dataset.cat;
          document.getElementById('edi-cat-label').textContent = '✓ ' + btn.dataset.cat;
        });
      });

      formEdit.querySelector(".btn-confirm-edi").onclick = () => {
        const ediNombre = document.getElementById("edi-nombre").value.trim();
        const ediCat = document.getElementById("edi-categoria").value.trim();
        const ediPrecio = document.getElementById("edi-precio").value.trim();
        const ediDesc = document.getElementById("edi-descripcion").value.trim();
        const ediImagen = procesarUrlImagen(document.getElementById("edi-imagen").value.trim());

        if (!ediNombre || !ediCat || !ediPrecio || !ediDesc) return alert("Completa todos los campos.");

        productos[idx] = {
          nombre: ediNombre,
          categoria: ediCat,
          precio: parseFloat(ediPrecio),
          descripcion: ediDesc,
          imagen: ediImagen || p.imagen || 'img/generico.png'
        };
        localStorage.setItem("tech_products", JSON.stringify(productos));
        alert("Producto modificado correctamente.");
        formEdit.remove();
        formOverlay.remove();

        cargarProductos();
        if (document.getElementById("catalogo-container").style.display === "block") cargarCatalogo();
        btnEditarProd.click();
      };

      formEdit.querySelector(".btn-cancel-edi").onclick = () => formEdit.remove();
    };

    formOverlay.querySelector(".btn-cancel-edit").onclick = () => formOverlay.remove();
  };
}