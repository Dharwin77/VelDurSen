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
    color: 'white'
  },
  sideH4: {
    fontSize: '1.3rem',
    margin: '0 0 1rem 0'
  },
  sideList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  sideItem: {
    padding: '0.5rem 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
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
  }
}

const techDetails = {
  react: {
    name: 'React',
    icon: '⚛️',
    category: 'Frontend',
    description: 'React is a JavaScript library for building user interfaces with reusable components and efficient rendering through virtual DOM.',
    features: [
      'Component-based architecture for modularity',
      'Virtual DOM for optimal performance',
      'Unidirectional data flow for predictable state management',
      'Large ecosystem with libraries like Redux and Next.js',
      'Strong community support and extensive documentation'
    ],
    useCases: [
      'Single Page Applications (SPAs)',
      'Progressive Web Apps (PWAs)',
      'Real-time dashboards and data visualization',
      'E-commerce platforms',
      'Social media platforms'
    ],
    relatedServices: [
      { name: 'Frontend Development', description: 'Expert React development for modern UIs' },
      { name: 'Web Optimization', description: 'Performance tuning and bundle optimization' },
      { name: 'State Management', description: 'Redux, Context API, and Zustand expertise' }
    ]
  },
  vite: {
    name: 'Vite',
    icon: '⚡',
    category: 'Build Tool',
    description: 'Vite is a next-generation frontend build tool that provides extremely fast development experience and optimized production builds.',
    features: [
      'Lightning-fast HMR (Hot Module Replacement)',
      'Native ESM support for instant feedback',
      'Zero-config setup with sensible defaults',
      'Optimized production builds with Rollup',
      'Out-of-the-box support for TypeScript and JSX'
    ],
    useCases: [
      'Modern web application development',
      'Framework-agnostic project scaffolding',
      'Plugin ecosystem for extended functionality',
      'Development server with instant updates',
      'Library bundling and distribution'
    ],
    relatedServices: [
      { name: 'Build Optimization', description: 'Fast builds with minimal configuration' },
      { name: 'Performance Tuning', description: 'Bundle size optimization and code splitting' },
      { name: 'DevOps Integration', description: 'CI/CD pipeline setup with Vite' }
    ]
  },
  nodejs: {
    name: 'Node.js',
    icon: '🟢',
    category: 'Backend',
    description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine, enabling server-side JavaScript development with non-blocking I/O.',
    features: [
      'Event-driven, non-blocking I/O model',
      'NPM ecosystem with millions of packages',
      'Excellent for real-time applications',
      'Highly scalable for microservices',
      'Same language for frontend and backend'
    ],
    useCases: [
      'RESTful API development',
      'Real-time applications (WebSockets)',
      'IoT device communication',
      'Command-line tools and automation',
      'Streaming applications'
    ],
    relatedServices: [
      { name: 'Backend Development', description: 'Scalable server architectures' },
      { name: 'API Design', description: 'RESTful and GraphQL API development' },
      { name: 'Database Integration', description: 'MongoDB, PostgreSQL, and more' }
    ]
  },
  typescript: {
    name: 'TypeScript',
    icon: '📘',
    category: 'Language',
    description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, providing static type checking and better tooling.',
    features: [
      'Static type system for catch errors early',
      'Enhanced IDE support with better autocomplete',
      'Object-oriented programming features',
      'Interface and generics for reusable code',
      'Backward compatible with JavaScript'
    ],
    useCases: [
      'Large-scale enterprise applications',
      'Type-safe microservices',
      'Complex business logic applications',
      'Framework development and libraries',
      'Cross-team collaboration projects'
    ],
    relatedServices: [
      { name: 'Code Quality', description: 'Type safety and linting' },
      { name: 'Testing', description: 'Comprehensive type-aware testing' },
      { name: 'Documentation', description: 'Auto-generated docs from types' }
    ]
  },
  mongodb: {
    name: 'MongoDB',
    icon: '🍃',
    category: 'Database',
    description: 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, perfect for agile development and scalability.',
    features: [
      'Flexible document schema',
      'Horizontal scalability with sharding',
      'Powerful query language',
      'Indexing and aggregation framework',
      'ACID transactions support'
    ],
    useCases: [
      'Content management systems',
      'Real-time analytics platforms',
      'IoT data collection and analysis',
      'Mobile application backends',
      'E-commerce product catalogs'
    ],
    relatedServices: [
      { name: 'Database Design', description: 'Schema optimization and modeling' },
      { name: 'Performance Tuning', description: 'Query optimization and indexing' },
      { name: 'Data Migration', description: 'Migration from relational databases' }
    ]
  },
  docker: {
    name: 'Docker',
    icon: '🐋',
    category: 'DevOps',
    description: 'Docker is a containerization platform that packages applications and dependencies, ensuring consistency across development and production.',
    features: [
      'Containerization for consistent environments',
      'Lightweight and fast deployment',
      'Multi-stage builds for optimized images',
      'Docker Compose for multi-container applications',
      'Integration with orchestration tools'
    ],
    useCases: [
      'Microservices deployment',
      'CI/CD pipeline automation',
      'Development environment standardization',
      'Cloud-native application deployment',
      'Application scaling and load balancing'
    ],
    relatedServices: [
      { name: 'Container Orchestration', description: 'Kubernetes deployment and management' },
      { name: 'CI/CD Pipelines', description: 'Automated build and deployment' },
      { name: 'Cloud Infrastructure', description: 'AWS, Azure, and GCP deployment' }
    ]
  },
  aws: {
    name: 'AWS',
    icon: '☁️',
    category: 'Cloud',
    description: 'Amazon Web Services is a comprehensive cloud computing platform offering 200+ services for computing, storage, networking, and more.',
    features: [
      'Elastic Compute Cloud (EC2) for virtual servers',
      'Simple Storage Service (S3) for object storage',
      'RDS for managed relational databases',
      'Lambda for serverless computing',
      'CloudFront for content distribution'
    ],
    useCases: [
      'Web application hosting',
      'Scalable API backends',
      'Data warehouse and analytics',
      'Machine learning model deployment',
      'Disaster recovery and backup'
    ],
    relatedServices: [
      { name: 'Infrastructure as Code', description: 'Terraform and CloudFormation' },
      { name: 'Cost Optimization', description: 'Reserved instances and savings plans' },
      { name: 'Security Hardening', description: 'IAM and compliance setup' }
    ]
  },
  graphql: {
    name: 'GraphQL',
    icon: '📊',
    category: 'API',
    description: 'GraphQL is a query language and runtime for building flexible APIs that allow clients to request exactly the data they need.',
    features: [
      'Precise data fetching with query language',
      'Strongly typed schema definition',
      'Real-time subscriptions support',
      'Developer tools and introspection',
      'Excellent for mobile and multi-client scenarios'
    ],
    useCases: [
      'Mobile application backends',
      'Progressive data loading',
      'Multi-device client support',
      'Real-time collaboration features',
      'Mobile-first application design'
    ],
    relatedServices: [
      { name: 'API Design', description: 'Schema design and best practices' },
      { name: 'Performance Optimization', description: 'Query optimization and caching' },
      { name: 'Security', description: 'Authentication and authorization' }
    ]
  }
}

function TechnologyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const tech = techDetails[id]

  if (!tech) {
    return (
      <div style={styles.container}>
        <button style={styles.backButton} onClick={() => navigate('/')}>← Back</button>
        <h2>Technology not found</h2>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <button
        style={styles.backButton}
        onMouseEnter={(e) => { e.target.style.background = '#1e3a8a' }}
        onMouseLeave={(e) => { e.target.style.background = '#2563eb' }}
        onClick={() => navigate('/#technologies')}
      >
        ← Back to Technologies
      </button>

      <div style={styles.header}>
        <div style={styles.icon}>{tech.icon}</div>
        <h1 style={styles.title}>{tech.name}</h1>
      </div>

      <div style={styles.content}>
        <div>
          <div style={styles.description}>
            <p>{tech.description}</p>

            <div style={styles.subsection}>
              <h3 style={styles.h3}>Key Features</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {tech.features.map((feature, idx) => (
                  <li key={idx} style={{ marginBottom: '0.8rem', color: '#555', lineHeight: 1.6 }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.subsection}>
              <h3 style={styles.h3}>Common Use Cases</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {tech.useCases.map((useCase, idx) => (
                  <li key={idx} style={{ marginBottom: '0.8rem', color: '#555', lineHeight: 1.6 }}>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.sidecard}>
          <h4 style={styles.sideH4}>Category</h4>
          <p style={{ margin: '0 0 1.5rem 0' }}>{tech.category}</p>
          <h4 style={styles.sideH4}>Quick Facts</h4>
          <ul style={styles.sideList}>
            <li style={styles.sideItem}>✓ Industry Standard</li>
            <li style={styles.sideItem}>✓ Active Community</li>
            <li style={styles.sideItem}>✓ Well Documented</li>
            <li style={styles.sideItem}>✓ Production Ready</li>
          </ul>
        </div>
      </div>

      <div style={styles.relatedSection}>
        <h3 style={styles.h3}>Related Services</h3>
        <div style={styles.relatedGrid}>
          {tech.relatedServices.map((service, idx) => (
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

export default TechnologyDetail
