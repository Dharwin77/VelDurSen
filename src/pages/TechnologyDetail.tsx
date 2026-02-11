import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Code, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Brain, Cloud, Settings, Database, Code2, Server, Smartphone, Globe, Layers, Cpu } from "lucide-react";
import { useEffect } from "react";

interface TechnologyContent {
  slug: string;
  icon: any;
  title: string;
  category: string;
  description: string;
  introduction: string;
  keyFeatures: string[];
  useCases: { title: string; description: string }[];
  benefits: { heading: string; description: string; metrics: string[] };
  implementation: { step: string; details: string }[];
  bestPractices: string[];
  conclusion: string;
  tools: string[];
}

const technologiesData: TechnologyContent[] = [
  {
    slug: "ai-machine-learning",
    icon: Brain,
    title: "AI & Machine Learning",
    category: "ARTIFICIAL INTELLIGENCE",
    description: "Cutting-edge artificial intelligence and machine learning solutions for intelligent automation.",
    introduction: "Transform your business with advanced AI and ML technologies. From deep learning models to intelligent automation, we leverage TensorFlow, PyTorch, and cutting-edge frameworks to build solutions that learn, adapt, and deliver measurable results.",
    keyFeatures: [
      "Deep Learning and Neural Networks for complex pattern recognition",
      "Natural Language Processing (NLP) for text and speech understanding",
      "Computer Vision for image and video analysis",
      "Predictive Analytics for data-driven decision making",
      "AutoML for automated model selection and optimization",
      "Real-time inference and model deployment at scale"
    ],
    useCases: [
      {
        title: "Intelligent Automation",
        description: "Deploy AI agents that automate repetitive tasks, optimize workflows, and reduce operational costs by up to 60%."
      },
      {
        title: "Predictive Maintenance",
        description: "Use machine learning models to predict equipment failures before they occur, minimizing downtime and maintenance costs."
      },
      {
        title: "Customer Insights",
        description: "Analyze customer behavior patterns to personalize experiences, improve retention, and increase revenue."
      },
      {
        title: "Fraud Detection",
        description: "Implement real-time anomaly detection systems to identify and prevent fraudulent activities across transactions."
      }
    ],
    benefits: {
      heading: "Business Impact & ROI",
      description: "Organizations leveraging AI and ML see significant improvements across key metrics:",
      metrics: [
        "60% reduction in operational costs through intelligent automation",
        "45% improvement in decision-making speed with predictive analytics",
        "35% increase in customer satisfaction through personalized experiences",
        "70% faster time-to-market for new products and features",
        "50% reduction in fraud losses with real-time detection systems"
      ]
    },
    implementation: [
      {
        step: "Assessment & Strategy",
        details: "Evaluate your business needs, data readiness, and define clear AI/ML objectives aligned with business goals."
      },
      {
        step: "Data Preparation",
        details: "Collect, clean, and prepare high-quality training data. Implement data pipelines for continuous learning."
      },
      {
        step: "Model Development",
        details: "Build and train custom models using TensorFlow, PyTorch, or AutoML platforms. Iterate and optimize for performance."
      },
      {
        step: "Deployment & Integration",
        details: "Deploy models to production with MLOps best practices. Integrate with existing systems and workflows."
      },
      {
        step: "Monitoring & Optimization",
        details: "Continuously monitor model performance, retrain with new data, and optimize for accuracy and efficiency."
      }
    ],
    bestPractices: [
      "Start with clear, measurable business objectives before building models",
      "Ensure high-quality, representative training data to avoid bias",
      "Implement robust MLOps practices for model versioning and deployment",
      "Monitor model drift and performance degradation in production",
      "Maintain transparency and explainability in AI decision-making",
      "Establish ethical AI guidelines and governance frameworks"
    ],
    conclusion: "AI and Machine Learning are transforming how businesses operate, enabling unprecedented levels of automation, insight, and innovation. Our expertise across the full AI/ML lifecycle ensures successful implementation that delivers real business value.",
    tools: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "MLflow", "Kubeflow", "ONNX Runtime"]
  },
  {
    slug: "cloud-platforms",
    icon: Cloud,
    title: "Cloud Platforms",
    category: "CLOUD INFRASTRUCTURE",
    description: "Multi-cloud infrastructure expertise delivering scalable, secure, and reliable cloud solutions.",
    introduction: "Harness the power of cloud computing with our multi-cloud expertise. We design, migrate, and optimize cloud architectures across AWS, Azure, and Google Cloud to ensure maximum scalability, reliability, and cost-efficiency.",
    keyFeatures: [
      "Multi-cloud architecture design and implementation",
      "Cloud migration and modernization strategies",
      "Infrastructure as Code (IaC) with Terraform and CloudFormation",
      "Serverless computing and microservices architecture",
      "Auto-scaling and load balancing for high availability",
      "Cost optimization and resource management"
    ],
    useCases: [
      {
        title: "Cloud Migration",
        description: "Seamlessly migrate legacy applications to cloud platforms with zero downtime and improved performance."
      },
      {
        title: "Disaster Recovery",
        description: "Implement robust backup and disaster recovery solutions with multi-region redundancy."
      },
      {
        title: "Global Scalability",
        description: "Deploy applications globally with CDN integration and edge computing capabilities."
      },
      {
        title: "Hybrid Cloud",
        description: "Connect on-premises infrastructure with cloud services for flexible hybrid deployments."
      }
    ],
    benefits: {
      heading: "Cloud Transformation Benefits",
      description: "Moving to the cloud delivers measurable business value:",
      metrics: [
        "40% reduction in infrastructure costs through optimized resource utilization",
        "99.99% uptime with multi-region high availability",
        "10x faster deployment speed with automated CI/CD pipelines",
        "Enhanced security with cloud-native security services",
        "Unlimited scalability to handle traffic spikes automatically"
      ]
    },
    implementation: [
      {
        step: "Cloud Assessment",
        details: "Analyze existing infrastructure, applications, and workloads to determine cloud readiness and migration strategy."
      },
      {
        step: "Architecture Design",
        details: "Design cloud-native or hybrid architectures optimized for performance, security, and cost."
      },
      {
        step: "Migration Planning",
        details: "Develop detailed migration roadmap with prioritized workloads and risk mitigation strategies."
      },
      {
        step: "Implementation",
        details: "Execute migration with minimal disruption. Set up monitoring, logging, and security controls."
      },
      {
        step: "Optimization",
        details: "Continuously optimize costs, performance, and resource utilization using cloud management tools."
      }
    ],
    bestPractices: [
      "Design for failure with redundancy and failover mechanisms",
      "Implement robust identity and access management (IAM)",
      "Use infrastructure as code for consistent, repeatable deployments",
      "Monitor costs continuously and set up budget alerts",
      "Leverage managed services to reduce operational overhead",
      "Implement comprehensive logging and monitoring"
    ],
    conclusion: "Cloud platforms provide the foundation for modern, scalable applications. Our multi-cloud expertise ensures you choose the right platform and architecture for your specific needs.",
    tools: ["AWS", "Microsoft Azure", "Google Cloud", "Digital Ocean", "Cloud Foundry", "Serverless"]
  },
  {
    slug: "devops-automation",
    icon: Settings,
    title: "DevOps & Automation",
    category: "DEVOPS ENGINEERING",
    description: "Modern DevOps practices enabling continuous integration, delivery, and infrastructure automation.",
    introduction: "Accelerate your software delivery with modern DevOps practices. Our expertise in Kubernetes, Docker, and CI/CD pipelines ensures faster deployments, improved reliability, and seamless automation across your entire development lifecycle.",
    keyFeatures: [
      "Continuous Integration and Continuous Deployment (CI/CD)",
      "Container orchestration with Kubernetes and Docker",
      "Infrastructure as Code (IaC) automation",
      "Automated testing and quality assurance",
      "Configuration management and deployment automation",
      "Monitoring, logging, and observability"
    ],
    useCases: [
      {
        title: "CI/CD Pipeline",
        description: "Automate build, test, and deployment processes for faster, more reliable software releases."
      },
      {
        title: "Container Orchestration",
        description: "Manage containerized applications at scale with Kubernetes for high availability and resource efficiency."
      },
      {
        title: "Infrastructure Automation",
        description: "Automate infrastructure provisioning and configuration using Terraform and Ansible."
      },
      {
        title: "Microservices Deployment",
        description: "Deploy and manage microservices architectures with automated scaling and service discovery."
      }
    ],
    benefits: {
      heading: "DevOps Transformation Results",
      description: "Organizations adopting DevOps practices experience dramatic improvements:",
      metrics: [
        "200x faster deployment frequency compared to traditional methods",
        "24x faster recovery from failures with automated rollbacks",
        "3x lower change failure rate through automated testing",
        "50% reduction in time spent on manual operations",
        "Improved collaboration between development and operations teams"
      ]
    },
    implementation: [
      {
        step: "Current State Analysis",
        details: "Assess existing development and deployment processes, identify bottlenecks and improvement areas."
      },
      {
        step: "Tool Selection",
        details: "Choose appropriate DevOps tools based on team size, technology stack, and organizational needs."
      },
      {
        step: "Pipeline Setup",
        details: "Implement automated CI/CD pipelines with testing, security scanning, and deployment automation."
      },
      {
        step: "Team Training",
        details: "Train teams on DevOps practices, tools, and cultural transformation for successful adoption."
      },
      {
        step: "Continuous Improvement",
        details: "Measure metrics, gather feedback, and continuously optimize processes and tooling."
      }
    ],
    bestPractices: [
      "Automate everything from code commit to production deployment",
      "Implement comprehensive automated testing at all levels",
      "Use feature flags for safer, incremental rollouts",
      "Monitor application and infrastructure health continuously",
      "Practice infrastructure as code for consistency",
      "Foster a culture of shared responsibility and collaboration"
    ],
    conclusion: "DevOps and automation are essential for modern software delivery. Our expertise helps organizations achieve faster release cycles, higher quality, and improved team collaboration.",
    tools: ["Kubernetes", "Docker", "Terraform", "Jenkins", "GitHub Actions", "ArgoCD", "Ansible", "Prometheus"]
  },
  {
    slug: "data-engineering",
    icon: Database,
    title: "Data Engineering",
    category: "DATA & ANALYTICS",
    description: "Robust data platforms for real-time processing, analytics, and business intelligence at scale.",
    introduction: "Build scalable data platforms that transform raw data into actionable insights. Our data engineering solutions leverage Apache Kafka, Spark, and modern data warehouses to enable real-time analytics and data-driven decision making.",
    keyFeatures: [
      "Real-time data streaming and processing",
      "Data lake and warehouse architecture",
      "ETL/ELT pipeline development and orchestration",
      "Big data processing with distributed computing",
      "Data quality monitoring and validation",
      "Business intelligence and analytics integration"
    ],
    useCases: [
      {
        title: "Real-Time Analytics",
        description: "Process and analyze streaming data in real-time for immediate business insights and actions."
      },
      {
        title: "Data Warehousing",
        description: "Build modern data warehouses that consolidate data from multiple sources for comprehensive analytics."
      },
      {
        title: "Big Data Processing",
        description: "Handle petabyte-scale data processing with distributed computing frameworks like Spark and Hadoop."
      },
      {
        title: "Customer 360",
        description: "Create unified customer views by integrating data from CRM, marketing, sales, and support systems."
      }
    ],
    benefits: {
      heading: "Data-Driven Business Value",
      description: "Modern data platforms enable organizations to unlock the full value of their data:",
      metrics: [
        "5x faster query performance with optimized data architectures",
        "80% reduction in data preparation time with automated pipelines",
        "Real-time insights instead of days-old batch reports",
        "50% reduction in data storage costs through optimization",
        "Improved decision-making with self-service analytics"
      ]
    },
    implementation: [
      {
        step: "Data Strategy",
        details: "Define data requirements, governance policies, and architecture based on business objectives."
      },
      {
        step: "Platform Design",
        details: "Design scalable data platform architecture including ingestion, storage, processing, and serving layers."
      },
      {
        step: "Pipeline Development",
        details: "Build automated data pipelines with orchestration, monitoring, and error handling."
      },
      {
        step: "Data Quality",
        details: "Implement data validation, cleansing, and quality monitoring throughout the pipeline."
      },
      {
        step: "Analytics Integration",
        details: "Connect BI tools and enable self-service analytics for business users."
      }
    ],
    bestPractices: [
      "Design for data quality from the start with validation and monitoring",
      "Implement data governance and security controls",
      "Use modern data formats like Parquet for efficient storage",
      "Optimize for query performance with proper indexing and partitioning",
      "Automate data pipeline orchestration and monitoring",
      "Document data lineage and business definitions"
    ],
    conclusion: "Data engineering is the foundation of data-driven organizations. Our expertise in building scalable, reliable data platforms ensures your data becomes a strategic asset.",
    tools: ["Apache Kafka", "Apache Spark", "Hadoop", "Snowflake", "Databricks", "Airflow", "Elasticsearch"]
  },
  {
    slug: "security-compliance",
    icon: Shield,
    title: "Security & Compliance",
    category: "CYBERSECURITY",
    description: "Enterprise-grade security solutions ensuring data protection, compliance, and risk management.",
    introduction: "Protect your digital assets with comprehensive security solutions. We implement multi-layered security frameworks, ensure regulatory compliance, and maintain robust threat detection systems to safeguard your enterprise infrastructure.",
    keyFeatures: [
      "Multi-layered security architecture and defense in depth",
      "Identity and access management (IAM) solutions",
      "Security Information and Event Management (SIEM)",
      "Vulnerability assessment and penetration testing",
      "Compliance management and audit readiness",
      "Incident response and threat intelligence"
    ],
    useCases: [
      {
        title: "Zero Trust Security",
        description: "Implement zero-trust architecture with continuous verification and least-privilege access controls."
      },
      {
        title: "Compliance Automation",
        description: "Automate compliance monitoring and reporting for GDPR, HIPAA, SOC 2, and other regulations."
      },
      {
        title: "Threat Detection",
        description: "Deploy AI-powered threat detection systems that identify and respond to security incidents in real-time."
      },
      {
        title: "Data Protection",
        description: "Secure sensitive data with encryption, tokenization, and secure key management solutions."
      }
    ],
    benefits: {
      heading: "Security & Compliance Benefits",
      description: "Robust security practices protect your business and build customer trust:",
      metrics: [
        "99% reduction in security incidents with proactive monitoring",
        "75% faster incident response with automated playbooks",
        "100% compliance with industry regulations and standards",
        "50% reduction in audit preparation time with continuous compliance",
        "Enhanced customer trust through demonstrated security commitment"
      ]
    },
    implementation: [
      {
        step: "Security Assessment",
        details: "Conduct comprehensive security audit to identify vulnerabilities and compliance gaps."
      },
      {
        step: "Framework Selection",
        details: "Choose appropriate security frameworks (NIST, ISO 27001) based on regulatory requirements."
      },
      {
        step: "Controls Implementation",
        details: "Deploy security controls including firewalls, encryption, IAM, and monitoring systems."
      },
      {
        step: "Compliance Program",
        details: "Establish compliance program with policies, procedures, and continuous monitoring."
      },
      {
        step: "Security Operations",
        details: "Set up 24/7 security operations center (SOC) with incident response capabilities."
      }
    ],
    bestPractices: [
      "Implement defense in depth with multiple security layers",
      "Enforce principle of least privilege for all access",
      "Encrypt data at rest and in transit",
      "Regularly test security controls and incident response",
      "Maintain comprehensive audit logs and security monitoring",
      "Provide security awareness training for all employees"
    ],
    conclusion: "Security and compliance are critical for modern enterprises. Our comprehensive approach ensures your organization maintains robust security posture while meeting all regulatory requirements.",
    tools: ["CrowdStrike", "Vault", "Okta", "Auth0", "Splunk", "Snyk", "Aqua Security", "Fortinet"]
  },
  {
    slug: "development-frameworks",
    icon: Code2,
    title: "Development Frameworks",
    category: "SOFTWARE DEVELOPMENT",
    description: "Modern development frameworks for building scalable web and mobile applications.",
    introduction: "Create powerful applications with industry-leading frameworks. Our development teams master React, Angular, Node.js, and modern frameworks to build responsive, scalable, and maintainable applications that deliver exceptional user experiences.",
    keyFeatures: [
      "Component-based architecture for reusability",
      "Responsive and progressive web applications",
      "Server-side rendering and static site generation",
      "API-first development approach",
      "Real-time features with WebSockets",
      "Cross-platform compatibility"
    ],
    useCases: [
      {
        title: "Enterprise Web Applications",
        description: "Build complex, feature-rich web applications that scale to millions of users."
      },
      {
        title: "E-Commerce Platforms",
        description: "Create fast, secure online shopping experiences with seamless checkout flows."
      },
      {
        title: "SaaS Products",
        description: "Develop multi-tenant SaaS applications with subscription management and analytics."
      },
      {
        title: "Customer Portals",
        description: "Build self-service portals that improve customer engagement and reduce support costs."
      }
    ],
    benefits: {
      heading: "Modern Development Benefits",
      description: "Using modern frameworks accelerates development and improves quality:",
      metrics: [
        "50% faster development time with reusable components",
        "Better user experiences with responsive, interactive interfaces",
        "Easier maintenance with clean, modular code architecture",
        "Improved performance with optimized rendering",
        "Strong ecosystem support with extensive libraries"
      ]
    },
    implementation: [
      {
        step: "Requirements Analysis",
        details: "Understand business requirements, user needs, and technical constraints."
      },
      {
        step: "Framework Selection",
        details: "Choose appropriate framework based on project requirements and team expertise."
      },
      {
        step: "Architecture Design",
        details: "Design application architecture with scalability, maintainability, and security in mind."
      },
      {
        step: "Development & Testing",
        details: "Implement features iteratively with continuous testing and code reviews."
      },
      {
        step: "Deployment & Monitoring",
        details: "Deploy to production with automated pipelines and comprehensive monitoring."
      }
    ],
    bestPractices: [
      "Follow framework best practices and coding standards",
      "Implement comprehensive testing (unit, integration, E2E)",
      "Optimize bundle size and loading performance",
      "Ensure accessibility (WCAG) compliance",
      "Use TypeScript for type safety and better tooling",
      "Maintain clear documentation and code comments"
    ],
    conclusion: "Modern development frameworks enable faster, more reliable application development. Our expertise ensures you leverage the right tools and patterns for your specific needs.",
    tools: ["React", "Angular", "Vue.js", "Node.js", "Next.js", "Django", "Spring Boot", ".NET Core"]
  },
  {
    slug: "mobile-development",
    icon: Smartphone,
    title: "Mobile Development",
    category: "MOBILE TECHNOLOGY",
    description: "Native and cross-platform mobile solutions delivering exceptional user experiences.",
    introduction: "Build mobile applications that users love. Whether native iOS and Android or cross-platform solutions using React Native and Flutter, we create mobile experiences that are fast, intuitive, and engaging across all devices.",
    keyFeatures: [
      "Native iOS and Android development",
      "Cross-platform frameworks (React Native, Flutter)",
      "Responsive and adaptive UI design",
      "Offline-first architecture",
      "Push notifications and real-time updates",
      "App store optimization and deployment"
    ],
    useCases: [
      {
        title: "Consumer Apps",
        description: "Build engaging consumer applications with millions of active users and high app store ratings."
      },
      {
        title: "Enterprise Mobile",
        description: "Develop secure enterprise apps for field workers, sales teams, and remote employees."
      },
      {
        title: "Mobile Commerce",
        description: "Create mobile shopping experiences with seamless payments and personalized recommendations."
      },
      {
        title: "Health & Fitness",
        description: "Build health tracking apps with wearable integration and data synchronization."
      }
    ],
    benefits: {
      heading: "Mobile Development Benefits",
      description: "Mobile applications extend your reach and engage users wherever they are:",
      metrics: [
        "Reach billions of mobile users worldwide",
        "60% lower development costs with cross-platform frameworks",
        "Better user engagement with native mobile features",
        "Offline functionality for uninterrupted access",
        "Push notifications for increased user retention"
      ]
    },
    implementation: [
      {
        step: "Platform Strategy",
        details: "Choose between native and cross-platform based on requirements, budget, and timeline."
      },
      {
        step: "UX/UI Design",
        details: "Design mobile-first interfaces following platform guidelines (iOS Human Interface, Material Design)."
      },
      {
        step: "Development",
        details: "Build features iteratively with continuous testing on real devices and emulators."
      },
      {
        step: "Testing & QA",
        details: "Test across multiple devices, OS versions, and screen sizes for compatibility."
      },
      {
        step: "Deployment",
        details: "Submit to App Store and Google Play with proper app store optimization."
      }
    ],
    bestPractices: [
      "Follow platform-specific design guidelines",
      "Optimize for battery life and performance",
      "Implement proper data caching and offline support",
      "Secure sensitive data with encryption",
      "Test on real devices, not just emulators",
      "Monitor app crashes and performance in production"
    ],
    conclusion: "Mobile development is essential for modern businesses. Our expertise in both native and cross-platform development ensures your app delivers exceptional experiences.",
    tools: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Xamarin", "Ionic"]
  },
  {
    slug: "backend-technologies",
    icon: Server,
    title: "Backend Technologies",
    category: "BACKEND DEVELOPMENT",
    description: "High-performance backend systems built with industry-leading languages and frameworks.",
    introduction: "Power your applications with robust backend systems. Our engineers build scalable, secure, and high-performance server-side solutions using Java, Python, Go, and modern frameworks that handle millions of transactions.",
    keyFeatures: [
      "RESTful and GraphQL API development",
      "Microservices and distributed architectures",
      "Database design and optimization",
      "Authentication and authorization",
      "Caching and performance optimization",
      "Message queues and asynchronous processing"
    ],
    useCases: [
      {
        title: "API Backends",
        description: "Build robust API backends that power web and mobile applications with high availability."
      },
      {
        title: "Real-time Systems",
        description: "Develop real-time backends for chat applications, live dashboards, and collaborative tools."
      },
      {
        title: "Payment Processing",
        description: "Implement secure payment gateways with transaction processing and fraud detection."
      },
      {
        title: "Content Management",
        description: "Create headless CMS backends that power multi-channel content delivery."
      }
    ],
    benefits: {
      heading: "Backend Excellence Benefits",
      description: "Well-architected backends provide the foundation for scalable applications:",
      metrics: [
        "Handle millions of concurrent users with proper scaling",
        "99.99% API uptime with redundancy and failover",
        "Sub-100ms response times with optimization",
        "Secure by design with industry best practices",
        "Easy to maintain and extend over time"
      ]
    },
    implementation: [
      {
        step: "Architecture Planning",
        details: "Design backend architecture considering scalability, security, and maintainability requirements."
      },
      {
        step: "Technology Selection",
        details: "Choose appropriate programming language and frameworks based on use case and team expertise."
      },
      {
        step: "API Design",
        details: "Design RESTful or GraphQL APIs with clear documentation and versioning strategy."
      },
      {
        step: "Development & Testing",
        details: "Implement features with comprehensive unit, integration, and load testing."
      },
      {
        step: "Deployment & Monitoring",
        details: "Deploy with CI/CD pipelines and implement comprehensive monitoring and logging."
      }
    ],
    bestPractices: [
      "Design APIs with clear contracts and versioning",
      "Implement proper error handling and logging",
      "Use connection pooling and caching effectively",
      "Secure APIs with authentication and rate limiting",
      "Write comprehensive tests for business logic",
      "Document APIs with OpenAPI/Swagger"
    ],
    conclusion: "Backend development requires expertise in scalability, security, and performance. Our team delivers backend systems that power successful applications.",
    tools: ["Java", "Python", "Go", "C#", "Node.js", "PHP", "Ruby", "Rust"]
  },
  {
    slug: "api-integration",
    icon: Globe,
    title: "API & Integration",
    category: "SYSTEM INTEGRATION",
    description: "Seamless API development and system integration for connected enterprise ecosystems.",
    introduction: "Connect your systems seamlessly with modern API architectures. We design and implement RESTful APIs, GraphQL endpoints, and microservices that enable smooth integration across your entire technology ecosystem.",
    keyFeatures: [
      "RESTful and GraphQL API design",
      "API gateway and management",
      "Service mesh for microservices",
      "Event-driven architecture",
      "Data transformation and mapping",
      "API security and rate limiting"
    ],
    useCases: [
      {
        title: "Enterprise Integration",
        description: "Connect disparate enterprise systems for seamless data flow and business process automation."
      },
      {
        title: "Third-Party APIs",
        description: "Integrate payment gateways, shipping providers, and other third-party services."
      },
      {
        title: "Partner Ecosystems",
        description: "Build API platforms that enable partners to integrate with your services."
      },
      {
        title: "Mobile Backends",
        description: "Create unified API layers that power web, mobile, and IoT applications."
      }
    ],
    benefits: {
      heading: "Integration Benefits",
      description: "Effective API and integration strategies unlock business value:",
      metrics: [
        "80% reduction in manual data entry through automation",
        "Real-time data synchronization across systems",
        "Faster time-to-market for new integrations",
        "Reduced integration maintenance costs",
        "Enable new revenue streams through API platforms"
      ]
    },
    implementation: [
      {
        step: "Integration Assessment",
        details: "Map existing systems, identify integration points, and define requirements."
      },
      {
        step: "API Strategy",
        details: "Define API architecture, standards, and governance policies."
      },
      {
        step: "Development",
        details: "Build APIs and integration layers with proper security and error handling."
      },
      {
        step: "Testing",
        details: "Test integrations end-to-end including error scenarios and edge cases."
      },
      {
        step: "Monitoring",
        details: "Monitor API health, performance, and usage patterns continuously."
      }
    ],
    bestPractices: [
      "Design APIs with consistency and clear documentation",
      "Implement proper versioning and backward compatibility",
      "Use API gateways for centralized management",
      "Secure APIs with OAuth, JWT, and API keys",
      "Monitor API usage and set rate limits",
      "Provide comprehensive API documentation"
    ],
    conclusion: "APIs and integrations are the backbone of modern connected enterprises. Our expertise ensures seamless connectivity across your technology landscape.",
    tools: ["REST API", "GraphQL", "gRPC", "WebSockets", "Apache Camel", "MuleSoft", "Kong", "Apigee"]
  },
  {
    slug: "microservices",
    icon: Layers,
    title: "Microservices",
    category: "ARCHITECTURE & DESIGN",
    description: "Scalable microservices architecture enabling flexible, maintainable enterprise systems.",
    introduction: "Modernize your architecture with microservices. Our architectural patterns enable independent deployment, better scalability, and improved maintainability through service mesh, event-driven design, and distributed systems expertise.",
    keyFeatures: [
      "Domain-driven design principles",
      "Independent service deployment",
      "Service mesh for communication",
      "Event-driven architecture",
      "Distributed tracing and monitoring",
      "Circuit breakers and resilience patterns"
    ],
    useCases: [
      {
        title: "Legacy Modernization",
        description: "Break down monolithic applications into manageable microservices incrementally."
      },
      {
        title: "Scalable Platforms",
        description: "Build platforms that scale individual services based on demand."
      },
      {
        title: "Multi-Team Development",
        description: "Enable multiple teams to work independently on different services."
      },
      {
        title: "Cloud-Native Apps",
        description: "Build cloud-native applications with microservices and containers."
      }
    ],
    benefits: {
      heading: "Microservices Benefits",
      description: "Microservices architecture provides flexibility and scalability:",
      metrics: [
        "Independent scaling of services based on load",
        "Faster deployments with service autonomy",
        "Technology flexibility for different services",
        "Improved fault isolation and resilience",
        "Enable team independence and velocity"
      ]
    },
    implementation: [
      {
        step: "Domain Analysis",
        details: "Identify bounded contexts and define service boundaries using domain-driven design."
      },
      {
        step: "Service Design",
        details: "Design microservices with clear APIs, data ownership, and communication patterns."
      },
      {
        step: "Infrastructure Setup",
        details: "Set up container orchestration, service mesh, and monitoring infrastructure."
      },
      {
        step: "Migration Strategy",
        details: "Plan incremental migration from monolith to microservices if applicable."
      },
      {
        step: "Operations",
        details: "Implement observability, distributed tracing, and automated deployment pipelines."
      }
    ],
    bestPractices: [
      "Start with a monolith, move to microservices when needed",
      "Design services around business capabilities",
      "Implement proper service communication patterns",
      "Use API gateways for external communication",
      "Implement distributed tracing and monitoring",
      "Automate deployment and testing"
    ],
    conclusion: "Microservices enable organizations to build scalable, maintainable systems. Our expertise guides you through successful microservices adoption.",
    tools: ["Service Mesh", "Istio", "Consul", "Spring Cloud", "Event Driven", "CQRS", "Saga Pattern"]
  },
  {
    slug: "iot-edge-computing",
    icon: Cpu,
    title: "IoT & Edge Computing",
    category: "INTERNET OF THINGS",
    description: "Internet of Things solutions with edge computing capabilities for real-time data processing.",
    introduction: "Connect the physical and digital worlds with IoT solutions. Our expertise in edge computing, sensor networks, and real-time data processing enables smart devices and systems that drive operational efficiency.",
    keyFeatures: [
      "IoT device connectivity and management",
      "Edge computing for low-latency processing",
      "Real-time data streaming and analytics",
      "Device provisioning and security",
      "Predictive maintenance",
      "Remote monitoring and control"
    ],
    useCases: [
      {
        title: "Smart Manufacturing",
        description: "Monitor production lines in real-time and predict equipment failures before they occur."
      },
      {
        title: "Smart Cities",
        description: "Deploy IoT sensors for traffic management, waste management, and environmental monitoring."
      },
      {
        title: "Connected Vehicles",
        description: "Build telematics solutions for fleet management and vehicle diagnostics."
      },
      {
        title: "Smart Buildings",
        description: "Implement building automation for energy efficiency and occupant comfort."
      }
    ],
    benefits: {
      heading: "IoT & Edge Computing Benefits",
      description: "IoT and edge computing unlock new operational efficiencies:",
      metrics: [
        "Real-time insights with edge processing",
        "60% reduction in bandwidth costs",
        "Sub-second latency for critical applications",
        "Predictive maintenance reduces downtime by 50%",
        "New revenue streams through connected products"
      ]
    },
    implementation: [
      {
        step: "Use Case Definition",
        details: "Define IoT use cases, device requirements, and connectivity needs."
      },
      {
        step: "Architecture Design",
        details: "Design IoT architecture including devices, edge, cloud, and analytics layers."
      },
      {
        step: "Device Integration",
        details: "Integrate IoT devices with proper security, provisioning, and management."
      },
      {
        step: "Edge Deployment",
        details: "Deploy edge computing infrastructure for real-time processing."
      },
      {
        step: "Monitoring & Analytics",
        details: "Implement monitoring, analytics, and machine learning on IoT data."
      }
    ],
    bestPractices: [
      "Design for intermittent connectivity",
      "Implement device security from the start",
      "Use edge computing for time-sensitive processing",
      "Plan for device lifecycle management",
      "Monitor device health and connectivity",
      "Implement over-the-air updates"
    ],
    conclusion: "IoT and edge computing enable organizations to connect physical assets and extract real-time insights. Our expertise delivers successful IoT implementations.",
    tools: ["Azure IoT", "AWS IoT", "MQTT", "Edge Computing", "Arduino", "Raspberry Pi", "LoRaWAN"]
  },
  {
    slug: "performance-monitoring",
    icon: Zap,
    title: "Performance & Monitoring",
    category: "OBSERVABILITY",
    description: "Advanced monitoring, observability, and performance optimization tools for mission-critical systems.",
    introduction: "Ensure peak performance with comprehensive monitoring solutions. Our observability stack provides real-time insights, predictive analytics, and performance optimization to keep your systems running at peak efficiency.",
    keyFeatures: [
      "Application performance monitoring (APM)",
      "Infrastructure and resource monitoring",
      "Distributed tracing",
      "Log aggregation and analysis",
      "Real-time alerting",
      "Performance optimization"
    ],
    useCases: [
      {
        title: "Production Monitoring",
        description: "Monitor application health, performance, and errors in real-time across all environments."
      },
      {
        title: "Incident Response",
        description: "Quickly identify and resolve issues with comprehensive observability data."
      },
      {
        title: "Capacity Planning",
        description: "Analyze resource utilization trends to plan infrastructure capacity."
      },
      {
        title: "User Experience",
        description: "Track user experience metrics to identify and fix performance bottlenecks."
      }
    ],
    benefits: {
      heading: "Monitoring Benefits",
      description: "Comprehensive monitoring ensures reliability and performance:",
      metrics: [
        "99.99% uptime with proactive monitoring",
        "75% faster incident resolution",
        "50% reduction in performance issues",
        "Better user experience with performance optimization",
        "Reduced costs through capacity optimization"
      ]
    },
    implementation: [
      {
        step: "Monitoring Strategy",
        details: "Define what to monitor, SLOs/SLIs, and alerting thresholds."
      },
      {
        step: "Tool Selection",
        details: "Choose monitoring tools based on technology stack and requirements."
      },
      {
        step: "Instrumentation",
        details: "Instrument applications and infrastructure for comprehensive observability."
      },
      {
        step: "Dashboards & Alerts",
        details: "Create dashboards and configure intelligent alerting rules."
      },
      {
        step: "Continuous Improvement",
        details: "Analyze metrics, optimize performance, and refine monitoring continuously."
      }
    ],
    bestPractices: [
      "Implement the three pillars: metrics, logs, and traces",
      "Define clear SLOs and error budgets",
      "Create actionable alerts, not noise",
      "Use distributed tracing for microservices",
      "Monitor user experience, not just infrastructure",
      "Analyze trends for proactive optimization"
    ],
    conclusion: "Performance and monitoring are essential for reliable systems. Our expertise ensures you have visibility into system health and performance at all times.",
    tools: ["Grafana", "Prometheus", "Datadog", "New Relic", "ELK Stack", "Jaeger", "AppDynamics"]
  }
];

const TechnologyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const technology = technologiesData.find((tech) => tech.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!technology) {
    return (
      <PageLayout>
        <div className="section-padding">
          <div className="enterprise-container text-center">
            <h1 className="heading-1 mb-4">Technology Not Found</h1>
            <button onClick={() => navigate("/technologies")} className="btn-primary">
              Back to Technologies
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const Icon = technology.icon;

  return (
    <PageLayout>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 border border-white/20 rounded-full"></div>
        </div>

        <div className="enterprise-container relative z-10">
          <button
            onClick={() => navigate("/technologies")}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Technologies
          </button>

          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
              {technology.category}
            </span>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Icon className="text-white" size={32} strokeWidth={1.5} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {technology.title}
              </h1>
            </div>

            <p className="text-xl text-white/90 leading-relaxed">
              {technology.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="border-l-4 border-slate-900 bg-slate-50 p-6 rounded-r-lg">
              <p className="text-lg leading-relaxed text-slate-700">{technology.introduction}</p>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Key Features & Capabilities</h2>
            <ul className="space-y-4">
              {technology.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Real-World Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technology.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-slate-300"
                >
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{useCase.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits & ROI */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">{technology.benefits.heading}</h2>
              <p className="text-base text-slate-700 mb-6">{technology.benefits.description}</p>
              <ul className="space-y-3">
                {technology.benefits.metrics.map((metric, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Zap size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-900 font-medium">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Implementation Steps */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Implementation Roadmap</h2>
            <div className="space-y-6">
              {technology.implementation.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.step}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Best Practices */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Best Practices</h2>
              <ul className="space-y-3">
                {technology.bestPractices.map((practice, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Code size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {technology.tools.map((tool, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-100 text-slate-900 text-sm font-medium border border-slate-200 hover:bg-slate-200 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Conclusion</h2>
            <p className="text-base leading-relaxed text-slate-700">{technology.conclusion}</p>
          </motion.div>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-slate-200">
            <p className="text-lg text-slate-700 mb-6">
              Ready to leverage {technology.title} for your business?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/contact")} className="btn-primary">
                Get in Touch
              </button>
              <button onClick={() => navigate("/technologies")} className="btn-secondary">
                ← Back to All Technologies
              </button>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default TechnologyDetail;
