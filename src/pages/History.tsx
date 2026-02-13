import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Rocket, Shield, Brain, Cloud, Target, Users,
  CheckCircle2, ArrowRight, TrendingUp, Globe2,
  Leaf, Code, Building2, Globe, X, Calendar
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";
import historyVideo from "@/assets/history.mp4";

// Image Imports
import aboutTeam from "@/assets/about-team.jpg";
import aboutImage1 from "@/assets/Gemini_Generated_Image_ello0sello0sello.png";
import aboutImage2 from "@/assets/Gemini_Generated_Image_zh56h0zh56h0zh56.png";
import globalMap from "@/assets/global-map.jpg";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import highlight1 from "@/assets/highlight1.png";
import highlight2 from "@/assets/highlight2.png";

const milestones = [
  {
    year: "2018",
    title: "Foundation of VelDurSen",
    desc: "VelDurSen was established with a vision to build secure, scalable, and AI-driven enterprise technology solutions. Focus on enterprise-grade web applications and digital transformation consulting.",
    icon: Rocket,
    image: aboutTeam,
    pos: "right",
    y: 0,
    yearColor: "text-blue-500",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50"
  },
  {
    year: "2019",
    title: "Enterprise Software Expansion",
    desc: "Expanded into custom ERP & CRM systems and scalable web platforms. Successfully delivered multiple enterprise-grade solutions across early industry partners.",
    icon: Code,
    image: img1,
    pos: "left",
    y: 300,
    yearColor: "text-indigo-500",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50"
  },
  {
    year: "2020",
    title: "Cloud & DevOps Integration",
    desc: "Introduced cloud-native engineering: Multi-cloud architecture (AWS/Azure-style), CI/CD pipelines, and Kubernetes-based container orchestration. Shifted toward resilient systems.",
    icon: Cloud,
    image: highlight1,
    pos: "right",
    y: 600,
    yearColor: "text-sky-500",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50"
  },
  {
    year: "2021",
    title: "Cybersecurity & Compliance",
    desc: "Launched a dedicated cybersecurity vertical. Implemented Zero-trust frameworks, identity & access management, and regulatory-compliant infrastructure. Security became a core foundation.",
    icon: Shield,
    image: img2,
    pos: "left",
    y: 900,
    yearColor: "text-rose-500",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50"
  },
  {
    year: "2022",
    title: "AI & Data Engineering Adoption",
    desc: "Transitioned into an AI-first company. Introduced Generative AI solutions, predictive analytics, computer vision, and real-time data engineering pipelines across workflows.",
    icon: Brain,
    image: aboutImage2,
    pos: "right",
    y: 1200,
    yearColor: "text-purple-500",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50"
  },
  {
    year: "2023",
    title: "Industry-Wise Specialization",
    desc: "Expanded into Healthcare, FinTech, Manufacturing, Retail, Smart Cities, and AgriTech. Built domain-specific technology frameworks for enterprise verticals.",
    icon: Building2,
    image: highlight2,
    pos: "left",
    y: 1500,
    yearColor: "text-emerald-500",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50"
  },
  {
    year: "2024",
    title: "Global Delivery & Workforce Growth",
    desc: "Expanded operations internationally with multi-region project execution and global collaboration models. Infrastructure handling extremely large user bases.",
    icon: Globe,
    image: globalMap,
    pos: "right",
    y: 1800,
    yearColor: "text-cyan-500",
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-50"
  },
  {
    year: "2025",
    title: "Sustainable & Future-Ready Innovation",
    desc: "Integrated sustainability into transformation. Focused on carbon-aware cloud systems, ethical AI governance, and green computing frameworks. Positioned as a Green Tech Enterprise.",
    icon: Leaf,
    image: aboutImage1,
    pos: "left",
    y: 2100,
    yearColor: "text-lime-500",
    iconColor: "text-lime-600",
    iconBg: "bg-lime-50"
  }
];

