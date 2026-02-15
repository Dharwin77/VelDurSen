import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import CardSwap, { Card } from "./CardSwap";
import copter14 from "@/assets/coptercode14.png.jpeg";
import copter10 from "@/assets/coptercode10.png.jpeg";
import copter9 from "@/assets/coptercode9.png.jpeg";
import copter2 from "@/assets/coptercode2.jpeg";

// Placeholder images - using gradients/colors if actual images aren't available,
// or simpler div placeholders that look like UI mockups.
// In a real scenario, we would import actual project screenshots.

const projects = [
    {
        id: 1,
        title: "FinGuard Core",
        category: "CASE STUDY",
        description: "AI-powered banking core processing millions of transactions with real-time fraud detection.",
        stats: [
            { value: "99.9%", label: "Fraud Detection" },
            { value: "40%", label: "Faster Onboarding" }
        ],
        bg: "bg-amber-100", // Yellowish
        accent: "text-amber-900",
        buttonBg: "bg-amber-900",
        buttonText: "text-amber-100",
        image: copter14
    },
    {
        id: 2,
        title: "MediSync Pro",
        category: "CASE STUDY",
        description: "Telehealth platform connecting patients with specialists in under 2 minutes with integrated EHR.",
        stats: [
            { value: "300%", label: "Patient Engagement" },
            { value: "15m", label: "Wait Time Reduction" }
        ],
        bg: "bg-rose-100", // Pinkish
        accent: "text-rose-900",
        buttonBg: "bg-rose-900",
        buttonText: "text-rose-100",
        image: copter10
    },
    {
        id: 3,
        title: "LogiChain AI",
        category: "CASE STUDY",
        description: "Predictive AI optimizing global fleet routes, reducing fuel consumption across 50+ countries.",
        stats: [
            { value: "25%", label: "Cost Reduction" },
            { value: "Real-time", label: "Global Visibility" }
        ],
        bg: "bg-blue-100", // Blueish
        accent: "text-blue-900",
        buttonBg: "bg-blue-900",
        buttonText: "text-blue-100",
        image: copter9
    },
    {
        id: 4,
        title: "RetailFlow",
        category: "CASE STUDY",
        description: "Omni-channel platform unifying online and offline customer data to drive personalized loyalty.",
        stats: [
            { value: "40%", label: "Sales Increase" },
            { value: "2x", label: "Customer Retention" }
        ],
        bg: "bg-orange-100", // Orangeish
        accent: "text-orange-900",
        buttonBg: "bg-orange-900",
        buttonText: "text-orange-100",
        image: copter2
    }
];

const DeliveredOutcomes = () => {
    return (
        <section className="section-padding bg-slate-50 overflow-hidden min-h-screen">
            <motion.div
                onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#2563eb' } }))}
                viewport={{ amount: 0.1 }}
                className="enterprise-container"
            >
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-4">
                            Enterprise Solutions That <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Deliver Outcomes.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <a href="/work" className="text-indigo-600 font-bold hover:underline underline-offset-4 flex items-center text-lg">
                            Explore All Case Studies <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </motion.div>
                </div>

                {/* Card Swap Component */}
                <div className="relative w-full flex items-center justify-center py-10">
                    <CardSwap
                        width="100%"
                        height="600px"
                        cardDistance={50}
                        verticalDistance={40}
                        delay={2000}
                        pauseOnHover={true}
                        showControls={true}
                    >
                        {projects.map((project, index) => (
                            <Card key={project.id} className={`${project.bg} p-8 md:p-12 lg:p-16 w-full max-w-5xl h-[550px]`}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full h-full">
                                    {/* Content Side */}
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-6">
                                                <span className={`inline-block text-xs font-black uppercase tracking-[0.2em] ${project.accent} opacity-70`}>
                                                    {project.category}
                                                </span>
                                                <div className={`h-px w-10 ${project.accent} opacity-30`} />
                                            </div>

                                            <h3 className={`text-4xl md:text-5xl font-black mb-6 ${project.accent} tracking-tight`}>
                                                {project.title}
                                            </h3>
                                            <p className={`text-lg md:text-xl font-medium leading-relaxed mb-6 ${project.accent} opacity-90 max-w-xl`}>
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-black/5">
                                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                                                <div className="flex gap-8">
                                                    {project.stats.map((stat, i) => (
                                                        <div key={i}>
                                                            <div className={`text-3xl md:text-4xl font-black mb-1 ${project.accent} tracking-tighter`}>
                                                                {stat.value}
                                                            </div>
                                                            <div className={`text-[10px] font-bold uppercase tracking-wider ${project.accent} opacity-70`}>
                                                                {stat.label}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Side */}
                                    <div className="relative h-full w-full hidden lg:block overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-10" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </CardSwap>
                </div>
            </motion.div>
        </section>
    );
};
export default DeliveredOutcomes;
