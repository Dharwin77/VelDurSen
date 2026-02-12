import { motion } from "framer-motion";
import { Brain, Cloud, Settings, Shield, Database, Cpu, CheckCircle, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";
import technologyVideo from "@/assets/technology.mp4";

const techCategories = [
  {
    icon: Brain,
    title: "AI & Machine Learning Stack",
    desc: "Enterprise-grade AI and ML technologies for intelligent automation and decision-making.",
    techs: ["TensorFlow & PyTorch", "OpenAI & LangChain", "Hugging Face Transformers", "MLflow & Kubeflow", "ONNX Runtime", "Apache Spark MLlib"],
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    desc: "Multi-cloud expertise across all major cloud providers for maximum flexibility and resilience.",
    techs: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "Hybrid & Private Cloud", "Cloud Foundry", "Serverless Architectures"],
  },
  {
    icon: Settings,
    title: "DevOps & Automation Tools",
    desc: "Modern DevOps toolchains for continuous integration, delivery, and infrastructure automation.",
    techs: ["Kubernetes & Docker", "Terraform & Pulumi", "Jenkins & GitHub Actions", "ArgoCD & Flux", "Ansible & Chef", "Prometheus & Grafana"],
  },
  {
    icon: Database,
    title: "Data Engineering Tools",
    desc: "Scalable data engineering platforms for ingestion, processing, and real-time analytics.",
    techs: ["Apache Kafka & Flink", "Apache Spark & Hadoop", "Snowflake & Databricks", "Apache Airflow", "dbt & Fivetran", "Elasticsearch & OpenSearch"],
  },
  {
    icon: Shield,
    title: "Security Technologies",
    desc: "Comprehensive security tooling for enterprise protection, compliance, and governance.",
    techs: ["CrowdStrike & SentinelOne", "HashiCorp Vault", "Okta & Auth0", "SIEM (Splunk, QRadar)", "Snyk & Aqua Security", "PaloAlto & Fortinet"],
  },
];

const Technologies = () => (
  <PageLayout>
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-[10s]"
      >
        <source src={technologyVideo} type="video/mp4" />
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
            Technologies
          </span>
          <h1 className="text-[4rem] md:text-[6.5rem] font-bold text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            Enterprise <br />
            <span className="text-red-600">Innovation.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl leading-relaxed drop-shadow-md">
            We leverage best-in-class technologies across AI, cloud, DevOps, data, and security to deliver enterprise-grade solutions at global scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise py-5 px-12 text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-2xl shadow-red-600/20">
              View Stack
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

    {/* Overview */}
    <section className="section-padding">
      <div className="enterprise-container">
        <SectionHeader
          tag="Technology Overview"
          title="Built on Industry-Leading Technologies"
          subtitle="Our engineering teams are certified and experienced across the most trusted technology platforms in the enterprise ecosystem."
        />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {techCategories.map((t, i) => (
            <motion.div key={t.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-enterprise text-center py-8">
              <t.icon className="text-accent mx-auto mb-3" size={28} />
              <span className="text-sm font-semibold">{t.title.split(" ").slice(0, 2).join(" ")}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Detailed */}
    {techCategories.map((cat, idx) => (
      <section key={cat.title} className={`section-padding ${idx % 2 === 0 ? "section-alt" : ""}`}>
        <div className="enterprise-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={idx % 2 !== 0 ? "lg:order-2" : ""}>
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <cat.icon className="text-accent" size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{cat.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{cat.desc}</p>
              <div className="grid grid-cols-2 gap-3">
                {cat.techs.map((tech) => (
                  <div key={tech} className="flex items-center gap-2 bg-muted rounded-md px-3 py-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`bg-muted rounded-lg p-10 flex items-center justify-center min-h-[260px] ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
              <cat.icon className="text-accent/20" size={120} />
            </motion.div>
          </div>
        </div>
      </section>
    ))}

    <BlogPreview />
  </PageLayout>
);

export default Technologies;
