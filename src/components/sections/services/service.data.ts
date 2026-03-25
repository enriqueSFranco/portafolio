export interface Service {
  index: string;
  name: string;
  tagline: string;
  price: number;
  currency: "MXN" | "USD";
  period?: "mes" | "proyecto";
  delivery: {
    min?: number;
    max?: number;
    label?: string;
  };
  description: string;
  includes: string[];
  highlight: boolean;
}

export const TYPE_OF_SERVICES: Service[] = [
  {
    index: "01",
    name: "Landing Page",
    tagline: "Tu negocio en internet, listo para vender",
    price: 8000,
    currency: "MXN",
    period: "proyecto",
    delivery: { min: 7, max: 10 },
    description: "Una página clara y atractiva que presenta tu negocio y convierte visitas en clientes. Perfecta si ofreces un servicio local o quieres arrancar rápido.",
    includes: ["Diseño a medida", "Optimización Mobile-First", "SEO Local Básico"],
    highlight: false,
  },
  {
    index: "02",
    name: "Ecosistema Web",
    tagline: "Un sitio completo que trabaja por ti",
    price: 18000,
    currency: "MXN",
    period: "proyecto",
    delivery: { min: 21, max: 28 },
    description: "Sitio web de varias páginas donde tú mismo puedes editar el contenido y ver cómo crece tu negocio con datos reales. Se adapta a lo que tu negocio necesita.",
    includes: ["Todo lo de Landing", "Funcionalidad a medida", "Panel de administración", "Google Analytics"],
    highlight: true,
  },
  {
    index: "03",
    name: "Soporte & Crecimiento",
    tagline: "Tu sitio siempre activo, sin preocupaciones",
    price: 1500,
    currency: "MXN",
    period: "mes",
    delivery: { label: "Continuo" },
    description: "Me encargo de que tu sitio funcione bien mes a mes: actualizaciones, respaldos y atención directa por WhatsApp cuando lo necesites.",
    includes: ["Monitoreo 24/7", "Backups Semanales", "Soporte vía WhatsApp", "Reportes de Rendimiento"],
    highlight: false,
  },
];
