import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { urlFor } from "@/lib/sanity";
import * as LucideIcons from "lucide-react";
import { ArrowRight, ArrowDown } from "lucide-react";

interface Milestone {
    year: string;
    title: string;
    description: string;
    image: any;
    icon: string;
}

interface Props {
    data: {
        heading?: string;
        subheading?: string;
        description?: string;
        milestones?: Milestone[];
    }
}

export default function Timeline({ data }: Props) {
    const {
        heading = "Our Journey of Innovation.",
        subheading = "Chronicle",
        description = "From foundation to global scaling, explore the milestones that defined our evolution.",
        milestones = []
    } = data || {};

    const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.5"]
    });

    if (!milestones.length) return null;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Abstract background decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] -left-[10%] w-[400px] h-[400px] bg-red-50 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[20%] -right-[5%] w-[300px] h-[300px] bg-slate-100 rounded-full blur-[100px] opacity-70" />
            </div>

            <div className="enterprise-container relative z-10">
                <div className="mb-16 text-center">
                    <span className="inline-block text-xs font-black uppercase tracking-[0.2em] mb-4 text-red-600">
                        {subheading}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
                        {heading}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        {description}
                    </p>
                </div>

                <div ref={containerRef} className="relative mt-20 max-w-5xl mx-auto px-4 md:px-0">
                    {/* CENTERAL SPINE TIMELINE FLOW */}
                    <div className="relative py-10">
                        {/* Central Spine Line */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200" />
                        <motion.div
                            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-red-600 via-orange-500 to-orange-400 origin-top"
                            style={{ scaleY: scrollYProgress }}
                        />

                        <div className="space-y-24 relative">
                            {milestones.map((m, i) => {
                                const Icon = (LucideIcons as any)[m.icon] || LucideIcons.Rocket;
                                const imageUrl = m.image ? urlFor(m.image).width(400).url() : "https://via.placeholder.com/400x300";

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.7, delay: i * 0.05 }}
                                        className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} pl-16 md:pl-0`}
                                    >
                                        {/* Central Node - Dot */}
                                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-[3px] border-red-500 rounded-full z-20 shadow-[0_0_0_4px_rgba(255,255,255,1)] group-hover:scale-150 transition-transform" />

                                        {/* Side A: Year Display (Opposite to Content) */}
                                        <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? 'justify-end text-right' : 'justify-start text-left'}`}>
                                            <span className="text-[8rem] leading-none font-black text-slate-100 select-none tracking-tighter transition-colors hover:text-slate-200">
                                                {m.year}
                                            </span>
                                        </div>

                                        {/* Side B: Content Card */}
                                        <div className="flex-1 w-full md:w-auto z-10">
                                            <button
                                                //   onClick={() => setSelectedMilestone(m)} // Modal support removed for simplicity unless requested
                                                className="w-full text-left group perspective-1000 outline-none"
                                            >
                                                <div className={`relative bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden`}>
                                                    {/* Card Decoration Gradient */}
                                                    <div className={`absolute top-0 left-0 w-1.5 h-full ${i % 2 === 0 ? 'bg-gradient-to-b from-red-500 to-orange-500' : 'bg-gradient-to-b from-blue-500 to-blue-400'}`} />

                                                    {/* Mobile Year Badge */}
                                                    <div className="md:hidden absolute top-6 right-6 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                                                        {m.year}
                                                    </div>

                                                    <div className="flex flex-col gap-6">
                                                        {/* Header with Icon */}
                                                        <div className="flex items-center gap-4">
                                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-300`}>
                                                                <Icon size={28} strokeWidth={2} />
                                                            </div>
                                                            <div>
                                                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-500 transition-all">
                                                                    {m.title}
                                                                </h3>
                                                            </div>
                                                        </div>

                                                        {/* Description */}
                                                        <p className="text-slate-500 leading-relaxed font-medium">
                                                            {m.description}
                                                        </p>

                                                        {/* Image Preview Strip */}
                                                        <div className="h-32 w-full rounded-xl overflow-hidden relative group-hover:h-40 transition-all duration-500 ease-in-out">
                                                            <img src={imageUrl} alt={m.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700" />
                                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Timeline Endpoint: "Keep Building" */}
                    <div className="relative mt-24 flex flex-col items-center justify-center text-center">
                        {/* Dashed Line Extension */}
                        <div className="absolute top-[-96px] bottom-1/2 left-1/2 -translate-x-1/2 w-px border-l-2 border-dashed border-slate-300 h-24" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10 bg-slate-900 text-white px-8 py-4 rounded-full shadow-2xl shadow-red-500/20 border border-slate-700 group hover:bg-red-600 transition-colors duration-300"
                        >
                            <span className="text-sm font-black tracking-[0.2em] uppercase flex items-center gap-3">
                                And we keep building <ArrowDown size={16} className="animate-bounce" />
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
