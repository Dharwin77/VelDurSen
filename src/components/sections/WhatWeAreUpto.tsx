import { motion } from "framer-motion";
import GlareHover from "@/components/shared/GlareHover";
import { urlFor } from "@/lib/sanity";
import highlight1 from "@/assets/coptercode9.png.jpeg";
import highlight2 from "@/assets/coptercode10.png.jpeg";

interface Props {
    data: any
}

const rotateIn = {
    hidden: { opacity: 0, rotate: -5, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.8 } }
};

const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
};

export default function WhatWeAreUpto({ data }: Props) {
    const heading = data?.heading || "What we are upto";

    // Default highlights
    const defaultHighlights = [
        { label: "GLOBAL ENTERPRISE CLIENTS", value: "500+", percentage: 85 },
        { label: "YEARS OF TECHNOLOGY EXCELLENCE", value: "10+", percentage: 90 },
        { label: "DIGITAL TRANSFORMATIONS DELIVERED", value: "1000+", percentage: 95 },
        { label: "CLOUD-NATIVE ARCHITECTURES", value: "1000+", percentage: 80 },
        { label: "AI & INTELLIGENT SYSTEMS", value: "500+", percentage: 75 },
        { label: "STARTUP GROWTH PARTNERSHIPS", value: "100+", percentage: 60 }
    ];

    const highlights = data?.stats?.length ? data.stats : defaultHighlights;

    // Images
    const image1 = data?.mainImage ? urlFor(data.mainImage).url() : highlight1;
    const image2 = data?.secondaryImage ? urlFor(data.secondaryImage).url() : highlight2;

    return (
        <section className="section-padding overflow-hidden bg-sky-50/30">
            <div className="enterprise-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Images Column */}
                    <div className="relative">
                        {/* Decorative background circle */}
                        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-slate-50 rounded-full -z-10" />

                        <div className="relative z-10 grid grid-cols-4 md:grid-cols-12 gap-4 max-w-lg mx-auto lg:ml-0">
                            {/* Decorative dots - top left */}
                            <div className="absolute -top-10 -left-10 grid grid-cols-4 gap-2 opacity-20">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-foreground rounded-full" />
                                ))}
                            </div>

                            {/* Main Image */}
                            <motion.div
                                variants={rotateIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                className="col-span-4 md:col-span-10 relative"
                            >
                                <GlareHover glareOpacity={0.2} glareSize={500} className="rounded-2xl">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl border-l-[12px] border-blue-600">
                                        <img
                                            src={image1}
                                            alt="Innovation focus"
                                            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                                        />
                                    </div>
                                </GlareHover>
                            </motion.div>

                            {/* Secondary Image */}
                            <motion.div
                                variants={scaleUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                className="col-start-2 col-span-3 md:col-start-4 md:col-span-8 -mt-12 md:-mt-24 relative z-20"
                            >
                                <GlareHover glareOpacity={0.25} glareSize={400} className="rounded-2xl">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl border-b-[12px] border-blue-600 bg-white">
                                        <img
                                            src={image2}
                                            alt="Strategic planning"
                                            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                                        />
                                    </div>
                                </GlareHover>
                                {/* Decorative red square background */}
                                <div className="absolute -bottom-6 -left-6 w-24 h-12 bg-blue-600 -z-10" />
                            </motion.div>
                        </div>

                        {/* Decorative dots - bottom right */}
                        <div className="absolute -bottom-10 right-10 grid grid-cols-4 gap-2 opacity-20">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-foreground rounded-full" />
                            ))}
                        </div>
                    </div>

                    {/* Stats Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            className="mb-8"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3 block">Highlights</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
                                {heading}
                            </h2>
                        </motion.div>

                        <div className="space-y-8">
                            {highlights.map((stat: any, index: number) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[11px] font-bold tracking-wider text-slate-600 uppercase">
                                            {stat.label} <span className="text-blue-600 ml-1">{stat.value}</span>
                                        </span>
                                        <span className="text-sm font-bold text-foreground">{stat.percentage}%</span>
                                    </div>
                                    <div className="relative h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${stat.percentage}%` }}
                                            viewport={{ once: false }}
                                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                            className="absolute h-full bg-blue-600 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
