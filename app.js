// -------------------- DATOS LOCALES Y CATÁLOGO --------------------
const CATEGORIAS_BD = [
  "Auriculares Gamer",
  "Multimedia",
  "Auriculares Ejecutivos",
  "Auriculares para la Escucha",
  "Bancos de Carga",
  "Teclados",
  "Motorizados",
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
    "precio": 500,
    "imagen": "img/prod_p30.jpg"
  },
  {
    "nombre": "P36 Cobra",
    "categoria": "Auriculares Gamer",
    "descripcion": "Audífonos gaming premium con drivers de 50mm para graves profundos. Micrófono flexible, estructura de metal reforzado y control de volumen en el cable trenzado ultrarresistente.",
    "precio": 500,
    "imagen": "img/prod_p36-cobra.jpg"
  },
  {
    "nombre": "P50",
    "categoria": "Auriculares Gamer",
    "descripcion": "Headset de alta precisión con audio espacial, diadema autoajustable y orejeras transpirables. Cuenta con conectividad USB multiplataforma y aislamiento acústico pasivo avanzado.",
    "precio": 500,
    "imagen": "img/prod_p50.jpg"
  },
  {
    "nombre": "K89",
    "categoria": "Auriculares Gamer",
    "descripcion": "Audífonos competitivos ligeros con tecnología de baja latencia. Sistema de iluminación RGB vibrante, micrófono abatible con mute automático y conector jack de 3.5mm.",
    "precio": 890,
    "imagen": "img/prod_k89.jpg"
  },
  {
    "nombre": "Zombiescast B5",
    "categoria": "Auriculares Gamer",
    "descripcion": "Auriculares over-ear con vibración háptica inmersiva, sonido estéreo de alta resolución y micrófono desmontable. Ideales para setups de streaming gracias a su diseño vanguardista.",
    "precio": 1050,
    "imagen": "img/prod_zombiescast-b5.jpg"
  },
  {
    "nombre": "Inva",
    "categoria": "Auriculares Gamer",
    "descripcion": "Diseño ultraligero de 250g pensado para torneos eSports. Drivers magnéticos de neodimio, cable mallado anti-enredos y compatibilidad total con PC, PS5 y Xbox.",
    "precio": 1890,
    "imagen": "img/prod_inva.jpg"
  },
  {
    "nombre": "X35",
    "categoria": "Auriculares Gamer",
    "descripcion": "Disfruta de sonido cristalino con los X35. Integran diafragmas optimizados para frecuencias medias y altas, RGB dinámico de 16 millones de colores y estructura ergonómica.",
    "precio": 650,
    "imagen": "img/prod_x35.jpg"
  },
  {
    "nombre": "H03",
    "categoria": "Auriculares Gamer",
    "descripcion": "Auriculares entry-level de alto valor. Sonido estéreo 2.0 balanceado, bajos potenciados, micrófono pivotante y almohadillas de ecocuero súper suaves para máxima comodidad.",
    "precio": 990,
    "imagen": "img/prod_h03.jpg"
  },
  {
    "nombre": "Auriculares Dobles M22",
    "categoria": "Multimedia",
    "descripcion": "Audífonos in-ear alámbricos ideales para multimedia. Cable reforzado en TPE de 1.2 metros, impedancia de 16 ohmios y calidad de audio superior con graves acentuados.",
    "precio": 650,
    "imagen": "img/prod_auriculares-dobles-m22.jpg"
  },
  {
    "nombre": "Auriculares Dobles DX-42",
    "categoria": "Multimedia",
    "descripcion": "Ofrecen un escenario sonoro amplio para música y películas. Sensibilidad de 105dB, conector bañado en oro, control multimedia con respuesta háptica y diseño resistente al sudor.",
    "precio": 650,
    "imagen": "img/prod_auriculares-dobles-dx-42.jpg"
  },
  {
    "nombre": "Auriculares A9 Pro",
    "categoria": "Multimedia",
    "descripcion": "Auriculares TWS Bluetooth 5.3 con cancelación activa de ruido (ANC). Autonomía de hasta 6 horas continuas, estuche de carga inteligente y control táctil capacitivo.",
    "precio": 690,
    "imagen": "img/prod_auriculares-a9-pro.jpg"
  },
  {
    "nombre": "Auriculares M20 Pro",
    "categoria": "Multimedia",
    "descripcion": "Tecnología Bluetooth de última generación con bajos tipo subwoofer. Emparejamiento automático, protección IPX5 contra agua y pantalla LED indicadora de batería en el estuche.",
    "precio": 350,
    "imagen": "img/prod_auriculares-m20-pro.jpg"
  },
  {
    "nombre": "Auriculares N35 Pro",
    "categoria": "Multimedia",
    "descripcion": "Reducción de ruido ambiental ENC para llamadas claras. Baja latencia de 65ms ideal para juegos móviles, diseño ergonómico in-ear con almohadillas de silicona premium.",
    "precio": 380,
    "imagen": "img/prod_auriculares-n35-pro.jpg"
  },
  {
    "nombre": "Auriculares YD03",
    "categoria": "Multimedia",
    "descripcion": "Auriculares Bluetooth con diseño elegante y pantalla LED en formato espejo. Controles táctiles integrados, sonido hifi estéreo 9D y carga rápida a través de Type-C.",
    "precio": 420,
    "imagen": "img/prod_auriculares-yd03.jpg"
  },
  {
    "nombre": "Auriculares YD04",
    "categoria": "Multimedia",
    "descripcion": "Auriculares deportivos compactos con hasta 5 horas de autonomía. Micrófono HD incorporado, protección contra salpicaduras y bajos potenciados para disfrutar cada canción.",
    "precio": 490,
    "imagen": "img/prod_auriculares-yd04.jpg"
  },
  {
    "nombre": "YYK-520",
    "categoria": "Auriculares Ejecutivos",
    "descripcion": "Auricular manos libres Bluetooth 5.1 con brazo giratorio de 180° para ambas orejas. Batería de gran capacidad de 500mAh con estuche tipo ejecutivo y reducción de viento.",
    "precio": 690,
    "imagen": "img/prod_yyk-520.jpg"
  },
  {
    "nombre": "YYK-525",
    "categoria": "Auriculares Ejecutivos",
    "descripcion": "Manos libres premium para negocios con micrófono doble para ENC. Diseño ultradelgado, comandos de voz inteligentes y autonomía de hasta 12 horas en conversación continua.",
    "precio": 690,
    "imagen": "img/prod_yyk-525.jpg"
  },
  {
    "nombre": "Intrauditivo Individual Z-360BT",
    "categoria": "Auriculares para la Escucha",
    "descripcion": "Auricular individual discreto con Bluetooth 5.0. Pesa tan solo 3 gramos, ajuste invisible e incorpora un botón multifunción para gestionar música y llamadas de forma discreta.",
    "precio": 1350,
    "imagen": "img/prod_intrauditivo-individual-z-360bt.jpg"
  },
  {
    "nombre": "Powerbank de 50 mil MAP con panel y carga corriente",
    "categoria": "Bancos de Carga",
    "descripcion": "Cargador portátil de 50,000 mAh reales con linterna LED brillante. Incluye pequeño panel solar de respaldo para emergencias, 4 salidas USB simultáneas y protección de sobrevoltaje.",
    "precio": 1250,
    "imagen": "img/prod_powerbank-de-50-mil-map-con-panel-y-carga-corriente.jpg"
  },
  {
    "nombre": "Powerbank de 50 mil MAP carga corriente",
    "categoria": "Bancos de Carga",
    "descripcion": "Inmensa capacidad de reserva: hasta 10 cargas completas para smartphones promedio. Carga rápida bidireccional de 22.5W, pantalla digital LCD e indicador inteligente de carga segura.",
    "precio": 1100,
    "imagen": "img/prod_powerbank-de-50-mil-map-carga-corriente.jpg"
  },
  {
    "nombre": "Mini Teclado Bluetooth Recargable",
    "categoria": "Teclados",
    "descripcion": "Teclado ultra delgado (7mm) y ligero. Switch de tijera silencioso, batería recargable vía Micro USB que dura semanas, y compatible de forma nativa con Android, iOS, Windows y Mac.",
    "precio": 590,
    "imagen": "img/prod_mini-teclado-bluetooth-recargable.jpg"
  },
  {
    "nombre": "Combo Teclado Puerto USB - Baterías",
    "categoria": "Teclados",
    "descripcion": "Set inálambrico 2.4GHz Plug & Play que incluye teclado completo de 104 teclas y ratón óptico de 1200 DPI. Receptor USB unificado y diseño resistente a salpicaduras.",
    "precio": 700,
    "imagen": "img/prod_combo-teclado-puerto-usb-bater-as.jpg"
  },
  {
    "nombre": "Holder Araña Anti Vibración de Manubrio",
    "categoria": "Motorizados",
    "descripcion": "Soporte para celulares de aleación de plástico rígido. Diseño de araña estabilizadora que absorbe fuertes vibraciones, rotación 360° y compatible con teléfonos de 4 a 7 pulgadas.",
    "precio": 500,
    "imagen": "img/prod_holder-ara-a-anti-vibraci-n-de-manubrio.jpg"
  },
  {
    "nombre": "Holder Araña Anti Vibración con Carga Tipo C y MagSafe de Agarre al Espejo",
    "categoria": "Motorizados",
    "descripcion": "Soporte avanzado para motocicleta al espejo retrovisor. Incluye puerto USB y Tipo C incorporado para carga rápida directa en ruta y compatibilidad magnética estilo MagSafe.",
    "precio": 1100,
    "imagen": "img/prod_holder-ara-a-anti-vibraci-n-con-carga-tipo-c-y-magsafe-de-agarre-al-espejo.jpg"
  },
  {
    "nombre": "Holder de Araña",
    "categoria": "Motorizados",
    "descripcion": "Soporte tipo araña tradicional de silicona flexible y elástica. Adaptable a cualquier tipo de manubrio, sujetando las cuatro esquinas del dispositivo sin bloquear botones o pantallas.",
    "precio": 400,
    "imagen": "img/prod_holder-de-ara-a.jpg"
  },
  {
    "nombre": "Holdr Porta Vaso",
    "categoria": "Motorizados",
    "descripcion": "Accesorio rígido de montaje en manubrio o defensas para llevar botellas, vasos térmicos o bebidas. Interior de goma antideslizante para evitar que el contenido se derrame con el viento.",
    "precio": 190,
    "imagen": "img/prod_holdr-porta-vaso.jpg"
  },
  {
    "nombre": "Holder para Carro",
    "categoria": "Motorizados",
    "descripcion": "Soporte ajustable universal para parabrisas o tablero de auto mediante ventosa de gel adherente súper fuerte. Brazo extensible telescópico y mecanismo de liberación de un solo botón.",
    "precio": 170,
    "imagen": "img/prod_holder-para-carro.jpg"
  },
  {
    "nombre": "Auriculares para Casco BT12",
    "categoria": "Motorizados",
    "descripcion": "Sistema Bluetooth 5.0 ultradelgado diseñado para el interior de cascos abatibles y completos. Respuesta automática de llamadas y sonido de graves mejorados sin cables molestos.",
    "precio": 450,
    "imagen": "img/prod_auriculares-para-casco-bt12.jpg"
  },
  {
    "nombre": "Auriculares para Casco BT35",
    "categoria": "Motorizados",
    "descripcion": "Audio inalámbrico para motos con sistema inteligente antipolvo y resistente a salpicaduras ligeras. Micrófono de barra rígida moldeable, reduce ruidos del viento a más de 80km/h.",
    "precio": 600,
    "imagen": "img/prod_auriculares-para-casco-bt35.jpg"
  },
  {
    "nombre": "Auriculares para Casco Y30",
    "categoria": "Motorizados",
    "descripcion": "Conectividad estéreo de alta fidelidad, excelente para viajes largos en moto. Incorpora altavoces mejorados Hi-Fi y botones grandes exteriores fáciles de presionar incluso con guantes.",
    "precio": 450,
    "imagen": "img/prod_auriculares-para-casco-y30.jpg"
  },
  {
    "nombre": "Intercomunicador Y13 Pro",
    "categoria": "Motorizados",
    "descripcion": "Intercom para motociclistas con radio FM integrada, alcance de hasta 50 metros. Permite conectar el celular para música, GPS y cuenta con resistencia al agua IPX6.",
    "precio": 700,
    "imagen": "img/prod_intercomunicador-y13-pro.jpg"
  },
  {
    "nombre": "Intercomunicador Y20 Max",
    "categoria": "Motorizados",
    "descripcion": "Sistema de intercomunicación 2 vías potente para piloto-copiloto o comunicación entre motos corta. DSP de ruido, hasta 1000 horas de standby y comandos por asistente de voz.",
    "precio": 600,
    "imagen": "img/prod_intercomunicador-y20-max.jpg"
  },
  {
    "nombre": "Intercomunicador Y80 2X",
    "categoria": "Motorizados",
    "descripcion": "Intercomunicador dual band Full-Duplex que permite conectar con múltiples motocicletas (hasta 2 de forma simultánea). Certificación IP67 ideal para lluvias torrenciales y viajes extremos.",
    "precio": 990,
    "imagen": "img/prod_intercomunicador-y80-2x.jpg"
  },
  {
    "nombre": "Cargador de Moto (USB-USB) (USB-Tipo C)",
    "categoria": "Motorizados",
    "descripcion": "Toma de corriente dual instalable en el manillar o fusibles de moto. 12V-24V con salida inteligente 3.1A para puerto tipo A y Tipo C simultáneamente. Incluye tapa impermeable.",
    "precio": 600,
    "imagen": "img/prod_cargador-de-moto-usb-usb-usb-tipo-c.jpg"
  },
  {
    "nombre": "EJEAS V6 Pro",
    "categoria": "Motorizados",
    "descripcion": "El estándar de oro en comunicación. Intercom Bluetooth de hasta 1200m de alcance, soporta hasta 6 motociclistas rotativos. DSP de alta velocidad y batería de 850mAh.",
    "precio": 1750,
    "imagen": "img/prod_ejeas-v6-pro.jpg"
  },
  {
    "nombre": "EJEAS Q7",
    "categoria": "Motorizados",
    "descripcion": "Sistema Bluetooth 5.1 que empareja y activa intercom al instante en 1 segundo. Chip Qualcomm avanzado, cancelación de ruido CVC e impermeable IP65. Alcance comprobado de 800m.",
    "precio": 2470,
    "imagen": "img/prod_ejeas-q7.jpg"
  },
  {
    "nombre": "EJEAS Q8",
    "categoria": "Motorizados",
    "descripcion": "Modelo insignia con tecnología Mesh para comunicación simultánea con hasta 6 pilotos de manera ininterrumpida. Calidad de audio estéreo 3D y sistema de auto-reconexión si alguien sale del rango.",
    "precio": 3680,
    "imagen": "img/prod_ejeas-q8.jpg"
  },
  {
    "nombre": "EJEAS K1",
    "categoria": "Motorizados",
    "descripcion": "Unidad de intercomunicación compacta y delgada, ideal para no comprometer la estética del casco. Soporta 2 pasajeros simultáneos, alcance de 500m con conexión HD continua.",
    "precio": 8805,
    "imagen": "img/prod_ejeas-k1.jpg"
  },
  {
    "nombre": "EJEAS X10",
    "categoria": "Motorizados",
    "descripcion": "Cámara y comunicador 2 en 1. Grabación de video Full HD 1080p con lente gran angular, comunicación Bluetooth simultánea y batería masiva para registros largos de tus viajes moteros.",
    "precio": 5630,
    "imagen": "img/prod_ejeas-x10.jpg"
  },
  {
    "nombre": "Smartwatch I90 Suit Extreme",
    "categoria": "Smartwatch",
    "descripcion": "Reloj inteligente ultrarresistente tipo deportivo-militar. Monitor de frecuencia cardíaca 24/7, medición de oxígeno en sangre, certificación IP68 y más de 100 modos deportivos.",
    "precio": 1090,
    "imagen": "img/prod_smartwatch-i90-suit-extreme.jpg"
  },
  {
    "nombre": "Smartwatch Howear Ultra 2 Call 5G",
    "categoria": "Smartwatch",
    "descripcion": "Pantalla AMOLED infinita de alta resolución y cristal de zafiro. Compatible con recepción de llamadas vía Bluetooth de alta fidelidad, notificaciones en tiempo real corporativas y GPS.",
    "precio": 2360,
    "imagen": "img/prod_smartwatch-howear-ultra-2-call-5g.jpg"
  },
  {
    "nombre": "Cargador de 33W",
    "categoria": "Cargadores Xiaomi Turbo Charger",
    "descripcion": "Cargador rápido Xiaomi original 33W QC3.0. Tecnología de control de temperatura de múltiples capas inteligente, ideal para cargar la mitad tu batería en 30 minutos. Compatible y seguro.",
    "precio": 600,
    "imagen": "img/prod_cargador-de-33w.jpg"
  },
  {
    "nombre": "Cargador de 67W",
    "categoria": "Cargadores Xiaomi Turbo Charger",
    "descripcion": "Cargador avanzado Xiaomi 67W. Incluye cable USB a Tipo C de 6 amperios. Carga completa del dispositivo en menos de 45 minutos. Componentes de nitruro de galio (GaN) anti-calentamiento.",
    "precio": 850,
    "imagen": "img/prod_cargador-de-67w.jpg"
  },
  {
    "nombre": "Cargador de 120W",
    "categoria": "Cargadores Xiaomi Turbo Charger",
    "descripcion": "La máxima velocidad de carga. HyperCharge Xiaomi 120W. Lleva tu teléfono del 0% al 100% en tan solo 15-20 minutos. El bloque incluye chip de protección de 9 niveles contra descargas.",
    "precio": 990,
    "imagen": "img/prod_cargador-de-120w.jpg"
  },
  {
    "nombre": "INEAR ZXT (Púrpura, Negro, Transparente)",
    "categoria": "Auriculares de Monitoreo",
    "descripcion": "Monitores de estudio in-ear con arquitectura de drivers dinámicos compuestos. Afinación acústica plana para músicos y productores, reducción de ruido pasiva extrema y calce ergonómico seguro.",
    "precio": 900,
    "imagen": "img/prod_inear-zxt-p-rpura-negro-transparente.jpg"
  },
  {
    "nombre": "INEAR ODIN",
    "categoria": "Auriculares de Monitoreo",
    "descripcion": "Avanzados monitores in-ear con sistema de múltiple balanceo. Respuesta en frecuencias sumamente detallada, logrando resaltar cada instrumento en vivo con su sonido analítico cristalino.",
    "precio": 850,
    "imagen": "img/prod_inear-odin.jpg"
  },
  {
    "nombre": "Cable Múltiple ODIN Q7",
    "categoria": "Auriculares de Monitoreo",
    "descripcion": "Cable de reemplazo OFC bañado en plata para monitores in-ear. Núcleo trenzado de 4 hilos sin enredos que mejora exponencialmente la transmisión de la señal auditiva minimizando interferencias.",
    "precio": 500,
    "imagen": "img/prod_cable-m-ltiple-odin-q7.jpg"
  },
  {
    "nombre": "Cable de Repuesto: Con/Sin Micrófono",
    "categoria": "Auriculares de Monitoreo",
    "descripcion": "Cable universal estándar de 2 pines y jack de 3.5mm para monitores intrauditivos. Seleccionable en versión con control de llamadas incluido o cable de audio directo clásico.",
    "precio": 400,
    "imagen": "img/prod_cable-de-repuesto-con-sin-micr-fono.jpg"
  },
  {
    "nombre": "Micrófono K15 (Entrada Tipo C -Plus-iPhone)",
    "categoria": "Micrófono de Solapa",
    "descripcion": "Sistema de micrófono inalámbrico Lavalier recargable 2.4GHz Plug & Play. Rango eficaz de recepción de 20 metros sin delays. Ideal para grabar TikTok, vlogs, entrevistas o transmisiones en directo.",
    "precio": 700,
    "imagen": "img/prod_micr-fono-k15-entrada-tipo-c-plus-iphone.jpg"
  },
  {
    "nombre": "Micrófono K61 (Tipo C)",
    "categoria": "Micrófono de Solapa",
    "descripcion": "Micrófono condenser para PC o móviles Tipo-C. Incorpora patrón polar omnidireccional con espuma corta viento de alta densidad y sujeción tipo corbata firme de metal premium.",
    "precio": 900,
    "imagen": "img/prod_micr-fono-k61-tipo-c.jpg"
  },
  {
    "nombre": "Enfriador CX07",
    "categoria": "Enfriadores Móviles",
    "descripcion": "Cooler semiconductor magnético avanzado para teléfonos móviles. Efecto de refrigeración extrema para largas jornadas prolongadas de gaming, evitando caídas de fotogramas por Thermal Throttling.",
    "precio": 670,
    "imagen": "img/prod_enfriador-cx07.jpg"
  },
  {
    "nombre": "Enfriador DL05",
    "categoria": "Enfriadores Móviles",
    "descripcion": "Ventilador enfriador RGB con abrazaderas extensibles, capaz de bajar la temperatura del teléfono hasta 10 grados en 3 minutos. Cuenta con pantalla de temperatura digital LCD y diseño silencioso.",
    "precio": 800,
    "imagen": "img/prod_enfriador-dl05.jpg"
  }
];

