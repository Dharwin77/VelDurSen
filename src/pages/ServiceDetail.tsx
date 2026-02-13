import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight, Share2, Printer, Mail } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { services } from "./Services";

const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const service = services.find((s) => s.id === id);

    if (!service) {
        return (
            <PageLayout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl font-black text-[#0f172a] mb-4">Service Not Found</h1>
                    <p className="text-slate-500 mb-8 max-w-md">The service you are looking for does not exist or has been moved to a new architectural layer.</p>
                    <Link
                        to="/services"
                        className="flex items-center gap-2 bg-[#dc2626] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b91c1c] transition-all shadow-lg shadow-red-600/20"
                    >
                        <ArrowLeft size={20} />
                        Back to Solutions Architecture
                    </Link>
                </div>
            </PageLayout>
        );
    }

    const Icon = service.icon;

    return (
        <PageLayout>
            <div className="bg-white">
                {/* Premium Enterprise Header Section - Reduced Scale */}
                <section className="relative pt-28 pb-16 bg-[#0f172a] text-white overflow-hidden">
                    {/* Architectural Background Image Overlay */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <motion.img
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.35 }}
                            transition={{ duration: 1.5 }}
                            src={service.image}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/60 to-transparent" />
                    </div>

                    {/* Architectural Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
                        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                    {/* Decorative Blur Glows */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#dc2626]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-0" />

                    <div className="enterprise-container relative z-10 px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
                            >
                                <div className="w-7 h-7 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-[#dc2626] group-hover:bg-[#dc2626] transition-all">
                                    <ArrowLeft size={12} className="group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-[0.3em]">Solutions Architecture</span>
                            </Link>

                            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                                <div className="w-16 h-16 bg-[#dc2626] rounded-2xl flex items-center justify-center shadow-xl shadow-red-900/40 border border-red-500/20">
                                    <Icon size={32} className="text-white" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[#dc2626] text-[9px] font-black uppercase tracking-[0.4em] mb-3 backdrop-blur-md border border-white/10">
                                        <div className="w-1 h-1 rounded-full bg-[#dc2626] animate-pulse" />
                                        {service.tagline}
                                    </div>
                                    <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1] text-white">
                                        {service.title}
                                    </h1>
                                </div>
                            </div>

                            <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed font-medium">
                                {service.fullDescription}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mt-12 pt-6 border-t border-white/5">
                                <button className="flex items-center gap-2.5 px-8 py-4 bg-[#dc2626] text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#b91c1c] transition-all hover:scale-105 shadow-xl shadow-red-600/20">
                                    Request Full Roadmap
                                    <ChevronRight size={14} />
                                </button>
                                <div className="flex items-center gap-2.5">
                                    {[Share2, Printer, Mail].map((Tool, i) => (
                                        <button key={i} className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 hover:bg-white/5 hover:border-[#dc2626]/50 transition-all group">
                                            <Tool size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Core Architectural Details Section - Reduced Padding */}
                <section className="py-16 bg-white border-b border-slate-50 relative overflow-hidden">
                    {/* Decorative numbers background */}
                    <div className="absolute top-0 right-0 text-[15rem] font-black text-slate-50 opacity-[0.02] select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
                        0{services.findIndex(s => s.id === id) + 1}
                    </div>

                    <div className="enterprise-container relative z-10 px-4 md:px-6">
                        <div className="grid lg:grid-cols-12 gap-12">

                            {/* Left Side: Strategic Features */}
                            <div className="lg:col-span-12 xl:col-span-7">
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-3 mb-6">
                                        <div className="w-10 h-1 bg-[#dc2626] rounded-full" />
                                        <h2 className="text-3xl font-black text-[#0f172a] tracking-tight">Key Offerings</h2>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-5">
                                        {service.features.map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                                className="p-8 bg-slate-50/50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 group"
                                            >
                                                <div className="flex items-start gap-6">
                                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:text-[#dc2626] transition-all duration-500">
                                                        <CheckCircle2 size={24} strokeWidth={1.5} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-black text-[#0f172a] mb-2 tracking-tight">{feature.title}</h3>
                                                        <p className="text-slate-500 leading-relaxed font-medium text-base">
                                                            {feature.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Industry Use Cases */}
                            <div className="lg:col-span-12 xl:col-span-5">
                                <div className="sticky top-28 lg:bg-slate-50/80 p-8 rounded-[2rem] border border-slate-100 backdrop-blur-sm shadow-sm">
                                    <div className="inline-flex items-center gap-3 mb-8">
                                        <div className="w-10 h-1 bg-[#0f172a] rounded-full" />
                                        <h2 className="text-3xl font-black text-[#0f172a] tracking-tight">Use Cases</h2>
                                    </div>

                                    <div className="space-y-3">
                                        {service.methodology.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="group relative p-6 bg-white border border-slate-100 rounded-2xl flex items-center gap-6 hover:border-[#dc2626]/30 hover:shadow-lg hover:shadow-[#dc2626]/5 transition-all cursor-default"
                                            >
                                                <span className="text-4xl font-black text-blue-100 group-hover:text-blue-500/20 transition-all duration-500 leading-none">
                                                    {item.step}
                                                </span>
                                                <div className="flex-grow">
                                                    <h4 className="font-black text-[#0f172a] text-base mb-1">{item.title}</h4>
                                                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                                </div>
                                                <ChevronRight className="text-slate-200 group-hover:text-[#dc2626] transition-all" size={20} />
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-8 p-8 bg-[#0f172a] rounded-[2rem] text-white relative overflow-hidden shadow-2xl group/cta">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626] opacity-[0.05] rounded-bl-full group-hover/cta:scale-110 transition-transform duration-700" />
                                        <h3 className="text-xl font-black mb-3 relative z-10 leading-tight">Build your next <br /> breakthrough.</h3>
                                        <p className="text-slate-400 text-xs mb-6 relative z-10 font-medium">Contact our solutions architects for a detailed consultation.</p>
                                        <button className="w-full py-4 bg-[#dc2626] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#b91c1c] transition-all relative z-10 shadow-lg shadow-red-600/20 hover:scale-[1.02]">
                                            Get Started Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default ServiceDetail;
