import { motion } from "framer-motion";
import GlareHover from "@/components/shared/GlareHover";
import { urlFor } from "@/lib/sanity";

interface Props {
    data: {
        heading?: string;
        highlights?: { label: string; value: string; percentage: number }[];
        images?: any[];
    }
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
    const {
        heading = "What we are upto",
        highlights = [],
        images = []
    } = data || {};

    // Fallback images if none provided in Sanity
    // In a real scenario, we'd handle this better or require images in schema validation.
    const image1Url = images[0] ? urlFor(images[0]).width(600).url() : "https://via.placeholder.com/600x400";
    const image2Url = images[1] ? urlFor(images[1]).width(600).url() : "https://via.placeholder.com/600x400";

    if (!highlights.length) return null;

    return (
        <section className="section-padding overflow-hidden bg-sky-50/30">
            <div className="enterprise-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Images Column */}
                    <div className="relative">
                        <div className="relative z-10 grid grid-cols-4 md:grid-cols-12 gap-4 max-w-lg mx-auto lg:ml-0">

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
                                            src={image1Url}
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
                                            src={image2Url}
                                            alt="Strategic planning"
                                            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                                        />
                                    </div>
                                </GlareHover>
                            </motion.div>
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
                            {highlights.map((stat, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[11px] font-bold tracking-wider text-slate-600 uppercase">{stat.label}</span>
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
