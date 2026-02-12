import { motion } from "framer-motion";
import {
  Heart, GraduationCap, Factory, Landmark, ShoppingCart,
  Building2, Sprout, ArrowRight, CheckCircle2, ShieldCheck,
  Cpu, BarChart3, Globe2, Lightbulb, Zap, Activity, Microscope, TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import industryVideo from "@/assets/industry.mp4";
import aboutTeam from "@/assets/about-team.jpg";
import industryImg1 from "@/assets/Gemini_Generated_Image_ello0sello0sello.png";
import industryImg2 from "@/assets/Gemini_Generated_Image_zh56h0zh56h0zh56.png";
import manufacturingImg from "@/assets/industries/manufacturing.jpg";
import retailMainImg from "@/assets/industries/retail-main.jpg";
import retailDetailImg from "@/assets/industries/retail-detail.jpg";
import smartFarmingImg from "@/assets/industries/smart-farming.jpg";


const Industries = () => {
  return (
    <PageLayout>
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-[10s]"
        >
          <source src={industryVideo} type="video/mp4" />
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
              Global Domain Expertise
            </span>
            <h1 className="text-[4rem] md:text-[6.5rem] font-bold text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              Industry <br />
              <span className="text-red-600">Intelligence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl leading-relaxed drop-shadow-md">
              We don't just provide technology; we architect domain-specific ecosystems that redefine what's possible in your sector.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise py-5 px-12 text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-2xl shadow-red-600/20">
                Connect with Experts
              </Link>
              <div className="flex items-center gap-4 px-6 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                <Globe2 size={16} className="text-red-600 shadow-sm" /> Trusted in 150+ Countries
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Abstract Element */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-0" />
      </section>

      {/* 2. PHILOSOPHY — ASYMMETRICAL SPLIT */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-12 mb-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-red-600 mb-6">Our Philosophy</h2>
              <p className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight max-w-4xl italic serif">
                "Generic solutions dilute enterprise potential. We build for the unique <span className="text-red-600">complexity</span> of your industry."
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-video group">
                <img
                  src={aboutTeam}
                  alt="Innovation Lab"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap size={20} className="text-red-500" />
                    <span className="font-bold tracking-widest uppercase text-[10px]">Next-Gen Ready</span>
                  </div>
                  <h3 className="text-2xl font-bold">The VelDurSen Innovation Framework</h3>
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
              className="lg:col-span-5 space-y-8"
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

      {/* 3. INDUSTRY SOLUTIONS — VARIED LAYOUTS */}

      {/* 3.1 HEALTHCARE — IMMERSIVE SPLIT (TEXT LEFT) */}
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
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tighter">Healthcare</h2>
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
                <img src={industryImg1} alt="Healthcare Technology" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent opacity-60" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3.2 EDUCATION — IMMERSIVE LAYERED EDITORIAL */}
      <section className="py-8 bg-white relative overflow-hidden">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left side: Immersive Image with Floating Element */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[300px] lg:min-h-[450px] mb-6 lg:mb-0"
            >
              <div className="absolute inset-0 bg-slate-100 rounded-[3rem] overflow-hidden">
                <img
                  src={industryImg2}
                  alt="Education"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-40" />
              </div>

              {/* Floating Layered Card */}
              <div className="absolute top-10 -right-8 bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white max-w-[280px] hidden md:block">
                <p className="text-3xl font-black text-red-600 mb-2">EdTech</p>
                <p className="font-bold text-slate-900 text-sm leading-tight">Architecting the future of pedagogy through digital scalability.</p>
              </div>
            </motion.div>

            {/* Right side: Clean Editorial Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-16 flex flex-col justify-center space-y-8"
            >
              <header className="space-y-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-red-600">The Academic Evolution</span>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-950 tracking-tighter leading-none">Education</h2>
              </header>

              <div className="space-y-6">
                <p className="text-xl text-slate-500 font-medium leading-tight max-w-lg">
                  Enabling <span className="text-slate-900 underline decoration-red-600/30 decoration-8 underline-offset-4">intelligent academic ecosystems</span> with scalable digital infrastructure.
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

      {/* 3.3 MANUFACTURING — MINIMALIST PRECISION ENGINE */}
      <section className="py-8 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

        <div className="enterprise-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Content Column (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6 order-2 lg:order-1"
            >
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 bg-slate-950 text-white rounded-full text-[9px] font-black uppercase tracking-[0.2em]">Precision Engineering</span>
                <h2 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-none italic">
                  Manu<br /><span className="text-slate-300">facturing</span>
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

            {/* Visual Column (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative order-1 lg:order-2"
            >
              {/* Main Image with decorative framing */}
              <div className="relative p-2">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-600 rounded-tl-2xl opacity-20" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-600 rounded-br-2xl" />

                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl group">
                  <img
                    src={manufacturingImg}
                    alt="Manufacturing"
                    className="w-full aspect-square object-cover transition-transform duration-[4s] group-hover:scale-105"
                  />
                  {/* Real-time scanning effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/5 to-transparent h-1/2 w-full top-0 animate-[scan_6s_linear_infinite]" />
                </div>
              </div>

              {/* Floating Data Overlay */}
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



      {/* 3.5 RETAIL — BOUTIQUE TRIPTYCH STYLE */}
      <section className="py-8 bg-slate-50 relative overflow-hidden">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left side: Triptych Image Gallery */}
            <div className="lg:col-span-7 relative h-[400px] lg:h-[450px] order-2 lg:order-1">
              {/* Large Background Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-[80%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <img src={retailMainImg} alt="Retail Main" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-950/10" />
              </motion.div>

              {/* Overlapping Image 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-6 right-0 w-[45%] h-[50%] rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white z-10"
              >
                <img src={retailDetailImg} alt="Retail Detail" className="w-full h-full object-cover" />
              </motion.div>

              {/* Overlapping Visual Element */}
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

            {/* Right side: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8 order-1 lg:order-2"
            >
              <div className="space-y-3">
                <div className="w-10 h-1 bg-red-600" />
                <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter">Retail</h2>
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

      {/* 3.6 AGRICULTURE — TECHNO-ORGANIC SPLIT */}
      <section className="py-8 bg-white relative overflow-hidden">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left side: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <header className="space-y-2">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-red-600 px-3 py-1 bg-red-50 rounded-full w-fit">Sustainable High-Yield</span>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">Agri<span className="italic text-red-600">Tech.</span></h2>
              </header>

              <p className="text-xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-red-200 pl-6">
                Empowering the global food supply with precision digital farming, predictive yield intelligence, and autonomous IoT systems.
              </p>

              <div className="space-y-3">
                {[
                  { title: "Precision Farming", desc: "Soil & moisture analysis for optimization." },
                  { title: "Yield Prediction", desc: "Machine learning for harvest forecasting." },
                  { title: "Autonomous Monitoring", desc: "Drone spectral imaging health detection." }
                ].map((item, i) => (
                  <div key={i} className="group flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-red-600 transition-all duration-500 hover:-translate-y-1">
                    <div className="space-y-0.5">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-white transition-colors">{item.title}</h4>
                      <p className="text-[9px] text-slate-400 font-bold group-hover:text-red-100 transition-colors uppercase">{item.desc}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-white transition-all">
                      <ArrowRight size={14} className="text-slate-300 group-hover:text-white group-hover:translate-x-1" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/contact" state={{ fromButton: true }} className="inline-flex items-center gap-4 group">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-950 pb-1 border-b-2 border-slate-950">Scale Cultivation</span>
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform shadow-xl shadow-red-200">
                    <Sprout className="text-white" size={16} />
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Right side: Parallelogram Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden rotate-2 shadow-2xl">
                <img
                  src={smartFarmingImg}
                  alt="Smart Farming"
                  className="w-full h-full object-cover -rotate-2 scale-110"
                />
                <div className="absolute inset-0 bg-red-950/20 mix-blend-overlay" />
              </div>

              {/* Geometric Accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-red-100/50 rounded-[4rem] -rotate-6 -z-0" />

              {/* Floating Metric Bubble */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-red-50 z-20"
              >
                <p className="text-[9px] font-black text-red-600 uppercase tracking-widest mb-1">Yield Index</p>
                <div className="flex items-end gap-1">
                  <p className="text-3xl font-black text-slate-900 tracking-tighter">+24%</p>
                  <p className="text-[9px] font-bold text-red-500 mb-1">Growth</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CROSS-INDUSTRY ADVANTAGE — THE STRIP */}
      <section className="py-12 bg-slate-900">
        <div className="enterprise-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="max-w-sm">
              <h4 className="text-white text-2xl font-bold mb-2">The VelDurSen Advantage</h4>
              <p className="text-slate-400 text-sm font-medium">Standardized excellence across every vertical we serve.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Cloud Native", icon: Globe2 },
                { label: "Security First", icon: ShieldCheck },
                { label: "Enterprise AI", icon: Cpu },
                { label: "Global Scale", icon: TrendingUp }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center md:items-start gap-3">
                  <item.icon className="text-red-500" size={24} />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Industries;
