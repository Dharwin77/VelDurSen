import './Expertise.css'

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

  return (
    <section className="expertise" id="expertise">
      <div className="expertise-container">
        <h2>Our Expertise</h2>
        <p className="expertise-intro">Specialized knowledge across the full spectrum of modern software development</p>
        
        <div className="expertise-grid">
          {expertiseAreas.map((area) => (
            <div key={area.id} className="expertise-card">
              <div className="expertise-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
