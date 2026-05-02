import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import AnimatedNumber from '../components/AnimatedNumber';
import Footer from '../components/Footer';
import { services, benefits, processSteps } from '../data/ServiceData';
import Icon from '../utils/iconMap';
import { fadeInUp, staggerContainer, itemVariants } from '../styles/animations';
import './Home.css';

const featuredServices = services.slice(0, 3);

const trustStats = [
  { value: 500, suffix: '+', label: 'Empresas asesoradas' },
  { value: 15,  suffix: '+', label: 'Años de experiencia' },
  { value: 98,  suffix: '%', label: 'Satisfacción de clientes' },
  { value: 30,  suffix: '+', label: 'Profesionales certificados' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* ── Trust bar ── */}
        <motion.section 
          className="section-trust" 
          aria-label="Estadísticas"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="section-trust__inner"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.1 }}
          >
            {trustStats.map((s) => (
              <motion.div key={s.label} variants={itemVariants} style={{ position: 'relative' }}>
                <div className="trust-stat__number">
                  <AnimatedNumber value={s.value} />
                  {s.suffix}
                </div>
                <div className="trust-stat__label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Servicios destacados ── */}
        <motion.section 
          className="section-services" 
          aria-labelledby="services-heading"
          {...fadeInUp}
        >
          <div className="section-services__inner">
            <div className="section-header">
              <span className="section-label">Lo que ofrecemos</span>
              <h2 id="services-heading" className="section-header__title">
                Servicios contables y financieros en Medellín
              </h2>
              <p className="section-header__subtitle">
                Soluciones profesionales diseñadas para pymes y empresas en crecimiento,
                con atención presencial en Medellín y virtual a todo Colombia.
              </p>
              <div className="section-divider" />
            </div>

            <motion.div 
              className="services-grid"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
            >
              {featuredServices.map((service) => (
                <motion.div key={service.title} variants={itemVariants}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    benefits={service.benefits}
                  />
                </motion.div>
              ))}
            </motion.div>

            <div className="section-more">
              <Link to="/servicios" className="btn btn--outline">
                Ver todos los servicios →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* ── Por qué elegirnos ── */}
        <motion.section 
          className="section-why" 
          aria-labelledby="why-heading"
          {...fadeInUp}
        >
          <div className="section-why__inner">
            <div className="section-header">
              <span className="section-label">Nuestra diferencia</span>
              <h2 id="why-heading" className="section-header__title">
                ¿Por qué elegir Cuentas Claras?
              </h2>
              <p className="section-header__subtitle">
                Más que un servicio contable, somos tu socio estratégico para tomar
                decisiones basadas en información real.
              </p>
              <div className="section-divider" />
            </div>
            <motion.div 
              className="why-grid"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
            >
              {benefits.map((b) => (
                <motion.div key={b.title} className="why-card" variants={itemVariants} whileHover={{ y: -5 }}>
                  <div className="why-card__icon"><Icon name={b.icon} size={24} strokeWidth={1.5} /></div>
                  <div>
                    <h3 className="why-card__title">{b.title}</h3>
                    <p className="why-card__description">{b.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ── Proceso ── */}
        <motion.section 
          className="section-process" 
          aria-labelledby="process-heading"
          {...fadeInUp}
        >
          <div className="section-process__inner">
            <div className="section-header">
              <span className="section-label">Cómo trabajamos</span>
              <h2 id="process-heading" className="section-header__title">
                Nuestro proceso de trabajo
              </h2>
              <p className="section-header__subtitle">
                Metodología clara, transparente y orientada a resultados desde el primer día.
              </p>
              <div className="section-divider" />
            </div>
            <motion.div 
              className="process-grid"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
            >
              {processSteps.map((step) => (
                <motion.div key={step.number} className="process-step" variants={itemVariants}>
                  <div className="process-step__number">{step.number}</div>
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__description">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ── CTA ── */}
        <motion.section 
          className="section-cta" 
          aria-labelledby="cta-heading"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-cta__pattern" aria-hidden="true" />
          <div className="section-cta__inner">
            <p className="section-cta__label">Atención virtual y presencial</p>
            <h2 id="cta-heading" className="section-cta__title">
              ¿Buscas asesoría contable en Medellín o Colombia?
            </h2>
            <p className="section-cta__subtitle">
              Agenda una consulta gratuita con nuestros contadores especializados.
              Respondemos en menos de 24 horas hábiles.
            </p>
            <div className="section-cta__actions">
              <Link to="/contacto" className="btn btn--primary">
                Solicitar consulta gratuita
              </Link>
              <Link to="/servicios" className="btn btn--outline">
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}