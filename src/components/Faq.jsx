// src/components/Faq.jsx
export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <p className="kicker reveal" data-reveal data-i18n="faq.kicker">FAQ</p>
          <h2 className="reveal" data-reveal data-delay="60" data-i18n="faq.title">
            Preguntas frecuentes
          </h2>
          <p className="muted reveal" data-reveal data-delay="120" data-i18n="faq.subtitle">
            Resolvemos dudas comunes sobre tiempos, contenido y cambios.
          </p>
        </div>

        <div className="faq">
          <details className="faq-item reveal" data-reveal open>
            <summary className="magnetic" data-i18n="faq.q1.q">¿En cuánto tiempo está lista la web?</summary>
            <div className="faq-content" data-i18n="faq.q1.a">
              Depende del alcance. Una landing suele estar en 7–10 días y un institucional en 10–14 días.
            </div>
          </details>

          <details className="faq-item reveal" data-reveal data-delay="60">
            <summary className="magnetic" data-i18n="faq.q2.q">¿La web es autogestionable?</summary>
            <div className="faq-content" data-i18n="faq.q2.a">
              Sí. Te dejamos todo preparado para que puedas editar textos e imágenes sin complicaciones.
            </div>
          </details>

          <details className="faq-item reveal" data-reveal data-delay="120">
            <summary className="magnetic" data-i18n="faq.q3.q">¿Tengo que aportar el contenido?</summary>
            <div className="faq-content" data-i18n="faq.q3.a">
              Idealmente sí (texto base, fotos, servicios). Si no lo tenés, te ayudamos a ordenarlo y redactarlo.
            </div>
          </details>

          <details className="faq-item reveal" data-reveal>
            <summary className="magnetic" data-i18n="faq.q4.q">¿Incluye versión móvil?</summary>
            <div className="faq-content" data-i18n="faq.q4.a">
              Sí. Diseñamos pensando primero en celular para asegurar una experiencia excelente.
            </div>
          </details>

          <details className="faq-item reveal" data-reveal data-delay="60">
            <summary className="magnetic" data-i18n="faq.q5.q">¿Puedo pedir cambios una vez entregada?</summary>
            <div className="faq-content" data-i18n="faq.q5.a">
              Incluimos una ronda de ajustes posteriores a la entrega. Extra cambios se cotizan aparte.
            </div>
          </details>

          <details className="faq-item reveal" data-reveal data-delay="120">
            <summary className="magnetic" data-i18n="faq.q6.q">¿El dominio y hosting están incluidos?</summary>
            <div className="faq-content" data-i18n="faq.q6.a">
              Podemos gestionarlos con vos. La compra y renovación dependen del proveedor elegido.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}