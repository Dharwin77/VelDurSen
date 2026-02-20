import { motion, useInView, AnimatePresence, Variants, useScroll, useTransform } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
    ArrowRight, Brain, Cloud, Shield, Database, Code, Leaf,
    Heart, Landmark, Factory, ShoppingCart, Building2, Sprout,
    CheckCircle, Globe, Users, Server, Zap, TrendingUp, Globe2,
    Award, Building, Wheat, GraduationCap, Sparkles, Check,
    Linkedin, Twitter, Mail, Trophy, MapPin, Calendar, Bookmark, BarChart3, Briefcase, Lightbulb, Layers, BarChart, Lock, Gauge,
    Rocket, Target, CheckCircle2, X, ArrowDown
} from "lucide-react";
import { achievementsData } from "@/data/achievements";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";
import { EnterpriseCRMContent } from "./HomeExtraContent";
import DeliveredOutcomes from "@/components/DeliveredOutcomes";
import DomeGallery from "@/components/DomeGallery";
import { SEO } from "@/components/shared/SEO";
import GlareHover from "@/components/shared/GlareHover";
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from "@/data/schemas";
import { client, urlFor } from "@/lib/sanity";
import RenderSections from "@/components/RenderSections";
import OurStory from "@/components/sections/OurStory";
import Hero from "@/components/sections/Hero";
import GlobalOperations from "@/components/sections/GlobalOperations";
import RapidSupport from "@/components/sections/RapidSupport";
import TrustedPartners from "@/components/sections/TrustedPartners";
import WhatWeAreUpto from "@/components/sections/WhatWeAreUpto";
import WhatWeProvide from "@/components/sections/WhatWeProvide";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import heroBg from "@/assets/hero-bg.jpg";
import aboutTeam from "@/assets/coptercode3.png.jpeg";
import aboutImage1 from "@/assets/coptercode1.png.jpeg";
import aboutImage2 from "@/assets/coptercode2.jpeg";
import copter3 from "@/assets/coptercode3.png.jpeg";
import copter4 from "@/assets/coptercode4.png.jpeg";
import copter5 from "@/assets/coptercode5.png.jpeg";
import copter6 from "@/assets/coptercode6.png.jpeg";
import copter7 from "@/assets/coptercode7.png.jpeg";
import copter8 from "@/assets/coptercode8.png.jpeg";
import copter9 from "@/assets/coptercode9.png.jpeg";
import copter10 from "@/assets/coptercode10.png.jpeg";
import copter11 from "@/assets/coptercode11.png.jpeg";
import copter12 from "@/assets/coptercode12.png.jpeg";
import copter13 from "@/assets/coptercode13.png.jpeg";
import copter14 from "@/assets/coptercode14.png.jpeg";
import globalMap from "@/assets/global-map.jpg";
import backgroundImage from "@/assets/home.jpeg";
import img1 from "@/assets/coptercode11.png.jpeg";
import img2 from "@/assets/coptercode12.png.jpeg";
import profile1 from "@/assets/profile1.png";
import profile2 from "@/assets/profile2.png";
import profile3 from "@/assets/profile3.png";
import profile4 from "@/assets/profile4.png";
import profile5 from "@/assets/profile5.png";
import highlight1 from "@/assets/coptercode9.png.jpeg";
import highlight2 from "@/assets/coptercode10.png.jpeg";
import supportBg from "@/assets/coptercode5.png.jpeg";
import partner1 from "@/assets/partner1.png";
import partner2 from "@/assets/partner2.png";
import partner3 from "@/assets/partner3.png";
import partner4 from "@/assets/partner4.png";
import partner5 from "@/assets/partner5.png";
import partner6 from "@/assets/partner6.png";
import partner7 from "@/assets/partner7.png";
import partner8 from "@/assets/partner8.png";
import footerVideo from "@/assets/footer_above.mp4";
import founder1 from "@/assets/founder1.png";
import founder2 from "@/assets/founder2.png";
import founder3 from "@/assets/founder3.png";
import logo from "@/assets/logo.png";

