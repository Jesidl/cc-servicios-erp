import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, erpLink } from '../data/NavigationData';
import logoImg from '../assets/LOGO CUENTAS CLARAS COLOR.png';
import './Navbar.css';

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const internalLinks  = navLinks.filter(l => !l.external);
  const ecosystemLinks = navLinks.filter(l => l.external);

  return (
    <header>
      <nav
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        role="navigation"
        aria-label="Navegacion principal"
      >
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__brand" aria-label="Cuentas Claras - Inicio">
            <img src={logoImg} alt="Cuentas Claras" className="navbar__logo-img" />
          </Link>

          {/* Links escritorio */}
          <div className="navbar__menu" role="menubar">
            {internalLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar__link${location.pathname === link.to ? ' navbar__link--active' : ''}`}
                role="menuitem"
              >
                {link.label}
              </Link>
            ))}

            {ecosystemLinks.length > 0 && (
              <>
                <span className="navbar__divider" aria-hidden="true" />
                {ecosystemLinks.map(link => (
                  <a
                    key={link.to}
                    href={link.to}
                    className="navbar__link navbar__link--ecosystem"
                    rel="noopener noreferrer"
                  >
                    {link.label}<span className="navbar__link-arrow"> ↗</span>
                  </a>
                ))}
              </>
            )}
          </div>

          {/* CTA escritorio */}
          <a
            href={erpLink.to}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
          >
            Sistema ERP →
          </a>

          {/* Hamburguesa movil */}
          <button
            className="navbar__hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            <span className={`navbar__hamburger-line${isOpen ? ' navbar__hamburger-line--top-open' : ''}`} />
            <span className={`navbar__hamburger-line${isOpen ? ' navbar__hamburger-line--mid-open' : ''}`} />
            <span className={`navbar__hamburger-line${isOpen ? ' navbar__hamburger-line--bot-open' : ''}`} />
          </button>
        </div>

        {/* Menu movil */}
        {isOpen && (
          <div className="navbar__mobile-menu" role="menu">
            {internalLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="navbar__mobile-link"
                role="menuitem"
              >
                {link.label}
              </Link>
            ))}

            {ecosystemLinks.length > 0 && (
              <>
                <p className="navbar__mobile-section">Ecosistema CC</p>
                {ecosystemLinks.map(link => (
                  <a
                    key={link.to}
                    href={link.to}
                    className="navbar__mobile-link navbar__mobile-link--ecosystem"
                    rel="noopener noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </>
            )}

            <a
              href={erpLink.to}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__mobile-cta"
            >
              Sistema ERP
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}