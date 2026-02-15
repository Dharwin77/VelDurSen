import { motion } from "framer-motion";
import { CheckCircle, Eye, Target, Shield, Leaf, Heart, GraduationCap, Globe, Sparkles, Award, Users, Brain, Lock, Zap, BookOpen, Lightbulb, Globe2, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";
import aboutTeam from "@/assets/coptercode3.png.jpeg";
import aboutImage1 from "@/assets/coptercode3.png.jpeg";
import aboutImage2 from "@/assets/coptercode2.jpeg";
import aboutVideo from "@/assets/about.mp4";
import { Link } from "react-router-dom";
import globalMap from "@/assets/global-map.jpg";
import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";
import blog4 from "@/assets/blog-4.png";
import blog5 from "@/assets/blog-5.png";
import blog6 from "@/assets/blog-6.png";
import blog7 from "@/assets/blog-7.png";
import blog8 from "@/assets/blog-8.png";
import blog9 from "@/assets/blog-9.png";
import blog10 from "@/assets/blog-10.png";


const coreValues = [
  { icon: Shield, title: "Security First", desc: "Enterprise-grade security is embedded in every system, process, and decision we make from conception to deployment." },
  { icon: Target, title: "Architecture First", desc: "We design systems from the architecture up, ensuring scalability, resilience, and performance from day one." },
  { icon: Leaf, title: "Sustainability Driven", desc: "Green computing and carbon-aware cloud practices are central to our engineering philosophy worldwide." },
  { icon: Globe, title: "Global Excellence", desc: "Delivering world-class technology solutions across 50+ countries with deep local expertise and cultural awareness." },
  { icon: Users, title: "Customer Obsession", desc: "Every decision is driven by our commitment to delivering measurable value and long-term partnerships with our clients." },
  { icon: Lightbulb, title: "Innovation DNA", desc: "Continuous innovation, experimentation, and adoption of emerging technologies to stay ahead of industry curves." },
];

import { SEO } from "@/components/shared/SEO";
import { ORGANIZATION_SCHEMA } from "@/data/schemas";

const About = () => (
  <PageLayout>
    <SEO
      title="About VelDurSen Technologies | Global Digital Transformation"
      description="VelDurSen is a global enterprise technology partner. We build secure, scalable, and sustainable digital systems for Fortune 500 clients worldwide."
      keywords={["About VelDurSen", "Global IT company", "Digital transformation partner", "Enterprise technology leadership"]}
      schemas={[ORGANIZATION_SCHEMA]}
    />
    {/* HERO SECTION - Matching Industry Page Style */}
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-[10s]"
      >
        <source src={aboutVideo} type="video/mp4" />
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
            About VelDurSen
          </span>
          <h1 className="text-[2.75rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[6.5rem] font-bold text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            Digital <br />
            <span className="text-red-600">Transformation.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-3xl leading-relaxed drop-shadow-md">
            We are a global technology company dedicated to building secure, scalable, and sustainable digital systems for the world's most ambitious enterprises across industries and continents.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise py-5 px-12 text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-2xl shadow-red-600/20">
              Our Story
            </Link>
            <div className="flex items-center gap-4 px-6 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
              <Globe2 size={16} className="text-red-600 shadow-sm" /> Presence in 50+ Countries
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Abstract Element */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-0" />
    </section>

    {/* Company Overview - Unique "Digital Narrative" Section */}
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Dynamic Background Grid Pattern - Unique to this section */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="enterprise-container relative z-10">
        {/* Full-Width Header for better coverage */}
        <div className="max-w-5xl mb-12">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-black uppercase tracking-[0.5em] text-red-600 mb-6 bg-red-50 px-4 py-2 rounded-lg"
          >
            Our Story
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-[900] text-[#0f172a] leading-[1.1] tracking-tight">
            {"Building the Digital Future Since Day One".split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.2em] pb-[0.1em]">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.33, 1, 0.68, 1] }}
                  className={`inline-block leading-tight ${i >= 2 ? "text-[#dc2626]" : ""}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left Column: Narrative with Scroll Reveal */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {[
                "Founded with a vision to transform how enterprises leverage technology, VelDurSen has grown into a global force in enterprise digital transformation. We partner with Fortune 500 companies and high-growth organizations worldwide to architect, build, and scale mission-critical technology systems that handle millions of users and process billions of transactions.",
                "Our AI-first, security-first approach ensures that every solution we deliver is not just innovative but also resilient, compliant with global regulatory frameworks, and built to last decades. We believe that great technology starts with great architecture—and great architecture starts with understanding the unique business challenges.",
                "With engineering centers and delivery teams spanning North America, Europe, Asia-Pacific, Middle East, and Latin America, we bring deep domain expertise and round-the-clock delivery capabilities to every engagement. Our follow-the-sun model ensures continuous development and 24/7 support.",
                "Today, VelDurSen powers digital ecosystems for healthcare providers serving millions of patients, financial institutions processing trillions in transactions, manufacturers optimizing global supply chains, and governments building smart city infrastructure."
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.1, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.8 }}
                  className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium relative pl-10 group"
                >
                  {/* Vertical "Narrative Line" Indicator */}
                  <div className="absolute left-0 top-1 bottom-1 w-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 1 }}
                      className="w-full bg-red-600"
                    />
                  </div>
                  <p>{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Isometric Unfolding Stats */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-4">
            <div className="lg:sticky lg:top-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 perspective-[2000px]">
              {[
                { value: "500+", label: "Enterprise Clients", sublabel: "Worldwide" },
                { value: "3,500+", label: "Engineers", sublabel: "Across 5 continents" },
                { value: "50+", label: "Countries", sublabel: "Active operations" },
                { value: "10+", label: "Years", sublabel: "Of excellence" },
                { value: "1000+", label: "Projects", sublabel: "Successfully delivered" },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{
                    opacity: 0,
                    rotateX: -45,
                    z: -200,
                    y: 150
                  }}
                  whileInView={{
                    opacity: 1,
                    rotateX: 0,
                    z: 0,
                    y: 0
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{
                    scale: 1.03,
                    rotateY: -5,
                    x: 12,
                    transition: { duration: 0.4 }
                  }}
                  className="bg-white border border-slate-100 p-6 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-10px_rgba(239,68,68,0.12)] transition-all group relative"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-4xl font-black text-slate-900 group-hover:text-red-600 transition-colors duration-300 tracking-tighter">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3">{m.label}</div>
                      <div className="text-[10px] text-slate-300 font-semibold mt-1">{m.sublabel}</div>
                    </div>
                    {/* Index Indicator */}
                    <div className="text-5xl font-black text-slate-50 group-hover:text-red-500/5 transition-colors select-none">
                      0{i + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Our Vision & Mission - Alternating Rows */}
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="enterprise-container relative space-y-16">

        {/* Row 1: Our Vision (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Vision Content */}
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-[900] uppercase tracking-wider text-[#0f172a] mb-12 border-b-2 border-[#dc2626] pb-4 inline-block"
            >
              Our <span className="text-[#dc2626]">Vision</span>
            </motion.h2>

            <div className="space-y-6">
              {[
                { title: "TRUSTED PARTNER", desc: "To be the world's most trusted enterprise technology partner globally." },
                { title: "INTELLIGENT ECOSYSTEMS", desc: "Pioneer intelligent and secure digital ecosystems for modern enterprises." },
                { title: "SUSTAINABLE GROWTH", desc: "Enable sustainable growth across every continent through innovation." },
                { title: "ARCHITECTURE FIRST", desc: "Lead with architecture-first engineering standards in every build." },
                { title: "ETHICAL AI", desc: "Integrate ethical and responsible AI into mission-critical systems." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <span className="text-slate-200 font-bold text-sm pt-1">0{idx + 1}</span>
                  <div>
                    <h3 className="text-sm font-extrabold tracking-widest uppercase mb-2 text-slate-900 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vision Image (Right side) */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-red-100/40 rounded-full blur-3xl -z-10 group-hover:bg-red-200/60 transition-colors duration-700 animate-pulse" />
              <div className="relative overflow-hidden rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] group-hover:rounded-2xl aspect-square shadow-2xl shadow-red-200/50 border-4 border-white/50 backdrop-blur-sm transition-all duration-1000">
                <img src={aboutTeam} alt="VelDurSen Founders" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent p-8 flex flex-col justify-between">
                  {/* Top Signature */}
                  <div className="text-white text-right self-end -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <span className="block font-['Dancing_Script'] text-3xl md:text-4xl drop-shadow-md">Dharwin</span>
                    <div className="text-[10px] font-black uppercase tracking-widest mt-1">Dharwin</div>
                    <div className="text-[9px] font-bold opacity-80">Co-founder, CTO</div>
                  </div>
                  {/* Bottom Signature */}
                  <div className="text-slate-900 bg-white/40 backdrop-blur-md p-4 rounded-2xl w-fit rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <span className="block font-['Dancing_Script'] text-3xl md:text-4xl">Senthil</span>
                    <div className="text-[10px] font-black uppercase tracking-widest mt-1">Senthil Kumar</div>
                    <div className="text-[9px] font-bold opacity-80">Co-founder, CEO</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Row 2: Our Mission (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Mission Image (Left side) */}
          <div className="relative order-last lg:order-first">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-slate-100/40 rounded-full blur-3xl -z-10 group-hover:bg-slate-200/60 transition-colors duration-700 animate-pulse" />
              <div className="relative overflow-hidden rounded-[60%_40%_30%_70%_/_50%_40%_50%_60%] group-hover:rounded-2xl aspect-square shadow-2xl shadow-slate-200/50 border-4 border-white/50 backdrop-blur-sm transition-all duration-1000">
                <img src={aboutImage2} alt="VelDurSen Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent p-8 flex flex-col justify-between">
                  <div className="text-white text-right self-end -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <span className="block font-['Dancing_Script'] text-3xl md:text-4xl drop-shadow-md">Innovation.</span>
                  </div>
                  <div className="text-slate-900 bg-white/40 backdrop-blur-md p-4 rounded-2xl w-fit rotate-3 group-hover:rotate-0 transition-transform duration-500 font-bold uppercase tracking-widest text-[10px]">
                    Mission Focused
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission Content */}
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-[900] uppercase tracking-wider text-[#0f172a] mb-12 border-b-2 border-[#dc2626] pb-4 inline-block"
            >
              Our <span className="text-[#dc2626]">Mission</span>
            </motion.h2>

            <div className="space-y-6">
              {[
                { title: "DIGITAL RESILIENCE", desc: "Deliver digital resilience for complex global enterprise operations." },
                { title: "REGULATORY COMPLIANCE", desc: "Ensure regulatory compliance across all jurisdictions and verticals." },
                { title: "PREDICTIVE AI", desc: "Optimize global supply chains with advanced predictive AI solutions." },
                { title: "SCALABLE ARCHITECTURE", desc: "Architect scalable solutions for Fortune 500 and high-growth leaders." },
                { title: "MEASURABLE VALUE", desc: "Drive measurable business value through long-term strategic partnerships." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <span className="text-slate-200 font-bold text-sm pt-1">0{idx + 6}</span>
                  <div>
                    <h3 className="text-sm font-extrabold tracking-widest uppercase mb-2 text-slate-900 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values - Principles That Define Us */}
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="enterprise-container relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
          >
            CORE VALUES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-[900] text-[#0f172a] mb-6"
          >
            Principles That <span className="text-[#dc2626]">Define Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            The unwavering values that guide every decision, every system we build, and every relationship we nurture across our global organization.
          </motion.p>
        </div>

        {/* Values in Action Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-12 group"
        >
          <div className="absolute inset-0 z-0">
            <img
              src={aboutTeam}
              alt="Teams in action"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/75 transition-colors group-hover:bg-black/70" />
            <div className="absolute inset-0 border-[6px] border-red-500/30 rounded-3xl m-3 pointer-events-none" />
          </div>

          <div className="relative z-10 p-8 md:p-16 max-w-3xl drop-shadow-2xl">
            <span className="text-white/80 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">
              VALUES IN ACTION
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-red-500 mb-6 leading-tight">
              Where strategy, security, and sustainability <br className="hidden md:block" />
              meet disciplined delivery
            </h3>
            <p className="text-white text-lg font-medium leading-relaxed max-w-2xl">
              A glimpse into the teams that live these principles daily—architecting resilient systems, protecting trust, and driving innovation for enterprises in 50+ countries.
            </p>
          </div>
        </motion.div>

        {/* Principles Grid - Compact Premium Feature Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-7 md:p-8 rounded-[1.75rem] border border-slate-200/50 transition-all duration-500 bg-white group overflow-hidden shadow-[0_10px_25px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-15px_rgba(220,38,38,0.1)] hover:-translate-y-1.5 hover:border-red-100"
            >
              {/* Decorative Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/5 blur-[40px] rounded-full group-hover:bg-red-600/10 transition-colors duration-500" />

              {/* Background Map Watermark */}
              <div className="absolute inset-0 z-0 opacity-[0.03] grayscale transition-all duration-700 group-hover:opacity-[0.06] group-hover:scale-105">
                <img src={globalMap} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Scaled Down Icon Container */}
                <div className="mb-6 relative">
                  <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg shadow-red-600/20 relative z-10">
                    <v.icon className="text-white" size={22} />
                  </div>
                  <div className="absolute inset-0 w-12 h-12 rounded-xl bg-red-100 -rotate-12 group-hover:-rotate-6 transition-transform duration-500" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-700 transition-colors duration-300">
                  {v.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {v.desc}
                </p>

                {/* Interactive Footer - More subtle */}
                <div className="flex items-center gap-2 text-red-600 font-bold text-[10px] tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <span>Principle</span>
                  <div className="h-px w-6 bg-red-600/30" />
                  <Zap size={12} className="fill-red-600" />
                </div>
              </div>

              {/* Dynamic Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-red-400 w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values Section - Points Style Layout */}
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="enterprise-container relative z-10">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-[900] text-[#0f172a] mb-4 tracking-tighter"
          >
            The Values That <br className="hidden md:block" />
            <span className="text-[#dc2626]">Drive Our Impact.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-4xl mx-auto text-base leading-relaxed"
          >
            At VelDurSen, our values are the cornerstone of our enterprise technology and digital transformation approach.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto">
          {[
            {
              title: "Thinking Big",
              desc: "We combine ambition with inspiration and innovation and have little tolerance for mediocrity. We aim not only to explore different possibilities but also to find derivate solutions."
            },
            {
              title: "Perseverance",
              desc: "It is dedication and commitment to convert well-designed master plans into real results while constantly surmounting obstacles. We never lag in our desire to strive for the best."
            },
            {
              title: "Being Entrepreneurial",
              desc: "What drives us as a technology leader is the ability to turn projects into innovative concepts. We approach projects, leading the charge on change and finding ways to innovate on every project we undertake."
            },
            {
              title: "Growth of Self & Others",
              desc: "For all practical purposes, we are in support of the idea of systematic progress - for the company as well as with the clients. Hence, our partnerships are born from a desire to work with other productive entities for mutual benefits."
            },
            {
              title: "Excellence",
              desc: "The development of strategies to ensure that there is organic growth in the company can be challenging but we guarantee the best outcomes. Our primary concern is to provide the best quality work and still maintain effectiveness."
            },
            {
              title: "Humility",
              desc: "As shown by the results above, confidence is derived not from arrogance but from honest effort and the assertion that activism fosters positive change."
            }
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 group"
            >
              <div className="shrink-0 pt-1">
                <CheckCircle className="text-red-600 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 group-hover:text-red-600 transition-colors duration-300 uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team Behind the Scene Section */}
    <section className="py-24 bg-white text-slate-900 overflow-hidden border-t border-slate-50">
      <div className="enterprise-container mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-[900] text-[#0f172a] mb-6 tracking-tight"
        >
          Team behind the <span className="text-[#dc2626]">scene</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium"
        >
          Explore how we've helped companies turn ideas into digital products that convert, scale, and grow.
        </motion.p>
      </div>

      <div className="relative flex flex-col gap-6 overflow-hidden">
        {/* Row 1: Left to Right */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-6 shrink-0"
          >
            {[blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9, blog10, blog1, blog2, blog3, blog4].map((img, i) => (
              <div key={i} className="w-[320px] h-[220px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shrink-0 shadow-sm transition-shadow duration-500 hover:shadow-xl">
                <img src={img} alt="" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: [-1920, 0] }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-6 shrink-0"
          >
            {[blog5, blog6, blog7, blog8, blog9, blog10, blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8].map((img, i) => (
              <div key={i} className="w-[320px] h-[220px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shrink-0 shadow-sm transition-shadow duration-500 hover:shadow-xl">
                <img src={img} alt="" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

  </PageLayout>
);

export default About;
