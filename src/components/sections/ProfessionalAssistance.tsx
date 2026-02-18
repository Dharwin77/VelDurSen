import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity";

interface Props {
    data: {
        heading?: string; // HTML string or plain text
        description?: string;
        image?: any;
    }
}

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
};

export default function ProfessionalAssistance({ data }: Props) {
    const {
        heading = "Give your business the Professional Assistance it requires with our team",
        description = "Your vision is our starting point. Our team of expert developers harmoniously collaborates with your team to create the custom software solution you aspire to.",
        image
    } = data || {};

    const imageUrl = image ? urlFor(image).width(1200).url() : "https://via.placeholder.com/1200x800";

    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="enterprise-container flex flex-col items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1 }}
                    variants={fadeInUp}
                    className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.15] tracking-tight">
                        {heading}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                        {description}
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={scaleUp}
                    className="w-full max-w-5xl h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer"
                >
                    <img src={imageUrl} alt="Team Culture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
                </motion.div>
            </div>
        </section>
    );
}
