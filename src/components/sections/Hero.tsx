import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe2 } from "lucide-react";
import { urlFor } from "@/lib/sanity";

interface HeroProps {
    data: {
        title?: string;
        subtitle?: string;
        backgroundImage?: any;
        backgroundVideo?: any; // Sanity file object
        ctaButtons?: { label: string; link: string; variant: string }[];
    }
}

export default function Hero({ data }: HeroProps) {
    const {
        title = "Engineering the Digital Backbone of Global Enterprises.",
        subtitle = "We build the mission-critical systems that power the world's largest organizations.",
        ctaButtons = [
            { label: "Explore Solutions", link: "/solutions", variant: "primary" },
            { label: "View Case Studies", link: "/work", variant: "secondary" }
        ]
    } = data || {};

    const backgroundImageUrl = data?.backgroundImage ? urlFor(data.backgroundImage).width(1920).url() : null;
    // Video handling in Sanity requires fetching the file URL. For now we assume image fallback or implementation later.

    return (
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                {backgroundImageUrl ? (
                    <img src={backgroundImageUrl} alt="Hero Background" className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-slate-900" /> // Fallback
                )}
                <div className="absolute inset-0 bg-slate-950/80" />
            </div>

            <div className="enterprise-container relative z-20 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl"
                >
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-6 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-md">
                        Global Enterprise Technology
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                        {/* Simple parser for line breaks if needed, or just render string */}
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-medium mb-12 max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {ctaButtons.map((btn, idx) => (
                            <Link
                                key={idx}
                                to={btn.link}
                                className={`btn-enterprise py-4 px-8 text-lg ${btn.variant === 'secondary' ? 'btn-outline-enterprise' : ''}`}
                            >
                                {btn.label}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 flex items-center gap-4 text-slate-500 font-bold uppercase tracking-widest text-xs">
                        <Globe2 size={16} className="text-blue-500" />
                        Trusted by 500+ Enterprises in 150 Countries
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
