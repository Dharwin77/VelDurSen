import { useParams, useNavigate } from 'react-router-dom'

const styles = {
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '3rem 1.5rem'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '3rem'
  },
  backButton: {
    padding: '0.75rem 1.5rem',
    background: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.3s'
  },
  title: {
    fontSize: '3rem',
    color: '#1e3a8a',
    margin: 0
  },
  icon: {
    fontSize: '4rem'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '3rem',
    marginBottom: '3rem'
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: '#555'
  },
  subsection: {
    marginBottom: '2rem'
  },
  h3: {
    fontSize: '1.8rem',
    color: '#1e3a8a',
    marginBottom: '1rem'
  },
  sidecard: {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
    padding: '2rem',
    borderRadius: '8px',
    color: 'white',
    textAlign: 'center'
  },
  metric: {
    marginBottom: '2rem',
    paddingBottom: '2rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
  },
  metricValue: {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0.5rem 0'
  },
  metricLabel: {
    fontSize: '0.9rem',
    opacity: 0.9
  },
  relatedSection: {
    marginTop: '3rem',
    paddingTop: '2rem',
    borderTop: '2px solid #e5e7eb'
  },
  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem'
  },
  relatedCard: {
    padding: '1.5rem',
    background: '#f9fafb',
    borderRadius: '8px',
    border: '1px solid #e5e7eb'
  },
  relatedH4: {
    margin: '0 0 0.5rem 0',
    color: '#1e3a8a'
  },
  relatedP: {
    margin: 0,
    color: '#666',
    fontSize: '0.95rem'
  },
  caseStudies: {
    marginTop: '2rem'
  },
  caseStudy: {
    marginBottom: '2rem',
    padding: '1.5rem',
    background: '#f0f9ff',
    borderLeft: '4px solid #2563eb',
    borderRadius: '4px'
  },
  caseStudyTitle: {
    color: '#1e3a8a',
    marginBottom: '0.5rem'
  },
  caseStudyText: {
    color: '#555',
    fontSize: '0.95rem'
  }
}

