import { motion } from "framer-motion";
import { Rocket, Target, Globe2, Brain, Cloud, Shield, Leaf, TrendingUp, Users, Building2, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <PageLayout>
      <PageHero
        tag="Our History"
        title="From Vision to Global Impact"
        subtitle="The story of VelDurSen: a journey of innovation, growth, and digital transformation excellence spanning over a decade of enterprise technology leadership."
      />

      {/* Company Origin */}
      <section className="section-padding bg-white">
        <div className="enterprise-container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Rocket className="w-16 h-16 text-accent" />
                </div>
              </div>
              <div className="md:col-span-2">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                  The Beginning
                </span>
                <h2 className="section-title">Company Origin & Founding Vision</h2>
              </div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="font-bold text-foreground">VelDurSen was founded</span> with a clear and unwavering vision: to build secure, scalable, AI-first enterprise systems that solve real-world business challenges at global scale. From day one, we set out not to be another software vendor, but to become a trusted long-term technology partner for enterprises navigating digital transformation.
              </p>
              <p>
                Our founders recognized early that the future of enterprise technology would be defined by three pillars: <span className="font-semibold text-foreground">artificial intelligence</span>, <span className="font-semibold text-foreground">cloud-native architectures</span>, and <span className="font-semibold text-foreground">security-by-design</span>. This insight shaped our DNA and continues to guide every system we build today.
              </p>
              <p>
                The founding principle was simple but powerful: <span className="font-bold text-foreground">enterprise-first mindset</span>. We committed to building systems designed for decades of operation, not short-term projects. Every architecture decision, every technology choice, every line of code written would prioritize longevity, scalability, and the ability to evolve with changing business needs.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "Mission-Driven", desc: "Solve real enterprise challenges, not build technology for its own sake" },
                { icon: Users, title: "Long-Term Focus", desc: "Build partners systems that last decades, not months" },
                { icon: Shield, title: "Security Foundation", desc: "Security as a core principle from the first line of code" }
              ].map((principle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-section border border-border text-center"
                >
                  <principle.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h4 className="font-bold mb-2">{principle.title}</h4>
                  <p className="text-sm text-muted-foreground">{principle.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Early Foundation Phase */}
      <section className="section-padding bg-section">
        <div className="enterprise-container">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              2014-2016
            </span>
            <h2 className="section-title mb-8">Foundation Phase: Building the Core</h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                The early years were focused on establishing our core competencies and proving our approach in the enterprise market. We started with <span className="font-semibold text-foreground">enterprise software development and cloud systems</span>, working with mid-sized organizations looking to modernize their technology infrastructure.
              </p>
              <p>
                From the beginning, we adopted <span className="font-semibold text-foreground">data-driven architectures</span> and invested heavily in understanding how to build systems that could scale from hundreds to millions of users. Every project was an opportunity to refine our methodologies, strengthen our engineering practices, and build the foundation for what would become our global delivery model.
              </p>
              <p>
                <span className="font-bold text-foreground">Security-by-design principles</span> were non-negotiable from day one. While many companies treated security as an afterthought, we embedded it into every layer of our systems—from authentication and authorization to data encryption and network security. This early commitment would later become one of our key differentiators.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-border">
              <h4 className="text-xl font-bold mb-6">Early Foundation Achievements</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "First cloud-native enterprise platform deployed",
                  "Security-first development practices established",
                  "Data-driven architecture patterns documented",
                  "Initial engineering team across 3 cities",
                  "Agile delivery methodologies refined",
                  "First long-term enterprise partnerships formed"
                ].map((achievement) => (
                  <div key={achievement} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion into AI, Cloud & Cybersecurity */}
      <section className="section-padding bg-white">
        <div className="enterprise-container">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              2017-2019
            </span>
            <h2 className="section-title mb-8">Evolution: AI, Cloud & Cybersecurity Leadership</h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                This period marked <span className="font-bold text-foreground">VelDurSen's transformation from a software development company to a comprehensive digital transformation partner</span>. We made strategic investments in three critical areas that would define the future of enterprise technology:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Brain,
                  title: "Enterprise AI Adoption",
                  points: [
                    "Built first ML platforms for predictive analytics",
                    "Implemented NLP systems for document processing",
                    "Deployed computer vision for quality control",
                    "Established AI ethics and governance frameworks"
                  ]
                },
                {
                  icon: Cloud,
                  title: "Cloud-Native Engineering",
                  points: [
                    "Adopted Kubernetes for container orchestration",
                    "Built multi-cloud deployment capabilities",
                    "Implemented CI/CD pipelines at scale",
                    "Achieved AWS and Azure certifications"
                  ]
                },
                {
                  icon: Shield,
                  title: "Cybersecurity Core Pillar",
                  points: [
                    "Zero-trust architecture implementations",
                    "SOC 2 Type II certification achieved",
                    "Enterprise IAM platforms deployed",
                    "24/7 security operations center established"
                  ]
                }
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-section border-2 border-border"
                >
                  <pillar.icon className="w-12 h-12 text-accent mb-4" />
                  <h4 className="text-xl font-bold mb-4">{pillar.title}</h4>
                  <ul className="space-y-2">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                This evolution meant <span className="font-semibold text-foreground">shifting from software delivery to complete digital transformation</span>. Our clients were no longer just asking us to build applications—they were asking us to reimagine their entire technology landscape, migrate to the cloud, implement AI across operations, and secure their digital assets against growing cyber threats.
              </p>
              <p>
                We were ready. Our architecture-first approach, combined with deep expertise in emerging technologies, positioned us perfectly to help enterprises navigate these complex transformations while maintaining security, compliance, and operational continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Growth Journey */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-slate-50">
        <div className="enterprise-container">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              2020-2022
            </span>
            <h2 className="section-title mb-8">Global Expansion & Worldwide Delivery</h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                As our client base grew more global, we recognized the need for <span className="font-bold text-foreground">true worldwide delivery capabilities</span>. This wasn't just about having offices in different countries—it was about building a distributed engineering organization that could deliver seamlessly across time zones, cultures, and regulatory environments.
              </p>
              <p>
                We established <span className="font-semibold text-foreground">regional delivery centers across multiple continents</span>: North America, Europe, Asia-Pacific, and the Middle East. This wasn't expansion for expansion's sake—each location was chosen for its talent pool, proximity to major client hubs, and ability to support our follow-the-sun delivery model.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl border-2 border-border">
                <Globe2 className="w-12 h-12 text-accent mb-4" />
                <h4 className="text-xl font-bold mb-4">Global Footprint Established</h4>
                <ul className="space-y-3">
                  {[
                    "Delivery centers across 5 continents",
                    "Operations in 50+ countries",
                    "Engineering teams in 20+ cities",
                    "Support for 30+ languages and time zones",
                    "Local compliance expertise in all major markets"
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm">
                      <ArrowRight size={16} className="text-accent mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-border">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h4 className="text-xl font-bold mb-4">Follow-the-Sun Delivery Model</h4>
                <ul className="space-y-3">
                  {[
                    "24/7 continuous development cycles",
                    "Faster time-to-market for global clients",
                    "Round-the-clock support coverage",
                    "Cultural diversity driving innovation",
                    "Seamless handoffs between regional teams"
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm">
                      <ArrowRight size={16} className="text-accent mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                This global expansion enabled us to <span className="font-semibold text-foreground">support enterprises operating across multiple continents</span> with the local expertise they needed, while maintaining the consistent quality and security standards that defined our brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Responsible Technology */}
      <section className="section-padding bg-white">
        <div className="enterprise-container">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-red-600 mb-4">
              2023-2024
            </span>
            <h2 className="section-title mb-8">Sustainability & Responsible Technology Integration</h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                As the technology industry grappled with its environmental impact, <span className="font-bold text-foreground">VelDurSen made sustainability a core value</span>, not a marketing initiative. We recognized that building technology responsibly meant considering not just performance and cost, but also environmental impact and ethical implications.
              </p>
              <p>
                We integrated <span className="font-semibold text-foreground">green computing principles</span> into every aspect of our operations—from how we write code to which cloud regions we deploy to, from our infrastructure choices to our development practices. Carbon awareness became as important as security and performance in our architectural decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: Leaf,
                  title: "Green Cloud Computing",
                  achievements: [
                    "Carbon-aware workload scheduling implemented",
                    "Preference for renewable energy-powered regions",
                    "35% reduction in cloud carbon footprint",
                    "Energy-efficient code optimization practices"
                  ]
                },
                {
                  icon: Brain,
                  title: "Ethical AI Adoption",
                  achievements: [
                    "AI ethics governance frameworks established",
                    "Bias detection and mitigation protocols",
                    "Explainable AI for enterprise decision-making",
                    "Responsible data practices across all projects"
                  ]
                }
              ].map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-red-50 to-slate-50 border-2 border-red-100"
                >
                  <area.icon className="w-12 h-12 text-red-600 mb-4" />
                  <h4 className="text-xl font-bold mb-6">{area.title}</h4>
                  <ul className="space-y-3">
                    {area.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 size={16} className="text-red-600 mt-0.5 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="font-bold text-foreground">Sustainability became a core competitive advantage</span>, not just a corporate responsibility initiative. Our clients increasingly sought partners who could help them meet their own environmental goals, and our early investments in green tech positioned us as leaders in this emerging space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Present-Day VelDurSen */}
      <section className="section-padding bg-section">
        <div className="enterprise-container">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              2025-Present
            </span>
            <h2 className="section-title mb-8">Present Day: Global Enterprise Technology Partner</h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                Today, <span className="font-bold text-foreground">VelDurSen stands as a global enterprise technology partner</span> trusted by Fortune 500 companies and high-growth organizations across 50+ countries. We power mission-critical systems that serve millions of users, process billions of transactions, and manage petabytes of data daily.
              </p>
              <p>
                Our evolution from a software development company to a comprehensive digital transformation partner reflects a decade of consistent investment in technology leadership, engineering excellence, and client success. We are:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Brain, label: "AI-Driven", desc: "Leading enterprise AI adoption across industries" },
                { icon: Shield, label: "Security-First", desc: "100% compliance record, zero breaches" },
                { icon: Leaf, label: "Sustainability-Focused", desc: "Pioneer in green tech and ethical AI" }
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-white border-2 border-accent/20 text-center"
                >
                  <pillar.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">{pillar.label}</h4>
                  <p className="text-sm text-muted-foreground">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-border">
              <h4 className="text-xl font-bold mb-6">Current Global Positioning</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "500+ global enterprise clients across 50+ countries",
                  "3,500+ engineers delivering from multiple continents",
                  "1000+ enterprise projects successfully delivered",
                  "99.9% average uptime across all systems",
                  "24/7 global support with follow-the-sun model",
                  "Zero security breaches across entire portfolio",
                  "Systems supporting 50M+ users daily",
                  "Leader in cloud-native and AI-first transformations"
                ].map((fact) => (
                  <div key={fact} className="flex items-start gap-3">
                    <TrendingUp size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm font-medium">{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-white">
        <div className="enterprise-container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                Looking Ahead
              </span>
              <h2 className="section-title">Future Roadmap: Technology Built for Decades</h2>
              <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
                Our vision extends far beyond the next quarter or year. We're building technology partnerships and systems designed to evolve over decades, adapting to changing business needs while maintaining security, performance, and sustainability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "Advanced Enterprise AI Platforms",
                  vision: "Next-generation AI systems with autonomous decision-making, multi-modal intelligence, and self-improving architectures powering enterprise operations globally."
                },
                {
                  icon: Leaf,
                  title: "Sustainable Digital Ecosystems",
                  vision: "Carbon-neutral cloud deployments, circular economy principles in system design, and technology that actively contributes to environmental restoration."
                },
                {
                  icon: Building2,
                  title: "Long-Term Global Partnerships",
                  vision: "Decades-long relationships with enterprises, evolving their technology landscapes through continuous innovation, support, and collaborative growth."
                }
              ].map((future, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-xl bg-white border-2 border-border hover:shadow-2xl transition-all duration-300"
                >
                  <future.icon className="w-14 h-14 text-accent mb-6" />
                  <h4 className="text-xl font-bold mb-4">{future.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{future.vision}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-white border-2 border-accent/20 text-center">
              <h4 className="text-2xl font-bold mb-4">Technology Built for Decades, Not Trends</h4>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                VelDurSen's commitment has always been to build systems that stand the test of time. As we look to the future, this commitment only grows stronger—pioneering technologies that will power enterprise operations for generations to come.
              </p>
              <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise inline-flex items-center">
                Join Our Journey <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <BlogPreview />
    </PageLayout>
  );
};

export default History;
