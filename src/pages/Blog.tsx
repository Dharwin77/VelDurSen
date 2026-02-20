import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { SEO } from "@/components/shared/SEO";
import { blogCategories } from "@/data";
import blogHeroVideo from "@/assets/Enterprise_IT_Blog_Background_Video_Generation.mp4";
import { client, urlFor } from "@/lib/sanity";

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [posts, setPosts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    // Add hero state and query
    const [heroData, setHeroData] = useState<any>(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch hero + posts
        const query = `{
            "hero": *[_type == "blogPageHero"][0]{
                badge,
                titleLine1,
                titleLine2,
                description,
                "videoUrl": backgroundVideo.asset->url
            },
            "posts": *[_type == "blogPost"] | order(publishedAt desc) {
                _id,
                title,
                "slug": slug.current,
                excerpt,
                author,
                "date": publishedAt,
                readTime,
                category,
                coverImage
            }
        }`;

        client.fetch(query)
            .then((data) => {
                setHeroData(data.hero);
                setPosts(data.posts);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching blog data:", err);
                setIsLoading(false);
            });
    }, []);

    // Filter logic
    const filteredPosts = activeCategory === "All"
        ? posts
        : posts.filter((post) => post.category === activeCategory);

    const handleCardClick = (slug: string) => {
        navigate(`/blog/${slug}`);
    };

    return (
        <PageLayout>
            <SEO
                title="Enterprise Tech Insights & Blog | VelDurSen Technologies"
                description="Latest insights on Enterprise AI, Cloud Engineering, and Digital Transformation from VelDurSen's global engineering teams."
                keywords={["Tech blog", "Enterprise AI insights", "Cloud computing trends", "Digital transformation blog"]}
                schemas={[{
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    "blogPost": posts.map((post) => ({
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "alternativeHeadline": post.excerpt,
                        "image": post.coverImage ? urlFor(post.coverImage).url() : "",
                        "author": {
                            "@type": "Organization",
                            "name": "VelDurSen Technologies"
                        },
                        "url": `https://veldursen.com/blog/${post.slug}`,
                        "datePublished": post.date
                    }))
                }]}
            />
            {/* HERO SECTION - Redesigned to match Premium Industry Style */}
            <section className="hero-section">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-[10s]"
                >
                    <source src={heroData?.videoUrl || blogHeroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10" />

                <div className="enterprise-container relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-red-500 mb-3 sm:mb-6 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            {heroData?.badge || "Our Blogs"}
                        </span>
                        <h1 className="text-[1.85rem] sm:text-[4.5rem] md:text-[6.5rem] font-bold text-white leading-[1] sm:leading-[0.95] mb-4 sm:mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                            {heroData?.titleLine1 || "VelDurSen"} <br />
                            <span className="text-red-600">{heroData?.titleLine2 || "Insights."}</span>
                        </h1>
                        <p className="text-sm sm:text-xl md:text-2xl text-slate-300 font-medium mb-5 sm:mb-12 max-w-2xl leading-relaxed drop-shadow-md">
                            {heroData?.description || "Enterprise technology, AI, cloud, security, and sustainability insights from our global engineering teams."}
                        </p>
                    </motion.div>
                </div>

                {/* Floating Abstract Element */}
                <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-0" />
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

                    {/* Loading State */}
                    {isLoading ? (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        </div>
                    ) : (
                        /* Blog Cards Grid */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPosts.map((post, index) => (
                                <motion.article
                                    key={post._id || index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    onClick={() => handleCardClick(post.slug)}
                                    className="bg-white border border-border rounded-xl group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                                >
                                    {/* Blog Image - Full Width, No Padding */}
                                    <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-red-100 via-slate-50 to-white">
                                        {post.coverImage && (
                                            <img
                                                src={urlFor(post.coverImage).url()}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                loading="lazy"
                                                onError={(e) => {
                                                    // Fallback gradient if image doesn't load
                                                    (e.target as HTMLImageElement).style.display = "none";
                                                }}
                                            />
                                        )}
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
                                        <p className="text-lg text-slate-700 leading-relaxed mb-4 line-clamp-3 flex-grow font-serif">
                                            {post.excerpt}
                                        </p>

                                        {/* Metadata Footer */}
                                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border mt-auto">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={12} />
                                                <span>{new Date(post.date).toLocaleDateString()}</span>
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
                    )}

                    {/* Empty State */}
                    {!isLoading && filteredPosts.length === 0 && (
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
        </PageLayout >
    );
};

export default Blog;
