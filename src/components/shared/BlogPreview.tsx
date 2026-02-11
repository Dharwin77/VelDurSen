import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const blogPosts = [
  {
    category: "Enterprise AI",
    title: "How Generative AI is Reshaping Enterprise Operations in 2025",
    excerpt: "Explore how leading enterprises are leveraging generative AI to automate workflows, enhance decision-making, and drive innovation at scale.",
    date: "Jan 28, 2025",
    readTime: "8 min read",
  },
  {
    category: "Cybersecurity",
    title: "Zero-Trust Architecture: A Modern Enterprise Imperative",
    excerpt: "Why zero-trust security models are becoming the gold standard for enterprise IT infrastructure and how to implement them effectively.",
    date: "Jan 15, 2025",
    readTime: "6 min read",
  },
  {
    category: "Cloud",
    title: "Multi-Cloud Strategies for Global Enterprise Scalability",
    excerpt: "A comprehensive guide to building resilient, cost-effective multi-cloud architectures that support worldwide operations.",
    date: "Jan 5, 2025",
    readTime: "10 min read",
  },
];

const BlogPreview = ({ tag = "Insights" }: { tag?: string }) => (
  <section className="section-padding">
    <div className="enterprise-container">
      <SectionHeader
        tag={tag}
        title="Latest from Our Blog"
        subtitle="Thought leadership and expert perspectives on enterprise technology trends."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card-enterprise group"
          >
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              {post.category}
            </span>
            <h3 className="text-lg font-bold mt-3 mb-3 group-hover:text-accent transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar size={12} />
                <span>{post.date}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/blog" className="btn-outline-enterprise">
          View All Articles <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  </section>
);

export default BlogPreview;
