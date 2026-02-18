import { motion } from "framer-motion";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { urlFor } from "@/lib/sanity";
import globalMap from "@/assets/global-map.jpg";

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } }
} as any;

export default function GlobalOperations({ data }: { data: any }) {
    const heading = data?.heading || <><span className="text-orange-500">Global Delivery</span> Network</>;
    const subheading = data?.subheading || "Connectivity";
    const bgImage = data?.backgroundImage ? urlFor(data.backgroundImage).url() : globalMap;

    // Default metrics if not provided
    const defaultMetrics = [
        { value: "50+", label: "Countries Served", sublabel: "Worldwide operations" },
        { value: "500+", label: "Enterprise Clients", sublabel: "Global Fortune 500 & beyond" },
        { value: "99.9%", label: "System Uptime", sublabel: "Mission-critical reliability" },
        { value: "24/7", label: "Global Support", sublabel: "Follow-the-sun delivery" },
    ];

    const metrics = data?.metrics || defaultMetrics;

    return (
        <section className="relative w-full min-h-[600px] lg:h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-black flex flex-col items-center justify-center pt-20 pb-20">
            {/* Background Image */}
            <img
                src={bgImage}
                alt="World Map Background"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 z-10"></div>
            <div className="absolute inset-0 opacity-20 z-10" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(24, 119, 242, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(24, 119, 242, 0.3) 0%, transparent 50%)`
            }}></div>

            <div className="enterprise-container relative z-20 w-full">
                <motion.div
                    onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#f59e0b' } }))}
                    onViewportLeave={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
                    className="text-center mb-16"
                    variants={scaleUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-10% 0px -70% 0px" }}
                >
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-orange-400 mb-4 block">
                        {subheading}
                    </span>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-lg tracking-tighter">
                        {typeof heading === 'string' ? heading : heading}
                    </h3>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {metrics.map((stat: any, i: number) => (
                        <motion.div
                            key={i}
                            variants={zoomIn}
                            className="group relative"
                        >
                            <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                                <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                                    <AnimatedCounter value={stat.value} />
                                </div>
                                <div className="text-xl font-bold text-orange-400 mb-2 tracking-tight">{stat.label}</div>
                                <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">{stat.sublabel}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
