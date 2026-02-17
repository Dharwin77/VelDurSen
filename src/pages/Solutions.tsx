import { motion } from "framer-motion";
import { Rocket, Brain, Cloud, BarChart3, Leaf, TrendingUp, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";

const solutions = [
  {
    icon: Rocket,
    title: "Digital Transformation Solutions",
    desc: "End-to-end digital transformation strategies that modernize operations, enhance customer experiences, and unlock new revenue streams.",
    points: ["Business process automation", "Digital strategy consulting", "Change management & adoption", "ROI-driven transformation roadmaps"],
  },
  {
    icon: Brain,
    title: "AI-Powered Enterprises",
    desc: "Harness the power of artificial intelligence to automate decisions, personalize experiences, and predict outcomes at enterprise scale.",
    points: ["Intelligent automation platforms", "AI-powered customer insights", "Predictive maintenance systems", "Enterprise knowledge management"],
  },
  {
    icon: Cloud,
    title: "Secure Cloud Platforms",
    desc: "Design, build, and manage cloud platforms that are secure by default, compliant by design, and scalable without limits.",
    points: ["Zero-trust cloud architecture", "Multi-cloud orchestration", "Cloud cost optimization", "Disaster recovery & business continuity"],
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decision Systems",
    desc: "Transform raw data into actionable intelligence with modern data platforms and real-time analytics capabilities.",
    points: ["Enterprise data lakes & warehouses", "Real-time decision dashboards", "Advanced analytics & ML models", "Data governance & quality frameworks"],
  },
  {
    icon: Leaf,
    title: "Sustainable IT Solutions",
    desc: "Technology solutions designed with environmental responsibility at their core, reducing carbon footprint while maximizing efficiency.",
    points: ["Carbon-aware cloud deployments", "Energy-efficient infrastructure", "Sustainable software lifecycle", "ESG reporting & analytics"],
  },
];

const metrics = [
  { value: "45%", label: "Average Cost Reduction" },
  { value: "3x", label: "Faster Time to Market" },
  { value: "99.99%", label: "Platform Availability" },
  { value: "60%", label: "Process Automation Rate" },
];

const Solutions = () => (
  <PageLayout>
    <PageHero
      tag="Solutions"
      title="Business Outcomes Through Technology Excellence"
      subtitle="Proven enterprise solutions that drive measurable business outcomes. From digital transformation to sustainable IT, we deliver results."
    />

    {/* Solutions Detail */}
    {solutions.map((sol, idx) => (
      <section key={sol.title} className={`section-padding ${idx % 2 === 0 ? "" : "section-alt"}`}>
        <div className="enterprise-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={idx % 2 !== 0 ? "lg:order-2" : ""}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <sol.icon className="text-accent" size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{sol.title}</h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">{sol.desc}</p>
              <ul className="space-y-3">
                {sol.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`bg-muted rounded-lg p-10 flex items-center justify-center min-h-[280px] ${idx % 2 !== 0 ? "lg:order-1" : ""}`}
            >
              <sol.icon className="text-accent/20" size={120} />
            </motion.div>
          </div>
        </div>
      </section>
    ))}

    {/* Success Metrics */}
    <section className="section-padding bg-primary">
      <div className="enterprise-container">
        <SectionHeader tag="Results" title="Enterprise Success Metrics" subtitle="Measurable outcomes delivered across our enterprise engagements." color="green" light />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{m.value}</div>
              <div className="text-sm text-primary-foreground/60 font-medium uppercase tracking-wider">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <BlogPreview />
  </PageLayout>
);

export default Solutions;
