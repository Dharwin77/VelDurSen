const styles = {
  expertise: {
    padding: '3rem 1.5rem',
    background: '#f8f9fa'
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto'
  },
  h2: {
    fontSize: '2.8rem',
    textAlign: 'center',
    margin: '0 0 0.5rem 0',
    color: '#222'
  },
  intro: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    background: 'white',
    padding: '2rem 1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    border: '1px solid #e0e0e0',
    cursor: 'pointer'
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  h3: {
    fontSize: '1.4rem',
    margin: '1rem 0',
    color: '#333'
  },
  cardP: {
    color: '#666',
    lineHeight: 1.7,
    fontSize: '0.95rem',
    margin: 0
  }
}

function Expertise() {
  const expertiseAreas = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge frameworks and best practices',
      icon: '🌐'
    },
    {
      id: 2,
      title: 'Frontend Engineering',
      description: 'Interactive and performant user interfaces with React, Vue, and modern JavaScript',
      icon: '⚙️'
    },
    {
      id: 3,
      title: 'Build Optimization',
      description: 'Fast compilation and optimized deployments using Vite and advanced bundling techniques',
      icon: '⚡'
    },
    {
      id: 4,
      title: 'Performance',
      description: 'High-performance applications with optimized rendering, caching, and resource management',
      icon: '🚀'
    },
    {
      id: 5,
      title: 'Design Systems',
      description: 'Scalable CSS architectures and component libraries for consistent user experiences',
      icon: '🎨'
    },
    {
      id: 6,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and code quality standards ensuring reliability and maintainability',
      icon: '✅'
    }
  ]

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px)'
    e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 99, 235, 0.2)'
    e.currentTarget.style.borderColor = '#2563eb'
  }

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)'
    e.currentTarget.style.borderColor = '#e0e0e0'
  }

  return (
    <section style={styles.expertise} id="expertise">
      <div style={styles.container}>
        <h2 style={styles.h2}>Our Expertise</h2>
        <p style={styles.intro}>Specialized knowledge across the full spectrum of modern software development</p>
        
        <div style={styles.grid}>
          {expertiseAreas.map((area) => (
            <div 
              key={area.id} 
              style={styles.card}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={styles.icon}>{area.icon}</div>
              <h3 style={styles.h3}>{area.title}</h3>
              <p style={styles.cardP}>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
