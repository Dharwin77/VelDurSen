
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { SEO } from "@/components/shared/SEO";
import { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanity";

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [blog, setBlog] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (slug) {
            const query = `*[_type == "blogPost" && slug.current == $slug][0]{
                ...,
                sections[]->
            }`;

            client.fetch(query, { slug })
                .then((data) => {
                    setBlog(data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.error("Error fetching blog post:", err);
                    setIsLoading(false);
                });
        }
    }, [slug]);

    if (isLoading) {
        return (
            <PageLayout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            </PageLayout>
        );
    }

    if (!blog) {
        return (
            <PageLayout>
                <SEO title="Blog Post Not Found | VelDurSen" description="The requested blog post could not be found." />
                <div className="section-padding">
                    <div className="enterprise-container text-center">
                        <h1 className="heading-1 mb-4">Blog Post Not Found</h1>
                        <button
                            onClick={() => navigate("/blog")}
                            className="btn-primary"
                        >
                            Back to Blog
                        </button>
                    </div>
                </div>
            </PageLayout>
        );
    }

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.excerpt,
        "image": blog.coverImage ? urlFor(blog.coverImage).url() : "",
        "author": {
            "@type": "Person",
            "name": blog.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "VelDurSen Technologies",
            "logo": {
                "@type": "ImageObject",
                "url": "https://veldursen.com/logo.png"
            }
        },
        "datePublished": blog.publishedAt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://veldursen.com/blog/${blog.slug?.current}`
        }
    };

    // Helper to split title for styling
    const splitTitle = (title: string = "") => {
        const words = title.split(" ");
        if (words.length <= 1) return { main: title, accent: "" };
        return {
            main: words.slice(0, -1).join(" "),
            accent: words.slice(-1).join("")
        };
    };

    const headerTitle = splitTitle(blog.title);

    return (
        <PageLayout>
            <SEO
                title={`${blog.title} | VelDurSen Blog`}
                description={blog.excerpt}
                ogType="article"
                ogImage={blog.coverImage ? urlFor(blog.coverImage).url() : ""}
                schemas={[blogSchema]}
            />
            {/* Header Section */}
            <section className="bg-gradient-to-br from-red-50 to-white py-16 border-b border-border">
                <div className="enterprise-container">
                    <button
                        onClick={() => navigate("/blog")}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </button>

                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                            {blog.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 leading-none tracking-tighter">
                            {headerTitle.main} <span className="text-red-600">{headerTitle.accent.replace(/\.$/, "")}.</span>
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <User size={16} />
                                <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>{blog.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="enterprise-container -mt-8 mb-16">
                <div className="max-w-5xl mx-auto">
                    <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-100 via-slate-50 to-white">
                        {blog.coverImage && (
                            <img
                                src={urlFor(blog.coverImage).url()}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                }}
                            />
                        )}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="section-padding -mt-24">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction */}
                    {blog.introduction && (
                        <div className="mb-16">
                            <div className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg">
                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                                    {blog.introduction}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Dynamic Sections */}
                    {blog.sections?.map((section: any, index: number) => {
                        const sectionTitle = splitTitle(section.heading);

                        // 1. Normal Section
                        if (section._type === "blogNormalSection") {
                            return (
                                <motion.div
                                    key={section._id || index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="mb-12"
                                >
                                    {section.heading && (
                                        <h2 className="text-3xl font-black mb-6 text-slate-900 tracking-tighter">
                                            {sectionTitle.main} <span className="text-red-600">{sectionTitle.accent.replace(/\.$/, "")}.</span>
                                        </h2>
                                    )}

                                    {section.description && (
                                        <p className="text-base leading-relaxed text-muted-foreground mb-4 whitespace-pre-line">
                                            {section.description}
                                        </p>
                                    )}

                                    {section.bulletPoints && (
                                        <ul className="mt-6 space-y-3">
                                            {section.bulletPoints.map((bullet: string, bIndex: number) => (
                                                <li key={bIndex} className="flex items-start gap-3">
                                                    <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-muted-foreground">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                            );
                        }

                        // 2. Real World Applications
                        if (section._type === "blogRealWorldApplications") {
                            return (
                                <motion.div
                                    key={section._id || index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="mb-16"
                                >
                                    <h2 className="text-3xl font-black mb-8 text-slate-900 tracking-tighter">
                                        {section.heading || "Real-World Applications"}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {section.applications?.map((app: any, idx: number) => (
                                            <div
                                                key={idx}
                                                className="card-enterprise p-6 hover:shadow-lg transition-all hover:border-primary/30"
                                            >
                                                <h3 className="text-xl font-bold mb-3 text-foreground">
                                                    {app.industry || app.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {app.application || app.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        }

                        // 3. Challenges
                        if (section._type === "blogChallenges") {
                            return (
                                <motion.div
                                    key={section._id || index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="mb-16"
                                >
                                    <h2 className="text-3xl font-black mb-8 text-slate-900 tracking-tighter">
                                        {section.heading || "Challenges & Mitigation"}
                                    </h2>
                                    <div className="space-y-6">
                                        {section.challengesList?.map((item: any, idx: number) => (
                                            <div
                                                key={idx}
                                                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6"
                                            >
                                                <div className="flex items-start gap-3 mb-4">
                                                    <AlertTriangle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                                                    <h3 className="text-xl font-bold text-foreground">
                                                        {item.title || item.challenge}
                                                    </h3>
                                                </div>
                                                <p className="pl-8 text-muted-foreground leading-relaxed">
                                                    <span className="font-semibold text-foreground">{item.mitigationTitle || "Mitigation"}: </span>
                                                    {item.mitigationContent || item.mitigation}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        }

                        // 4. Conclusion
                        if (section._type === "blogConclusion") {
                            return (
                                <motion.div
                                    key={section._id || index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="mb-16"
                                >
                                    <h2 className="text-3xl font-black mb-6 text-slate-900 tracking-tighter">
                                        {sectionTitle.main} <span className="text-red-600">{sectionTitle.accent.replace(/\.$/, "")}.</span>
                                    </h2>
                                    <div className="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                                        {/* Simplified block content rendering or just text if it was text */}
                                        {/* If the schema used 'block', we'd need PortableText, but simply dumping JSON stringify if COMPLEX, 
                                            but since schema was array of blocks, we might need a serializer. 
                                            For now, assuming it might be simpler text or we render basics. 
                                            Actually schema said 'array of block'. 
                                            Let's just handle it gracefully or assuming user might switch to text for simplicity if blocks are too complex for now.
                                            Wait, schema said 'block'. Implementing full PortableText is best, but for now let's see if we can just render strict text if possible
                                            or just a placeholder. 
                                            Actually, I should have checked if I have a PortableText component. 
                                            Let's standardise on simple text rendering for now if possible or just JSON.stringify for debug, 
                                            OR better: just map children.text if it's standard block.
                                         */}
                                        {/* Quick Block Render */}
                                        {section.content?.map((block: any, i: number) => (
                                            <p key={i} className="mb-4">{block.children?.map((c: any) => c.text).join('')}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        }

                        return null;
                    })}

                    {/* Key Takeaways */}
                    {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="mb-16"
                        >
                            <div className="bg-gradient-to-br from-red-50 via-slate-50 to-white border border-red-100 rounded-xl p-8">
                                <h2 className="text-3xl font-black mb-6 text-slate-900 tracking-tighter">
                                    Key <span className="text-red-600">Takeaways.</span>
                                </h2>
                                <ul className="space-y-4">
                                    {blog.keyTakeaways.map((takeaway: string, index: number) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <span className="text-foreground leading-relaxed pt-1">
                                                {takeaway}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}

                    {/* Back to Blog CTA */}
                    <div className="text-center pt-8 border-t border-border">
                        <button
                            onClick={() => navigate("/blog")}
                            className="btn-primary"
                        >
                            ← Back to All Insights
                        </button>
                    </div>
                </div>
            </article>
        </PageLayout>
    );
};

export default BlogDetail;
