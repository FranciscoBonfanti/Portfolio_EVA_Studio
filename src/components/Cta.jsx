// src/components/Cta.jsx
export default function Cta() {
  return (
    <section className="section cta" id="contacto">
      <div className="container cta-inner reveal" data-reveal>
        <div>
          <h2 data-i18n="cta.title">¿Tenés alguna consulta? Hablemos.</h2>
          <p className="muted" data-i18n="cta.subtitle">
            Agendá una llamada gratuita y te decimos qué conviene para tu caso.
          </p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-primary magnetic" href="https://wa.link/a8bk03" target="_blank" rel="noreferrer">
            <span data-i18n="cta.btn1">Consulta gratis</span>
            <i className="icon">↗</i>
          </a>
          <a className="btn btn-ghost magnetic" href="#inicio">
            <span data-i18n="cta.btn2">Volver arriba</span>
            <i className="icon">↑</i>
          </a>
        </div>
      </div>
    </section>
  );
}