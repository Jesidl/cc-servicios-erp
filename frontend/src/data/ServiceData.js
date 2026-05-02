export class Service {
  constructor({ icon, title, description, benefits = [], details = [], value = '' }) {
    this.icon = icon;
    this.title = title;
    this.description = description;
    this.benefits = benefits;
    this.details = details;
    this.value = value;
  }
}

export class ProcessStep {
  constructor(number, title, description) {
    this.number = number;
    this.title = title;
    this.description = description;
  }
}

export class Benefit {
  constructor(icon, title, description) {
    this.icon = icon;
    this.title = title;
    this.description = description;
  }
}

export const services = [
  new Service({
    icon: 'Cpu',
    title: 'Implementación de ERP',
    description: 'Integración de sistemas tecnológicos para mayor eficiencia operativa y automatización de procesos empresariales.',
    benefits: ['Selección y configuración del ERP', 'Capacitación completa de usuarios', 'Migración de datos históricos', 'Soporte técnico continuo'],
    details: [
      'Diagnóstico y selección del mejor ERP para tu empresa',
      'Configuración según tus procesos operativos específicos',
      'Capacitación completa a todo el equipo de trabajo',
      'Acompañamiento post-implementación garantizado',
    ],
    value: 'Automatiza procesos, elimina errores manuales y mejora la toma de decisiones con datos en tiempo real',
  }),
];

export const processSteps = [
  new ProcessStep('01', 'Diagnóstico', 'Evaluamos tu infraestructura tecnológica y procesos actuales sin costo.'),
  new ProcessStep('02', 'Selección', 'Recomendamos el ERP ideal según tu industria, tamaño y presupuesto.'),
  new ProcessStep('03', 'Implementación', 'Configuramos, migramos datos y capacitamos a tu equipo paso a paso.'),
  new ProcessStep('04', 'Soporte', 'Acompañamiento continuo para garantizar el éxito de la implementación.'),
];

export const benefits = [
  new Benefit('Zap',        'Automatización Total',  'Elimina procesos manuales y reduce errores con flujos automatizados.'),
  new Benefit('BarChart2',  'Datos en Tiempo Real',  'Toma decisiones basadas en información actualizada al instante.'),
  new Benefit('ShieldCheck','Seguridad y Control',   'Controla accesos, permisos y auditorías de todos tus procesos.'),
  new Benefit('TrendingUp', 'Escalabilidad',         'Un sistema que crece con tu empresa sin límites de usuarios o módulos.'),
];
