import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase, Cpu, Layers, Zap, CheckCircle2, TrendingUp, Globe, ShieldCheck, X, QuoteIcon, ChevronLeft, ChevronRight, Smartphone, Database, Cloud } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// --- Interfaces ---

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceStep {
  step: string;
  title: string;
  desc: string;
}

interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  icon: React.ElementType;
  features: ServiceFeature[];
  methodology: ServiceStep[];
}

// --- Data ---

const services: Service[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    tagline: "Intelligent Systems",
    description: "Intelligent systems that learn and adapt. We engineer scalable AI solutions from generative models to predictive analytics.",
    fullDescription: "Our AI practice delivers end-to-end intelligent solutions—from custom large language model fine-tuning to real-time computer vision pipelines. We help enterprises harness the power of machine learning to automate decisions, uncover hidden patterns, and create entirely new product categories.",
    icon: Cpu,
    features: [
      { title: "Custom LLM Training", description: "Fine-tuned language models tailored to your domain and data." },
      { title: "Computer Vision Systems", description: "Image and video analysis pipelines for quality control and recognition." },
      { title: "Predictive Analytics", description: "Data-driven forecasting to anticipate trends and outcomes." },
    ],
    methodology: [
      { step: "01", title: "Automated Customer Support", desc: "AI-powered chatbots and virtual agents that resolve queries 24/7." },
      { step: "02", title: "Fraud Detection Systems", desc: "Real-time anomaly detection to safeguard financial transactions." },
      { step: "03", title: "Supply Chain Forecasting", desc: "Demand prediction models that optimize inventory and logistics." },
    ]
  },
  {
    id: "web-mobile",
    title: "Web & Mobile App Dev",
    tagline: "Cross-Platform Excellence",
    description: "Seamless digital experiences across all devices using modern frameworks for fast, responsive, and robust applications.",
    fullDescription: "We build performant, user-centric web and mobile applications using cutting-edge frameworks like React, Next.js, and native iOS/Android SDKs. From e-commerce storefronts to enterprise dashboards, our products are engineered for speed, accessibility, and scale.",
    icon: Smartphone,
    features: [
      { title: "React & Next.js Development", description: "Server-rendered and static web apps with blazing-fast performance." },
      { title: "iOS & Android Native Apps", description: "Platform-specific applications for the best user experience." },
      { title: "PWA Implementation", description: "Progressive web apps that work offline and feel native." },
    ],
    methodology: [
      { step: "01", title: "E-commerce Platforms", desc: "High-conversion storefronts with seamless checkout and inventory." },
      { step: "02", title: "Enterprise Dashboards", desc: "Real-time data visualization tools for executive decision-making." },
      { step: "03", title: "Patient Portals", desc: "HIPAA-compliant healthcare platforms for patient engagement." },
    ]
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    tagline: "Data at Scale",
    description: "Robust data pipelines and warehouses that transform raw data into actionable insights for your business intelligence.",
    fullDescription: "We architect modern data platforms that ingest, process, and deliver data at any scale. From ETL pipeline design to real-time streaming architectures, we ensure your organization has the data infrastructure needed to power analytics, AI, and operational reporting.",
    icon: Database,
    features: [
      { title: "ETL Pipeline Design", description: "Automated extract-transform-load workflows for data integration." },
      { title: "Data Warehousing", description: "Centralized repositories optimized for analytical querying." },
      { title: "Real-time Streaming", description: "Event-driven architectures for instant data processing." },
    ],
    methodology: [
      { step: "01", title: "Real-time Stock Analysis", desc: "Sub-second market data processing for trading platforms." },
      { step: "02", title: "Customer 360 View", desc: "Unified customer profiles aggregated from all touchpoints." },
      { step: "03", title: "IoT Data Ingestion", desc: "High-throughput pipelines for sensor and device telemetry." },
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Infinite Scale",
    description: "Cloud-native architectures and automated CI/CD pipelines ensuring 99.99% uptime and scalable infrastructure.",
    fullDescription: "We design and manage cloud-native infrastructures on AWS, Azure, and GCP. Our DevOps practice delivers fully automated CI/CD pipelines, container orchestration with Kubernetes, and infrastructure-as-code for resilient, secure, and infinitely scalable systems.",
    icon: Cloud,
    features: [
      { title: "Cloud Architecture", description: "Multi-cloud and hybrid designs for maximum flexibility." },
      { title: "Kubernetes Management", description: "Container orchestration for microservices at scale." },
      { title: "CI/CD Automation", description: "Automated build, test, and deployment pipelines." },
    ],
    methodology: [
      { step: "01", title: "Auto-scaling Infrastructure", desc: "Dynamic resource allocation that responds to real-time demand." },
      { step: "02", title: "Multi-region Failover", desc: "Geo-redundant deployments for zero-downtime resilience." },
      { step: "03", title: "DevSecOps Integration", desc: "Security baked into every stage of the delivery pipeline." },
    ]
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    tagline: "Zero-Trust Defense",
    description: "Military-grade security protocols and zero-trust architectures to protect your digital assets against evolving threats.",
    fullDescription: "Our cybersecurity practice provides comprehensive protection through penetration testing, compliance auditing, and identity management. We implement zero-trust architectures and continuous monitoring to safeguard your organization against the most sophisticated threats.",
    icon: ShieldCheck,
    features: [
      { title: "Penetration Testing", description: "Simulated attacks to identify and remediate vulnerabilities." },
      { title: "SOC2 & GDPR Compliance", description: "End-to-end regulatory compliance programs." },
      { title: "Identity Management", description: "Robust authentication and authorization frameworks." },
    ],
    methodology: [
      { step: "01", title: "Data Breach Prevention", desc: "Proactive threat hunting and intrusion detection systems." },
      { step: "02", title: "Identity Access Management", desc: "Role-based access control and single sign-on solutions." },
      { step: "03", title: "Compliance Auditing", desc: "Continuous compliance monitoring and certification support." },
    ]
  },
  {
    id: "automation",
    title: "Automation & Integration",
    tagline: "Connect & Automate",
    description: "Connecting disparate systems and automating manual workflows to streamline operations and eliminate silos.",
    fullDescription: "We break down operational silos by integrating your systems through custom APIs, robotic process automation, and legacy modernization. Our solutions eliminate manual bottlenecks, reduce errors, and free your teams to focus on high-value work.",
    icon: Zap,
    features: [
      { title: "API Development", description: "Custom RESTful and GraphQL APIs for seamless connectivity." },
      { title: "RPA Solutions", description: "Software robots that automate repetitive business tasks." },
      { title: "Legacy Modernization", description: "Migrating outdated systems to modern, maintainable platforms." },
    ],
    methodology: [
      { step: "01", title: "Invoice Processing", desc: "End-to-end automation of accounts payable workflows." },
      { step: "02", title: "HR Onboarding", desc: "Streamlined employee onboarding with automated provisioning." },
      { step: "03", title: "Inventory Synchronization", desc: "Real-time stock synchronization across all sales channels." },
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

// --- Components ---

const cardBorderColors = [
  "border-l-blue-500",
  "border-l-violet-500",
  "border-l-emerald-500",
  "border-l-orange-500",
  "border-l-rose-500",
  "border-l-cyan-500",
];

const ServiceCard = ({ service, index, onSelect }: { service: Service; index: number; onSelect: (s: Service) => void }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative flex flex-col h-full bg-white border border-gray-300 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-150 ease-out"
      style={{
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
      }}
      onClick={() => onSelect(service)}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 12px 30px rgba(50, 50, 50, 0.25), 0 4px 10px rgba(0, 0, 0, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.06)";
      }}
    >
      {/* Top Gradient Accent Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700"></div>

      {/* Subtle corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-100/60 to-transparent rounded-bl-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-150"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-50/50 to-transparent rounded-tr-full pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-150"></div>

      <div className="p-8 flex flex-col h-full relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 bg-violet-50 rounded-xl group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-150">
            <service.icon className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase text-violet-300 group-hover:text-violet-500 transition-colors duration-150">
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {service.title}
          </h3>
          <p className="text-sm font-medium text-violet-400 mb-4 uppercase tracking-wider">
            {service.tagline}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Micro-features */}
          <ul className="space-y-2 mb-8 border-t border-violet-100 pt-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-violet-500 mt-0.5 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                <span className="group-hover:translate-x-0 -translate-x-4 transition-transform duration-150">
                  {feature.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer / CTA */}
        <div className="mt-auto pt-6 border-t border-violet-100 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-900">Explore Solution</span>
          <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-150">
            <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-150" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

// --- Main Page Component ---

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-16 md:pb-64 overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://bairesdev.mo.cloudinary.net/blog/2023/06/Is-Python-good-for-software-development.jpg?tx=w_1920,q_auto"
            alt="Background"
            className="w-full h-full object-cover opacity-70"
          />
          {/* Enhanced readability overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-gray-200 mb-8 backdrop-blur-md shadow-lg">
              <Globe className="w-3 h-3" />
              Global Services
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-2xl"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
            >
              Excellence in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-gray-300 filter drop-shadow-lg">
                Operations & Strategy
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-100 max-w-8xl leading-relaxed font-medium drop-shadow-xl"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
            >
              We remove the reasons for doubt. From strategic consulting to full-scale digital transformation, we deliver ROI-driven solutions for the modern enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 md:py-32 pt-16 pb-16 bg-gray-50/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-16">
            <div className="max-w-full mb-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                What's Included
              </h2>
              <p className="text-lg text-gray-600 text-justify">
                Every partnership includes complete lifecycle ownership—from initial discovery and architecture to deployment and continuous improvement. Our team works closely with you to ensure solutions stay aligned with your business goals as they evolve. We prioritize transparency, performance, and security at every stage of the engagement. With proactive support, regular reviews, and knowledge transfer, we help your systems scale reliably while empowering your team for long-term success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {/* Decorative connecting line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2 z-0"></div>

              {[
                { title: "Consultation", icon: CheckCircle2, color: "from-blue-400 to-blue-600" },
                { title: "Development", icon: Cpu, color: "from-purple-400 to-purple-600" },
                { title: "Maintenance", icon: Layers, color: "from-emerald-400 to-emerald-600" },
                { title: "Security", icon: ShieldCheck, color: "from-indigo-400 to-indigo-600" },
                { title: "Support", icon: ArrowRight, color: "from-orange-400 to-orange-600" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10"
                >
                  <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-gray-100 shadow-lg h-full relative overflow-hidden">
                    {/* Gradient Glow Effect - Permanent low opacity */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-10`}></div>

                    {/* Icon with animated background */}
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg mb-4 relative z-10`}>
                      <item.icon size={24} />
                    </div>

                    <h3 className="font-bold text-gray-900 relative z-10">{item.title}</h3>
                    <div className={`mt-2 h-1 w-12 rounded-full bg-gradient-to-r ${item.color} opacity-60`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="my-16">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={service.id}>
                <ServiceCard service={service} index={index} onSelect={setSelectedService} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition / Trust Section */}
      {/* Value Proposition / Trust Section */}
      <section className="pt-16 pb-32 bg-slate-950 text-white overflow-hidden relative">
        {/* Ambient Background Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10 box-border">
          {/* Section Heading - Full Width for Single Line */}
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-2xl">
              <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">Why Global Leaders </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                Choose Us.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              {[
                { title: "ROI-Focused", desc: "Every strategy is measured by tangible financial impact.", icon: TrendingUp, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { title: "Sustainable Growth", desc: "Building systems that last and adapt to future challenges.", icon: Globe, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                { title: "Zero Doubt", desc: "Transparent execution that builds absolute confidence.", icon: ShieldCheck, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex gap-6 p-6 rounded-2xl border ${item.border} ${item.bg} hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm group`}
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 border border-white/5`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white/90 transition-colors">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-8 md:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30 blur-xl animate-pulse"></div>
              <div className="relative bg-slate-900/90 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl shadow-2xl flex flex-col justify-between min-h-[420px]">
                <QuoteIcon className="w-8 h-8 text-blue-500 mb-6 opacity-50" />

                <div className="relative overflow-hidden flex-grow">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentReview}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col justify-between"
                    >
                      <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-slate-100">
                        <span className="text-blue-400">"</span>
                        {reviews[currentReview].quote}
                        <span className="text-blue-400">"</span>
                      </blockquote>
                      <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                        <div className={`w-12 h-12 bg-gradient-to-br ${reviews[currentReview].color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {reviews[currentReview].author}
                        </div>
                        <div>
                          <div className="font-bold text-white">{reviews[currentReview].role}</div>
                          <div className="text-sm text-blue-200/70">{reviews[currentReview].company}</div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Buttons & Dot Indicators */}
                <div className="flex items-center justify-between mt-8">
                  {/* Dots */}
                  <div className="flex gap-2">
                    {reviews.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentReview(i)}
                        aria-label={`Go to review ${i + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentReview
                          ? "bg-blue-400 scale-125 shadow-[0_0_8px_rgba(96,165,250,0.6)]"
                          : "bg-white/20 hover:bg-white/40"
                          }`}
                      />
                    ))}
                  </div>

                  {/* Arrows */}
                  <div className="flex gap-2">
                    <button
                      onClick={prevReview}
                      className="p-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white border border-white/10"
                      aria-label="Previous review"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextReview}
                      className="p-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white border border-white/10"
                      aria-label="Next review"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 sm:rounded-2xl border-none">
          {selectedService && (
            <div className="flex flex-col">
              {/* Modal Header */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black text-white p-8 md:p-12 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 z-20">
                  <button onClick={() => setSelectedService(null)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
                    <X size={20} />
                    <span className="sr-only">Close</span>
                  </button>
                </div>

                {/* Background Decor */}
                <div className="absolute -bottom-24 -right-24 text-white/5 opacity-20 transform rotate-12 pointer-events-none">
                  <selectedService.icon size={300} strokeWidth={1} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 backdrop-blur-sm border border-white/10">
                    <selectedService.icon className="w-3 h-3" />
                    {selectedService.tagline}
                  </div>
                  <DialogTitle
                    className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 drop-shadow-2xl"
                    style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                  >
                    {selectedService.title}
                  </DialogTitle>
                  <p
                    className="text-lg text-gray-200 max-w-2xl leading-relaxed drop-shadow-md font-medium"
                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
                  >
                    {selectedService.fullDescription}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12 bg-white">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Key Offerings
                    </h4>
                    <ul className="space-y-4">
                      {selectedService.features.map((feature, i) => (
                        <li key={i} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <div className="font-bold text-gray-900 mb-1">{feature.title}</div>
                          <div className="text-sm text-gray-600">{feature.description}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                      <Layers className="w-5 h-5" /> Use Cases
                    </h4>
                    <div className="space-y-6">
                      {selectedService.methodology.map((step) => (
                        <div key={step.step} className="flex gap-4">
                          <span className="text-2xl font-bold text-indigo-600 shrink-0">{step.step}</span>
                          <div>
                            <div className="font-bold text-gray-900">{step.title}</div>
                            <div className="text-sm text-gray-600 leading-relaxed">{step.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                  <p className="text-gray-600 mb-6">Ready to see the impact of {selectedService.title} on your business?</p>
                  <a href="/contact" className="btn-accent inline-flex items-center px-8 py-3 rounded-full text-sm font-bold bg-black text-white hover:bg-gray-800 transition-colors">
                    Discuss Requirements <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Services;