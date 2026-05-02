import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { taxCalendar2026 } from '../data/TaxCalendarData';
import { fadeInUp, staggerContainer, itemVariants } from '../styles/animations';
import { extractLastDigit, calculateNextDeadline, generateGoogleCalendarLink } from '../utils/taxCalculator';
import './TaxCalendar.css';

export default function TaxCalendar() {
  const [nit, setNit] = useState('');
  
  // Obtener fecha y hora actual para cálculos en tiempo real
  const now = useMemo(() => new Date(), []);
  
  const formattedToday = useMemo(() => {
    return new Intl.DateTimeFormat('es-CO', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(now);
  }, [now]);
  
  // Extraer el último dígito antes del guion de verificación
  const lastDigit = useMemo(() => extractLastDigit(nit), [nit]);

  // Función para calcular el próximo vencimiento real basado en la fecha actual
  const formatDeadline = (baseDay, isBimestral = false) => {
    const result = calculateNextDeadline(baseDay, lastDigit, now, isBimestral);
    if (!result) return null;

    const text = new Intl.DateTimeFormat('es-CO', {
      day: 'numeric',
      month: 'long',
      year: result.fullDate.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    }).format(result.fullDate);
    
    return { ...result, text };
  };

  // Mapeo de reglas de negocio para los cálculos
  // Esto idealmente vendría en TaxCalendarData.js
  const taxRules = {
    1: { baseDay: 10, isBimestral: false }, // Retención
    2: { baseDay: 12, isBimestral: true },  // IVA
    3: { baseDay: 7, isAnnual: true },      // Renta
    4: { baseDay: 15, isBimestral: false }  // ICA
  };

  return (
    <>
      <Navbar />
      <PageHero 
        label="Calendario"
        title="Calendario Tributario"
        titleAccent="2026"
        subtitle="Mantente al día con tus obligaciones legales. Consulta las fechas clave para impuestos nacionales y municipales en Colombia."
      />

      <section className="page-section">
        <div className="page-section__inner">
          
          {/* Indicador de Fecha Actual */}
          <div className="current-date-badge">
            <span className="pulse-dot"></span>
            Hoy es: <strong>{formattedToday}</strong>
          </div>

          {/* Buscador por NIT */}
          <div className="tax-search-container">
            <div className="tax-search-box">
              <h2 className="tax-search-box__title">Fechas Personalizadas</h2>
              <p className="tax-search-box__text">Ingresa tu NIT para calcular tus vencimientos exactos</p>
              <div className="tax-search-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Ej: 900123456" 
                  value={nit}
                  onChange={(e) => setNit(e.target.value)}
                  className="tax-search-input"
                />
                <span className="tax-search-icon">🔍</span>
              </div>
            </div>

            <AnimatePresence>
              {lastDigit !== null && (
                <motion.div 
                  className="tax-results-summary"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="tax-results-badge">
                    Vencimientos para NIT terminado en: <strong>{lastDigit}</strong>
                  </div>
                  <div className="tax-results-grid mt-6">
                    {taxCalendar2026.map(tax => {
                      const rule = taxRules[tax.id];
                      const deadline = rule.isAnnual 
                        ? { 
                            text: `${rule.baseDay + lastDigit} de Abril`, 
                            fullDate: new Date(2026, 3, rule.baseDay + lastDigit),
                            daysRemaining: Math.ceil((new Date(2026, 3, rule.baseDay + lastDigit) - now) / (1000 * 60 * 60 * 24))
                          }
                        : formatDeadline(rule.baseDay, rule.isBimestral);

                      return (
                        <div key={tax.id} className="result-item">
                          <div className="result-item__content">
                            <span className="result-item__label">{tax.title}</span>
                            <span className="result-item__date">{deadline?.text}</span>
                            <span className={`result-item__status ${deadline?.daysRemaining < 5 && deadline?.daysRemaining >= 0 ? 'status--warning' : ''}`}>
                              {deadline?.daysRemaining < 0 ? '❌ Vencido' : deadline?.daysRemaining < 5 ? '⏳ ¡Casi vence!' : '✅ A tiempo'}
                            </span>
                          </div>
                          {deadline?.daysRemaining >= 0 && (
                            <a href={generateGoogleCalendarLink(tax.title, deadline?.fullDate)} className="result-item__calendar-btn">📅</a>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-bold">Calendario General 2026</h3>
          </div>
          <motion.div className="calendar-grid" variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            {taxCalendar2026.map((item) => (
              <motion.div key={item.id} className="calendar-card" variants={itemVariants}>
                <span className="calendar-card__period">{item.period}</span>
                <h3 className="calendar-card__title">{item.title}</h3>
                <div className="calendar-card__dates">
                  <p className="leading-relaxed">{item.dates}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 flex justify-center gap-4">
            <Link to="/simulador-renta" className="btn btn--outline">¿Debo declarar renta? 🧮</Link>
            <Link to="/topes-tributarios" className="btn btn--outline">Ver topes y requisitos 📋</Link>
          </div>

          <motion.div 
            className="calendar-note" 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <span className="text-2xl">ℹ️</span>
            <p>
              <strong>Nota:</strong> Los vencimientos exactos dependen del último dígito del NIT. Si necesitas un cronograma personalizado para tu empresa, no dudes en contactar a uno de nuestros asesores.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}