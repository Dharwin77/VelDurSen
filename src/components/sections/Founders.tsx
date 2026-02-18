import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity";

interface Founder {
    name: string;
    role: string;
    image: any;
    bio: string;
}

interface Props {
    data: {
        heading?: string;
        founders?: Founder[];
    }
}

export default function Founders({ data }: Props) {
    const {
        heading = "Meet the Minds Behind VelDurSen",
        founders = []
    } = data || {};

    if (!founders.length) return null;

    return (
        <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden text-white">
            <div className="enterprise-container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                        {heading}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {founders.map((founder, index) => {
                        const imageUrl = founder.image ? urlFor(founder.image).width(400).url() : null;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full text-slate-900">
                                    <div className="relative aspect-square overflow-hidden bg-slate-100">
                                        {imageUrl && (
                                            <img
                                                src={imageUrl}
                                                alt={founder.name}
                                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                            />
                                        )}
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                                        <p className="text-sm text-red-600 font-bold uppercase tracking-wider mb-4">{founder.role}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{founder.bio}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
