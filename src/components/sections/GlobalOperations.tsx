import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import GlareHover from "@/components/shared/GlareHover"; // Assuming this exists or I need to import it relative
import AnimatedCounter from "@/components/sections/AnimatedCounter"; // Need to extract this too or duplicate

// Since I cannot easily import local components if paths are messy, I will try to use the ones from Index if they are exported, 
// OR I will duplicate the simple ones or move them to shared. 
// GlareHover is in components/shared.
// AnimatedCounter was defined in Index.tsx locally. I should extract it to shared first.

// Let's assume AnimatedCounter will be moved to shared.

interface Props {
    data: {
        heading?: string;
        subtitle?: string;
        metrics?: { value: string; label: string; sublabel: string }[];
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

export default function GlobalOperations({ data }: Props) {
    const {
        heading = "Worldwide Presence, Local Expertise",
        subtitle = "Operating across multiple continents with a follow-the-sun delivery model.",
        metrics = [
            { value: "50+", label: "Countries Served", sublabel: "Worldwide operations" },
            { value: "500+", label: "Enterprise Clients", sublabel: "Global Fortune 500 & beyond" },
            { value: "99.9%", label: "System Uptime", sublabel: "Mission-critical reliability" },
            { value: "24/7", label: "Global Support", sublabel: "Follow-the-sun delivery" },
        ]
    } = data || {};

    return (
        <section className="section-padding bg-gradient-to-b from-white to-slate-50/50">
            <div className="enterprise-container">
                <SectionHeader
                    tag="Global Operations"
                    title={heading}
                    subtitle={subtitle}
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {metrics.map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={zoomIn}
                            className="group relative"
                        >
                            <GlareHover glareOpacity={0.12} glareSize={250} className="rounded-[2rem]">
                                <div className="text-center p-10 md:p-12 h-full rounded-[2rem] border border-slate-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(239,68,68,0.12)] hover:border-red-200 transition-all duration-700 group relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors" />

                                    <div className="text-6xl md:text-7xl font-black text-red-600 mb-6 tracking-tighter group-hover:scale-110 transition-transform duration-700">
                                        {/* Placeholder for AnimatedCounter */}
                                        <span>{stat.value}</span>
                                    </div>
                                    <div className="text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tight">{stat.label}</div>
                                    <div className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest">{stat.sublabel}</div>
                                </div>
                            </GlareHover>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