// Icon Map for Dynamic Icons
const iconMap: any = {
    ArrowRight, Brain, Cloud, Shield, Database, Code, Leaf,
    Heart, Landmark, Factory, ShoppingCart, Building2, Sprout,
    CheckCircle, Globe, Users, Server, Zap, TrendingUp, Globe2,
    Award, Building, Wheat, GraduationCap, Sparkles, Check,
    Linkedin, Twitter, Mail, Trophy, MapPin, Calendar, Bookmark, BarChart3, Briefcase, Lightbulb, Layers, BarChart, Lock, Gauge,
    Rocket, Target, CheckCircle2, X, ArrowDown
};

const getIcon = (iconName: string) => {
    return iconMap[iconName] || Code; // Default to Code icon if not found
};

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

const zoomIn: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut" } }
};

const rotateIn: Variants = {
    hidden: { opacity: 0, rotate: -5, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } }
};

const clipReveal: Variants = {
    hidden: { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
    visible: { clipPath: "circle(150% at 50% 50%)", opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } }
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

// Counter Animation Component
const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    // Extract numeric value and handle different formats
    const parseValue = (val: string) => {
        // Handle percentage values
        if (val.includes('%')) {
            return { numeric: parseFloat(val.replace(/[^0-9.]/g, '')), suffix: '%', isDecimal: val.includes('.') };
        }
        // Handle values with + suffix
        if (val.includes('+')) {
            return { numeric: parseFloat(val.replace(/[^0-9.]/g, '')), suffix: '+', isDecimal: val.includes('.') };
        }
        // Handle 24/7 format
        if (val.includes('/')) {
            return { numeric: 0, suffix: val, isDecimal: false, isSpecial: true };
        }
        // Handle M+ values (millions)
        if (val.includes('M+')) {
            return { numeric: parseFloat(val.replace(/[^0-9.]/g, '')), suffix: 'M+', isDecimal: val.includes('.') };
        }
        // Handle K+ values (thousands)  
        if (val.includes('K+')) {
            return { numeric: parseFloat(val.replace(/[^0-9.]/g, '')), suffix: 'K+', isDecimal: val.includes('.') };
        }
        // Default numeric extraction
        return { numeric: parseFloat(val.replace(/[^0-9.]/g, '')), suffix: '', isDecimal: val.includes('.') };
    };

    const { numeric: numericValue, suffix: valueSuffix, isDecimal, isSpecial } = parseValue(value);

    useEffect(() => {
        if (!isInView || isSpecial) return;

        let start = 0;
        const end = numericValue;
        const duration = 2000; // 2 seconds
        const incrementTime = 20; // Update every 20ms
        const steps = duration / incrementTime;
        const increment = end / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [isInView, numericValue, isSpecial]);

    if (isSpecial) {
        return <span ref={ref}>{value}</span>;
    }

    const displayValue = isDecimal ? count.toFixed(1) : Math.floor(count);

    return (
        <span ref={ref}>
            {displayValue}{valueSuffix}{suffix}
        </span>
    );
};

// Default Data (Fallbacks)




const globalMetrics = [
    { value: "50+", label: "Countries Served", sublabel: "Worldwide operations" },
    { value: "500+", label: "Enterprise Clients", sublabel: "Global Fortune 500 & beyond" },
    { value: "99.9%", label: "System Uptime", sublabel: "Mission-critical reliability" },
    { value: "24/7", label: "Global Support", sublabel: "Follow-the-sun delivery" },
];

const secondaryMetrics = [
    { value: "1000+", label: "Projects Delivered" },
    { value: "50M+", label: "Users Supported Daily" },
    { value: "100%", label: "Compliance Record" },
    { value: "3,500+", label: "Engineers Worldwide" },
];

const milestones = [
    {
        year: "2018",
        title: "Foundation of VelDurSen",
        desc: "VelDurSen was established with a vision to build secure, scalable, and AI-driven enterprise technology solutions. Focus on enterprise-grade web applications and digital transformation consulting.",
        icon: Rocket,
        image: aboutTeam,
        pos: "right",
        y: 0,
        yearColor: "text-blue-500",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50"
    },
    {
        year: "2019",
        title: "Enterprise Software Expansion",
        desc: "Expanded into custom ERP & CRM systems and scalable web platforms. Successfully delivered multiple enterprise-grade solutions across early industry partners.",
        icon: Code,
        image: img1,
        pos: "left",
        y: 300,
        yearColor: "text-blue-500",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50"
    },
    {
        year: "2020",
        title: "Cloud & DevOps Integration",
        desc: "Introduced cloud-native engineering: Multi-cloud architecture (AWS/Azure-style), CI/CD pipelines, and Kubernetes-based container orchestration. Shifted toward resilient systems.",
        icon: Cloud,
        image: highlight1,
        pos: "right",
        y: 600,
        yearColor: "text-sky-500",
        iconColor: "text-sky-600",
        iconBg: "bg-sky-50"
    },
    {
        year: "2021",
        title: "Cybersecurity & Compliance",
        desc: "Launched a dedicated cybersecurity vertical. Implemented Zero-trust frameworks, identity & access management, and regulatory-compliant infrastructure. Security became a core foundation.",
        icon: Shield,
        image: img2,
        pos: "left",
        y: 900,
        yearColor: "text-red-500",
        iconColor: "text-red-600",
        iconBg: "bg-red-50"
    },
    {
        year: "2022",
        title: "AI & Data Engineering Adoption",
        desc: "Transitioned into an AI-first company. Introduced Generative AI solutions, predictive analytics, computer vision, and real-time data engineering pipelines across workflows.",
        icon: Brain,
        image: aboutImage2,
        pos: "right",
        y: 1200,
        yearColor: "text-blue-500",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50"
    },
    {
        year: "2023",
        title: "Industry-Wise Specialization",
        desc: "Expanded into Healthcare, FinTech, Manufacturing, Retail, Smart Cities, and AgriTech. Built domain-specific technology frameworks for enterprise verticals.",
        icon: Building2,
        image: highlight2,
        pos: "left",
        y: 1500,
        yearColor: "text-green-500",
        iconColor: "text-green-600",
        iconBg: "bg-green-50"
    },
    {
        year: "2024",
        title: "Global Delivery & Workforce Growth",
        desc: "Expanded operations internationally with multi-region project execution and global collaboration models. Infrastructure handling extremely large user bases.",
        icon: Globe,
        image: globalMap,
        pos: "right",
        y: 1800,
        yearColor: "text-blue-500",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50"
    },
    {
        year: "2025",
        title: "Sustainable & Future-Ready Innovation",
        desc: "Integrated sustainability into transformation. Focused on carbon-aware cloud systems, ethical AI governance, and green computing frameworks. Positioned as a Green Tech Enterprise.",
        icon: Leaf,
        image: aboutImage1,
        pos: "left",
        y: 2100,
        yearColor: "text-green-500",
        iconColor: "text-green-600",
        iconBg: "bg-green-50"
    }
];



const Index = () => {
    const location = useLocation();
    const [scrollY, setScrollY] = useState(false);
    const [selectedMilestone, setSelectedMilestone] = useState<typeof milestones[0] | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.5"]
    });

    const [sanityData, setSanityData] = useState<any>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const scrollToElement = (id: string) => {
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        };

        if (location.hash) {
            scrollToElement(location.hash.slice(1));
        } else if (location.state?.scrollTo) {
            scrollToElement(location.state.scrollTo);
        }
    }, [location]);

    // Consolidate Query for ALL Sections
    useEffect(() => {
        const query = `{
      "timestamp": "${Date.now()}",
      "hero": *[_type == "homeHero"] | order(_updatedAt desc)[0],
      "ticker": *[_type == "homeSection1"] | order(_updatedAt desc)[0],
      "connectivity": *[_type == "homeSection2"] | order(_updatedAt desc)[0],
      "ourStory": *[_type == "homeSection3"] | order(_updatedAt desc)[0],
      "talent": *[_type == "homeSection4"] | order(_updatedAt desc)[0],
      "partners": *[_type == "homeSection5"] | order(_updatedAt desc)[0],
      "highlights": *[_type == "homeSection6"] | order(_updatedAt desc)[0],
      "whatWeProvide": *[_type == "homeSection7"] | order(_updatedAt desc)[0],
      "excellence": *[_type == "homeSection8"] | order(_updatedAt desc)[0],
      "achievements": *[_type == "homeSection9"] | order(_updatedAt desc)[0],
      "growth": *[_type == "homeSection10"] | order(_updatedAt desc)[0],
      "deploymentMilestones": *[_type == "homeSection11"] | order(_updatedAt desc)[0],
      "chronicle": *[_type == "homeSection12"] | order(_updatedAt desc)[0],
      "outcomes": *[_type == "homeSection13"] | order(_updatedAt desc)[0],
      "crm": *[_type == "homeSection14"] | order(_updatedAt desc)[0],
      "expertise": *[_type == "homeSection15"] | order(_updatedAt desc)[0],
      "automation": *[_type == "homeSection16"] | order(_updatedAt desc)[0],
      "whyChoose": *[_type == "homeSection17"] | order(_updatedAt desc)[0],
      "industries": *[_type == "homeSection18"] | order(_updatedAt desc)[0],
      "innovation": *[_type == "homeSection19"] | order(_updatedAt desc)[0],
      "productFocus": *[_type == "homeSection20"] | order(_updatedAt desc)[0],
      "crmCases": *[_type == "homeSection21"] | order(_updatedAt desc)[0],
      "intelligentAuto": *[_type == "homeSection22"] | order(_updatedAt desc)[0],
      "whyChooseCases": *[_type == "homeSection23"] | order(_updatedAt desc)[0],
      "accelerators": *[_type == "homeSection24"] | order(_updatedAt desc)[0],
      "innFramework": *[_type == "homeSection25"] | order(_updatedAt desc)[0],
      "globalDelivery": *[_type == "homeSection26"] | order(_updatedAt desc)[0],
      "modernization": *[_type == "homeSection27"] | order(_updatedAt desc)[0],
      "beyondDeployment": *[_type == "homeSection28"] | order(_updatedAt desc)[0],
      "advisory": *[_type == "homeSection29"] | order(_updatedAt desc)[0],
      "coreBlueprint": *[_type == "homeSection30"] | order(_updatedAt desc)[0],
      "commResilience": *[_type == "homeSection31"] | order(_updatedAt desc)[0],
      "engLabs": *[_type == "homeSection32"] | order(_updatedAt desc)[0],
      "dataCommand": *[_type == "homeSection33"] | order(_updatedAt desc)[0],
      "elasticArch": *[_type == "homeSection34"] | order(_updatedAt desc)[0],
      "bankingGrade": *[_type == "homeSection35"] | order(_updatedAt desc)[0],
      "greenComputing": *[_type == "homeSection36"] | order(_updatedAt desc)[0],
      "founders": *[_type == "homeSection37"] | order(_updatedAt desc)[0],
      "gallery": *[_type == "homeSection38"] | order(_updatedAt desc)[0],
      "assistance": *[_type == "homeSection39"] | order(_updatedAt desc)[0],
      "video": *[_type == "homeSection40"] | order(_updatedAt desc)[0],
      "testimonials": *[_type == "homeSection41"] | order(_updatedAt desc)[0]
    }`;

        client.fetch(query).then((data) => {
            console.log("Sanity Data Fetched for Index:", data);
            if (data) {
                setSanityData(data);
            }
        }).catch(console.error);
    }, []);


    return (
        <PageLayout>
            <SEO
                title={sanityData?.hero?.heading || "VelDurSen - Enterprise Technology Solutions"}
                description={sanityData?.hero?.description || "Building secure, scalable, and AI-driven enterprise technology solutions."}
            />
            <div className="bg-slate-50 min-h-screen">

                {/* 1. HERO SECTION */}
                <Hero
                    data={sanityData?.hero}
                    tickerData={sanityData?.ticker}
                />

                {/* 2. GLOBAL OPERATIONS (CONNECTIVITY) */}
                <GlobalOperations
                    data={{
                        ...sanityData?.connectivity,
                        metrics: sanityData?.connectivity?.metrics || globalMetrics // Fallback to hardcoded metrics
                    }}
                />

                {/* 3. OUR STORY */}
                <OurStory data={sanityData?.ourStory} />

                {/* 4. RAPID SUPPORT (TALENT) */}
                <RapidSupport data={sanityData?.talent} />

                {/* 5. TRUSTED PARTNERS */}
                <TrustedPartners data={sanityData?.partners} />

                {/* 6. WHAT WE ARE UP TO (HIGHLIGHTS / METRICS) */}
                <WhatWeAreUpto
                    data={{
                        ...sanityData?.highlights,
                        stats: sanityData?.highlights?.stats || secondaryMetrics // Fallback to hardcoded secondaryMetrics
                    }}
                />

                {/* 7. WHAT WE PROVIDE */}
                <WhatWeProvide data={sanityData?.whatWeProvide} />


                {/* 8. EXCELLENCE BENCHMARKS (ACHIEVEMENTS) */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50" />
                    <motion.div
                        onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#0f172a' } }))}
                        onViewportLeave={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
                        viewport={{ margin: "-10% 0px -70% 0px" }}
                        className="enterprise-container relative z-10"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                            {/* Left Column: Heading */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInLeft}
                                className="lg:col-span-5"
                            >
                                <div className="sticky top-32">
                                    <span className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-black tracking-widest uppercase mb-6">
                                        Excellence Benchmarks
                                    </span>
                                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8">
                                        {sanityData?.excellence?.heading || "Engineering that sets industry standards."}
                                    </h2>
                                    {/* Render description/text with proper fallback */}
                                    {(sanityData?.excellence?.text && sanityData.excellence.text.length > 0) ? (
                                        <div className="text-lg text-slate-600 font-medium leading-relaxed mb-8 space-y-4">
                                            {sanityData.excellence.text.map((txt: string, i: number) => (
                                                <p key={i}>{txt}</p>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                                            {sanityData?.excellence?.description || "VelDurSen’s achievements represent a decade of relentless engineering innovation and architectural integrity. We have successfully deployed mission-critical systems across 150+ countries, earning over 50 global awards for our pioneering work in AI safety and cloud resilience."}
                                        </p>
                                    )}
                                    <Link to="/about" className="group inline-flex items-center gap-3 text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                                        Explore Our Standards <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Right Column: Achievements Grid */}
                            <div className="lg:col-span-7">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {(sanityData?.achievements?.achievements?.length > 0 ? sanityData.achievements.achievements : achievementsData).map((achievement: any, index: number) => {
                                        const IconComp = achievement.icon ? getIcon(achievement.icon) : Trophy; // Dynamic or fallback icon
                                        // Handle missing description/tags if using Sanity data (which matches schema but not frontend expectation)
                                        const displayDesc = achievement.description || (achievement.venue ? `${achievement.category} at ${achievement.venue}` : "Enterprise Excellence Award");
                                        const displayTags = achievement.tags || (achievement.category ? [achievement.category] : []);

                                        // Handle Image URL (Sanity object or local string)
                                        const imageUrl = achievement.image ? (typeof achievement.image === 'string' ? achievement.image : urlFor(achievement.image).url()) : null;

                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-500"
                                            >
                                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden relative">
                                                    {imageUrl ? (
                                                        <img src={imageUrl} alt={achievement.title} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <IconComp className="text-slate-900 w-8 h-8" />
                                                    )}
                                                </div>
                                                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                    {achievement.title}
                                                </h3>
                                                <p className="text-slate-600 font-medium leading-relaxed mb-4">
                                                    {displayDesc}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {displayTags.map((tag: string, i: number) => (
                                                        <span key={i} className="px-2 py-1 bg-slate-100 rounded-md text-[10px] uppercase font-bold text-slate-600">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 9. GROWTH TRAJECTORY */}
                <section className="py-32 bg-slate-900 relative overflow-hidden">
                    <div className="enterprise-container relative z-10 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="mb-16"
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                                {sanityData?.growth?.heading || "Growth Trajectory"}
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            {(sanityData?.growth?.metrics || [
                                { value: "500%", label: "YoY Growth" },
                                { value: "50+", label: "Global Partners" },
                                { value: "100+", label: "Projects Shipped" },
                                { value: "24/7", label: "Active Support" }
                            ]).map((stat: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4 tracking-tighter">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* 10. DEPLOYMENT MILESTONES (CARDS) */}
                <section className="section-padding bg-slate-50">
                    <div className="enterprise-container">
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">
                                {sanityData?.deploymentMilestones?.subtitle || "Deployment Milestones"}
                            </span>
                            <h2 className="text-4xl font-black text-slate-900 mb-6">
                                {sanityData?.deploymentMilestones?.heading || "Engineering at Global Scale"}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {(sanityData?.deploymentMilestones?.cards || [
                                { title: "Cloud Architecture", desc: "Scalable infrastructure for minimal latency.", icon: "Cloud" },
                                { title: "Security First", desc: "Zero-trust protocols embedded at the core.", icon: "Shield" },
                                { title: "AI Integration", desc: "Generative models optimization for business logic.", icon: "Brain" }
                            ]).map((card: any, i: number) => {
                                const Icon = card.icon ? getIcon(card.icon) : Server;
                                return (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -10 }}
                                        className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
                                    >
                                        <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                                            <Icon size={28} />
                                        </div>
                                        <h3 className="text-xl font-black text-slate-900 mb-4">{card.title}</h3>
                                        <p className="text-slate-600 leading-relaxed font-medium">{card.desc}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>





                {/* 11. CHRONICLE (TIMELINE) */}
                <section className="py-24 bg-white relative overflow-hidden">
                    {/* Abstract background decorations */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                        <div className="absolute top-[10%] -left-[10%] w-[400px] h-[400px] bg-red-50 rounded-full blur-[120px] opacity-60" />
                        <div className="absolute bottom-[20%] -right-[5%] w-[300px] h-[300px] bg-slate-100 rounded-full blur-[100px] opacity-70" />
                    </div>

                    <div className="enterprise-container relative z-10">
                        <div className="mb-16 text-center">
                            <span className="inline-block text-xs font-black uppercase tracking-[0.2em] mb-4 text-red-600">
                                Chronicle
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
                                {sanityData?.chronicle?.heading || <>Our Journey of <span className="text-red-600">Innovation.</span></>}
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                                {sanityData?.chronicle?.description || "From foundation to global scaling, explore the milestones that defined our evolution."}
                            </p>
                        </div>

                        <div ref={containerRef} className="relative mt-20 max-w-5xl mx-auto px-4 md:px-0">
                            {/* CENTERAL SPINE TIMELINE FLOW */}
                            <div className="relative py-10">
                                {/* Central Spine Line */}
                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200" />
                                <motion.div
                                    className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-red-600 via-orange-500 to-orange-400 origin-top"
                                    style={{ scaleY: scrollYProgress }}
                                />

                                <div className="space-y-24 relative">
                                    {(sanityData?.chronicle?.milestones || milestones).map((m: any, i: number) => {
                                        // Determine styling based on index for alternating layout
                                        const isLeft = i % 2 !== 0; // Index 0 is right (even), Index 1 is left (odd) - matching original logic roughly
                                        // Note: Original hardcoded had specific 'pos' fields. We can infer from index if simple adaptation.
                                        // Or check if 'pos' is in Sanity data? Schema doesn't have 'pos'.
                                        // We will use alternating pattern.

                                        const Icon = m.icon && typeof m.icon === 'string' ? getIcon(m.icon) : (m.icon || Rocket);
                                        const iconBg = i % 2 === 0 ? "bg-blue-50" : "bg-red-50"; // Alternating colors for variety
                                        const iconColor = i % 2 === 0 ? "text-blue-600" : "text-red-600";
                                        const yearColor = i % 2 === 0 ? "text-blue-500" : "text-red-500";
                                        const gradient = i % 2 === 0 ? 'bg-gradient-to-b from-red-500 to-orange-500' : 'bg-gradient-to-b from-blue-500 to-blue-400';

                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 0.7, delay: i * 0.05 }}
                                                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} pl-16 md:pl-0`}
                                            >
                                                {/* Central Node - Dot */}
                                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-[3px] border-red-500 rounded-full z-20 shadow-[0_0_0_4px_rgba(255,255,255,1)] group-hover:scale-150 transition-transform" />

                                                {/* Side A: Year Display (Opposite to Content) */}
                                                <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? 'justify-end text-right' : 'justify-start text-left'}`}>
                                                    <span className="text-[8rem] leading-none font-black text-slate-100 select-none tracking-tighter transition-colors hover:text-slate-200">
                                                        {m.year}
                                                    </span>
                                                </div>

                                                {/* Side B: Content Card */}
                                                <div className="flex-1 w-full md:w-auto z-10">
                                                    <button
                                                        onClick={() => setSelectedMilestone({ ...m, icon: Icon, iconBg, yearColor, iconColor, image: m.image ? (typeof m.image === 'string' ? m.image : urlFor(m.image).url()) : img1 })}
                                                        className="w-full text-left group perspective-1000 outline-none"
                                                    >
                                                        <div className={`relative bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden`}>
                                                            {/* Card Decoration Gradient */}
                                                            <div className={`absolute top-0 left-0 w-1.5 h-full ${gradient}`} />

                                                            {/* Mobile Year Badge */}
                                                            <div className="md:hidden absolute top-6 right-6 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                                                                {m.year}
                                                            </div>

                                                            <div className="flex flex-col gap-6">
                                                                {/* Header with Icon */}
                                                                <div className="flex items-center gap-4">
                                                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBg} ${iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                                                        <Icon size={28} strokeWidth={2} />
                                                                    </div>
                                                                    <div>
                                                                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-500 transition-all">
                                                                            {m.title}
                                                                        </h3>
                                                                    </div>
                                                                </div>

                                                                {/* Description */}
                                                                <p className="text-slate-500 leading-relaxed font-medium line-clamp-3">
                                                                    {m.desc}
                                                                </p>

                                                                {/* Image Preview Strip */}
                                                                <div className="h-32 w-full rounded-xl overflow-hidden relative group-hover:h-40 transition-all duration-500 ease-in-out">
                                                                    <img src={m.image ? (typeof m.image === 'string' ? m.image : urlFor(m.image).url()) : img1} alt={m.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700" />
                                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                        <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-900 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                                                            View Milestone <ArrowRight size={12} />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Timeline Endpoint: "Keep Building" */}
                            <div className="relative mt-24 flex flex-col items-center justify-center text-center">
                                {/* Dashed Line Extension */}
                                <div className="absolute top-[-96px] bottom-1/2 left-1/2 -translate-x-1/2 w-px border-l-2 border-dashed border-slate-300 h-24" />

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative z-10 bg-slate-900 text-white px-8 py-4 rounded-full shadow-2xl shadow-red-500/20 border border-slate-700 group hover:bg-red-600 transition-colors duration-300"
                                >
                                    <span className="text-sm font-black tracking-[0.2em] uppercase flex items-center gap-3">
                                        And we keep building <ArrowDown size={16} className="animate-bounce" />
                                    </span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Milestone Detail Modal */}
                <AnimatePresence>
                    {selectedMilestone && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                        >
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedMilestone(null)}
                                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                            />

                            {/* Modal Container */}
                            <motion.div
                                layoutId={`card-${selectedMilestone.year}`}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-6xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto max-h-[90vh]"
                            >
                                {/* Close Button at Top */}
                                <button
                                    onClick={() => setSelectedMilestone(null)}
                                    className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all border border-white/20"
                                >
                                    <X size={20} />
                                </button>

                                {/* Left Side: Image */}
                                <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden">
                                    <img
                                        src={selectedMilestone.image}
                                        alt={selectedMilestone.title}
                                        className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent md:hidden" />
                                    <div className="absolute bottom-8 left-8 text-white md:hidden">
                                        <span className="text-sm font-bold opacity-60 uppercase tracking-widest">{selectedMilestone.year}</span>
                                        <h2 className="text-3xl font-bold leading-tight">{selectedMilestone.title}</h2>
                                    </div>
                                </div>

                                {/* Right Side: Content */}
                                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center overflow-y-auto">
                                    <div className="hidden md:block mb-8">
                                        <span className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-600 text-sm font-black tracking-widest uppercase mb-4">
                                            {selectedMilestone.year} Milestone
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                                            {selectedMilestone.title}
                                        </h2>
                                    </div>

                                    <div className="space-y-6">
                                        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                                            {selectedMilestone.desc}
                                        </p>

                                        <div className="pt-8 border-t border-slate-100">
                                            <div className="flex items-center gap-4 text-red-600">
                                                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                                                    {selectedMilestone.icon && <selectedMilestone.icon size={24} />}
                                                </div>
                                                <span className="font-bold tracking-tight">Enterprise Innovation Standard</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 12. DELIVERED OUTCOMES (CASE STUDIES) */}
                <DeliveredOutcomes data={sanityData?.outcomes} />


                {/* 13. ENTERPRISE CRM CONTENT (Main Body) */}
                <EnterpriseCRMContent data={{
                    crm: sanityData?.crm,
                    productFocus: sanityData?.productFocus,
                    expertise: sanityData?.expertise,
                    automation: sanityData?.automation,
                    whyChoose: sanityData?.whyChoose,
                    accelerators: sanityData?.accelerators,
                    innFramework: sanityData?.innFramework,
                    globalDelivery: sanityData?.globalDelivery,
                    advisory: sanityData?.advisory
                }} />


                {/* 14. DOME GALLERY SECTION */}
                <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                        <span className="inline-block text-sm font-black uppercase tracking-[0.3em] text-white bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            MEDIA
                        </span>
                    </div>
                    <DomeGallery
                        images={(sanityData?.gallery?.images || [
                            aboutImage1, aboutImage2, copter3, copter4, copter5, copter6, copter7,
                            copter8, copter9, copter10, copter11, copter12, copter13, copter14
                        ]).map((img: any) => (typeof img === 'string' ? img : urlFor(img).url()))}
                        fit={0.8}
                        minRadius={600}
                        maxVerticalRotationDeg={0}
                        segments={34}
                        dragDampening={2}
                        grayscale={false}
                        openedImageWidth="min(95vw, 800px)"
                        openedImageHeight="min(85vh, 800px)"
                        padFactor={0.05}
                    />
                </div>

                {/* 15. PROFESSIONAL ASSISTANCE TEAM SECTION */}
                <section className="section-padding bg-white overflow-hidden">
                    <div className="enterprise-container flex flex-col items-center">
                        <motion.div
                            onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            variants={fadeInUp}
                            className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.15] tracking-tight">
                                {sanityData?.assistance?.heading1 || "Give your business the"} <br />
                                <span className="text-blue-600">{sanityData?.assistance?.heading2 || "Professional Assistance"}</span> <br />
                                {sanityData?.assistance?.heading3 || "it requires with our team"}
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                                {sanityData?.assistance?.description || "Your vision is our starting point. Our team of expert developers, with 16+ years of experience, harmoniously collaborates with your team to create the custom software solution you aspire to."}
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={scaleUp}
                            className="w-full max-w-5xl h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer"
                        >
                            <img
                                src={sanityData?.assistance?.image ? urlFor(sanityData.assistance.image).url() : copter5}
                                alt="Team Culture"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
                        </motion.div>
                    </div>
                </section>

                {/* 16. VIDEO SECTION ABOVE FOOTER */}
                <motion.section
                    variants={clipReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full h-[40vh] sm:h-[60vh] md:h-screen overflow-hidden relative bg-slate-900"
                >
                    {sanityData?.video?.videoUrl ? (
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
                            <source src={sanityData.video.videoUrl} type="video/mp4" />
                        </video>
                    ) : (
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
                            <source src={footerVideo} type="video/mp4" />
                        </video>
                    )}

                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {sanityData?.video?.caption && (
                        <div className="absolute bottom-10 left-10 text-white font-bold text-xl">{sanityData.video.caption}</div>
                    )}
                </motion.section>

                {/* 17. TESTIMONIALS CAROUSEL */}
                <section className="section-padding bg-gradient-to-b from-white to-slate-50/50">
                    <div className="enterprise-container">
                        <div className="text-center max-w-5xl mx-auto mb-16">
                            <motion.span
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4"
                            >
                                Testimonials
                            </motion.span>
                            <motion.h2
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-black text-slate-900 leading-tight"
                            >
                                {sanityData?.testimonials?.heading || <>Few words from our <span className="text-red-600">happy customers</span></>}
                            </motion.h2>
                        </div>

                        <TestimonialsCarousel data={sanityData?.testimonials} />
                    </div>
                </section>


            </div>
        </PageLayout>
    );
};

export default Index;
