import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";

const categories = ["All", "AI", "Cloud", "Cybersecurity", "Data Engineering", "Sustainability", "Industry Insights"];

const articles = [
  { category: "AI", title: "How Generative AI is Reshaping Enterprise Operations in 2025", excerpt: "Explore how leading enterprises are leveraging generative AI to automate workflows, enhance decision-making, and drive innovation at scale across global operations.", date: "Jan 28, 2025", readTime: "8 min" },
  { category: "Cybersecurity", title: "Zero-Trust Architecture: A Modern Enterprise Imperative", excerpt: "Why zero-trust security models are becoming the gold standard for enterprise IT infrastructure and how to implement them effectively in complex environments.", date: "Jan 15, 2025", readTime: "6 min" },
  { category: "Cloud", title: "Multi-Cloud Strategies for Global Enterprise Scalability", excerpt: "A comprehensive guide to building resilient, cost-effective multi-cloud architectures that support worldwide operations and compliance requirements.", date: "Jan 5, 2025", readTime: "10 min" },
  { category: "Data Engineering", title: "Real-Time Data Pipelines: From Batch to Stream Processing", excerpt: "Modern enterprises need real-time insights. Learn how to transition from batch processing to streaming architectures with Apache Kafka and Flink.", date: "Dec 20, 2024", readTime: "12 min" },
  { category: "Sustainability", title: "Green Computing: Reducing Enterprise Carbon Footprint Through Technology", excerpt: "How carbon-aware cloud deployments and energy-efficient algorithms are helping enterprises meet their sustainability goals without sacrificing performance.", date: "Dec 10, 2024", readTime: "7 min" },
  { category: "Industry Insights", title: "Digital Transformation in Agriculture: The AgriTech Revolution", excerpt: "Precision farming, IoT-based monitoring, and AI-powered analytics are transforming agriculture. Explore the technology driving sustainable food production.", date: "Dec 1, 2024", readTime: "9 min" },
  { category: "AI", title: "Enterprise NLP: Building Intelligent Document Processing Systems", excerpt: "Natural language processing is revolutionizing how enterprises handle documents, contracts, and communications. A deep dive into implementation strategies.", date: "Nov 20, 2024", readTime: "11 min" },
  { category: "Cloud", title: "Kubernetes at Scale: Lessons from Enterprise Deployments", excerpt: "Running Kubernetes in production at enterprise scale requires careful planning. Learn from real-world deployment patterns and operational best practices.", date: "Nov 10, 2024", readTime: "8 min" },
  { category: "Cybersecurity", title: "AI-Powered Threat Detection for Enterprise Security Operations", excerpt: "Machine learning models are transforming security operations centers. Explore how AI enhances threat detection, response times, and security posture.", date: "Nov 1, 2024", readTime: "7 min" },
];

const Blog = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <PageLayout>
      <PageHero
        tag="Blog"
        title="Insights & Thought Leadership"
        subtitle="Expert perspectives on enterprise technology, AI, cloud, cybersecurity, and digital transformation from our global engineering teams."
      />

      <section className="section-padding">
        <div className="enterprise-container">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  active === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="card-enterprise group cursor-pointer"
              >
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{article.category}</span>
                <h3 className="text-lg font-bold mt-3 mb-3 group-hover:text-accent transition-colors leading-snug">{article.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