// -------------------- UTILIDADES DE SEGURIDAD Y TEXTO --------------------
function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizarTexto(str) {
  if (!str) return "";
  return String(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// -------------------- ADMIN CACHE Y API --------------------
const GOOGLE_SHEETS_API = "https://script.google.com/macros/s/AKfycbyX1fF2HE1jORlndPy0I44jXAnlP3L1TznNARNDlwVDwMgptQdf5DZmDDcEl4to_KXILw/exec";

async function enviarPostAdmin(payload) {
  const user = sessionStorage.getItem("adminUser") || "";
  const pass = sessionStorage.getItem("adminPass") || "";
  const bodyObj = Object.assign({}, payload, { user, pass });

  const res = await fetch(GOOGLE_SHEETS_API, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(bodyObj)
  });

  if (!res.ok) {
    throw new Error("Error HTTP " + res.status);
  }

  const data = await res.json();
  if (data.status === "error") {
    throw new Error(data.message || "Error en el servidor de Google Sheets");
  }
  return data;
}

let productosEnMemoria = null;
let promesaProductos = null;

function invalidarCacheProductos() {
  productosEnMemoria = null;
  promesaProductos = null;
  localStorage.removeItem("tech_productos_v2");
}

async function obtenerProductos(forzarRecarga = false) {
  if (forzarRecarga) {
    productosEnMemoria = null;
    promesaProductos = null;
  }

  if (!forzarRecarga && productosEnMemoria) {
    return productosEnMemoria;
  }

  if (!forzarRecarga && promesaProductos) {
    return promesaProductos;
  }

  promesaProductos = (async () => {
    try {
      const res = await fetch(`${GOOGLE_SHEETS_API}?_t=${Date.now()}`, { cache: "no-store" });
      if (res.ok) {
        let products = await res.json();
        if (Array.isArray(products) && products.length > 0) {
          products = products.map(p => {
            p.precio = parseFloat(p.precio) || 0;
            return p;
          });
          productosEnMemoria = products;
          localStorage.setItem("tech_productos_v2", JSON.stringify(products));
          return products;
        }
      }
    } catch (err) {
      console.error("Error cargando de Google Sheets:", err);
    } finally {
      promesaProductos = null;
    }

    const cached = localStorage.getItem("tech_productos_v2");
    if (cached) {
      try {
        productosEnMemoria = JSON.parse(cached);
        return productosEnMemoria;
      } catch (e) {}
    }

    productosEnMemoria = JSON.parse(JSON.stringify(PRODUCTOS_BD));
    return productosEnMemoria;
  })();

  return promesaProductos;
}

const DEFAULTS_FAQS = [
  {
    pregunta: "¿Hacen envíos en Nicaragua?",
    respuesta: "Sí, realizamos envíos a todo el país. Trabajamos con transportistas confiables que entregan en Managua y departamentos."
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta: "Aceptamos transferencias bancarias (BAC, Banpro, Lafise, Ficohsa), billetera móvil, efectivo y pagos contra entrega."
  },
  {
    pregunta: "¿Los productos tienen garantía?",
    respuesta: "Sí, todos nuestros productos cuentan con garantía. Ante cualquier defecto de fábrica te apoyamos con el cambio o reembolso."
  },
  {
    pregunta: "¿Cómo hago un pedido?",
    respuesta: "Puedes contactarnos directamente por WhatsApp al +505 8660-8628. Selecciona el producto de nuestro catálogo y envíanos un mensaje para coordinar tu compra."
  },
  {
    pregunta: "¿Dónde están ubicados?",
    respuesta: "Estamos en Managua, Colonia 9 de Junio, Terminal de Ruta 119, 2 cuadras al sur, 1 cuadra abajo, media cuadra al sur, mano izquierda. También atendemos pedidos en línea con envío a domicilio."
  },
  {
    pregunta: "¿Venden auriculares gamer en Nicaragua?",
    respuesta: "Sí, contamos con una amplia variedad de auriculares gamer: modelos P30, P36 Cobra, P50, K89, Zombiescast B5, Inva, X35 y más, con precios desde C$500."
  },
  {
    pregunta: "¿Venden intercomunicadores EJEAS en Nicaragua?",
    respuesta: "Sí, somos distribuidores de intercomunicadores EJEAS en Nicaragua. Tenemos los modelos V6 Pro, Q7, Q8, K1 y X10 disponibles para motociclistas."
  },
  {
    pregunta: "¿Cuánto tarda el envío?",
    respuesta: "Los envíos dentro de Managua se coordinan el mismo día o al día siguiente. Los envíos a departamentos dependen del transportista, generalmente de 1 a 3 días hábiles."
  }
];

const DEFAULTS_REDES = [
  { nombre: "Facebook", url: "https://www.facebook.com/p/Tech-Store-Nicaragua-61556545501927/", icono: "public" },
  { nombre: "Instagram", url: "https://www.instagram.com/techstorenic/", icono: "photo_camera" },
  { nombre: "WhatsApp", url: "https://wa.me/50586608628", icono: "chat" }
];

const DEFAULTS_DATOS = {
  nombre: "Tech Store Nicaragua",
  ubicacion: "Managua, Colonia 9 de Junio, Terminal de Ruta 119 2c al sur 1c abajo 1/2c al sur MI, Managua, Nicaragua",
  facebook: "https://www.facebook.com/p/Tech-Store-Nicaragua-61556545501927/",
  instagram: "https://www.instagram.com/techstorenic/",
  whatsapp: "50586608628"
};

async function sincronizarConfigRemota() {
  try {
    const res = await fetch(`${GOOGLE_SHEETS_API}?type=config&_t=${Date.now()}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data && data.status === "success") {
        if (data.datos) {
          localStorage.setItem("tech_datos", JSON.stringify(data.datos));
          if (Array.isArray(data.datos.categorias) && data.datos.categorias.length > 0) {
            localStorage.setItem("tech_categorias", JSON.stringify(data.datos.categorias));
          }
        }
        if (Array.isArray(data.faqs) && data.faqs.length > 0) localStorage.setItem("tech_faqs", JSON.stringify(data.faqs));
        if (Array.isArray(data.redes) && data.redes.length > 0) localStorage.setItem("tech_redes", JSON.stringify(data.redes));
      }
    }
  } catch (e) {
    // Si el endpoint aún no soporta ?type=config, usa localStorage silenciosamente
  }
}

async function obtenerFAQs() {
  const cached = localStorage.getItem("tech_faqs");
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {}
  }
  localStorage.setItem("tech_faqs", JSON.stringify(DEFAULTS_FAQS));
  return DEFAULTS_FAQS;
}

async function obtenerRedes() {
  const cached = localStorage.getItem("tech_redes");
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {}
  }
  localStorage.setItem("tech_redes", JSON.stringify(DEFAULTS_REDES));
  return DEFAULTS_REDES;
}

async function obtenerDatosGenerales() {
  const cached = localStorage.getItem("tech_datos");
  if (cached) {
    try {
      const datos = JSON.parse(cached);
      if (datos.ubicacion === "Managua, Nicaragua") {
        datos.ubicacion = DEFAULTS_DATOS.ubicacion;
        localStorage.setItem("tech_datos", JSON.stringify(datos));
      }
      return Object.assign({}, DEFAULTS_DATOS, datos);
    } catch (e) {}
  }

  localStorage.setItem("tech_datos", JSON.stringify(DEFAULTS_DATOS));
  return Object.assign({}, DEFAULTS_DATOS);
}

async function aplicarDatosGenerales() {
  const datos = await obtenerDatosGenerales();

  const headerTitle = document.querySelector(".logo-container h1");
  if (headerTitle) headerTitle.textContent = datos.nombre;

  const footerCopyright = document.getElementById("footer-nombre-copyright");
  if (footerCopyright) footerCopyright.textContent = "© " + new Date().getFullYear() + " " + datos.nombre;

  const footerUbicacion = document.getElementById("footer-ubicacion");
  if (footerUbicacion) footerUbicacion.textContent = "Ubicación: " + datos.ubicacion;
}

async function cargarRedes() {
  const redes = await obtenerRedes();
  const container = document.getElementById("footer-redes");
  if (!container) return;
  container.innerHTML = "";
  redes.forEach(red => {
    const a = document.createElement("a");
    a.href = red.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `<span class="material-symbols-outlined" aria-hidden="true">${escapeHtml(red.icono)}</span> ${escapeHtml(red.nombre)}`;
    container.appendChild(a);
  });
}

function actualizarSchemaFAQs(faqs) {
  const schemaScript = document.getElementById("schema-faq");
  if (!schemaScript) return;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.pregunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.respuesta
      }
    }))
  };
  schemaScript.textContent = JSON.stringify(schema);
}

async function cargarFAQs() {
  const faqs = await obtenerFAQs();
  const container = document.getElementById("faq-container");
  if (!container) return;
  container.innerHTML = "";
  faqs.forEach(faq => {
    const item = document.createElement("div");
    item.className = "faq-item";
    item.setAttribute("role", "listitem");
    item.innerHTML = `
      <button class="faq-question" aria-expanded="false">${escapeHtml(faq.pregunta)}</button>
      <div class="faq-answer"><p>${escapeHtml(faq.respuesta)}</p></div>
    `;
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      const estabaActivo = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach(i => {
        i.classList.remove("active");
        const b = i.querySelector(".faq-question");
        if (b) b.setAttribute("aria-expanded", "false");
      });
      if (!estabaActivo) {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
      }
    });
    container.appendChild(item);
  });
  actualizarSchemaFAQs(faqs);
}

// -------------------- ELEMENTOS --------------------
const heroContainer = document.getElementById("hero-cards");
const catalogoContainer = document.getElementById("catalogo-container");
const catalogoGrid = document.getElementById("catalogo-grid");
const catalogoTitulo = document.getElementById("catalogo-titulo");
const productSlider = document.getElementById("product-slider");
const searchInput = document.getElementById("search-input");
const btnCatalogo = document.getElementById("btn-catalogo");
const btnBuscar = document.getElementById("btn-buscar");

// Estado activo de filtros del catálogo
let categoriaActual = null;
let busquedaActual = "";

// -------------------- WHATSAPP --------------------
function enviarWhatsApp(mensaje) {
  const cached = localStorage.getItem("tech_datos");
  let numero = DEFAULTS_DATOS.whatsapp;
  if (cached) {
    try {
      const d = JSON.parse(cached);
      if (d.whatsapp) numero = String(d.whatsapp).replace(/\D/g, "");
    } catch (e) {}
  }
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// Función global para el botón de contacto general
function contactar() {
  const mensaje = "¡Hola! Me gustaría obtener más información sobre sus productos.";
  enviarWhatsApp(mensaje);
}

// -------------------- HELPER IMAGEN --------------------
function procesarUrlImagen(url) {
  if (!url || url.trim() === "") return "img/generico.png";
  url = url.trim();
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

// -------------------- GESTIÓN DE MODALES --------------------
function actualizarScrollBody() {
  const hayModal = document.querySelector(".producto-overlay");
  document.body.style.overflow = hayModal ? "hidden" : "auto";
}

function cerrarModalElemento(overlay) {
  if (overlay) overlay.remove();
  actualizarScrollBody();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const overlays = document.querySelectorAll(".producto-overlay");
    if (overlays.length > 0) {
      cerrarModalElemento(overlays[overlays.length - 1]);
    }
  }
});

function agendarPedido(product) {
  const formOverlay = document.createElement("div");
  formOverlay.className = "producto-overlay";

  formOverlay.innerHTML = `
    <div class="producto-detalle-profesional" style="max-width: 400px; flex-direction: column; gap: 15px; text-align: left;">
      <h2 style="color: #003366; text-align: center; margin-bottom: 5px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">calendar_month</span> Agendar Pedido</h2>
      <p style="text-align: center; margin-bottom: 10px; color: #555; width: 100%;">Estás agendando: <strong>${escapeHtml(product.nombre)}</strong></p>
      
      <div class="form-group">
        <label for="agenda-nombre">Nombre completo</label>
        <input type="text" id="agenda-nombre" placeholder="Ej. Juan Pérez">
      </div>
      <div class="form-group">
        <label for="agenda-numero">Número de WhatsApp</label>
        <input type="tel" id="agenda-numero" placeholder="Ej. 8888-8888">
      </div>
      <div class="form-group">
        <label for="agenda-ubicacion">Ubicación</label>
        <input type="text" id="agenda-ubicacion" placeholder="Ej. Managua, Linda Vista">
      </div>
      <div class="form-group">
        <label for="agenda-horario">Horario</label>
        <input type="text" id="agenda-horario" placeholder="Ej. Por la mañana, 10 AM">
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 15px; width: 100%;">
        <button class="btn-cerrar-form volver-btn" style="margin-top: 0;">Cancelar</button>
        <button class="btn-enviar-agenda producto-btn" style="margin-top: 0; margin-left: auto;">Confirmar y Enviar</button>
      </div>
    </div>
  `;

  document.body.appendChild(formOverlay);
  actualizarScrollBody();

  formOverlay.querySelector(".btn-enviar-agenda").onclick = () => {
    const nombre = document.getElementById("agenda-nombre").value.trim();
    const numero = document.getElementById("agenda-numero").value.trim();
    const ubicacion = document.getElementById("agenda-ubicacion").value.trim();
    const horario = document.getElementById("agenda-horario").value.trim();

    if (!nombre || !numero || !ubicacion || !horario) {
      alert("Por favor completa todos los campos para poder agendar.");
      return;
    }

    const mensaje = `[NUEVO PEDIDO AGENDADO]\n\nProducto: ${product.nombre}\nPrecio: C$${product.precio}\n\nCliente: ${nombre}\nContacto: ${numero}\nUbicación: ${ubicacion}\nHorario: ${horario}`;
    enviarWhatsApp(mensaje);

    cerrarModalElemento(formOverlay);
  };

  formOverlay.querySelector(".btn-cerrar-form").onclick = () => {
    cerrarModalElemento(formOverlay);
  };

  formOverlay.addEventListener("click", (e) => {
    if (e.target === formOverlay) cerrarModalElemento(formOverlay);
  });
}

function comprarProducto(product) {
  const formOverlay = document.createElement("div");
  formOverlay.className = "producto-overlay";

  const cuentas = {
    "bac": "365 889 195 (BAC)",
    "banpro": "100 232 001 662 12 (Banpro)",
    "lafise": "132 090 561 (Lafise Córdoba) / 130 209 664 (Lafise Dólar)",
    "billetera": "8150-3116 (Billetera Móvil)",
    "ficohsa": "238 401 000 006 332 (Ficohsa)"
  };

  formOverlay.innerHTML = `
    <div class="producto-detalle-profesional" style="max-width: 450px; flex-direction: column; gap: 15px; text-align: left;">
      <h2 style="color: #003366; text-align: center; margin-bottom: 5px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;">
        <span class="material-symbols-outlined">account_balance</span> Pagar con Transferencia
      </h2>
      <p style="text-align: center; margin-bottom: 15px; color: #555; width: 100%; font-size: 14px;">
        Estás comprando: <strong>${escapeHtml(product.nombre)}</strong> (C$${escapeHtml(product.precio)})
      </p>

      <div class="form-group">
        <label for="select-banco">Selecciona tu banco:</label>
        <select id="select-banco" style="padding: 10px; border-radius: 8px; border: 1px solid #ccc; font-size: 15px; outline: none;">
          <option value="" disabled selected>-- Elige un banco --</option>
          <option value="bac">BAC Credomatic</option>
          <option value="banpro">Banpro</option>
          <option value="lafise">Banco Lafise</option>
          <option value="billetera">Billetera Móvil</option>
          <option value="ficohsa">Banco Ficohsa</option>
        </select>
      </div>

      <div id="tutorial-pago" style="display: none; background: #eef7ff; padding: 15px; border-radius: 10px; border-left: 4px solid #00AEEF; margin-top: 10px;">
        <h3 style="margin-top:0; color:#003366; font-size: 16px;">Pasos para confirmar tu pago:</h3>
        <ol style="margin-bottom:0; padding-left:20px; color:#444; font-size: 14px; line-height: 1.6;">
          <li>Transfiere la cantidad exacta de <strong>C$${escapeHtml(product.precio)}</strong> a nombre de: <strong>Yeltzin Jose Mendoza Ruiz</strong></li>
          <li style="margin: 10px 0; font-size: 15px; color: #000;"><strong>Cuenta: <span id="cuenta-banco-texto"></span></strong></li>
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
  actualizarScrollBody();

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
    const mensaje = `[PAGO POR TRANSFERENCIA]\n\nProducto: ${product.nombre}\nPrecio a pagar: C$${product.precio}\nBanco de transferencia: ${banco}\n\n[Adjunta aquí la captura de tu comprobante de pago para procesar el pedido]`;
    enviarWhatsApp(mensaje);
    cerrarModalElemento(formOverlay);
  };

  formOverlay.querySelector(".btn-cerrar-compra").onclick = () => {
    cerrarModalElemento(formOverlay);
  };

  formOverlay.addEventListener("click", (e) => {
    if (e.target === formOverlay) cerrarModalElemento(formOverlay);
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
        <img src="${escapeHtml(product.imagen || 'img/generico.png')}" alt="${escapeHtml(product.nombre)}" style="aspect-ratio:1/1; object-fit:cover; width:100%; max-width:350px; border-radius:15px; border: 1px solid #eee; background: white;">
      </div>

      <div class="detalle-info">
        <h2 class="detalle-titulo">${escapeHtml(product.nombre)}</h2>
        <div class="detalle-categoria"><span>Categoría:</span> ${escapeHtml(product.categoria)}</div>
        <p class="detalle-desc">${escapeHtml(product.descripcion)}</p>
        <div class="detalle-precio">C$${escapeHtml(product.precio)}</div>

        <div class="detalle-acciones">
          <button class="btn-agendar producto-btn btn-amarillo"><span class="material-symbols-outlined">calendar_month</span> Agendar Pedido</button>
          <button class="btn-comprar producto-btn btn-verde"><span class="material-symbols-outlined">credit_card</span> Comprar Ahora</button>
        </div>

        <button class="btn-cerrar volver-btn btn-outline"><span class="material-symbols-outlined">close</span> Volver al Catálogo</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  actualizarScrollBody();

  overlay.querySelector(".btn-agendar").onclick = () => agendarPedido(product);
  overlay.querySelector(".btn-comprar").onclick = () => comprarProducto(product);
  overlay.querySelector(".btn-cerrar").onclick = () => cerrarModalElemento(overlay);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) cerrarModalElemento(overlay);
  });
}

function cerrarDetalle() {
  const overlay = document.querySelector(".producto-overlay");
  cerrarModalElemento(overlay);
}

// -------------------- IMÁGENES POR CATEGORÍA --------------------
const IMAGENES_CATEGORIAS = {
  "Auriculares Gamer": "img/prod_p30.jpg",
  "Multimedia": "img/prod_auriculares-a9-pro.jpg",
  "Auriculares Ejecutivos": "img/prod_yyk-520.jpg",
  "Auriculares para la Escucha": "img/prod_intrauditivo-individual-z-360bt.jpg",
  "Bancos de Carga": "img/prod_powerbank-de-50-mil-map-con-panel-y-carga-corriente.jpg",
  "Teclados": "img/prod_mini-teclado-bluetooth-recargable.jpg",
  "Motorizados": "img/prod_ejeas-v6-pro.jpg",
  "Smartwatch": "img/prod_smartwatch-i90-suit-extreme.jpg",
  "Cargadores Xiaomi Turbo Charger": "img/prod_cargador-de-33w.jpg",
  "Auriculares de Monitoreo": "img/prod_inear-odin.jpg",
  "Micrófono de Solapa": "img/prod_micr-fono-k15-entrada-tipo-c-plus-iphone.jpg",
  "Enfriadores Móviles": "img/prod_enfriador-cx07.jpg"
};

const DEFAULTS_CATEGORIAS = CATEGORIAS_BD.map(cat => ({
  nombre: cat,
  imagen: IMAGENES_CATEGORIAS[cat] || "img/generico.png"
}));

async function obtenerCategorias(forzarRecarga = false) {
  if (forzarRecarga) {
    await sincronizarConfigRemota();
  }
  const cached = localStorage.getItem("tech_categorias");
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map(c => typeof c === "string"
          ? { nombre: c, imagen: IMAGENES_CATEGORIAS[c] || "img/generico.png" }
          : { nombre: c.nombre, imagen: c.imagen || IMAGENES_CATEGORIAS[c.nombre] || "img/generico.png" }
        );
      }
    } catch (e) {}
  }

  localStorage.setItem("tech_categorias", JSON.stringify(DEFAULTS_CATEGORIAS));
  return JSON.parse(JSON.stringify(DEFAULTS_CATEGORIAS));
}

