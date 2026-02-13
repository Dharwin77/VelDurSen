import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { allBlogPosts as blogPosts } from "@/data";
import { useEffect } from "react";


const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const blog = blogPosts.find((post) => post.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!blog) {
        return (
            <PageLayout>
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

    return (
        <PageLayout>
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
                            {blog.title.split(" ").slice(0, -1).join(" ")} <span className="text-red-600">{blog.title.split(" ").slice(-1).join("").replace(/\.$/, "")}.</span>
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <User size={16} />
                                <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>{blog.readTime} read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="enterprise-container -mt-8 mb-16">
                <div className="max-w-5xl mx-auto">
                    <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-100 via-slate-50 to-white">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                // Fallback gradient background if image fails to load
                                (e.target as HTMLImageElement).style.display = "none";
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="section-padding -mt-24">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction */}
                    <div className="mb-16">
                        <div className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg">
                            <p className="text-lg leading-relaxed text-foreground/90">
                                {blog.content.introduction}
                            </p>
                        </div>
                    </div>

                    {/* Sections - Alternating Left/Right Animations */}
                    {blog.content.sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="mb-12"
                        >
                            <h2 className="text-3xl font-black mb-6 text-slate-900 tracking-tighter">
                                {section.heading.split(" ").slice(0, -1).join(" ")} <span className="text-red-600">{section.heading.split(" ").slice(-1).join("").replace(/\.$/, "")}.</span>
                            </h2>

                            {section.content.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-base leading-relaxed text-muted-foreground mb-4">
                                    {paragraph}
                                </p>
                            ))}

                            {section.bullets && (
                                <ul className="mt-6 space-y-3">
                                    {section.bullets.map((bullet, bIndex) => (
                                        <li key={bIndex} className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}

                    {/* Real-World Applications */}
                    <motion.div
                        initial={{ opacity: 0, x: blog.content.sections.length % 2 === 0 ? 100 : -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-black mb-8 text-slate-900 tracking-tighter">
                            Real-World <span className="text-red-600">Applications.</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {blog.content.realWorldApplications.map((app, index) => (
                                <div
                                    key={index}
                                    className="card-enterprise p-6 hover:shadow-lg transition-all hover:border-primary/30"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {app.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {app.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Benefits & ROI */}
                    <motion.div
                        initial={{ opacity: 0, x: (blog.content.sections.length + 1) % 2 === 0 ? 100 : -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-br from-red-50 to-slate-50 border border-red-100 rounded-xl p-8">
                            <h2 className="text-3xl font-black mb-4 text-slate-900 tracking-tighter">
                                {blog.content.benefits.heading.split(" ").slice(0, -1).join(" ")} <span className="text-red-600">{blog.content.benefits.heading.split(" ").slice(-1).join("").replace(/\.$/, "")}.</span>
                            </h2>
                            <p className="text-base text-muted-foreground mb-6">
                                {blog.content.benefits.description}
                            </p>
                            <ul className="space-y-3">
                                {blog.content.benefits.metrics.map((metric, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground font-medium">{metric}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Challenges & Mitigation */}
                    <motion.div
                        initial={{ opacity: 0, x: (blog.content.sections.length + 2) % 2 === 0 ? 100 : -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-black mb-8 text-slate-900 tracking-tighter">
                            Challenges & Mitigation <span className="text-red-600">Strategies.</span>
                        </h2>
                        <div className="space-y-6">
                            {blog.content.challenges.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6"
                                >
                                    <div className="flex items-start gap-3 mb-4">
                                        <AlertTriangle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                                        <h3 className="text-xl font-bold text-foreground">
                                            {item.challenge}
                                        </h3>
                                    </div>
                                    <p className="pl-8 text-muted-foreground leading-relaxed">
                                        <span className="font-semibold text-foreground">Mitigation: </span>
                                        {item.mitigation}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Conclusion */}
                    <motion.div
                        initial={{ opacity: 0, x: (blog.content.sections.length + 3) % 2 === 0 ? 100 : -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-black mb-6 text-slate-900 tracking-tighter">
                            <span className="text-red-600">Conclusion.</span>
                        </h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            {blog.content.conclusion}
                        </p>
                    </motion.div>

                    {/* Key Takeaways */}
                    <motion.div
                        initial={{ opacity: 0, x: (blog.content.sections.length + 4) % 2 === 0 ? 100 : -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-br from-red-50 via-slate-50 to-white border border-red-100 rounded-xl p-8">
                            <h2 className="text-3xl font-black mb-6 text-slate-900 tracking-tighter">
                                Key <span className="text-red-600">Takeaways.</span>
                            </h2>
                            <ul className="space-y-4">
                                {blog.content.keyTakeaways.map((takeaway, index) => (
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
