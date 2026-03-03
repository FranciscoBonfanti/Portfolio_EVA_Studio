// src/components/Services.jsx
export default function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-head">
          <p className="kicker reveal" data-reveal data-i18n="services.kicker">Servicios</p>
          <h2 className="reveal" data-reveal data-delay="60" data-i18n="services.title">
            Soluciones digitales en un solo lugar
          </h2>
          <p className="muted reveal" data-reveal data-delay="120" data-i18n="services.subtitle">
            Todo pensado para vender más.
          </p>
        </div>

        <div className="grid cards-3">
          <article className="card tilt reveal" data-reveal data-tilt>
            <h3 data-i18n="services.s1.title">Diseño y desarrollo</h3>
            <p className="muted" data-i18n="services.s1.desc">Una web clara, profesional y coherente con tu marca.</p>
          </article>
          <article className="card tilt reveal" data-reveal data-delay="60" data-tilt>
            <h3 data-i18n="services.s2.title">Responsive</h3>
            <p className="muted" data-i18n="services.s2.desc">
              Se ve perfecto en celular, tablet y computadora.
            </p>
          </article>
          <article className="card tilt reveal" data-reveal data-delay="120" data-tilt>
            <h3 data-i18n="services.s3.title">Integración WhatsApp</h3>
            <p className="muted" data-i18n="services.s3.desc">
              Acortamos el camino entre interés y consulta.
            </p>
          </article>

          <article className="card tilt reveal" data-reveal data-tilt>
            <h3 data-i18n="services.s4.title">Formularios optimizados</h3>
            <p className="muted" data-i18n="services.s4.desc">Capturá datos útiles con fricción mínima.</p>
          </article>
          <article className="card tilt reveal" data-reveal data-delay="60" data-tilt>
            <h3 data-i18n="services.s5.title">Seguridad y backups</h3>
            <p className="muted" data-i18n="services.s5.desc">
              Protección y respaldos automáticos para evitar pérdidas.
            </p>
          </article>
          <article className="card tilt reveal" data-reveal data-delay="120" data-tilt>
            <h3 data-i18n="services.s6.title">Métricas</h3>
            <p className="muted" data-i18n="services.s6.desc">
              Configuración de analítica para medir resultados.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}