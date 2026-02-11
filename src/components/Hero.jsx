const styles = {
  hero: {
    position: 'relative',
    color: 'white',
    padding: '2rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    minHeight: '180px',
    textAlign: 'center',
    borderRadius: '16px',
    margin: '1.5rem',
    maxWidth: '1600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden'
  },
  videoBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
    opacity: 0.7
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(30, 58, 138, 0.4)',
    zIndex: 2
  },
  heroImage: {
    width: '200px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '12px',
    flexShrink: 0,
    zIndex: 3,
    position: 'relative'
  },
  heroContent: {
    zIndex: 3,
    maxWidth: '600px',
    flex: 1
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
      <video 
        style={styles.videoBackground}
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="https://cdn.pixabay.com/vimeo/360960878/video-360960878_small.mp4" type="video/mp4" />
      </video>
      <div style={styles.heroOverlay}></div>
      
      <div style={styles.heroContent}>
        <h1 style={styles.h1}>Innovative Software Solutions</h1>
        <p style={styles.p}>Cutting-edge technology and expertise for your digital transformation</p>
        <div style={styles.heroButtons}>
          <button style={{...styles.btn, ...styles.btnPrimary}}>Explore Technologies</button>
          <button style={{...styles.btn, ...styles.btnSecondary}}>Learn More</button>
        </div>
      </div>
      <img 
        src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop" 
        alt="Software Solutions" 
        style={styles.heroImage}
      />
    </section>
  )
}

export default Hero
