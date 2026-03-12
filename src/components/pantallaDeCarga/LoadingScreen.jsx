import "./LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <section className="loading-screen" aria-label="Pantalla de carga">
      <div className="space-stars layer-1"></div>
      <div className="space-stars layer-2"></div>
      <div className="space-stars layer-3"></div>
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>

      <div className="loading-center">
        <div className="cosmos-scene">
          <div className="planet-glow"></div>
          <div className="planet-ring"></div>
          <div className="planet">
            <span className="planet-shade"></span>
            <span className="planet-crater crater-1"></span>
            <span className="planet-crater crater-2"></span>
            <span className="planet-crater crater-3"></span>
          </div>

          <div className="orbit orbit-1">
            <div className="ship">
              <span className="ship-body"></span>
              <span className="ship-light"></span>
              <span className="ship-trail"></span>
            </div>
          </div>

          <div className="orbit orbit-2">
            <div className="satellite"></div>
          </div>
        </div>

        <div className="loading-copy">
          <h1 className="loading-title hologram-text">Inicializando EVA Studio</h1>
          <p className="loading-subtitle">
            Preparando una experiencia fuera de este mundo...
          </p>

          <div className="loading-bar">
            <div className="loading-bar-fill"></div>
          </div>

          <div className="loading-dots" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}