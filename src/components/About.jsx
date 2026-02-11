const styles = {
  about: {
    padding: '3rem 1.5rem',
    background: 'white'
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start'
  },
  h2: {
    fontSize: '2.5rem',
    margin: '0 0 1.5rem 0',
    color: '#222'
  },
  contentP: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: '#555',
    marginBottom: '2rem'
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    marginTop: '2rem'
  },
  stat: {
    textAlign: 'center',
    padding: '1rem',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
    color: 'white',
    borderRadius: '8px'
  },
  statH3: {
    fontSize: '2.5rem',
    margin: '0 0 0.5rem 0'
  },
  statP: {
    margin: 0,
    color: 'rgba(255, 255, 255, 0.9)'
  },
  featuresH3: {
    fontSize: '2rem',
    margin: '0 0 2rem 0',
    color: '#222'
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  feature: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  },
  featureIcon: {
    fontSize: '1.5rem',
    color: '#2563eb',
    fontWeight: 'bold',
    flexShrink: 0
  },
  featureH4: {
    margin: '0 0 0.5rem 0',
    color: '#333',
    fontSize: '1.1rem'
  },
  featureP: {
    margin: 0,
    color: '#666',
    fontSize: '0.95rem'
  }
}

function About() {
  return (
    <section style={styles.about} id="about">
      <div style={styles.container}>
        <div>
          <h2 style={styles.h2}>About Veldursen</h2>
          <p style={styles.contentP}>
            Veldursen is a forward-thinking software development company dedicated to creating innovative, 
            scalable, and high-performance digital solutions. We combine cutting-edge technology with 
            creative problem-solving to help businesses thrive in the digital age.
          </p>
          
          <div style={styles.stats}>
            <div style={styles.stat}>
              <h3 style={styles.statH3}>50+</h3>
              <p style={styles.statP}>Projects Delivered</p>
            </div>
            <div style={styles.stat}>
              <h3 style={styles.statH3}>20+</h3>
              <p style={styles.statP}>Expert Developers</p>
            </div>
            <div style={styles.stat}>
              <h3 style={styles.statH3}>100%</h3>
              <p style={styles.statP}>Client Satisfaction</p>
            </div>
            <div style={styles.stat}>
              <h3 style={styles.statH3}>10+</h3>
              <p style={styles.statP}>Years Experience</p>
            </div>
          </div>
        </div>

        <div>
          <h3 style={styles.featuresH3}>Why Choose Veldursen?</h3>
          <div style={styles.featuresList}>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>✓</span>
              <div>
                <h4 style={styles.featureH4}>Technical Excellence</h4>
                <p style={styles.featureP}>State-of-the-art technology stack and best practices</p>
              </div>
            </div>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>✓</span>
              <div>
                <h4 style={styles.featureH4}>Agile & Flexible</h4>
                <p style={styles.featureP}>Quick adaptation to changing requirements and markets</p>
              </div>
            </div>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>✓</span>
              <div>
                <h4 style={styles.featureH4}>Dedicated Support</h4>
                <p style={styles.featureP}>24/7 assistance and ongoing maintenance</p>
              </div>
            </div>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>✓</span>
              <div>
                <h4 style={styles.featureH4}>Cost Efficient</h4>
                <p style={styles.featureP}>Optimized solutions that deliver maximum ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
