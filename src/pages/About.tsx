import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Eye, Target, Shield, Leaf, Heart, GraduationCap, Globe, Sparkles, Award, Users, Brain, Lock, Zap, BookOpen, Lightbulb } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";
import aboutTeam from "@/assets/about-team.jpg";
import globalMap from "@/assets/global-map.jpg";
import { Link } from "react-router-dom";

const coreValues = [
  { icon: Shield, title: "Security First", desc: "Enterprise-grade security is embedded in every system, process, and decision we make from conception to deployment." },
  { icon: Target, title: "Architecture First", desc: "We design systems from the architecture up, ensuring scalability, resilience, and performance from day one." },
  { icon: Leaf, title: "Sustainability Driven", desc: "Green computing and carbon-aware cloud practices are central to our engineering philosophy worldwide." },
  { icon: Globe, title: "Global Excellence", desc: "Delivering world-class technology solutions across 50+ countries with deep local expertise and cultural awareness." },
  { icon: Users, title: "Customer Obsession", desc: "Every decision is driven by our commitment to delivering measurable value and long-term partnerships with our clients." },
  { icon: Lightbulb, title: "Innovation DNA", desc: "Continuous innovation, experimentation, and adoption of emerging technologies to stay ahead of industry curves." },
];

const About = () => {
  useEffect(() => {
    document.title = "About | VelDurSen";
  }, []);

  return (
    <PageLayout>
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${aboutTeam})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-primary/85" />

        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-block text-2xl md:text-3xl font-extrabold uppercase tracking-[0.25em] text-primary-foreground drop-shadow-md">
            About VelDurSen
          </span>
        </div>
        <div className="enterprise-container relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-center mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-[3.15rem] font-bold text-primary-foreground leading-tight mb-5">
              Enterprise Technology & Digital Transformation Company
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mx-auto max-w-4xl">
              We are a global technology company dedicated to building secure, scalable, and sustainable digital systems for the world's most ambitious enterprises across industries and continents.
            </p>
          </motion.div>
        </div>
      </section>

    {/* Dynamic Vision + Mission spotlight */}
    <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="enterprise-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            <span className="h-[1px] w-8 bg-accent/60" />
            Vision & Mission
            <span className="h-[1px] w-8 bg-accent/60" />
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">The Pulse Behind VelDurSen</h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            The principles that steer how we architect, secure, and scale technology—brought to life with motion as you scroll.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {[{
            title: "Our Vision",
            text: "To be the global catalyst for sustainable digital transformation, creating a world where technology amplifies human potential without compromising our planet.",
            gradient: "from-blue-500/90 via-blue-600/90 to-indigo-600/90",
            icon: Eye,
          }, {
            title: "Our Mission",
            text: "To deliver architecture-first, AI-driven technology systems that empower global enterprises to achieve operational excellence, digital resilience, regulatory compliance, and sustainable growth while maintaining the highest standards of security and ethical practices.",
            gradient: "from-emerald-500/90 via-emerald-600/90 to-teal-600/90",
            icon: Target,
          }].map((item, i) => (
            <motion.div
              key={item.title}
              initial={item.title === "Our Vision"
                ? { opacity: 0, x: -80, y: 20, rotateX: -4, scale: 0.97 }
                : { opacity: 0, x: 80, y: 20, rotateX: -4, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, scale: 1 }}
              whileHover={{ y: -10, scale: 1.02, rotateX: 2, rotateY: -2 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.18, type: "spring", stiffness: 200, damping: 16, mass: 0.9 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl ring-0 ring-accent/0 hover:ring-4 hover:ring-accent/40 hover:shadow-[0_25px_70px_-30px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%)]" />
              <div className="pointer-events-none absolute inset-[-20%] bg-[conic-gradient(from_120deg_at_50%_50%,rgba(255,255,255,0.28),transparent_35%,transparent_65%,rgba(255,255,255,0.12))] opacity-0 group-hover:opacity-70 group-hover:animate-[spin_9s_linear_infinite] transition-opacity duration-400" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] translate-x-[-140%] group-hover:translate-x-[140%] transition-transform duration-800 ease-out" />
              <div className="relative p-8 md:p-10 text-left text-primary-foreground space-y-4">
                <div className="flex items-center gap-3">
                  <item.icon className="w-8 h-8" />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]">{item.title}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold leading-snug drop-shadow-md">{item.title}</h3>
                <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed drop-shadow">
                  {item.text}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/80">
                  <span className="h-[1px] w-10 bg-primary-foreground/60" />
                  Scroll to continue
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Photo spotlight + Company Overview */}
    <section className="section-padding bg-white pt-8 md:pt-10">
      <div className="enterprise-container grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.01, rotate: 0.3 }}
            className="transition-transform duration-300"
          >
            <img
              src={aboutTeam}
              alt="VelDurSen team collaborating"
              className="w-full rounded-2xl shadow-xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="overflow-hidden rounded-2xl shadow-xl border border-border/70"
          >
            <img
              src={globalMap}
              alt="VelDurSen global delivery footprint"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 18px 45px rgba(0,0,0,0.12)" }}
              className="relative overflow-hidden group min-h-[140px] rounded-xl border border-border bg-accent/5 shadow-sm transition-transform duration-200 hover:ring-2 hover:ring-accent/30"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 rounded-[14px] bg-[conic-gradient(from_0deg,rgba(59,130,246,0.55),rgba(79,70,229,0.5),rgba(59,130,246,0.55))] animate-[spin_8s_linear_infinite]" />
                <div className="absolute inset-[1px] rounded-[12px] bg-gradient-to-br from-white/88 via-white/86 to-slate-200/75" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] translate-x-[-140%] group-hover:translate-x-[140%] transition-transform duration-700 ease-out" />
              <div className="relative z-20 p-6 md:p-7">
                <div className="text-2xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm font-semibold text-foreground">Countries</div>
                <div className="text-xs text-muted-foreground">Active operations</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 18px 45px rgba(0,0,0,0.12)" }}
              className="relative overflow-hidden group min-h-[140px] rounded-xl border border-border bg-accent/5 shadow-sm transition-transform duration-200 hover:ring-2 hover:ring-accent/30"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 rounded-[14px] bg-[conic-gradient(from_0deg,rgba(59,130,246,0.55),rgba(79,70,229,0.5),rgba(59,130,246,0.55))] animate-[spin_8s_linear_infinite]" />
                <div className="absolute inset-[1px] rounded-[12px] bg-gradient-to-br from-white/88 via-white/86 to-slate-200/75" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] translate-x-[-140%] group-hover:translate-x-[140%] transition-transform duration-700 ease-out" />
              <div className="relative z-20 p-6 md:p-7">
                <div className="text-2xl font-bold text-accent mb-1">1000+</div>
                <div className="text-sm font-semibold text-foreground">Projects</div>
                <div className="text-xs text-muted-foreground">Successfully delivered</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-3 max-w-3xl">
          <span className="block text-2xl md:text-3xl font-extrabold uppercase tracking-[0.2em] text-accent mb-4">Our Story</span>
          <h2 className="section-title text-left">Building the Digital Future Since Day One</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Founded with a vision to transform how enterprises leverage technology, VelDurSen has grown into a global force in enterprise digital transformation. We partner with Fortune 500 companies and high-growth organizations worldwide to architect, build, and scale mission-critical technology systems that handle millions of users and process billions of transactions.
            </p>
            <p>
              Our AI-first, security-first approach ensures that every solution we deliver is not just innovative but also resilient, compliant with global regulatory frameworks, and built to last decades. We believe that great technology starts with great architecture—and great architecture starts with understanding the unique business challenges, operational contexts, and growth trajectories of each client.
            </p>
            <p>
              With engineering centers and delivery teams spanning North America, Europe, Asia-Pacific, Middle East, and Latin America, we bring deep domain expertise and round-the-clock delivery capabilities to every engagement. Our follow-the-sun model ensures continuous development, faster time-to-market, and 24/7 support for global enterprise operations.
            </p>
            <p>
              Today, VelDurSen powers digital ecosystems for healthcare providers serving millions of patients, financial institutions processing trillions in transactions, manufacturers optimizing global supply chains, retailers transforming omnichannel experiences, and governments building smart city infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-10">
            {[
              { value: "10+", label: "Years", sublabel: "Of excellence" },
              { value: "500+", label: "Enterprise Clients", sublabel: "Worldwide" },
              { value: "3,500+", label: "Engineers", sublabel: "Across 5 continents" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.015, boxShadow: "0 18px 45px rgba(0,0,0,0.12)" }}
                className="relative overflow-hidden group min-h-[140px] rounded-xl border border-border bg-accent/5 shadow-sm transition-transform duration-200 hover:ring-2 hover:ring-accent/30"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 rounded-[14px] bg-[conic-gradient(from_0deg,rgba(59,130,246,0.55),rgba(79,70,229,0.5),rgba(59,130,246,0.55))] animate-[spin_8s_linear_infinite]" />
                  <div className="absolute inset-[1px] rounded-[12px] bg-gradient-to-br from-white/88 via-white/86 to-slate-200/75" />
                </div>
                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] translate-x-[-140%] group-hover:translate-x-[140%] transition-transform duration-700 ease-out" />
                <div className="relative z-20 p-6 md:p-7">
                  <div className="text-2xl font-bold text-accent mb-1">{m.value}</div>
                  <div className="text-sm font-semibold text-foreground">{m.label}</div>
                  <div className="text-xs text-muted-foreground">{m.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Core Values - Grid with different card style */}
    <section className="section-padding bg-white">
      <div className="enterprise-container">
        <SectionHeader 
          tag="Core Values" 
          title="Principles That Define Us" 
          titleSize="large"
          subtitle="The unwavering values that guide every decision, every system we build, and every relationship we nurture across our global organization." 
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-2xl border border-border/80 shadow-xl mb-10 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(115deg, rgba(6, 24, 44, 0.75), rgba(6, 24, 44, 0.4)), url(${aboutTeam})`,
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="relative p-8 md:p-10 text-white max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Values in Action</p>
            <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">Where strategy, security, and sustainability meet disciplined delivery</h3>
            <p className="text-white/80 leading-relaxed">A glimpse into the teams that live these principles daily—architecting resilient systems, protecting trust, and driving innovation for enterprises in 50+ countries.</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <motion.div 
              key={v.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.08 }} 
              className="relative overflow-hidden group p-6 rounded-lg border-2 border-border bg-card bg-center bg-cover transition-all duration-300 hover:border-accent/50"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.94), rgba(255,255,255,0.9)), url(${globalMap})`,
              }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 rounded-[14px] bg-[conic-gradient(from_0deg,rgba(59,130,246,0.55),rgba(79,70,229,0.5),rgba(59,130,246,0.55))] animate-[spin_8s_linear_infinite]" />
                <div className="absolute inset-[1px] rounded-[12px] bg-gradient-to-br from-white/86 via-white/84 to-slate-200/78" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] translate-x-[-140%] group-hover:translate-x-[140%] transition-transform duration-700 ease-out" />
              <div className="relative z-20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <v.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="text-lg font-bold pt-2">{v.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* AI-First Philosophy - Full-width alternating layout */}
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="enterprise-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">AI-First Philosophy</span>
          <h2 className="section-title">Intelligence at the Core of Everything We Build</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-6">
            AI isn't an add-on or afterthought at VelDurSen—it's the foundation of everything we build. From intelligent automation and predictive analytics to natural language processing, computer vision, and generative AI, we embed AI capabilities into every layer of our enterprise solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { 
              icon: Brain, 
              title: "Generative AI & LLM Integration", 
              desc: "Enterprise-grade large language models, RAG architectures, and agentic AI systems for intelligent automation"
            },
            { 
              icon: Sparkles, 
              title: "Predictive Analytics & ML Ops", 
              desc: "Production-ready machine learning pipelines with automated retraining, monitoring, and drift detection"
            },
            { 
              icon: Shield, 
              title: "Responsible & Ethical AI Governance", 
              desc: "Bias detection, explainability frameworks, and compliance with global AI ethics standards"
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden group p-8 rounded-xl bg-white border border-border shadow-md transition-transform duration-200"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,rgba(59,130,246,0.55),rgba(79,70,229,0.5),rgba(59,130,246,0.55))] animate-[spin_8s_linear_infinite]" />
                <div className="absolute inset-[1px] rounded-[18px] bg-gradient-to-br from-white/86 via-white/84 to-slate-200/78" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] translate-x-[-140%] group-hover:translate-x-[140%] transition-transform duration-700 ease-out" />
              <div className="relative z-20">
                <item.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl border-2 border-accent/20">
          <p className="text-muted-foreground leading-relaxed">
            Our AI-first philosophy ensures that our clients don't just adopt technology—they lead with it. We help enterprises harness AI to unlock new revenue streams, optimize operations, enhance customer experiences, and make data-driven decisions with confidence across global markets.
          </p>
        </div>
      </div>
    </section>

    {/* Enterprise-Grade Security Culture */}
    <section className="section-padding bg-white">
      <div className="enterprise-container">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Security Culture</span>
          <h2 className="section-title mb-6">Enterprise-Grade Security by Design</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
            <p>
              Security isn't a feature we add—it's embedded in our organizational DNA. From the first line of code to production deployment, every system we build incorporates zero-trust principles, defense-in-depth strategies, and compliance with the most stringent global regulatory frameworks including GDPR, HIPAA, PCI-DSS, SOC 2, and ISO 27001.
            </p>
            <p>
              Our security-first culture means every engineer is trained in secure coding practices, threat modeling, and vulnerability management. We conduct regular penetration testing, security audits, and compliance assessments to ensure our systems meet or exceed industry standards across all jurisdictions where we operate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Lock, title: "Zero-Trust Architecture", items: ["Identity-based access control", "Micro-segmentation", "Least privilege enforcement", "Continuous verification"] },
              { icon: Shield, title: "Compliance & Governance", items: ["GDPR, HIPAA, PCI-DSS ready", "SOC 2 Type II certified", "ISO 27001 compliant", "Regular third-party audits"] },
            ].map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden group p-6 rounded-lg bg-section border border-border"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 rounded-[14px] bg-[conic-gradient(from_0deg,rgba(59,130,246,0.55),rgba(79,70,229,0.5),rgba(59,130,246,0.55))] animate-[spin_8s_linear_infinite]" />
                  <div className="absolute inset-[1px] rounded-[12px] bg-gradient-to-br from-white/88 via-white/86 to-slate-200/75" />
                </div>
                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] translate-x-[-140%] group-hover:translate-x-[140%] transition-transform duration-700 ease-out" />
                <div className="relative z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-8 h-8 text-primary" />
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Sustainability Commitment - Different from Home */}
    <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="enterprise-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-green-600 mb-4">Sustainability Commitment</span>
            <h2 className="section-title">Technology with Environmental Responsibility</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-3xl mx-auto">
              We're committed to building technology that respects our planet and future generations. Our green computing initiatives, carbon-aware cloud deployments, and ethical AI frameworks ensure sustainable innovation across all our global operations and client engagements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Green Cloud Computing",
                points: [
                  "Carbon-aware workload scheduling based on renewable energy availability",
                  "Energy-efficient infrastructure and optimized resource utilization",
                  "Partnership with cloud providers using renewable energy",
                  "Continuous monitoring and reduction of carbon footprint"
                ]
              },
              {
                title: "Sustainable Software Engineering",
                points: [
                  "Code optimization for reduced computational requirements",
                  "Efficient database queries and caching strategies",
                  "Minimizing data transfer and network overhead",
                  "Implementing circular economy principles in system design"
                ]
              },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden group bg-white p-8 rounded-xl shadow-lg border-2 border-green-200"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,rgba(74,222,128,0.52),rgba(34,197,94,0.48),rgba(74,222,128,0.52))] animate-[spin_8s_linear_infinite]" />
                  <div className="absolute inset-[1px] rounded-[18px] bg-gradient-to-br from-white/88 via-white/86 to-emerald-100/80" />
                </div>
                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] translate-x-[-140%] group-hover:translate-x-[140%] transition-transform duration-700 ease-out" />
                <div className="relative z-20">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Leaf className="w-6 h-6 text-green-600" />
                    {cat.title}
                  </h3>
                  <ul className="space-y-3">
                    {cat.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CSR & Education Initiatives - Numbered blocks style */}
    <section className="section-padding bg-white">
      <div className="enterprise-container">
        <SectionHeader 
          tag="CSR & Education" 
          title="Giving Back, Building Forward" 
          subtitle="Our commitment extends beyond technology to education, community empowerment, and creating positive social impact across the regions we serve." 
        />
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
          {[
            { 
              icon: GraduationCap, 
              number: "01",
              title: "Student Technology Workshops", 
              desc: "We conduct free workshops on AI, cloud computing, cybersecurity, and data science for university students across 30+ countries. Our educational programs have reached over 15,000 students, providing hands-on exposure to enterprise-grade technology and industry best practices.",
              details: ["AI & Machine Learning fundamentals", "Cloud architectures & DevOps practices", "Cybersecurity awareness & ethical hacking", "Data engineering & analytics pipelines"]
            },
            { 
              icon: Users, 
              number: "02",
              title: "Community Tech Programs", 
              desc: "Digital literacy programs, open-source contributions, and mentorship initiatives focused on underrepresented communities in technology. We're building pathways for diverse talent to enter and thrive in the global technology industry.",
              details: ["Coding bootcamps for underserved communities", "Open-source contribution mentorship", "Women in tech leadership programs", "Scholarship programs for STEM education"]
            },
            { 
              icon: Heart, 
              number: "03",
              title: "Pro Bono Enterprise Consulting", 
              desc: "We provide pro bono enterprise technology consulting to non-profit organizations working in healthcare, education, environmental conservation, and social justice. Helping mission-driven organizations leverage technology for greater impact.",
              details: ["Healthcare systems for underserved regions", "Educational platforms for remote learning", "Environmental monitoring systems", "Disaster response coordination tools"]
            },
            { 
              icon: BookOpen, 
              number: "04",
              title: "Knowledge Sharing & Thought Leadership", 
              desc: "Publishing research papers, technical blogs, and open-source tools that advance the global technology community. Contributing to industry standards, best practices, and emerging technology frameworks.",
              details: ["Research publications on AI ethics", "Open-source enterprise frameworks", "Industry conference speaking engagements", "Technical blog series and tutorials"]
            },
          ].map((item, i) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }} 
              className="relative"
            >
              <div className="absolute -left-4 -top-4 text-6xl font-bold text-accent/10">{item.number}</div>
                <div className="relative overflow-hidden group p-8 rounded-xl border-2 border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 bg-card">
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,rgba(59,130,246,0.55),rgba(79,70,229,0.5),rgba(59,130,246,0.55))] animate-[spin_8s_linear_infinite]" />
                    <div className="absolute inset-[1px] rounded-[18px] bg-gradient-to-br from-white/86 via-white/84 to-slate-200/78" />
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] translate-x-[-140%] group-hover:translate-x-[140%] transition-transform duration-700 ease-out" />
                  <div className="relative z-20">
                    <item.icon className="text-accent mb-4" size={32} />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                    <div className="space-y-2 mt-6">
                      {item.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle size={14} className="text-accent mt-1 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/internships" className="btn-enterprise">
            Learn About Our Internship Program
          </Link>
        </div>
      </div>
    </section>

      <BlogPreview />
    </PageLayout>
  );
};

export default About;
