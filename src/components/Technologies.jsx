const styles = {
  technologies: {
    padding: '3rem 1.5rem',
    background: 'white'
  },
  techWrapper: {
    maxWidth: '1280px',
    margin: '0 auto'
  },
  h2: {
    fontSize: '2.8rem',
    textAlign: 'center',
    margin: '0 0 0.5rem 0',
    color: '#222'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem'
  },
  card: {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    color: 'white',
    cursor: 'pointer'
  },
  icon: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    display: 'inline-block'
  },
  category: {
    display: 'inline-block',
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 600,
    marginBottom: '0.5rem'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '1rem 0',
    color: 'white'
  },
  cardP: {
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 1.6,
    fontSize: '0.95rem'
  }
}

function Technologies() {
  const technologies = [
    {
      id: 1,
      name: 'React',
      description: 'Modern JavaScript library for building dynamic and interactive user interfaces with component-based architecture',
      icon: '⚛️',
      category: 'Frontend Framework'
    },
    {
      id: 2,
      name: 'Vite',
      description: 'Next-generation build tool providing lightning-fast development experience and optimized production builds',
      icon: '⚡',
      category: 'Build Tool'
    },
    {
      id: 3,
      name: 'Node.js',
      description: 'JavaScript runtime for building scalable backend services and APIs with high performance',
      icon: '💚',
      category: 'Backend Runtime'
    },
    {
      id: 4,
      name: 'TypeScript',
      description: 'Strongly-typed JavaScript superset ensuring code reliability, maintainability, and better developer experience',
      icon: '🔵',
      category: 'Language'
    },
    {
      id: 5,
      name: 'MongoDB',
      description: 'Flexible NoSQL database for storing and managing large-scale data with high availability',
      icon: '🍃',
      category: 'Database'
    },
    {
      id: 6,
      name: 'Docker',
      description: 'Containerization platform for consistent deployment across different environments',
      icon: '🐳',
      category: 'DevOps'
    },
    {
      id: 7,
      name: 'AWS',
      description: 'Cloud infrastructure services for scalable and reliable application deployment',
      icon: '☁️',
      category: 'Cloud Platform'
    },
    {
      id: 8,
      name: 'GraphQL',
      description: 'Modern API query language enabling efficient data fetching and flexible client requirements',
      icon: '📊',
      category: 'API Technology'
    }
  ]

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px)'
    e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 99, 235, 0.3)'
  }

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.2)'
  }

  return (
    <section style={styles.technologies} id="technologies">
      <div style={styles.techWrapper}>
        <h2 style={styles.h2}>Our Technology Stack</h2>
        <p style={styles.subtitle}>We leverage cutting-edge technologies to build scalable, robust solutions</p>
        
        <div style={styles.grid}>
          {technologies.map((tech) => (
            <div 
              key={tech.id} 
              style={styles.card}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={styles.icon}>{tech.icon}</div>
              <span style={styles.category}>{tech.category}</span>
              <h3 style={styles.h3}>{tech.name}</h3>
              <p style={styles.cardP}>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
