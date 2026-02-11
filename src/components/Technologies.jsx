import './Technologies.css'

function Technologies() {
  const technologies = [
    {
      id: 1,
      name: 'React',
      description: 'A JavaScript library for building user interfaces with reusable components',
      icon: '⚛️'
    },
    {
      id: 2,
      name: 'Vite',
      description: 'A next generation frontend build tool providing fast HMR and optimized builds',
      icon: '⚡'
    },
    {
      id: 3,
      name: 'JavaScript',
      description: 'The programming language that powers interactive web experiences',
      icon: '✨'
    },
    {
      id: 4,
      name: 'CSS3',
      description: 'Modern styling capabilities for responsive and animated designs',
      icon: '🎨'
    }
  ]

  return (
    <section className="technologies">
      <h2>Technologies</h2>
      <p className="technologies-subtitle">Tools and frameworks powering this project</p>
      
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div key={tech.id} className="technology-card">
            <div className="tech-icon">{tech.icon}</div>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies
