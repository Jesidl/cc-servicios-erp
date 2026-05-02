import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import AnimatedNumber from '../components/AnimatedNumber';
import Icon from '../utils/iconMap';
import { fadeInUp, staggerContainer, itemVariants } from '../styles/animations';

const values = [
  { icon: 'ShieldCheck', title: 'Ética Digital', description: 'Garantizamos la seguridad y confidencialidad absoluta de tu información en la nube.' },
  { icon: 'Award', title: 'Precisión', description: 'Unimos el rigor contable con la exactitud de sistemas de gestión de última generación.' },
  { icon: 'Settings', title: 'Conectividad', description: 'Implementamos ecosistemas digitales que permiten ver tu negocio en tiempo real.' },
  { icon: 'Search', title: 'Claridad', description: 'Transformamos la complejidad tributaria en rutas de cumplimiento simples y directas.' },
  { icon: 'TrendingUp', title: 'Escalabilidad', description: 'Nuestras soluciones tecnológicas crecen al ritmo de tu ambición empresarial.' },
  { icon: 'ShieldCheck', title: 'Aliados', description: 'No somos proveedores, somos el departamento de tecnología y tributos de tu empresa.' },
];

const stats = [
  { value: 15, suffix: '+', label: 'Años de Trayectoria' },
  { value: 500, suffix: '+', label: 'Empresas Asesoradas' },
  { value: 98, suffix: '%', label: 'Satisfacción' },
  { value: 30, suffix: '+', label: 'Profesionales' },
];

const team = [
  { icon: 'Lock', title: 'Expertos en Cumplimiento', description: 'Especialistas en normatividad DIAN y estándares internacionales NIIF.' },
  { icon: 'Cpu', title: 'Arquitectos de Datos', description: 'Ingenieros dedicados a la integración de procesos y automatización de reportes.' },
  { icon: 'BookOpen', title: 'Consultores Senior', description: 'Líderes estratégicos con visión 360° del calendario tributario colombiano.' },
];

export default function About() {
  return (
    <>
      <Navbar />

      <PageHero
        label="Nosotros"
        title="El Hub de Gestión para la Empresa Moderna"
        subtitle="Integramos tecnología de vanguardia y rigor tributario para darte el control total de tu operación."
      />

      {/* Quiénes somos */}
      <motion.section className="page-section" {...fadeInUp}>
        <div className="page-section__inner">
          <div className="two-col-text">
            <div>
              <span className="two-col-text__tag">Quiénes somos</span>
              <h2 className="two-col-text__title">Liderando la Transformación Digital Contable</h2>
              <div className="two-col-text__body">
                <p>
                  En Cuentas Claras ERP, no solo llevamos libros; diseñamos arquitecturas de información que permiten a las pymes colombianas competir al más alto nivel.
                </p>
                <p>
                  Nacimos de la necesidad de cerrar la brecha entre la contabilidad tradicional y las herramientas tecnológicas modernas, creando un ecosistema donde el dato es el protagonista.
                </p>
                <p>
                  Nuestra infraestructura en la nube garantiza que la información tributaria y operativa de nuestros clientes esté siempre disponible, segura y lista para la toma de decisiones.
                </p>
              </div>
            </div>
            <div className="two-col-text__image">
              <Icon name="Target" size={140} strokeWidth={1} className="text-[var(--color-primary)] opacity-10" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Misión */}
      <motion.section className="page-section page-section--light" {...fadeInUp}>
        <div className="page-section__inner">
          <div className="two-col-text">
            <div className="two-col-text__image">
              <Icon name="TrendingUp" size={140} strokeWidth={1} className="text-[var(--color-primary)] opacity-10" />
            </div>
            <div>
              <span className="two-col-text__tag">Nuestra misión</span>
              <h2 className="two-col-text__title">Tu socio estratégico de largo plazo</h2>
              <div className="two-col-text__body">
                <p>
                  Ser el socio estratégico de pymes y empresas en crecimiento, proporcionando servicios contables y financieros que generen valor y contribuyan a su desarrollo sostenible.
                </p>
                <p>
                  Buscamos desmitificar la contabilidad y hacerla accesible, entendible y estratégica para cada uno de nuestros clientes, independientemente de su tamaño o sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Estadísticas */}
      <motion.section 
        className="page-section page-section--dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="page-section__inner">
          <div className="text-center mb-12">
            <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-[var(--color-primary-light)] mb-3.5">
              Nuestra trayectoria
            </p>
            <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold text-[var(--color-white)] tracking-tight">
              Resultados que hablan solos
            </h2>
          </div>
          <motion.div 
            className="grid-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={itemVariants} className="bg-white/5 border border-white/10 rounded-[var(--radius-2xl)] p-8 text-center">
                <div className="text-[2.75rem] font-extrabold text-[var(--color-primary-light)] tracking-tighter mb-1">
                  <AnimatedNumber value={s.value} />
                  {s.suffix}
                </div>
                <div className="text-sm font-semibold text-white/50">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Valores */}
      <motion.section className="page-section" {...fadeInUp}>
        <div className="page-section__inner">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">En qué creemos</span>
            <h2 className="section-header__title">Nuestros valores</h2>
            <div className="section-divider" />
          </div>
          <motion.div 
            className="grid-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {values.map((v) => (
              <motion.div key={v.title} className="value-card" variants={itemVariants}>
                <div className="value-card__icon"><Icon name={v.icon} size={24} strokeWidth={1.5} /></div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__description">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Equipo */}
      <motion.section className="page-section page-section--light" {...fadeInUp}>
        <div className="page-section__inner">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Las personas detrás</span>
            <h2 className="section-header__title">Nuestro equipo</h2>
            <p className="section-header__subtitle">
              Profesionales especializados en diferentes áreas de la contabilidad, finanzas e implementación de sistemas, todos dedicados a tu éxito.
            </p>
            <div className="section-divider" />
          </div>
          <motion.div 
            className="grid-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {team.map((t) => (
              <motion.div key={t.title} className="team-card" variants={itemVariants}>
                <div className="team-card__avatar"><Icon name={t.icon} size={36} strokeWidth={1.5} /></div>
                <h3 className="team-card__title">{t.title}</h3>
                <p className="team-card__description">{t.description}</p>
              </motion.div>
            ))}
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
          <h2 className="section-cta__title">¿Quieres conocer nuestro equipo?</h2>
          <p className="section-cta__subtitle">
            Contáctanos para una consulta personalizada sin ningún costo
          </p>
          <div className="section-cta__actions">
            <Link to="/contacto" className="btn btn--primary-white">
              Agendar reunión
            </Link>
            <Link to="/servicios" className="btn btn--outline-white">
              Ver servicios
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
