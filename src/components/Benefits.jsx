import './Benefits.css'

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

  return (
    <section className="benefits" id="benefits">
      <div className="benefits-container">
        <h2>Why Choose Veldursen?</h2>
        <p className="benefits-intro">Comprehensive benefits that deliver real value to your business</p>
        
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              <div className="benefit-metric">{benefit.metrics}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
