// src/components/Benefits.jsx
export default function Benefits() {
  return (
    <section className="section" id="beneficios">
      <div className="container">
        <div className="section-head">
          <p className="kicker reveal" data-reveal data-i18n="benefits.kicker">Beneficios</p>
          <h2 className="reveal" data-reveal data-delay="60" data-i18n="benefits.title">
            ¿Qué obtenés con nosotros?
          </h2>
          <p className="muted reveal" data-reveal data-delay="120" data-i18n="benefits.subtitle">
            Un servicio integral, claro y orientado a resultados.
          </p>
        </div>

        <div className="grid cards-3">
          <article className="card tilt reveal" data-reveal data-tilt>
            <h3 data-i18n="benefits.b1.title">Web a medida</h3>
            <p className="muted" data-i18n="benefits.b1.desc">
              Diseño y contenido alineados a tu diferencial para atraer al cliente correcto.
            </p>
          </article>

          <article className="card tilt reveal" data-reveal data-delay="60" data-tilt>
            <h3 data-i18n="benefits.b2.title">Performance real</h3>
            <p className="muted" data-i18n="benefits.b2.desc">
              Sitios rápidos y livianos para mejorar experiencia y conversiones.
            </p>
          </article>

          <article className="card tilt reveal" data-reveal data-delay="120" data-tilt>
            <h3 data-i18n="benefits.b3.title">Autogestionable</h3>
            <p className="muted" data-i18n="benefits.b3.desc">
              Podés editar contenido y crecer sin depender de terceros.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}