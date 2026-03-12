// src/components/Hero.jsx
import "@google/model-viewer";
import { useHeroRotator } from "../hooks/useHeroRotator";

export default function Hero() {
  useHeroRotator();

  return (
    <section className="section hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="pill reveal" data-reveal data-i18n="hero.pill">
            Diseño • Desarrollo • Conversión
          </p>

          <h1 className="reveal hero-title" data-reveal data-delay="60">
            <span
              className="hero-rotator"
              id="heroRotator"
              aria-label="Crea tu Web"
            >
              <span
                className="hero-rotator__word gradient"
                id="heroRotatorWord"
                data-i18n="hero.word1"
              >
                CREA
              </span>
            </span>
          </h1>

          <p
            className="muted reveal"
            data-reveal
            data-delay="120"
            data-i18n="hero.subtitle"
          >
            Sistemas Digitales & Automatización
          </p>

          <div className="hero-actions reveal" data-reveal data-delay="160">
            <a className="btn btn-primary magnetic" href="#precios">
              <span data-i18n="hero.btnPricing">Ver precios</span>
              <i className="icon">→</i>
            </a>
            <a className="btn btn-ghost magnetic" href="#proyectos">
              <span data-i18n="hero.btnProjects">Ver proyectos</span>
              <i className="icon">↗</i>
            </a>
          </div>

          <div className="hero-stats reveal" data-reveal data-delay="220">
            <div className="stat tilt" data-tilt>
              <span className="stat-num counter" data-to="30" data-suffix="+">
                0
              </span>
              <span
                className="stat-label"
                data-i18n="hero.stats.delivered"
              >
                proyectos entregados
              </span>
            </div>

            <div className="stat tilt" data-tilt>
              <span className="stat-num">7–14</span>
              <span className="stat-label" data-i18n="hero.stats.days">
                días promedio
              </span>
            </div>

            <div className="stat tilt" data-tilt>
              <span className="stat-num counter" data-to="100" data-suffix="%">
                0
              </span>
              <span
                className="stat-label"
                data-i18n="hero.stats.responsive"
              >
                responsive
              </span>
            </div>
          </div>
        </div>

        <div className="hero-media reveal" data-reveal data-delay="140">
          <div className="model-card">
            <model-viewer
              class="model-viewer"
              src="/img/eve_wall-e__eva/scene.gltf"
              alt="Modelo 3D de EVA"
              autoplay
              camera-controls
              auto-rotate
              auto-rotate-delay="0"
              rotation-per-second="8deg"
              interaction-prompt="none"
              environment-image="neutral"
              exposure="1.05"
              shadow-intensity="0.9"
              shadow-softness="0.8"
              camera-orbit="30deg 70deg 2m"
              min-camera-orbit="auto 35deg 12m"
              max-camera-orbit="auto 85deg 7m"
              field-of-view="20deg"
              camera-target="0m 0.55m 0m"
              ar
            ></model-viewer>
          </div>
        </div>
      </div>
    </section>
  );
}