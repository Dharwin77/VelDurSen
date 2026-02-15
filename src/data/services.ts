
import React from 'react';
import {
    Cpu, Smartphone, Database, Cloud, ShieldCheck, Zap
} from "lucide-react";

export interface ServiceFeature {
    title: string;
    description: string;
}

export interface ServiceStep {
    step: string;
    title: string;
    desc: string;
}

export interface ServicePoint {
    title: string;
    description: string;
}

export interface ServiceCategory {
    title: string;
    points: ServicePoint[];
}

export interface Service {
    id: string;
    title: string;
    tagline: string;
    description: string;
    fullDescription: string;
    icon: React.ElementType;
    image: string;
    features: ServiceFeature[];
    methodology: ServiceStep[];
    details: ServiceCategory[];
}

export const servicesData: Service[] = [
    {
        id: "ai",
        title: "Artificial Intelligence",
        tagline: "Intelligent Systems",
        description: "Intelligent systems that learn and adapt. We engineer scalable AI solutions from generative models to predictive analytics.",
        fullDescription: "Our AI practice delivers end-to-end intelligent solutions—from custom large language model fine-tuning to real-time computer vision pipelines. We help enterprises harness the power of machine learning to automate decisions, uncover hidden patterns, and create entirely new product categories.",
        icon: Cpu,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=100&w=1600",
        features: [
            { title: "Custom LLM Training", description: "Fine-tuned language models tailored to your domain and data." },
            { title: "Computer Vision Systems", description: "Image and video analysis pipelines for quality control and recognition." },
            { title: "Predictive Analytics", description: "Data-driven forecasting to anticipate trends and outcomes." },
            { title: "Generative AI Agents", description: "Autonomous agents that create content, code, and designs on demand." },
        ],
        methodology: [
            { step: "01", title: "Automated Customer Support", desc: "AI-powered chatbots and virtual agents that resolve queries 24/7." },
            { step: "02", title: "Fraud Detection Systems", desc: "Real-time anomaly detection to safeguard financial transactions." },
            { step: "03", title: "Supply Chain Forecasting", desc: "Demand prediction models that optimize inventory and logistics." },
            { step: "04", title: "Personalized Recommendations", desc: "Dynamic engines matching users with products they're most likely to buy." },
        ],
        details: [
            {
                title: "Artificial Intelligence",
                points: [
                    { title: "Custom LLM Training", description: "Proprietary Data Integration: We fine-tune models using your unique business datasets and internal documentation." },
                    { title: "RAG Architecture Implementation", description: "Retrieval-Augmented Generation systems to eliminate AI hallucinations and ensure verifiable outputs." },
                    { title: "Data Privacy & On-Premise Hosting", description: "Deploying models within your private cloud ensuring sensitive IP never leaves your control." },
                    { title: "Instruction Tuning & Alignment", description: "Calibrating models to follow complex instructions using Reinforcement Learning from Human Feedback." },
                    { title: "Scalable Inference Optimization", description: "Optimizing model performance with quantization to reduce latency and computational costs." }
                ]
            },
            {
                title: "Computer Vision Systems",
                points: [
                    { title: "Automated Quality Inspection", description: "High-speed visual systems that detect microscopic defects in manufacturing lines 24/7." },
                    { title: "Object Detection & Tracking", description: "Identifying and monitoring multiple objects across complex, real-time video feeds." },
                    { title: "Medical Imaging Diagnostics", description: "Specialized AI assisting radiologists in identifying patterns in X-rays, MRIs, and CT scans." },
                    { title: "Biometric Recognition Solutions", description: "Secure facial and gesture recognition for touchless access control and identity verification." },
                    { title: "Edge AI Video Analytics", description: "Processing visual data locally on camera hardware to reduce bandwidth and latency." }
                ]
            },
            {
                title: "Predictive Analytics",
                points: [
                    { title: "Customer Churn Forecasting", description: "Identify at-risk customers before they leave by analyzing behavioral patterns." },
                    { title: "Demand & Inventory Planning", description: "Predict future sales trends to optimize supply chain and reduce carrying costs." },
                    { title: "Financial Risk Assessment", description: "Evaluate creditworthiness and market volatility using advanced regression models." },
                    { title: "Predictive Maintenance (PdM)", description: "Monitor equipment sensors to predict mechanical failures before they occur." },
                    { title: "Personalized Marketing Engines", description: "Deliver hyper-targeted product recommendations based on user trajectory." }
                ]
            },
            {
                title: "Natural Language Processing",
                points: [
                    { title: "Multilingual Sentiment Analysis", description: "Understand the true pulse of your global audience across social media and reviews." },
                    { title: "Automated Document Extraction", description: "Convert PDFs and images into structured digital data, automating data entry." },
                    { title: "Intelligent Virtual Assistants", description: "Conversational agents that handle complex queries with human-like nuance." },
                    { title: "Content Summarization Tools", description: "Automatically condense long reports and transcripts into brief, actionable summaries." },
                    { title: "Entity Recognition & Tagging", description: "Categorize and link people, places, and organizations to build knowledge graphs." }
                ]
            }
        ]
    },
    {
        id: "web-mobile",
        title: "Web & Mobile App Dev",
        tagline: "Cross-Platform Excellence",
        description: "Seamless digital experiences across all devices using modern frameworks for fast, responsive, and robust applications.",
        fullDescription: "We build performant, user-centric web and mobile applications using cutting-edge frameworks like React, Next.js, and native iOS/Android SDKs. From e-commerce storefronts to enterprise dashboards, our products are engineered for speed, accessibility, and scale.",
        icon: Smartphone,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=100&w=1600",
        features: [
            { title: "React & Next.js Development", description: "Server-rendered and static web apps with blazing-fast performance." },
            { title: "iOS & Android Native Apps", description: "Platform-specific applications for the best user experience." },
            { title: "PWA Implementation", description: "Progressive web apps that work offline and feel native." },
            { title: "Enterprise Design Systems", description: "Unified UI libraries ensuring capability and consistency across all products." },
        ],
        methodology: [
            { step: "01", title: "E-commerce Platforms", desc: "High-conversion storefronts with seamless checkout and inventory." },
            { step: "02", title: "Enterprise Dashboards", desc: "Real-time data visualization tools for executive decision-making." },
            { step: "03", title: "Patient Portals", desc: "HIPAA-compliant healthcare platforms for patient engagement." },
            { step: "04", title: "FinTech Wallets", desc: "Secure mobile banking applications with biometric authentication." },
        ],
        details: [
            {
                title: "React & Next.js Development",
                points: [
                    { title: "Server-Side Rendering (SSR)", description: "Next.js rendering on the server for instant loading and superior SEO indexing." },
                    { title: "Component-Based Architecture", description: "Modular, reusable UI components ensuring visual consistency and scalability." },
                    { title: "Static Site Generation (SSG)", description: "Pre-rendering HTML at build time for maximum performance and security." },
                    { title: "State Management Excellence", description: "Robust data-handling using Redux or React Query for synced user data." },
                    { title: "Vercel & Edge Deployment", description: "Deploying to global edge networks for ultra-low latency worldwide." }
                ]
            },
            {
                title: "iOS & Android Native Apps",
                points: [
                    { title: "Swift & Kotlin Specialization", description: "High-performance code using official languages for full hardware access." },
                    { title: "Platform-Specific UI/UX", description: "Interfaces following Apple and Google guidelines for intuitive user experiences." },
                    { title: "Hardware & API Integration", description: "Seamless connection to GPS, Bluetooth, camera, and biometric systems." },
                    { title: "App Store Optimization (ASO)", description: "Guiding products through submission with optimized descriptions and assets." },
                    { title: "Offline-First Functionality", description: "Local database synchronization ensuring apps work without internet." }
                ]
            },
            {
                title: "PWA Implementation",
                points: [
                    { title: "Installable Web Experience", description: "Websites that install on home screens, bypassing app stores." },
                    { title: "Service Worker Integration", description: "Caching assets for offline use, ensuring instant loading on slow networks." },
                    { title: "Push Notification Support", description: "Re-engaging users with web-based alerts similar to native apps." },
                    { title: "Reduced Development Costs", description: "One high-quality application working across all devices and browsers." },
                    { title: "Automatic Background Updates", description: "Instant updates without waiting for store reviews or user action." }
                ]
            },
            {
                title: "UI/UX Design Systems",
                points: [
                    { title: "Figma Prototyping", description: "Interactive high-fidelity mockups for rapid iteration and feedback." },
                    { title: "Atomic Design Principles", description: "Systems built from atoms to organisms for infinite scalability." },
                    { title: "Accessibility (A11y) Audits", description: "Ensuring WCAG compliance for inclusive digital experiences." },
                    { title: "Brand Identity Integration", description: "Seamless translation of brand guidelines into digital component libraries." },
                    { title: "Motion & Interaction Design", description: "Purposeful animations that guide users and enhance engagement." }
                ]
            }
        ]
    },
    {
        id: "data-engineering",
        title: "Data Engineering",
        tagline: "Data at Scale",
        description: "Robust data pipelines and warehouses that transform raw data into actionable insights for your business intelligence.",
        fullDescription: "We architect modern data platforms that ingest, process, and deliver data at any scale. From ETL pipeline design to real-time streaming architectures, we ensure your organization has the data infrastructure needed to power analytics, AI, and operational reporting.",
        icon: Database,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=100&w=1600",
        features: [
            { title: "ETL Pipeline Design", description: "Automated extract-transform-load workflows for data integration." },
            { title: "Data Warehousing", description: "Centralized repositories optimized for analytical querying." },
            { title: "Real-time Streaming", description: "Event-driven architectures for instant data processing." },
            { title: "Data Governance", description: "Frameworks ensuring data quality, security, and regulatory compliance." },
        ],
        methodology: [
            { step: "01", title: "Real-time Stock Analysis", desc: "Sub-second market data processing for trading platforms." },
            { step: "02", title: "Customer 360 View", desc: "Unified customer profiles aggregated from all touchpoints." },
            { step: "03", title: "IoT Data Ingestion", desc: "High-throughput pipelines for sensor and device telemetry." },
            { step: "04", title: "Regulatory Reporting", desc: "Automated generation of compliance reports for banking and healthcare." },
        ],
        details: [
            {
                title: "ETL Pipeline Design",
                points: [
                    { title: "Automated Data Extraction", description: "Connectors pulling data from APIs and databases, removing manual exports." },
                    { title: "Data Cleaning & Validation", description: "Pipelines stripping duplicates and fixing errors with data quality gates." },
                    { title: "Schema Mapping & Transformation", description: "Transforming raw data into organized structures for high-level analysis." },
                    { title: "Scalable Batch Processing", description: "Handling millions of records overnight without slowing production." },
                    { title: "Error Logging & Alerts", description: "Robust monitoring to detect and fix pipeline failures immediately." }
                ]
            },
            {
                title: "Real-time Streaming",
                points: [
                    { title: "Kafka & Flink Orchestration", description: "Event-driven processing for sub-second responses and low-latency workflows." },
                    { title: "Change Data Capture (CDC)", description: "Syncing databases in real-time as individual records are updated." },
                    { title: "Stream Processing Windows", description: "Analyzing data in finite time slices for trend detection and anomaly alerts." },
                    { title: "Fault-Tolerant Pipelines", description: "Exactly-once processing guarantees ensuring no data loss during system failures." },
                    { title: "Global Topic Distribution", description: "Syncing streams across multi-region clusters for edge processing." }
                ]
            },
            {
                title: "Data Warehousing",
                points: [
                    { title: "Snowflake & BigQuery Setup", description: "Cloud-native warehouses with decoupled storage and compute for infinite scale." },
                    { title: "Automated Data Modeling", description: "Implementing Star or Snowflake schemas for optimized analytical performance." },
                    { title: "Cost-Effective Tiering", description: "Moving cold data to low-cost storage while keeping hot data in fast memory." },
                    { title: "Secure Data Sharing", description: "Safe, granular access control for sharing data with partners or departments." },
                    { title: "Materialized View Optimization", description: "Pre-computing frequently used queries for instant dashboard loading." }
                ]
            }
        ]
    },
    {
        id: "cloud-devops",
        title: "Cloud & DevOps",
        tagline: "Infinite Scale",
        description: "Cloud-native architectures and automated CI/CD pipelines ensuring 99.99% uptime and scalable infrastructure.",
        fullDescription: "We design and manage cloud-native infrastructures on AWS, Azure, and GCP. Our DevOps practice delivers fully automated CI/CD pipelines, container orchestration with Kubernetes, and infrastructure-as-code for resilient, secure, and infinitely scalable systems.",
        icon: Cloud,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=100&w=1600",
        features: [
            { title: "Cloud Architecture", description: "Multi-cloud and hybrid designs for maximum flexibility." },
            { title: "Kubernetes Management", description: "Container orchestration for microservices at scale." },
            { title: "CI/CD Automation", description: "Automated build, test, and deployment pipelines." },
            { title: "Serverless Computing", description: "Event-driven functions that scale to zero to minimize costs." },
        ],
        methodology: [
            { step: "01", title: "Auto-scaling Infrastructure", desc: "Dynamic resource allocation that responds to real-time demand." },
            { step: "02", title: "Multi-region Failover", desc: "Geo-redundant deployments for zero-downtime resilience." },
            { step: "03", title: "DevSecOps Integration", desc: "Security baked into every stage of the delivery pipeline." },
            { step: "04", title: "Cost Optimization", desc: "Continuous monitoring to right-size instances and eliminate waste." },
        ],
        details: [
            {
                title: "Kubernetes Management",
                points: [
                    { title: "Auto-Scaling Infrastructure", description: "Clusters that grow and shrink based on traffic, preventing crashes and saving money." },
                    { title: "Zero-Downtime Deployments", description: "Rolling updates and canary releases ensuring systems stay live during upgrades." },
                    { title: "Service Mesh Implementation", description: "Istio or Linkerd for secure, visible, and resilient inter-service communication." },
                    { title: "Multi-Cluster Orchestration", description: "Managing applications across multiple Kubernetes clusters for global reach." },
                    { title: "GitOps Workflows", description: "ArgoCD or Flux integration for declarative state management via Git." }
                ]
            },
            {
                title: "CI/CD Automation",
                points: [
                    { title: "Automated Testing Suites", description: "Unit, integration, and E2E tests executing on every commit for rapid feedback." },
                    { title: "Infrastructure as Code (IaC)", description: "Terraform and CloudFormation templates for reproducible, versioned hardware." },
                    { title: "Security Vulnerability Scanning", description: "Automated container and dependency audits within the build pipeline." },
                    { title: "Automated Deployment Gates", description: "Approval workflows and health checks before production promotion." },
                    { title: "Artifact Management", description: "Centralized Docker and NPM registries for versioned, immutable releases." }
                ]
            }
        ]
    },
    {
        id: "cyber-security",
        title: "Cyber Security",
        tagline: "Zero-Trust Defense",
        description: "Military-grade security protocols and zero-trust architectures to protect your digital assets against evolving threats.",
        fullDescription: "Our cybersecurity practice provides comprehensive protection through penetration testing, compliance auditing, and identity management. We implement zero-trust architectures and continuous monitoring to safeguard your organization against the most sophisticated threats.",
        icon: ShieldCheck,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=100&w=1600",
        features: [
            { title: "Penetration Testing", description: "Simulated attacks to identify and remediate vulnerabilities." },
            { title: "SOC2 & GDPR Compliance", description: "End-to-end regulatory compliance programs." },
            { title: "Identity Management", description: "Robust authentication and authorization frameworks." },
            { title: "Cloud Security Posture", description: "Protecting cloud infrastructure from misconfiguration and lateral movement." },
        ],
        methodology: [
            { step: "01", title: "Data Breach Prevention", desc: "Proactive threat hunting and intrusion detection systems." },
            { step: "02", title: "Identity Access Management", desc: "Role-based access control and single sign-on solutions." },
            { step: "03", title: "Compliance Auditing", desc: "Continuous compliance monitoring and certification support." },
            { step: "04", title: "Incident Response", desc: "Rapid containment and forensic analysis of security breaches." },
        ],
        details: [
            {
                title: "Penetration Testing",
                points: [
                    { title: "Simulated Cyber Attacks", description: "Ethical hacks finding cracks in digital perimeters using real-world tools." },
                    { title: "Social Engineering Drills", description: "Phishing and physical bypass testing to evaluate employee awareness." },
                    { title: "API Vulnerability Research", description: "Stress-testing public endpoints for logic flaws and data leaks." },
                    { title: "Wireless & Network Audit", description: "Securing internal protocols against man-in-the-middle and sniffing attacks." },
                    { title: "Detailed Remediate Roadmap", description: "Actionable engineering plans to fix every discovered vulnerability." }
                ]
            },
            {
                title: "Zero-Trust Architecture",
                points: [
                    { title: "Identity-First Perimeter", description: "Verifying every user and device regardless of their physical location." },
                    { title: "Micro-Segmentation", description: "Isolating network segments to prevent lateral movement of attackers." },
                    { title: "Least-Privilege Access", description: "Granting the minimum access necessary for users to perform their roles." },
                    { title: "Adaptive Authentication", description: "MFA and biometric triggers based on risk scores and user behavior." },
                    { title: "Encryption Everywhere", description: "AES-256 for data at rest and TLS 1.3 for data in transit by default." }
                ]
            }
        ]
    },
    {
        id: "automation",
        title: "Automation & Integration",
        tagline: "Connect & Automate",
        description: "Connecting disparate systems and automating manual workflows to streamline operations and eliminate silos.",
        fullDescription: "We break down operational silos by integrating your systems through custom APIs, robotic process automation, and legacy modernization. Our solutions eliminate manual bottlenecks, reduce errors, and free your teams to focus on high-value work.",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=100&w=1600",
        features: [
            { title: "API Development", description: "Custom RESTful and GraphQL APIs for seamless connectivity." },
            { title: "RPA Solutions", description: "Software robots that automate repetitive business tasks." },
            { title: "Legacy Modernization", description: "Migrating outdated systems to modern, maintainable platforms." },
            { title: "Business Process Automation", description: "End-to-end orchestration of complex, human-in-the-loop workflows." },
        ],
        methodology: [
            { step: "01", title: "Invoice Processing", desc: "End-to-end automation of accounts payable workflows." },
            { step: "02", title: "HR Onboarding", desc: "Streamlined employee onboarding with automated provisioning." },
            { step: "03", title: "Inventory Synchronization", desc: "Real-time stock synchronization across all sales channels." },
            { step: "04", title: "Support Ticket Routing", desc: "AI classification and routing of customer issues to the right teams." },
        ],
        details: [
            {
                title: "API Development",
                points: [
                    { title: "RESTful & GraphQL Experts", description: "Flexible interfaces allowing different software systems to communicate." },
                    { title: "Webhook Orchestration", description: "Real-time event notifications between systems for instant synchronization." },
                    { title: "API Gateway Management", description: "Rate limiting, caching, and authentication layers for public APIs." },
                    { title: "Payload Transformation", description: "Mapping data between legacy formats (XML/SOAP) and modern JSON." },
                    { title: "Swagger/OpenAPI Docs", description: "Verifiable, interactive documentation for developer self-service." }
                ]
            },
            {
                title: "Business Process Automation",
                points: [
                    { title: "State-Machine Workflows", description: "Complex, multi-step processes with error handling and human-in-the-loop." },
                    { title: "Legacy System Wrappers", description: "Adding modern interfaces to old mainframes without core code changes." },
                    { title: "Automated Data Migration", description: "Safe, verifiable transfer of records between old and new platforms." },
                    { title: "Real-time Dashboarding", description: "Monitoring automation health and business impact live." },
                    { title: "Zero-Error Reconciliation", description: "Automated audit logs comparing data across integrated systems." }
                ]
            }
        ]
    }
];
