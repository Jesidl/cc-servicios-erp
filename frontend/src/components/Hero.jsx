import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const cardServices = [
  'Outsourcing Contable integral',
  'Asesoría Tributaria estratégica',
  'Estados Financieros y análisis',
  'Nómina y Seguridad Social',
  'Planeación Financiera',
  'Implementación de ERP',
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesCount = 3;

  // Funciones de navegación manual
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slidesCount);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  // Lógica de Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Aumentamos ligeramente el tiempo de exposición a 6s

    return () => clearInterval(interval);
  }, [activeSlide]); // Reinicia el intervalo cuando el usuario cambia manualmente

  // Configuración de la transición compartida
  const transitionProps = {
    duration: 0.9, // Más lento para mayor suavidad
    ease: [0.32, 0.72, 0, 1] // Curva de inercia tipo iOS
  };

  return (
    <section className="hero" aria-label="Inicio">
      <div className="hero__inner">

        {/* ── Columna izquierda: texto ── */}
        <div className="hero__content">
          <div className="hero__badge anim-fade-up">
            <span className="hero__badge-dot" />
            Asesoría contable virtual · Medellín y toda Colombia
          </div>

          <h1 className="hero__title anim-fade-up anim-delay-1">
            Tu firma contable de{' '}
            <span className="hero__title-accent">confianza</span>{' '}
            en Medellín
          </h1>

          <p className="hero__subtitle anim-fade-up anim-delay-2">
            Más de 15 años asesorando empresas colombianas en contabilidad,
            tributaria, nómina y ERP. Servicio presencial en Medellín y
            virtual a todo el país.
          </p>

          <div className="hero__ctas anim-fade-up anim-delay-3">
            <Link to="/contacto" className="btn btn--primary">
              Solicitar asesoría gratuita
            </Link>
            <Link to="/servicios" className="btn btn--outline">
              Ver nuestros servicios
            </Link>
          </div>

          <div className="hero__carousel-dots anim-fade-up anim-delay-4">
            {[...Array(slidesCount)].map((_, i) => (
              <button 
                key={i} 
                className={`carousel-dot ${activeSlide === i ? 'active' : ''}`}
                onClick={() => setActiveSlide(i)}
                aria-label={`Ir a diapositiva ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Columna derecha: tarjeta visual ── */}
        <div className="hero__visual">
          <AnimatePresence mode="wait">
            {activeSlide === 0 && (
              <Link to="/servicios" className="hero__card-link">
                <motion.div 
                key="portfolio"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={transitionProps}
                whileHover={{ scale: 1.02 }}
                className="hero__card"
              >
                <div>
                  <p className="hero__card-label">Portafolio de servicios</p>
                  <h2 className="hero__card-title">Soluciones contables integrales</h2>
                </div>
                <ul className="hero__service-list">
                  {cardServices.map((s, i) => (
                    <li key={i} className="hero__service-item"><span className="hero__service-check">✓</span>{s}</li>
                  ))}
                </ul>
                <div className="hero__card-footer">Explorar servicios →</div>
              </motion.div>
              </Link>
            )}

            {activeSlide === 1 && (
              <Link to="/calendario" className="hero__card-link">
                <motion.div 
                key="calendar"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={transitionProps}
                whileHover={{ scale: 1.02 }}
                className="hero__card hero__card--interactive"
              >
                <div>
                  <p className="hero__card-label">Calendario Tributario 2026</p>
                  <h2 className="hero__card-title">¡Que no se te pasen las fechas!</h2>
                </div>
                <div className="hero__card-promo-content">
                  <div className="promo-icon">📅</div>
                  <p>Consulta los vencimientos de IVA, Renta e ICA personalizados según tu último dígito del NIT.</p>
                </div>
                <div className="hero__card-divider" />
                <div className="hero__card-footer">Consultar mis fechas →</div>
              </motion.div>
              </Link>
            )}

            {activeSlide === 2 && (
              <Link to="/simulador-renta" className="hero__card-link">
                <motion.div 
                key="thresholds"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={transitionProps}
                whileHover={{ scale: 1.02 }}
                className="hero__card hero__card--accent"
              >
                <div>
                  <p className="hero__card-label">Simulador de Renta</p>
                  <h2 className="hero__card-title">¿Obligado a declarar renta?</h2>
                </div>
                <div className="hero__card-promo-content">
                  <div className="promo-icon">🧮</div>
                  <p>Descubre en segundos si cumples los topes de ingresos o patrimonio para el año gravable 2025.</p>
                </div>
                <div className="hero__card-divider" />
                <div className="hero__card-footer">Iniciar simulación gratuita →</div>
              </motion.div>
              </Link>
            )}
          </AnimatePresence>

          {/* Controles de navegación manual */}
          <div className="hero__carousel-nav">
            <button onClick={prevSlide} className="carousel-nav-btn" aria-label="Anterior">
              ‹
            </button>
            <button onClick={nextSlide} className="carousel-nav-btn" aria-label="Siguiente">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