async function guardarCategorias(categoriasLista) {
  localStorage.setItem("tech_categorias", JSON.stringify(categoriasLista));
  try {
    const datosActuales = await obtenerDatosGenerales();
    const nuevosDatos = Object.assign({}, datosActuales, { categorias: categoriasLista });
    localStorage.setItem("tech_datos", JSON.stringify(nuevosDatos));
    await enviarPostAdmin({ action: "save_config", key: "datos", value: nuevosDatos });
  } catch (e) {
    console.warn("Guardado local de categorías aplicado:", e);
  }
}

// -------------------- CATEGORÍAS --------------------
async function cargarCategorias() {
  try {
    if (!heroContainer) return;
    const categories = await obtenerCategorias();

    heroContainer.innerHTML = "";

    categories.forEach(catObj => {
      const categoria = catObj.nombre;
      const card = document.createElement("div");
      card.className = "hero-card";
      card.setAttribute("role", "listitem");
      card.setAttribute("tabindex", "0");

      const imgSrc = catObj.imagen || IMAGENES_CATEGORIAS[categoria] || "img/generico.png";

      card.innerHTML = `
        <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(categoria)} - Tech Store Nicaragua" loading="lazy" style="aspect-ratio: 1/1; object-fit: cover; width: 100%; border-radius: 10px 10px 0 0;">
        <h3>${escapeHtml(categoria)}</h3>
      `;

      card.onclick = () => cargarCatalogo(categoria, "");
      card.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          cargarCatalogo(categoria, "");
        }
      };
      heroContainer.appendChild(card);
    });

  } catch (err) {
    console.error(err);
  }
}

