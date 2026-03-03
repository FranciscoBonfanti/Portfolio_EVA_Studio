// src/components/TechStrip.jsx
export default function TechStrip() {
  return (
    <section className="tech-strip" aria-label="Tecnologías">
      <div className="container">
        <div className="tech-strip__viewport">
          <div className="tech-strip__track" id="techTrack">
            {/* lista original */}
            <div className="tech-strip__item">
              <img src="/img/WooComerce.avif" alt="WooCommerce" />
            </div>
            <div className="tech-strip__item">
              <img src="/img/googleAnalitics.avif" alt="Google Analytics" />
            </div>
            <div className="tech-strip__item">
              <img src="/img/wordrpess.avif" alt="WordPress" />
            </div>
            <div className="tech-strip__item">
              <img src="/img/elementor.avif" alt="Elementor" />
            </div>
            <div className="tech-strip__item">
              <img src="/img/react.png" alt="React" />
            </div>
            <div className="tech-strip__item">
              <img src="/img/htmljscss1.png" alt="HTML JS CSS" />
            </div>

            {/* duplicado para loop infinito */}
            <div className="tech-strip__item">
              <img src="/img/WooComerce.avif" alt="" />
            </div>
            <div className="tech-strip__item">
              <img src="/img/googleAnalitics.avif" alt="" />
            </div>
            <div className="tech-strip__item">
              <img src="/img/wordrpess.avif" alt="" />
            </div>
            <div className="tech-strip__item">
              <img src="/img/elementor.avif" alt="" />
            </div>
            <div className="tech-strip__item">
              <img src="/img/react.png" alt="" />
            </div>
            <div className="tech-strip__item">
              <img src="/img/html-css-js.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}