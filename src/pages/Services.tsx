import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Code, Play, Shield,
  ArrowRight, Briefcase, Cpu, Layers, Zap, CheckCircle2,
  TrendingUp, ShieldCheck, Quote, ChevronLeft,
  ChevronRight, Smartphone, Database, Cloud, Globe2,
  Target, Award, Infinity as InfinityIcon, Leaf, Handshake,
  Heart, GraduationCap, Factory, Landmark, ShoppingCart,
  Building2, Sprout, BarChart3, Lightbulb, Activity, Microscope,
  Brain, RefreshCcw, Sparkles, Network, Droplets, FlaskConical, ArrowRightLeft
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import industryTeamImg from "@/assets/coptercode3.png.jpeg";
import industryImg1_new from "@/assets/coptercode1.png.jpeg";
import industryImg2_new from "@/assets/coptercode2.jpeg";
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
    icon: InfinityIcon,
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
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  // Technologies State
  const [activePillar, setActivePillar] = useState<number | null>(null);
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
      icon: Shield,
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
    { icon: Search, title: "Discovery & Architecture" },
    { icon: Code, title: "Scalable Development" },
    { icon: Play, title: "Secure Deployment" },
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
        <section id="our-services" className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
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
                <button onClick={() => document.getElementById('our-solutions-architecture')?.scrollIntoView({ behavior: 'smooth' })} className="btn-enterprise py-5 px-12 text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-2xl shadow-red-600/20">
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

        <section id="our-solutions-architecture" className="py-12 bg-gray-50/50 overflow-hidden relative">
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



        {/* --- TECHNOLOGIES SECTION START --- */}
        {/* 3. TECHNOLOGY PILLARS SECTION (VERTICAL HOVER STYLE) */}
        <section id="technology-pillars" className="section-padding bg-white overflow-hidden">
          <div className="enterprise-container">
            <div className="mb-12">
              <span className="text-red-600 font-black uppercase tracking-widest text-xs mb-4 block">Core Competencies</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Technology <span className="text-red-600">Pillars.</span></h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[550px]">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.id}
                  onMouseEnter={() => setActivePillar(pillar.id)}
                  onMouseLeave={() => setActivePillar(null)}
                  animate={{
                    flex: activePillar === pillar.id ? 2.5 : activePillar === null ? 1 : 0.7,
                  }}
                  className={`relative rounded-[2.5rem] overflow-hidden group cursor-pointer border-4 border-transparent transition-all duration-500 ${pillar.color}`}
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                    <img src={pillar.bg} alt="" className="w-full h-full object-cover opacity-10 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className={`absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white/10 group-hover:from-slate-950/80 group-hover:via-slate-950/50 group-hover:to-slate-950/90 transition-all duration-500`} />
                  </div>

                  <div className="absolute inset-x-0 top-0 p-8 z-20 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className={`w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <pillar.icon className={pillar.accent} size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-white leading-tight mb-4 transition-colors">{pillar.title}</h3>
                    <p className="text-slate-500 group-hover:text-slate-300 font-medium mb-8 text-sm leading-relaxed transition-colors">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">Core Capabilities</h4>
                        <div className="flex flex-wrap gap-2">
                          {pillar.capabilities.map(c => (
                            <span key={c} className="text-[10px] font-bold bg-white/10 text-white backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">{c}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">Sector Impact</h4>
                        <div className="flex flex-wrap gap-4">
                          {pillar.examples.map(e => (
                            <div key={e} className="flex items-center gap-2 text-[11px] font-black text-white/90">
                              <CheckCircle2 size={12} className="text-red-500" /> {e}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Background Decor Icon */}
                  <div className="absolute bottom-[-10%] right-[-10%] opacity-5 group-hover:opacity-0 transition-opacity">
                    <pillar.icon size={300} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* 5. LEGACY MODERNIZATION BRIDGE (ENHANCED) */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="enterprise-container">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Legacy to Modern</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                  Bridging the Gap Between <br />
                  <span className="text-red-600">Core & Cloud.</span>
                </h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                  VelDurSen specializes in building high-performance bridges that enable bi-directional data flow and gradual modernization without disrupting mission-critical operations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Legacy Encapsulation", desc: "Wrapping monolithic systems in modern API layers.", icon: Layers },
                    { title: "Data Synchronization", desc: "Real-time consistency between on-prem and cloud.", icon: ArrowRightLeft }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, backgroundColor: "#fff", borderColor: "#ef4444" }}
                      className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-red-600/5 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                        <item.icon className="text-red-500 group-hover:text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-sm mb-2 uppercase tracking-tight">{item.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 relative p-12 bg-slate-50 rounded-[4rem] border border-slate-200 shadow-2xl flex flex-col items-center justify-center min-h-[450px]"
              >
                {/* Animated Connection Path */}
                <div className="absolute inset-x-20 top-1/2 -translate-y-1/2 h-1 bg-slate-200 overflow-hidden rounded-full">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-red-600 to-transparent"
                  />
                </div>

                <div className="flex justify-between items-center w-full relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-8 bg-white rounded-3xl shadow-lg border border-slate-100 w-44 relative group"
                  >
                    <div className="text-slate-400 text-[9px] font-black uppercase mb-3 tracking-widest">Legacy Core</div>
                    <div className="text-slate-900 font-black text-xl tracking-tighter">MAINFRAME</div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-red-600/10 group-hover:bg-red-600 transition-colors" />
                  </motion.div>

                  <div className="relative z-20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center relative border border-slate-100"
                    >
                      <InfinityIcon size={32} className="text-red-600" />
                    </motion.div>
                    {/* Digital Pulse Ring */}
                    <motion.div
                      animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute inset-0 rounded-full border-4 border-red-600 -z-10"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-8 bg-red-600 rounded-3xl shadow-2xl shadow-red-600/30 w-44 relative group"
                  >
                    <div className="text-red-200 text-[9px] font-black uppercase mb-3 tracking-widest">Modern Cloud</div>
                    <div className="text-white font-black text-xl tracking-tighter">SERVERLESS</div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                  </motion.div>
                </div>

                <div className="mt-16 flex flex-col items-center">
                  <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <motion.div
                        key={i}
                        animate={{ height: [4, 12, 4], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                        className="w-1 bg-red-600 rounded-full"
                      />
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">VelDurSen Hybrid Bridge Architecture</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. ENGINEERING EXCELLENCE MODEL (INTERACTIVE ROADMAP) */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="enterprise-container">
            <div className="mb-24 text-center relative z-10">
              <span className="text-red-600 font-black uppercase tracking-widest text-[10px] bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm inline-block mb-6">Execution Lifecycle</span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">The Path to <span className="text-red-600">Innovation.</span></h2>
            </div>

            <div className="relative px-12 lg:px-0">
              {/* Visual Backbone Connectors */}
              <div className="absolute top-[4.5rem] left-0 w-full h-[2px] bg-slate-200 hidden lg:block z-0" />
              <motion.div
                className="absolute top-[4.5rem] left-0 h-[2px] bg-red-600 hidden lg:block z-0"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 relative z-10">
                {roadmapSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="relative mb-10 flex flex-col items-center">
                      {/* Number Indicator */}
                      <div className="absolute -top-12 text-[80px] font-black text-slate-100/50 group-hover:text-red-600/10 transition-colors z-0 select-none">
                        0{i + 1}
                      </div>

                      {/* Node Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-24 h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center relative z-10 border border-slate-100 group-hover:border-red-600 transition-all duration-300"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-500">
                          <step.icon className="text-slate-900 group-hover:text-white transition-colors duration-500" size={32} />
                        </div>

                        {/* Active Pulse Ring */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-red-600 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                      </motion.div>

                      {/* Vertical Connector (Mobile) */}
                      <div className="w-[2px] h-12 bg-slate-200 mt-4 lg:hidden" />
                    </div>

                    <div className="text-center lg:text-left">
                      <h4 className="font-black text-slate-900 uppercase tracking-tighter text-xl mb-3 group-hover:text-red-600 transition-colors">
                        {step.title}
                      </h4>
                      <div className="h-1 w-12 bg-red-600 mx-auto lg:ml-0 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                        Standard Governance Protocol Alpha-22
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Status Feed */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-20 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-6">
                  <div className="flex gap-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Lifecycle Protocol: VDT-EN-2026</span>
                </div>
                <div className="hidden md:block text-[10px] font-mono text-slate-300">
                  TRANSITION_COMPLETE: STATUS_EXECUTION_STABLE
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* 7. PERFORMANCE & SCALABILITY BLOCK - TECHNICAL SCHEMATIC STYLE */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Precision Grid Background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="enterprise-container relative z-10">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-8">
              <div className="max-w-2xl">
                <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Precision Telemetry</span>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-2">
                  Reliability <br />
                  <span className="text-red-600">Calculated.</span>
                </h2>
              </div>
              <div className="max-w-md pb-2">
                <p className="text-slate-500 text-sm font-medium leading-relaxed lg:text-right border-r-4 border-red-600 pr-8">
                  Our infrastructure is stress-tested against extreme concurrent loads, ensuring mission-critical stability for global deployments.
                </p>
              </div>
            </div>

            <div className="relative py-8">
              {/* Horizontal Axis */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 -translate-y-1/2" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {[
                  { id: "SYS-X1", label: "Runtime Stability", value: "99.99%", unit: "UPTIME", desc: "Redundant node clusters with sub-second failover protocols." },
                  { id: "OPS-T4", label: "Network Latency", value: "Multi-Region", unit: "FABRIC", desc: "Proprietary backbone connectivity across six continents." },
                  { id: "CAP-B10", label: "Daily Throughput", value: "10B+", unit: "TXNS", desc: "Architected for massive concurrent transaction volumes." },
                  { id: "SEC-S2", label: "Security Standard", value: "SOC 2", unit: "TYPE II", desc: "Continuous monitoring and high-fidelity audit trails." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative group cursor-default"
                  >
                    {/* Technical ID */}
                    <div className="font-mono text-[9px] font-black text-slate-300 mb-4 tracking-[0.3em] group-hover:text-red-600 transition-colors">
                      REF_ID: // {item.id}
                    </div>

                    {/* Lead bar */}
                    <div className="w-full h-[3px] bg-slate-50 mb-6 overflow-hidden rounded-full">
                      <motion.div
                        className="h-full bg-red-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                      />
                    </div>

                    <div className="flex items-end gap-2 mb-2">
                      <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-none">
                        {item.value}
                      </div>
                      <div className="text-[9px] font-black text-red-600 uppercase tracking-widest pb-1 border-b-2 border-red-100">
                        {item.unit}
                      </div>
                    </div>

                    <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-2">
                      {item.label}
                    </h3>

                    <p className="text-[11px] text-slate-400 font-medium leading-snug max-w-[180px]">
                      {item.desc}
                    </p>

                    {/* Aesthetic Coordinate Point */}
                    <div className="absolute -top-6 -left-4 w-1.5 h-1.5 rounded-full border border-slate-200 bg-white" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Data Legend */}
            <div className="mt-12 pt-6 border-t border-slate-100 flex justify-between items-center text-[9px] font-black text-slate-300 uppercase tracking-[0.5em]">
              <span>Telemetry Stream Active</span>
              <div className="flex gap-4">
                <span>Vector-22</span>
                <span className="text-red-600">Verified Stability</span>
              </div>
            </div>
          </div>
        </section>

        {/* 8.5 INNOVATION LAB SECTION - DASHBOARD STYLE */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white hidden lg:block" />
          <div className="enterprise-container relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Internal R&D Lab</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
                  The VelDurSen <br />
                  <span className="text-red-600">Innovation Engine.</span>
                </h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12 max-w-xl">
                  Our labs are where we stress-test the future. We don't just follow trends; we architect the patent-pending IP that powers next-decade infrastructure.
                </p>

                <div className="space-y-4">
                  {labProjects.map((item, i) => (
                    <motion.div
                      key={i}
                      onClick={() => setSelectedLab(i)}

                      className={`p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${selectedLab === i
                        ? "bg-white border-red-600 shadow-xl shadow-red-600/5 translate-x-4"
                        : "bg-white/50 border-slate-100 shadow-sm"
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedLab === i ? "bg-red-600 scale-150" : "bg-slate-300"
                            }`}
                        />
                        <div>
                          <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight">
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {item.tag}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-[10px] font-black text-red-600 bg-red-50 px-3 py-1 rounded-full">
                          {item.progress}% Ready
                        </div>
                        <ArrowRight
                          size={16}
                          className={`transition-all ${selectedLab === i
                            ? "text-red-600 translate-x-1"
                            : "text-slate-300 group-hover:text-red-600"
                            }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedLab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100"
                  >
                    <div className="h-64 relative overflow-hidden group">
                      <img
                        src={labProjects[selectedLab].image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-6 left-8">
                        <span className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">
                          Prototype Phase
                        </span>
                        <h3 className="text-white text-2xl font-black tracking-tighter">
                          {labProjects[selectedLab].fullTitle}
                        </h3>
                      </div>
                    </div>

                    <div className="p-10">
                      <p className="text-slate-500 font-medium leading-relaxed mb-8">
                        {labProjects[selectedLab].fullDesc}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                            Core Milestones
                          </h4>
                          <div className="space-y-3">
                            {labProjects[selectedLab].milestones.map((m, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-xs font-bold text-slate-700"
                              >
                                <CheckCircle2 size={14} className="text-green-500" />{" "}
                                {m}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 text-center">
                            Active Throughput
                          </div>
                          <div className="flex items-end justify-center gap-1 font-mono">
                            <span className="text-3xl font-black text-slate-900 leading-none">
                              {(Math.random() * 10).toFixed(2)}
                            </span>
                            <span className="text-sm text-red-600 font-black pb-1">
                              TB/s
                            </span>
                          </div>
                          <div className="mt-4 flex gap-1">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ height: [10, 20, 15, 25, 10] }}
                                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: i * 0.1 }}
                                className="flex-1 bg-red-600/20 rounded-full"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
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

        {/* --- APPENDED INDUSTRIES PAGE CONTENT --- */}
        <div id="industries-full-content" className="relative">


          {/* 2. PHILOSOPHY — ASYMMETRICAL SPLIT */}
          <section className="py-12 bg-white relative overflow-hidden">
            <div className="enterprise-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-12 mb-6">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Our <span className="text-red-600">Industries.</span></h2>
                  <p className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight max-w-4xl italic serif">
                    "Generic solutions dilute enterprise potential. We build for the unique <span className="text-red-600">complexity</span> of your industry."
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="lg:col-span-12 xl:col-span-7 relative"
                >
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-video group">
                    <img
                      src={industryTeamImg}
                      alt="Innovation Lab"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-10 left-10 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <Zap size={20} className="text-red-500" />
                        <span className="font-bold tracking-widest uppercase text-[10px]">Next-Gen Ready</span>
                      </div>
                      <h3 className="text-2xl font-bold text-red-600">The VelDurSen Innovation Framework</h3>
                    </div>
                  </div>
                  {/* Floating Stat Card */}
                  <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block z-20">
                    <p className="text-5xl font-black text-red-600 mb-1">99.8%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Compliance Fidelity</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-12 xl:col-span-5 space-y-8"
                >
                  <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    Every industry operates under unique regulations, customer expectations, and operational complexity. We combine deep domain expertise with cloud-native engineering to design industry-aligned digital ecosystems.
                  </p>

                  <ul className="space-y-6">
                    {[
                      { title: "Compliance-Aware", desc: "Built-in regulatory alignment from the first line of code." },
                      { title: "Scalable Architecture", desc: "Systems that grow as your global footprint expands." },
                      { title: "AI-Driven Efficiency", desc: "Proprietary models trained on industry-specific datasets." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                          <CheckCircle2 size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors uppercase tracking-wider text-xs mb-1">{item.title}</h4>
                          <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 3. INDUSTRY SOLUTIONS */}

          {/* 3.1 HEALTHCARE */}
          <section className="py-8 bg-slate-50 overflow-hidden">
            <div className="enterprise-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div>
                    <span className="flex items-center gap-3 text-red-600 font-bold uppercase tracking-widest text-[10px] mb-4">
                      <div className="w-10 h-0.5 bg-red-600" /> Intelligent Care Ecosystems
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tighter">Health<span className="text-red-600">care</span></h2>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl underline decoration-red-600/20 underline-offset-8">
                      Transforming healthcare delivery through secure, intelligent, and compliant platforms.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: Activity, title: "Diagnostic AI", text: "Predictive modeling for patient outcomes." },
                      { icon: ShieldCheck, title: "Secure Data", text: "HIPAA & GDPR compliant architectures." },
                      { icon: Globe2, title: "Interoperability", text: "Seamless HL7/FHIR record systems." },
                      { icon: Microscope, title: "Clinical Analytics", text: "Real-time research data processing." }
                    ].map((item, i) => (
                      <div key={i} className="space-y-2 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                        <item.icon size={24} className="text-red-600" />
                        <h4 className="font-bold text-slate-900 uppercase tracking-widest text-[9px]">{item.title}</h4>
                        <p className="text-[10px] text-slate-500 font-bold leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-2">
                    <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise rounded-full px-8 py-3 text-sm">Request Domain Brief</Link>
                    <div className="h-10 w-px bg-slate-200" />
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] max-w-[100px]">
                      Impact: Improved Patient Outcomes
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="rounded-[3rem] overflow-hidden aspect-square shadow-2xl relative group">
                    <img src={industryImg1_new} alt="Healthcare Technology" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* 3.2 EDUCATION */}
          <section className="py-8 bg-white relative overflow-hidden">
            <div className="enterprise-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative min-h-[300px] lg:min-h-[450px] mb-6 lg:mb-0"
                >
                  <div className="absolute inset-0 bg-slate-100 rounded-[3rem] overflow-hidden group">
                    <img
                      src={industryImg2_new}
                      alt="Education"
                      className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-40" />
                  </div>

                  <div className="absolute top-10 -right-8 bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white max-w-[280px] hidden md:block">
                    <p className="text-3xl font-black text-red-600 mb-2">EdTech</p>
                    <p className="font-bold text-slate-900 text-sm leading-tight">Architecting the future of pedagogy through digital scalability.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:pl-16 flex flex-col justify-center space-y-8"
                >
                  <header className="space-y-2">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-red-600">The Academic Evolution</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-950 tracking-tighter leading-none"><span className="text-red-600">Edu</span>cation</h2>
                  </header>

                  <div className="space-y-6">
                    <p className="text-xl text-slate-500 font-medium leading-tight max-w-lg">
                      Enabling <span className="text-slate-900 font-bold">intelligent academic ecosystems</span> with scalable digital infrastructure.
                    </p>

                    <div className="grid grid-cols-1 gap-6">
                      {[
                        { title: "Adaptive Learning", desc: "AI-driven personalization for student success." },
                        { title: "Campus Cloud", desc: "Unified global infrastructure for distributed learning." },
                        { title: "Secure EdTech", desc: "Data privacy frameworks built for institutional trust." }
                      ].map((item, i) => (
                        <div key={i} className="group cursor-default">
                          <h4 className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-red-600 transition-colors mb-1">
                            <div className="w-6 h-px bg-slate-200 group-hover:bg-red-600 group-hover:w-10 transition-all" /> {item.title}
                          </h4>
                          <p className="text-slate-900 font-bold text-base">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link to="/contact" state={{ fromButton: true }} className="inline-flex items-center justify-center bg-slate-950 text-white font-black px-10 py-4 rounded-full hover:bg-red-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-red-200 text-sm">
                      Expand Academic Horizon <ArrowRight className="ml-4" size={18} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 3.3 MANUFACTURING */}
          <section className="py-8 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

            <div className="enterprise-container relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 space-y-6 order-2 lg:order-1"
                >
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-1.5 bg-slate-950 text-white rounded-full text-[9px] font-black uppercase tracking-[0.2em]">Precision Engineering</span>
                    <h2 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-none italic">
                      Manu<span className="text-red-600">facturing</span>
                    </h2>
                    <p className="text-xl text-slate-500 font-medium leading-tight max-w-xl">
                      Bridging the gap between physical assets and digital intelligence with enterprise-grade IoT ecosystems.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {[
                      { title: "Predictive Ops", val: "Operational Uptime Optimization", desc: "Advanced AI models trained for industrial asset health and failure anticipation." },
                      { title: "IoT Fabric", val: "Real-time Synchronization", desc: "Sensory data orchestration layer for mission-critical visibility." },
                      { title: "Smart Supply", val: "Global Transparency", desc: "End-to-end logistics orchestration with blockchain-enabled traceability." }
                    ].map((box, i) => (
                      <div key={i} className="group relative pl-10">
                        <div className="absolute left-0 top-1 w-6 h-6 rounded-lg bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                          <ArrowRight size={12} className="-rotate-45" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{box.title}</p>
                          <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors uppercase italic">{box.val}</h4>
                          <p className="text-xs text-slate-500 font-medium max-w-lg">{box.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link to="/contact" state={{ fromButton: true }} className="inline-flex items-center gap-6 group">
                      <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-950 pb-1 border-b-2 border-slate-950">Implement Industry 4.0</div>
                      <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                        <ArrowRight className="text-slate-400 group-hover:text-white transition-all" size={20} />
                      </div>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 relative order-1 lg:order-2"
                >
                  <div className="relative p-2">
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-600 rounded-tl-2xl opacity-20" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-600 rounded-br-2xl" />

                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl group">
                      <img
                        src={manufacturingImg}
                        alt="Manufacturing"
                        className="w-full aspect-square object-cover transition-transform duration-[4s] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/5 to-transparent h-1/2 w-full top-0 animate-[scan_6s_linear_infinite]" />
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100 max-w-[240px] hidden xl:block z-20"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Activity size={12} className="text-red-600 animate-pulse" />
                      <span className="text-[9px] font-black uppercase tracking-[0.1em] text-slate-400">Intelligence</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-900 mb-1.5 uppercase italic">Efficiency Core</div>
                        <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '94%' }}
                            className="h-full bg-red-600"
                            transition={{ duration: 2, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                      <p className="text-[9px] text-slate-500 font-bold leading-relaxed">Operational synchronicity at peak.</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 3.5 RETAIL */}
          <section className="py-8 bg-slate-50 relative overflow-hidden">
            <div className="enterprise-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-12 xl:col-span-7 relative h-[400px] lg:h-[450px] order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="absolute top-0 left-0 w-[80%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl group"
                  >
                    <img src={retailMainImg} alt="Retail Main" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-slate-950/10" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-6 right-0 w-[45%] h-[50%] rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white z-10 group"
                  >
                    <img src={retailDetailImg} alt="Retail Detail" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="absolute -top-6 left-12 bg-red-600 text-white p-6 rounded-[1.5rem] shadow-2xl z-20"
                  >
                    <p className="text-3xl font-black italic">+85%</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest opacity-80">Engagement Lift</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-12 xl:col-span-5 space-y-8 order-1 lg:order-2"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-1 bg-red-600" />
                    <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter">Re<span className="text-red-600">tail</span></h2>
                    <p className="text-lg text-slate-400 font-bold uppercase tracking-widest italic leading-tight">Consumer experience <br /> re-architected.</p>
                  </div>

                  <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
                    "Transforming retail operations with AI-driven personalization, inventory intelligence, and omnichannel commerce systems."
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { title: "Omnichannel", icon: ShoppingCart },
                      { title: "Smart Inventory", icon: Cpu },
                      { title: "Personalization", icon: Lightbulb },
                      { title: "Global Scale", icon: Globe2 }
                    ].map((feat, i) => (
                      <div key={i} className="flex flex-col gap-2 group">
                        <feat.icon size={20} className="text-red-600 group-hover:scale-110 transition-transform" />
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 pb-1 border-b border-slate-200 group-hover:border-red-600 transition-colors">{feat.title}</h4>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise bg-white border-2 border-slate-200 text-slate-900 hover:bg-slate-950 hover:text-white hover:border-slate-950 px-8 py-3 text-sm">
                      Enhance Commerce Strategy
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 3.8 FINTECH */}
          <section className="py-12 bg-white relative overflow-hidden">          <div className="enterprise-container">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">Decentralized Finance</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[0.9]">
                  Fin<span className="text-red-600">Tech</span>
                </h2>

                <p className="text-xl text-slate-600 font-medium leading-relaxed italic mb-6">
                  "The future of finance isn't just digital; it's decentralized, transparent, and instantaneous."
                </p>
                <p className="text-base text-slate-400 leading-relaxed max-w-lg mb-6 border-l-2 border-red-600 pl-4">
                  We architect high-frequency trading platforms and secure blockchain ledgers that process millions of transactions with zero latency. Our solutions bridge the gap between traditional banking stability and <span className="text-red-600 font-bold">DeFi innovation.</span>
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Blockchain", "Algorithmic Trading", "Fraud Detection", "Digital Wallets"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider border border-slate-100 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6">
                  <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise bg-red-600 text-white border-red-600 hover:bg-slate-950 focus:ring-4 ring-red-200/50 rounded-full px-8 py-4 text-sm shadow-xl shadow-red-600/20">
                    Secure Your Capital
                  </Link>
                </div>
              </motion.div>

              <div className="lg:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50 group"
                >
                  <img
                    src={industryImg1_new}
                    alt="FinTech"
                    className="w-full aspect-square object-cover transition-transform duration-[3s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-transparent to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  className="absolute -top-6 -left-6 z-20 max-w-[220px]"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="bg-white p-6 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-l-4 border-red-600"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">Secure Node</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-50 rounded-full text-red-600 border border-slate-100 shadow-sm">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <p className="text-slate-900 text-sm font-bold">Encrypted</p>
                        <p className="text-[10px] text-slate-500 font-medium tracking-wide"><CountUp end={256} />-bit AES</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-900/20 blur-[100px] rounded-full" />
              </div>
            </div>
          </div>
          </section>

          {/* 3.9 GLOBAL DIGITAL INFRASTRUCTURE */}
          <section className="py-8 bg-slate-50 relative overflow-hidden">
            <div className="enterprise-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative order-2 lg:order-1"
                >
                  <div className="rounded-[2rem] overflow-hidden aspect-[16/9] shadow-2xl relative group border-4 border-white">
                    <img
                      src={globalMapImg}
                      alt="Global Infrastructure"
                      className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-transparent to-transparent" />

                    <div className="absolute inset-0">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <div
                          key={n}
                          className={`absolute w-2 h-2 bg-red-600 rounded-full animate-ping`}
                          style={{
                            top: `${[32, 65, 28, 38, 75][n - 1]}%`,
                            left: `${[18, 28, 52, 78, 85][n - 1]}%`,
                            animationDelay: `${n * 0.5}s`,
                            animationDuration: '2.5s'
                          }}
                        />
                      ))}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-xl font-bold leading-tight drop-shadow-md">Global Neural Network</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <p className="text-emerald-400 text-xs font-mono uppercase tracking-widest">System Online</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8 order-1 lg:order-2"
                >
                  <header>
                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">
                      <Globe2 size={14} className="text-red-600" /> Infrastructure Layer
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none mb-4">
                      Global <span className="text-red-600">Digital Grid.</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-lg">
                      Connecting continents with a unified, secure, and low-latency digital backbone that powers the next industrial revolution.
                    </p>
                  </header>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                    {[
                      { icon: ShieldCheck, label: "Cyber Defense", val: "Zero Trust" },
                      { icon: Activity, label: "Uptime", val: "99.999%" },
                      { icon: Cpu, label: "Processing", val: "Edge Computing" },
                      { icon: Zap, label: "Speed", val: "<10ms Global" }
                    ].map((stat, i) => (
                      <div key={i} className="flex gap-4 items-start group p-4 rounded-xl hover:bg-slate-950 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default">
                        <div className="p-2.5 bg-white rounded-lg shadow-sm border border-slate-100 text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                          <stat.icon size={18} />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-slate-500 transition-colors">{stat.label}</h4>
                          <p className="font-bold text-slate-900 text-sm group-hover:text-white transition-colors">{stat.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 4. CROSS-INDUSTRY ADVANTAGE */}
          <section className="py-12 bg-red-600">
            <div className="enterprise-container">
              <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                <div className="max-w-sm">
                  <h4 className="text-white text-2xl font-bold mb-2">The VelDurSen Advantage</h4>
                  <p className="text-white/90 text-sm font-medium">Standardized excellence across every vertical we serve.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { label: "Cloud Native", icon: Globe2 },
                    { label: "Security First", icon: ShieldCheck },
                    { label: "Enterprise AI", icon: Cpu },
                    { label: "Global Scale", icon: TrendingUp }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center md:items-start gap-3">
                      <item.icon className="text-white" size={24} />
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </PageLayout >
    </HelmetProvider >
  );
};

export default Services;
