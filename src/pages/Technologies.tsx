import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, Cloud, Shield, Database, Leaf, CheckCircle2,
  ArrowRight, Globe2, Cpu, Zap, Activity, Layers,
  Search, Code, Play, RefreshCcw, Sparkles, Network,
  BarChart3, Smartphone, Building2, Droplets, FlaskConical, Microscope, ArrowRightLeft, Infinity as InfinityIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import BlogPreview from "@/components/shared/BlogPreview";
import technologyVideo from "@/assets/technology.mp4";
import aiBg from "@/assets/blog-10.png";
import cloudBg from "@/assets/blog-2.png";
import securityBg from "@/assets/blog-9.png";
import dataBg from "@/assets/blog-8.png";
import sustainBg from "@/assets/Gemini_Generated_Image_uugaqruugaqruuga.png";
import ecosystemBg from "@/assets/Gemini_Generated_Image_zh56h0zh56h0zh56.png";
import ctaBg from "@/assets/Gemini_Generated_Image_ello0sello0sello.png";

const Technologies = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);
  const [selectedLab, setSelectedLab] = useState(0);

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

  return (
    <PageLayout>
      {/* 1. HERO SECTION - Industries Page Style */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-[10s]"
        >
          <source src={technologyVideo} type="video/mp4" />
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
              Enterprise Technology
            </span>
            <h1 className="text-[4rem] md:text-[6.5rem] font-bold text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              Engineering the <br />
              Digital <span className="text-red-600">Backbone.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-3xl leading-relaxed drop-shadow-md">
              VelDurSen leverages advanced AI, cloud-native systems, cybersecurity frameworks, and intelligent data platforms to build scalable, secure, and sustainable enterprise ecosystems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise py-5 px-12 text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-2xl shadow-red-600/20">
                Explore Our Tech Stack
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


      {/* 3. TECHNOLOGY PILLARS SECTION (VERTICAL HOVER STYLE) */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="enterprise-container">
          <div className="mb-12">
            <span className="text-red-600 font-black uppercase tracking-widest text-xs mb-4 block">Core Competencies</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Technology Pillars.</h2>
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
                  transition={{ duration: 3, repeat: 9999, ease: "linear" }}
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
                    transition={{ duration: 20, repeat: 9999, ease: "linear" }}
                    className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center relative border border-slate-100"
                  >
                    <InfinityIcon size={32} className="text-red-600" />
                  </motion.div>
                  {/* Digital Pulse Ring */}
                  <motion.div
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: 9999 }}
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
                      transition={{ duration: 1.5, repeat: 9999, delay: i * 0.2 }}
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
                      whileHover={{ scale: 1.1, rotate: 5 }}
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
                Our labs are where we stress-test the future. We don't just
                follow trends; we architect the patent-pending IP that powers
                next-decade infrastructure.
              </p>

              <div className="space-y-4">
                {labProjects.map((item, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setSelectedLab(i)}
                    whileHover={{ x: 10 }}
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
                              transition={{ repeat: 9999, duration: 1, delay: i * 0.1 }}
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

      {/* 10. FINAL CTA SECTION - LIGHT CLEAR VERSION */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ctaBg} alt="" className="w-full h-full object-cover opacity-20 contrast-125 grayscale-[30%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90" />
        </div>
        <div className="enterprise-container text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]">
              Powering the Next Generation <br />
              of <span className="text-red-600">Enterprise Systems.</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Partner with VelDurSen to architect intelligent, scalable, and secure technology ecosystems that drive long-term value.
            </p>
            <Link to="/contact" state={{ fromButton: true }} className="inline-flex items-center px-12 py-5 text-lg font-black text-white bg-slate-900 rounded-full hover:bg-red-600 transition-all shadow-2xl hover:shadow-red-600/30 group">
              Schedule a Technology Consultation <ArrowRight size={22} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Technologies;
