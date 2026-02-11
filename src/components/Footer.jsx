import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Veldursen</h3>
          <p>Innovative software solutions for the modern world</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://github.com" target="_blank">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
            <li><a href="mailto:info@veldursen.com">Email</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#web-dev">Web Development</a></li>
            <li><a href="#consulting">Consulting</a></li>
            <li><a href="#optimization">Optimization</a></li>
            <li><a href="#qa">Quality Assurance</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Veldursen. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
