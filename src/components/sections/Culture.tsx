import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity";
import GlareHover from "@/components/shared/GlareHover";
import * as LucideIcons from "lucide-react";

interface Value {
    title: string;
    description: string;
    icon: string;
}

interface Props {
    data: {
        heading?: string;
        description?: string;
        values?: Value[];
        image?: any;
    }
}

export default function Culture({ data }: Props) {
    const {
        heading = "Our Culture",
        description = "We foster an environment of innovation and excellence.",
        values = [],
        image
    } = data || {};

    const imageUrl = image ? urlFor(image).width(800).url() : "https://via.placeholder.com/800x600";

    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="enterprise-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">{heading}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">{description}</p>

                    <div className="space-y-6">
                        {values.map((val, i) => {
                            // Dynamic icon loading (simplified)
                            const Icon = (LucideIcons as any)[val.icon] || LucideIcons.CheckCircle;

                            return (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-slate-800 mb-2">{val.title}</h3>
                                        <p className="text-slate-600">{val.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <GlareHover glareOpacity={0.1} glareSize={400} className="rounded-3xl shadow-2xl">
                        <img src={imageUrl} alt="Culture" className="w-full h-auto rounded-3xl" />
                    </GlareHover>
                </motion.div>

            </div>
        </section>
    );
}
