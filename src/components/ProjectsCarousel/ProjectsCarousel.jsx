import CircularGallery from './CircularGallery'

export default function ProjectsCarousel() {
  return (
    <section className="pcr" id="proyectos-carousel">
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery 
          bend={1}
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </section>
  )
}