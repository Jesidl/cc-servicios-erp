import Icon from '../utils/iconMap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { useForm } from '../hooks/useForm';
import { fadeInUp, staggerContainer, itemVariants } from '../styles/animations';

const contactItems = [
  { icon: 'MapPin', title: 'Ubicación', text: 'Medellín, Antioquia\nColombia' },
  { icon: 'Phone', title: 'Teléfono', text: '+57 (4) 123-4567\n+57 301 456 7890' },
  { icon: 'Mail', title: 'Email', text: 'info@cuentasclaras.com\nasesor@cuentasclaras.com' },
  { icon: 'Clock', title: 'Horario de atención', text: 'Lunes a Viernes: 8:00 AM – 6:00 PM\nSábado: 9:00 AM – 1:00 PM' },
];

const benefits = [
  { icon: 'Zap', title: 'Respuesta Rápida', description: 'Te respondemos dentro de 24 horas hábiles.' },
  { icon: 'Users', title: 'Equipo Dedicado', description: 'Profesionales expertos atienden tu caso directamente.' },
  { icon: 'Target', title: 'Solución Personalizada', description: 'Adaptamos nuestros servicios a tu necesidad específica.' },
];

const validate = (values) => {
  const errors = {};
  if (!values.name?.trim()) errors.name = 'El nombre es obligatorio';
  if (!values.email) {
    errors.email = 'El email es obligatorio';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email inválido';
  }
  if (!values.message?.trim()) errors.message = 'El mensaje no puede estar vacío';
  return errors;
};

const sendContactForm = async (data) => {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  return axios.post(`${API_URL}/api/contact`, data);
};

export default function Contact() {
  const { 
    values, 
    errors, 
    loading, 
    handleChange, 
    handleSubmit 
  } = useForm(
    { name: '', email: '', message: '' },
    validate,
    sendContactForm
  );

  return (
    <div>
      <Navbar />

      <PageHero
        label="Contacto"
        title="Hablemos de tu negocio"
        subtitle="Estamos aquí para ayudarte. Envía tu consulta y te responderemos en las próximas 24 horas"
      />

      {/* Formulario + Info */}
      <motion.section className="page-section" {...fadeInUp}>
        <div className="page-section__inner">
          <div className="contact-layout">

            {/* Formulario */}
            <div>
              <h2 className="contact-form__title">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit}>
                <div className="contact-form__group">
                  <label className="contact-form__label">Nombre completo</label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
                    placeholder="Tu nombre"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
                    placeholder="tu.email@empresa.com"
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label">Mensaje</label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    className={`contact-form__textarea ${errors.message ? 'contact-form__input--error' : ''}`}
                    placeholder="Cuéntanos tu necesidad y nos pondremos en contacto contigo"
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="contact-form__submit"
                >
                  {loading ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            </div>

            {/* Info de contacto */}
            <div>
              <h2 className="contact-info__title">Información de contacto</h2>
              <motion.div 
                className="contact-info__list"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
              >
                {contactItems.map((item) => (
                  <motion.div key={item.title} className="contact-info__item" variants={itemVariants}>
                    <div className="contact-info__icon"><Icon name={item.icon} size={20} strokeWidth={1.5} /></div>
                    <div>
                      <h3 className="contact-info__item-title">{item.title}</h3>
                      <p className="contact-info__item-text whitespace-pre-line">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="contact-info__erp-box">
                <h3 className="contact-info__erp-title">¿Necesitas acceso rápido?</h3>
                <p className="contact-info__erp-text">
                  Accede a nuestra plataforma de gestión empresarial para consultas y trámites en línea.
                </p>
                <a
                  href="https://sistema.cuentasclaraserp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--filled text-sm py-3 px-6"
                >
                  Ir al Sistema ERP →
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Por qué contactarnos */}
      <motion.section className="page-section page-section--light" {...fadeInUp}>
        <div className="page-section__inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Nuestro compromiso</span>
            <h2 className="section-header__title">¿Por qué contactarnos?</h2>
            <div className="section-divider" />
          </div>
          <motion.div 
            className="grid-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {benefits.map((b) => (
              <motion.div key={b.title} className="value-card" variants={itemVariants}>
                <div className="value-card__icon"><Icon name={b.icon} size={24} strokeWidth={1.5} /></div>
                <h3 className="value-card__title">{b.title}</h3>
                <p className="value-card__description">{b.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="section-cta">
        <div className="section-cta__glow" aria-hidden="true" />
        <div className="section-cta__inner">
          <h2 className="section-cta__title">¿Prefieres ver nuestros servicios primero?</h2>
          <p className="section-cta__subtitle">
            Conoce todo lo que podemos hacer por tu empresa antes de contactarnos
          </p>
          <div className="section-cta__actions">
            <Link to="/servicios" className="btn btn--primary-white">
              Ver todos los servicios
            </Link>
            <Link to="/sobre-nosotros" className="btn btn--outline-white">
              Conocer el equipo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