// -------------------- PRODUCTOS --------------------
async function cargarProductos(forzarRecarga = false) {
  try {
    const products = await obtenerProductos(forzarRecarga);

    productSlider.innerHTML = "";

    const featuredProducts = products.slice(0, 3);

    featuredProducts.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";
      card.setAttribute("role", "listitem");
      card.setAttribute("itemscope", "");
      card.setAttribute("itemtype", "https://schema.org/Product");

      card.innerHTML = `
        <img src="${escapeHtml(product.imagen || 'img/generico.png')}" alt="${escapeHtml(product.nombre)} - ${escapeHtml(product.categoria)} en Nicaragua" loading="lazy" style="aspect-ratio:1/1; object-fit:cover; width:100%; border-radius:15px; border: 1px solid #eee; background: white;" itemprop="image">
        <h3 itemprop="name">${escapeHtml(product.nombre)}</h3>
        <p class="categoria" itemprop="category">${escapeHtml(product.categoria)}</p>
        <p class="descripcion" itemprop="description">${escapeHtml(product.descripcion)}</p>
        <p class="precio" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          <span itemprop="price" content="${escapeHtml(product.precio)}">C$${escapeHtml(product.precio)}</span>
          <meta itemprop="priceCurrency" content="NIO">
          <meta itemprop="availability" content="https://schema.org/InStock">
        </p>
      `;

      card.onclick = () => mostrarProducto(product);
      productSlider.appendChild(card);
    });

    inyectarSchemaProductosDestacados(featuredProducts);

  } catch (err) {
    console.error(err);
  }
}

function inyectarSchemaProductosDestacados(products) {
  const existing = document.getElementById("schema-productos-destacados");
  if (existing) existing.remove();

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Productos Destacados - Tech Store Nicaragua",
    "itemListElement": products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.nombre,
        "description": p.descripcion,
        "image": p.imagen
          ? (p.imagen.startsWith("http") ? p.imagen : `https://techstore-nicaragua.com/${p.imagen}`)
          : undefined,
        "category": p.categoria,
        "offers": {
          "@type": "Offer",
          "price": p.precio,
          "priceCurrency": "NIO",
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "Organization", "name": "Tech Store Nicaragua" }
        }
      }
    }))
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "schema-productos-destacados";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// -------------------- BUSCADOR --------------------
function ejecutarBusqueda() {
  const query = searchInput.value.trim();
  cargarCatalogo(null, query);
}

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

if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ejecutarBusqueda();
    }
  });
}

// -------------------- CATÁLOGO --------------------
async function cargarCatalogo(categoria = undefined, buscar = undefined) {
  try {
    if (categoria !== undefined) categoriaActual = categoria;
    if (buscar !== undefined) busquedaActual = buscar;

    const products = await obtenerProductos();

    catalogoGrid.innerHTML = "";

    let filtrados = products;

    if (categoriaActual) {
      filtrados = filtrados.filter(p => p.categoria === categoriaActual);
    }

    if (busquedaActual) {
      const q = normalizarTexto(busquedaActual);
      filtrados = filtrados.filter(p =>
        normalizarTexto(p.nombre).includes(q) ||
        normalizarTexto(p.categoria).includes(q) ||
        normalizarTexto(p.descripcion).includes(q)
      );
    }

    // Actualizar título del catálogo según el filtro activo
    if (catalogoTitulo) {
      if (categoriaActual) {
        catalogoTitulo.textContent = `Catálogo: ${categoriaActual}`;
      } else if (busquedaActual) {
        catalogoTitulo.textContent = `Resultados para "${busquedaActual}"`;
      } else {
        catalogoTitulo.textContent = "Catálogo Completo";
      }
    }

    // Filtro de precio
    const precioMinInput = document.getElementById("filtro-precio-min");
    const precioMaxInput = document.getElementById("filtro-precio-max");
    const precioMin = precioMinInput && precioMinInput.value !== "" ? parseFloat(precioMinInput.value) : 0;
    const precioMax = precioMaxInput && precioMaxInput.value !== "" ? parseFloat(precioMaxInput.value) : Infinity;
    if (precioMin > 0 || precioMax < Infinity) {
      filtrados = filtrados.filter(p => p.precio >= precioMin && p.precio <= precioMax);
    }

    if (filtrados.length === 0) {
      catalogoGrid.innerHTML = `<p style="color:#666; font-size:16px; padding: 2rem; text-align:center; width:100%;">No se encontraron productos con estos filtros.</p>`;
    } else {
      filtrados.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("role", "listitem");
        card.setAttribute("itemscope", "");
        card.setAttribute("itemtype", "https://schema.org/Product");

        card.innerHTML = `
          <img src="${escapeHtml(product.imagen || 'img/generico.png')}" alt="${escapeHtml(product.nombre)} - ${escapeHtml(product.categoria)} en Nicaragua | Tech Store Nicaragua" loading="lazy" style="aspect-ratio: 1/1; object-fit: cover; width: 100%; border-radius: 8px;" itemprop="image">
          <h3 itemprop="name">${escapeHtml(product.nombre)}</h3>
          <p class="categoria" itemprop="category">${escapeHtml(product.categoria)}</p>
          <p class="descripcion" itemprop="description">${escapeHtml(product.descripcion)}</p>
          <p class="precio" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
            <span itemprop="price" content="${escapeHtml(product.precio)}">C$${escapeHtml(product.precio)}</span>
            <meta itemprop="priceCurrency" content="NIO">
            <meta itemprop="availability" content="https://schema.org/InStock">
          </p>
        `;

        card.onclick = () => mostrarProducto(product);
        catalogoGrid.appendChild(card);
      });
    }

    catalogoContainer.style.display = "block";
    productSlider.parentElement.style.display = "none";

    catalogoContainer.scrollIntoView({ behavior: "smooth", block: "start" });

  } catch (err) {
    console.error(err);
  }
}

// -------------------- BOTÓN CATÁLOGO --------------------
if (btnCatalogo) {
  btnCatalogo.onclick = () => {
    if (searchInput) searchInput.value = "";
    cargarCatalogo(null, "");
  };
}

// -------------------- FILTRO DE PRECIO --------------------
const btnAplicarPrecio = document.getElementById("btn-aplicar-precio");
const btnLimpiarPrecio = document.getElementById("btn-limpiar-precio");
if (btnAplicarPrecio) {
  btnAplicarPrecio.onclick = () => cargarCatalogo();
}
if (btnLimpiarPrecio) {
  btnLimpiarPrecio.onclick = () => {
    const minInput = document.getElementById("filtro-precio-min");
    const maxInput = document.getElementById("filtro-precio-max");
    if (minInput) minInput.value = "";
    if (maxInput) maxInput.value = "";
    cargarCatalogo();
  };
}

