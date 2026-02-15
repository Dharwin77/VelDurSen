import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Briefcase, Cpu, Layers, Zap, CheckCircle2,
  TrendingUp, ShieldCheck, Quote, ChevronLeft,
  ChevronRight, Smartphone, Database, Cloud, Globe2,
  Target, Award, Infinity, Leaf, Handshake
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import serviceVideo from "@/assets/service.mp4";
import hudVideo from "@/assets/Futuristic_interface_HUD_sound_effects_720P.mp4";
import cyberVideo from "@/assets/cyber_security_stock_footage_-_free_video_cyber_security_background_1080p.mp4";

import consultationImg from "@/assets/Gemini_Generated_Image_ello0sello0sello.png";
import developmentImg from "@/assets/Gemini_Generated_Image_zh56h0zh56h0zh56.png";
import maintenanceImg from "@/assets/blog-7.png";
import securityImg from "@/assets/blog-6.png";
import supportImg from "@/assets/Gemini_Generated_Image_uugaqruugaqruuga.png";

// Industries Imports
import industryVideo from "@/assets/industry.mp4";
import aboutTeam from "@/assets/about-team.jpg";
import industryImg1 from "@/assets/Gemini_Generated_Image_ello0sello0sello.png";
import industryImg2 from "@/assets/Gemini_Generated_Image_zh56h0zh56h0zh56.png";
import manufacturingImg from "@/assets/industries/manufacturing.jpg";
import retailMainImg from "@/assets/industries/retail-main.jpg";
import retailDetailImg from "@/assets/industries/retail-detail.jpg";
import smartFarmingImg from "@/assets/industries/smart-farming.jpg";
import globalMapImg from "@/assets/global-map.jpg";

// Technologies Imports
import technologyVideo from "@/assets/technology.mp4";
import aiBg from "@/assets/blog-10.png";
import cloudBg from "@/assets/blog-2.png";
import securityBg from "@/assets/blog-9.png";
import dataBg from "@/assets/blog-8.png";
import sustainBg from "@/assets/Gemini_Generated_Image_uugaqruugaqruuga.png";
import ecosystemBg from "@/assets/Gemini_Generated_Image_zh56h0zh56h0zh56.png";
import ctaBg from "@/assets/Gemini_Generated_Image_ello0sello0sello.png";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import {
  Heart, GraduationCap, Factory, Landmark, ShoppingCart,
  Building2, Sprout, BarChart3, Lightbulb, Activity, Microscope,
  Brain, RefreshCcw, Sparkles, Network, Droplets, FlaskConical, ArrowRightLeft
} from "lucide-react";



// --- Helper Components ---

const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  React.useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);

      setCount(Math.floor(end * percentage));

      if (progress < duration * 1000) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={nodeRef}>{count}</span>;
};


// --- Interfaces ---

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

// --- Data ---

