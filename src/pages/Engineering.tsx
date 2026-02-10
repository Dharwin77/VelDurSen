import { motion } from "framer-motion";
import { Layers, Shield, Zap, Settings, TrendingUp, Leaf, Server, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";

const principles = [
  {
    icon: Layers,
    title: "Architecture-First Design",
    desc: "Every system begins with architecture. We design for scalability, maintainability, and evolution from the very first line of code.",
    points: ["Domain-driven design principles", "Microservices & event-driven architecture", "API-first development approach", "Technology-agnostic design patterns"],
  },
  {
    icon: TrendingUp,
    title: "Scalability Engineering",
    desc: "Systems that grow with your business. Our horizontal scaling patterns and distributed architectures handle enterprise-grade load seamlessly.",
    points: ["Horizontal & vertical scaling strategies", "Distributed systems design", "Load balancing & auto-scaling", "Database sharding & replication"],
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    desc: "Security isn't a layer—it's woven into every component. Zero-trust principles ensure protection at every access point.",
    points: ["Zero-trust network architecture", "Micro-segmentation", "Continuous verification & monitoring", "Encrypted data at rest and in transit"],
  },
  {
    icon: Settings,
    title: "DevOps & Reliability Engineering",
    desc: "Site reliability engineering practices that ensure 99.99% uptime and rapid, safe deployments.",
    points: ["Infrastructure as Code (IaC)", "Blue-green & canary deployments", "Chaos engineering practices", "Automated incident response"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Sub-millisecond response times, optimized queries, and intelligent caching for mission-critical applications.",
    points: ["Application performance monitoring", "Query optimization & indexing", "CDN & edge computing strategies", "Memory & resource optimization"],
  },
  {
    icon: Leaf,
    title: "Sustainable Engineering",
    desc: "Building technology that respects our planet through green computing, efficient resource usage, and carbon-aware practices.",
    points: ["Carbon-aware workload scheduling", "Energy-efficient algorithms", "Green cloud resource management", "Sustainable software lifecycle"],
  },
];

const Engineering = () => (
  <PageLayout>
    <PageHero
      tag="Engineering Excellence"
      title="Where Architecture Meets Innovation"
      subtitle="Our engineering philosophy is rooted in architecture-first design, zero-trust security, and sustainable practices that deliver enterprise-grade reliability."
    />

    {/* Philosophy */}
    <section className="section-padding">
      <div className="enterprise-container">
        <SectionHeader
          tag="Our Philosophy"
          title="Engineering That Stands the Test of Scale"
          subtitle="We don't just write code—we architect systems. Every solution is designed to be scalable, secure, and sustainable from day one."
        />
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed mb-5">
            At VelDurSen, engineering excellence isn't a department—it's a culture. Our engineers are trained in architecture-first thinking, where every system is designed with scalability, security, and performance as foundational requirements, not afterthoughts.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We combine deep technical expertise with proven engineering methodologies to deliver systems that enterprises can trust with their most critical operations.
          </p>
        </div>
      </div>
    </section>

    {/* Principles Detail */}
    {principles.map((p, idx) => (
      <section key={p.title} className={`section-padding ${idx % 2 === 0 ? "section-alt" : ""}`}>
        <div className="enterprise-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={idx % 2 !== 0 ? "lg:order-2" : ""}>
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <p.icon className="text-accent" size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{p.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
              <ul className="space-y-3">
                {p.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`bg-muted rounded-lg p-10 flex items-center justify-center min-h-[260px] ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
              <p.icon className="text-accent/20" size={120} />
            </motion.div>
          </div>
        </div>
      </section>
    ))}

    <BlogPreview />
  </PageLayout>
);

export default Engineering;