// -------------------- INIT --------------------
document.addEventListener("DOMContentLoaded", async () => {
  aplicarDatosGenerales();
  cargarRedes();
  cargarFAQs();
  if (heroContainer) cargarCategorias();
  if (productSlider) cargarProductos();

  // Soporte para parámetros URL (?buscar=... y ?catalogo=true) declarados en Schema.org y PWA Manifest
  const params = new URLSearchParams(window.location.search);
  const queryBuscar = params.get("buscar");
  const abrirCatalogo = params.get("catalogo");
  if (queryBuscar) {
    if (searchInput) {
      searchInput.classList.add("activo");
      searchInput.value = queryBuscar;
    }
    cargarCatalogo(null, queryBuscar);
  } else if (abrirCatalogo === "true") {
    cargarCatalogo(null, "");
  }

  // Sincronizar configuración remota en segundo plano sin bloquear el renderizado inicial
  await sincronizarConfigRemota();
  aplicarDatosGenerales();
  cargarRedes();
  cargarFAQs();
  if (heroContainer) cargarCategorias();
});

/* -------------------- ADMIN LOGIC -------------------- */
const btnAdmin = document.getElementById("btn-admin");
const btnCerrarSesion = document.getElementById("btn-cerrar-sesion");
const btnAgregar = document.getElementById("btn-agregar-producto");
const btnEliminar = document.getElementById("btn-eliminar-producto");
const btnCategorias = document.getElementById("btn-categorias");
const btnEditarData = document.getElementById("btn-editar-datos");
const btnEditarProd = document.getElementById("btn-editar-producto");
const btnRecargarCache = document.getElementById("btn-recargar-cache");

if (btnRecargarCache) {
  btnRecargarCache.onclick = () => {
    if (confirm("¿Sincronizar todos los productos locales hacia el Excel? Haz esto solo si tu Excel está vacío.")) {
      btnRecargarCache.innerHTML = `<span class="material-symbols-outlined">sync</span> Sincronizando...`;
      btnRecargarCache.disabled = true;
      (async () => {
        try {
          const products = JSON.parse(JSON.stringify(PRODUCTOS_BD));
          await enviarPostAdmin({ action: "sync_all", products });
          invalidarCacheProductos();
          alert("Sincronización completa. Se recargará el catálogo.");
          location.reload();
        } catch (err) {
          alert("Error al sincronizar: " + err.message);
          btnRecargarCache.innerHTML = `<span class="material-symbols-outlined">sync</span> Subir al Excel`;
          btnRecargarCache.disabled = false;
        }
      })();
    }
  };
}

function checkAdmin() {
  const esAdmin = sessionStorage.getItem("isAdmin") === "true" && Boolean(sessionStorage.getItem("adminPass"));
  if (esAdmin) {
    if (btnAdmin) btnAdmin.style.display = "none";
    if (btnCerrarSesion) btnCerrarSesion.style.display = "inline-flex";
    if (btnAgregar) btnAgregar.style.display = "inline-flex";
    if (btnEliminar) btnEliminar.style.display = "inline-flex";
    if (btnCategorias) btnCategorias.style.display = "inline-flex";
    if (btnEditarData) btnEditarData.style.display = "inline-flex";
    if (btnEditarProd) btnEditarProd.style.display = "inline-flex";
    if (btnRecargarCache) btnRecargarCache.style.display = "inline-flex";
  } else {
    if (btnAdmin) btnAdmin.style.display = "";
    if (btnCerrarSesion) btnCerrarSesion.style.display = "none";
    if (btnAgregar) btnAgregar.style.display = "none";
    if (btnEliminar) btnEliminar.style.display = "none";
    if (btnCategorias) btnCategorias.style.display = "none";
    if (btnEditarData) btnEditarData.style.display = "none";
    if (btnEditarProd) btnEditarProd.style.display = "none";
    if (btnRecargarCache) btnRecargarCache.style.display = "none";
  }
}
checkAdmin();

if (btnCategorias) {
  btnCategorias.onclick = () => abrirEditorCategorias();
}

if (btnCerrarSesion) {
  btnCerrarSesion.onclick = () => {
    if (confirm("¿Deseas cerrar la sesión de administrador?")) {
      sessionStorage.removeItem("isAdmin");
      sessionStorage.removeItem("adminUser");
      sessionStorage.removeItem("adminPass");
      checkAdmin();
      alert("Sesión de administrador cerrada.");
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
        <div class="form-group"><label for="admin-user">Usuario</label><input type="text" id="admin-user" autocomplete="username"></div>
        <div class="form-group"><label for="admin-pass">Contraseña</label><input type="password" id="admin-pass" autocomplete="current-password"></div>
        <div style="display:flex; justify-content:space-between; margin-top:10px; width:100%; gap:10px;">
          <button class="btn-cancel-admin volver-btn" style="margin-top:0;">Cerrar</button>
          <button class="btn-login-admin producto-btn" style="margin-top:0; background:#003366;">Ingresar</button>
        </div>
      </div>
    `;
    document.body.appendChild(formOverlay);
    actualizarScrollBody();

    const btnLogin = formOverlay.querySelector(".btn-login-admin");
    btnLogin.onclick = async () => {
      const u = document.getElementById("admin-user").value.trim();
      const p = document.getElementById("admin-pass").value;
      if (!u || !p) return alert("Ingresa tu usuario y contraseña.");

      btnLogin.textContent = "Verificando...";
      btnLogin.disabled = true;

      try {
        const res = await fetch(GOOGLE_SHEETS_API, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ action: "login", user: u, pass: p })
        });
        const data = await res.json();

        if (data.status === "success") {
          sessionStorage.setItem("isAdmin", "true");
          sessionStorage.setItem("adminUser", u);
          sessionStorage.setItem("adminPass", p);
          checkAdmin();
          alert("¡Bienvenido Administrador!");
          cerrarModalElemento(formOverlay);
        } else if (data.message === "Acción no válida") {
          alert("Aviso: Debes actualizar el código de Google Apps Script (Nueva implementación) para activar el inicio de sesión seguro.");
          btnLogin.textContent = "Ingresar";
          btnLogin.disabled = false;
        } else {
          alert(data.message || "Credenciales incorrectas.");
          btnLogin.textContent = "Ingresar";
          btnLogin.disabled = false;
        }
      } catch (err) {
        alert("Error al conectar con el servidor: " + err.message);
        btnLogin.textContent = "Ingresar";
        btnLogin.disabled = false;
      }
    };
    formOverlay.querySelector(".btn-cancel-admin").onclick = () => cerrarModalElemento(formOverlay);
  };
}

if (btnAgregar) {
  btnAgregar.onclick = async () => {
    const categorias = await obtenerCategorias();
    const catBtnsHtml = categorias.map(c =>
      `<button type="button" class="cat-btn" data-cat="${escapeHtml(c.nombre)}">${escapeHtml(c.nombre)}</button>`
    ).join("");

    const formOverlay = document.createElement("div");
    formOverlay.className = "producto-overlay";
    formOverlay.innerHTML = `
      <div class="producto-detalle-profesional" style="max-width: 500px; flex-direction: column; gap: 15px; text-align: left;">
        <h2 style="color: #28a745; text-align: center; margin-bottom: 5px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">add_circle</span> Agregar Producto</h2>

        <div class="form-group"><label for="add-nombre">Nombre</label><input type="text" id="add-nombre"></div>

        <div class="form-group">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <label>Categoría &nbsp;<span id="add-cat-label" style="color:#00AEEF; font-size:13px;"></span></label>
            <button type="button" class="btn-ir-categorias" style="background:transparent; border:none; color:#6f42c1; font-size:12px; font-weight:bold; cursor:pointer; padding:2px 6px;"><span class="material-symbols-outlined" style="font-size:15px;">category</span> Gestionar categorías</button>
          </div>
          <input type="hidden" id="add-categoria">
          <div class="cat-picker">${catBtnsHtml}</div>
        </div>

        <div class="form-group"><label for="add-precio">Precio (C$)</label><input type="number" id="add-precio" min="0"></div>
        <div class="form-group"><label for="add-descripcion">Descripción</label><input type="text" id="add-descripcion"></div>

        <div class="form-group">
          <label for="add-imagen">Imagen — URL o link de Google Drive</label>
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
    actualizarScrollBody();

    formOverlay.querySelector(".btn-ir-categorias").onclick = () => {
      cerrarModalElemento(formOverlay);
      abrirEditorCategorias();
    };

    formOverlay.querySelectorAll(".cat-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        formOverlay.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("cat-btn-active"));
        btn.classList.add("cat-btn-active");
        document.getElementById("add-categoria").value = btn.dataset.cat;
        document.getElementById("add-cat-label").textContent = "✓ " + btn.dataset.cat;
      });
    });

    formOverlay.querySelector(".btn-confirm-add").onclick = async () => {
      const pNombre = document.getElementById("add-nombre").value.trim();
      const pCat = document.getElementById("add-categoria").value.trim();
      const pPrecio = document.getElementById("add-precio").value.trim();
      const pDesc = document.getElementById("add-descripcion").value.trim();
      const pImagen = procesarUrlImagen(document.getElementById("add-imagen").value.trim());

      if (!pNombre || !pCat || !pPrecio || !pDesc) return alert("Completa todos los campos obligatorios.");

      const btnGuardar = formOverlay.querySelector(".btn-confirm-add");
      btnGuardar.textContent = "Guardando...";
      btnGuardar.disabled = true;

      try {
        await enviarPostAdmin({
          action: "add",
          nombre: pNombre,
          categoria: pCat,
          precio: parseFloat(pPrecio),
          descripcion: pDesc,
          imagen: pImagen || "img/generico.png"
        });
        invalidarCacheProductos();
        alert("Producto agregado exitosamente.");
        cerrarModalElemento(formOverlay);
        await cargarProductos(true);
        if (document.getElementById("catalogo-container").style.display === "block") cargarCatalogo();
      } catch (e) {
        alert("Error guardando en Sheets: " + e.message);
        btnGuardar.textContent = "Agregar";
        btnGuardar.disabled = false;
      }
    };

    formOverlay.querySelector(".btn-cancel-add").onclick = () => cerrarModalElemento(formOverlay);
  };
}

if (btnEliminar) {
  btnEliminar.onclick = async () => {
    const productos = await obtenerProductos(true);
    const categorias = await obtenerCategorias();

    const formOverlay = document.createElement("div");
    formOverlay.className = "producto-overlay";

    const prodConIndex = productos.map((p, i) => Object.assign({}, p, { _oIdx: i }));
    prodConIndex.sort((a, b) => {
      if (a.categoria === b.categoria) return String(a.nombre).localeCompare(String(b.nombre));
      return String(a.categoria).localeCompare(String(b.categoria));
    });

    const catOptionsHtml = categorias.map(c =>
      `<option value="${escapeHtml(c.nombre)}">${escapeHtml(c.nombre)}</option>`
    ).join("");

    formOverlay.innerHTML = `
      <div class="producto-detalle-profesional" style="max-width: 550px; flex-direction: column; gap: 12px; text-align: left; padding: 28px;">
        <h2 style="color: #dc3545; text-align: center; margin-bottom: 0; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">delete</span> Eliminar Producto</h2>
        
        <div style="display:flex; gap:8px; width:100%; flex-wrap:wrap;">
          <input type="text" id="buscar-borrar-prod" placeholder="🔍 Buscar producto por nombre o categoría..." style="flex:1; min-width:180px; padding:9px 12px; border:1px solid #ccc; border-radius:8px; font-size:14px; outline:none;">
          <select id="filtro-cat-borrar" style="padding:9px 10px; border:1px solid #ccc; border-radius:8px; font-size:14px; outline:none; max-width:180px;">
            <option value="">Todas las categorías</option>
            ${catOptionsHtml}
          </select>
        </div>
        <small id="contador-borrar-prod" style="color:#666; font-size:12px;"></small>

        <div class="custom-scroll-container" id="lista-borrar" style="display:flex; flex-direction:column; gap:8px; max-height: 46vh; overflow-y: auto; width:100%; border: 1px solid #eee; border-radius: 8px; padding: 10px; box-sizing:border-box;"></div>
        <button class="btn-cancel-del volver-btn" style="margin-top:5px; width:100%;">Cerrar</button>
      </div>
    `;
    document.body.appendChild(formOverlay);
    actualizarScrollBody();

    const listaContenedor = formOverlay.querySelector("#lista-borrar");
    const inputBuscar = formOverlay.querySelector("#buscar-borrar-prod");
    const selectCat = formOverlay.querySelector("#filtro-cat-borrar");
    const contador = formOverlay.querySelector("#contador-borrar-prod");

    function renderizarListaBorrar() {
      const q = normalizarTexto(inputBuscar.value.trim());
      const catSel = selectCat.value;

      const filtrados = prodConIndex.filter(p => {
        if (catSel && p.categoria !== catSel) return false;
        if (!q) return true;
        return (
          normalizarTexto(p.nombre).includes(q) ||
          normalizarTexto(p.categoria).includes(q) ||
          normalizarTexto(p.descripcion).includes(q)
        );
      });

      contador.textContent = `Mostrando ${filtrados.length} de ${prodConIndex.length} productos`;

      if (filtrados.length === 0) {
        listaContenedor.innerHTML = `<p style="text-align:center; color:#888; padding:15px 0; margin:0;">No se encontraron productos con ese criterio.</p>`;
        return;
      }

      listaContenedor.innerHTML = filtrados.map(p => `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; border-bottom:1px solid #eaeaea; padding:10px 12px; background: #fdfdfd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
          <img src="${escapeHtml(p.imagen || 'img/generico.png')}" alt="" style="width:40px; height:40px; border-radius:6px; object-fit:cover; flex-shrink:0; border:1px solid #eee;">
          <span style="color:#333; flex:1; min-width:0;">
            <small style="color:#888;">${escapeHtml(p.categoria)}</small><br>
            <strong>${escapeHtml(p.nombre)}</strong><br>
            <small style="color:#00AEEF; font-weight:bold;">C$${escapeHtml(p.precio)}</small>
          </span>
          <button onclick="borrarProd(${p._oIdx})" title="Eliminar producto" style="background:#dc3545; color:white; border:none; border-radius:6px; cursor:pointer; padding:8px 12px; transition:0.3s; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><span class="material-symbols-outlined" style="font-size:18px;">delete</span></button>
        </div>
      `).join("");
    }

    inputBuscar.addEventListener("input", renderizarListaBorrar);
    selectCat.addEventListener("change", renderizarListaBorrar);
    renderizarListaBorrar();
    inputBuscar.focus();

    window.borrarProd = async (idx) => {
      const borrado = productos[idx];
      if (!borrado) return;
      if (!confirm(`¿Seguro que deseas borrar "${borrado.nombre}" permanentemente?`)) return;

      try {
        await enviarPostAdmin({ action: "delete", nombre: borrado.nombre });
        invalidarCacheProductos();
        alert("Producto eliminado correctamente.");
        cerrarModalElemento(formOverlay);
        await cargarProductos(true);
        if (document.getElementById("catalogo-container").style.display === "block") cargarCatalogo();
        btnEliminar.click();
      } catch (e) {
        alert("Error al borrar en Sheets: " + e.message);
      }
    };

    formOverlay.querySelector(".btn-cancel-del").onclick = () => cerrarModalElemento(formOverlay);
  };
}