export const services: Service[] = [
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
          { title: "Figma Prototyping", description: "Interactive high-fidelity prototypes to validate flows before coding." },
          { title: "Accessibility (WCAG) Compliance", description: "Ensuring applications are usable by people with disabilities." },
          { title: "Atomic Design Principles", description: "Building interfaces from basic elements to complex pages." },
          { title: "Design Tokens Integration", description: "Synchronizing design values directly to CSS for perfect implementation." },
          { title: "User Testing & Research", description: "Validating assumptions with real users to minimize UX friction." }
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
        title: "Data Warehousing",
        points: [
          { title: "Centralized Truth Source", description: "Aggregating data from all departments into a single source of truth." },
          { title: "Columnar Storage Optimization", description: "Architecting warehouses on Snowflake/BigQuery for massive query speed." },
          { title: "Cost-Efficient Scaling", description: "Separating storage from compute to keep monthly infrastructure bills low." },
          { title: "Historical Data Archiving", description: "Maintaining complete history for time-travel queries and auditing." },
          { title: "Secure Data Sharing", description: "Granular access controls for sharing data with partners securely." }
        ]
      },
      {
        title: "Real-time Streaming",
        points: [
          { title: "Low-Latency Event Processing", description: "Using Apache Kafka to process data events the millisecond they occur." },
          { title: "Live Dashboard Integration", description: "Connecting streaming data to tools like Grafana for instant visibility." },
          { title: "Stream-to-Store Architecture", description: "Capturing real-time data while simultaneously archiving for long-term study." },
          { title: "Complex Event Processing", description: "Identifying patterns across multiple data streams to trigger automated alerts." },
          { title: "Micro-Batching for Efficiency", description: "Balancing speed with cost by grouping events into efficient chunks." }
        ]
      },
      {
        title: "Data Governance",
        points: [
          { title: "Data Cataloging", description: "Indexing all data assets so teams can easily find what they need." },
          { title: "Lineage Tracking", description: "Visualizing exactly where data comes from and how it changes." },
          { title: "Quality Monitoring", description: "Automated tests that alert you if data quality drops below standards." },
          { title: "Access Control Audits", description: "Regular reviews of who can see sensitive data to prevent leaks." },
          { title: "Master Data Management", description: "Ensuring key entities like 'Customer' are defined consistently everywhere." }
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
          { title: "Self-Healing Applications", description: "Automatically restarting failed containers to ensure high availability." },
          { title: "Zero-Downtime Deployments", description: "Rolling updates that swap versions without service gaps." },
          { title: "Multi-Cloud Portability", description: "Standardized frameworks allowing movement between AWS, Azure, or on-prem." },
          { title: "Resource Optimization", description: "Fine-tuning CPU and memory limits to maximize server density and reduce costs." }
        ]
      },
      {
        title: "CI/CD Automation",
        points: [
          { title: "Automated Testing Suites", description: "Verifying every line of code for bugs before merging to prevent regressions." },
          { title: "Standardized Release Cycles", description: "Predictable, automated paths from dev to prod, eliminating manual errors." },
          { title: "Automated Security Scanning", description: "Vulnerability checks integrated directly into the delivery pipeline." },
          { title: "One-Click Rollbacks", description: "Instant reversion to previous versions to minimize impact of issues." },
          { title: "Environment Consistency", description: "Staging environments that perfectly mirror production to remove guesswork." }
        ]
      },
      {
        title: "Cloud Infrastructure Design",
        points: [
          { title: "Well-Architected Framework", description: "Applying AWS/Azure best practices for security, reliability, and efficiency." },
          { title: "Hybrid Cloud Connectivity", description: "Seamlessly linking on-premise data centers with public cloud resources." },
          { title: "Serverless Architectures", description: "Building applications on Lambda/Functions to remove server management entirely." },
          { title: "Infrastructure as Code (IaC)", description: "Defining entire environments in Terraform for reproducible deployments." },
          { title: "Disaster Recovery Planning", description: "Strategizing backups and failovers to ensure business continuity." }
        ]
      },
      {
        title: "Observability & Monitoring",
        points: [
          { title: "Distributed Tracing", description: "Tracking requests as they jump between microservices to pinpoint latency." },
          { title: "Log Aggregation", description: "Centralizing logs from all servers to debug issues faster." },
          { title: "Real-Time Metrics", description: "Dashboards showing CPU, memory, and error rates second-by-second." },
          { title: "Smart Alerting", description: "Notifying engineers only when real problems occur, avoiding alert fatigue." },
          { title: "Cost Intelligence", description: "Analyzing cloud bills to identify exactly which services are driving costs." }
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
          { title: "Web Application Audits", description: "Probing apps for flaws like SQL injection and XSS to prevent data breaches." },
          { title: "Social Engineering Tests", description: "Testing staff resilience against phishing to build a human firewall." },
          { title: "Network Perimeter Scanning", description: "Analyzing firewalls to ensure no backdoors are left open." },
          { title: "Post-Exploit Analysis", description: "Demonstrating how far a hacker could go to prioritize security spending." }
        ]
      },
      {
        title: "SOC2 & GDPR Compliance",
        points: [
          { title: "Automated Compliance Tracking", description: "Monitoring security status against legal standards 24/7." },
          { title: "Data Privacy Mapping", description: "Identifying exactly where sensitive data lives to prevent leaks." },
          { title: "Policy & Procedure Drafting", description: "Writing required security playbooks for audits and enterprise contracts." },
          { title: "Encryption at Rest & Transit", description: "Ensuring customer data is unreadable to unauthorized users." },
          { title: "Vendor Risk Management", description: "Evaluating third-party tool security to secure the supply chain." }
        ]
      },
      {
        title: "Identity & Access Management",
        points: [
          { title: "Single Sign-On (SSO)", description: "Unifying access to all company apps with one secure credential." },
          { title: "Multi-Factor Authentication", description: "Enforcing stronger verification to block stolen password attacks." },
          { title: "Role-Based Access Control", description: "Granting employees exactly the permissions they need and nothing more." },
          { title: "Privileged Access Management", description: "Strictly monitoring and rotating passwords for admin accounts." },
          { title: "User Lifecycle Management", description: "Automating onboarding and offboarding to ensure access is revoked instantly." }
        ]
      },
      {
        title: "Cloud Security",
        points: [
          { title: "Misconfiguration Detection", description: "Scanning cloud environments for open buckets and weak permissions." },
          { title: "Container Security", description: "Protecting Docker/Kubernetes environments from runtime threats." },
          { title: "Micro-Segmentation", description: "Isolating workloads so an infection in one can't spread to others." },
          { title: "Secret Management", description: "Safely storing API keys and certificates in focused vaults." },
          { title: "Compliance Reporting", description: "Generating real-time reports for auditors covering cloud controls." }
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
          { title: "Comprehensive Documentation", description: "Swagger/Redoc pages to speed up third-party integrations." },
          { title: "Secure Authentication Layers", description: "Protecting data with OAuth2, JWT, and API Key management." },
          { title: "Version Control Strategy", description: "Designing APIs that don't break with updates." },
          { title: "Legacy Wrapper Services", description: "Building modern API layers on top of old software to connect legacy databases." }
        ]
      },
      {
        title: "RPA Solutions",
        points: [
          { title: "Repetitive Task Automation", description: "Bots mimicking human clicks to move data between systems without APIs." },
          { title: "Invoice & Form Processing", description: "AI reading emails and entering data into ERPs with zero errors." },
          { title: "24/7 Virtual Workforce", description: "Bots running heavy processing overnight to expand capacity." },
          { title: "Audit Trail & Logging", description: "Recording every bot action for better oversight than manual entry." },
          { title: "Rapid ROI Implementation", description: "Quick deployment providing immediate savings in time and labor." }
        ]
      },
      {
        title: "Legacy System Modernization",
        points: [
          { title: "Cloud Migration", description: "Moving on-premise servers to elastic cloud infrastructure." },
          { title: "Monolith Decomposition", description: "Breaking massive applications into manageable microservices." },
          { title: "Database Refactoring", description: "Optimizing old schemas for modern performance and scale." },
          { title: "UI/UX Refresh", description: "Putting modern, accessible front-ends on robust legacy back-ends." },
          { title: "Codebase Remediation", description: "Updating old languages and libraries to fix security vulnerabilities." }
        ]
      },
      {
        title: "Workflow Orchestration",
        points: [
          { title: "Cross-System Triggers", description: "Events in one app automatically starting actions in three others." },
          { title: "Human-in-the-Loop", description: "Seamlessly allowing approvals and manual review within automated flows." },
          { title: "Visual Process Design", description: "Mapping out complex logic in clear diagrams that execute as code." },
          { title: "SLA Monitoring", description: "Tracking how long processes take and alerting if they stall." },
          { title: "Error Handling & Retries", description: "Robust logic to handle network glitches without dropping data." }
        ]
      }
    ]
  }
];

const reviews = [
  {
    quote: "They didn't just consult; they executed. The transformation in our operational efficiency was immediate and measurable.",
    author: "CP",
    role: "Client Partner",
    company: "Global Logistics Firm",
    color: "from-blue-400 to-purple-500"
  },
  {
    quote: "A game-changer for our digital strategy. The ROI was evident within the first quarter.",
    author: "SJ",
    role: "CTO",
    company: "FinTech Corp",
    color: "from-emerald-400 to-teal-500"
  },
  {
    quote: "Their security audit saved us from a potential breach. Highly recommended for enterprise-grade protection.",
    author: "MT",
    role: "CISO",
    company: "HealthData Systems",
    color: "from-red-400 to-orange-500"
  },
  {
    quote: "Seamless integration of AI into our workflow. The team is incredibly knowledgeable and professional.",
    author: "ER",
    role: "COO",
    company: "EduTech Solutions",
    color: "from-indigo-400 to-cyan-500"
  },
  {
    quote: "We achieved sustainable growth targets 2 years ahead of schedule thanks to their strategic roadmap.",
    author: "DK",
    role: "CEO",
    company: "GreenEnergy Inc.",
    color: "from-lime-400 to-green-500"
  }
];

