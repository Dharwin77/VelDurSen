import { motion, Variants, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
    CheckCircle, Globe, Shield, Zap, TrendingUp,
    Server, Database, Code, Cpu, Layers, Activity, Lock, Users,
    BarChart, Rocket, MonitorCheck, Workflow, ArrowRight,
    Brain, RefreshCcw, Factory, ShoppingCart, Layout, PieChart, FileText, X,
    ShieldCheck, UserCheck, Eye, Leaf, MousePointer2, Terminal, Cloud
} from "lucide-react";

import crmHealthcare from "@/assets/crm-healthcare.png";
import crmFinance from "@/assets/crm-finance.png";
import crmRetail from "@/assets/crm-retail.png";
import crmManufacturing from "@/assets/crm-manufacturing.png";

import aboutTeam from "@/assets/coptercode3.png.jpeg";
import img1 from "@/assets/coptercode11.png.jpeg";
import img2 from "@/assets/coptercode12.png.jpeg";
import cardImg1 from "@/assets/home_health.jpeg";
import cardImg2 from "@/assets/home_financial.jpeg";
import cardImg3 from "@/assets/home_retail.jpeg";
import cardImg4 from "@/assets/home_B2B.jpeg";
import founder1 from "@/assets/founder1.png";
import founder2 from "@/assets/founder2.png";
import founder3 from "@/assets/founder3.png";
import { urlFor } from "@/lib/sanity";


// Animation Variants
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
};

const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } }
};

const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } }
};

