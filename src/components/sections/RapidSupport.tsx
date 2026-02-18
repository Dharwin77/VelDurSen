import { motion } from "framer-motion";
import GlareHover from "@/components/shared/GlareHover";
import { Globe } from "lucide-react";
import supportBg from "@/assets/coptercode5.png.jpeg";
import { urlFor } from "@/lib/sanity";

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
} as any;

const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } }
};

const zoomIn = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut" } }
};

export default function RapidSupport({ data }: { data: any }) {
    const heading = data?.heading || <><span className="text-orange-600">Strategic Global Talent</span> on Demand</>;
    const subheading = data?.subheading || "We enable you to onboard specialized talent within 15 days (90% success rate)";
    const description = data?.description || "Our dedicated recruitment consultants bridge the gap between niche technology requirements and top-tier global talent. By combining deep domain expertise across critical industry verticals with architectural foresight, we ensure every placement is a perfect technical and cultural fit for your mission-critical operations.";

    // Parse heading if it's a string from Sanity. 
    // If it's the specific default string, we might want to apply the coloring. 
    // For now simple display.

    const bgImage = data?.image ? urlFor(data.image).url() : supportBg;

    return (
        <section
            className="section-padding bg-amber-50/30 overflow-hidden"
        >
            <motion.div
                onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#ea580c' } }))}
                onViewportLeave={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
                viewport={{ margin: "-100px 0px -80% 0px" }}
                className="enterprise-container"
            >
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h2
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
                    >
                        {/* Simple logic to color the word "Demand" if it matches default, else just text */}
                        {typeof heading === 'string' && heading.includes('Demand') ? (
                            <>Strategic Global Talent on <span className="text-orange-600">Demand</span></>
                        ) : heading}
                    </motion.h2>

                    <motion.p
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        className="text-lg md:text-xl font-bold text-orange-600 mb-6"
                    >
                        {subheading}
                    </motion.p>

                    <motion.p
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        className="text-lg md:text-xl text-slate-600 leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>

                <div className="flex justify-center">
                    <motion.div
                        variants={zoomIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        className="relative w-full max-w-4xl"
                    >
                        {/* Decorative background map (subtle) */}
                        <div className="absolute inset-0 -z-10 opacity-5">
                            <Globe className="w-full h-full text-slate-400" />
                        </div>

                        <GlareHover glareOpacity={0.1} glareSize={600} className="rounded-[2rem] overflow-hidden shadow-2xl">
                            <img
                                src={bgImage}
                                alt="Strategic Global Talent"
                                className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-105"
                            />
                        </GlareHover>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
