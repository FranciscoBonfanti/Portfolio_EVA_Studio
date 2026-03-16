import { useMemo, useState } from 'react';
import '../styles/ProjectsCarousel.css';

const slides = [
  { id: 1, title: 'E-commerce UI', image: '../../public/img/imagenMesa.png' },
  { id: 2, title: 'Automation Flow', image: '../../public/img/imagenMesa2.png' },
  { id: 3, title: 'Lead Dashboard', image: '../../public/img/imagenMesa4.png' },
  { id: 4, title: 'Landing Page', image: '../../public/img/imagenMesa3.png' },
  { id: 5, title: 'Booking App', image: '../../public/img/imagenMesa5.png' },
];

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverSide, setHoverSide] = useState(null);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;

    if (x < width * 0.18) {
      setHoverSide('left');
    } else if (x > width * 0.82) {
      setHoverSide('right');
    } else {
      setHoverSide(null);
    }
  };

  const handleMouseLeave = () => {
    setHoverSide(null);
  };

  const visibleSlides = useMemo(() => {
    return slides.map((slide, index) => {
      let position = 'hidden';

      if (index === activeIndex) position = 'active';
      else if (index === (activeIndex - 1 + slides.length) % slides.length) position = 'prev';
      else if (index === (activeIndex + 1) % slides.length) position = 'next';

      return { ...slide, position };
    });
  }, [activeIndex]);

  return (
    <section className="projects-carousel-section" id="projects">
      <div className="projects-carousel__header">
        <p className="projects-carousel__eyebrow">Portfolio</p>
        <h2 className="projects-carousel__title">Proyectos destacados</h2>
        <p className="projects-carousel__subtitle">
          Diseños, automatizaciones y productos digitales con una presentación visual más dinámica.
        </p>
      </div>

      <div
        className="projects-carousel projects-carousel--fullscreen"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={`projects-carousel__arrow projects-carousel__arrow--left ${
            hoverSide === 'left' ? 'is-visible' : ''
          }`}
          onClick={prevSlide}
          aria-label="Proyecto anterior"
          type="button"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 4.5 8 12l7.5 7.5" />
          </svg>
        </button>

        <div className="projects-carousel__viewport">
          {visibleSlides.map((slide) => (
            <article
              key={slide.id}
              className={`projects-carousel__card projects-carousel__card--${slide.position}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="projects-carousel__image"
              />
              <div className="projects-carousel__overlay">
                <h3 className="projects-carousel__card-title">{slide.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <button
          className={`projects-carousel__arrow projects-carousel__arrow--right ${
            hoverSide === 'right' ? 'is-visible' : ''
          }`}
          onClick={nextSlide}
          aria-label="Proyecto siguiente"
          type="button"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.5 4.5 16 12l-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="projects-carousel__dots" aria-label="Indicadores del carrusel">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`projects-carousel__dot ${index === activeIndex ? 'is-active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al proyecto ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}