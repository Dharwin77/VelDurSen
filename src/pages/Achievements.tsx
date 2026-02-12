import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, MapPin, Calendar, Award, Bookmark, TrendingUp, BarChart3, Briefcase, Building2 } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { achievementsData } from "@/data/achievements";

import achievementVideo from "@/assets/achievement.mp4";

const Achievements = () => {
  return (
    <PageLayout>
      {/* 1. HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-900">
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
              Global Recognition
            </span>
            <h1 className="text-[4rem] md:text-[6.5rem] font-bold text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
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

      {/* 2. DYNAMIC ACHIEVEMENT GRID - WITH STACKED-TO-SPLIT ANIMATION */}
      <section className="py-24 bg-white overflow-hidden min-h-screen flex items-center">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-12 md:gap-y-20 relative">
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

              // Calculate stack offsets to make them cluster in the center
              // On desktop (3 cols):
              // col 0: x: 100%, col 1: x: 0, col 2: x: -100%
              // row 0: y: 20%, row 1: y: -20%
              const xOffset = idx % 3 === 0 ? "100%" : idx % 3 === 2 ? "-100%" : "0%";
              const yOffset = idx < 3 ? "20%" : "-20%";

              return (
                <motion.div
                  key={achievement.id}
                  initial={{
                    opacity: 0,
                    x: xOffset,
                    y: yOffset,
                    rotate: (idx - 2.5) * 10, // Fanned rotation
                    scale: 0.8
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 40,
                    damping: 15,
                    delay: idx * 0.05,
                    duration: 0.8
                  }}
                  whileHover={{ y: -15, rotateZ: idx % 2 === 0 ? 2 : -2, scale: 1.02, zIndex: 50 }}
                  className="group relative h-[480px] w-full"
                >
                  <Link to={`/achievements/${achievement.id}`} className="block h-full w-full">
                    {/* Main Card Body */}
                    <div className={`relative h-full w-full ${style.bg} rounded-[2.5rem] p-8 shadow-2xl transition-shadow duration-500 overflow-hidden`}>

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
                          <div className={`absolute inset-0 rounded-full blur-2xl opacity-40 ${style.bg} transition-transform group-hover:scale-150`} />
                          <div className="relative w-48 h-48 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/30 transform group-hover:-translate-y-6 transition-transform duration-700 ease-out">
                            <img
                              src={achievement.image}
                              alt={achievement.title}
                              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
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
                <div className="relative drop-shadow-2xl filter">
                  <Trophy size={320} className="text-amber-400" strokeWidth={1} fill="#fbbf24" />
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
                <h2 className="text-3xl font-bold text-slate-900">Our Growth Trajectory</h2>
                <p className="text-slate-500 mt-2">Consistent performance and measurable impact year over year.</p>
              </div>

              {[
                { label: "Increase Client ROI", value: "300%", bg: "bg-[#a3e635]", width: "w-[85%]", icon: TrendingUp, text: "text-lime-900" },
                { label: "Revenue Growth", value: "150%", bg: "bg-[#4ade80]", width: "w-[90%]", icon: BarChart3, text: "text-green-900" },
                { label: "Special Projects Delivered", value: "2500+", bg: "bg-[#2dd4bf]", width: "w-[95%]", icon: Briefcase, text: "text-teal-900" },
                { label: "Best IT Service Company", value: "2026", bg: "bg-[#0d9488]", width: "w-[100%]", icon: Building2, text: "text-white" },
                { label: "Industry Awards Won", value: "50+", bg: "bg-[#0f766e]", width: "w-[100%]", icon: Award, text: "text-white" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center justify-between p-4 pl-8 rounded-r-full shadow-md ${item.bg} ${item.width} hover:scale-[1.01] transition-transform`}
                >
                  <span className={`font-bold text-lg ${item.text}`}>{item.label}</span>
                  <div className="flex items-center gap-6 pr-2">
                    <span className={`font-bold text-xl ${item.text}`}>{item.value}</span>
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <item.icon className="w-6 h-6 text-slate-700" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Decorative footer element */}
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
