import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity";
import partner1 from "@/assets/partner1.png";
import partner2 from "@/assets/partner2.png";
import partner3 from "@/assets/partner3.png";
import partner4 from "@/assets/partner4.png";
import partner5 from "@/assets/partner5.png";
import partner6 from "@/assets/partner6.png";
import partner7 from "@/assets/partner7.png";
import partner8 from "@/assets/partner8.png";

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
} as any;

export default function TrustedPartners({ data }: { data: any }) {
    const defaultLogos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8];

    const logos = data?.logos?.length
        ? data.logos.map((img: any) => urlFor(img).url())
        : defaultLogos;

    // Duplicate the logos array to ensure a seamless infinite scroll loop
    const scrollLogos = [...logos, ...logos, ...logos];

    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="bg-white py-16 border-t border-b border-border/50 overflow-hidden"
        >
            <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                    {data?.heading || "Trusted by Industry Leaders Worldwide"}
                </p>
            </div>

            <div className="relative flex items-center">
                {/* Continuous Marquee Container */}
                <div className="flex gap-8 animate-scroll-slow hover:[animation-play-state:paused] transition-all duration-300 px-4">
                    {scrollLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="w-40 md:w-56 h-24 flex items-center justify-center p-4 transition-transform duration-500 hover:scale-110 shrink-0"
                        >
                            <img
                                src={logo}
                                alt={`Partner Logo`}
                                className="max-w-full max-h-full object-contain filter drop-shadow-sm"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
