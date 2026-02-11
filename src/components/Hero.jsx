const styles = {
  hero: {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
    color: 'white',
    padding: '3rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
    textAlign: 'center'
  },
  heroContent: {
    zIndex: 2,
    maxWidth: '800px'
  },
  h1: {
    fontSize: '3rem',
    margin: '0 0 1rem 0',
    lineHeight: 1.2,
    fontWeight: 700
  },
  p: {
    fontSize: '1.3rem',
    margin: '0 0 2rem 0',
    opacity: 0.95,
    lineHeight: 1.6
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  btn: {
    padding: '0.9rem 2rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s ease'
  },
  btnPrimary: {
    background: 'white',
    color: '#1e3a8a'
  },
  btnSecondary: {
    background: 'transparent',
    color: 'white',
    border: '2px solid white'
  }
}

function Hero() {
  return (
    <section style={styles.hero} id="home">
      <div style={styles.heroContent}>
        <h1 style={styles.h1}>Innovative Software Solutions</h1>
        <p style={styles.p}>Cutting-edge technology and expertise for your digital transformation</p>
        <div style={styles.heroButtons}>
          <button style={{...styles.btn, ...styles.btnPrimary}}>Explore Technologies</button>
          <button style={{...styles.btn, ...styles.btnSecondary}}>Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
