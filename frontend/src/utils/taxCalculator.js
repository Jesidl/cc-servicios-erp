/**
 * Extrae el último dígito del NIT (asumiendo que el usuario no ingresa el DV)
 */
export const extractLastDigit = (nit) => {
  if (!nit) return null;
  const cleanNit = nit.toString().replace(/[^0-9]/g, '');
  if (cleanNit.length === 0) return null;
  return parseInt(cleanNit.slice(-1));
};

/**
 * Calcula la próxima fecha de vencimiento basada en el dígito y el tipo de impuesto
 * @param {number} baseDay - El día base del mes donde empiezan los vencimientos
 * @param {number} lastDigit - El último dígito del NIT
 * @param {Date} now - Fecha actual
 * @param {boolean} isBimestral - Si el impuesto es cada dos meses
 */
export const calculateNextDeadline = (baseDay, lastDigit, now, isBimestral = false) => {
  if (lastDigit === null) return null;

  let targetMonth = now.getMonth();
  let targetYear = now.getFullYear();
  
  // Los vencimientos suelen ser: día base + último dígito
  // Ejemplo: Base 10 + Dígito 5 = Día 15
  const deadlineDay = baseDay + lastDigit;

  // Si es bimestral y estamos en mes par, el próximo es el siguiente mes impar
  if (isBimestral && targetMonth % 2 !== 0) {
    targetMonth += 1;
  }

  let deadlineDate = new Date(targetYear, targetMonth, deadlineDay);

  // Si la fecha ya pasó este mes, calcular para el próximo periodo
  if (deadlineDate < now) {
    const increment = isBimestral ? 2 : 1;
    deadlineDate = new Date(targetYear, targetMonth + increment, deadlineDay);
  }

  const diffTime = deadlineDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return {
    fullDate: deadlineDate,
    daysRemaining: diffDays,
    passed: diffDays < 0
  };
};

/**
 * Genera un enlace para añadir el recordatorio a Google Calendar
 */
export const generateGoogleCalendarLink = (title, date) => {
  if (!date) return '#';
  
  // Formato YYYYMMDD para eventos de todo el día
  const formatDate = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, "").split('T')[0];
  const start = formatDate(date);
  const end = formatDate(new Date(date.getTime() + 24 * 60 * 60 * 1000)); // +1 día
  
  const details = `Vencimiento de obligación tributaria: ${title}. Gestionado por Cuentas Claras ERP.`;
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(details)}&sf=true&output=xml`;
};

/**
 * Formatea un valor numérico a moneda COP (Peso Colombiano)
 */
export const formatCOP = (value) => {
  if (value === null || value === undefined || value === '') return '';
  const numericValue = typeof value === 'string' ? value.replace(/\D/g, '') : value;
  if (numericValue === '') return '';
  
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(numericValue);
};