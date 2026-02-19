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
import { client, urlFor } from "@/lib/sanity";

// --- Icon Map for Dynamic Rendering ---
const iconMap: Record<string, any> = {
    Search, Code, Play, Shield, ArrowRight, Briefcase, Cpu, Layers, Zap, CheckCircle2,
    TrendingUp, ShieldCheck, Quote, ChevronLeft, ChevronRight, Smartphone, Database, Cloud, Globe2,
    Target, Award, Infinity: InfinityIcon, Leaf, Handshake, Heart, GraduationCap, Factory, Landmark, ShoppingCart,
    Building2, Sprout, BarChart3, Lightbulb, Activity, Microscope, Brain, RefreshCcw, Sparkles, Network, Droplets, FlaskConical, ArrowRightLeft
};

const getIcon = (name: string) => {
    return iconMap[name] || Zap; // Default to Zap if not found
};

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
        fullDescription: "Our AI practice delivers end-to-end intelligent solutionsâ€”from custom large language model fine-tuning to real-time computer vision pipelines. We help enterprises harness the power of machine learning to automate decisions, uncover hidden patterns, and create entirely new product categories.",
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
        description: "Excellence isnâ€™t a one-time achievement; itâ€™s a standard weâ€™ve maintained across hundreds of complex deployments. We don't just point to a list of logosâ€”we point to the years of partnership that followed the initial \"go-live.\"",
        note: "Our history is built on high-stakes environments where downtime isn't an option and \"good enough\" is a failure. Whether itâ€™s navigating regulatory hurdles or scaling infrastructure by 400%, our track record is defined by the stability we provide under pressure."
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
        description: "Innovation is easy in a lab; itâ€™s incredibly difficult across a global enterprise. We bridge that gap by focusing on pragmatic cutting-edge. We don't chase every tech trend; we curate the ones that offer a true competitive advantage.",
        note: "Our AI frameworks aren't just \"chatbots\"â€”they are deep-learning models integrated into your supply chain. Our cloud architectures allow your developers to deploy at the speed of thought while maintaining total security."
    },
    {
        icon: Globe2,
        title: "4. Global Delivery Network",
        description: "A global partner must be local everywhere. Our delivery network isn't just about \"coverage\"; itâ€™s about context. We understand that a deployment in Singapore requires a different cultural and regulatory lens than one in Berlin or New York.",
        note: "Our \"Follow the Sun\" model ensures that while your headquarters sleeps, your innovation continues. We remove the friction of borders, time zones, and languages, providing a unified experience that makes your global operation feel like a single, cohesive unit."
    },
    {
        icon: Briefcase,
        title: "5. Industry-Specific Solutions",
        description: "Generalists provide templates; specialists provide solutions. Weâ€™ve spent decades in the trenches of specific sectors.",
        note: "Healthcare: We understand that \"data\" is actually a patient's life. Finance: We navigate the labyrinth of global fintech regulations. Manufacturing: We turn raw sensor data into predictive maintenance schedules that save millions."
    },
    {
        icon: Award,
        title: "6. Trusted by Leaders",
        description: "The worldâ€™s most respected organizations don't choose us for our tech stack; they choose us for our judgment. They value a partner who has the courage to say \"no\" to a bad strategy and the technical mastery to execute a difficult one.",
        note: "This trust is earned through transparency and a shared commitment to the mission. When a CEO stakes their reputation on a digital transformation, they need a partner whose skin is in the game as much as their own."
    },
    {
        icon: ShieldCheck,
        title: "7. Commitment to Security & Compliance",
        description: "Security is no longer an IT checkbox; itâ€™s a board-level risk. We build with a \"Zero-Trust\" mindset from the first line of code. Our security frameworks aren't bolted on at the endâ€”they are woven into the architecture.",
        note: "We stay ahead of the shifting landscape of GDPR, ISO, and evolving cyber threats so that you never have to choose between speed and safety. We don't just protect your data; we protect your brandâ€™s integrity."
    },
    {
        icon: Leaf,
        title: "8. Sustainable & Responsible Growth",
        description: "In the modern economy, \"how\" you grow matters as much as \"how much\" you grow. We help our partners reduce their carbon footprint through intelligent resource allocation and energy-efficient cloud optimization.",
        note: "Beyond the environment, we advocate for Ethical AIâ€”ensuring that automation is transparent, unbiased, and designed to augment human potential rather than replace it. We believe a legacy of profit is only valuable if itâ€™s built on a foundation of responsibility."
    },
    {
        icon: Handshake,
        title: "9. Partnership Beyond Technology",
        description: "The strongest contracts are those written in mutual success, not just legal ink. We operate as an extension of your internal team, sharing the same KPIs and the same vision.",
        note: "We celebrate when you hit your quarterly targets and we pull \"all-nighters\" with you when a crisis hits. This level of emotional and strategic investment is why our client retention rates are among the highest in the industry. We aren't a vendor you \"manage\"â€”we are a partner you \"collaborate\" with."
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

// --- Main Page Component ---

const Services = () => {
    const [currentReview, setCurrentReview] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const scrollToElement = (id: string) => {
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        };

        if (location.hash) {
            scrollToElement(location.hash.slice(1));
        } else if (location.state?.scrollTo) {
            scrollToElement(location.state.scrollTo);
        }
    }, [location]);

    // Technologies State
    const [activePillar, setActivePillar] = useState<number | null>(null);
    const [selectedLab, setSelectedLab] = useState(0);

    // --- Sanity Integration ---
    const [sanityData, setSanityData] = useState<any>(null);

    useEffect(() => {
        const query = `{
      "hero": *[_type == "servicesHero"][0],
      "whatsIncluded": *[_type == "whatsIncluded"][0],
      "whatsIncludedExplanation": *[_type == "whatsIncludedExplanation"][0],
      "ourServices": *[_type == "ourServices"][0],
      "technologyPillars": *[_type == "technologyPillars"][0],
      "bridgingTheGap": *[_type == "bridgingTheGap"][0],
      "thePath": *[_type == "thePath"][0],
      "reliability": *[_type == "reliability"][0],
      "innovationEngine": *[_type == "innovationEngine"][0],
      "whyGlobalLeadersChooseUs": *[_type == "whyGlobalLeadersChooseUs"][0],
      "clientStories": *[_type == "clientStories"][0],
      "ourIndustries": *[_type == "ourIndustries"][0],
      "strategicDifferentiation": *[_type == "strategicDifferentiation"][0],
      "velDurSenAdvantage": *[_type == "velDurSenAdvantage"][0]
    }`;

        client.fetch(query).then((data) => {
            setSanityData(data);
        }).catch(console.error);
    }, []);

    // --- Derived Data with Fallbacks ---
    const heroData = sanityData?.hero;
    const whatsIncludedData = sanityData?.whatsIncluded;
    const whatsIncludedExplanationData = sanityData?.whatsIncludedExplanation;
    const ourServicesData = sanityData?.ourServices;
    const technologyPillarsData = sanityData?.technologyPillars;
    const bridgingTheGapData = sanityData?.bridgingTheGap;
    const thePathData = sanityData?.thePath;
    const reliabilityData = sanityData?.reliability;
    const innovationEngineData = sanityData?.innovationEngine;
    const whyChooseUsSanityData = sanityData?.whyGlobalLeadersChooseUs;
    const clientStoriesData = sanityData?.clientStories;
    const ourIndustriesData = sanityData?.ourIndustries;
    const strategicDifferentiationData = sanityData?.strategicDifferentiation;
    const velDurSenAdvantageData = sanityData?.velDurSenAdvantage;

    // Mapped Arrays
    const displayServices = ourServicesData?.servicesList?.map((s: any) => ({
        ...s,
        icon: getIcon(s.iconName),
        image: s.image ? urlFor(s.image).url() : "",
        features: s.features || [],
        methodology: s.methodology || [],
        details: s.details || []
    })) || services;

    const displayPillars = technologyPillarsData?.pillars?.map((p: any, i: number) => ({
        ...p,
        id: i + 1,
        icon: getIcon(p.iconName),
        bg: p.bgImage ? urlFor(p.bgImage).url() : pillars[i]?.bg,
        color: i % 2 === 0 ? "bg-red-50" : "bg-slate-50",
        accent: i % 2 === 0 ? "text-red-600" : "text-slate-900"
    })) || pillars;

    const displayReviews = clientStoriesData?.reviews?.map((r: any) => ({
        ...r,
        color: r.color || "from-blue-400 to-purple-500"
    })) || reviews;

    const displayWhyChooseUs = whyChooseUsSanityData?.items?.map((item: any) => ({
        ...item,
        icon: getIcon(item.iconName)
    })) || whyChooseUsData;

    const displayRoadmap = thePathData?.steps?.map((s: any) => ({
        title: s.title,
        icon: getIcon(s.iconName)
    })) || roadmapSteps;

    const displayLabProjects = innovationEngineData?.projects?.map((p: any, i: number) => ({
        ...p,
        id: i,
        image: p.image ? urlFor(p.image).url() : labProjects[i]?.image,
    })) || labProjects;

    const displayIndustries = ourIndustriesData?.industriesList?.map((ind: any) => ({
        ...ind,
        image: ind.image ? urlFor(ind.image).url() : "",
        features: ind.features?.map((f: any) => ({ ...f, icon: getIcon(f.iconName) }))
    })) || [];

    const displayDifferentiation = strategicDifferentiationData?.items?.map((d: any) => ({
        ...d,
        icon: getIcon(d.iconName)
    })) || whyChooseUsData;

    const displayAdvantage = velDurSenAdvantageData?.items?.map((a: any) => ({
        ...a,
        icon: getIcon(a.iconName)
    })) || [];

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
                    <motion.div
                        onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
                        className="contents"
          >
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
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-red-500 mb-6 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  {heroData?.badge || "Our Services"}
                </span>
                <h1 className="text-[2.0rem] xs:text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-bold text-amber-200 leading-[1.05] mb-6 md:mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                  {heroData?.titleLine1 || "Enterprise"} <br />
                  <span className="text-amber-100">{heroData?.titleLine2 || "Performance."}</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-medium mb-6 sm:mb-8 md:mb-12 max-w-3xl leading-relaxed drop-shadow-md">
                  {heroData?.description || "Comprehensive technology services designed for global enterprises. From AI and cloud to security and data engineering, we deliver end-to-end solutions that power mission-critical operations worldwide."}
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <button onClick={() => document.getElementById('our-solutions-architecture')?.scrollIntoView({ behavior: 'smooth' })} className="btn-enterprise py-4 sm:py-5 px-8 sm:px-12 text-base sm:text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-2xl shadow-red-600/20 w-full sm:w-auto">
                    {heroData?.buttonText || "Explore Our Services"}
                  </button>
                  <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 px-4 sm:px-6 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                    <Globe2 size={16} className="text-red-600 shadow-sm" /> {heroData?.globalNetworkText || "Global Delivery Network"}
                  </div>
                </div>
              </motion.div>
            </div>

