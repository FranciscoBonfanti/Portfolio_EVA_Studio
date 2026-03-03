export default function Header({ lang, onToggleLang }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="nav-shell" id="navShell">
          <a className="nav-brand" href="#inicio" aria-label="Ir al inicio">
            <img src="/img/logo-nav.png" alt="EVA Studio" className="logo-img" />
          </a>

          <nav className="nav-links" id="navMenu" aria-label="Navegación principal">
            <a className="nav-link" href="#proceso" data-i18n="nav.process">Proceso</a>
            <a className="nav-link" href="#beneficios" data-i18n="nav.benefits">Beneficios</a>
            <a className="nav-link" href="#servicios" data-i18n="nav.services">Servicios</a>
            <a className="nav-link" href="#precios" data-i18n="nav.pricing">Precios</a>
            <a className="nav-link" href="#faq" data-i18n="nav.faqs">FAQs</a>
          </nav>

          <a className="nav-cta magnetic" href="#contacto" data-i18n="nav.cta">Hablemos</a>

          <button
            className="lang-btn magnetic"
            id="langToggle"
            type="button"
            aria-label="Cambiar idioma"
            onClick={onToggleLang}
          >
            {lang.toUpperCase()}
          </button>

          <button className="nav-toggle" id="navToggle" aria-label="Abrir menú" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}