const whyChooseUsData = [
  {
    icon: TrendingUp,
    title: "1. Proven Track Record of Excellence",
    description: "Excellence isn’t a one-time achievement; it’s a standard we’ve maintained across hundreds of complex deployments. We don't just point to a list of logos—we point to the years of partnership that followed the initial \"go-live.\"",
    note: "Our history is built on high-stakes environments where downtime isn't an option and \"good enough\" is a failure. Whether it’s navigating regulatory hurdles or scaling infrastructure by 400%, our track record is defined by the stability we provide under pressure."
  },
  {
    icon: Infinity,
    title: "2. End-to-End Expertise",
    description: "Most vendors hand off a project the moment the code is pushed. We operate on the principle of continuous stewardship.",
    note: "Strategy: We start by interrogating the \"why\" behind technological decisions. Integration: We specialize in connecting modern tools with legacy systems without breaking workflows. Optimization: We don't just support your system; we evolve it, identifying bottlenecks before they impact your bottom line."
  },
  {
    icon: Zap,
    title: "3. Innovation at Scale",
    description: "Innovation is easy in a lab; it’s incredibly difficult across a global enterprise. We bridge that gap by focusing on pragmatic cutting-edge. We don't chase every tech trend; we curate the ones that offer a true competitive advantage.",
    note: "Our AI frameworks aren't just \"chatbots\"—they are deep-learning models integrated into your supply chain. Our cloud architectures allow your developers to deploy at the speed of thought while maintaining total security."
  },
  {
    icon: Globe2,
    title: "4. Global Delivery Network",
    description: "A global partner must be local everywhere. Our delivery network isn't just about \"coverage\"; it’s about context. We understand that a deployment in Singapore requires a different cultural and regulatory lens than one in Berlin or New York.",
    note: "Our \"Follow the Sun\" model ensures that while your headquarters sleeps, your innovation continues. We remove the friction of borders, time zones, and languages, providing a unified experience that makes your global operation feel like a single, cohesive unit."
  },
  {
    icon: Briefcase,
    title: "5. Industry-Specific Solutions",
    description: "Generalists provide templates; specialists provide solutions. We’ve spent decades in the trenches of specific sectors.",
    note: "Healthcare: We understand that \"data\" is actually a patient's life. Finance: We navigate the labyrinth of global fintech regulations. Manufacturing: We turn raw sensor data into predictive maintenance schedules that save millions."
  },
  {
    icon: Award,
    title: "6. Trusted by Leaders",
    description: "The world’s most respected organizations don't choose us for our tech stack; they choose us for our judgment. They value a partner who has the courage to say \"no\" to a bad strategy and the technical mastery to execute a difficult one.",
    note: "This trust is earned through transparency and a shared commitment to the mission. When a CEO stakes their reputation on a digital transformation, they need a partner whose skin is in the game as much as their own."
  },
  {
    icon: ShieldCheck,
    title: "7. Commitment to Security & Compliance",
    description: "Security is no longer an IT checkbox; it’s a board-level risk. We build with a \"Zero-Trust\" mindset from the first line of code. Our security frameworks aren't bolted on at the end—they are woven into the architecture.",
    note: "We stay ahead of the shifting landscape of GDPR, ISO, and evolving cyber threats so that you never have to choose between speed and safety. We don't just protect your data; we protect your brand’s integrity."
  },
  {
    icon: Leaf,
    title: "8. Sustainable & Responsible Growth",
    description: "In the modern economy, \"how\" you grow matters as much as \"how much\" you grow. We help our partners reduce their carbon footprint through intelligent resource allocation and energy-efficient cloud optimization.",
    note: "Beyond the environment, we advocate for Ethical AI—ensuring that automation is transparent, unbiased, and designed to augment human potential rather than replace it. We believe a legacy of profit is only valuable if it’s built on a foundation of responsibility."
  },
  {
    icon: Handshake,
    title: "9. Partnership Beyond Technology",
    description: "The strongest contracts are those written in mutual success, not just legal ink. We operate as an extension of your internal team, sharing the same KPIs and the same vision.",
    note: "We celebrate when you hit your quarterly targets and we pull \"all-nighters\" with you when a crisis hits. This level of emotional and strategic investment is why our client retention rates are among the highest in the industry. We aren't a vendor you \"manage\"—we are a partner you \"collaborate\" with."
  },
  {
    icon: Target,
    title: "10. Your Success, Our Mission",
    description: "At the end of the day, technology is just a means to an end. Your growth, your market dominance, and your resilience are the only metrics that matter to us.",
    note: "We measure our performance by your ROI, your customer satisfaction scores, and your ability to disrupt your industry. Our mission is to be the silent engine behind your most visible triumphs."
  }
];

// --- Components ---

