import { motion } from "framer-motion";
import { Brain, Cloud, Settings, Shield, Database, Cpu, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";

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
    <PageHero
      tag="Technologies"
      title="Enterprise Technology Stack"
      subtitle="We leverage best-in-class technologies across AI, cloud, DevOps, data, and security to deliver enterprise-grade solutions at global scale."
    />

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
