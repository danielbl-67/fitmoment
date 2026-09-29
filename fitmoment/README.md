# Fit Moment — Web & Plataforma Transaccional

Plataforma web moderna y modular orientada a la conversión directa para negocio local y servicios de salud/rendimiento deportivo: **Suplementación**, **Fisioterapia** y **Asesoramiento Nutricional y Deportivo**.

---

## Características Principales

- **Diseño Dark Mode de Alto Rendimiento:** Paleta corporativa con fondos carbón (`#0B0F12`, `#12181F`) y acentos neón en Cyan (`#00E5FF`) y Verde Lima (`#10E85D`).
- **Flujo Transaccional Integrado:**
  - Selector rápido de variantes (sabores y formatos) para suplementación deportiva.
  - Selector visual de fecha y hora orientativa para citas de fisioterapia y consultas nutricionales.
  - Confirmación directa vía **WhatsApp (+34 638676954)** con cálculo de total e indicación de abono presencial en local.
- **Acceso Rápido Flotante:** Barra inferior fija con enlaces directos a WhatsApp y ubicación física en Google Maps.
- **Cumplimiento Legal:** Modal integrado con Políticas de Privacidad (RGPD), Aviso Legal y Condiciones de Cancelación.

---

## Tecnologías Utilizadas
Framework: Angular (Standalone Components)

Lenguaje: TypeScript

Estilos: CSS3 nativo optimizado / Tailwind CSS

Iconografía y Branding: SVG vectorial responsive

Despliegue: Vercel

## Canales de Atención & Contacto
WhatsApp / Teléfono: +34 638676954

Instagram: @fitmoment.official

Modelo de transacción: Encargo/reserva web directa con confirmación instantánea y pago en el local físico.

## Estructura del Proyecto

```text
fitmoment/
├── src/
│   ├── app/
│   │   ├── app.ts                 # Lógica de componentes, catálogo, filtros y checkout
│   │   ├── app.html               # Vistas: Hero, Suplementación, Fisioterapia, Nutrición y Modales
│   │   └── app.css                # Estilos visuales del frontend
│   ├── public/
│   │   ├── favicon.svg            # Isotipo oficial e icono de pestaña en SVG vectorial
│   │   └── logo-fitmoment.svg     # Logotipo vectorial para branding
│   ├── styles.css                 # Reset global y estilos base
│   └── index.html                 # Punto de entrada HTML con metadata y favicon
├── angular.json                   # Configuración del proyecto y presupuestos de build
└── package.json                   # Dependencias y scripts