const ServiceCard = ({ service, index, onSelect }: { service: Service; index: number; onSelect: (s: Service) => void }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative flex flex-col h-full bg-white border border-gray-100 rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
      style={{
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
      }}
      onClick={() => onSelect(service)}
    >
      {/* Video Background - Permanent */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem] bg-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-[1.35] pointer-events-none opacity-40 mix-blend-multiply grayscale-[20%]"
        >
          <source src={[1, 2, 5].includes(index) ? cyberVideo : hudVideo} type="video/mp4" />
        </video>
      </div>

      {/* Top Gradient Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 group-hover:from-red-500 group-hover:via-red-600 group-hover:to-red-500 transition-all duration-500 relative z-10"></div>

      {/* Subtle corner glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-red-50/50 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-slate-50 to-transparent rounded-tr-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

      <div className="p-8 flex flex-col h-full relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-[#dc2626] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-red-500/20">
            <service.icon className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <span className="text-xs font-black tracking-widest uppercase text-slate-200 group-hover:text-red-100 transition-colors duration-300">
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="mb-6 flex-grow">
          <h3
            className="text-2xl font-black text-[#dc2626] mb-2 transition-all duration-300 drop-shadow-[0_2px_4px_rgba(220,38,38,0.3)]"
            style={{ textShadow: "0 0 10px rgba(220,38,38,0.2)" }}
          >
            {service.title}
          </h3>
          <p className="text-[10px] font-bold text-red-500 mb-4 uppercase tracking-widest group-hover:text-[#0f172a] transition-colors duration-300">
            {service.tagline}
          </p>
          <p className="text-slate-500 leading-relaxed mb-8 text-base font-medium group-hover:text-slate-900 group-hover:font-semibold group-hover:drop-shadow-sm transition-all duration-300">
            {service.description}
          </p>

          {/* Micro-features */}
          <ul className="space-y-3 pt-6 border-t border-slate-100/50 group-hover:border-slate-200 transition-colors duration-300">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-base text-slate-600 group/item">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 shrink-0 opacity-50 group-hover:opacity-100 group-hover:text-[#0f172a] transition-all duration-300" />
                <span className="font-semibold text-sm group-hover:text-[#0f172a] transition-colors duration-300">
                  {feature.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer / CTA */}
        <div className="mt-auto pt-6 flex items-center justify-between">
          <span className="text-xs font-black text-[#0f172a] uppercase tracking-wider group-hover:text-[#dc2626] transition-colors">Explore Solution</span>
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#dc2626] group-hover:text-white transition-all duration-300 shadow-sm">
            <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

// --- WhatsIncludedCard Component ---

const WhatsIncludedCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => document.getElementById(`service-detail-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
      className="relative p-8 rounded-[2rem] bg-slate-50 border border-red-500/20 transition-all duration-500 shadow-[0_30px_60px_-15px_rgba(220,38,38,0.15)] cursor-pointer group overflow-hidden"
    >
      {/* Video Background - Removed as requested */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem] bg-white" />

      {/* Accent Line - Permanent */}
      <div className="absolute top-0 left-12 right-12 h-1 bg-gradient-to-r from-transparent via-[#dc2626]/20 to-transparent scale-x-100 relative z-10" />

      <div className="flex flex-col h-full relative z-10">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 bg-[#dc2626] text-white shadow-xl shadow-[#dc2626]/20`}>
          <item.icon size={28} strokeWidth={1.5} />
        </div>

        <h3 className="text-xl font-[900] text-[#0f172a] mb-3 transition-colors duration-300 group-hover:text-[#dc2626] group-hover:drop-shadow-sm">
          {item.title}
        </h3>
        <p className="text-sm font-bold uppercase tracking-widest mt-auto text-slate-600 transition-colors group-hover:text-slate-900 group-hover:font-extrabold group-hover:drop-shadow-sm">
          {item.desc}
        </p>
      </div>

      {/* Number Indicator - Permanent */}
      <div className="absolute top-8 right-8 text-4xl font-black transition-colors select-none z-0 text-[#dc2626]/5">
        0{index + 1}
      </div>
    </motion.div>
  );
};

// --- Main Page Component ---

