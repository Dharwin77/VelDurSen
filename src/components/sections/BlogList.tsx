import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";

interface BlogPost {
    title: string;
    slug: { current: string };
    publishedAt: string;
    mainImage: any;
    author: string; // Simplified for now
}

interface Props {
    data: {
        heading?: string;
        description?: string;
        limit?: number;
    }
}

export default function BlogList({ data }: Props) {
    const {
        heading = "Latest Insights",
        description = "Explore our latest thoughts on technology, innovation, and digital transformation.",
        limit = 3
    } = data || {};

    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const query = `*[_type == "blogPost"] | order(publishedAt desc)[0...${limit}] {
            title,
            slug,
            publishedAt,
            mainImage,
            author
        }`;
        client.fetch(query).then(setPosts).catch(console.error);
    }, [limit]);

    if (!posts.length) return null;

    return (
        <section className="section-padding bg-white">
            <div className="enterprise-container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-2 block">Our Blog</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{heading}</h2>
                        <p className="text-slate-600 text-lg">{description}</p>
                    </div>
                    <Link to="/blog" className="hidden md:flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        View All Articles <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, i) => {
                        const imageUrl = post.mainImage ? urlFor(post.mainImage).width(600).height(400).url() : "https://via.placeholder.com/600x400";
                        const date = new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

                        return (
                            <Link key={i} to={`/blog/${post.slug.current}`} className="group block h-full">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    <div className="aspect-[3/2] overflow-hidden relative">
                                        <img src={imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1">
                                            <Calendar size={12} /> {date}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">
                                            <User size={12} /> {post.author || "VelDurSen Team"}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors flex-grow">
                                            {post.title}
                                        </h3>
                                        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-blue-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                                            Read Article <ArrowRight size={16} className="ml-2" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
                        View All Articles <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
