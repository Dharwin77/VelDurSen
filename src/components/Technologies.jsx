import './Technologies.css'

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

  return (
    <section className="technologies" id="technologies">
      <div className="tech-wrapper">
        <h2>Our Technology Stack</h2>
        <p className="technologies-subtitle">We leverage cutting-edge technologies to build scalable, robust solutions</p>
        
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div key={tech.id} className="technology-card">
              <div className="tech-icon">{tech.icon}</div>
              <span className="tech-category">{tech.category}</span>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
