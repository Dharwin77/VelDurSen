const styles = {
  footer: {
    background: '#1e3a8a',
    color: 'white',
    padding: '3rem 1.5rem 1rem'
  },
  footerContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
    marginBottom: '2rem'
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0 0 0.5rem 0',
    color: 'white'
  },
  h4: {
    fontSize: '1.1rem',
    margin: '0 0 1rem 0',
    color: 'white'
  },
  sectionP: {
    margin: 0,
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.95rem'
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  li: {
    margin: 0,
    padding: 0
  },
  a: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontSize: '0.95rem'
  },
  aHover: {
    color: '#2563eb'
  },
  footerBottom: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '1rem',
    maxWidth: '1280px',
    margin: '0 auto',
    textAlign: 'center'
  },
  bottomP: {
    margin: 0,
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.9rem'
  }
}

function Footer() {
  const currentYear = new Date().getFullYear()

  const handleLinkHover = (e) => {
    e.currentTarget.style.color = '#2563eb'
  }

  const handleLinkLeave = (e) => {
    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
  }

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h3 style={styles.h3}>Veldursen</h3>
          <p style={styles.sectionP}>Innovative software solutions for the modern world</p>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.h4}>Quick Links</h4>
          <ul style={styles.ul}>
            <li style={styles.li}><a href="#home" style={styles.a} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Home</a></li>
            <li style={styles.li}><a href="#technologies" style={styles.a} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Technologies</a></li>
            <li style={styles.li}><a href="#expertise" style={styles.a} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Expertise</a></li>
            <li style={styles.li}><a href="#about" style={styles.a} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>About Us</a></li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.h4}>Connect</h4>
          <ul style={styles.ul}>
            <li style={styles.li}><a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.a} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>GitHub</a></li>
            <li style={styles.li}><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.a} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>LinkedIn</a></li>
            <li style={styles.li}><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.a} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Twitter</a></li>
            <li style={styles.li}><a href="mailto:info@veldursen.com" style={styles.a} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Email</a></li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.h4}>Services</h4>
          <ul style={styles.ul}>
            <li style={styles.li}><a href="#web-dev" style={styles.a} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Web Development</a></li>
            <li style={styles.li}><a href="#consulting" style={styles.a} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Consulting</a></li>
            <li style={styles.li}><a href="#optimization" style={styles.a} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Optimization</a></li>
            <li style={styles.li}><a href="#qa" style={styles.a} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>Quality Assurance</a></li>
          </ul>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.bottomP}>&copy; {currentYear} Veldursen. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
