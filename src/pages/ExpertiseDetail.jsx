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

const expertiseDetails = {
  webdev: {
    name: 'Web Development',
    icon: '🌐',
    description: 'End-to-end web development services using modern frameworks and technologies to create responsive, scalable, and user-friendly web applications.',
    overview: 'We specialize in creating complete web solutions that combine beautiful design with powerful functionality. From simple websites to complex enterprise applications, our expertise spans the entire development lifecycle.',
    expertise: [
      'Full-stack JavaScript/TypeScript development',
      'React, Vue, and Angular framework expertise',
      'Responsive design and mobile-first approach',
      'Progressive Web Apps (PWA) development',
      'Real-time data synchronization',
      'SEO optimization and performance tuning'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker'],
    relatedServices: [
      { name: 'UI/UX Design', description: 'Beautiful and intuitive interfaces' },
      { name: 'Performance Optimization', description: 'Speed and efficiency tuning' },
      { name: 'Testing & QA', description: 'Comprehensive test coverage' }
    ]
  },
  frontend: {
    name: 'Frontend Development',
    icon: '🎨',
    description: 'Cutting-edge frontend development focusing on creating engaging, accessible, and high-performance user interfaces.',
    overview: 'Our frontend specialists craft pixel-perfect interfaces that work seamlessly across all devices. We combine design principles with clean code practices to deliver exceptional user experiences.',
    expertise: [
      'Component-based architecture design',
      'State management (Redux, Context, Zustand)',
      'CSS-in-JS and Tailwind CSS expertise',
      'Accessibility (WCAG) compliance',
      'Browser compatibility testing',
      'Animation and micro-interactions'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Jest', 'Cypress'],
    relatedServices: [
      { name: 'UI Design Systems', description: 'Reusable component libraries' },
      { name: 'Web Accessibility', description: 'WCAG compliance and inclusive design' },
      { name: 'Performance Audits', description: 'Lighthouse and profiling analysis' }
    ]
  },
  optimization: {
    name: 'Build Optimization',
    icon: '⚡',
    description: 'Strategic optimization of build processes, bundle sizes, and deployment pipelines for maximum efficiency and speed.',
    overview: 'We identify bottlenecks in your build pipeline and implement solutions that dramatically reduce build times and bundle sizes without compromising functionality.',
    expertise: [
      'Bundle size analysis and reduction',
      'Code splitting and lazy loading strategies',
      'Tree-shaking and dead code elimination',
      'Vite and Webpack optimization',
      'Image optimization and WebP conversion',
      'Critical CSS and above-the-fold optimization'
    ],
    technologies: ['Vite', 'Webpack', 'Rollup', 'esbuild', 'TerserPlugin', 'ImageOptim'],
    relatedServices: [
      { name: 'CI/CD Pipeline Setup', description: 'Automated build and deployment' },
      { name: 'Performance Monitoring', description: 'Real-time metrics and alerts' },
      { name: 'Load Testing', description: 'Stress testing and capacity planning' }
    ]
  },
  performance: {
    name: 'Performance Engineering',
    icon: '🚀',
    description: 'Comprehensive performance analysis and optimization to ensure your applications meet and exceed user expectations.',
    overview: 'We use advanced profiling tools and techniques to identify performance issues and implement solutions that keep your applications fast and responsive.',
    expertise: [
      'Core Web Vitals optimization (LCP, FID, CLS)',
      'Memory leak detection and fixing',
      'Network optimization and caching strategies',
      'Database query optimization',
      'Server-side rendering (SSR/SSG)',
      'Edge computing and CDN integration'
    ],
    technologies: ['Lighthouse', 'WebPageTest', 'New Relic', 'DataDog', 'Chrome DevTools', 'nginx'],
    relatedServices: [
      { name: 'Monitoring & Alerting', description: '24/7 performance tracking' },
      { name: 'Capacity Planning', description: 'Infrastructure scaling strategies' },
      { name: 'Caching Strategy', description: 'Redis and HTTP caching optimization' }
    ]
  },
  design: {
    name: 'Design Systems',
    icon: '🎯',
    description: 'Creation and maintenance of comprehensive design systems that ensure consistency and accelerate development across teams.',
    overview: 'Design systems are the foundation of scalable product development. We help create systems that empower teams to build consistent, accessible, and beautiful interfaces at scale.',
    expertise: [
      'Component library creation (Storybook)',
      'Design tokens and theming strategies',
      'Atomic design principles',
      'Documentation and guidelines',
      'Design-to-code automation',
      'Version control for design assets'
    ],
    technologies: ['Storybook', 'Figma', 'Design Tokens', 'TypeScript', 'React', 'CSS Modules'],
    relatedServices: [
      { name: 'Brand Guidelines', description: 'Visual identity standards' },
      { name: 'Developer Experience', description: 'DX-focused tooling and automation' },
      { name: 'Scale & Governance', description: 'Multi-team system management' }
    ]
  },
  qa: {
    name: 'Quality Assurance',
    icon: '✅',
    description: 'Comprehensive testing and quality assurance to ensure your applications are reliable, secure, and perform flawlessly.',
    overview: 'Quality is not an afterthought—it\'s built into every stage of development. Our QA specialists use cutting-edge tools and methodologies to catch issues before they reach production.',
    expertise: [
      'Unit testing (Jest, Vitest)',
      'Integration and E2E testing (Cypress, Playwright)',
      'Performance and load testing',
      'Security testing and vulnerability scanning',
      'Accessibility testing',
      'Automated test infrastructure'
    ],
    technologies: ['Jest', 'Cypress', 'Playwright', 'OWASP ZAP', 'Axe Testing', 'SonarQube'],
    relatedServices: [
      { name: 'Test Automation', description: 'CI/CD integrated testing' },
      { name: 'Security Audits', description: 'Penetration testing and vulnerability assessment' },
      { name: 'Test Strategy', description: 'Test planning and coverage optimization' }
    ]
  }
}

function ExpertiseDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const expertise = expertiseDetails[id]

  if (!expertise) {
    return (
      <div style={styles.container}>
        <button style={styles.backButton} onClick={() => navigate('/')}>← Back</button>
        <h2>Expertise area not found</h2>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <button
        style={styles.backButton}
        onMouseEnter={(e) => { e.target.style.background = '#1e3a8a' }}
        onMouseLeave={(e) => { e.target.style.background = '#2563eb' }}
        onClick={() => navigate('/#expertise')}
      >
        ← Back to Expertise
      </button>

      <div style={styles.header}>
        <div style={styles.icon}>{expertise.icon}</div>
        <h1 style={styles.title}>{expertise.name}</h1>
      </div>

      <div style={styles.content}>
        <div>
          <div style={styles.description}>
            <p>{expertise.description}</p>
            <p style={{ marginTop: '1rem' }}>{expertise.overview}</p>

            <div style={styles.subsection}>
              <h3 style={styles.h3}>Our Expertise</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {expertise.expertise.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.8rem', color: '#555', lineHeight: 1.6 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.subsection}>
              <h3 style={styles.h3}>Technologies We Use</h3>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {expertise.technologies.map((tech, idx) => (
                  <span key={idx} style={{
                    padding: '0.5rem 1rem',
                    background: '#f3f4f6',
                    border: '1px solid #e5e7eb',
                    borderRadius: '20px',
                    color: '#1e3a8a',
                    fontSize: '0.9rem'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={styles.sidecard}>
          <h4 style={styles.sideH4}>Why Choose Us?</h4>
          <ul style={styles.sideList}>
            <li style={styles.sideItem}>✓ Expert Team</li>
            <li style={styles.sideItem}>✓ Proven Track Record</li>
            <li style={styles.sideItem}>✓ Latest Technologies</li>
            <li style={styles.sideItem}>✓ Best Practices</li>
            <li style={styles.sideItem}>✓ 24/7 Support</li>
          </ul>
        </div>
      </div>

      <div style={styles.relatedSection}>
        <h3 style={styles.h3}>Related Services</h3>
        <div style={styles.relatedGrid}>
          {expertise.relatedServices.map((service, idx) => (
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

export default ExpertiseDetail