/* -------------------- GESTIÓN DE CATEGORÍAS (AGREGAR, EDITAR, ELIMINAR) -------------------- */
async function abrirEditorCategorias() {
  const categorias = await obtenerCategorias(true);
  const productos = await obtenerProductos();

  const formOverlay = document.createElement("div");
  formOverlay.className = "producto-overlay";

  formOverlay.innerHTML = `
    <div class="producto-detalle-profesional" style="max-width: 550px; flex-direction: column; gap: 14px; text-align: left; padding: 28px;">
      <h2 style="color: #6f42c1; text-align: center; margin-bottom: 0; width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px;">
        <span class="material-symbols-outlined">category</span> Gestionar Categorías
      </h2>
      <button class="btn-agregar-cat producto-btn" style="background:#28a745; width:100%; display:flex; align-items:center; justify-content:center; gap:5px; padding:12px;">
        <span class="material-symbols-outlined">add</span> Agregar Nueva Categoría
      </button>
      <input type="text" id="buscar-cat-admin" placeholder="🔍 Buscar categoría..." style="width:100%; box-sizing:border-box; padding:9px 12px; border:1px solid #ccc; border-radius:8px; font-size:14px; outline:none;">
      <div class="custom-scroll-container" id="lista-categorias-admin" style="display:flex; flex-direction:column; gap:8px; max-height: 44vh; overflow-y: auto; width:100%; border: 1px solid #eee; border-radius: 8px; padding: 10px; box-sizing:border-box;"></div>
      <button class="btn-cerrar-cats volver-btn" style="margin-top:5px; width:100%;">Cerrar</button>
    </div>
  `;
  document.body.appendChild(formOverlay);
  actualizarScrollBody();

  const listaCats = formOverlay.querySelector("#lista-categorias-admin");
  const inputBuscarCat = formOverlay.querySelector("#buscar-cat-admin");

  function renderizarCategoriasAdmin() {
    const q = normalizarTexto(inputBuscarCat.value.trim());
    const filtradas = categorias
      .map((c, idx) => ({ nombre: c.nombre, imagen: c.imagen, idx }))
      .filter(c => !q || normalizarTexto(c.nombre).includes(q));

    if (filtradas.length === 0) {
      listaCats.innerHTML = `<p style="text-align:center; color:#888; margin:0; padding:15px 0;">No se encontraron categorías.</p>`;
      return;
    }

    listaCats.innerHTML = filtradas.map(c => {
      const totalProds = productos.filter(p => p.categoria === c.nombre).length;
      const imgSrc = c.imagen || IMAGENES_CATEGORIAS[c.nombre] || "img/generico.png";
      return `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; border-bottom:1px solid #eaeaea; padding:10px 12px; background: #fdfdfd; border-radius: 8px;">
          <img src="${escapeHtml(imgSrc)}" alt="" style="width:40px; height:40px; border-radius:6px; object-fit:cover; flex-shrink:0; border:1px solid #eee;">
          <span style="color:#333; flex:1; min-width:0;">
            <strong>${escapeHtml(c.nombre)}</strong><br>
            <small style="color:#888;">${totalProds} producto${totalProds === 1 ? "" : "s"}</small>
          </span>
          <div style="display:flex; gap:5px; flex-shrink:0;">
            <button onclick="editarCategoriaAdmin(${c.idx})" title="Editar categoría" style="background:#ffc107; color:black; border:none; border-radius:6px; cursor:pointer; padding:7px 10px;"><span class="material-symbols-outlined" style="font-size:18px;">edit</span></button>
            <button onclick="borrarCategoriaAdmin(${c.idx})" title="Eliminar categoría" style="background:#dc3545; color:white; border:none; border-radius:6px; cursor:pointer; padding:7px 10px;"><span class="material-symbols-outlined" style="font-size:18px;">delete</span></button>
          </div>
        </div>
      `;
    }).join("");
  }

  inputBuscarCat.addEventListener("input", renderizarCategoriasAdmin);
  renderizarCategoriasAdmin();

  window.editarCategoriaAdmin = (idx) => {
    cerrarModalElemento(formOverlay);
    abrirFormularioCategoria(idx, categorias[idx]);
  };

  window.borrarCategoriaAdmin = async (idx) => {
    const cat = categorias[idx];
    if (!cat) return;
    const prodsAsociados = productos.filter(p => p.categoria === cat.nombre).length;
    const avisoExtra = prodsAsociados > 0
      ? `\n\nNota: Actualmente hay ${prodsAsociados} producto(s) asignados a "${cat.nombre}".`
      : "";
    if (!confirm(`¿Seguro que deseas eliminar la categoría "${cat.nombre}"?${avisoExtra}`)) return;

    categorias.splice(idx, 1);
    await guardarCategorias(categorias);
    await cargarCategorias();
    cerrarModalElemento(formOverlay);
    abrirEditorCategorias();
  };

  formOverlay.querySelector(".btn-agregar-cat").onclick = () => {
    cerrarModalElemento(formOverlay);
    abrirFormularioCategoria(-1, null);
  };

  formOverlay.querySelector(".btn-cerrar-cats").onclick = () => cerrarModalElemento(formOverlay);
}

async function abrirFormularioCategoria(idx, catActual) {
  const categorias = await obtenerCategorias();
  const esEdicion = idx >= 0;
  const cat = catActual || { nombre: "", imagen: "" };
  const imgValor = (cat.imagen && cat.imagen !== "img/generico.png") ? cat.imagen : "";

  const formOverlay = document.createElement("div");
  formOverlay.className = "producto-overlay";
  formOverlay.innerHTML = `
    <div class="producto-detalle-profesional" style="max-width: 440px; flex-direction: column; gap: 15px; text-align: left; padding: 30px;">
      <h2 style="color: #6f42c1; text-align: center; margin-bottom: 5px; width: 100%; display:flex; align-items:center; justify-content:center; gap:6px;">
        <span class="material-symbols-outlined">${esEdicion ? "edit" : "add"}</span> ${esEdicion ? "Editar" : "Agregar"} Categoría
      </h2>
      
      <div class="form-group">
        <label for="fc-nombre">Nombre de la categoría</label>
        <input type="text" id="fc-nombre" value="${escapeHtml(cat.nombre)}" placeholder="Ej. Parlantes Bluetooth">
      </div>

      <div class="form-group">
        <label for="fc-imagen">Imagen de portada (URL o link de Google Drive)</label>
        <input type="text" id="fc-imagen" value="${escapeHtml(imgValor)}" placeholder="https://... o ruta img/...">
        <small style="color:#888;">Opcional. Los links de Google Drive se convierten automáticamente.</small>
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 15px; width: 100%; gap:10px;">
        <button class="btn-cancel-cat volver-btn" style="margin-top: 0;">Cancelar</button>
        <button class="btn-save-cat producto-btn" style="margin-top: 0; margin-left: auto; background: #6f42c1;">Guardar</button>
      </div>
    </div>
  `;
  document.body.appendChild(formOverlay);
  actualizarScrollBody();

  formOverlay.querySelector(".btn-cancel-cat").onclick = () => {
    cerrarModalElemento(formOverlay);
    abrirEditorCategorias();
  };

  formOverlay.querySelector(".btn-save-cat").onclick = async () => {
    const nuevoNombre = document.getElementById("fc-nombre").value.trim();
    const nuevaImgRaw = document.getElementById("fc-imagen").value.trim();
    const nuevaImagen = nuevaImgRaw ? procesarUrlImagen(nuevaImgRaw) : (cat.imagen || "img/generico.png");

    if (!nuevoNombre) return alert("El nombre de la categoría es obligatorio.");

    const duplicada = categorias.some((c, i) =>
      i !== idx && normalizarTexto(c.nombre) === normalizarTexto(nuevoNombre)
    );
    if (duplicada) return alert("Ya existe una categoría con ese nombre.");

    const btnSave = formOverlay.querySelector(".btn-save-cat");
    btnSave.textContent = "Guardando...";
    btnSave.disabled = true;

    const oldNombre = esEdicion ? cat.nombre : null;

    if (esEdicion) {
      categorias[idx] = { nombre: nuevoNombre, imagen: nuevaImagen };
    } else {
      categorias.push({ nombre: nuevoNombre, imagen: nuevaImagen });
    }

    await guardarCategorias(categorias);

    // Si se renombró la categoría, actualizar también los productos en Google Sheets que tenían el nombre anterior
    if (esEdicion && oldNombre && oldNombre !== nuevoNombre) {
      try {
        const productos = await obtenerProductos();
        const afectados = productos.filter(p => p.categoria === oldNombre);
        if (afectados.length > 0) {
          btnSave.textContent = `Actualizando ${afectados.length} producto(s)...`;
          for (const prod of afectados) {
            await enviarPostAdmin({
              action: "edit",
              old_nombre: prod.nombre,
              nombre: prod.nombre,
              categoria: nuevoNombre,
              precio: parseFloat(prod.precio),
              descripcion: prod.descripcion,
              imagen: prod.imagen || "img/generico.png"
            });
          }
          invalidarCacheProductos();
          await cargarProductos(true);
          if (document.getElementById("catalogo-container").style.display === "block") cargarCatalogo();
        }
      } catch (e) {
        console.warn("Error actualizando productos de la categoría renombrada:", e);
      }
    }

    await cargarCategorias();
    cerrarModalElemento(formOverlay);
    abrirEditorCategorias();
  };
}

/* -------------------- EDITAR GENERAL Y CONFIGURACIONES -------------------- */
if (btnEditarData) {
  btnEditarData.onclick = () => abrirMenuEditarDatos();
}

