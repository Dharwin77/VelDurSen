import { motion } from "framer-motion";
import { Brain, Cloud, Code, Shield, Database, Cpu, Network, Lock, BarChart3, Settings, Workflow, Layers, ArrowRight, CheckCircle2, Zap, GitBranch, Server, Container, Key, FileCheck, LineChart, Boxes, MessageSquare, Eye, Smartphone, TrendingUp, Sparkles } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";
import { Link } from "react-router-dom";

const Services = () => (
  <PageLayout>
    <PageHero
      tag="Our Services"
      title="Enterprise Technology Services at Global Scale"
      subtitle="Comprehensive technology services designed for global enterprises. From AI and cloud to security and data engineering, we deliver end-to-end solutions that power mission-critical operations worldwide."
    />

    {/* Services Overview */}
    <section className="section-padding bg-white">
      <div className="enterprise-container">
        <SectionHeader
          tag="What We Deliver"
          title="Full-Spectrum Enterprise Technology Services"
          subtitle="Five core service domains backed by deep expertise, proven methodologies, and global delivery capabilities serving enterprises across 50+ countries."
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { icon: Brain, title: "Enterprise AI Solutions", color: "bg-red-50 border-red-200 text-red-600" },
            { icon: Cloud, title: "Cloud & DevOps", color: "bg-slate-50 border-slate-200 text-slate-900" },
            { icon: Code, title: "Enterprise Software", color: "bg-red-50 border-red-200 text-red-600" },
            { icon: Shield, title: "Cybersecurity", color: "bg-slate-50 border-slate-200 text-slate-900" },
            { icon: Database, title: "Data Engineering", color: "bg-red-50 border-red-200 text-red-600" },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${s.color} border-2 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300`}
            >
              <s.icon className="mx-auto mb-3" size={32} />
              <span className="text-sm font-bold">{s.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Enterprise AI Solutions - Side-icon feature cards */}
    <section className="section-padding bg-section">
      <div className="enterprise-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Enterprise AI Solutions
          </span>
          <h2 className="section-title">Transform Operations with Enterprise AI</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            AI-powered intelligent systems designed for enterprise scale, security, and compliance across global operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: Sparkles,
              title: "Generative AI & Large Language Models",
              desc: "Enterprise-grade LLM integration, RAG architectures, fine-tuned models, and agentic AI systems",
              features: [
                "Custom LLM deployment on private infrastructure",
                "Retrieval-Augmented Generation (RAG) systems",
                "Fine-tuning for domain-specific knowledge",
                "Multi-modal AI (text, image, code generation)"
              ]
            },
            {
              icon: MessageSquare,
              title: "Natural Language Processing",
              desc: "Advanced NLP solutions for document understanding, sentiment analysis, and intelligent automation",
              features: [
                "Document classification and entity extraction",
                "Sentiment analysis and opinion mining",
                "Chatbots and conversational AI platforms",
                "Multilingual NLP across 50+ languages"
              ]
            },
            {
              icon: Eye,
              title: "Computer Vision Systems",
              desc: "Visual intelligence for quality control, security, and operational efficiency",
              features: [
                "Object detection and image classification",
                "Facial recognition and biometric systems",
                "Quality inspection and defect detection",
                "Video analytics and real-time monitoring"
              ]
            },
            {
              icon: TrendingUp,
              title: "Predictive Analytics & ML Ops",
              desc: "Production-ready machine learning pipelines with automated operations and monitoring",
              features: [
                "Demand forecasting and predictive maintenance",
                "Churn prediction and customer lifetime value",
                "Automated model retraining and deployment",
                "Model monitoring and drift detection"
              ]
            },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-xl bg-white border border-border hover:border-red-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-red-600 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Cloud & DevOps - Split panels */}
    <section className="section-padding bg-white">
      <div className="enterprise-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Cloud & DevOps Engineering
          </span>
          <h2 className="section-title">Build Resilient Cloud Infrastructure</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Cloud-native architectures and DevOps practices for scalable, reliable enterprise systems across multi-cloud environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-slate-50 border-2 border-slate-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <Cloud className="w-10 h-10 text-red-600" />
              <h3 className="text-2xl font-bold">Cloud-Native Architecture</h3>
            </div>
            <ul className="space-y-4">
              {[
                { title: "Microservices Design", desc: "Distributed, independently scalable service architectures" },
                { title: "Multi-Cloud Strategy", desc: "AWS, Azure, GCP optimization and workload distribution" },
                { title: "Serverless Computing", desc: "Event-driven functions and cost-optimized execution" },
                { title: "Cloud Migration", desc: "Legacy system modernization and cloud transformation" }
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0 mt-1">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-white border-2 border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="w-10 h-10 text-accent" />
              <h3 className="text-2xl font-bold">DevOps & Automation</h3>
            </div>
            <ul className="space-y-4">
              {[
                { title: "CI/CD Pipelines", desc: "Automated build, test, and deployment workflows" },
                { title: "Infrastructure as Code", desc: "Terraform, CloudFormation, and Ansible automation" },
                { title: "Kubernetes Orchestration", desc: "Container management and auto-scaling" },
                { title: "Monitoring & Observability", desc: "Prometheus, Grafana, ELK stack integration" }
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-slate-50 p-8 rounded-xl border border-red-100 text-center">
          <Container className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-3">Kubernetes Expertise</h4>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We specialize in Kubernetes deployments across cloud providers, implementing auto-scaling, service mesh architectures, and enterprise-grade security policies for containerized workloads.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["EKS", "AKS", "GKE", "Helm Charts", "Istio Service Mesh", "ArgoCD"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-foreground border border-red-100">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Enterprise Software Development - Step-based workflow */}
    <section className="section-padding bg-section">
      <div className="enterprise-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Enterprise Software Development
          </span>
          <h2 className="section-title">Custom Enterprise Applications</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Mission-critical enterprise applications built for performance, security, and global scale.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            {
              step: "01",
              title: "Requirements & Architecture",
              desc: "Deep-dive discovery, system design, and architecture planning",
              icon: Workflow
            },
            {
              step: "02",
              title: "Agile Development",
              desc: "Iterative development with continuous stakeholder feedback",
              icon: Code
            },
            {
              step: "03",
              title: "Quality Assurance",
              desc: "Comprehensive testing, security audits, and performance optimization",
              icon: CheckCircle2
            },
            {
              step: "04",
              title: "Deployment & Support",
              desc: "Seamless rollout and 24/7 enterprise-grade support",
              icon: Server
            },
          ].map((phase, i) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -top-3 -left-3 text-6xl font-bold text-red-50">{phase.step}</div>
              <div className="relative p-6 rounded-xl bg-white border-2 border-red-100 hover:shadow-lg transition-all duration-300">
                <phase.icon className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden md:block absolute top-20 -right-3 w-6 h-0.5 bg-red-100"></div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "ERP & CRM Systems",
              items: [
                "Custom ERP modules for finance, HR, inventory, and operations",
                "CRM platforms with sales, marketing, and customer service integration",
                "Integration with existing enterprise systems and databases",
                "Multi-tenant SaaS architectures for global deployment"
              ]
            },
            {
              title: "Executive Dashboards & BI Tools",
              items: [
                "Real-time executive dashboards with KPI tracking",
                "Interactive data visualization and reporting",
                "Predictive analytics and forecasting modules",
                "Mobile-responsive design for on-the-go access"
              ]
            },
          ].map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-xl bg-white border border-border"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-red-600" />
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Cybersecurity - Shield-style bordered cards */}
    <section className="section-padding bg-gradient-to-br from-red-50 to-rose-50">
      <div className="enterprise-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4">
            Cybersecurity & Compliance
          </span>
          <h2 className="section-title">Enterprise-Grade Security</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Comprehensive security solutions protecting enterprise assets across global operations and regulatory jurisdictions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Zero-Trust Architecture",
              items: [
                "Identity-based access control",
                "Micro-segmentation",
                "Continuous verification",
                "Least privilege enforcement"
              ]
            },
            {
              icon: Key,
              title: "Identity & Access Management",
              items: [
                "Single Sign-On (SSO) integration",
                "Multi-factor authentication (MFA)",
                "Role-based access control (RBAC)",
                "Privileged access management"
              ]
            },
            {
              icon: FileCheck,
              title: "Compliance Automation",
              items: [
                "GDPR, HIPAA, PCI-DSS frameworks",
                "SOC 2 Type II certification support",
                "ISO 27001 compliance",
                "Automated audit logging"
              ]
            },
            {
              icon: Lock,
              title: "Data Protection",
              items: [
                "End-to-end encryption (at rest & in transit)",
                "Data loss prevention (DLP)",
                "Secure key management",
                "Privacy-preserving analytics"
              ]
            },
            {
              icon: Eye,
              title: "Threat Detection & Response",
              items: [
                "SIEM integration and monitoring",
                "Intrusion detection systems",
                "Incident response playbooks",
                "24/7 security operations center"
              ]
            },
            {
              icon: Network,
              title: "Network Security",
              items: [
                "Next-gen firewalls and WAF",
                "DDoS protection and mitigation",
                "VPN and secure connectivity",
                "Network segmentation"
              ]
            },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-xl bg-white border-4 border-red-200 hover:border-red-400 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-100 mb-5">
                <service.icon className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-lg font-bold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="text-red-600 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-xl bg-white border-2 border-red-300 text-center">
          <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-3">100% Compliance Record</h4>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zero security breaches across our global client portfolio. Our security-first approach and continuous monitoring ensure enterprise assets remain protected across all threat vectors.
          </p>
        </div>
      </div>
    </section>

    {/* Data Engineering - Pipeline visual blocks */}
    <section className="section-padding bg-white">
      <div className="enterprise-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Data Engineering & Analytics
          </span>
          <h2 className="section-title">Transform Data into Intelligence</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Modern data engineering platforms and analytics solutions that turn raw data into actionable business intelligence.
          </p>
        </div>

        {/* Data Pipeline Visualization */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {[
              { icon: Database, title: "Data Sources", desc: "Databases, APIs, Streams" },
              { icon: Workflow, title: "ETL Pipelines", desc: "Extract, Transform, Load" },
              { icon: Server, title: "Data Warehouse", desc: "Centralized Storage" },
              { icon: LineChart, title: "Analytics & BI", desc: "Dashboards, Reports" },
            ].map((stage, i) => (
              <div key={stage.title} className="flex items-center gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 min-w-[200px]"
                >
                  <div className="p-6 rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 border-2 border-sky-200 text-center">
                    <stage.icon className="w-10 h-10 text-sky-600 mx-auto mb-3" />
                    <h4 className="font-bold mb-1">{stage.title}</h4>
                    <p className="text-xs text-muted-foreground">{stage.desc}</p>
                  </div>
                </motion.div>
                {i < 3 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-sky-300 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Big Data Processing",
              icon: Boxes,
              items: [
                "Apache Spark for distributed data processing",
                "Kafka for real-time data streaming",
                "Hadoop ecosystem integration",
                "Petabyte-scale data processing capabilities"
              ]
            },
            {
              title: "Business Intelligence Dashboards",
              icon: BarChart3,
              items: [
                "Interactive Power BI and Tableau dashboards",
                "Custom analytics platforms",
                "Self-service BI tools for business users",
                "Mobile-responsive data visualization"
              ]
            },
            {
              title: "Data Warehousing",
              icon: Database,
              items: [
                "Snowflake, Redshift, BigQuery implementation",
                "Data modeling and schema design",
                "Performance optimization and indexing",
                "Multi-region data replication"
              ]
            },
            {
              title: "Real-Time Analytics",
              icon: Zap,
              items: [
                "Streaming analytics and event processing",
                "Real-time dashboards and alerts",
                "Low-latency data pipelines",
                "Live operational intelligence"
              ]
            },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-xl border-2 border-border hover:border-sky-300 hover:shadow-lg transition-all duration-300 bg-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="section-padding bg-primary">
      <div className="enterprise-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise Technology?
          </h2>
          <p className="text-xl text-white/85 mb-8 max-w-2xl mx-auto">
            Let's discuss how our enterprise technology services can accelerate your digital transformation goals.
          </p>
          <Link to="/contact" state={{ fromButton: true }} className="btn-accent inline-flex items-center px-10 py-4 text-base">
            Talk to Our Experts <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>

    <BlogPreview />
  </PageLayout>
);

export default Services;