{/* Floating Abstract Element */ }
<div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-0" />
          </motion.div >
        </section >

    {/* Services Breakdown - What's Included */ }
    < section className = "pt-12 pb-8 bg-white relative overflow-hidden" >
        <motion.div
            onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#2563eb' } }))}
            onViewportLeave={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
            viewport={{ margin: "-10% 0px -70% 0px" }}
        >
            {/* Architectural Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="enterprise-container relative z-10">
                <div className="max-w-4xl mx-auto mb-20 group text-center">
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-6 block">{whatsIncludedData?.badge || "Lifecycle Model"}</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-[900] text-[#0f172a] group-hover:text-blue-600 transition-colors duration-300 mb-8 tracking-tighter"
                    >
                        {whatsIncludedData?.title || "What's Included."}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
                    >
                        {whatsIncludedData?.description || "Technology is never a \"set it and forget it\" endeavor. True digital transformation requires a partner who is willing to stay in the trenches long after the initial excitement of a launch has faded. We provide a comprehensive lifecycle model that shifts the technical burden off your shoulders and onto ours, ensuring that your infrastructure remains an asset rather than a liability."}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {(whatsIncludedData?.cards?.map((c: any) => ({
                        ...c,
                        icon: getIcon(c.iconName),
                        color: "group-hover:text-blue-600" // Default/Fallback color logic if needed
                    })) || [
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
                        ]).map((item: any, i: number) => (
                            <WhatsIncludedCard key={item.title} item={item} index={i} />
                        ))}
                </div>

                <div className="mt-24 max-w-full mx-auto">
                    <div className="space-y-16">
                        {(whatsIncludedExplanationData?.steps?.map((s: any) => ({
                            ...s,
                            image: s.image ? urlFor(s.image).url() : null
                        })) || [
                                {
                                    title: "1. Consultation: Strategic Discovery & Roadmap Planning",
                                    desc: "We believe the most expensive mistake a company can make is building the \"wrong\" solution perfectly. Our process begins with a deep dive into your operational reality. We don't just ask what you want to build; we ask what business problem you are trying to solve.",
                                    outcome: "You receive a pragmatic, battle-tested roadmap that balances immediate technical needs with your three-to-five-year fiscal goals. We identify the \"unseen\" risks earlyâ€”regulatory hurdles, integration bottlenecks, and scalability ceilingsâ€”so they never become surprises later.",
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
                                    desc: "Software begins to age the moment it is deployed. Our maintenance philosophy is proactive, not reactive. We donâ€™t wait for a system crash to look at your servers; we are constantly \"under the hood\" ensuring the engine is running at peak efficiency.",
                                    outcome: "We handle the delicate work of dependency updates, framework migrations, and performance tuning. Our goal is to ensure your platform performs better on day 500 than it did on day one, reducing technical debt and extending the lifespan of your investment.",
                                    image: maintenanceImg
                                },
                                {
                                    title: "4. Security: Zero-Trust Protocols & Compliance",
                                    desc: "In todayâ€™s landscape, security is a board-level risk that canâ€™t be solved with a simple firewall. We bake security into the very first line of code using a Zero-Trust frameworkâ€”verifying every request, every time, without exception.",
                                    outcome: "We build \"hardened\" environments that protect your proprietary data and customer trust. From navigating the complexities of GDPR and HIPAA to implementing advanced encryption and threat-hunting, we ensure your brand stays out of the headlines for the wrong reasons.",
                                    image: securityImg
                                },
                                {
                                    title: "5. Support: 24/7 Global Expert Assistance",
                                    desc: "When a critical system goes down, you donâ€™t need a generic ticketing system; you need a senior engineer who knows your architecture. Our support is handled by experts, not scripted call centers.",
                                    outcome: "We provide true \"follow-the-sun\" coverage. Whether itâ€™s a minor configuration tweak or a midnight emergency, you have direct access to specialists who understand the stakes. We don't just patch problems; we identify the root cause to ensure they never happen again.",
                                    image: supportImg
                                }
                            ]).map((item: any, idx: number) => (
                                <div id={`service-detail-${idx}`} key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center group`}>

                                    {/* Text Side */}
                                    <div className="flex-1 space-y-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 font-black text-lg group-hover:bg-[#dc2626] group-hover:text-white transition-colors duration-300 shrink-0">
                                                0{idx + 1}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-[#0f172a] group-hover:text-[#dc2626] transition-colors duration-300">
                                                {whatsIncludedExplanationData ?
                                                    (item.titlePrefix || item.title?.split(":")[0])
                                                    : item.title.split(":")[0]}
                                            </h3>
                                        </div>

                                        <h4 className="text-xl font-bold text-slate-800">
                                            {whatsIncludedExplanationData ?
                                                (item.titleSuffix || item.title?.split(":")[1])
                                                : item.title.split(":")[1]}
                                        </h4>

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
                                                src={item.image || developmentImg} // Fallback image if null
                                                alt={item.titlePrefix || item.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>

                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </motion.div>
        </section >

    {/* Our Services Section - Interactive Service Wheel */ }
{/* Our Services Section - New Grid Implementation */ }
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        </div>

        <section id="our-solutions-architecture" className="py-12 bg-gray-50/50 overflow-hidden relative">
          <motion.div
            onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#f97316' } }))}
            onViewportLeave={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
            viewport={{ margin: "-10% 0px -70% 0px" }}
            className="enterprise-container relative z-10"
          >
            <div className="text-center mb-16 mt-10">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block text-[10px] font-black uppercase tracking-[0.5em] text-orange-600 mb-3"
              >
                {ourServicesData?.badge || "SOLUTIONS ARCHITECTURE"}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-[900] text-[#0f172a]"
              >
                {ourServicesData?.title ? ourServicesData.title.split(' ')[0] : "Our"} <span className="text-orange-600">{ourServicesData?.title ? ourServicesData.title.split(' ').slice(1).join(' ') : "Services."}</span>
              </motion.h2>
            </div>

            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {displayServices.map((service, index) => (
                  <ServiceCard
                    key={service.id || index}
                    service={service}
                    index={index}
                    onSelect={(s) => navigate(`/services/${s.id}`, { state: { fromButton: true } })}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>



{/* --- TECHNOLOGIES SECTION START --- */ }
{/* 3. TECHNOLOGY PILLARS SECTION (VERTICAL HOVER STYLE) */ }
<section id="technology-pillars" className="pt-12 md:pt-20 pb-0 bg-white overflow-hidden">
    <div className="enterprise-container">
        <div className="mb-12 text-center">
            <span className="text-green-600 font-black uppercase tracking-widest text-xs mb-4 block">{technologyPillarsData?.badge || "Core Competencies"}</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{technologyPillarsData?.title || "Technology"} <span className="text-green-600">Pillars.</span></h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[550px]">
            {displayPillars.map((pillar: any, idx: number) => (
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
                                    {(pillar.capabilities || []).map((c: string) => (
                                        <span key={c} className="text-[10px] font-bold bg-white/10 text-white backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">{c}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">Sector Impact</h4>
                                <div className="flex flex-wrap gap-4">
                                    {(pillar.examples || []).map((e: string) => (
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


{/* 5. LEGACY MODERNIZATION BRIDGE (ENHANCED) */ }
<section className="section-padding bg-white relative overflow-hidden">
    <div className="enterprise-container">
        <div className="flex flex-col items-center justify-center gap-16 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-4xl"
            >
                <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">{bridgingTheGapData?.badge || "Legacy to Modern"}</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                    {bridgingTheGapData?.title?.split('Core')[0] || "Bridging the Gap Between "} <br />
                    <span className="text-red-600">{bridgingTheGapData?.title?.includes('Core') ? "Core & Cloud." : "Legacy & Future."}</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                    {bridgingTheGapData?.description || "VelDurSen specializes in building high-performance bridges that enable bi-directional data flow and gradual modernization without disrupting mission-critical operations."}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {(bridgingTheGapData?.cards?.map((c: any) => ({
                        ...c,
                        icon: getIcon(c.iconName)
                    })) || [
                            { title: "Legacy Encapsulation", desc: "Wrapping monolithic systems in modern API layers.", icon: Layers },
                            { title: "Data Synchronization", desc: "Real-time consistency between on-prem and cloud.", icon: ArrowRightLeft }
                        ]).map((item: any, i: number) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5, backgroundColor: "#fff", borderColor: "#ef4444" }}
                                className="flex flex-col items-center text-center gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-red-600/5 group"
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


        </div>
    </div>
</section>

{/* 6. ENGINEERING EXCELLENCE MODEL (INTERACTIVE ROADMAP) */ }
<section className="py-32 bg-slate-50 relative overflow-hidden">
    <div className="enterprise-container">
        <div className="mb-24 text-center relative z-10">
            <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] bg-white px-4 py-2 rounded-full border border-blue-100 shadow-sm inline-block mb-6">{thePathData?.badge || "Execution Lifecycle"}</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">{thePathData?.title?.split('Illustration')[0] || "The Path to "} <span className="text-blue-600">Innovation.</span></h2>
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
                {displayRoadmap.map((step: any, i: number) => (
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
        </div>
    </div>
</section>


{/* 7. PERFORMANCE & SCALABILITY BLOCK - TECHNICAL SCHEMATIC STYLE */ }
<section className="py-20 bg-white relative overflow-hidden">
    <motion.div
        onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#f59e0b' } }))}
        onViewportLeave={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
        viewport={{ margin: "-10% 0px -70% 0px" }}
    >
        {/* Precision Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="enterprise-container relative z-10">
            <div className="flex flex-col items-center justify-center mb-12 gap-8 text-center">
                <div className="max-w-2xl">
                    <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Precision Telemetry</span>
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-2">
                        Reliability <br />
                        <span className="text-orange-600">Calculated.</span>
                    </h2>
                </div>
                <div className="max-w-md pb-2">
                    <p className="text-slate-500 text-sm font-medium leading-relaxed border-t-4 border-orange-600 pt-4">
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

        </div>
    </motion.div>
</section>

{/* 8.5 INNOVATION LAB SECTION - DASHBOARD STYLE */ }
<section className="py-32 bg-slate-50 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-white hidden lg:block" />
    <div className="enterprise-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
                <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Internal R&D Lab</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
                    The VelDurSen <br />
                    <span className="text-green-600">Innovation Engine.</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-xl font-medium">
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
                                        {[0, 1, 2, 3, 4, 5].map((i) => (
                                            <div
                                                key={i}
                                                className="flex-1 bg-red-600/20 rounded-full"
                                                style={{ height: [15, 12, 22, 18, 25, 14][i] }}
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
{/* --- TECHNOLOGIES SECTION END --- */ }

{/* Value Proposition / Trust Section */ }
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        </div>

        <section className="py-20 bg-white text-[#0f172a] overflow-hidden relative">
          <motion.div
            onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#dc2626' } }))}
            onViewportLeave={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
            viewport={{ margin: "-10% 0px -70% 0px" }}
          >
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
          </motion.div>
        </section>

{/* --- DYNAMIC INDUSTRIES CONTENT --- */ }
<div id="industries-full-content" className="relative">

    {/* Industries Intro */}
    <section className="py-20 bg-white relative overflow-hidden">
        <motion.div
            onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#dc2626' } }))}
            onViewportLeave={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
            viewport={{ margin: "-10% 0px -70% 0px" }}
            className="enterprise-container"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-12 mb-6 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                        {ourIndustriesData?.title ? ourIndustriesData.title.split(' ')[0] : "Our"} <span className="text-red-600">{ourIndustriesData?.title ? ourIndustriesData.title.split(' ').slice(1).join(' ') : "Industries."}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-bold max-w-4xl">
                        "{ourIndustriesData?.quote || "Generic solutions dilute enterprise potential. We build for the unique complexity of your industry."}"
                    </p>
                </div>
            </div>
        </motion.div>
    </section>

    {/* Dynamic Industry Sections */}
    {displayIndustries.map((industry: any, i: number) => (
        <section key={i} className={`py-16 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'} relative overflow-hidden`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="enterprise-container"
            >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Text Content */}
                    <div className={`space-y-6 ${i % 2 !== 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-1'}`}>
                        <div>
                            <span className="flex items-center gap-3 text-red-600 font-bold uppercase tracking-widest text-[10px] mb-4">
                                <div className="w-10 h-0.5 bg-red-600" /> {industry.badge || "Industry Solution"}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tighter">
                                {industry.name}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                {industry.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {industry.features?.map((feat: any, idx: number) => (
                                <div key={idx} className="space-y-2 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                    <feat.icon size={24} className="text-red-600" />
                                    <h4 className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">{feat.title}</h4>
                                    <p className="text-[11px] text-slate-500 font-bold leading-relaxed">{feat.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link to="/contact" state={{ fromButton: true }} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-950 pb-1 border-b-2 border-slate-950 hover:text-red-600 hover:border-red-600 transition-all">
                                Explore {industry.name} <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className={`relative ${i % 2 !== 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-2'}`}>
                        <div className="rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl group border-4 border-white">
                            <img
                                src={industry.image || industryImg1_new}
                                alt={industry.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    ))}
</div>

{/* 4. STRATEGIC DIFFERENTIATION */ }
<section className="py-32 bg-slate-50 relative overflow-visible">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-transparent to-red-600 opacity-20" />
    <div className="enterprise-container">
        <div className="text-center mb-20">
            <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">{strategicDifferentiationData?.badge || "Strategic Differentiation"}</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
                {strategicDifferentiationData?.title?.split('Edge')[0] || "The VelDurSen "} <span className="text-red-600">{strategicDifferentiationData?.title?.includes('Edge') ? "Edge." : "Difference."}</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayDifferentiation.map((item: any, i: number) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-red-600/5 transition-all duration-500 group"
                >
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-red-600 mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
                        <item.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-red-600 transition-colors uppercase italic">
                        {item.title.includes('.') ? item.title.split('. ')[1] : item.title}
                    </h3>
                    <p className="text-slate-500 font-medium leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                        {item.description}
                    </p>
                    <div className="pt-6 border-t border-slate-50">
                        <p className="text-[11px] text-slate-400 font-bold leading-relaxed group-hover:text-slate-500">
                            {item.note}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
</section>

{/* 5. VELDURSEN ADVANTAGE */ }
<section className="py-12 bg-red-600">
    <div className="enterprise-container">
        <div className="flex flex-col items-center justify-center gap-12 text-center">
            <div className="max-w-md">
                <h4 className="text-white text-2xl font-bold mb-2">{velDurSenAdvantageData?.title || "The VelDurSen Advantage"}</h4>
                <p className="text-white/90 text-sm font-medium">{velDurSenAdvantageData?.subtitle || "Standardized excellence across every vertical we serve."}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {(velDurSenAdvantageData?.items?.map((item: any) => ({
                    ...item,
                    icon: getIcon(item.iconName)
                })) || [
                        { label: "Cloud Native", icon: Globe2 },
                        { label: "Security First", icon: ShieldCheck },
                        { label: "Enterprise AI", icon: Cpu },
                        { label: "Global Scale", icon: TrendingUp }
                    ]).map((item: any, i: number) => (
                        <div key={i} className="flex flex-col items-center gap-3">
                            <item.icon className="text-white" size={24} />
                            <span className="text-[10px] font-bold text-white uppercase tracking-widest">{item.label}</span>
                        </div>
                    ))}
            </div>
        </div>
    </div>
</section>
      </PageLayout >
    </HelmetProvider >
  );
};

export default Services;