const History = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<typeof milestones[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.5"]
  });

  return (
    <PageLayout>
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover"
        >
          <source src={historyVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10" />

        <div className="enterprise-container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-red-500 mb-6 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
              Our Legacy of Excellence
            </span>
            <h1 className="text-[4rem] md:text-[6.5rem] font-bold text-white leading-[0.95] mb-8 tracking-tighter">
              Vision to <br />
              <span className="text-red-600">Global Impact.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl leading-relaxed">
              The story of VelDurSen: a journey of innovation, growth, and digital transformation excellence spanning over a decade of enterprise leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. JOURNEY SNAKE TIMELINE SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Abstract background decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] -left-[10%] w-[400px] h-[400px] bg-red-50 rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-[20%] -right-[5%] w-[300px] h-[300px] bg-slate-100 rounded-full blur-[100px] opacity-70" />
        </div>

        <div className="enterprise-container relative z-10">
          <SectionHeader
            tag="Chronicle"
            title="Our Journey of Innovation"
            subtitle="From foundation to global scaling, explore the milestones that defined our evolution."
          />

          <div ref={containerRef} className="relative mt-20 max-w-5xl mx-auto px-4 md:px-0">
            {/* The Snake Path SVG (Vertical zig-zag/snake) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-full hidden md:block">
              <svg
                className="w-full h-full"
                viewBox="0 0 800 2400"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 400 0 
                     C 400 150, 700 150, 700 300 
                     C 700 450, 100 450, 100 600
                     C 100 750, 700 750, 700 900
                     C 700 1050, 100 1050, 100 1200
                     C 100 1350, 700 1350, 700 1500
                     C 700 1650, 100 1650, 100 1800
                     C 100 1950, 700 1950, 700 2100
                     C 700 2250, 100 2250, 100 2400"
                  stroke="#E2E8F0"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Animated Glowing Path */}
                <motion.path
                  style={{ pathLength: scrollYProgress }}
                  d="M 400 0 
                     C 400 150, 700 150, 700 300 
                     C 700 450, 100 450, 100 600
                     C 100 750, 700 750, 700 900
                     C 700 1050, 100 1050, 100 1200
                     C 100 1350, 700 1350, 700 1500
                     C 700 1650, 100 1650, 100 1800
                     C 100 1950, 700 1950, 700 2100
                     C 700 2250, 100 2250, 100 2400"
                  stroke="url(#gradient-timeline)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className="shadow-xl"
                />
                <defs>
                  <linearGradient id="gradient-timeline" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" /> {/* Amber-500 */}
                    <stop offset="100%" stopColor="#FBBF24" /> {/* Amber-400 */}
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Mobile Vertical Line */}
            <div className="absolute left-[21px] top-0 bottom-0 w-[2px] bg-slate-100 md:hidden" />

            {/* Milestones */}
            <div className="space-y-32 md:space-y-0 relative">
              {milestones.map((m, i) => (
                <div key={i} className="md:relative w-full h-auto md:h-[300px]">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`flex flex-col md:flex-row items-start md:items-center w-full ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                      }`}
                  >
                    {/* Content Card - Clickable, Subtitle Only */}
                    <button
                      onClick={() => setSelectedMilestone(m)}
                      className={`w-full md:w-[42%] bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:border-yellow-200 transition-all duration-500 group relative z-20 text-left outline-none ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl ${m.iconBg} border border-slate-100 flex items-center justify-center ${m.iconColor} group-hover:bg-red-600 group-hover:text-white transition-all duration-300`}>
                          <m.icon size={24} />
                        </div>
                        <div>
                          <span className={`text-sm font-black ${m.yearColor} opacity-80 tracking-widest uppercase`}>{m.year}</span>
                          <h3 className="text-xl md:text-2xl font-bold text-red-600 leading-tight group-hover:text-red-700 transition-colors">
                            {m.title}
                          </h3>
                        </div>
                      </div>

                      {/* Explore indicator */}
                      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-yellow-600 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                        <span>LEARN MORE</span>
                        <ArrowRight size={14} />
                      </div>
                    </button>

                    {/* Milestone Node on Snake Line */}
                    <div className={`absolute hidden md:flex items-center justify-center z-30 transition-transform duration-500 hover:scale-125`} style={{
                      left: m.pos === "center" || m.pos === "center-top" ? '50%' : m.pos === "right" ? '87.5%' : '12.5%',
                      transform: 'translateX(-50%)'
                    }}>
                      <div className="w-6 h-6 rounded-full bg-white border-[4px] border-yellow-500 shadow-xl shadow-yellow-500/20" />
                      {/* Glowing Ring */}
                      <div className="absolute inset-0 w-10 h-10 rounded-full border-2 border-yellow-200 animate-ping opacity-20" />
                    </div>

                    {/* Mobile Node */}
                    <div className="absolute left-[21px] -translate-x-1/2 flex md:hidden items-center justify-center z-30">
                      <div className="w-3 h-3 rounded-full bg-yellow-600 border-2 border-white" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Detail Modal */}
        <AnimatePresence>
          {selectedMilestone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMilestone(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                layoutId={`card-${selectedMilestone.year}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-6xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto max-h-[90vh]"
              >
                {/* Close Button at Top */}
                <button
                  onClick={() => setSelectedMilestone(null)}
                  className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all border border-white/20"
                >
                  <X size={20} />
                </button>

                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden">
                  <img
                    src={selectedMilestone.image}
                    alt={selectedMilestone.title}
                    className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent md:hidden" />
                  <div className="absolute bottom-8 left-8 text-white md:hidden">
                    <span className="text-sm font-bold opacity-60 uppercase tracking-widest">{selectedMilestone.year}</span>
                    <h2 className="text-3xl font-bold leading-tight">{selectedMilestone.title}</h2>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center overflow-y-auto">
                  <div className="hidden md:block mb-8">
                    <span className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-600 text-sm font-black tracking-widest uppercase mb-4">
                      {selectedMilestone.year} Milestone
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                      {selectedMilestone.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                      {selectedMilestone.desc}
                    </p>

                    <div className="pt-8 border-t border-slate-100">
                      <div className="flex items-center gap-4 text-red-600">
                        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                          <selectedMilestone.icon size={24} />
                        </div>
                        <span className="font-bold tracking-tight">Enterprise Innovation Standard</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SECTION FOOTER CTA */}
        <div className="enterprise-container mt-32 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Building the Future of <br />
              <span className="text-red-600">Enterprise Technology</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium mb-10 leading-relaxed">
              From foundation to global innovation, VelDurSen continues to evolve with intelligence, security, and sustainability at its core.
            </p>
            <Link
              to="/services"
              state={{ fromButton: true }}
              className="inline-flex items-center justify-center gap-3 bg-slate-950 text-white font-bold py-5 px-10 rounded-full hover:bg-red-600 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-slate-200"
            >
              Explore Our Capabilities <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Future Roadmap */}
    </PageLayout>
  );
};

export default History;
