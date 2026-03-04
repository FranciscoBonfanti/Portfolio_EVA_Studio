import CircularGallery from './CircularGallery'

export default function ProjectsCarousel() {

     const proyectos = [
    { image: '../../../public/img/img-carrusel-projects/metricas.jpeg', text: '' },
    { image: '../../../public/img/img-carrusel-projects/landing.jpeg', text: '' },
    { image: '../../../public/img/img-carrusel-projects/automatizacion.png', text: '' },
    { image: '../../../public/img/img-carrusel-projects/leads.jpeg', text: ''  }
  ]

  return (
    <section className="pcr" id="proyectos-carousel">

    

      <div className="container">
        <div className="section-head">
          <p className="kicker reveal" >Portfolio</p>
          <h2 className="reveal" >Nuestro Proyectos</h2>
          <p className="muted reveal"  >
            Mirá algunos de nuestros proyectos más recientes
          </p>
        </div>
      </div>


      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
        items={proyectos}
          bend={0}
          borderRadius={0.05}
          scrollSpeed={1}
          scrollEase={0.05}
        />
      </div>
    </section>
  )
} 