const benefitDetails = {
  performance: {
    name: 'High Performance',
    icon: '⚡',
    metric: '99.9%',
    metricDesc: 'Uptime SLA',
    description: 'Experience lightning-fast applications with our optimization techniques and advanced caching strategies.',
    overview: 'Performance isn\'t just about speed—it\'s about user satisfaction. Our platform achieves industry-leading performance through intelligent caching, CDN integration, and continuous optimization.',
    benefits: [
      'Sub-100ms page load times',
      'Optimized Core Web Vitals scores',
      'Automatic content delivery network (CDN)',
      'Smart caching strategies',
      'Real-time performance monitoring',
      'Automatic scaling for peak loads'
    ],
    impact: [
      'Increased user engagement and retention',
      'Improved SEO rankings',
      'Lower bounce rates',
      'Enhanced mobile experience',
      'Better conversion rates'
    ],
    relatedServices: [
      { name: 'Performance Audits', description: 'Detailed analysis and recommendations' },
      { name: 'CDN Implementation', description: 'Global content distribution' },
      { name: 'Monitoring & Alerts', description: '24/7 performance tracking' }
    ]
  },
  scalability: {
    name: 'Scalability',
    icon: '📈',
    metric: '10x',
    metricDesc: 'Growth Ready',
    description: 'Scale your business without limits. Our architecture grows with your needs, handling millions of users effortlessly.',
    overview: 'Scalability is built into our DNA. Whether you\'re growing from 100 to 1 million users, our infrastructure automatically scales to meet demand.',
    benefits: [
      'Horizontal and vertical scaling',
      'Microservices architecture',
      'Database replication and sharding',
      'Load balancing optimization',
      'Elastic resource allocation',
      'Cost-efficient growth'
    ],
    impact: [
      'Support business growth without downtime',
      'Handle traffic spikes automatically',
      'Reduce infrastructure costs',
      'Improve global performance',
      'Future-proof architecture'
    ],
    relatedServices: [
      { name: 'Infrastructure Design', description: 'Architecture planning for scale' },
      { name: 'Cloud Optimization', description: 'Cost and performance tuning' },
      { name: 'Load Testing', description: 'Capacity planning and testing' }
    ]
  },
  security: {
    name: 'Security & Compliance',
    icon: '🔒',
    metric: 'ISO 27001',
    metricDesc: 'Certified',
    description: 'Enterprise-grade security with regular audits, encryption, and compliance with international standards.',
    overview: 'Security is paramount. We implement defense-in-depth strategies covering application, data, and infrastructure security.',
    benefits: [
      'End-to-end encryption (TLS 1.3)',
      'Regular penetration testing',
      'GDPR and CCPA compliance',
      'DDoS protection and WAF',
      'Regular security audits',
      'Incident response 24/7'
    ],
    impact: [
      'Protect customer data and privacy',
      'Meet regulatory requirements',
      'Build customer trust',
      'Prevent data breaches',
      'Reduce security incidents'
    ],
    relatedServices: [
      { name: 'Penetration Testing', description: 'Ethical hacking and vulnerability assessment' },
      { name: 'Compliance Consulting', description: 'GDPR, HIPAA, PCI-DSS' },
      { name: 'Security Training', description: 'Team training and awareness' }
    ]
  },
  costefficient: {
    name: 'Cost Efficiency',
    icon: '💰',
    metric: '40%',
    metricDesc: 'Savings',
    description: 'Reduce operational costs while maintaining premium quality. Smart resource allocation and optimization.',
    overview: 'We help you achieve more with less. Through intelligent architecture and optimization, we reduce infrastructure and operational costs significantly.',
    benefits: [
      'Pay-as-you-go pricing models',
      'Resource optimization',
      'Waste elimination',
      'Efficient auto-scaling',
      'Open-source technologies',
      'Cloud cost optimization'
    ],
    impact: [
      'Lower total cost of ownership',
      'Improved profit margins',
      'Predictable budgeting',
      'Reduced waste',
      'Better ROI on tech investments'
    ],
    relatedServices: [
      { name: 'Cost Analysis', description: 'Infrastructure cost audits' },
      { name: 'Optimization Strategies', description: 'Resource and cost optimization' },
      { name: 'Licensing Consulting', description: 'Optimal license selection' }
    ]
  },
  speed: {
    name: 'Development Speed',
    icon: '🚀',
    metric: '2x',
    metricDesc: 'Faster',
    description: 'Accelerate your time-to-market with modern development practices and tools.',
    overview: 'Ship faster without sacrificing quality. Our streamlined development process and automation reduce time-to-market significantly.',
    benefits: [
      'Agile development methodology',
      'CI/CD automation',
      'Component-based architecture',
      'Reusable code libraries',
      'Automated testing and deployment',
      'DevOps best practices'
    ],
    impact: [
      'Faster feature delivery',
      'Quicker bug fixes',
      'Earlier market entry',
      'Faster feedback loops',
      'Competitive advantage'
    ],
    relatedServices: [
      { name: 'CI/CD Pipeline', description: 'Automated build and deployment' },
      { name: 'DevOps Services', description: 'Infrastructure automation' },
      { name: 'Agile Coaching', description: 'Process improvement consulting' }
    ]
  },
  support: {
    name: '24/7 Support',
    icon: '🤝',
    metric: '24/7',
    metricDesc: 'Availability',
    description: 'Round-the-clock support from our expert team. We\'re here when you need us.',
    overview: 'Our support doesn\'t end at launch. We provide 24/7 monitoring, incident response, and proactive maintenance.',
    benefits: [
      ' 24/7 monitoring and alerting',
      'Quick incident response (15-min SLA)',
      'Dedicated support team',
      'Proactive maintenance',
      'Monthly performance reviews',
      'Priority issue escalation'
    ],
    impact: [
      'Minimize downtime',
      'Peace of mind',
      'Faster issue resolution',
      'Continuous improvement',
      'Expert guidance',
      'Reduced stress'
    ],
    relatedServices: [
      { name: 'Managed Services', description: 'Full platform management' },
      { name: 'Monitoring & Alerting', description: 'Real-time system monitoring' },
      { name: 'Consulting', description: 'Expert guidance and strategy' }
    ]
  }
}

function BenefitDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const benefit = benefitDetails[id]

  if (!benefit) {
    return (
      <div style={styles.container}>
        <button style={styles.backButton} onClick={() => navigate('/')}>← Back</button>
        <h2>Benefit not found</h2>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <button
        style={styles.backButton}
        onMouseEnter={(e) => { e.target.style.background = '#1e3a8a' }}
        onMouseLeave={(e) => { e.target.style.background = '#2563eb' }}
        onClick={() => navigate('/#benefits')}
      >
        ← Back to Benefits
      </button>

      <div style={styles.header}>
        <div style={styles.icon}>{benefit.icon}</div>
        <h1 style={styles.title}>{benefit.name}</h1>
      </div>

      <div style={styles.content}>
        <div>
          <div style={styles.description}>
            <p>{benefit.description}</p>
            <p style={{ marginTop: '1rem' }}>{benefit.overview}</p>

            <div style={styles.subsection}>
              <h3 style={styles.h3}>Key Benefits</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {benefit.benefits.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.8rem', color: '#555', lineHeight: 1.6 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.subsection}>
              <h3 style={styles.h3}>Business Impact</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {benefit.impact.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.8rem', color: '#555', lineHeight: 1.6 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.sidecard}>
          <div style={{ ...styles.metric, borderBottom: 'none' }}>
            <div style={styles.metricValue}>{benefit.metric}</div>
            <div style={styles.metricLabel}>{benefit.metricDesc}</div>
          </div>
          <p>Industry-leading results backed by data and proven implementations</p>
        </div>
      </div>

      <div style={styles.relatedSection}>
        <h3 style={styles.h3}>Related Services</h3>
        <div style={styles.relatedGrid}>
          {benefit.relatedServices.map((service, idx) => (
            <div key={idx} style={styles.relatedCard}>
              <h4 style={styles.relatedH4}>{service.name}</h4>
              <p style={styles.relatedP}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BenefitDetail