const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const AcceleratorSection: React.FC<{ data?: any }> = ({ data }) => {
    const [progress, setProgress] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // Rotate 360 degrees in 16 seconds (4s per item)
    // 0-25% -> Item 0
    // 25-50% -> Item 1
    // 50-75% -> Item 2
    // 75-100% -> Item 3

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(p => (p >= 100 ? 0 : p + 0.15)); // Adjust speed here
        }, 20);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const index = Math.floor(progress / 25);
        setActiveIndex(index > 3 ? 0 : index);
    }, [progress]);

    const defaultAccelerators = [
        { title: "Healthcare Accelerator", sub: "Patient engagement & compliance tracking.", color: "text-blue-400", bg: "bg-blue-400", img: crmHealthcare },
        { title: "FinTech Accelerator", sub: "KYC, fraud detection & onboarding.", color: "text-blue-600", bg: "bg-blue-600", img: crmFinance },
        { title: "Retail Accelerator", sub: "Loyalty engines & omnichannel data.", color: "text-green-500", bg: "bg-green-500", img: crmRetail },
        { title: "Manufacturing Accelerator", sub: "Dealer networks & production analytics.", color: "text-green-600", bg: "bg-green-600", img: crmManufacturing }
    ];

    const displayAccelerators = data?.accelerators?.map((item: any, index: number) => ({
        title: item.title,
        sub: item.sub,
        img: item.image ? (typeof item.image === 'string' ? item.image : urlFor(item.image).url()) : defaultAccelerators[index % defaultAccelerators.length].img,
        color: defaultAccelerators[index % defaultAccelerators.length].color,
        bg: defaultAccelerators[index % defaultAccelerators.length].bg
    })) || defaultAccelerators;

    // Ensure we have exactly 4 items for the logic to work, or adjust logic. 
    // For now, let's assume 4 items or cycle/slice. 
    // If fewer than 4, we might duplicate. If more, we slice.
    // The current logic supports 4 specific slots (0-25, 25-50, etc).
    const accelerators = displayAccelerators.slice(0, 4);

    // Add import for urlFor if not present, or pass it? 
    // urlFor is likely needed. I'll need to check imports.
    // Assuming urlFor is available or I need to import it.
    // Checking file imports... urlFor is NOT imported.
    // I should probably pass processed data or import urlFor.

    return (
        <section className="section-padding bg-slate-900 text-white clip-path-slant-reverse overflow-hidden font-heading">
            <motion.div
                onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#16a34a' } }))}
                onViewportLeave={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
                viewport={{ margin: "-10% 0px -70% 0px" }}
                className="enterprise-container"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeInLeft}
                    >
                        <span className="text-green-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block" style={{ fontFamily: "'Inter', sans-serif" }}>Sector Expertise</span>
                        <h2 className="text-4xl font-black text-white mb-6 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {data?.heading || <>Industry-Specific <br /> CRM Accelerators</>}
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed font-medium">
                            {data?.description || "We provide industry-optimized CRM frameworks tailored to operational realities, ensuring faster time-to-value and deeper vertical alignment."}
                        </p>

                        <div className="space-y-4">
                            {accelerators.map((acc: any, i: number) => {
                                const isActive = i === activeIndex;
                                return (
                                    <motion.div
                                        key={i}
                                        className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-500 border ${isActive ? 'bg-white/10 border-white/20' : 'bg-transparent border-transparent opacity-50'}`}
                                        onClick={() => setProgress(i * 25)} // Manual override
                                    >
                                        <div className={`mt-1 w-3 h-3 rounded-full shadow-[0_0_10px_currentColor] transition-colors duration-500 ${isActive ? acc.bg : 'bg-slate-600'}`} />
                                        <div>
                                            <h4 className={`font-bold text-lg transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-400'}`}>{acc.title}</h4>
                                            <p className="text-sm text-slate-400">{acc.sub}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={scaleUp}
                        className="relative flex justify-center items-center"
                    >
                        {/* Main Circle Track */}
                        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-white/5 flex items-center justify-center">
                            {/* Rotating Dot Container */}
                            <div
                                className="absolute inset-0 w-full h-full rounded-full"
                                style={{ transform: `rotate(${progress * 3.6}deg)` }} // 0-100% -> 0-360deg
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] flex items-center justify-center">
                                    <div className="w-2 h-2 bg-slate-900 rounded-full" />
                                </div>
                            </div>

                            {/* Center Content - Changing Images */}
                            <div className="absolute inset-8 rounded-full bg-slate-800/50 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/10">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-center p-8 active-acc-content"
                                    >
                                        <img src={accelerators[activeIndex].img} alt="Accelerator" className="w-32 h-32 md:w-48 md:h-48 object-contain mx-auto mb-6 drop-shadow-2xl" />
                                        <div className={`text-2xl font-black tracking-tight ${accelerators[activeIndex].color}`} style={{ fontFamily: "'Inter', sans-serif" }}>{accelerators[activeIndex].title.split(' ')[0]}</div>
                                        <div className="text-white/60 font-black uppercase text-[10px] tracking-[0.4em] mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>{accelerators[activeIndex].title.split(' ').slice(1).join(' ')}</div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

// Enterprise CRM & Product Engineering Content Component
const CRMUseCaseCard = ({ useCase, index }: { useCase: any, index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const avatarUrl = useCase.avatar || `https://api.dicebear.com/9.x/avataaars/svg?seed=${useCase.avatarType}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`relative group z-10 transition-all duration-500 w-full mb-12 ${isHovered ? 'md:scale-[1.05] lg:scale-[1.08]' : ''}`}
        >
            {/* Slanted Background Container */}
            <div className={`absolute inset-x-0 bottom-0 top-32 transition-all duration-700 rounded-[4rem] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.06)] border border-slate-50 transform 
                ${isHovered
                    ? 'bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-green-500/30 border-transparent -skew-y-6 scale-105'
                    : 'bg-white skew-y-6'}`}
            >
                <div className={`absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none transition-opacity duration-700 ${isHovered ? 'opacity-20' : 'opacity-0'}`} />
            </div>

            {/* Content Container */}
            <div className="relative h-full pt-10 pb-16 flex flex-col items-center text-center z-10">
                <div className="relative w-full h-40 sm:h-56 mb-8 sm:mb-16 flex items-center justify-center">
                    <div className={`absolute inset-0 rounded-full blur-3xl transition-all duration-700 ${isHovered ? 'bg-white/40 scale-150' : 'bg-blue-100 opacity-40'}`} />

                    <div className={`relative z-10 transform transition-all duration-700 ${isHovered ? '-translate-y-8 rotate-3' : ''}`}>
                        <div className="relative">
                            <img
                                src={avatarUrl}
                                alt={useCase.title}
                                className={`w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-2xl transition-all duration-700 ${isHovered ? 'scale-110' : ''}`}
                            />
                            <motion.div
                                animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-2 -right-4 sm:-right-6 w-14 h-14 sm:w-20 sm:h-20 bg-white/95 backdrop-blur-sm rounded-[1rem] sm:rounded-[1.5rem] shadow-xl border border-white p-2 sm:p-3 flex items-center justify-center z-20"
                            >
                                <img src={useCase.fluentIcon} alt="Icon" className="w-full h-full object-contain" />
                            </motion.div>

                            <div className={`absolute -bottom-4 -left-6 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white flex items-center justify-center transition-all duration-700 ${isHovered ? 'scale-110 -translate-x-3' : ''}`}>
                                <Zap className={`w-6 h-6 ${isHovered ? 'text-blue-600 animate-pulse' : 'text-orange-500'}`} />
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 pointer-events-none">
                        <motion.div
                            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-0 right-10 w-6 h-6 bg-green-400 rounded-full blur-[2px] opacity-50"
                        />
                        <motion.div
                            animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute bottom-0 left-10 w-4 h-4 bg-blue-400 rounded-full blur-[2px] opacity-50"
                        />
                    </div>
                </div>

                <h3 className={`text-2xl font-black mb-5 tracking-tight leading-tight transition-colors duration-700 ${isHovered ? 'text-white' : 'text-slate-950 group-hover:text-blue-600'}`}>
                    {useCase.title}
                </h3>
                <p className={`text-base leading-relaxed mb-16 font-medium px-8 transition-colors duration-700 ${isHovered ? 'text-white/95' : 'text-slate-500'}`}>
                    {useCase.desc}
                </p>

                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                    <div className="p-3 bg-white rounded-full shadow-xl">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-700
                                ${isHovered
                                    ? 'bg-gradient-to-br from-green-500 to-green-600 text-white'
                                    : 'bg-gradient-to-br from-green-500 to-green-600 text-white'}`}
                        >
                            <ArrowRight size={28} strokeWidth={3} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

interface EnterpriseContentProps {
    crm?: any;
    productFocus?: any;
    expertise?: any;
    automation?: any;
    whyChoose?: any;
    accelerators?: any;
}


export const EnterpriseCRMContent = ({ data }: { data: EnterpriseContentProps }) => {
    const { crm, productFocus, expertise, automation, whyChoose, accelerators } = data || {};
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="font-heading">
            {/* 1. Intro Section: Enterprise CRM & Product Engineering Excellence */}
            <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-br from-[#F8FAFC] to-[#EEF4FF]">
                <motion.div
                    onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#2563eb' } }))}
                    viewport={{ amount: 0.1 }}
                    className="enterprise-container relative z-10"
                >
                    {/* Background Decor */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center">

                        {/* Left Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="space-y-8"
                        >
                            <motion.div variants={fadeInUp}>
                                <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1]" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    {crm?.heading || <>Enterprise CRM & <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Product Engineering</span></>}
                                </h2>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <h2 className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    {crm?.subheading || "Purpose-built CRM platforms engineered for scale, intelligence, and measurable growth."}
                                </h2>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="space-y-6">
                                <p className="text-lg text-slate-700 leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    {crm?.description || <>At VelDurSen, we don’t simply deploy CRM software — we architect <span className="font-semibold text-slate-900">intelligent ecosystems</span> that evolve with your enterprise. Every workflow, integration, and automation layer is engineered for performance, clarity, and long-term scalability.</>}
                                </p>

                                <p className="text-lg text-slate-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Our CRM solutions are built to support:</p>

                                <ul className="space-y-4">
                                    {(crm?.features?.length > 0 ? crm.features : [
                                        "Multi-region revenue operations 🌍",
                                        "High-volume customer engagement 📊",
                                        "Automated cross-functional workflows ⚙️",
                                        "Real-time analytics & forecasting 📈",
                                        "Unified customer lifecycle intelligence 🤖"
                                    ]).map((item: string, i: number) => (
                                        <motion.li
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-3 text-slate-800 font-medium"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            <CheckCircle className="text-blue-600 w-5 h-5 shrink-0" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>

                                <p className="text-lg text-slate-700 leading-relaxed pt-4 border-t border-slate-200/60 mt-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    From acquisition to retention, our platforms empower leadership teams to operate with confidence, visibility, and precision.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Right Content - Glassmorphism Panel */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInRight}
                            className="relative"
                        >
                            {/* Optional Holographic Accent */}
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-[100px] opacity-20 animate-pulse pointer-events-none" />

                            <motion.div
                                whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="backdrop-blur-xl bg-white/60 border border-white/50 shadow-xl rounded-[24px] p-8 md:p-10 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-[100px] -z-10 opacity-50" />

                                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    What Makes Our CRM Different?
                                </h3>

                                <div className="space-y-8">
                                    {(crm?.biSystems?.length > 0 ? crm.biSystems : [
                                        { icon: Layers, title: "API-First Architecture", desc: "Designed for seamless integration across enterprise ecosystems and legacy systems." },
                                        { icon: Brain, title: "AI-Enhanced Intelligence", desc: "Built-in predictive models that turn raw customer data into actionable insight." },
                                        { icon: Server, title: "Enterprise-Grade Uptime", desc: "99.99% availability engineered through resilient cloud-native infrastructure." },
                                        { icon: Shield, title: "Secure by Design", desc: "Security embedded at the architectural level — not added as an afterthought 🔐" },
                                    ]).map((feature: any, idx: number) => (
                                        <div key={idx} className="flex gap-5 items-start group/item">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-white shadow-sm flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                                {feature.icon ? <feature.icon className="text-blue-600 w-5 h-5" /> : <Layers className="text-blue-600 w-5 h-5" />}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-lg mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{feature.title}</h4>
                                                <p className="text-sm text-slate-600 leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </motion.div>
            </section>

            {/* 2. Product Engineering & SaaS Development */}
            <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-r from-white via-white to-[#F3F7FF]">
                {/* Diagonal Divider & Grid Overlay */}
                <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-[#F3F7FF] -skew-x-12 origin-top-right z-0 translate-x-1/4" />
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="enterprise-container relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                    >
                        {/* Left Side - Feature Tiles */}
                        <motion.div variants={fadeInLeft} className="relative z-10 order-last lg:order-first">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                                {/* Decorative Blur Behind Tiles */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[80px] rounded-full -z-10" />

                                {[
                                    { label: "CRM Platforms", desc: "Enterprise-ready customer intelligence systems.", icon: Users, color: "text-blue-600", delay: 0 },
                                    { label: "Workflow Automation", desc: "Streamlined cross-department orchestration.", icon: Workflow, color: "text-blue-700", delay: 0.2, className: "lg:translate-y-12" },
                                    { label: "Enterprise Dashboards", desc: "Executive-level visibility & real-time monitoring.", icon: BarChart, color: "text-blue-800", delay: 0.1 },
                                    { label: "BI Systems", desc: "Data modeling and predictive analytics built for decisions.", icon: Activity, color: "text-red-600", delay: 0.3, className: "lg:translate-y-12" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30, rotate: -2 }}
                                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: item.delay, duration: 0.6 }}
                                        whileHover={{ y: -10, rotate: 1, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                                        className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-xl flex flex-col items-start text-left h-full min-h-[180px] ${item.className || ""}`}
                                    >
                                        <div className={`p-3 rounded-xl bg-slate-50 mb-4 ${item.color}`}>
                                            <item.icon className="w-8 h-8" />
                                        </div>
                                        <h4 className="font-black text-slate-900 text-lg mb-2 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>{item.label}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Side - Content & Lifecycle */}
                        <motion.div variants={fadeInRight} className="relative z-10">
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block pl-1"
                            >
                                Product Focus
                            </motion.span>

                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {productFocus?.heading || <>Product Engineering & <br /> SaaS Development</>}
                            </h2>

                            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {productFocus?.subheading || "From concept validation to enterprise-grade scale."}
                            </p>

                            <p className="text-lg text-slate-700 leading-relaxed mb-10 font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {productFocus?.description || <>VelDurSen builds digital products with long-term architecture in mind. We don’t just ship features — we design <strong className="text-slate-900">scalable SaaS ecosystems</strong> that evolve with your business. Every release is structured for reliability, security, and performance under real-world enterprise load.</>}
                            </p>

                            <div className="bg-white/60 backdrop-blur-sm border border-blue-100 rounded-3xl p-8 shadow-sm group hover:border-blue-200 transition-colors duration-300">
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        End-to-End Product Lifecycle Management
                                    </h3>
                                    <p className="text-sm text-slate-500">Structured engineering from idea to long-term evolution.</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 relative">
                                    {/* Vertical Divider */}
                                    <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-100 -translate-x-1/2" />

                                    <div className="space-y-3">
                                        {(productFocus?.features?.length > 0 ? productFocus.features.slice(0, 3) : ["Product Discovery", "Scalable Development", "Performance Optimization"]).map((item: string, i: number) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + (i * 0.1) }}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                                                    <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:bg-white transition-colors duration-300" />
                                                </div>
                                                <span className="text-slate-700 font-medium text-sm">{item}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="space-y-3">
                                        {(productFocus?.features?.length > 0 ? productFocus.features.slice(3) : ["System Architecture", "Security Validation 🔐", "Continuous Enhancement 🚀"]).map((item: string, i: number) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + (i * 0.1) }}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                                                    <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:bg-white transition-colors duration-300" />
                                                </div>
                                                <span className="text-slate-700 font-medium text-sm">{item}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Enterprise CRM Use Cases - Redesigned for Premium Excellence */}
            <section className="section-padding bg-[#fdfdff] relative overflow-hidden">
                {/* Decorative background blobs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-100/30 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-blue-100/30 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-green-50/20 rounded-full blur-[150px]" />
                </div>

                <div className="enterprise-container relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeInUp}
                        className="text-center max-w-5xl mx-auto mb-16"
                    >
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-600 to-green-700 font-extrabold text-xl md:text-2xl mb-4 tracking-tight drop-shadow-sm">
                            {expertise?.subheading || "Our Expertise. Your Advantage."}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-8 tracking-tight leading-[1.1]">
                            {expertise?.heading || <>Premium CRM Solutions That <br className="hidden md:block" /> Accelerate Your Business Growth</>}
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto">
                            {expertise?.description || "We deliver end-to-end CRM development, strategy, and digital services crafted to accelerate enterprise growth. Our experienced team combines strategy, creativity, and technology to help you build meaningful products and stay ahead in a competitive market."}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
                        {(expertise?.areas?.length > 0 ? expertise.areas.map((area: any) => ({
                            title: area.title,
                            desc: area.desc,
                            // Cycle through default images/icons if not provided in schema
                            avatar: cardImg1,
                            fluentIcon: crmHealthcare
                        })) : [
                            {
                                title: "Healthcare CRM",
                                desc: "Managing patient engagement, appointment workflows, HIPAA compliance, and analytics securely with cross-region reliability.",
                                avatar: cardImg1,
                                fluentIcon: crmHealthcare
                            },
                            {
                                title: "Financial CRM",
                                desc: "Customer lifecycle management, fraud detection, regulatory dashboards, and real-time reporting for global banking operations.",
                                avatar: cardImg2,
                                fluentIcon: crmFinance
                            },
                            {
                                title: "Retail & E-commerce",
                                desc: "Omnichannel tracking, personalized engagement, inventory integration, and automated marketing across global markets.",
                                avatar: cardImg3,
                                fluentIcon: crmRetail
                            },
                            {
                                title: "Manufacturing B2B",
                                desc: "Supply chain visibility, dealer network management, demand forecasting, and performance dashboards for large scale industries.",
                                avatar: cardImg4,
                                fluentIcon: crmManufacturing
                            }
                        ]).map((useCase: any, i: number) => (
                            <CRMUseCaseCard key={i} useCase={useCase} index={i} />
                        ))}
                    </div>
                </div>
            </section>



            {/* 5. Intelligent Automation & Transformation */}
            <section className="section-padding bg-red-50/30 border-y border-slate-200">
                <motion.div
                    onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#dc2626' } }))}
                    viewport={{ amount: 0.1 }}
                    className="enterprise-container"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {automation?.heading || <>Intelligent Automation & <span className="text-red-600">Digital Transformation</span></>}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {(automation?.columns?.length > 0 ? automation.columns.map((col: any, idx: number) => ({
                            title: col.title,
                            desc: col.desc,
                            items: col.items || [],
                            Icon: idx === 0 ? Brain : idx === 1 ? RefreshCcw : Globe // Map icons by index
                        })) : [
                            {
                                title: "AI-Driven CRM",
                                desc: "Transforming CRM from data storage into a revenue engine.",
                                items: ["• Predictive Forecasting", "• Lead Scoring Models", "• Behavioral Analytics"],
                                Icon: Brain
                            },
                            {
                                title: "Digital Transformation",
                                desc: "Modernizing legacy systems with strategic rebuilding.",
                                items: ["• Legacy Modernization", "• Cloud Migration", "• Process Automation"],
                                Icon: RefreshCcw
                            },
                            {
                                title: "Global Deployment",
                                desc: "Supporting enterprise ecosystems without disruption.",
                                items: ["• Multi-Timezone Teams", "• 24/7 Technical Support", "• International Scalability"],
                                Icon: Globe
                            }
                        ]).map((col: any, i: number) => (
                            <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <col.Icon className="w-12 h-12 text-red-600 mb-6" />
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{col.title}</h3>
                                <p className="text-slate-600 text-sm mb-4">{col.desc}</p>
                                <ul className="space-y-2 text-sm text-slate-600 font-medium">
                                    {col.items.map((item: string, k: number) => (
                                        <li key={k}>{item.startsWith('•') ? item : `• ${item}`}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* 6. Why Choose & Case Studies Snapshots */}
            <section className="section-padding bg-green-50/20 overflow-visible">
                <div className="enterprise-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                    >
                        <motion.div variants={fadeInLeft} className="lg:col-span-5">
                            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {whyChoose?.heading || <>Why Enterprises <br /> Choose VelDurSen</>}
                            </h2>
                            <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                                <div className="relative z-10 space-y-4">
                                    {(whyChoose?.features?.length > 0 ? whyChoose.features : [
                                        "Architecture-first engineering",
                                        "Security-first design",
                                        "Cloud-native scalability",
                                        "Enterprise-grade reliability",
                                        "Long-term product partnership",
                                        "Strategic business alignment"
                                    ]).map((item: string, i: number) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle className="text-red-500 w-5 h-5 shrink-0" />
                                            <span className="font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Decor */}
                                <div className="absolute right-0 bottom-0 w-32 h-32 bg-green-600 rounded-tl-full opacity-20" />
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInRight} className="lg:col-span-7">
                            <h3 className="text-2xl font-black tracking-tight text-slate-900 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>Case Study Snapshots</h3>
                            <div className="space-y-6">
                                <motion.div whileHover={{ x: 5 }} className="border border-slate-200 p-6 rounded-2xl bg-slate-50 hover:border-red-200 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-black text-lg text-slate-900 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Global FinTech CRM Transformation</h4>
                                        <TrendingUp className="text-green-600 w-5 h-5" />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-center">
                                        <div>
                                            <div className="text-2xl font-black text-slate-900">42%</div>
                                            <div className="text-[10px] uppercase font-bold text-slate-600">Faster Response</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-slate-900">28%</div>
                                            <div className="text-[10px] uppercase font-bold text-slate-600">Lead Conversion</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-slate-900">100%</div>
                                            <div className="text-[10px] uppercase font-bold text-slate-600">Fraud Integrated</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ x: 5 }} className="border border-slate-200 p-6 rounded-2xl bg-slate-50 hover:border-red-200 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-lg text-slate-900">Manufacturing Process Automation</h4>
                                        <Factory className="text-green-600 w-5 h-5" />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-center">
                                        <div>
                                            <div className="text-2xl font-black text-slate-900">35%</div>
                                            <div className="text-[10px] uppercase font-bold text-slate-600">Efficiency Boost</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-slate-900">Yes</div>
                                            <div className="text-[10px] uppercase font-bold text-slate-600">Predictive Maint.</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-slate-900">Real-time</div>
                                            <div className="text-[10px] uppercase font-bold text-slate-600">Supply Chain</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 7. Performance Metrics & Engineering Culture */}




            {/* 10. Industry-Specific CRM Accelerators - Circular Interactive Carousel */}
            <AcceleratorSection data={accelerators} />
            {/* 11. Enterprise Product Innovation Framework - 3D Car Animation */}
            <section className="section-padding bg-orange-50/20 overflow-hidden">
                <div className="enterprise-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeInUp}
                        className="text-center max-w-4xl mx-auto mb-8"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6">
                            Enterprise Product Innovation <span className="text-orange-600">Framework</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">Structured Software Engineering for Long-Term Scalability.</p>
                    </motion.div>

                    <div className="relative overflow-visible -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 flex flex-col gap-8 pt-8 pb-8">
                        {/* The Path Container */}
                        <div className="relative w-full h-3 bg-slate-100 rounded-full shadow-inner overflow-hidden shrink-0">
                            {/* Background Pulse */}
                            <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-slate-200"
                            />

                            {/* The Filling Color Line */}
                            <motion.div
                                initial={{ width: "0%", left: 0 }}
                                animate={{
                                    width: ["0%", "100%", "100%"],
                                    left: ["0%", "0%", "100%"]
                                }}
                                transition={{
                                    duration: 4,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    times: [0, 0.5, 1]
                                }}
                                className="absolute top-0 h-full bg-gradient-to-r from-orange-500 via-red-500 to-blue-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                            />

                            {/* Moving Glow Particle */}
                            <motion.div
                                animate={{ x: ["-10%", "110%"] }}
                                transition={{
                                    duration: 4,
                                    ease: "linear",
                                    repeat: Infinity
                                }}
                                className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 z-10"
                            />
                        </div>

                        {/* The Dropping Cards Container - Synced with High Speed */}
                        <div className="w-full px-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                            {[
                                { step: "01", title: "Blueprinting", icon: Code },
                                { step: "02", title: "Microservices", icon: Server },
                                { step: "03", title: "Secure DevOps", icon: Shield },
                                { step: "04", title: "Rollouts", icon: Rocket },
                                { step: "05", title: "Iteration", icon: RefreshCcw }
                            ].map((phase, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: -50, scale: 0.5 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.2 + (i * 0.15), duration: 0.3, type: "spring", stiffness: 200 }}
                                    className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-lg relative z-0"
                                >
                                    <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xs">
                                        {phase.step}
                                    </div>
                                    <phase.icon className="w-6 h-6 text-red-600 mx-auto mb-2" />
                                    <h3 className="font-bold text-slate-900 text-xs md:text-sm">{phase.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 12. Global Delivery & Technology Centers - Cyber-Network Visualization */}
            <section className="section-padding bg-[#020617] relative overflow-hidden">
                {/* Cyber Grid Background */}
                <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent"></div>

                <div className="enterprise-container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        {/* Map / Node Visualization side */}
                        <div className="lg:col-span-7 relative h-[450px] md:h-[600px] flex items-center justify-center">
                            {/* Abstract Orbiting Nodes */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-white/5 rounded-full"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full blur-[2px] shadow-[0_0_15px_#3b82f6]" />
                                    <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-indigo-500 rounded-full blur-[2px] shadow-[0_0_10px_#6366f1]" />
                                </motion.div>
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] border border-white/5 rounded-full"
                                >
                                    <div className="absolute top-1/4 right-0 w-2 h-2 bg-emerald-500 rounded-full blur-[1px]" />
                                </motion.div>
                            </div>

                            {/* Center Pulse */}
                            <div className="relative z-10">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"
                                />
                                <Globe className="w-24 h-24 md:w-32 md:h-32 text-white/90 relative z-10" />
                            </div>

                            {/* Floating Regional Badges */}
                            <div className="absolute inset-0">
                                {[
                                    { name: "North America", className: "top-[10%] left-[5%] md:top-[15%] md:left-[10%]", delay: 0 },
                                    { name: "Europe", className: "top-[15%] right-[5%] md:top-[20%] md:right-[15%]", delay: 0.2 },
                                    { name: "Asia-Pacific", className: "bottom-[20%] right-[2%] md:bottom-[25%] md:right-[5%]", delay: 0.4 },
                                    { name: "Middle East", className: "top-[48%] right-[2%] md:top-[50%] md:right-[20%]", delay: 0.6 },
                                    { name: "Latin America", className: "bottom-[10%] left-[5%] md:bottom-[15%] md:left-[20%]", delay: 0.8 },
                                ].map((region, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: region.delay }}
                                        className={`absolute group cursor-pointer pointer-events-auto ${region.className}`}
                                    >
                                        <div className="flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl group-hover:bg-white/10 group-hover:border-blue-500/50 transition-all duration-300">
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] animate-pulse" />
                                            <span className="text-white/80 font-black text-[9px] md:text-xs uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>{region.name}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Text Content side */}
                        <div className="lg:col-span-5 relative">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                variants={fadeInRight}
                            >
                                <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-black uppercase tracking-[0.2em] text-[10px] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>Global Presence</span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1]" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Global Delivery Ecosystem <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">24/7 Connectivity</span>
                                </h2>
                                <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 font-medium">
                                    Our distributed technology centers enable <span className="text-white italic">"Follow-the-Sun"</span> engineering cycles, ensuring uninterrupted innovation benchmarks and rapid response scalability across every timezone.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "Sustained Operational Uptime", desc: "Redundant governance ensuring system continuity." },
                                        { title: "Localized Compliance Hubs", desc: "Data residency and regional regulatory alignment." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-6 group">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 transition-colors">
                                                <Zap className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black text-white mb-1 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>{item.title}</h4>
                                                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 14. CRM Migration & Modernization - Technical Transformation */}
            <section className="section-padding bg-white relative overflow-visible">
                <motion.div
                    onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#65a30d' } }))}
                    viewport={{ amount: 0.1 }}
                    className="enterprise-container relative z-10"
                >
                    {/* Blueprint Background */}
                    <svg className="absolute top-0 right-0 w-[800px] h-[800px] text-slate-50 opacity-[0.4] pointer-events-none" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                        <circle cx="80" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="0.2" />
                        <line x1="80" y1="5" x2="80" y2="35" stroke="currentColor" strokeWidth="0.1" />
                        <line x1="65" y1="20" x2="95" y2="20" stroke="currentColor" strokeWidth="0.1" />
                    </svg>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={fadeInLeft}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-100 rounded-lg text-lime-700 font-black uppercase tracking-widest text-[10px] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                                <span className="flex h-2 w-2 rounded-full bg-lime-600 animate-pulse"></span>
                                Modernization Framework
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-black text-slate-950 mb-8 tracking-tighter leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Modernize. <br />
                                <span className="text-lime-600">Don't Just Migrate.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-12">
                                We re-engineer monolithic structures into high-velocity microservices. Our focus is structural resilience, not just digital lift-and-shift.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { title: "Legacy Re-Arch", icon: Server },
                                    { title: "AI Integration", icon: Brain },
                                    { title: "Data Elasticity", icon: Database },
                                    { title: "Zero-Loss Protocol", icon: Shield }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-lime-600 transition-colors">
                                            <item.icon className="w-5 h-5 text-slate-400 group-hover:text-white" />
                                        </div>
                                        <span className="font-black text-slate-900 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={scaleUp}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-lime-500 to-emerald-500" />

                                <div className="flex justify-between items-center mb-10">
                                    <div className="space-y-1">
                                        <h3 className="text-white font-bold text-xl">Operational KPI Uplift</h3>
                                        <p className="text-slate-400 text-xs uppercase tracking-widest">Validation Metrics Q1-Q4</p>
                                    </div>
                                    <TrendingUp className="w-8 h-8 text-lime-500" />
                                </div>

                                <div className="space-y-10">
                                    {[
                                        { label: "Cost Reduction", value: 48, color: "from-lime-400 to-lime-600" },
                                        { label: "Engineering Agility", value: 72, color: "from-emerald-400 to-emerald-600" }
                                    ].map((m, i) => (
                                        <div key={i} className="space-y-3">
                                            <div className="flex justify-between items-end">
                                                <span className="text-white/80 font-black tracking-tight text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{m.label}</span>
                                                <span className="text-3xl font-black text-white tracking-tighter" style={{ fontFamily: "'Inter', sans-serif" }}>{m.value}%</span>
                                            </div>
                                            <div className="h-4 bg-white/10 rounded-full overflow-hidden p-1">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${m.value}%` }}
                                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + (i * 0.2) }}
                                                    className={`h-full bg-gradient-to-r ${m.color} rounded-full flex items-center justify-end px-2`}
                                                >
                                                    <div className="h-1 w-1 bg-white rounded-full shadow-[0_0_8px_#fff]" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between opacity-50">
                                    <div className="flex gap-2">
                                        {[1, 2, 3].map(dot => <div key={dot} className="w-1.5 h-1.5 rounded-full bg-white/30" />)}
                                    </div>
                                    <span className="text-[10px] text-white uppercase tracking-[0.3em]">Verified Transformation</span>
                                </div>
                            </div>

                            {/* Decorative Floating Card */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-lime-50 flex items-center justify-center">
                                        <RefreshCcw className="w-6 h-6 text-lime-600 animate-spin-slow" />
                                    </div>
                                    <div>
                                        <div className="text-slate-900 font-black text-lg leading-none">Automated</div>
                                        <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">Refactoring Engine</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* 15 & 16. Customer Success & Enterprise Compliance - Bento Grid Resilience */}
            <section className="section-padding bg-slate-50 relative overflow-visible">
                <div className="enterprise-container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* Success Header Box */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={fadeInUp}
                            className="lg:col-span-8 bg-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-center"
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 tracking-tighter leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Beyond Deployment. <br />
                                <span className="text-blue-600">Continuous Evolution.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                                We don’t just launch platforms; we nurture ecosystems. Our success engineering model ensures your CRM assets appreciate in value over time.
                            </p>
                        </motion.div>

                        {/* Compliance Box - Dark Metal */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={fadeInRight}
                            className="lg:col-span-4 bg-[#0a0f1e] text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -z-0" />
                            <Lock className="w-12 h-12 text-blue-500 mb-8 relative z-10" />
                            <h3 className="text-2xl font-black mb-4 relative z-10 text-white">
                                Enterprise <br />
                                <span className="text-blue-400">Compliance</span>
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-10 relative z-10">
                                Banking-grade security embedded at the system architecture level.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                                {["GDPR", "CCPA", "SOC2", "ISO 27001"].map((c, i) => (
                                    <div key={i} className="py-2.5 px-3 bg-white/5 border border-white/10 rounded-xl text-center text-xs font-bold hover:bg-white/10 transition-colors">
                                        {c}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Success Components - Bento items */}
                        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {[
                                { title: "Dedicated Audits", desc: "Quarterly performance and logic stress tests.", color: "bg-blue-50", icon: Activity },
                                { title: "Enhancement Strategy", desc: "Roadmaps for feature evolution and AI scaling.", color: "bg-indigo-50", icon: RefreshCcw },
                                { title: "Scalability Assessment", desc: "Ensuring infrastructure anticipates global growth.", color: "bg-sky-50", icon: ArrowRight }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className={`${item.color} p-8 rounded-[2rem] border border-transparent hover:border-blue-200 transition-all duration-300 group`}
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6 text-slate-900" />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-950 mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 17. Strategic Consulting & 18. Thought Leadership - Advisory Intelligence */}
            <section className="section-padding bg-white relative overflow-visible">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-6 translate-x-12"></div>

                <div className="enterprise-container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                variants={fadeInLeft}
                            >
                                <div className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>Advisory & Leadership</div>
                                <h2 className="text-4xl lg:text-5xl font-black text-slate-950 mb-8 tracking-tighter leading-[1]" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Strategic <br />
                                    <span className="text-indigo-600">Consulting.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                                    We align multi-decade technology roadmaps with immediate business performance, navigating the complexity of global digital transformation.
                                </p>

                                <div className="relative p-8 bg-slate-950 rounded-[2rem] text-white overflow-hidden group">
                                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-colors" />
                                    <h4 className="text-2xl font-black mb-4 relative z-10 text-white tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>Visionary Execution</h4>
                                    <p className="text-slate-200 text-base leading-relaxed relative z-10 font-medium opacity-90">
                                        "Strategy is useless without the engineering depth to execute it. VelDurSen bridges that gap."
                                    </p>
                                    <div className="mt-8 flex items-center gap-4 relative z-10">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                                        <div>
                                            <div className="text-xs font-bold text-white uppercase tracking-widest">Office of the CTO</div>
                                            <div className="text-[10px] text-slate-400 font-bold">Advisory Council</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-1" />

                        <div className="lg:col-span-6 grid grid-cols-1 gap-6">
                            {[
                                { title: "Digital Strategy", desc: "Restructuring digital operations for risk resilience.", icon: PieChart, color: "bg-blue-500" },
                                { title: "CRM Transformation", desc: "Enterprise-wide adoption roadmaps and optimization.", icon: Workflow, color: "bg-indigo-600" },
                                { title: "AI Integration", desc: "Strategic implementation of predictive models.", icon: Brain, color: "bg-purple-600" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group flex items-start gap-8 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-500"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black text-slate-950 mb-3 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>{item.title}</h3>
                                        <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Future Vision & CTA (Original preserved as Final) */}
            {/* 19. Enterprise CRM Architecture Blueprint - Engineering Schematic */}
            <section className="section-padding bg-[#0f172a] relative overflow-visible">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="enterprise-container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={fadeInLeft}
                        >
                            <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block" style={{ fontFamily: "'Inter', sans-serif" }}>Core Blueprint v2.0</span>
                            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                                Engineered for <br />
                                <span className="text-blue-500">High Performance.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12 font-medium">
                                Before code, we architect. Our systems are mapped to navigate global regulatory complexity and extreme operational load.
                            </p>

                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { t: "Domain-Driven Core", d: "Functional decomposition for agility." },
                                    { t: "API-First Orchestration", d: "Seamless enterprise elasticity." },
                                    { t: "Secure Data Mesh", d: "Distributed compliance & residency." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeInUp}
                                        className="flex items-center gap-6 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all transition-colors cursor-default"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                                        </div>
                                        <div>
                                            <div className="font-black text-white tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>{item.t}</div>
                                            <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">{item.d}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={scaleUp}
                            className="relative"
                        >
                            {/* Visual Architecture Stack */}
                            <div className="space-y-4">
                                {[
                                    { label: "Global Experience Layer", color: "bg-blue-600", text: "React / Flutter / Next.js", delay: 0 },
                                    { label: "Business Integrity Layer", color: "bg-indigo-600", text: "Node / Python / Rust Core", delay: 0.2 },
                                    { label: "Persistence & Governance", color: "bg-slate-800", text: "PostgreSQL / Redis / AWS", delay: 0.4 }
                                ].map((layer, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: layer.delay, duration: 0.8 }}
                                        className="group relative"
                                    >
                                        <div className={`p-8 rounded-[2rem] ${layer.color} border border-white/10 shadow-2xl relative overflow-hidden`}>
                                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                                <Layers className="w-12 h-12 text-white" />
                                            </div>
                                            <div className="relative z-10">
                                                <h4 className="text-white font-black text-xl mb-1 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>{layer.label}</h4>
                                                <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">{layer.text}</p>
                                            </div>
                                        </div>
                                        {i < 2 && (
                                            <div className="h-4 flex justify-center">
                                                <div className="w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-transparent" />
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 20. Digital Revenue Acceleration Framework - High Velocity Engine */}
            <section className="section-padding bg-slate-50 relative overflow-visible">
                <div className="enterprise-container">
                    <div className="flex flex-col lg:flex-row gap-16 items-end mb-12">
                        <div className="max-w-3xl">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                variants={fadeInUp}
                            >
                                <span className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block" style={{ fontFamily: "'Inter', sans-serif" }}>Commercial Resilience</span>
                                <h2 className="text-4xl lg:text-6xl font-black text-slate-950 mb-6 tracking-tighter leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Revenue <br />
                                    <span className="text-indigo-600">Acceleration.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                                    We transform CRMs from passive databases into active revenue engines, using intelligence to compress sales cycles and expand lifetime value.
                                </p>
                            </motion.div>
                        </div>
                        <div className="lg:ml-auto">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="px-8 py-4 bg-slate-950 text-white rounded-2xl flex items-center gap-4 cursor-default shadow-xl"
                            >
                                <TrendingUp className="text-indigo-400 w-6 h-6" />
                                <div className="text-xs font-bold uppercase tracking-widest">Avg. LTV Growth: <span className="text-indigo-400 font-black text-sm">+24%</span></div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: "Predictive Growth", icon: BarChart, text: "AI-powered forecasting to anticipate market shifts.", gradient: "from-blue-600 to-indigo-600" },
                            { label: "Cycle Velocity", icon: Zap, text: "Automated trigger points to compress sales duration.", gradient: "from-indigo-600 to-purple-600" },
                            { label: "Retention Intelligence", icon: Users, text: "Proactive churn mitigation and upsell logic.", gradient: "from-purple-600 to-pink-600" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -12 }}
                                className="relative group p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-5 -mr-12 -mt-12 rounded-full transition-all group-hover:opacity-10 group-hover:scale-150 duration-700`} />
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-8 shadow-lg`}>
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-950 mb-4 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>{item.label}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8">
                                    {item.text}
                                </p>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 21. Product Engineering Labs - The Industrial Forge */}
            <section className="section-padding bg-[#020617] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

                <div className="enterprise-container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={fadeInLeft}
                            className="lg:col-span-8 relative z-10"
                        >
                            <div className="w-12 h-1 bg-red-600 mb-8" />
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-8 leading-[1.1] tracking-tighter uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                                <span className="text-slate-200/40 block text-lg mb-1 font-black">Product</span>
                                <span className="text-red-500 block sm:inline">Engineering</span> <span className="text-red-500">Labs.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl font-medium">
                                Where enterprise software is forged. We treat product development as a high-precision engineering discipline — evolving through constant experimentation.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                                {[
                                    { t: "Feature Evolution", d: "Continuous enhancement cycles." },
                                    { t: "AI Experimentation", d: "Predictive model laboratory." },
                                    { t: "Stress Simulations", d: "High-load resilience testing." },
                                    { t: "Neural Scaling", d: "Performance-centric architectures." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">{item.t}</span>
                                            <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{item.d}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                className="bg-slate-900/50 backdrop-blur-sm border border-white/5 p-10 rounded-[3rem] relative overflow-hidden group hover:border-red-500/30 transition-all duration-700"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <Terminal className="w-24 h-24 text-red-600 -rotate-12" />
                                </div>
                                <div className="text-6xl font-black mb-2 tracking-tighter" style={{ fontFamily: "'Inter', sans-serif" }}>50+</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Core Engineers</div>
                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <div className="text-[10px] text-slate-400 uppercase tracking-[0.3em]">Status: Engineering Forge Active</div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-red-600 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group"
                            >
                                <div className="absolute bottom-0 right-0 p-6 opacity-20">
                                    <Zap className="w-24 h-24 text-white rotate-12" />
                                </div>
                                <div className="text-5xl font-black mb-2 text-white tracking-tighter" style={{ fontFamily: "'Inter', sans-serif" }}>Weekly</div>
                                <div className="text-xs font-bold text-red-100 uppercase tracking-widest">Production Deploys</div>
                                <div className="mt-8 pt-8 border-t border-white/10 text-red-100/50 text-xs font-medium">
                                    Accelerated CD/CI pipelines with zero-latency overhead.
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 22. Enterprise Data Command Center - Global Intelligence HUD */}
            <section className="section-padding bg-slate-950 relative">
                <motion.div
                    onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#059669' } }))}
                    viewport={{ amount: 0.1 }}
                    className="enterprise-container"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                variants={fadeInLeft}
                            >
                                <h2 className="text-5xl font-black text-white mb-8 leading-tight tracking-tighter" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Enterprise <br />
                                    <span className="text-emerald-500">Data Command.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 font-medium">
                                    Real-time observability into the core of your commercial operations. We build the interfaces that power executive decisions.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map(u => <div key={u} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800" />)}
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Intelligence Watch</span>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-8">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeInUp}
                                className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                                    {[
                                        { l: "Monitoring", v: "Live", c: "text-emerald-400" },
                                        { l: "Risk Exposure", v: "Low", c: "text-blue-400" },
                                        { l: "Revenue Health", v: "+12.4%", c: "text-emerald-400" },
                                        { l: "Regional Ops", v: "Optimal", c: "text-emerald-400" }
                                    ].map((d, i) => (
                                        <div key={i} className="text-center md:text-left">
                                            <div className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black mb-4">{d.l}</div>
                                            <div className={`text-2xl font-black tracking-tighter ${d.c}`} style={{ fontFamily: "'Inter', sans-serif" }}>{d.v}</div>
                                            <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '70%' }}
                                                    className={`h-full bg-current ${d.c.replace('text-', 'bg-')}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-12 pt-12 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Activity className="w-5 h-5 text-emerald-500 animate-pulse" />
                                        <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Global Telemetry Stream Enabled</span>
                                    </div>
                                    <button className="px-6 py-2 bg-white text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-emerald-500 transition-colors">
                                        Access Cockpit
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 23. Scalable SaaS Infrastructure - Sovereign Cloud */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="enterprise-container relative z-10">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={fadeInLeft}
                            className="flex-1"
                        >
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block" style={{ fontFamily: "'Inter', sans-serif" }}>Elastic Architecture</span>
                            <h2 className="text-4xl lg:text-6xl font-black text-slate-950 mb-8 leading-tight tracking-tighter">
                                Scalable <br />
                                <span className="text-blue-600">Sovereign Cloud.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                                Engineered for millions. Our infrastructure adapts in real-time to operational volatility, ensuring peak performance during hyper-growth phases.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { t: "Global Scaling", d: "Elastic compute resources." },
                                    { t: "Zero-Downtime", d: "Continuous delivery pipelines." }
                                ].map((item, i) => (
                                    <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                                            <Server className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div className="font-black text-slate-950 text-lg mb-1">{item.t}</div>
                                        <div className="text-sm text-slate-500 font-medium">{item.d}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="flex-1 w-full lg:w-auto">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeInRight}
                                className="relative aspect-square max-w-[500px] mx-auto"
                            >
                                <div className="absolute inset-0 bg-blue-600/5 rounded-full animate-pulse" />
                                <div className="absolute inset-10 bg-white rounded-full shadow-2xl border-8 border-slate-50 flex flex-col items-center justify-center text-center">
                                    <div className="text-7xl font-black text-slate-950 tracking-tighter" style={{ fontFamily: "'Inter', sans-serif" }}>99.99<span className="text-blue-600">%</span></div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">SLA Uptime Registry</div>
                                    <div className="mt-8 px-6 py-2 bg-slate-950 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">Enterprise Validated</div>
                                </div>
                                <div className="absolute inset-0 border-2 border-dashed border-blue-200 rounded-full animate-spin-slow" />
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
                                    <Cloud className="w-6 h-6 text-blue-600" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 24. Enterprise Security Operations Alignment - The Obsidian Guard */}
            <section className="section-padding bg-blue-50 text-slate-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <motion.div
                    onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#2563eb' } }))}
                    viewport={{ amount: 0.1 }}
                    className="enterprise-container relative z-10"
                >
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-blue-200">
                                <ShieldCheck className="w-8 h-8 text-blue-600" />
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Banking-Grade <br />
                                <span className="text-blue-600">Obsidian Guard.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                                Security isn’t a feature; it’s the bedrock. We align your CRM operations with global identity governance and AI-driven anomaly detection.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { label: "Identity Governance", icon: UserCheck, desc: "RBAC & Zero Trust." },
                            { label: "Encrypted Transit", icon: Lock, desc: "AES-256 standards." },
                            { label: "Anomaly Detection", icon: Eye, desc: "Real-time AI monitoring." },
                            { label: "Hardened Core", icon: Shield, desc: "System-level resilience." }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeInUp}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 bg-white border border-blue-100 rounded-[2rem] hover:shadow-xl hover:border-blue-300 transition-all duration-500 text-center"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <s.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-black mb-2 text-slate-900 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>{s.label}</h3>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>



            {/* 26. Sustainable Digital Infrastructure - Green Resilience */}
            <section className="section-padding bg-white relative overflow-hidden">
                <motion.div
                    onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#10b981' } }))}
                    viewport={{ amount: 0.1 }}
                    className="enterprise-container"
                >
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-emerald-50/50 rounded-full blur-[120px]"></div>

                    <div className="relative z-10">
                        <div className="max-w-4xl">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                variants={fadeInUp}
                            >
                                <div className="inline-block px-4 py-1.5 bg-emerald-100/50 border border-emerald-200 rounded-full text-emerald-600 font-bold uppercase tracking-widest text-xs mb-8">Green Computing</div>
                                <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-none tracking-tighter text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Sustainable <br />
                                    <span className="text-emerald-600">Resilience.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-16 font-medium max-w-2xl">
                                    We optimize infrastructure not just for speed, but for efficiency. Reducing the carbon footprint of global CRM operations through intelligent orchestration.
                                </p>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { label: "Energy Optimization", v: "-32%", d: "Carbon footprint reduction." },
                                { label: "Hardware Life", v: "+48%", d: "Extended server utility." },
                                { label: "Green Orchestration", v: "Active", d: "Intelligent resource allocation." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={scaleUp}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 bg-emerald-50/50 border border-emerald-100/50 rounded-[3rem] hover:bg-emerald-100/50 transition-all duration-500 overflow-hidden relative group"
                                >
                                    <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Leaf className="w-32 h-32 text-emerald-600" />
                                    </div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>{item.label}</div>
                                    <div className="text-5xl font-black text-emerald-600 mb-2 tracking-tighter" style={{ fontFamily: "'Inter', sans-serif" }}>{item.v}</div>
                                    <div className="text-sm text-slate-600 font-medium">{item.d}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>









            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full max-h-[80vh] flex items-center justify-center pointer-events-none"
                        >
                            <div className="relative pointer-events-auto">
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors p-2"
                                >
                                    <X size={32} />
                                </button>
                                <img
                                    src={selectedImage}
                                    alt="Full view"
                                    className="max-w-full max-h-[70vh] rounded-lg shadow-2xl object-contain"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};



