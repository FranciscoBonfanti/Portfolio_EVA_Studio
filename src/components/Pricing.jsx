// src/components/Pricing.jsx
export default function Pricing() {
  return (
    <section className="section" id="precios">
      <div className="container">
        <div className="section-head">
          <p className="kicker reveal" data-reveal data-i18n="pricing.kicker">Precios</p>
          <h2 className="reveal" data-reveal data-delay="60" data-i18n="pricing.title">
            Planes que se ajustan a tus necesidades
          </h2>
          <p className="muted reveal" data-reveal data-delay="120" data-i18n="pricing.subtitle">
            Elegí un plan base y lo adaptamos.
          </p>
        </div>

        <div className="grid pricing">
          <article className="price card tilt reveal" data-reveal data-tilt>
            <h3 data-i18n="pricing.p1.title">Landing Page</h3>
            <p className="price-value">
              $ <span className="counter" data-to="150">0</span>
            </p>
            <p className="muted small" data-i18n="pricing.usdNote">Precio en dólares</p>
            <ul className="list">
              <li data-i18n="pricing.p1.li1">1 página</li>
              <li data-i18n="pricing.p1.li2">Diseño personalizado</li>
              <li data-i18n="pricing.p1.li3">100% responsive</li>
              <li data-i18n="pricing.p1.li4">WhatsApp o formulario</li>
            </ul>
            <a className="btn btn-primary btn-block magnetic" href="#contacto" data-i18n="pricing.p1.cta">
              Quiero mi web
            </a>
          </article>

          <article className="price card featured tilt reveal" data-reveal data-delay="60" data-tilt>
            <div className="badge" data-i18n="pricing.badge">Más elegido</div>
            <h3 data-i18n="pricing.p2.title">Institucional</h3>
            <p className="price-value">
              $ <span className="counter" data-to="200">0</span>
            </p>
            <p className="muted small" data-i18n="pricing.usdNote">Precio en dólares</p>
            <ul className="list">
              <li data-i18n="pricing.p2.li1">Hasta 5 secciones</li>
              <li data-i18n="pricing.p2.li2">Diseño personalizado</li>
              <li data-i18n="pricing.p2.li3">SEO básico</li>
              <li data-i18n="pricing.p2.li4">Formulario + WhatsApp</li>
            </ul>
            <a className="btn btn-primary btn-block magnetic" href="#contacto" data-i18n="pricing.p2.cta">
              Quiero mi web
            </a>
          </article>

          <article className="price card tilt reveal" data-reveal data-delay="120" data-tilt>
            <h3 data-i18n="pricing.p3.title">Web a medida</h3>
            <p className="price-value" data-i18n="pricing.p3.price">Personalizada</p>
            <p className="muted small" data-i18n="pricing.p3.note">Cotizamos según alcance</p>
            <ul className="list">
              <li data-i18n="pricing.p3.li1">Estructura y diseño</li>
              <li data-i18n="pricing.p3.li2">Optimización de rendimiento</li>
              <li data-i18n="pricing.p3.li3">Integraciones</li>
              <li data-i18n="pricing.p3.li4">Analítica y medición</li>
            </ul>
            <a className="btn btn-ghost btn-block magnetic" href="#contacto" data-i18n="pricing.p3.cta">
              Agendar una llamada
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}