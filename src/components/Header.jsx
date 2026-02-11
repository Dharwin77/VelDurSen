import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Veldursen</h1>
          <p className="tagline">Software Innovation & Technology Solutions</p>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#expertise">Expertise</a>
          <a href="#about">About</a>
          <a href="#contact" className="cta-button">Get Started</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
