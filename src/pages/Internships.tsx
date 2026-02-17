import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Award, TrendingUp, Code, Database, Shield, Globe2, Sparkles, CheckCircle2, Lightbulb, Target, Calendar, Clock, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";
import { Link } from "react-router-dom";
import { SEO } from "@/components/shared/SEO";
import internshipVideo from "@/assets/internship.mp4";

import csrBg from "@/assets/internships/csr-bg.jpg";
import experienceBg from "@/assets/internships/experience-bg.jpg";
import growthBg from "@/assets/internships/growth-bg.jpg";
import softwareBg from "@/assets/internships/software-bg.jpg";
import dataAiBg from "@/assets/internships/data-ai-bg.jpg";
import securityBg from "@/assets/internships/security-bg.jpg";
import cloudBg from "@/assets/internships/cloud-bg.jpg";

const InternshipTicker = () => {
  const messages = [
    "HIRING NOW: SUMMER 2025 COHORT",
    "DON'T MISS THE OPPORTUNITY TO COLLABORATE WITH US",
    "JOIN THE FUTURE OF ENTERPRISE TECHNOLOGY",
    "APPLICATIONS OPEN FOR GLOBAL RESIDENCY",
    "ARCHITECT YOUR CAREER WITH VELDURSEN",
    "SYSTEM ADMISSION NOW IN PROGRESS"
  ];
  const scrollMessages = [...messages, ...messages, ...messages];

  return (
    <div className="bg-red-600 py-4 border-b border-red-500 overflow-hidden relative">
      <div className="flex gap-12 animate-scroll hover:[animation-play-state:paused] whitespace-nowrap px-4 items-center">
        {scrollMessages.map((msg, index) => (
          <div key={index} className="flex items-center gap-6">
            <span className="text-[10px] font-black text-white uppercase tracking-[0.4em] underline decoration-white/30 underline-offset-4">{msg}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Internships = () => {
  return (
    <PageLayout>
      <SEO
        title="Enterprise Tech Internships | VelDurSen CSR Initiative"
        description="VelDurSen's CSR-driven internship program for future tech leaders. Real-world experience in AI, Cloud, and Software Engineering."
        keywords={["Tech internships", "Software engineering internship", "CSR internship program", "VelDurSen internships", "Summer 2024 intern"]}
        schemas={[{
          "@context": "https://schema.org",
          "@type": "EducationalOccupationalProgram",
          "name": "VelDurSen Enterprise Tech Internship",
          "description": "A 12-week intensive internship program focusing on real-world enterprise technology.",
          "provider": {
            "@type": "Organization",
            "name": "VelDurSen Technologies"
          },
          "educationalCredentialAwarded": "Certificate of Completion",
          "occupationalCategory": "Software Engineer"
        }]}
      />
      {/* HERO SECTION - Redesigned to match Industry Page */}
      <section className="relative h-[50vh] sm:h-[80vh] min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-[10s]"
        >
          <source src={internshipVideo} type="video/mp4" />
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
              Internships
            </span>
            <h1 className="text-[2.75rem] sm:text-[4.5rem] md:text-[6.5rem] font-bold text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              Growing <br />
              <span className="text-red-600">Future Tech.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl leading-relaxed drop-shadow-md">
              VelDurSen's commitment to nurturing the next generation of technology professionals through hands-on learning, mentorship, and real CSR engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise py-5 px-12 text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-2xl shadow-red-600/20">
                Apply for Internship
              </Link>
              <div className="flex items-center gap-4 px-6 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                <Globe2 size={16} className="text-red-600 shadow-sm" /> CSR DRIVEN INITIATIVE
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-0" />
      </section>

      <InternshipTicker />

      {/* Program Overview - Redesigned with Prism Module Aesthetic */}
      <section className="py-12 md:py-16 bg-section relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#dc2626 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/5 rounded-full blur-[100px]" />

        <div className="enterprise-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12 sm:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1 rounded-full border border-red-200 bg-red-50/50 backdrop-blur-sm text-red-600 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">CSR Mission Architecture</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tighter leading-tight">
              Growing <span className="text-blue-600 italic">Future</span> Tech Leaders
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium px-4">
              This is <span className="text-slate-900 font-bold border-b-2 border-red-200">not a coaching institute</span>. VelDurSen's Internship Program is a <br className="hidden md:block" />
              <span className="text-red-600 font-bold">CSR-driven early talent engine</span> designed to architect real-world engineering excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                id: "01",
                icon: Heart,
                tag: "PURPOSE",
                title: "CSR-Driven Initiative",
                desc: "Nurturing global tech talent as a core social responsibility, giving back to the engineering community.",
                bgImg: csrBg
              },
              {
                id: "02",
                icon: Users,
                tag: "EXPOSURE",
                title: "Real-World Experience",
                desc: "Deep integration with senior engineering squads on live enterprise ecosystems, not simulations.",
                bgImg: experienceBg
              },
              {
                id: "03",
                icon: Sparkles,
                tag: "GROWTH",
                title: "Pure Skill Evolution",
                desc: "100% focused on capability building and knowledge transfer, prioritizing growth over recruitment.",
                bgImg: growthBg
              }
            ].map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Prism Module Card */}
                <div className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden h-full flex flex-col group/card transition-all duration-500 hover:border-red-600/50">
                  {/* Background Image Wrapper */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                    <img
                      src={principle.bgImg}
                      alt=""
                      className="w-full h-full object-cover scale-110 group-hover/card:scale-100 transition-transform duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
                  </div>

                  {/* Card Corner Accents */}
                  <div className="absolute top-6 left-6 w-2 h-2 border-t-2 border-l-2 border-red-600 opacity-20 group-hover:opacity-100 transition-opacity z-10" />
                  <div className="absolute bottom-6 right-6 w-2 h-2 border-b-2 border-r-2 border-red-600 opacity-20 group-hover:opacity-100 transition-opacity z-10" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-red-200/20 flex items-center justify-center mb-8 rotate-3 group-hover:rotate-12 transition-transform duration-500 border border-red-50">
                      <principle.icon className="w-7 h-7 text-red-600" />
                    </div>

                    <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-3 opacity-60 group-hover:text-red-500 group-hover:opacity-100">
                      {principle.tag}
                    </span>

                    <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-white transition-colors duration-300">
                      {principle.title}
                    </h4>

                    <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-200 transition-colors duration-300">
                      {principle.desc}
                    </p>

                    <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-white/10 flex items-center justify-between transition-colors">
                      <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-500">MODULE {principle.id}</span>
                      <div className="w-8 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Advisory - High Visibility Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 relative overflow-hidden rounded-3xl group"
          >
            <div className="absolute inset-0 bg-slate-900" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/20 to-transparent opacity-50" />

            <div className="relative p-6 sm:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
              <div className="flex-shrink-0 flex items-center lg:items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div className="h-20 w-px bg-white/20 hidden lg:block" />
              </div>

              <div className="flex-grow text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em]">Proprietary Advisory</span>
                  <div className="h-px w-10 bg-red-600 hidden sm:block" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">Program Integrity Notice</h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                  VelDurSen is <span className="text-white font-bold underline decoration-red-600 underline-offset-4">not a training institute</span> or placement agency. We operate as a global enterprise tech powerhouse. This initiative is strictly for <span className="text-white">early-talent architectural development</span>. Capability growth is the primary objective; long-term recruitment is not a guaranteed outcome of the program.
                </p>
              </div>

              <div className="flex-shrink-0 opacity-20 group-hover:opacity-100 transition-opacity duration-700 hidden lg:block">
                <div className="text-[10px] font-black text-white/50 uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
                  SYSTEM_PRIORITY_HIGH
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Focus Areas - Glassmorphic Schematic Redesign */}
      <section className="py-12 md:py-16 bg-section relative overflow-hidden">
        {/* Animated Radial Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-600/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-900/[0.02] -z-10" />

        <div className="enterprise-container relative z-10">
          <header className="mb-12 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="h-0.5 w-12 bg-red-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">Architectural Core</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-950 tracking-tighter mb-6 sm:mb-8 italic leading-tight">
              Technology <span className="text-slate-300">Focus Areas</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Interns engage with <span className="text-slate-950 underline decoration-red-600/20 underline-offset-8">mission-critical tech stacks</span>. Guidance is provided by senior architects through a deep-dive engineering immersion.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Code,
                title: "Software",
                subtitle: "Enterprise Development",
                areas: [
                  "Full-stack application development",
                  "Cloud-native architecture patterns",
                  "Microservices and API design",
                  "Modern frontend frameworks",
                  "Backend system design"
                ],
                label: "CORE_ENG",
                bgImg: softwareBg
              },
              {
                icon: Database,
                title: "Data & AI",
                subtitle: "Intelligent Systems",
                areas: [
                  "Data pipeline construction",
                  "Machine learning integration",
                  "Analytics platform development",
                  "Big data processing",
                  "AI model deployment"
                ],
                label: "DATA_OPS",
                bgImg: dataAiBg
              },
              {
                icon: Shield,
                title: "Security",
                subtitle: "Defensive Architecture",
                areas: [
                  "Security-first development",
                  "Authentication & authorization",
                  "Secure coding practices",
                  "Compliance awareness",
                  "Threat modeling basics"
                ],
                label: "ZERO_TRUST",
                bgImg: securityBg
              },
              {
                icon: Globe2,
                title: "Cloud",
                subtitle: "DevOps & SRE",
                areas: [
                  "Cloud platform fundamentals",
                  "CI/CD pipeline development",
                  "Container orchestration",
                  "Infrastructure as code",
                  "Monitoring and observability"
                ],
                label: "SRE_FABRIC",
                bgImg: cloudBg
              }
            ].map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Vertical Label */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-lr] text-[8px] font-black text-slate-300 tracking-[0.5em] group-hover:text-red-600 transition-colors">
                  {domain.label}
                </div>

                <div className="ml-4 h-full bg-white border border-slate-100 rounded-[2rem] p-6 hover:shadow-2xl hover:shadow-red-200/40 transition-all duration-500 overflow-hidden flex flex-col group/card relative">
                  {/* Thematic Background Image */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 overflow-hidden">
                    <img
                      src={domain.bgImg}
                      alt=""
                      className="w-full h-full object-cover scale-125 group-hover/card:scale-100 transition-transform duration-[3s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
                  </div>
                  {/* Glassmorphic Icon Header */}
                  <div className="relative mb-6 z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-500">
                      <domain.icon size={24} className="text-red-600 group-hover:text-white transition-colors" />
                    </div>
                    {/* Scanner Effect */}
                    <div className="absolute -inset-1 border-2 border-red-600/0 rounded-[1.5rem] group-hover:border-red-600/20 group-hover:scale-110 transition-all duration-700" />
                  </div>

                  <div className="mb-6 overflow-hidden z-10">
                    <h3 className="text-2xl font-black text-slate-950 leading-none mb-1 group-hover:text-white transition-colors duration-300">
                      {domain.title}
                    </h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-300">
                      {domain.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow z-10">
                    {domain.areas.map((area, idx) => (
                      <li key={idx} className="flex gap-2.5 group/item">
                        <div className="w-1 h-1 rounded-full bg-red-600 mt-1.5 shrink-0 group-hover/item:scale-150 transition-transform" />
                        <span className="text-[11px] font-bold text-slate-600 group-hover:text-slate-200 transition-colors leading-relaxed">
                          {area}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Expand CTA */}
                  <div className="flex items-center gap-2 text-[9px] font-black text-slate-950 uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-10 group-hover:text-white">
                    Explore Stack <ArrowRight size={12} className="text-red-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure - Vertical Terminal Feed Redesign */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="enterprise-container relative z-10">
          <header className="max-w-4xl mx-auto text-center mb-10">
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.2em' }}
              whileInView={{ opacity: 1, letterSpacing: '0.6em' }}
              viewport={{ once: true }}
              className="text-[10px] font-black uppercase text-green-600 mb-6"
            >
              System Execution Roadmap
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.8]">
              Operational <span className="text-green-600">Pipeline.</span>
            </h2>
          </header>

          <div className="max-w-5xl mx-auto relative px-4 md:px-0">
            {/* The Central Terminal Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-100 overflow-hidden">
              <motion.div
                className="w-full h-full bg-red-600 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1.5, ease: "linear" }}
              />
            </div>

            <div className="space-y-1">
              {[
                {
                  phase: "01",
                  duration: "W01 - W02",
                  title: "Architectural Onboarding",
                  tag: "SYSTEM_INITIALIZATION",
                  description: "Immersion into VelDurSen's core engineering culture, specialized toolsets, and enterprise-scale methodologies.",
                  activities: ["Culture Alignment", "Env Setup", "VC Orchestration", "Quality Protocols"]
                },
                {
                  phase: "02",
                  duration: "W03 - W06",
                  title: "Guided Technical Ops",
                  tag: "MODULE_INTEGRATION",
                  description: "Active contribution to high-stakes tasks under senior mentorship. Integration with live enterprise engineering squads.",
                  activities: ["Squad Integration", "Mentor-Led Dev", "Logic Injection", "Agile Cycles"]
                },
                {
                  phase: "03",
                  duration: "W07 - W10",
                  title: "Autonomous Contribution",
                  tag: "CORE_EXECUTION",
                  description: "Scale-up of independent task execution. Direct ownership of specific system modules and feature architectures.",
                  activities: ["Module Ownership", "QA Cycles", "Doc Extraction", "Prod Readiness"]
                },
                {
                  phase: "04",
                  duration: "W11 - W12",
                  title: "Capstone & Validation",
                  tag: "FINAL_VALIDATION",
                  description: "Final execution and demonstration of technical growth. Strategic review with engineering leadership.",
                  activities: ["Live Demos", "Growth Review", "Certification", "Merit Check"]
                }
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-center md:justify-between ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content Module */}
                  <div className={`w-full md:w-[42%] group ml-12 md:ml-0`}>
                    <div className="relative p-5 md:p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-red-200/30 transition-all duration-700 overflow-hidden">
                      {/* Holographic Number */}
                      <div className="absolute -top-6 -right-6 text-[12rem] font-black text-slate-200/20 leading-none select-none group-hover:text-red-500/10 transition-colors">
                        {phase.phase}
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-black text-red-600 bg-red-50 px-3 py-1 rounded-full uppercase tracking-widest border border-red-100">
                            {phase.tag}
                          </span>
                          <span className="font-mono text-[10px] font-bold text-slate-400">
                            {phase.duration}
                          </span>
                        </div>

                        <h4 className="text-2xl md:text-3xl font-black text-slate-950 mb-3 tracking-tight group-hover:text-red-600 transition-colors italic">
                          {phase.title}
                        </h4>

                        <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                          {phase.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2">
                          {phase.activities.map((act) => (
                            <div key={act} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-red-600" />
                              <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">
                                {act}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Operational Gateway Node */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 flex items-center justify-center -translate-x-1/2 md:-translate-x-1/2 bg-white rounded-full z-20">
                    <div className="w-4 h-4 rounded-full bg-white border-4 border-red-600 z-30 shadow-[0_0_20px_rgba(220,38,38,0.5)] group-hover:scale-150 transition-transform duration-500" />
                    <div className="absolute w-12 h-12 rounded-full border border-red-600/20 animate-ping" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* High-Impact Velocity Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 max-w-6xl mx-auto rounded-3xl bg-slate-950 py-12 px-6 relative overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.2),transparent)]" />
            <div className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center mb-6 shadow-[0_20px_40px_rgba(220,38,38,0.4)] transition-transform duration-700 group-hover:rotate-[360deg]">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight italic">
                12 Weeks. <br className="sm:hidden" />
                <span className="text-red-600">Pure Architecture.</span>
              </h3>
              <p className="text-sm md:text-base text-slate-400 font-medium max-w-2xl mb-10 leading-relaxed px-4">
                "We engineer growth at scale. Our roadmap is not a schedule; it is an optimized system for transforming potential into professional engineering velocity."
              </p>
              <div className="flex flex-wrap justify-center gap-8 sm:gap-16 text-slate-500 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em]">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <span className="text-white text-3xl sm:text-4xl font-black">100%</span>
                  <span>System Exposure</span>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/10" />
                <div className="flex flex-col gap-2 sm:gap-3">
                  <span className="text-white text-3xl sm:text-4xl font-black">Senior</span>
                  <span>Architect Lead</span>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/10" />
                <div className="flex flex-col gap-2 sm:gap-3">
                  <span className="text-white text-3xl sm:text-4xl font-black">Global</span>
                  <span>Validation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Can Apply - Technical Blueprint Redesign */}
      <section className="py-12 md:py-16 bg-[#fafafa] relative overflow-hidden">
        {/* Schematic Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="enterprise-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-red-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-red-600">Admission_Parameters.v2</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none">
                Candidate <span className="text-slate-300">Eligibility.</span>
              </h2>
            </div>
            <p className="text-sm font-bold text-slate-500 max-w-xs leading-relaxed uppercase tracking-tighter text-right">
              Defining the technical substrate and cognitive baseline for high-velocity system immersion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50"
          >
            {/* Target Profiles - Schematic Module */}
            <div className="bg-white p-12 md:p-20 relative group overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-slate-300" />
              <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-slate-300" />

              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-sm border border-red-600/20 bg-red-50 text-[10px] font-black text-red-600 uppercase tracking-widest mb-10">
                  REF_01: TARGET_PROFILES
                </div>
                <h3 className="text-3xl font-black text-slate-950 mb-10 italic uppercase tracking-tighter">Target Profiles</h3>
                <div className="space-y-8">
                  {[
                    { title: "Academic Core", desc: "College students in final or pre-final cycles." },
                    { title: "Early Professional", desc: "Recent graduates within L+1 year context." },
                    { title: "Strategic Pivots", desc: "Professionals transitioning with core logic bases." },
                    { title: "System Autodidacts", desc: "Self-taught architects with proven builds." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group/item">
                      <div className="text-[10px] font-black text-slate-300 mt-1">0{i + 1}</div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase mb-1 group-hover/item:text-red-600 transition-colors">{item.title}</h4>
                        <p className="text-xs font-bold text-slate-400 group-hover/item:text-slate-600 transition-colors leading-tight">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scanner Line Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600/20 to-transparent -translate-y-full group-hover:animate-[scan_3s_linear_infinite]" />
            </div>

            {/* Core Competencies - Schematic Module */}
            <div className="bg-white p-12 md:p-20 relative group overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-slate-300" />
              <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-slate-300" />

              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-sm border border-slate-600/20 bg-slate-50 text-[10px] font-black text-slate-600 uppercase tracking-widest mb-10">
                  REF_02: CORE_COMPETENCIES
                </div>
                <h3 className="text-3xl font-black text-slate-950 mb-10 italic uppercase tracking-tighter">Key Capabilities</h3>
                <div className="space-y-8">
                  {[
                    { title: "Algorithmic Logic", desc: "Fundamental understanding of data structures." },
                    { title: "Environment Literacy", desc: "Familiarity with modern web ecosystems (JS/React)." },
                    { title: "Growth Velocity", desc: "Proven ability to synthesize new concepts rapidly." },
                    { title: "Operational Focus", desc: "Commitment to a 12-week intensive execution cycle." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group/item">
                      <div className="text-[10px] font-black text-slate-300 mt-1">0{i + 5}</div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase mb-1 group-hover/item:text-red-600 transition-colors">{item.title}</h4>
                        <p className="text-xs font-bold text-slate-400 group-hover/item:text-slate-600 transition-colors leading-tight">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Selection Pipeline - Modular Node Design */}
          <div className="mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-16 px-4"
            >
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">System_Selection_Pipeline</h4>
              <div className="h-px flex-grow mx-8 bg-slate-200" />
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-600" />
                <div className="w-2 h-2 rounded-full bg-slate-200" />
                <div className="w-2 h-2 rounded-full bg-slate-200" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Digital Application", status: "READY", id: "01" },
                { label: "Algorithmic Assessment", status: "PENDING", id: "02" },
                { label: "Architectural Interview", status: "LOCKED", id: "03" },
                { label: "System Admission", status: "FINAL", id: "04" }
              ].map((stage, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group cursor-crosshair"
                >
                  <div className="bg-white border border-slate-200 p-8 rounded-xl group-hover:border-red-600/50 transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-red-600/5">
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-mono text-[9px] font-bold text-slate-400 group-hover:text-red-600 transition-colors tracking-widest">GATE_{stage.id}</span>
                      <div className={`w-1.5 h-1.5 rounded-full ${stage.status === 'READY' ? 'bg-red-600' : 'bg-slate-200'} group-hover:scale-150 transition-transform`} />
                    </div>
                    <h5 className="text-sm font-black text-slate-900 uppercase tracking-tighter mb-4 leading-tight group-hover:italic transition-all">
                      {stage.label}
                    </h5>
                    <div className="h-[1px] w-full bg-slate-100 group-hover:bg-red-100 mb-4 transition-colors" />
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">{stage.status}</span>
                      <ArrowRight size={10} className="text-slate-300 group-hover:text-red-600 transition-colors" />
                    </div>
                  </div>
                  {/* Connecting Line (hidden on last and mobile) */}
                  {i < 3 && (
                    <div className="absolute top-1/2 -right-2 w-4 h-px bg-slate-200 hidden lg:block z-0" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA Section - High Impact Redesign */}
      <section className="py-8 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600 opacity-10 blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="enterprise-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full border border-red-500/30 text-red-500 text-[9px] font-black uppercase tracking-[0.4em] mb-6"
            >
              System Ready for Admission
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
              Initiate Your <span className="text-red-600">Evolution.</span>
            </h2>
            <p className="text-base text-slate-400 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
              Professional velocity is the key metric. Access the interface below to begin your immersion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" state={{ fromButton: true }} className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-[0_20px_40px_rgba(220,38,38,0.2)]">
                Commence Application
              </Link>
              <Link to="/careers" state={{ fromButton: true }} className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-black text-xs uppercase tracking-widest hover:bg-red-600 hover:border-red-600 transition-all duration-500">
                Full-Time Roles
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </PageLayout >
  );
};

export default Internships;
