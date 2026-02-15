import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Briefcase, Cpu, Layers, Zap, CheckCircle2,
  TrendingUp, Globe, ShieldCheck, Quote, ChevronLeft,
  ChevronRight, Smartphone, Database, Cloud, Globe2
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SEO } from "@/components/shared/SEO";
import serviceVideo from "@/assets/service.mp4";

// --- Custom Hook for Windows Resize ---
const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
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
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=100&w=1600",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=100&w=1600",
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
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=100&w=1600",
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
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=100&w=1600",
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
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=100&w=1600",
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
  const [activeWheelService, setActiveWheelService] = useState<Service | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [windowWidth] = useWindowSize();

  // Auto-play for the Service Wheel focus
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWheelService((current) => {
        const currentIndex = services.findIndex(s => s.id === (current?.id || services[0].id));
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex];
      });
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <PageLayout>
      <SEO
        title="Digital Transformation Company | VelDurSen Technologies"
        description="Accelerate your digital evolution with VelDurSen's enterprise services in AI, Cloud, Data Engineering, and Cybersecurity. Tailored solutions for global scale."
        keywords={["Digital transformation company", "IT consulting", "Enterprise software development", "Cloud migration", "AI implementation"]}
        schemas={[{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": services.map((service, index) => ({
            "@type": "Service",
            "position": index + 1,
            "name": service.title,
            "description": service.description,
            "provider": {
              "@type": "Organization",
              "name": "VelDurSen Technologies",
              "url": "https://veldursen.com"
            },
            "areaServed": "Global",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": service.tagline,
              "itemListElement": service.features.map(f => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": f.title,
                  "description": f.description
                }
              }))
            }
          }))
        }]}
      />
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
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-red-500 mb-6 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              Our Services
            </span>
            <h1 className="text-[2.75rem] sm:text-[4.5rem] md:text-[6.5rem] font-bold text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              Enterprise <br />
              <span className="text-red-600">Performance.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-3xl leading-relaxed drop-shadow-md">
              Comprehensive technology services designed for global enterprises. From AI and cloud to security and data engineering, we deliver end-to-end solutions that power mission-critical operations worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise py-5 px-12 text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-2xl shadow-red-600/20">
                Explore Our Services
              </Link>
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
      <section className="pt-24 pb-8 bg-white relative overflow-hidden">
        {/* Architectural Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="enterprise-container relative z-10">
          <div className="max-w-4xl mb-20">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[10px] font-black uppercase tracking-[0.5em] text-[#dc2626] mb-6 bg-red-50 px-4 py-2 rounded-lg"
            >
              LIFECYCLE PARTNERSHIP
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-[900] text-[#0f172a] mb-8 tracking-tighter"
            >
              What's <span className="text-[#dc2626]">Included.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium"
            >
              Every partnership includes complete lifecycle ownership—from initial discovery and architecture to deployment and continuous improvement. We prioritize transparency and security at every stage.
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
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-[2rem] bg-white border border-slate-100 transition-all duration-500 group shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(220,38,38,0.15)] hover:-translate-y-2 hover:border-[#dc2626]/20"
              >
                {/* Accent Line */}
                <div className="absolute top-0 left-12 right-12 h-1 bg-gradient-to-r from-transparent via-[#dc2626]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-6 transition-all duration-500 group-hover:bg-[#dc2626] group-hover:text-white group-hover:shadow-xl group-hover:shadow-[#dc2626]/20`}>
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-[900] text-[#0f172a] mb-3 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-auto">
                    {item.desc}
                  </p>
                </div>

                {/* Number Indicator */}
                <div className="absolute top-8 right-8 text-4xl font-black text-slate-100/50 group-hover:text-[#dc2626]/5 transition-colors select-none">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section - Interactive Service Wheel */}
      <section className="py-12 bg-gray-50/50 overflow-hidden relative">
        <div className="enterprise-container">
          <div className="text-center mb-12 mt-20 relative z-10">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-[9px] font-black uppercase tracking-[0.5em] text-[#dc2626] mb-3"
            >
              SOLUTIONS ARCHITECTURE
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-[900] text-[#0f172a]"
            >
              Our <span className="text-[#dc2626]">Services.</span>
            </motion.h2>
          </div>

          {/* Interactive Service Wheel Container - Compact Size */}
          <div className="relative max-w-6xl mx-auto h-[480px] flex flex-col items-center justify-end group">
            {/* The Rotating Circle - Scaled Down */}
            <motion.div
              className="absolute top-[-100px] md:top-[-180px] w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] border border-slate-200 rounded-full flex items-center justify-center transition-all duration-700 pointer-events-none"
              animate={{ rotate: -((360 / services.length) * services.findIndex(s => s.id === (activeWheelService?.id || services[0].id))) }}
              transition={{ type: "spring", stiffness: 40, damping: 15 }}
            >
              <div className="absolute inset-[10%] rounded-full bg-gradient-to-b from-white to-transparent opacity-40 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)] border border-slate-100" />

              {services.map((service, idx) => {
                const angle = (360 / services.length) * idx;
                const activeIndex = services.findIndex(s => s.id === (activeWheelService?.id || services[0].id));
                const isActive = (activeWheelService?.id || services[0].id) === service.id;

                // Responsive radius calculation
                const getRadius = () => {
                  if (windowWidth < 640) return 140;
                  if (windowWidth < 768) return 180;
                  return 270;
                };
                const radius = getRadius();

                return (
                  <div
                    key={service.id}
                    className="absolute pointer-events-auto"
                    style={{
                      transform: `rotate(${angle}deg)`,
                      top: '50%',
                      left: '50%',
                      marginTop: '-28px', // Half of button height (for larger screens, will adjust via transform)
                      marginLeft: '-28px', // Half of button width
                    }}
                  >
                    <motion.button
                      onClick={() => setActiveWheelService(service)}
                      className={`relative w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg border
                        ${isActive
                          ? "bg-[#dc2626] text-white border-[#dc2626] scale-110 z-50 shadow-red-100"
                          : "bg-white text-slate-400 border-slate-100 hover:border-[#dc2626]/30 hover:text-[#dc2626] hover:scale-110 z-10"
                        }`}
                      style={{
                        transform: `translateY(${-radius}px) rotate(${-angle + ((360 / services.length) * activeIndex)}deg)`
                      }}
                    >
                      <service.icon size={isActive ? 22 : 18} strokeWidth={1.5} />
                      {isActive && (
                        <motion.div
                          layoutId="active-ring"
                          className="absolute -inset-2 border-2 border-[#dc2626] rounded-[1.2rem] opacity-20"
                          transition={{ type: "spring", bounce: 0.2 }}
                        />
                      )}
                    </motion.button>
                  </div>
                );
              })}
            </motion.div>

            {/* Service Content Reveal Area - Tighter Layout */}
            <div className="relative w-full max-w-4xl bg-white p-6 md:p-8 rounded-[1.8rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-50 z-20 text-center mb-6 overflow-hidden">
              {/* Decorative Background Image Overlay */}
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeWheelService?.id || services[0].id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.25, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    src={(activeWheelService || services[0]).image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWheelService?.id || services[0].id}
                  className="relative z-10"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="inline-block px-3 py-0.5 rounded-full bg-red-50 text-[#dc2626] text-[9px] font-black uppercase tracking-widest mb-4">
                    {activeWheelService?.tagline || services[0].tagline}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-[#0f172a] mb-3 tracking-tighter">
                    {activeWheelService?.title || services[0].title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium mb-6">
                    {activeWheelService?.description || services[0].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left max-w-sm mx-auto mb-6">
                    {(activeWheelService || services[0]).features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-100 group/feature transition-colors hover:bg-white hover:border-[#dc2626]/20">
                        <CheckCircle2 size={12} className="text-[#dc2626] group-hover/feature:scale-110 transition-transform" />
                        <span className="text-slate-700 font-bold text-[10px] tracking-tight">{f.title}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/services/${(activeWheelService || services[0]).id}`}
                    className="group/btn inline-flex items-center gap-2.5 bg-[#0f172a] text-white px-7 py-3 rounded-full font-black tracking-widest text-[9px] uppercase hover:bg-[#dc2626] transition-all duration-300 hover:shadow-lg shadow-md"
                  >
                    Explore Deep Solution
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-1.5 pb-2">
              {services.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveWheelService(s)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${(activeWheelService?.id || services[0].id) === s.id
                    ? "w-8 bg-[#dc2626] shadow-[0_0_8px_rgba(220,38,38,0.2)]"
                    : "w-1.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                  aria-label={`Go to ${s.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition / Trust Section */}
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

          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            {/* Left Column: Core Values */}
            <div className="space-y-4">
              {[
                {
                  title: "ROI-Focused",
                  desc: "Every strategy is measured by tangible financial impact and operational efficiency.",
                  icon: TrendingUp,
                  accent: "bg-red-600"
                },
                {
                  title: "Sustainable Growth",
                  desc: "Building future-proof systems that adapt to evolving global challenges.",
                  icon: Globe,
                  accent: "bg-[#0f172a]"
                },
                {
                  title: "Zero Doubt",
                  desc: "Absolute transparency and military-grade execution that builds confidence.",
                  icon: ShieldCheck,
                  accent: "bg-red-600"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.accent} text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-1 text-[#0f172a]">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Premium Testimonial Card */}
            <div className="relative">
              <div className="relative bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] backdrop-blur-sm min-h-[400px] flex flex-col justify-between">
                <div className="absolute top-8 right-10">
                  <Quote className="w-12 h-12 text-slate-100" />
                </div>

                <div className="relative overflow-hidden flex-grow flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentReview}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <blockquote className="text-xl md:text-2xl font-[500] leading-snug mb-8 text-[#0f172a] italic">
                        "{reviews[currentReview].quote}"
                      </blockquote>

                      <div className="flex items-center gap-4 pt-8 border-t border-slate-100">
                        <div className={`w-12 h-12 bg-gradient-to-br ${reviews[currentReview].color} rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg`}>
                          {reviews[currentReview].author}
                        </div>
                        <div>
                          <div className="font-black text-base text-[#0f172a]">{reviews[currentReview].role}</div>
                          <div className="text-[10px] font-bold text-[#dc2626] uppercase tracking-widest">
                            {reviews[currentReview].company}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mt-8">
                  <div className="flex gap-2">
                    {reviews.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentReview(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${i === currentReview
                          ? "bg-[#0f172a] w-10"
                          : "bg-slate-200 w-1.5 hover:bg-slate-300"
                          }`}
                        aria-label={`Review ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={prevReview}
                      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#0f172a] hover:bg-[#0f172a] hover:text-white transition-all duration-300 shadow-sm"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={nextReview}
                      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#0f172a] hover:bg-[#0f172a] hover:text-white transition-all duration-300 shadow-sm"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Services;
