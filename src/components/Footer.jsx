// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <p className="muted small" data-i18n="footer.rights">© Todos los derechos reservados</p>
        </div>

        <div className="footer-links">
          <a className="magnetic" href="#proceso" data-i18n="footer.process">Proceso</a>
          <a className="magnetic" href="#beneficios" data-i18n="footer.benefits">Beneficios</a>
          <a className="magnetic" href="#servicios" data-i18n="footer.services">Servicios</a>
          <a className="magnetic" href="#precios" data-i18n="footer.pricing">Precios</a>
          <a className="magnetic" href="#faq" data-i18n="footer.faqs">FAQs</a>
        </div>
      </div>
    </footer>
  );
}