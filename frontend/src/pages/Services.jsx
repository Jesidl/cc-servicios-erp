import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';
import { services, processSteps } from '../data/ServiceData';
import Icon from '../utils/iconMap';
import { fadeInUp, staggerContainer, itemVariants } from '../styles/animations';
import '../styles/ecosystem.css';

const CONTABLES_URL  = import.meta.env.VITE_CONTABLES_URL  || 'http://localhost:5174';
const SOLUCIONES_URL = import.meta.env.VITE_SOLUCIONES_URL || 'http://localhost:5175';

export default function Services() {
  return (
    <div>
      <Navbar />

      <PageHero
        label="Servicios"
        title="Implementación de ERP"
        subtitle="Transformamos tu empresa con tecnología: automatización, integración y eficiencia operativa desde el día uno"
      />

      {/* Servicio principal: ERP */}
      <motion.section className="page-section" {...fadeInUp}>
        <div className="page-section__inner--wide">
          <div className="section-header text-center mb-12">
            <span className="section-label">Nuestra especialidad tecnológica</span>
            <h2 className="section-header__title">Sistema ERP a tu medida</h2>
            <p className="section-header__subtitle">
              Implementamos el ERP ideal para tu empresa: desde la selección hasta el soporte continuo,
              acompañándote en cada etapa de la transformación digital.
            </p>
            <div className="section-divider mx-auto" />
          </div>

          <motion.div
            className="services-full-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  benefits={service.details.slice(0, 4)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Proceso de implementación */}
      <motion.section className="page-section page-section--light" {...fadeInUp}>
        <div className="page-section__inner">
          <div className="text-center mb-14">
            <span className="section-label">Cómo lo hacemos</span>
            <h2 className="section-header__title">Proceso de implementación</h2>
            <div className="section-divider" />
          </div>
          <motion.div
            className="grid-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="process-step bg-[var(--color-white)] border border-[var(--color-card-border)] rounded-[var(--radius-2xl)] p-7 shadow-[var(--shadow-sm)]"
              >
                <div className="text-5xl font-black text-[rgba(185,111,78,0.18)] leading-none mb-4 tracking-tighter">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-[var(--color-text)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── ECOSISTEMA DE SERVICIOS (sección distintiva del ERP hub) ── */}
      <motion.section
        className="page-section page-section--dark overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="page-section__inner">
          <div className="text-center mb-14">
            <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-[var(--color-primary-light)] mb-3.5">
              Más allá del ERP
            </p>
            <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold text-[var(--color-white)] tracking-tight">
              Nuestro ecosistema de servicios
            </h2>
            <p className="text-[var(--color-white)]/60 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Cuentas Claras opera como un ecosistema integrado. Además del ERP, contamos con firmas
              hermanas especializadas en cada área de las finanzas empresariales.
            </p>
          </div>

          <motion.div
            className="grid-2"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Card 1: Contables y Tributarios */}
            <motion.a
              href={CONTABLES_URL}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="ecosystem-card"
            >
              <div className="ecosystem-card__icon"><Icon name="Scale" size={36} strokeWidth={1.5} /></div>
              <div className="ecosystem-card__badge">Firma Especializada</div>
              <h3 className="ecosystem-card__title">Contables y Tributarios</h3>
              <p className="ecosystem-card__description">
                Outsourcing contable, asesoría tributaria ante la DIAN y gestión integral
                de nómina y seguridad social para tu empresa.
              </p>
              <ul className="ecosystem-card__list">
                <li>✓ Outsourcing Contable NIIF</li>
                <li>✓ Asesoría Tributaria DIAN</li>
                <li>✓ Nómina y Seguridad Social</li>
              </ul>
              <span className="ecosystem-card__cta">
                Ir a Contables y Tributarios <span aria-hidden="true">→</span>
              </span>
            </motion.a>

            {/* Card 2: Soluciones Integrales */}
            <motion.a
              href={SOLUCIONES_URL}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="ecosystem-card"
            >
              <div className="ecosystem-card__icon"><Icon name="LineChart" size={36} strokeWidth={1.5} /></div>
              <div className="ecosystem-card__badge">Firma Especializada</div>
              <h3 className="ecosystem-card__title">Soluciones Integrales</h3>
              <p className="ecosystem-card__description">
                Estados financieros profesionales y planeación financiera estratégica
                para impulsar el crecimiento sostenible de tu negocio.
              </p>
              <ul className="ecosystem-card__list">
                <li>✓ Estados Financieros NIIF</li>
                <li>✓ Planeación Financiera</li>
                <li>✓ Análisis y Proyecciones</li>
              </ul>
              <span className="ecosystem-card__cta">
                Ir a Soluciones Integrales <span aria-hidden="true">→</span>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="section-cta"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-cta__glow" aria-hidden="true" />
        <div className="section-cta__inner">
          <h2 className="section-cta__title">¿Listo para implementar tu ERP?</h2>
          <p className="section-cta__subtitle">
            Agenda una consulta gratuita y te mostramos el sistema ideal para tu empresa
          </p>
          <div className="section-cta__actions">
            <Link to="/contacto" className="btn btn--primary-white">
              Agendar diagnóstico gratuito
            </Link>
            <a
            href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-white"
            >
              Ver Sistema ERP →
            </a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
