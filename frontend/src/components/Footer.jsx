import { Link } from 'react-router-dom';
import { footerColumns, erpLink } from '../data/NavigationData';
import logoImg from '../assets/LOGO CUENTAS CLARAS COLOR.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__grid">

          {/* ── Columna de marca ── */}
          <div>
            <img src={logoImg} alt="Cuentas Claras ERP" className="footer__logo-img" />
            <p className="footer__tagline">
              Firma de asesoría contable y tributaria con más de 15 años acompañando
              el crecimiento de empresas colombianas.
            </p>
            <div className="footer__contact-list">
              <div className="footer__contact-item">
                <span>📍</span>
                <span>Medellín, Antioquia, Colombia</span>
              </div>
              <div className="footer__contact-item">
                <span>📞</span>
                <a href="tel:+5741234567">+57 (4) 123-4567</a>
              </div>
              <div className="footer__contact-item">
                <span>✉️</span>
                <a href="mailto:info@cuentasclaraserp.com">info@cuentasclaraserp.com</a>
              </div>
            </div>
          </div>

          {/* ── Columnas dinámicas ── */}
          {footerColumns.map(col => (
            <div key={col.title}>
              <h3 className="footer__col-title">{col.title}</h3>
              <ul className="footer__links">
                {col.links.map(link => (
                  <li key={link.label}>
                    {link.external
                      ? <a href={link.to} className="footer__link" target="_blank" rel="noopener noreferrer">{link.label}</a>
                      : <Link to={link.to} className="footer__link">{link.label}</Link>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Columna ERP ── */}
          <div>
            <h3 className="footer__col-title">Sistema ERP</h3>
            <p className="footer__erp-text">
              Accede a nuestra plataforma de gestión empresarial integrada para
              consultar, gestionar y controlar tu contabilidad en tiempo real.
            </p>
            <a
              href={erpLink.to}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__erp-btn"
            >
              🔐 Ingresar al sistema →
            </a>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Cuentas Claras ERP®. Todos los derechos reservados.</span>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Política de privacidad</a>
            <a href="#" className="footer__bottom-link">Términos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
