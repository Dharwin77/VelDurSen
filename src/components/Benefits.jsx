const styles = {
  benefits: {
    padding: '3rem 1.5rem',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto'
  },
  h2: {
    fontSize: '2.8rem',
    textAlign: 'center',
    margin: '0 0 0.5rem 0',
    color: '#1e3a8a'
  },
  intro: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#1e40af',
    marginBottom: '2rem',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    background: 'white',
    padding: '2rem 1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(37, 99, 235, 0.1)',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
    borderTop: '4px solid #1e3a8a',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1rem',
    display: 'inline-block'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '1rem 0',
    color: '#1e3a8a'
  },
  cardP: {
    color: '#4b5563',
    lineHeight: 1.7,
    fontSize: '0.95rem',
    marginBottom: '1.5rem'
  },
  metric: {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
    color: 'white',
    padding: '0.8rem 1.2rem',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: 600,
    fontSize: '0.9rem'
  }
}

function Benefits() {
  const benefits = [
    {
      id: 1,
      title: 'High Performance',
      description: 'Optimized solutions that deliver lightning-fast load times and smooth user experiences across all devices',
      icon: '⚡',
      metrics: '99.9% Uptime'
    },
    {
      id: 2,
      title: 'Scalability',
      description: 'Architecture designed to grow with your business, handling increasing traffic and data seamlessly',
      icon: '📈',
      metrics: '10x Growth Ready'
    },
    {
      id: 3,
      title: 'Security First',
      description: 'Enterprise-grade security with encryption, authentication, and regular audits to protect your data',
      icon: '🔒',
      metrics: 'ISO 27001 Certified'
    },
    {
      id: 4,
      title: 'Cost Efficient',
      description: 'Optimized infrastructure and smart development practices reduce operational costs significantly',
      icon: '💰',
      metrics: '40% Cost Savings'
    },
    {
      id: 5,
      title: 'Rapid Development',
      description: 'Agile methodology and modern tools enable faster time-to-market for your solutions',
      icon: '🚀',
      metrics: '2x Faster Delivery'
    },
    {
      id: 6,
      title: '24/7 Support',
      description: 'Dedicated support team available round-the-clock to assist with any technical issues or updates',
      icon: '💬',
      metrics: 'Instant Response'
    }
  ]

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px)'
    e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 99, 235, 0.2)'
    e.currentTarget.style.borderColor = '#2563eb'
  }

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.1)'
    e.currentTarget.style.borderColor = 'transparent'
  }

  return (
    <section style={styles.benefits} id="benefits">
      <div style={styles.container}>
        <h2 style={styles.h2}>Why Choose Veldursen?</h2>
        <p style={styles.intro}>Comprehensive benefits that deliver real value to your business</p>
        
        <div style={styles.grid}>
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              style={styles.card}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={styles.icon}>{benefit.icon}</div>
              <h3 style={styles.h3}>{benefit.title}</h3>
              <p style={styles.cardP}>{benefit.description}</p>
              <div style={styles.metric}>{benefit.metrics}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