const Services = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const navigate = useNavigate();

  // Technologies State
  const [activePillar, setActivePillar] = useState<number | null>(0);
  const [selectedLab, setSelectedLab] = useState(0);

  // Auto-rotate Pillars
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillar((prev) => (prev === null || prev === pillars.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate Labs
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedLab((prev) => (prev === labProjects.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const labProjects = [
    {
      id: 0,
      title: "Quantum-Resilient Encryption",
      tag: "Security",
      progress: 75,
      image: securityBg,
      fullTitle: "Post-Quantum Cryptographic Frameworks",
      fullDesc: "Our research focuses on lattice-based cryptography and multivariate equations that are theoretically secure against Shor's algorithm and other quantum-specific attacks. We are currently implementing zero-knowledge proof protocols for decentralized identity management.",
      milestones: ["Lattice Integration", "Key Distribution", "Speed Benchmarking"]
    },
    {
      id: 1,
      title: "Self-Healing Architectures",
      tag: "Reliability",
      progress: 90,
      image: aiBg,
      fullTitle: "Autonomous Infrastructure Orchestration",
      fullDesc: "Combining AI-driven monitoring with Kubernetes operators to create clusters that don't just alert on failure, but preemptively reroute traffic and scale compute before the failure cascade begins.",
      milestones: ["Predictive Scaling", "Auto-Remediation", "Failure Injection"]
    },
    {
      id: 2,
      title: "High-Density Compute",
      tag: "Hardware",
      progress: 60,
      image: dataBg,
      fullTitle: "Liquid-Cooled Distributed Logic",
      fullDesc: "Optimizing the physical layer of data centers for high-frequency trading and large-scale AI training. This project uses custom liquid cooling logic to maintain sub-0.1ms consistency across a 10,000 node mesh.",
      milestones: ["Thermal Balancing", "Bus Speed Optimization", "Fiber Logic"]
    }
  ];

  const pillars = [
    {
      id: 1,
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      desc: "VelDurSen integrates AI into enterprise systems from the ground up.",
      capabilities: ["Generative AI models", "NLP-driven automation", "Computer vision systems", "Predictive analytics engines", "Intelligent decision systems"],
      examples: ["Fraud detection", "Customer support automation", "Forecasting systems"],
      color: "bg-red-50",
      accent: "text-red-600",
      bg: aiBg
    },
    {
      id: 2,
      icon: Cloud,
      title: "Cloud & Infrastructure Engineering",
      desc: "Modern enterprises require resilient cloud ecosystems.",
      capabilities: ["Multi-cloud deployment models", "Kubernetes orchestration", "Auto-scaling systems", "High-availability architecture", "Disaster recovery design"],
      examples: ["Global region deployment", "Resource optimization", "Hybrid-cloud strategy"],
      color: "bg-slate-50",
      accent: "text-slate-900",
      bg: cloudBg
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Cybersecurity & Compliance Technologies",
      desc: "Security is embedded in every layer of our technology stack.",
      capabilities: ["Zero-trust frameworks", "Identity & access management", "SOC monitoring systems", "Compliance automation", "Secure API gateways"],
      examples: ["Regulatory compliance", "Risk mitigation", "Thread detection"],
      color: "bg-red-50",
      accent: "text-red-600",
      bg: securityBg
    },
    {
      id: 4,
      icon: Database,
      title: "Data Engineering & Analytics Platforms",
      desc: "Transforming raw data into actionable intelligence at enterprise scale.",
      capabilities: ["ETL & ELT pipelines", "Real-time streaming architecture", "Data lakes & warehouses", "Business intelligence dashboards", "Predictive modeling"],
      examples: ["Real-time reporting", "Scalable data ingestion", "Big data processing"],
      color: "bg-slate-50",
      accent: "text-slate-900",
      bg: dataBg
    },
    {
      id: 5,
      icon: Leaf,
      title: "Sustainable & Ethical Technology",
      desc: "Technology must serve both business performance and the planet.",
      capabilities: ["Carbon-aware cloud optimization", "Green DevOps pipelines", "Energy-efficient system design", "Ethical AI governance", "Sustainable infrastructure"],
      examples: ["Carbon footprint tracking", "Ethical AI audits", "Energy efficiency"],
      color: "bg-red-50",
      accent: "text-red-600",
      bg: sustainBg
    }
  ];

  const roadmapSteps = [
    { icon: Target, title: "Discovery & Architecture" },
    { icon: Layers, title: "Scalable Development" },
    { icon: Zap, title: "Secure Deployment" },
    { icon: Activity, title: "Continuous Monitoring" },
    { icon: RefreshCcw, title: "Optimization & Innovation" }
  ];



  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <HelmetProvider>
      <PageLayout>
        <Helmet>
          <title>Enterprise Technology Services | VelDurSen</title>
          <meta name="description" content="Comprehensive technology services for global enterprises. From AI and Cloud to Cyber Security and Data Engineering, we power mission-critical operations." />
          <meta name="keywords" content="AI services, cloud computing, cyber security, data engineering, enterprise software, global delivery" />
        </Helmet>

        {/* 1. HERO SECTION - Keeping Original Video Style as requested */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-[10s]"
          >
            <source src={serviceVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10" />

          <div className="enterprise-container relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-6 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                Our Services
              </span>
              <h1 className="text-[2.75rem] sm:text-[4.5rem] md:text-[6.5rem] font-bold text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                Enterprise <br />
                <span className="text-slate-200">Performance.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-3xl leading-relaxed drop-shadow-md">
                Comprehensive technology services designed for global enterprises. From AI and cloud to security and data engineering, we deliver end-to-end solutions that power mission-critical operations worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => document.getElementById('our-services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-enterprise py-5 px-12 text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-2xl shadow-red-600/20">
                  Explore Our Services
                </button>
                <div className="flex items-center gap-4 px-6 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                  <Globe2 size={16} className="text-red-600 shadow-sm" /> Global Delivery Network
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Abstract Element */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-0" />
        </section>

        {/* Services Breakdown - What's Included */}
        <section className="pt-12 pb-8 bg-white relative overflow-hidden">
          {/* Architectural Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="enterprise-container relative z-10">
            <div className="max-w-full mb-20 group">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-[900] text-[#0f172a] group-hover:text-[#dc2626] transition-colors duration-300 mb-8 tracking-tighter"
              >
                What's Included.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium"
              >
                Technology is never a "set it and forget it" endeavor. True digital transformation requires a partner who is willing to stay in the trenches long after the initial excitement of a launch has faded. We provide a comprehensive lifecycle model that shifts the technical burden off your shoulders and onto ours, ensuring that your infrastructure remains an asset rather than a liability.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  title: "Consultation",
                  icon: CheckCircle2,
                  desc: "Strategic discovery & roadmap planning",
                  color: "group-hover:text-blue-600"
                },
                {
                  title: "Development",
                  icon: Cpu,
                  desc: "High-performance engineering & build",
                  color: "group-hover:text-purple-600"
                },
                {
                  title: "Maintenance",
                  icon: Layers,
                  desc: "Continuous optimization & updates",
                  color: "group-hover:text-emerald-600"
                },
                {
                  title: "Security",
                  icon: ShieldCheck,
                  desc: "Zero-trust protocols & compliance",
                  color: "group-hover:text-indigo-600"
                },
                {
                  title: "Support",
                  icon: ArrowRight,
                  desc: "24/7 global expert assistance",
                  color: "group-hover:text-[#dc2626]"
                }
              ].map((item, i) => (
                <WhatsIncludedCard key={item.title} item={item} index={i} />
              ))}
            </div>

            <div className="mt-24 max-w-full mx-auto">
              <div className="space-y-16">
                {[
                  {
                    title: "1. Consultation: Strategic Discovery & Roadmap Planning",
                    desc: "We believe the most expensive mistake a company can make is building the \"wrong\" solution perfectly. Our process begins with a deep dive into your operational reality. We don't just ask what you want to build; we ask what business problem you are trying to solve.",
                    outcome: "You receive a pragmatic, battle-tested roadmap that balances immediate technical needs with your three-to-five-year fiscal goals. We identify the \"unseen\" risks early—regulatory hurdles, integration bottlenecks, and scalability ceilings—so they never become surprises later.",
                    image: consultationImg
                  },
                  {
                    title: "2. Development: High-Performance Engineering & Build",
                    desc: "Engineering excellence is our baseline, but our real focus is on maintainable innovation. We build systems that your organization can actually live with. We avoid \"black-box\" code that creates vendor lock-in, prioritizing transparent, modular architectures instead.",
                    outcome: "A high-velocity build process that emphasizes \"clean\" code and rigorous documentation. By utilizing modern CI/CD pipelines and agile methodologies, we deliver functional, high-performance software that is ready to scale the moment it hits production.",
                    image: developmentImg
                  },
                  {
                    title: "3. Maintenance: Continuous Optimization & Updates",
                    desc: "Software begins to age the moment it is deployed. Our maintenance philosophy is proactive, not reactive. We don’t wait for a system crash to look at your servers; we are constantly \"under the hood\" ensuring the engine is running at peak efficiency.",
                    outcome: "We handle the delicate work of dependency updates, framework migrations, and performance tuning. Our goal is to ensure your platform performs better on day 500 than it did on day one, reducing technical debt and extending the lifespan of your investment.",
                    image: maintenanceImg
                  },
                  {
                    title: "4. Security: Zero-Trust Protocols & Compliance",
                    desc: "In today’s landscape, security is a board-level risk that can’t be solved with a simple firewall. We bake security into the very first line of code using a Zero-Trust framework—verifying every request, every time, without exception.",
                    outcome: "We build \"hardened\" environments that protect your proprietary data and customer trust. From navigating the complexities of GDPR and HIPAA to implementing advanced encryption and threat-hunting, we ensure your brand stays out of the headlines for the wrong reasons.",
                    image: securityImg
                  },
                  {
                    title: "5. Support: 24/7 Global Expert Assistance",
                    desc: "When a critical system goes down, you don’t need a generic ticketing system; you need a senior engineer who knows your architecture. Our support is handled by experts, not scripted call centers.",
                    outcome: "We provide true \"follow-the-sun\" coverage. Whether it’s a minor configuration tweak or a midnight emergency, you have direct access to specialists who understand the stakes. We don't just patch problems; we identify the root cause to ensure they never happen again.",
                    image: supportImg
                  }
                ].map((item, idx) => (
                  <div id={`service-detail-${idx}`} key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center group`}>

                    {/* Text Side */}
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 font-black text-lg group-hover:bg-[#dc2626] group-hover:text-white transition-colors duration-300 shrink-0">
                          0{idx + 1}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-[#0f172a] group-hover:text-[#dc2626] transition-colors duration-300">
                          {item.title.split(":")[0]}
                        </h3>
                      </div>

                      <h4 className="text-xl font-bold text-slate-800">{item.title.split(":")[1]}</h4>

                      <p className="text-slate-600 leading-relaxed text-lg">
                        {item.desc}
                      </p>

                      <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 border-l-4 border-l-[#dc2626] shadow-sm">
                        <h4 className="text-xs font-black text-[#dc2626] uppercase tracking-widest mb-3 flex items-center gap-2">
                          <CheckCircle2 size={14} /> The Outcome
                        </h4>
                        <p className="text-slate-700 font-medium leading-relaxed italic">
                          "{item.outcome}"
                        </p>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="flex-1 w-full">
                      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 group-hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.2)] transition-all duration-500 border border-slate-100 aspect-[4/3]">
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <motion.img
                          initial={{ scale: 1.1 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 1.5 }}
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section - Interactive Service Wheel */}
        {/* Our Services Section - New Grid Implementation */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        </div>

        <section id="our-services" className="py-12 bg-gray-50/50 overflow-hidden relative">
          <div className="enterprise-container relative z-10">
            <div className="text-center mb-16 mt-10">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block text-[10px] font-black uppercase tracking-[0.5em] text-[#dc2626] mb-3"
              >
                SOLUTIONS ARCHITECTURE
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-[900] text-[#0f172a]"
              >
                Our <span className="text-[#dc2626]">Services.</span>
              </motion.h2>
            </div>

            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    onSelect={(s) => navigate(`/services/${s.id}`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- INDUSTRIES SECTION START --- */}
        <section id="industries" className="py-20 bg-slate-950 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-20 brightness-50"
            >
              <source src={industryVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-ub from-slate-950 via-slate-950/90 to-transparent" />
          </div>

          <div className="enterprise-container relative z-10">
            <div className="text-center mb-20">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-4 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20"
              >
                Vertical Integration
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-[900] tracking-tight mb-6 text-white"
              >
                Industries Transformed.
              </motion.h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                We don't just write code; we rewire entire sectors for the digital age. Deep domain expertise meets bleeding-edge engineering.
              </p>
            </div>

            <div className="space-y-32">
              {/* 1. HEALTHCARE */}
              <div className="flex flex-col md:flex-row items-center gap-16 group">
                <div className="flex-1 order-2 md:order-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-900 rounded-[2.5rem] p-[1px] opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl">
                    <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <img src={aboutTeam} alt="Healthcare Innovation" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
                    {/* Interactive Stat Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl z-20"
                    >
                      <div className="flex items-center gap-4 text-white">
                        <Activity className="w-10 h-10 text-red-500" />
                        <div>
                          <div className="text-3xl font-black"><CountUp end={45} />%</div>
                          <div className="text-xs font-bold uppercase tracking-wider opacity-80">Efficiency Gain</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 mb-6 border border-red-600/20">
                    <Heart size={32} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-[900] leading-tight text-red-500">
                    Next-Gen <br />Healthcare.
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    From telemedicine platforms serving millions to AI-driven diagnostic tools. We build HIPAA-compliant ecosystems where patient data is secure and care is accessible instantly.
                  </p>
                  <ul className="space-y-4 pt-6 border-t border-slate-800">
                    {["Telehealth Platforms", "AI Diagnostics", "Secure EMR Systems"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-200 font-semibold">
                        <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_#dc2626]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 2. EDUCATION */}
              <div className="flex flex-col md:flex-row items-center gap-16 group">
                <div className="flex-1 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 border border-blue-600/20">
                    <GraduationCap size={32} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-[900] leading-tight text-blue-500">
                    Future of <br />Education.
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Democratizing learning through scalable LMS platforms and immersive AR/VR classrooms. We empower institutions to reach students globally with zero latency.
                  </p>
                  <ul className="space-y-4 pt-6 border-t border-slate-800">
                    {["Custom LMS Solutions", "Virtual Classrooms", "Student Analytics"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-200 font-semibold">
                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-l from-blue-600 to-blue-900 rounded-[2.5rem] p-[1px] opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl">
                    <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <img src={industryImg1} alt="EdTech" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl z-20"
                    >
                      <div className="flex items-center gap-4 text-white">
                        <Globe2 className="w-10 h-10 text-blue-500" />
                        <div>
                          <div className="text-3xl font-black">1M+</div>
                          <div className="text-xs font-bold uppercase tracking-wider opacity-80">Students Connected</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* 3. MANUFACTURING */}
              <div className="flex flex-col md:flex-row items-center gap-16 group">
                <div className="flex-1 order-2 md:order-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-orange-900 rounded-[2.5rem] p-[1px] opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl">
                    <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <img src={manufacturingImg} alt="Industry 4.0" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="absolute top-8 right-8 bg-orange-600 text-white p-4 rounded-xl shadow-lg z-20 font-bold"
                    >
                      <div className="text-xs uppercase tracking-widest mb-1 opacity-80">Uptime</div>
                      <div className="text-2xl font-black">99.99%</div>
                    </motion.div>
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-orange-600/10 flex items-center justify-center text-orange-500 mb-6 border border-orange-600/20">
                    <Factory size={32} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-[900] leading-tight text-orange-500">
                    Smart <br />Manufacturing.
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Bridging OT and IT with IoT digital twins and predictive maintenance. We turn factory floors into intelligent, data-driven ecosystems that self-optimize.
                  </p>
                  <ul className="space-y-4 pt-6 border-t border-slate-800">
                    {["IoT Digital Twins", "Supply Chain AI", "Robotics Integration"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-200 font-semibold">
                        <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 4. RETAIL & E-COMMERCE */}
              <div className="flex flex-col md:flex-row items-center gap-16 group">
                <div className="flex-1 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-500 mb-6 border border-purple-600/20">
                    <ShoppingCart size={32} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-[900] leading-tight text-purple-500">
                    Retail <br />Revolution.
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Unified commerce that blurs the line between online and offline. We build omnichannel platforms that deliver personalized experiences at scale.
                  </p>
                  <ul className="space-y-4 pt-6 border-t border-slate-800">
                    {["Headless Commerce", "Personalization Engines", "Inventory Sync"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-200 font-semibold">
                        <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-l from-purple-600 to-purple-900 rounded-[2.5rem] p-[1px] opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl">
                    <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <img src={retailMainImg} alt="Retail Tech" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-6 left-6 right-6 flex gap-4 z-20">
                      <img src={retailDetailImg} className="w-20 h-20 rounded-xl border-2 border-white shadow-lg object-cover" alt="Detail" />
                      <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl flex-1 border border-white/10">
                        <div className="text-white font-bold text-sm">Real-time Inventory</div>
                        <div className="text-green-400 text-xs font-mono mt-1">● Synced</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              {/* 6. FUTURE FACTORIES */}
              <div className="flex flex-col md:flex-row items-center gap-16 group">
                <div className="flex-1 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-600/10 flex items-center justify-center text-cyan-500 mb-6 border border-cyan-600/20">
                    <Building2 size={32} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-[900] leading-tight text-cyan-500">
                    Future <br />Factories.
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Sustainable, hyper-connected industrial campuses. We optimize energy consumption, physical security, and logistics flow for the next century of production.
                  </p>
                  <ul className="space-y-4 pt-6 border-t border-slate-800">
                    {["Green Energy Grids", "Automated Logistics", "Campus Security"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-200 font-semibold">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-l from-cyan-600 to-cyan-900 rounded-[2.5rem] p-[1px] opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl">
                    <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <img src={industryImg2} alt="Future Factories" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>

              {/* 7. FINTECH */}
              <div className="flex flex-col md:flex-row items-center gap-16 group">
                <div className="flex-1 order-2 md:order-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600 to-yellow-900 rounded-[2.5rem] p-[1px] opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl">
                    <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <img src={industryImg1} alt="FinTech" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/80 backdrop-blur-xl p-6 rounded-2xl border border-yellow-500/30 text-center z-20">
                      <div className="text-yellow-500 font-mono text-xl mb-1">$50B+</div>
                      <div className="text-white text-xs uppercase tracking-widest">Transactions Secured</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-600/10 flex items-center justify-center text-yellow-500 mb-6 border border-yellow-600/20">
                    <Landmark size={32} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-[900] leading-tight text-yellow-500">
                    Secure <br />FinTech.
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Engineering trust in a trustless world. From blockchain ledgers to high-frequency trading platforms, we build the financial rails of tomorrow.
                  </p>
                  <ul className="space-y-4 pt-6 border-t border-slate-800">
                    {["Blockchain Defi", "Algo Trading", "Fraud Prevention"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-200 font-semibold">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_#eab308]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              {/* 8. GLOBAL INFRASTRUCTURE */}
              <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 border border-slate-800 p-8 md:p-16 text-center mt-32">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                  <img src={globalMapImg} className="w-full h-full object-cover" alt="Global Map" />
                </div>
                <div className="relative z-20 max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-[900] text-white mb-6">
                    Global <span className="text-red-600">Digital Grid.</span>
                  </h2>
                  <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
                    Connecting continents with a unified, secure, and low-latency digital backbone that powers the next industrial revolution.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { icon: ShieldCheck, label: "Cyber Defense", val: "Zero Trust" },
                      { icon: Activity, label: "Uptime", val: "99.999%" },
                      { icon: Cpu, label: "Processing", val: "Edge Computing" },
                      { icon: Zap, label: "Speed", val: "<10ms Global" }
                    ].map((stat, i) => (
                      <div key={i} className="bg-slate-950/80 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-red-500/50 transition-colors">
                        <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
                        <div className="text-2xl font-black text-white mb-1">{stat.val}</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* --- INDUSTRIES SECTION END --- */}

        {/* --- TECHNOLOGIES SECTION START --- */}
        <section id="technologies" className="py-24 bg-white relative overflow-hidden">
          {/* Subtle Tech Grid Background */}
          <div className="absolute inset-0 z-0 opacity-5"
            style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />

          <div className="enterprise-container relative z-10">
            <div className="text-center mb-24">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-4 bg-red-50 px-4 py-2 rounded-full border border-red-100"
              >
                Engineering Excellence
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-[900] text-[#0f172a] mb-6"
              >
                Core <span className="text-red-600">Technologies.</span>
              </motion.h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                Our stack is built for the future—scalable, secure, and sustainable. We leverage the most advanced tools to build resilient digital ecosystems.
              </p>
            </div>

            {/* Interactive Pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
              <div className="lg:col-span-4 flex flex-col gap-4">
                {pillars.map((pillar, index) => (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(activePillar === index ? null : index)}
                    className={`text-left p-6 rounded-2xl transition-all duration-300 border ${activePillar === index
                      ? "bg-[#0f172a] text-white border-[#0f172a] shadow-xl scale-105 z-10"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-white hover:shadow-md"
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <pillar.icon className={`w-6 h-6 ${activePillar === index ? "text-red-500" : "text-slate-400"}`} />
                      <span className="font-bold text-lg">{pillar.title}</span>
                    </div>
                    <AnimatePresence>
                      {activePillar === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-slate-700 pt-4">
                            {pillar.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
              <div className="lg:col-span-8 bg-slate-900 rounded-[2.5rem] relative overflow-hidden shadow-2xl min-h-[500px] flex items-end p-8 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar || "default"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 z-0"
                  >
                    <img
                      src={activePillar !== null ? pillars[activePillar].bg : technologyVideo}
                      className="w-full h-full object-cover opacity-30"
                      alt="Tech Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <div className="relative z-10 w-full">
                  {activePillar !== null ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-8"
                    >
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pillars[activePillar].examples.map((ex, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-md">{ex}</span>
                        ))}
                      </div>
                      <h3 className="text-3xl md:text-5xl font-[900] text-white leading-tight">
                        {pillars[activePillar].title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pillars[activePillar].capabilities.map((cap, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                            <span className="font-medium">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-center w-full pb-12">
                      <h3 className="text-3xl font-bold text-white mb-4">Explore Our Tech Stack</h3>
                      <p className="text-slate-400">Select a technology pillar on the left to view details.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Legacy Bridge Section - Light Mode Contrast */}
            <div className="py-20 bg-slate-100 rounded-[3rem] text-slate-900 relative overflow-hidden mb-32 mx-4 border border-slate-200">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
              <div className="enterprise-container relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-[900] mb-6 text-slate-900">The Legacy <ArrowRightLeft className="inline mx-2 text-red-600" /> Modern Bridge</h3>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium">
                  We don't just build new stuff; we modernize the old. Our specialized migration protocols ensure zero-downtime transitions from monolithic legacy systems to microservices.
                </p>
                <div className="flex justify-center gap-8 flex-wrap">
                  {["Mainframe Offloading", "COBOL to Java/Go", "Database Migration", "UI Modernization"].map((item, i) => (
                    <div key={i} className="bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-xl font-bold text-sm tracking-wide uppercase text-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors cursor-default">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Innovation Labs */}
            <div className="mb-32">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-[900] text-[#0f172a] mb-4">VelDurSen <span className="text-red-600">Innovation Labs.</span></h2>
                <p className="text-lg text-slate-600">Where we prototype the improbable.</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 bg-slate-50 rounded-[2.5rem] p-4 lg:p-8 border border-slate-200">
                <div className="lg:w-1/3 space-y-2">
                  {labProjects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => setSelectedLab(index)}
                      className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${selectedLab === index
                        ? "bg-white shadow-xl border-l-4 border-l-red-500"
                        : "hover:bg-white hover:shadow-md border-l-4 border-l-transparent"
                        }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-xs font-black uppercase tracking-widest ${selectedLab === index ? "text-red-600" : "text-slate-400"}`}>{project.tag}</span>
                        <span className="text-xs font-bold text-slate-300">{project.progress}% R&D</span>
                      </div>
                      <h4 className={`text-xl font-bold ${selectedLab === index ? "text-[#0f172a]" : "text-slate-500"}`}>{project.title}</h4>
                    </button>
                  ))}
                </div>
                <div className="lg:w-2/3 relative rounded-2xl overflow-hidden min-h-[400px] bg-slate-900 flex items-center justify-center p-8 md:p-16 text-center group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedLab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 z-0"
                    >
                      <img
                        src={labProjects[selectedLab].image}
                        alt={labProjects[selectedLab].title}
                        className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`content-${selectedLab}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="relative z-10 max-w-2xl"
                    >
                      <FlaskConical className="w-16 h-16 text-red-500 mx-auto mb-6 drop-shadow-lg" />
                      <h3 className="text-3xl md:text-4xl font-[900] text-white mb-6 leading-tight drop-shadow-md">{labProjects[selectedLab].fullTitle}</h3>
                      <p className="text-lg text-slate-200 leading-relaxed mb-8 drop-shadow-sm">{labProjects[selectedLab].fullDesc}</p>
                      <div className="flex justify-center gap-4">
                        {labProjects[selectedLab].milestones.map((m, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm font-bold text-white/80 bg-slate-950/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                            <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-green-500" : "bg-slate-600"}`} />
                            {m}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* --- TECHNOLOGIES SECTION END --- */}

        {/* Value Proposition / Trust Section */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        </div>

        <section className="py-20 bg-white text-[#0f172a] overflow-hidden relative">
          {/* Subtle Architectural Background */}
          <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="container px-4 md:px-6 mx-auto relative z-10 box-border">
            {/* Section Heading - Navy & Red Split */}
            <div className="max-w-7xl mx-auto text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl font-[900] leading-tight tracking-tight text-[#0f172a]"
              >
                Why Global Leaders <br />
                <span className="text-[#dc2626]">Choose Us.</span>
              </motion.h2>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 gap-6 mb-24">
                {whyChooseUsData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col md:flex-row gap-8 items-start"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-50 to-transparent rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:opacity-100 transition-opacity" />

                    <div className="w-16 h-16 bg-red-50 text-[#dc2626] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#dc2626] group-hover:text-white transition-colors duration-300">
                      <item.icon size={32} strokeWidth={1.5} />
                    </div>

                    <div className="flex-1 relative z-10">
                      <h3 className="text-2xl font-bold text-[#0f172a] mb-4 group-hover:text-[#dc2626] transition-colors duration-300">
                        {item.title}
                      </h3>

                      <div className="text-slate-600 text-base leading-relaxed space-y-4 flex-1">
                        <p>{item.description}</p>

                        {item.note && (
                          <p className="text-sm font-semibold text-slate-500 italic mt-6 border-l-4 border-[#dc2626]/20 pl-4 py-1">
                            {item.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonials Section - Full Width Below */}
              <div className="w-full max-w-5xl mx-auto py-12">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
              </div>

              <div className="relative max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-[#dc2626] font-bold tracking-widest uppercase text-xs mb-2 block">Client Stories</span>
                  <h3 className="text-3xl font-black text-[#0f172a]">Trusted by Industry Visionaries</h3>
                </div>

                <div className="relative bg-[#0f172a] border border-slate-800 rounded-[2.5rem] p-8 md:p-14 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.3)] overflow-hidden">
                  {/* Background Accent */}
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                  <div className="absolute top-10 right-10 opacity-10">
                    <Quote className="w-24 h-24 text-white" />
                  </div>

                  <div className="relative z-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentReview}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center text-center"
                      >
                        <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 text-white max-w-4xl tracking-tight">
                          "{reviews[currentReview].quote}"
                        </blockquote>

                        <div className="flex flex-col items-center gap-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${reviews[currentReview].color} rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-white/10`}>
                            {reviews[currentReview].author}
                          </div>
                          <div>
                            <div className="font-black text-lg text-white">{reviews[currentReview].role}</div>
                            <div className="text-xs font-bold text-red-500 uppercase tracking-widest mt-1">
                              {reviews[currentReview].company}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex items-center justify-between mt-12 px-4 md:px-12 border-t border-white/10 pt-8">
                      <button
                        onClick={prevReview}
                        className="group flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-[#0f172a] transition-all">
                          <ChevronLeft size={18} />
                        </div>
                        <span className="hidden md:inline">Previous</span>
                      </button>

                      <div className="flex gap-2">
                        {reviews.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentReview(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentReview
                              ? "bg-red-600 w-8"
                              : "bg-slate-700 w-1.5 hover:bg-slate-500"
                              }`}
                            aria-label={`Review ${i + 1}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={nextReview}
                        className="group flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
                      >
                        <span className="hidden md:inline">Next</span>
                        <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-[#0f172a] transition-all">
                          <ChevronRight size={18} />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </PageLayout>
    </HelmetProvider>
  );
};

export default Services;
