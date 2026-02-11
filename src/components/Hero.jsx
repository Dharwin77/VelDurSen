import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Innovative Software Solutions</h1>
        <p>Cutting-edge technology and expertise for your digital transformation</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Explore Technologies</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="floating-card card-1">React</div>
        <div className="floating-card card-2">Vite</div>
        <div className="floating-card card-3">JavaScript</div>
        <div className="floating-card card-4">CSS3</div>
      </div>
    </section>
  )
}

export default Hero
