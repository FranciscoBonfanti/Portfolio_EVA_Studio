// src/components/ProjectsCarousel/ProjectsCarousel.jsx
export default function ProjectsCarousel() {
  return (
    <section className="pcr" id="proyectos-carousel" aria-label="Carrusel de proyectos destacados">
      <div className="container">
        <div className="pcr-head">
          <p className="pcr-kicker">Destacados</p>
          <h2 className="pcr-title">Proyectos en movimiento</h2>
          <p className="pcr-subtitle">Ahora migramos el carrusel + modal (prc.js) acá.</p>
        </div>

        <div className="pcr-viewport" id="pcrViewport">
          <div className="pcr-track" id="pcrTrack" />
          <div className="pcr-fade pcr-fade-left" aria-hidden="true"></div>
          <div className="pcr-fade pcr-fade-right" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}