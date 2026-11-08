# Tech Store Nicaragua

Tienda en línea de tecnología y gadgets en Managua, Nicaragua, con catálogo dinámico sincronizado con Google Sheets y pedidos directos por WhatsApp.

## Características Principales

- **Catálogo Dinámico + Fallback Local:** Sincronización con Google Sheets mediante Google Apps Script (`doGet` / `doPost`) y respaldo automático en `localStorage` y base de datos local ([`PRODUCTOS_BD`](file:///c:/Users/a2be3/PycharmProjects/Yeltsin/tech-store-nicaragua/app.js#L17-L382)).
- **Búsqueda y Filtros Inteligentes:** Filtrado por categoría, rango de precios en Córdobas (`C$`) y búsqueda insensible a tildes en nombres, categorías y descripciones.
- **Pedidos por WhatsApp:** Agendamiento de entrega a domicilio y guía paso a paso para pago por transferencia bancaria (BAC, Banpro, Lafise, Ficohsa y Billetera Móvil).
- **Panel de Administración Protegido:** Gestión de productos (agregar, editar, eliminar y sincronizar en lote) e información general del negocio, preguntas frecuentes (FAQs) y redes sociales con validación de credenciales en el servidor de Google Apps Script.
- **SEO Local y PWA:** Datos estructurados Schema.org (`ElectronicsStore`, `WebSite`, `FAQPage`, `ItemList`), Open Graph, [`manifest.webmanifest`](file:///c:/Users/a2be3/PycharmProjects/Yeltsin/tech-store-nicaragua/manifest.webmanifest), [`sitemap.xml`](file:///c:/Users/a2be3/PycharmProjects/Yeltsin/tech-store-nicaragua/sitemap.xml) y [`robots.txt`](file:///c:/Users/a2be3/PycharmProjects/Yeltsin/tech-store-nicaragua/robots.txt).

## Estructura del Proyecto

- `index.html` — Estructura principal, metadatos SEO y marcado Schema.org.
- `styles.css` — Estilos visuales, diseño responsivo y modales.
- `app.js` — Lógica del catálogo, filtros, modales de compra y panel administrativo.
- `manifest.webmanifest` — Configuración de Progressive Web App (PWA).
- `img/` — Imágenes de productos del catálogo.
