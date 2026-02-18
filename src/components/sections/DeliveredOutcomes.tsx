import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe2, Layers, Server, Lock, CheckCircle, Trophy } from "lucide-react";

interface CaseStudy {
    title: string;
    description: string;
    image: any; // We can use image if provided, or icon based on title? 
    // Simplified for now based on Index.tsx hardcoded values
    stats?: string[];
}

interface Props {
    data: {
        heading?: string;
        description?: string;
        caseStudies?: CaseStudy[];
    }
}

// Icons mapping for hardcoded style (optional)
const iconMap = [Globe2, Layers, Server, Lock, CheckCircle, Trophy];
const colorMap = [
    { from: "from-amber-400", to: "to-orange-500", text: "text-amber-600", check: "text-amber-500" },
    { from: "from-red-400", to: "to-red-600", text: "text-red-600", check: "text-red-500" },
    { from: "from-blue-400", to: "to-indigo-500", text: "text-blue-600", check: "text-blue-500" },
    { from: "from-green-400", to: "to-green-600", text: "text-green-600", check: "text-green-500" },
    { from: "from-blue-400", to: "to-blue-600", text: "text-blue-600", check: "text-purple-500" },
    { from: "from-blue-400", to: "to-blue-700", text: "text-blue-600", check: "text-teal-500" },
];


export default function DeliveredOutcomes({ data }: Props) {
    const {
        heading = "Global Deployment Milestones",
        description = "Enterprise achievements in scale, reliability, and transformation. We deliver large-scale platforms that power mission-critical operations globally.",
        caseStudies = []
    } = data || {};

    if (!caseStudies.length) return null;

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <motion.div
                viewport={{ amount: 0.1 }}
                className="enterprise-container"
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">{heading}</h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ gridAutoRows: '1fr' }}>
                    {caseStudies.map((study, i) => {
                        const Icon = iconMap[i % 6];
                        const colors = colorMap[i % 6];

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white flex flex-col h-full"
                            >
                                {/* Colored Header Bar */}
                                <div className={`bg-gradient-to-r ${colors.from} ${colors.to} px-6 py-6 relative flex-shrink-0 min-h-[100px] flex items-center`}>
                                    <h3 className="text-white font-bold text-lg italic uppercase">{study.title}</h3>
                                    {/* Icon Badge */}
                                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                                        <Icon className={`w-12 h-12 ${colors.text}`} />
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h4 className="text-lg font-bold text-slate-900 mb-3">🏆 Achievement Unlocked</h4>
                                    <p className="text-sm font-semibold text-slate-700 mb-2">What we achieved:</p>

                                    {study.stats && study.stats.length > 0 ? (
                                        <ul className="space-y-2 mb-4 flex-shrink-0">
                                            {study.stats.map((stat, idx) => (
                                                <li key={idx} className="flex gap-2 text-xs text-slate-600">
                                                    <span className={`${colors.check} font-bold`}>✓</span>
                                                    <span>{stat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}

                                    <p className="text-xs text-slate-600 leading-relaxed flex-1">
                                        {study.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
        </section>
    );
}
