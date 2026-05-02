export const taxCalendar2026 = [
  {
    id: 1,
    title: "Retención en la Fuente",
    period: "Mensual",
    description: "Declaración y pago de retenciones en la fuente y autorretenciones del mes anterior.",
    dates: "Entre los días 10 y 24 de cada mes, según el último dígito del NIT."
  },
  {
    id: 2,
    title: "IVA (Impuesto al Valor Agregado)",
    period: "Bimestral / Cuatrimestral",
    description: "Declaración y pago para responsables del régimen común según sus ingresos anuales.",
    dates: "Meses impares (Enero, Marzo, Mayo, Julio, Septiembre, Noviembre)."
  },
  {
    id: 3,
    title: "Impuesto de Renta (Jurídicas)",
    period: "Anual",
    description: "Declaración de renta y complementarios para sociedades y entidades legalmente constituidas.",
    dates: "Cuotas en Abril y Junio según el último dígito del NIT."
  },
  {
    id: 4,
    title: "ICA (Industria y Comercio)",
    period: "Anual / Bimestral",
    description: "Impuesto municipal sobre actividades comerciales en Medellín y área metropolitana.",
    dates: "Anual generalmente en Marzo/Abril. Bimestral para Grandes Contribuyentes."
  }
];

export const taxThresholds2026 = [
  {
    id: 'renta-pn',
    title: "Renta Personas Naturales",
    subtitle: "Año Gravable 2025",
    description: "Debes declarar si cumples al menos uno de estos topes:",
    items: [
      { label: "Patrimonio Bruto", value: "> 4.500 UVT", detail: "aprox. $211.8M" },
      { label: "Ingresos Totales", value: "> 1.400 UVT", detail: "aprox. $65.9M" },
      { label: "Consumos Tarjeta", value: "> 1.400 UVT", detail: "aprox. $65.9M" },
      { label: "Compras y Consumos", value: "> 1.400 UVT", detail: "aprox. $65.9M" },
      { label: "Consignaciones Bancarias", value: "> 1.400 UVT", detail: "aprox. $65.9M" }
    ]
  },
  {
    id: 'iva-res',
    title: "Responsables de IVA",
    subtitle: "Régimen Común",
    description: "Deben registrarse como responsables si:",
    items: [
      { label: "Ingresos Brutos", value: "> 3.500 UVT", detail: "aprox. $164.7M" },
      { label: "Contratos Vigentes", value: "> 3.500 UVT", detail: "Año anterior o curso" },
      { label: "Consignaciones", value: "> 3.500 UVT", detail: "Provenientes de actividad" }
    ]
  },
  {
    id: 'exogena',
    title: "Información Exógena",
    subtitle: "Reporte de Medios Magnéticos",
    description: "Obligados según Resolución DIAN:",
    items: [
      { label: "Personas Jurídicas", value: "Ingresos > $0", detail: "Todas las declarantes" },
      { label: "Personas Naturales", value: "Ingresos > $500M", detail: "Y rentas de capital/laboral > $100M" }
    ]
  }
];

export const regimeComparison = [
  {
    concept: "Base Gravable",
    ordinario: "Utilidad (Ingresos menos costos y gastos)",
    simple: "Ingresos Brutos (No permite descontar costos)"
  },
  {
    concept: "Tarifas",
    ordinario: "0% al 39% (Progresivo)",
    simple: "1.2% al 14.5% (Según actividad)"
  },
  {
    concept: "Impuestos Integrados",
    ordinario: "Solo Renta (IVA e ICA se pagan aparte)",
    simple: "Renta, IVA, ICA, Consumo y Aportes a Pensión"
  },
  {
    concept: "Periodicidad",
    ordinario: "Anual",
    simple: "Bimestral (Anticipos) y Anual (Consolidado)"
  },
  {
    concept: "Beneficio Principal",
    ordinario: "Deducción de gastos reales",
    simple: "Simplificación de trámites y flujo de caja"
  }
];