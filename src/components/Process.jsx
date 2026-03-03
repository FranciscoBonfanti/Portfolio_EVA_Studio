// src/components/Process.jsx
export default function Process() {
  return (
    <section className="section" id="proceso">
      <div className="container">
        <div className="section-head">
          <p className="kicker reveal" data-reveal data-i18n="process.kicker">Proceso</p>
          <h2 className="reveal" data-reveal data-delay="60" data-i18n="process.title">Nuestro proceso</h2>
          <p className="muted reveal" data-reveal data-delay="120" data-i18n="process.subtitle">
            Tres pasos simples para pasar de idea a sitio publicado.
          </p>
        </div>

        <div className="grid cards-3">
          <article className="card step tilt reveal" data-reveal data-tilt>
            <span className="step-num">01</span>
            <h3 data-i18n="process.s1.title">Análisis y planificación</h3>
            <p className="muted" data-i18n="process.s1.desc">
              Alineamos objetivos, estructura y funcionalidades desde el primer día.
            </p>
          </article>

          <article className="card step tilt reveal" data-reveal data-tilt>
            <span className="step-num">01</span>
            <h3 data-i18n="process.s1.title">Análisis y planificación</h3>
            <p className="muted" data-i18n="process.s1.desc">
              Alineamos objetivos, estructura y funcionalidades desde el primer día.
            </p>
          </article>

          <article className="card step tilt reveal" data-reveal data-tilt>
            <span className="step-num">01</span>
            <h3 data-i18n="process.s1.title">Análisis y planificación</h3>
            <p className="muted" data-i18n="process.s1.desc">
              Alineamos objetivos, estructura y funcionalidades desde el primer día.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}