async function abrirMenuEditarDatos() {
  const formOverlay = document.createElement("div");
  formOverlay.className = "producto-overlay";
  formOverlay.innerHTML = `
    <div class="producto-detalle-profesional" style="max-width: 450px; flex-direction: column; gap: 15px; text-align: center; padding: 30px;">
      <h2 style="color: #17a2b8; margin-bottom: 10px; display:flex; align-items:center; justify-content:center; gap:8px;"><span class="material-symbols-outlined">settings</span> Editar Configuraciones</h2>
      <p style="color: #555; margin-bottom: 15px;">¿Qué apartado deseas modificar?</p>
      
      <button class="btn-menu-cats producto-btn" style="background: #6f42c1; display:flex; align-items:center; justify-content:center; gap:8px;"><span class="material-symbols-outlined">category</span> Categorías de Productos</button>
      <button class="btn-menu-info producto-btn" style="background: #17a2b8; display:flex; align-items:center; justify-content:center; gap:8px;"><span class="material-symbols-outlined">storefront</span> Información del Negocio</button>
      <button class="btn-menu-faqs producto-btn" style="background: #007bff; display:flex; align-items:center; justify-content:center; gap:8px;"><span class="material-symbols-outlined">quiz</span> Preguntas Frecuentes</button>
      <button class="btn-menu-redes producto-btn" style="background: #e83e8c; display:flex; align-items:center; justify-content:center; gap:8px;"><span class="material-symbols-outlined">share</span> Redes Sociales (Footer)</button>
      
      <button class="btn-cancel-menu volver-btn" style="margin-top: 15px; width:100%;">Cerrar</button>
    </div>
  `;
  document.body.appendChild(formOverlay);
  actualizarScrollBody();

  formOverlay.querySelector(".btn-cancel-menu").onclick = () => cerrarModalElemento(formOverlay);
  formOverlay.querySelector(".btn-menu-cats").onclick = () => { cerrarModalElemento(formOverlay); abrirEditorCategorias(); };
  formOverlay.querySelector(".btn-menu-info").onclick = () => { cerrarModalElemento(formOverlay); abrirEditorInfo(); };
  formOverlay.querySelector(".btn-menu-redes").onclick = () => { cerrarModalElemento(formOverlay); abrirEditorRedes(); };
  formOverlay.querySelector(".btn-menu-faqs").onclick = () => { cerrarModalElemento(formOverlay); abrirEditorFAQs(); };
}

async function abrirEditorInfo() {
  const datos = await obtenerDatosGenerales();
  const formOverlay = document.createElement("div");
  formOverlay.className = "producto-overlay";
  formOverlay.innerHTML = `
    <div class="producto-detalle-profesional" style="max-width: 450px; flex-direction: column; gap: 15px; text-align: left; padding: 30px;">
      <h2 style="color: #17a2b8; text-align: center; margin-bottom: 5px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">storefront</span> Información del Negocio</h2>
      
      <div class="form-group"><label for="edit-nombre">Nombre del Negocio</label><input type="text" id="edit-nombre" value="${escapeHtml(datos.nombre)}"></div>
      <div class="form-group"><label for="edit-ubicacion">Ubicación</label><input type="text" id="edit-ubicacion" value="${escapeHtml(datos.ubicacion)}"></div>
      <div class="form-group"><label for="edit-wa">WhatsApp Pedidos (solo números)</label><input type="text" id="edit-wa" value="${escapeHtml(datos.whatsapp)}"></div>
      <small style="color:#888; font-size:12px;">Nota: Las URLs de redes sociales ahora se gestionan en su propia sección.</small>

      <div style="display: flex; justify-content: space-between; margin-top: 15px; width: 100%;">
        <button class="btn-regresar volver-btn" style="margin-top: 0;">Volver</button>
        <button class="btn-confirm-edit-data producto-btn" style="margin-top: 0; margin-left: auto; background: #17a2b8;">Guardar</button>
      </div>
    </div>
  `;
  document.body.appendChild(formOverlay);
  actualizarScrollBody();

  formOverlay.querySelector(".btn-regresar").onclick = () => { cerrarModalElemento(formOverlay); abrirMenuEditarDatos(); };

  formOverlay.querySelector(".btn-confirm-edit-data").onclick = async () => {
    const pNombre = document.getElementById("edit-nombre").value.trim();
    const pUbi = document.getElementById("edit-ubicacion").value.trim();
    const pWa = document.getElementById("edit-wa").value.trim();

    if (!pNombre || !pUbi || !pWa) return alert("Completa todos los campos.");

    const nuevosDatos = Object.assign({}, datos, {
      nombre: pNombre,
      ubicacion: pUbi,
      whatsapp: pWa
    });
    localStorage.setItem("tech_datos", JSON.stringify(nuevosDatos));
    try {
      await enviarPostAdmin({ action: "save_config", key: "datos", value: nuevosDatos });
    } catch (e) {}
    alert("Datos actualizados correctamente.");
    cerrarModalElemento(formOverlay);
    aplicarDatosGenerales();
    abrirMenuEditarDatos();
  };
}

async function abrirEditorRedes() {
  const redes = await obtenerRedes();
  const formOverlay = document.createElement("div");
  formOverlay.className = "producto-overlay";

  const htmlList = redes.map((r, i) => `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eaeaea; padding:12px 15px; background: #fdfdfd; border-radius: 8px; margin-bottom: 8px;">
      <span style="color:#333; display:flex; align-items:center; gap:8px;">
        <span class="material-symbols-outlined" style="color:#e83e8c;">${escapeHtml(r.icono)}</span>
        <span style="flex:1;"><strong>${escapeHtml(r.nombre)}</strong><br><small style="color:#888; word-break:break-all;">${escapeHtml(r.url)}</small></span>
      </span>
      <div style="display:flex; gap:5px; flex-shrink:0;">
        <button onclick="editarRed(${i})" style="background:#ffc107; color:black; border:none; border-radius:6px; cursor:pointer; padding:6px 10px;"><span class="material-symbols-outlined" style="font-size:18px;">edit</span></button>
        <button onclick="borrarRed(${i})" style="background:#dc3545; color:white; border:none; border-radius:6px; cursor:pointer; padding:6px 10px;"><span class="material-symbols-outlined" style="font-size:18px;">delete</span></button>
      </div>
    </div>
  `).join("");

  formOverlay.innerHTML = `
    <div class="producto-detalle-profesional" style="max-width: 500px; flex-direction: column; gap: 15px; text-align: left; padding: 30px;">
      <h2 style="color: #e83e8c; text-align: center; margin-bottom: 0; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">share</span> Redes Sociales</h2>
      <button class="btn-agregar-red producto-btn" style="background:#28a745; width:100%; display:flex; align-items:center; justify-content:center; gap:5px;"><span class="material-symbols-outlined">add</span> Agregar Red Social</button>
      <div class="custom-scroll-container" style="display:flex; flex-direction:column; gap:8px; max-height: 40vh; overflow-y: auto; padding-right: 10px; border: 1px solid #eee; border-radius: 8px; padding: 10px;">${htmlList || '<p style="text-align:center; color:#888;">No hay redes configuradas</p>'}</div>
      <button class="btn-regresar volver-btn" style="margin-top:10px; width:100%;">Volver</button>
    </div>
  `;
  document.body.appendChild(formOverlay);
  actualizarScrollBody();

  window.borrarRed = async (idx) => {
    if (!confirm("¿Eliminar esta red social?")) return;
    redes.splice(idx, 1);
    localStorage.setItem("tech_redes", JSON.stringify(redes));
    try {
      await enviarPostAdmin({ action: "save_config", key: "redes", value: redes });
    } catch (e) {}
    cargarRedes();
    cerrarModalElemento(formOverlay);
    abrirEditorRedes();
  };

  window.editarRed = (idx) => {
    cerrarModalElemento(formOverlay);
    abrirFormularioRed(idx, redes[idx]);
  };

  formOverlay.querySelector(".btn-agregar-red").onclick = () => {
    cerrarModalElemento(formOverlay);
    abrirFormularioRed(-1, null);
  };

  formOverlay.querySelector(".btn-regresar").onclick = () => { cerrarModalElemento(formOverlay); abrirMenuEditarDatos(); };
}

async function abrirFormularioRed(idx, redActual) {
  const redes = await obtenerRedes();
  const esEdicion = idx >= 0;
  const red = redActual || { nombre: "", url: "", icono: "link" };

  const formOverlay = document.createElement("div");
  formOverlay.className = "producto-overlay";
  formOverlay.innerHTML = `
    <div class="producto-detalle-profesional" style="max-width: 400px; flex-direction: column; gap: 15px; text-align: left; padding: 30px;">
      <h2 style="color: #e83e8c; text-align: center; margin-bottom: 5px; width: 100%;"><span class="material-symbols-outlined">${esEdicion ? 'edit' : 'add'}</span> ${esEdicion ? 'Editar' : 'Agregar'} Red</h2>
      
      <div class="form-group"><label for="fr-nombre">Nombre (ej. TikTok, YouTube)</label><input type="text" id="fr-nombre" value="${escapeHtml(red.nombre)}"></div>
      <div class="form-group"><label for="fr-url">Enlace (URL)</label><input type="text" id="fr-url" value="${escapeHtml(red.url)}"></div>
      <div class="form-group">
        <label for="fr-icono">Ícono (Material Symbols)</label>
        <input type="text" id="fr-icono" value="${escapeHtml(red.icono)}" placeholder="ej: public, smart_display, video_library">
        <small style="color:#888;">Busca íconos en Google Fonts y escribe su código de icono (ej: public).</small>
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 15px; width: 100%;">
        <button class="btn-cancel volver-btn" style="margin-top: 0;">Cancelar</button>
        <button class="btn-save producto-btn" style="margin-top: 0; margin-left: auto; background: #e83e8c;">Guardar</button>
      </div>
    </div>
  `;
  document.body.appendChild(formOverlay);
  actualizarScrollBody();

  formOverlay.querySelector(".btn-cancel").onclick = () => { cerrarModalElemento(formOverlay); abrirEditorRedes(); };
  formOverlay.querySelector(".btn-save").onclick = async () => {
    const nombre = document.getElementById("fr-nombre").value.trim();
    const url = document.getElementById("fr-url").value.trim();
    const icono = document.getElementById("fr-icono").value.trim() || "link";

    if (!nombre || !url) return alert("Nombre y URL son obligatorios.");

    if (esEdicion) {
      redes[idx] = { nombre, url, icono };
    } else {
      redes.push({ nombre, url, icono });
    }

    localStorage.setItem("tech_redes", JSON.stringify(redes));
    try {
      await enviarPostAdmin({ action: "save_config", key: "redes", value: redes });
    } catch (e) {}
    cargarRedes();
    cerrarModalElemento(formOverlay);
    abrirEditorRedes();
  };
}

async function abrirEditorFAQs() {
  const faqs = await obtenerFAQs();
  const formOverlay = document.createElement("div");
  formOverlay.className = "producto-overlay";

  const htmlList = faqs.map((f, i) => `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eaeaea; padding:12px 15px; background: #fdfdfd; border-radius: 8px; margin-bottom: 8px;">
      <span style="color:#333; flex:1; padding-right:10px;">
        <strong>${escapeHtml(f.pregunta)}</strong><br>
        <small style="color:#555;">${escapeHtml(f.respuesta)}</small>
      </span>
      <div style="display:flex; gap:5px; flex-shrink:0;">
        <button onclick="editarFaq(${i})" style="background:#ffc107; color:black; border:none; border-radius:6px; cursor:pointer; padding:6px 10px;"><span class="material-symbols-outlined" style="font-size:18px;">edit</span></button>
        <button onclick="borrarFaq(${i})" style="background:#dc3545; color:white; border:none; border-radius:6px; cursor:pointer; padding:6px 10px;"><span class="material-symbols-outlined" style="font-size:18px;">delete</span></button>
      </div>
    </div>
  `).join("");

  formOverlay.innerHTML = `
    <div class="producto-detalle-profesional" style="max-width: 600px; flex-direction: column; gap: 15px; text-align: left; padding: 30px;">
      <h2 style="color: #007bff; text-align: center; margin-bottom: 0; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">quiz</span> Preguntas Frecuentes</h2>
      <button class="btn-agregar-faq producto-btn" style="background:#28a745; width:100%; display:flex; align-items:center; justify-content:center; gap:5px;"><span class="material-symbols-outlined">add</span> Agregar FAQ</button>
      <div class="custom-scroll-container" style="display:flex; flex-direction:column; gap:8px; max-height: 40vh; overflow-y: auto; padding-right: 10px; border: 1px solid #eee; border-radius: 8px; padding: 10px;">${htmlList || '<p style="text-align:center; color:#888;">No hay preguntas configuradas</p>'}</div>
      <button class="btn-regresar volver-btn" style="margin-top:10px; width:100%;">Volver</button>
    </div>
  `;
  document.body.appendChild(formOverlay);
  actualizarScrollBody();

  window.borrarFaq = async (idx) => {
    if (!confirm("¿Eliminar esta FAQ?")) return;
    faqs.splice(idx, 1);
    localStorage.setItem("tech_faqs", JSON.stringify(faqs));
    try {
      await enviarPostAdmin({ action: "save_config", key: "faqs", value: faqs });
    } catch (e) {}
    cargarFAQs();
    cerrarModalElemento(formOverlay);
    abrirEditorFAQs();
  };

  window.editarFaq = (idx) => {
    cerrarModalElemento(formOverlay);
    abrirFormularioFaq(idx, faqs[idx]);
  };

  formOverlay.querySelector(".btn-agregar-faq").onclick = () => {
    cerrarModalElemento(formOverlay);
    abrirFormularioFaq(-1, null);
  };

  formOverlay.querySelector(".btn-regresar").onclick = () => { cerrarModalElemento(formOverlay); abrirMenuEditarDatos(); };
}

