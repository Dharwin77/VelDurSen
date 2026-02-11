import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { allBlogPosts as blogPosts, blogCategories } from "@/data";
import blogHeroVideo from "@/assets/Enterprise_IT_Blog_Background_Video_Generation.mp4";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <PageLayout>
      {/* Blog Hero with Video Background */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-white min-h-[70vh] flex items-center overflow-hidden border-b border-border">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={blogHeroVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/50 to-slate-800/60"></div>

        {/* Content Overlay */}
        <div className="enterprise-container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-semibold rounded-full mb-6 backdrop-blur-sm">
              Blog
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              VelDurSen Insights
            </h1>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
              Enterprise technology, AI, cloud, security, and sustainability insights from our global engineering teams.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="enterprise-container">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md hover:shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleCardClick(post.slug)}
                className="bg-white border border-border rounded-xl group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Blog Image - Full Width, No Padding */}
                <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback gradient if image doesn't load
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-bold text-primary bg-primary/10 uppercase tracking-wider rounded-full mb-3 w-fit">
                    {post.category}
                  </span>

                  {/* Blog Title - Large and Distinctive */}
                  <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-primary transition-colors leading-snug line-clamp-2 min-h-[3.5rem]">
                    {post.title}
                  </h3>

                  {/* Blog Excerpt - Large and Unique Color */}
                  <p className="text-lg text-indigo-700 leading-relaxed mb-4 line-clamp-3 flex-grow font-serif">
                    {post.excerpt}
                  </p>

                  {/* Metadata Footer */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border mt-auto">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary mt-3 group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-muted-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
