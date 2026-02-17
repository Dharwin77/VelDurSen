import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, MapPin, Calendar, Award, Bookmark, TrendingUp, BarChart3, Briefcase, Building2, Globe, Globe2, Lightbulb, Layers, Shield, Zap, Server, BarChart, Lock, Gauge, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { achievementsData } from "@/data/achievements";

import achievementVideo from "@/assets/achievement.mp4";

const Achievements = () => {
  return (
    <PageLayout>
      {/* 1. HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative h-[50vh] sm:h-[80vh] min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-slate-900">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover object-top transition-transform duration-[10s]"
        >
          <source src={achievementVideo} type="video/mp4" />
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
              Our Achievements
            </span>
            <h1 className="text-[2.75rem] sm:text-[4.5rem] md:text-[6.5rem] font-bold text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              Recognizing <br />
              <span className="text-red-600">Excellence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl leading-relaxed drop-shadow-md">
              A journey of innovation, enterprise performance, and industry recognition across global technology landscapes. VelDurSen is honored to be acknowledged by world leaders in technology.
            </p>
          </motion.div>
        </div>

        {/* Floating Abstract Element */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-0" />
      </section>

      {/* 1.5 CRISPY ACHIEVEMENTS HIGHLIGHTS - REFINED TEXT VERSION */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="enterprise-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">
              Global Excellence & Recognition
            </span>
            <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              <p>
                VelDurSen’s achievements represent a decade of relentless engineering innovation and architectural integrity. We have successfully deployed mission-critical systems across 150+ countries, earning over 50 global awards for our pioneering work in AI safety and cloud resilience.
              </p>
              <p>
                Our journey is defined by transforming complex legacy environments into high-performance digital ecosystems that empower the world’s most ambitious enterprises. Every award is a milestone in our mission to build a more secure, intelligent, and sustainable future for global technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. DYNAMIC ACHIEVEMENT GRID - WITH STACKED-TO-SPLIT ANIMATION */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-visible">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative">
            {achievementsData.map((achievement, idx) => {
              const colorMaps: Record<string, { bg: string, ring: string, iconBg: string }> = {
                "Artificial Intelligence Innovation": { bg: "bg-[#2dd4bf]", ring: "ring-teal-200", iconBg: "bg-teal-700/20" },
                "Multi-Cloud Infrastructure Excellence": { bg: "bg-[#6366f1]", ring: "ring-indigo-200", iconBg: "bg-indigo-700/20" },
                "Zero-Trust Security Framework": { bg: "bg-[#f43f5e]", ring: "ring-rose-200", iconBg: "bg-rose-700/20" },
                "Green Computing & Ethical AI": { bg: "bg-[#10b981]", ring: "ring-emerald-200", iconBg: "bg-emerald-700/20" },
                "Smart Manufacturing Solutions": { bg: "bg-[#f59e0b]", ring: "ring-amber-200", iconBg: "bg-amber-700/20" },
                "Precision Agriculture & AI Analytics": { bg: "bg-[#8b5cf6]", ring: "ring-purple-200", iconBg: "bg-purple-700/20" }
              };

              const style = colorMaps[achievement.category] || colorMaps["Artificial Intelligence Innovation"];

              // Responsive animation offsets
              // Default (Mobile): Fly up from bottom
              let xOffset: string | number = 0;
              let yOffset: string | number = 50;
              let initialRotate = 0;

              // Tablet/Desktop logic
              if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                // On desktop (3 cols)
                xOffset = idx % 3 === 0 ? "50%" : idx % 3 === 2 ? "-50%" : "0%";
                yOffset = idx < 3 ? "10%" : "-10%";
                initialRotate = (idx - 2.5) * 5;
              } else if (typeof window !== 'undefined' && window.innerWidth >= 640) {
                // On tablet (2 cols)
                xOffset = idx % 2 === 0 ? "30%" : "-30%";
                yOffset = 20;
                initialRotate = (idx % 2 === 0 ? 5 : -5);
              }

              return (
                <motion.div
                  key={achievement.id}
                  initial={{
                    opacity: 0,
                    x: xOffset,
                    y: yOffset,
                    rotate: initialRotate,
                    scale: 0.9
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    type: "spring",
                    stiffness: 300, // Increased for snappier response
                    damping: 25,
                    delay: idx * 0.05,
                    mass: 0.5
                  }}
                  whileHover={{ y: -10, rotateZ: idx % 2 === 0 ? 1 : -1, scale: 1.02, zIndex: 50, transition: { duration: 0.2, ease: "easeOut" } }}
                  className="group relative h-[420px] w-full"
                >
                  <Link to={`/achievements/${achievement.id}`} className="block h-full w-full">
                    {/* Main Card Body */}
                    <div className={`relative h-full w-full ${style.bg} rounded-[2.5rem] p-8 shadow-2xl transition-shadow duration-300 overflow-hidden will-change-transform`}>

                      {/* Top Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="text-white">
                          <h4 className="text-2xl font-black tracking-tight">{achievement.category.split(' ')[0]}</h4>
                          <p className="text-white/70 text-xs font-bold uppercase tracking-widest">{achievement.venue.split(',')[0]}</p>
                        </div>

                        <div className="bg-black/20 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-white/10">
                          <Trophy size={14} className="text-white" />
                          <span className="text-white text-[10px] font-black">{achievement.date.split(' ').pop()}</span>
                        </div>
                      </div>

                      {/* Floating Image Section */}
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center z-10 px-8">
                        <motion.div className="relative">
                          <div className={`absolute inset-0 rounded-full blur-2xl opacity-40 ${style.bg} transition-transform duration-300 group-hover:scale-125 will-change-transform`} />
                          <div className="relative w-48 h-48 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/30 transform group-hover:-translate-y-4 transition-transform duration-300 ease-out will-change-transform">
                            <img
                              src={achievement.image}
                              alt={achievement.title}
                              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
                            />
                          </div>
                        </motion.div>
                      </div>

                      {/* Bottom Title */}
                      <div className="absolute bottom-10 left-8 right-8 z-20">
                        <h3 className="text-white text-3xl font-black leading-[1.1] drop-shadow-lg mb-2">
                          {achievement.title.split(' ').slice(0, 3).join(' ')}
                          <br />
                          {achievement.title.split(' ').slice(3).join(' ')}
                        </h3>

                        <div className="mt-4 flex items-center text-white/60 group-hover:text-white transition-colors">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] pt-1">Explore Project</span>
                          <div className="ml-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                            <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>

                      {/* Background Accents */}
                      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
                      <div className="absolute -top-20 -left-20 w-64 h-64 bg-black/5 rounded-full blur-[80px]" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SUCCESS TRAJECTORY SECTION (TROPHY GRAPHIC) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="enterprise-container">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left Column: Trophy Graphic */}
            <div className="w-full lg:w-1/3 flex justify-center relative">
              <div className="relative z-10">
                {/* Abstract Trophy Composition defined by Icons/Divs since we don't have the SVG asset this exact matching is an approximation */}
                <div className="relative drop-shadow-2xl filter flex justify-center">
                  <Trophy size={200} className="text-amber-400 block sm:hidden" strokeWidth={1} fill="#fbbf24" />
                  <Trophy size={320} className="text-amber-400 hidden sm:block" strokeWidth={1} fill="#fbbf24" />
                  {/* Trophy Details/Shine */}
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-yellow-300/30 blur-2xl rounded-full" />
                </div>
                {/* Pedestal */}
                <div className="h-16 w-48 bg-amber-800 mx-auto rounded-t-lg mt-[-20px] relative z-0 flex items-center justify-center shadow-lg">
                  <span className="text-amber-100 font-bold tracking-widest text-sm uppercase">Excellence</span>
                </div>
              </div>
            </div>

            {/* Right Column: Progress Bars */}
            <div className="w-full lg:w-2/3 space-y-5">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">Our Growth <span className="text-orange-600">Trajectory.</span></h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">Consistent performance and measurable impact year over year.</p>
              </div>

              {[
                { label: "Increase Client ROI", value: "300%", bg: "bg-[#a3e635]", hoverBg: "hover:bg-[#a3e635]", width: "w-[85%]", icon: TrendingUp, text: "text-lime-900" },
                { label: "Revenue Growth", value: "150%", bg: "bg-[#4ade80]", hoverBg: "hover:bg-[#4ade80]", width: "w-[90%]", icon: BarChart3, text: "text-green-900" },
                { label: "Special Projects Delivered", value: "2500+", bg: "bg-[#2dd4bf]", hoverBg: "hover:bg-[#2dd4bf]", width: "w-[95%]", icon: Briefcase, text: "text-teal-900" },
                { label: "Best IT Service Company", value: "2026", bg: "bg-[#0d9488]", hoverBg: "hover:bg-[#0d9488]", width: "w-[100%]", icon: Building2, text: "text-white" },
                { label: "Industry Awards Won", value: "50+", bg: "bg-[#0f766e]", hoverBg: "hover:bg-[#0f766e]", width: "w-[100%]", icon: Award, text: "text-white" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center justify-between p-4 pl-8 rounded-r-full shadow-md ${item.bg} ${item.width} hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
                  style={{ originX: 0 }}
                >
                  {/* Hover Background Overlay */}
                  <div className={`absolute inset-0 rounded-r-full ${item.hoverBg} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                  <span className={`font-bold text-lg ${item.text} relative z-10`}>{item.label}</span>
                  <div className="flex items-center gap-6 pr-2 relative z-10">
                    <span className={`font-bold text-xl ${item.text}`}>{item.value}</span>
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                      <item.icon className="w-6 h-6 text-slate-700" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Global Deployment Milestones - 6 Achievement Cards Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="enterprise-container">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">Global Deployment <span className="text-green-600">Milestones.</span></h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              Enterprise achievements in scale, reliability, and transformation. We deliver large-scale platforms that power mission-critical operations globally.
            </p>
          </div>

          {/* 6 Cards Grid - 3x2 Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ gridAutoRows: '1fr' }}>
            {/* Card 1 - Global Deployment Milestones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white flex flex-col h-full"
            >
              {/* Colored Header Bar */}
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-6 relative flex-shrink-0 min-h-[100px] flex items-center">
                <h3 className="text-white font-bold text-lg italic">GLOBAL DEPLOYMENT MILESTONES</h3>
                {/* Icon Badge - Positioned to overlap */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                  <Globe2 className="w-12 h-12 text-amber-600" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-lg font-bold text-slate-900 mb-3">🏆 Large-Scale Enterprise Platforms</h4>
                <p className="text-sm font-semibold text-slate-700 mb-2">What we achieved:</p>
                <ul className="space-y-2 mb-4 flex-shrink-0">
                  <li className="flex gap-2 text-xs text-slate-600">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>Multi-region deployments across global infrastructure</span>
                  </li>
                  <li className="flex gap-2 text-xs text-slate-600">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>Continuous operations for distributed business units</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                  Successfully delivered large-scale enterprise platforms across multiple regions, enabling continuous operations for globally distributed business units.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Enterprise System Modernization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white flex flex-col h-full"
            >
              {/* Colored Header Bar */}
              <div className="bg-gradient-to-r from-red-400 to-rose-500 px-6 py-6 relative flex-shrink-0 min-h-[100px] flex items-center">
                <h3 className="text-white font-bold text-lg italic">SYSTEM MODERNIZATION</h3>
                {/* Icon Badge */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                  <Layers className="w-12 h-12 text-red-600" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-lg font-bold text-slate-900 mb-3">🏆 Legacy to Digital Transformation</h4>
                <p className="text-sm font-semibold text-slate-700 mb-2">What we achieved:</p>
                <ul className="space-y-2 mb-4 flex-shrink-0">
                  <li className="flex gap-2 text-xs text-slate-600">
                    <span className="text-red-500 font-bold">✓</span>
                    <span>Modernized complex legacy environments</span>
                  </li>
                  <li className="flex gap-2 text-xs text-slate-600">
                    <span className="text-red-500 font-bold">✓</span>
                    <span>High-performance digital ecosystems for enterprises</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                  Transformed complex legacy environments into high-performance digital ecosystems, improving platform reliability, scalability, and operational efficiency.
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Mission-Critical Reliability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white flex flex-col h-full"
            >
              {/* Colored Header Bar */}
              <div className="bg-gradient-to-r from-blue-400 to-indigo-500 px-6 py-6 relative flex-shrink-0 min-h-[100px] flex items-center">
                <h3 className="text-white font-bold text-lg italic">MISSION-CRITICAL RELIABILITY</h3>
                {/* Icon Badge */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                  <Server className="w-12 h-12 text-blue-600" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-lg font-bold text-slate-900 mb-3">🏆 Enterprise Uptime Excellence</h4>
                <p className="text-sm font-semibold text-slate-700 mb-2">What we achieved:</p>
                <ul className="space-y-2 mb-4 flex-shrink-0">
                  <li className="flex gap-2 text-xs text-slate-600">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>Engineered highly available enterprise systems</span>
                  </li>
                  <li className="flex gap-2 text-xs text-slate-600">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>Consistent uptime across global workloads</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                  Engineered and operated highly available enterprise systems supporting critical business operations with consistent uptime across global workloads.
                </p>
              </div>
            </motion.div>

            {/* Card 4 - Security & Compliance Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white flex flex-col h-full"
            >
              {/* Colored Header Bar */}
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-6 relative flex-shrink-0 min-h-[100px] flex items-center">
                <h3 className="text-white font-bold text-lg italic">SECURITY & COMPLIANCE</h3>
                {/* Icon Badge */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                  <Lock className="w-12 h-12 text-green-600" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-lg font-bold text-slate-900 mb-3">🏆 Regulated Industry Excellence</h4>
                <p className="text-sm font-semibold text-slate-700 mb-2">What we achieved:</p>
                <ul className="space-y-2 mb-4 flex-shrink-0">
                  <li className="flex gap-2 text-xs text-slate-600">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Enterprise-wide security modernization programs</span>
                  </li>
                  <li className="flex gap-2 text-xs text-slate-600">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Aligned with regulatory and compliance frameworks</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                  Enabled enterprise-wide security modernization programs aligned with regulatory and compliance frameworks across regulated industries.
                </p>
              </div>
            </motion.div>

            {/* Card 5 - Large-Scale Digital Transformation Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white flex flex-col h-full"
            >
              {/* Colored Header Bar */}
              <div className="bg-gradient-to-r from-purple-400 to-violet-500 px-6 py-6 relative flex-shrink-0 min-h-[100px] flex items-center">
                <h3 className="text-white font-bold text-lg italic">DIGITAL TRANSFORMATION</h3>
                {/* Icon Badge */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                  <CheckCircle className="w-12 h-12 text-purple-600" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-lg font-bold text-slate-900 mb-3">🏆 Multi-Year Enterprise Initiatives</h4>
                <p className="text-sm font-semibold text-slate-700 mb-2">What we achieved:</p>
                <ul className="space-y-2 mb-4 flex-shrink-0">
                  <li className="flex gap-2 text-xs text-slate-600">
                    <span className="text-purple-500 font-bold">✓</span>
                    <span>Led multi-year enterprise transformation initiatives</span>
                  </li>
                  <li className="flex gap-2 text-xs text-slate-600">
                    <span className="text-purple-500 font-bold">✓</span>
                    <span>Cloud migration, re-architecture, and modernization</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                  Led multi-year enterprise transformation initiatives spanning cloud migration, platform re-architecture, and operational modernization.
                </p>
              </div>
            </motion.div>

            {/* Card 6 - Recognized Industry Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white flex flex-col h-full"
            >
              {/* Colored Header Bar */}
              <div className="bg-gradient-to-r from-cyan-400 to-teal-500 px-6 py-6 relative flex-shrink-0 min-h-[100px] flex items-center">
                <h3 className="text-white font-bold text-lg italic">INDUSTRY RECOGNITION</h3>
                {/* Icon Badge */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                  <Trophy className="w-12 h-12 text-teal-600" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-lg font-bold text-slate-900 mb-3">🏆 Global Technology Leadership</h4>
                <p className="text-sm font-semibold text-slate-700 mb-2">What we achieved:</p>
                <ul className="space-y-2 mb-4 flex-shrink-0">
                  <li className="flex gap-2 text-xs text-slate-600">
                    <span className="text-teal-500 font-bold">✓</span>
                    <span>Acknowledged across global technology forums</span>
                  </li>
                  <li className="flex gap-2 text-xs text-slate-600">
                    <span className="text-teal-500 font-bold">✓</span>
                    <span>Contributions to cloud resilience and AI safety</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                  Acknowledged across global technology forums and industry platforms for contributions to enterprise cloud resilience, AI safety, and secure digital transformation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-slate-50 text-center">
        <div className="enterprise-container">
          <Award size={48} className="text-amber-400 mx-auto mb-6 opacity-50" />
          <h3 className="text-2xl font-bold text-slate-400">Excellence is our Standard.</h3>
        </div>
      </section>
    </PageLayout>
  );
};

export default Achievements;
