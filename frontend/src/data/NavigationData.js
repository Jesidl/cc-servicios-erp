export class NavLink {
  constructor(label, to, external = false) {
    this.label = label;
    this.to = to;
    this.external = external;
  }
}

export class FooterColumn {
  constructor(title, links) {
    this.title = title;
    this.links = links;
  }
}

// ── Navegación interna ──
export const navLinks = [
  new NavLink('Inicio',     '/'),
  new NavLink('Servicios',  '/servicios'),
  new NavLink('Nosotros',   '/sobre-nosotros'),
  new NavLink('Contacto',   '/contacto'),
  new NavLink('Calendario', '/calendario'),
  // Ecosistema
  new NavLink('Contables',  import.meta.env.VITE_CONTABLES_URL  || 'http://localhost:5174', true),
  new NavLink('Soluciones', import.meta.env.VITE_SOLUCIONES_URL || 'http://localhost:5175', true),
];

export const erpLink = new NavLink('Sistema ERP', 'https://sistema.cuentasclaraserp.com', true);

export const footerColumns = [
  new FooterColumn('Servicios ERP', [
    new NavLink('Implementación de ERP', '/servicios'),
    new NavLink('Calendario Tributario', '/calendario'),
  ]),
  new FooterColumn('Ecosistema CC', [
    new NavLink('Contables y Tributarios', import.meta.env.VITE_CONTABLES_URL  || 'http://localhost:5174', true),
    new NavLink('Soluciones Integrales',   import.meta.env.VITE_SOLUCIONES_URL || 'http://localhost:5175', true),
    new NavLink('Sistema ERP', 'https://sistema.cuentasclaraserp.com', true),
  ]),
  new FooterColumn('Empresa', [
    new NavLink('Sobre Nosotros',        '/sobre-nosotros'),
    new NavLink('Contacto',              '/contacto'),
    new NavLink('Politica de Privacidad','#'),
  ]),
];
