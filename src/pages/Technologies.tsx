import { motion } from "framer-motion";
import { Brain, Cloud, Settings, Shield, Database, Code2, Server, Smartphone, Globe, Layers, Cpu, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";

const techCategories = [
  {
    slug: "ai-machine-learning",
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Cutting-edge artificial intelligence and machine learning solutions for intelligent automation.",
    techs: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "MLflow", "Kubeflow", "ONNX Runtime"],
  },
  {
    slug: "cloud-platforms",
    icon: Cloud,
    title: "Cloud Platforms",
    desc: "Multi-cloud infrastructure expertise delivering scalable, secure, and reliable cloud solutions.",
    techs: ["AWS", "Microsoft Azure", "Google Cloud", "Digital Ocean", "Cloud Foundry", "Serverless"],
  },
  {
    slug: "devops-automation",
    icon: Settings,
    title: "DevOps & Automation",
    desc: "Modern DevOps practices enabling continuous integration, delivery, and infrastructure automation.",
    techs: ["Kubernetes", "Docker", "Terraform", "Jenkins", "GitHub Actions", "ArgoCD", "Ansible", "Prometheus"],
  },
  {
    slug: "data-engineering",
    icon: Database,
    title: "Data Engineering",
    desc: "Robust data platforms for real-time processing, analytics, and business intelligence at scale.",
    techs: ["Apache Kafka", "Apache Spark", "Hadoop", "Snowflake", "Databricks", "Airflow", "Elasticsearch"],
  },
  {
    slug: "security-compliance",
    icon: Shield,
    title: "Security & Compliance",
    desc: "Enterprise-grade security solutions ensuring data protection, compliance, and risk management.",
    techs: ["CrowdStrike", "Vault", "Okta", "Auth0", "Splunk", "Snyk", "Aqua Security", "Fortinet"],
  },
  {
    slug: "development-frameworks",
    icon: Code2,
    title: "Development Frameworks",
    desc: "Modern development frameworks for building scalable web and mobile applications.",
    techs: ["React", "Angular", "Vue.js", "Node.js", "Next.js", "Django", "Spring Boot", ".NET Core"],
  },
  {
    slug: "mobile-development",
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Native and cross-platform mobile solutions delivering exceptional user experiences.",
    techs: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Xamarin", "Ionic"],
  },
  {
    slug: "backend-technologies",
    icon: Server,
    title: "Backend Technologies",
    desc: "High-performance backend systems built with industry-leading languages and frameworks.",
    techs: ["Java", "Python", "Go", "C#", "Node.js", "PHP", "Ruby", "Rust"],
  },
  {
    slug: "api-integration",
    icon: Globe,
    title: "API & Integration",
    desc: "Seamless API development and system integration for connected enterprise ecosystems.",
    techs: ["REST API", "GraphQL", "gRPC", "WebSockets", "Apache Camel", "MuleSoft", "Kong", "Apigee"],
  },
  {
    slug: "microservices",
    icon: Layers,
    title: "Microservices",
    desc: "Scalable microservices architecture enabling flexible, maintainable enterprise systems.",
    techs: ["Service Mesh", "Istio", "Consul", "Spring Cloud", "Event Driven", "CQRS", "Saga Pattern"],
  },
  {
    slug: "iot-edge-computing",
    icon: Cpu,
    title: "IoT & Edge Computing",
    desc: "Internet of Things solutions with edge computing capabilities for real-time data processing.",
    techs: ["Azure IoT", "AWS IoT", "MQTT", "Edge Computing", "Arduino", "Raspberry Pi", "LoRaWAN"],
  },
  {
    slug: "performance-monitoring",
    icon: Zap,
    title: "Performance & Monitoring",
    desc: "Advanced monitoring, observability, and performance optimization tools for mission-critical systems.",
    techs: ["Grafana", "Prometheus", "Datadog", "New Relic", "ELK Stack", "Jaeger", "AppDynamics"],
  },
];

const Technologies = () => (
  <PageLayout>
    <PageHero
      title="Enterprise Technology Stack"
      subtitle="We leverage industry-leading technologies across AI, cloud, DevOps, data, and security to deliver world-class solutions that drive digital transformation."
      centered
    />

    {/* Main Technologies Grid */}
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader
          tag="Our Technology Expertise"
          title="Built on Industry-Leading Technologies"
          subtitle="Our engineering teams are certified and experienced across the most trusted technology platforms, enabling us to deliver robust, scalable, and innovative solutions."
        />
        
        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-xl overflow-hidden border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 hover:border-slate-300">
                {/* Image/Visual Header */}
                <div className="relative h-48 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full"></div>
                  </div>
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <category.icon className="text-white" size={40} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">
                    Technology Stack
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors line-clamp-2">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {category.desc}
                  </p>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.techs.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {category.techs.length > 4 && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                        +{category.techs.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <span>{category.techs.length} Tools</span>
                      </div>
                    </div>
                    <Link
                      to={`/technologies/${category.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors"
                    >
                      Explore
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-20"
        >
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">100+</div>
                <div className="text-slate-300 text-sm lg:text-base">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
                <div className="text-slate-300 text-sm lg:text-base">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
                <div className="text-slate-300 text-sm lg:text-base">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
                <div className="text-slate-300 text-sm lg:text-base">Support</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 text-lg mb-6">
            Need help choosing the right technology stack for your project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20 hover:-translate-y-0.5"
          >
            Get Expert Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>

    <BlogPreview />
  </PageLayout>
);

export default Technologies;