async function abrirFormularioFaq(idx, faqActual) {
  const faqs = await obtenerFAQs();
  const esEdicion = idx >= 0;
  const faq = faqActual || { pregunta: "", respuesta: "" };

  const formOverlay = document.createElement("div");
  formOverlay.className = "producto-overlay";
  formOverlay.innerHTML = `
    <div class="producto-detalle-profesional" style="max-width: 500px; flex-direction: column; gap: 15px; text-align: left; padding: 30px;">
      <h2 style="color: #007bff; text-align: center; margin-bottom: 5px; width: 100%;"><span class="material-symbols-outlined">${esEdicion ? 'edit' : 'add'}</span> ${esEdicion ? 'Editar' : 'Agregar'} FAQ</h2>
      
      <div class="form-group"><label for="ff-pregunta">Pregunta</label><input type="text" id="ff-pregunta" value="${escapeHtml(faq.pregunta)}"></div>
      <div class="form-group">
        <label for="ff-respuesta">Respuesta</label>
        <textarea id="ff-respuesta" rows="4" style="padding:10px; border:1px solid #ccc; border-radius:8px; font-size:15px; outline:none; resize:vertical; font-family:inherit;">${escapeHtml(faq.respuesta)}</textarea>
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 15px; width: 100%;">
        <button class="btn-cancel volver-btn" style="margin-top: 0;">Cancelar</button>
        <button class="btn-save producto-btn" style="margin-top: 0; margin-left: auto; background: #007bff;">Guardar</button>
      </div>
    </div>
  `;
  document.body.appendChild(formOverlay);
  actualizarScrollBody();

  formOverlay.querySelector(".btn-cancel").onclick = () => { cerrarModalElemento(formOverlay); abrirEditorFAQs(); };
  formOverlay.querySelector(".btn-save").onclick = async () => {
    const pregunta = document.getElementById("ff-pregunta").value.trim();
    const respuesta = document.getElementById("ff-respuesta").value.trim();

    if (!pregunta || !respuesta) return alert("Ambos campos son obligatorios.");

    if (esEdicion) {
      faqs[idx] = { pregunta, respuesta };
    } else {
      faqs.push({ pregunta, respuesta });
    }

    localStorage.setItem("tech_faqs", JSON.stringify(faqs));
    try {
      await enviarPostAdmin({ action: "save_config", key: "faqs", value: faqs });
    } catch (e) {}
    cargarFAQs();
    cerrarModalElemento(formOverlay);
    abrirEditorFAQs();
  };
}

/* -------------------- EDITAR PRODUCTO (CON BUSCADOR Y FILTRO) -------------------- */
if (btnEditarProd) {
  btnEditarProd.onclick = async () => {
    const productos = await obtenerProductos(true);
    const categorias = await obtenerCategorias();

    const formOverlay = document.createElement("div");
    formOverlay.className = "producto-overlay";

    const prodConIndex = productos.map((p, i) => Object.assign({}, p, { _oIdx: i }));
    prodConIndex.sort((a, b) => {
      if (a.categoria === b.categoria) return String(a.nombre).localeCompare(String(b.nombre));
      return String(a.categoria).localeCompare(String(b.categoria));
    });

    const catOptionsHtml = categorias.map(c =>
      `<option value="${escapeHtml(c.nombre)}">${escapeHtml(c.nombre)}</option>`
    ).join("");

    formOverlay.innerHTML = `
      <div class="producto-detalle-profesional" style="max-width: 550px; flex-direction: column; gap: 12px; text-align: left; padding: 28px;">
        <h2 style="color: #ffc107; text-align: center; margin-bottom: 0; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">edit</span> Editar Producto</h2>
        
        <div style="display:flex; gap:8px; width:100%; flex-wrap:wrap;">
          <input type="text" id="buscar-editar-prod" placeholder="🔍 Buscar producto por nombre o categoría..." style="flex:1; min-width:180px; padding:9px 12px; border:1px solid #ccc; border-radius:8px; font-size:14px; outline:none;">
          <select id="filtro-cat-editar" style="padding:9px 10px; border:1px solid #ccc; border-radius:8px; font-size:14px; outline:none; max-width:180px;">
            <option value="">Todas las categorías</option>
            ${catOptionsHtml}
          </select>
        </div>
        <small id="contador-editar-prod" style="color:#666; font-size:12px;"></small>

        <div class="custom-scroll-container" id="lista-editar" style="display:flex; flex-direction:column; gap:8px; max-height: 46vh; overflow-y: auto; width:100%; border: 1px solid #eee; border-radius: 8px; padding: 10px; box-sizing:border-box;"></div>
        <button class="btn-cancel-edit volver-btn" style="margin-top:5px; width:100%;">Cerrar</button>
      </div>
    `;
    document.body.appendChild(formOverlay);
    actualizarScrollBody();

    const listaContenedor = formOverlay.querySelector("#lista-editar");
    const inputBuscar = formOverlay.querySelector("#buscar-editar-prod");
    const selectCat = formOverlay.querySelector("#filtro-cat-editar");
    const contador = formOverlay.querySelector("#contador-editar-prod");

    function renderizarListaEditar() {
      const q = normalizarTexto(inputBuscar.value.trim());
      const catSel = selectCat.value;

      const filtrados = prodConIndex.filter(p => {
        if (catSel && p.categoria !== catSel) return false;
        if (!q) return true;
        return (
          normalizarTexto(p.nombre).includes(q) ||
          normalizarTexto(p.categoria).includes(q) ||
          normalizarTexto(p.descripcion).includes(q)
        );
      });

      contador.textContent = `Mostrando ${filtrados.length} de ${prodConIndex.length} productos`;

      if (filtrados.length === 0) {
        listaContenedor.innerHTML = `<p style="text-align:center; color:#888; padding:15px 0; margin:0;">No se encontraron productos con ese criterio.</p>`;
        return;
      }

      listaContenedor.innerHTML = filtrados.map(p => `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; border-bottom:1px solid #eaeaea; padding:10px 12px; background: #fdfdfd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
          <img src="${escapeHtml(p.imagen || 'img/generico.png')}" alt="" style="width:40px; height:40px; border-radius:6px; object-fit:cover; flex-shrink:0; border:1px solid #eee;">
          <span style="color:#333; flex:1; min-width:0;">
            <small style="color:#888;">${escapeHtml(p.categoria)}</small><br>
            <strong>${escapeHtml(p.nombre)}</strong><br>
            <small style="color:#00AEEF; font-weight:bold;">C$${escapeHtml(p.precio)}</small>
          </span>
          <button onclick="editarProd(${p._oIdx})" title="Editar producto" style="background:#ffc107; color:black; border:none; border-radius:6px; cursor:pointer; padding:8px 12px; transition:0.3s; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><span class="material-symbols-outlined" style="font-size:18px;">edit</span></button>
        </div>
      `).join("");
    }

    inputBuscar.addEventListener("input", renderizarListaEditar);
    selectCat.addEventListener("change", renderizarListaEditar);
    renderizarListaEditar();
    inputBuscar.focus();

    window.editarProd = async (idx) => {
      const p = productos[idx];
      if (!p) return;
      const imgActual = (p.imagen && p.imagen !== "img/generico.png") ? p.imagen : "";
      const catsActuales = await obtenerCategorias();

      const catBtnsHtmlEdi = catsActuales.map(c =>
        `<button type="button" class="cat-btn${c.nombre === p.categoria ? ' cat-btn-active' : ''}" data-cat="${escapeHtml(c.nombre)}">${escapeHtml(c.nombre)}</button>`
      ).join("");

      const formEdit = document.createElement("div");
      formEdit.className = "producto-overlay";
      formEdit.innerHTML = `
        <div class="producto-detalle-profesional" style="max-width: 500px; flex-direction: column; gap: 15px; text-align: left;">
          <h2 style="color: #ffc107; text-align: center; margin-bottom: 5px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;"><span class="material-symbols-outlined">edit</span> Editando: ${escapeHtml(p.nombre)}</h2>

          <div class="form-group"><label for="edi-nombre">Nombre</label><input type="text" id="edi-nombre" value="${escapeHtml(p.nombre)}"></div>

          <div class="form-group">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <label>Categoría &nbsp;<span id="edi-cat-label" style="color:#00AEEF; font-size:13px;">${p.categoria ? '✓ ' + escapeHtml(p.categoria) : ''}</span></label>
              <button type="button" class="btn-ir-categorias-edi" style="background:transparent; border:none; color:#6f42c1; font-size:12px; font-weight:bold; cursor:pointer; padding:2px 6px;"><span class="material-symbols-outlined" style="font-size:15px;">category</span> Gestionar categorías</button>
            </div>
            <input type="hidden" id="edi-categoria" value="${escapeHtml(p.categoria)}">
            <div class="cat-picker">${catBtnsHtmlEdi}</div>
          </div>

          <div class="form-group"><label for="edi-precio">Precio (C$)</label><input type="number" id="edi-precio" value="${escapeHtml(p.precio)}" min="0"></div>
          <div class="form-group"><label for="edi-descripcion">Descripción</label><input type="text" id="edi-descripcion" value="${escapeHtml(p.descripcion)}"></div>

          <div class="form-group">
            <label for="edi-imagen">Imagen — URL o link de Google Drive</label>
            <input type="text" id="edi-imagen" value="${escapeHtml(imgActual)}" placeholder="https://... o link de compartir de Drive">
            <small style="color:#888; margin-top:4px; display:block;">Los links de Google Drive se convierten automáticamente.</small>
          </div>

          <div style="display: flex; justify-content: space-between; margin-top: 10px; width: 100%;">
            <button class="btn-cancel-edi volver-btn" style="margin-top: 0;">Cancelar</button>
            <button class="btn-confirm-edi producto-btn" style="margin-top: 0; margin-left: auto; background: #ffc107; color: black;">Guardar Cambios</button>
          </div>
        </div>
      `;
      document.body.appendChild(formEdit);
      actualizarScrollBody();

      formEdit.querySelector(".btn-ir-categorias-edi").onclick = () => {
        cerrarModalElemento(formEdit);
        cerrarModalElemento(formOverlay);
        abrirEditorCategorias();
      };

      formEdit.querySelectorAll(".cat-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          formEdit.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("cat-btn-active"));
          btn.classList.add("cat-btn-active");
          document.getElementById("edi-categoria").value = btn.dataset.cat;
          document.getElementById("edi-cat-label").textContent = "✓ " + btn.dataset.cat;
        });
      });

      formEdit.querySelector(".btn-confirm-edi").onclick = async () => {
        const ediNombre = document.getElementById("edi-nombre").value.trim();
        const ediCat = document.getElementById("edi-categoria").value.trim();
        const ediPrecio = document.getElementById("edi-precio").value.trim();
        const ediDesc = document.getElementById("edi-descripcion").value.trim();
        const ediImagen = procesarUrlImagen(document.getElementById("edi-imagen").value.trim());

        if (!ediNombre || !ediCat || !ediPrecio || !ediDesc) return alert("Completa todos los campos.");

        const btnGuardarEdi = formEdit.querySelector(".btn-confirm-edi");
        btnGuardarEdi.textContent = "Guardando...";
        btnGuardarEdi.disabled = true;

        try {
          await enviarPostAdmin({
            action: "edit",
            old_nombre: p.nombre,
            nombre: ediNombre,
            categoria: ediCat,
            precio: parseFloat(ediPrecio),
            descripcion: ediDesc,
            imagen: ediImagen || p.imagen || "img/generico.png"
          });
          invalidarCacheProductos();
          alert("Producto modificado correctamente.");
          cerrarModalElemento(formEdit);
          cerrarModalElemento(formOverlay);
          await cargarProductos(true);
          if (document.getElementById("catalogo-container").style.display === "block") cargarCatalogo();
          btnEditarProd.click();
        } catch (e) {
          alert("Error modificando en Sheets: " + e.message);
          btnGuardarEdi.textContent = "Guardar Cambios";
          btnGuardarEdi.disabled = false;
        }
      };

      formEdit.querySelector(".btn-cancel-edi").onclick = () => cerrarModalElemento(formEdit);
    };

    formOverlay.querySelector(".btn-cancel-edit").onclick = () => cerrarModalElemento(formOverlay);
  };
}
