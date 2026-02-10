import { motion } from "framer-motion";
import { CheckCircle, Eye, Target, Shield, Leaf, Heart, GraduationCap, Globe, Sparkles, Award, Users, Brain, Lock, Zap, BookOpen, Lightbulb } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";
import aboutTeam from "@/assets/about-team.jpg";
import { Link } from "react-router-dom";

const coreValues = [
  { icon: Shield, title: "Security First", desc: "Enterprise-grade security is embedded in every system, process, and decision we make from conception to deployment." },
  { icon: Target, title: "Architecture First", desc: "We design systems from the architecture up, ensuring scalability, resilience, and performance from day one." },
  { icon: Leaf, title: "Sustainability Driven", desc: "Green computing and carbon-aware cloud practices are central to our engineering philosophy worldwide." },
  { icon: Globe, title: "Global Excellence", desc: "Delivering world-class technology solutions across 50+ countries with deep local expertise and cultural awareness." },
  { icon: Users, title: "Customer Obsession", desc: "Every decision is driven by our commitment to delivering measurable value and long-term partnerships with our clients." },
  { icon: Lightbulb, title: "Innovation DNA", desc: "Continuous innovation, experimentation, and adoption of emerging technologies to stay ahead of industry curves." },
];

const About = () => (
  <PageLayout>
    <PageHero
      tag="About VelDurSen"
      title="Enterprise Technology & Digital Transformation Company"
      subtitle="We are a global technology company dedicated to building secure, scalable, and sustainable digital systems for the world's most ambitious enterprises across industries and continents."
      bgImage={aboutTeam}
    />

    {/* Company Overview - Different layout: text-heavy with side stats */}
    <section className="section-padding bg-white">
      <div className="enterprise-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Our Story</span>
            <h2 className="section-title">Building the Digital Future Since Day One</h2>
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
          </div>
          
          {/* Stats sidebar - different from Home */}
          <div className="space-y-4">
            {[
              { value: "500+", label: "Enterprise Clients", sublabel: "Worldwide" },
              { value: "3,500+", label: "Engineers", sublabel: "Across 5 continents" },
              { value: "50+", label: "Countries", sublabel: "Active operations" },
              { value: "10+", label: "Years", sublabel: "Of excellence" },
              { value: "1000+", label: "Projects", sublabel: "Successfully delivered" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-lg border-l-4 border-accent bg-accent/5"
              >
                <div className="text-3xl font-bold text-accent mb-1">{m.value}</div>
                <div className="text-sm font-semibold text-foreground">{m.label}</div>
                <div className="text-xs text-muted-foreground">{m.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision - Different style: horizontal bordered cards */}
    <section className="section-padding bg-section">
      <div className="enterprise-container">
        <div className="max-w-5xl mx-auto space-y-8">
          {[
            { 
              icon: Eye, 
              title: "Our Vision", 
              text: "To be the world's most trusted enterprise technology partner, enabling organizations across every continent to thrive in the digital age through intelligent, secure, and sustainable solutions that respect both people and planet.",
              color: "border-blue-500"
            },
            { 
              icon: Target, 
              title: "Our Mission", 
              text: "To deliver architecture-first, AI-driven technology systems that empower global enterprises to achieve operational excellence, digital resilience, regulatory compliance, and sustainable growth while maintaining the highest standards of security and ethical practices.",
              color: "border-green-500"
            },
          ].map((item, i) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15 }} 
              className={`p-8 md:p-10 rounded-xl bg-white border-l-8 ${item.color} shadow-lg`}
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <item.icon className="text-accent" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Core Values - Grid with different card style */}
    <section className="section-padding bg-white">
      <div className="enterprise-container">
        <SectionHeader 
          tag="Core Values" 
          title="Principles That Define Us" 
          subtitle="The unwavering values that guide every decision, every system we build, and every relationship we nurture across our global organization." 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <motion.div 
              key={v.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.08 }} 
              className="p-6 rounded-lg border-2 border-border hover:border-accent/50 transition-all duration-300 bg-card"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <v.icon className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-bold pt-2">{v.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
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
              className="p-8 rounded-xl bg-white border border-border shadow-md"
            >
              <item.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
                className="p-6 rounded-lg bg-section border border-border"
              >
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
                className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-200"
              >
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
              <div className="relative p-8 rounded-xl border-2 border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 bg-card">
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

export default About;
