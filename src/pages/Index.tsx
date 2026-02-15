import { motion, useInView, AnimatePresence, Variants, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
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
import backgroundVideo from "@/assets/home.mp4";
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

// Image Carousel Component
const ImageCarousel = ({ images, interval = 4000 }: { images: string[]; interval?: number }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <GlareHover glareOpacity={0.15} glareSize={400}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`VelDurSen team ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/70'
                }`}
            />
          ))}
        </div>
      </motion.div>
    </GlareHover>
  );
};

// Testimonials Carousel Component
const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "VelDurSen transformed our entire cloud infrastructure with zero downtime. Their AI-powered solutions reduced our operational costs by 40% while improving system performance. The team's expertise in enterprise-scale deployments is unmatched.",
      title: "Outstanding Cloud Transformation",
      name: "Sarah Mitchell",
      role: "CTO",
      company: "Global FinTech Solutions",
      image: profile1
    },
    {
      quote: "Working with VelDurSen on our cybersecurity framework was a game-changer. They implemented zero-trust architecture across our global operations, achieving 100% compliance with HIPAA and SOC2 standards. Their proactive approach to security is exceptional.",
      title: "Enterprise Security Excellence",
      name: "David Chen",
      role: "CISO",
      company: "HealthCare Innovations Inc.",
      image: profile2
    },
    {
      quote: "The data analytics platform VelDurSen built for us processes over 10 billion events daily with sub-second query performance. Their real-time dashboards have revolutionized how we make business decisions across 50+ countries.",
      title: "Revolutionary Data Platform",
      name: "Maria Rodriguez",
      role: "VP of Data Engineering",
      company: "Retail Global Corp",
      image: profile3
    },
    {
      quote: "VelDurSen's AI and machine learning solutions have transformed our manufacturing operations. Predictive maintenance reduced downtime by 45%, and their computer vision systems achieved 99.5% defect detection accuracy. Truly world-class engineering.",
      title: "AI-Powered Manufacturing",
      name: "James Anderson",
      role: "Chief Operations Officer",
      company: "Advanced Manufacturing Ltd",
      image: profile4
    },
    {
      quote: "Their commitment to sustainable technology sets them apart. VelDurSen helped us reduce our cloud carbon footprint by 35% while maintaining peak performance. The green computing practices they implemented align perfectly with our ESG goals.",
      title: "Sustainable Tech Leadership",
      name: "Emily Thompson",
      role: "Head of Sustainability",
      company: "EcoTech Enterprises",
      image: profile5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        {/* Testimonial Cards */}
        <div className="relative min-h-[550px] md:min-h-[420px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
                x: currentIndex === index ? 0 : currentIndex > index ? -100 : 100,
                display: currentIndex === index ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="h-full bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-border flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 italic max-w-3xl mx-auto">
                    "{testimonial.quote}"
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-extrabold text-[#050B20] uppercase tracking-wide">{testimonial.title}</h4>
                  </div>

                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 shadow-lg border-2 border-accent/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <h5 className="text-lg font-bold text-[#050B20]">{testimonial.name}</h5>
                  <p className="text-sm font-medium text-slate-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                ? 'bg-foreground w-10'
                : 'bg-border w-2 hover:bg-muted-foreground/50'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
};

const pillars = [
  {
    icon: Brain,
    title: "Enterprise AI Solutions",
    desc: "Generative AI, NLP, computer vision, and predictive analytics powering intelligent enterprise systems across industries worldwide.",
    features: [
      "500+ AI models in production",
      "Multi-language NLP processing",
      "Real-time computer vision systems",
      "Predictive analytics at scale"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Engineering",
    desc: "Cloud-native architectures, CI/CD pipelines, Kubernetes orchestration, and multi-cloud strategies for global scalability.",
    features: [
      "Multi-cloud deployment (AWS, Azure, GCP)",
      "Kubernetes at enterprise scale",
      "CI/CD with <5min deploy times",
      "Infrastructure as Code automation"
    ]
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    desc: "Zero-trust frameworks, IAM, compliance automation, and enterprise-grade threat protection across all jurisdictions.",
    features: [
      "Zero-trust security architecture",
      "HIPAA, PCI-DSS, SOC2 certified",
      "24/7 threat monitoring",
      "Global IAM for 1M+ users"
    ]
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    desc: "ETL pipelines, big data processing, real-time analytics, and BI dashboard solutions for data-driven enterprises.",
    features: [
      "10B+ events processed daily",
      "Petabyte-scale data warehouses",
      "Real-time streaming analytics",
      "Sub-second query performance"
    ]
  },
  {
    icon: Code,
    title: "Enterprise Software Development",
    desc: "Custom ERP, CRM, dashboards, and mission-critical enterprise application development with global deployment capability.",
    features: [
      "Custom ERP & CRM solutions",
      "Microservices architecture",
      "Global deployment capability",
      "Legacy system modernization"
    ]
  },
  {
    icon: Leaf,
    title: "Sustainable Technology",
    desc: "Carbon-aware cloud systems, green computing practices, and ethical AI frameworks for responsible innovation worldwide.",
    features: [
      "35% carbon footprint reduction",
      "Green CI/CD practices",
      "Renewable energy preference",
      "Ethical AI governance frameworks"
    ]
  },
];

const industries = [
  { icon: Heart, name: "Healthcare", count: "150+ projects" },
  { icon: Landmark, name: "FinTech", count: "200+ systems" },
  { icon: Factory, name: "Manufacturing", count: "120+ implementations" },
  { icon: ShoppingCart, name: "Retail & E-Commerce", count: "180+ platforms" },
  { icon: Building2, name: "Smart Cities", count: "45+ cities" },
  { icon: Wheat, name: "Agriculture & AgriTech", count: "90+ solutions" },
  { icon: GraduationCap, name: "Education", count: "65+ institutions" },
  { icon: Building, name: "Logistics & Supply Chain", count: "110+ networks" },
];

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

// Global Operations Section Component
const GlobalOperationsSection = () => (
  <section className="section-padding bg-gradient-to-b from-white to-slate-50/50">
    <div className="enterprise-container">
      <SectionHeader
        tag="Global Operations"
        title={<><span className="text-blue-600">Worldwide</span> Presence, Local Expertise</>}
        subtitle="Operating across multiple continents with a follow-the-sun delivery model, serving global enterprises around the clock."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {globalMetrics.map((stat, i) => (
          <motion.div
            key={i}
            variants={zoomIn}
            className="group relative"
          >
            <GlareHover glareOpacity={0.12} glareSize={250} className="rounded-[2rem]">
              <div className="text-center p-10 md:p-12 h-full rounded-[2rem] border border-slate-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(239,68,68,0.12)] hover:border-red-200 transition-all duration-700 group relative overflow-hidden">
                {/* Subtle background glow on hover */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors" />

                <div className="text-6xl md:text-7xl font-black text-red-600 mb-6 tracking-tighter group-hover:scale-110 transition-transform duration-700">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tight">{stat.label}</div>
                <div className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest">{stat.sublabel}</div>
              </div>
            </GlareHover>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// What We Provide Section Component
const WhatWeProvideSection = () => {
  const [activeTab, setActiveTab] = useState<'candidate' | 'client'>('candidate');

  const candidateContent = {
    benefits: [
      "Get suggestions and advice from our search consultants/recruiters on your career path",
      "Get career directions from us",
      "Get right-fit positions/career opportunities",
      "Your profile would get positioned appropriately with our global customers, resulting in you getting the role/growth you have been looking for",
      "Get suggestion & advice on compensation & benefits"
    ],
    image: img1
  };

  const clientContent = {
    benefits: [
      "Get dedicated support in fulfilling your human resource needs",
      "Get a partner who has expertise in identifying candidates in many niche segments",
      "Get a partner who has a global network of middle & senior-level technology professionals",
      "Get an account manager who understands your business language & delivers on-time"
    ],
    image: img2
  };

  const currentContent = activeTab === 'candidate' ? candidateContent : clientContent;

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex gap-6 mb-10 border-b border-border">
        <button
          onClick={() => setActiveTab('candidate')}
          className={`pb-3 px-2 text-base font-semibold transition-all relative ${activeTab === 'candidate'
            ? 'text-violet-600'
            : 'text-slate-600 hover:text-foreground'
            }`}
        >
          You as a Candidate
          {activeTab === 'candidate' && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600"
              initial={false}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab('client')}
          className={`pb-3 px-2 text-base font-semibold transition-all relative ${activeTab === 'client'
            ? 'text-violet-600'
            : 'text-slate-600 hover:text-foreground'
            }`}
        >
          You as a Client
          {activeTab === 'client' && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600"
              initial={false}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Benefits List */}
        <div className="space-y-5">
          {currentContent.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center">
                <Check size={14} className="text-white stroke-[3px]" />
              </div>
              <p className="text-base text-foreground leading-relaxed">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <GlareHover glareOpacity={0.2} glareSize={400} className="rounded-2xl">
            <div className="relative flex items-center justify-center overflow-hidden rounded-2xl shadow-xl cursor-pointer">
              <img
                src={currentContent.image}
                alt={activeTab === 'candidate' ? 'Career opportunities' : 'Client solutions'}
                className="w-full max-h-[400px] object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </GlareHover>
        </motion.div>
      </motion.div>
    </div>
  );
};

const WhatWeAreUptoSection = () => {
  const highlights = [
    { label: "GLOBAL ENTERPRISE CLIENTS", value: "500+", percentage: 85 },
    { label: "YEARS OF TECHNOLOGY EXCELLENCE", value: "10+", percentage: 90 },
    { label: "DIGITAL TRANSFORMATIONS DELIVERED", value: "1000+", percentage: 95 },
    { label: "CLOUD-NATIVE ARCHITECTURES", value: "1000+", percentage: 80 },
    { label: "AI & INTELLIGENT SYSTEMS", value: "500+", percentage: 75 },
    { label: "STARTUP GROWTH PARTNERSHIPS", value: "100+", percentage: 60 }
  ];

  return (
    <section className="section-padding overflow-hidden bg-sky-50/30">
      <div className="enterprise-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Images Column */}
          <div className="relative">
            {/* Decorative background circle */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-slate-50 rounded-full -z-10" />

            <div className="relative z-10 grid grid-cols-4 md:grid-cols-12 gap-4 max-w-lg mx-auto lg:ml-0">
              {/* Decorative dots - top left */}
              <div className="absolute -top-10 -left-10 grid grid-cols-4 gap-2 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-foreground rounded-full" />
                ))}
              </div>

              {/* Main Image (Large) */}
              <motion.div
                variants={rotateIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="col-span-4 md:col-span-10 relative"
              >
                <GlareHover glareOpacity={0.2} glareSize={500} className="rounded-2xl">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-l-[12px] border-sky-600">
                    <img
                      src={highlight1}
                      alt="Innovation focus"
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </GlareHover>
              </motion.div>

              {/* Secondary Image (Overlapping) */}
              <motion.div
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="col-start-2 col-span-3 md:col-start-4 md:col-span-8 -mt-12 md:-mt-24 relative z-20"
              >
                <GlareHover glareOpacity={0.25} glareSize={400} className="rounded-2xl">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-b-[12px] border-sky-600 bg-white">
                    <img
                      src={highlight2}
                      alt="Strategic planning"
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </GlareHover>
                {/* Decorative red square background */}
                <div className="absolute -bottom-6 -left-6 w-24 h-12 bg-sky-600 -z-10" />
              </motion.div>

              {/* Decorative dots - bottom right */}
              <div className="absolute -bottom-10 right-10 grid grid-cols-4 gap-2 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-foreground rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Stats Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="mb-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">Highlights</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
                What we are upto
              </h2>
            </motion.div>

            <div className="space-y-8">
              {highlights.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-[11px] font-bold tracking-wider text-slate-600 uppercase">{stat.label}</span>
                    <span className="text-sm font-bold text-foreground">{stat.percentage}%</span>
                  </div>
                  <div className="relative h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.percentage}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      className="absolute h-full bg-sky-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FoundersSection = () => {
  const founders = [
    {
      name: "Veldurthi Senthil",
      role: "Founder & Chief Executive Officer",
      image: founder1,
      bio: "Visionary leader with 20+ years of experience in global enterprise technology and strategic digital transformation.",
      linkedin: "#",
      twitter: "#",
      mail: "senthil@veldursen.com"
    },
    {
      name: "Dr. Elena Volkov",
      role: "Co-Founder & Chief Technology Officer",
      image: founder2,
      bio: "Expert in AI-driven architectures and scalable cloud solutions, dedicated to engineering the digital backbone of modern business.",
      linkedin: "#",
      twitter: "#",
      mail: "elena@veldursen.com"
    },
    {
      name: "Marcus Dupont",
      role: "Co-Founder & Chief Operations Officer",
      image: founder3,
      bio: "Operational strategist specializing in global talent acquisition and localized excellence across international borders.",
      linkedin: "#",
      twitter: "#",
      mail: "marcus@veldursen.com"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden text-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent -z-10 blur-3xl opacity-30" />

      <div className="enterprise-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-3 px-3 py-0.5 bg-amber-500/10 rounded-full">
              The Visionaries
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
              Meet the Minds Behind <span className="text-amber-500">VelDurSen</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              {/* Card Container */}
              <GlareHover glareOpacity={0.15} glareSize={300} className="rounded-2xl h-full">
                <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">

                  {/* Image Section */}
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Role Tag over image on hover */}
                    <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white text-[10px] font-bold uppercase tracking-widest leading-none bg-amber-500 px-2 py-1 rounded-sm">
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-5 flex flex-col flex-grow text-center items-center">
                    <h3 className="text-xl font-bold mb-2 text-slate-900 transition-colors group-hover:text-amber-600">
                      {founder.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6 flex-grow max-w-[200px]">
                      {founder.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                      <a href={founder.linkedin} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all duration-300">
                        <Linkedin size={14} />
                      </a>
                      <a href={founder.twitter} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all duration-300">
                        <Twitter size={14} />
                      </a>
                      <a href={`mailto:${founder.mail}`} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all duration-300">
                        <Mail size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Decorative border bottom */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 group-hover:w-full transition-all duration-700" />
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const RapidSupportSection = () => {
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
            Strategic Global Talent on <span className="text-orange-600">Demand</span>
          </motion.h2>

          <motion.p
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-lg md:text-xl font-bold text-orange-600 mb-6"
          >
            We enable you to onboard specialized talent within 15 days (90% success rate)
          </motion.p>

          <motion.p
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-slate-700 leading-relaxed text-lg"
          >
            Our dedicated recruitment consultants bridge the gap between niche technology requirements and top-tier global talent.
            By combining deep domain expertise across critical industry verticals with architectural foresight, we ensure every
            placement is a perfect technical and cultural fit for your mission-critical operations.
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
                src={supportBg}
                alt="Strategic Global Talent"
                className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-105"
              />
            </GlareHover>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const TrustedPartnersLogos = () => {
  const logos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8];
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
          Trusted by Industry Leaders Worldwide
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
                alt={`Partner Logo ${(index % logos.length) + 1}`}
                className="max-w-full max-h-full object-contain filter drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

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
    yearColor: "text-indigo-500",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50"
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
    yearColor: "text-rose-500",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50"
  },
  {
    year: "2022",
    title: "AI & Data Engineering Adoption",
    desc: "Transitioned into an AI-first company. Introduced Generative AI solutions, predictive analytics, computer vision, and real-time data engineering pipelines across workflows.",
    icon: Brain,
    image: aboutImage2,
    pos: "right",
    y: 1200,
    yearColor: "text-purple-500",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50"
  },
  {
    year: "2023",
    title: "Industry-Wise Specialization",
    desc: "Expanded into Healthcare, FinTech, Manufacturing, Retail, Smart Cities, and AgriTech. Built domain-specific technology frameworks for enterprise verticals.",
    icon: Building2,
    image: highlight2,
    pos: "left",
    y: 1500,
    yearColor: "text-emerald-500",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50"
  },
  {
    year: "2024",
    title: "Global Delivery & Workforce Growth",
    desc: "Expanded operations internationally with multi-region project execution and global collaboration models. Infrastructure handling extremely large user bases.",
    icon: Globe,
    image: globalMap,
    pos: "right",
    y: 1800,
    yearColor: "text-cyan-500",
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-50"
  },
  {
    year: "2025",
    title: "Sustainable & Future-Ready Innovation",
    desc: "Integrated sustainability into transformation. Focused on carbon-aware cloud systems, ethical AI governance, and green computing frameworks. Positioned as a Green Tech Enterprise.",
    icon: Leaf,
    image: aboutImage1,
    pos: "left",
    y: 2100,
    yearColor: "text-lime-500",
    iconColor: "text-lime-600",
    iconBg: "bg-lime-50"
  }
];

const Index = () => {
  const [scrollY, setScrollY] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<typeof milestones[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.5"]
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Enterprise AI Solutions | VelDurSen Technologies"
        description="VelDurSen Technologies is a global leader in Enterprise AI solutions, digital transformation, and cloud engineering. We empower large-scale businesses with secure, scalable technology."
        keywords={["Enterprise AI solutions", "Digital transformation company", "Cloud engineering services", "Enterprise cybersecurity solutions", "Data engineering consulting"]}
        schemas={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA]}
      />
      {/* 1. HERO SECTION - Redesigned to match Premium Industry Style */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-white">
        <motion.div
          onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] brightness-110 hover:scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent z-10" />


        <div className="enterprise-container relative z-20">
          <motion.div
            variants={scaleUp}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-red-600 mb-6 px-4 py-1.5 bg-red-50 rounded-full border border-red-100 backdrop-blur-md shadow-sm">
              Global Enterprise Technology Partner
            </span>
            <h1 className="text-[2.25rem] xs:text-[2.75rem] sm:text-[4.5rem] md:text-[6.5rem] font-bold text-slate-900 leading-[0.95] mb-8 tracking-tighter break-words hyphens-auto">
              Digital <br />
              <span className="text-red-600">Transformation.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-12 max-w-2xl leading-relaxed">
              We architect intelligent, secure, and sustainable enterprise ecosystems that power mission-critical operations across industries worldwide.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise py-5 px-12 text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-xl shadow-red-600/10">
                Talk to Experts <ArrowRight size={18} className="ml-2" />
              </Link>
              <div className="flex items-center gap-4 px-6 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                <Globe2 size={16} className="text-red-600" /> Trusted in 150+ Countries
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scrolling News Ticker - Integrated with new design */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm py-4 overflow-hidden z-20">
          <div className="flex whitespace-nowrap animate-scroll-slow hover:[animation-play-state:paused] transition-all duration-300">
            {/* First Set */}
            <div className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-white px-8 gap-8">
              <Link to="/technologies" className="flex items-center gap-2 hover:text-red-300 hover:underline transition-all">
                <Code size={14} className="text-red-400" /> Next-Gen Technology Stack: AI, Cloud & Modern Ops
              </Link>
              <span className="opacity-50">•</span>
              <Link to="/achievements" className="flex items-center gap-2 hover:text-red-300 hover:underline transition-all">
                <Trophy size={14} className="text-red-400" /> Best Enterprise AI Innovation Award
              </Link>
              <span className="opacity-50">•</span>
              <Link to="/industries" className="flex items-center gap-2 hover:text-red-300 hover:underline transition-all">
                <Factory size={14} className="text-red-400" /> Empowering Industries: Finance, Healthcare, Retail & Manufacturing
              </Link>
              <span className="opacity-50">•</span>
              <Link to="/internships" className="flex items-center gap-2 hover:text-red-300 hover:underline transition-all">
                <GraduationCap size={14} className="text-red-400" /> Global Technology Internship Program 2026
              </Link>
              <span className="opacity-50">•</span>
              <Link to="/contact" className="flex items-center gap-2 hover:text-red-300 hover:underline transition-all">
                <Mail size={14} className="text-red-400" /> Start Your Transformation Journey - Contact Us Today
              </Link>
              <span className="opacity-50">•</span>
            </div>
            {/* Duplicate Set for Infinite Scroll */}
            <div className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-white px-8 gap-8">
              <Link to="/technologies" className="flex items-center gap-2 hover:text-red-300 hover:underline transition-all">
                <Code size={14} className="text-red-400" /> Next-Gen Technology Stack: AI, Cloud & Modern Ops
              </Link>
              <span className="opacity-50">•</span>
              <Link to="/achievements" className="flex items-center gap-2 hover:text-red-300 hover:underline transition-all">
                <Trophy size={14} className="text-red-400" /> Best Enterprise AI Innovation Award
              </Link>
              <span className="opacity-50">•</span>
              <Link to="/industries" className="flex items-center gap-2 hover:text-red-300 hover:underline transition-all">
                <Factory size={14} className="text-red-400" /> Empowering Industries: Finance, Healthcare, Retail & Manufacturing
              </Link>
              <span className="opacity-50">•</span>
              <Link to="/internships" className="flex items-center gap-2 hover:text-red-300 hover:underline transition-all">
                <GraduationCap size={14} className="text-red-400" /> Global Technology Internship Program 2026
              </Link>
              <span className="opacity-50">•</span>
              <Link to="/contact" className="flex items-center gap-2 hover:text-red-300 hover:underline transition-all">
                <Mail size={14} className="text-red-400" /> Start Your Transformation Journey - Contact Us Today
              </Link>
              <span className="opacity-50">•</span>
            </div>
          </div>
        </div>
      </section>
      <div className="font-heading space-y-0">



        {/* World Map Visualization - Full Screen */}
        <section className="relative w-full min-h-[600px] lg:h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-black flex items-center justify-center">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 z-10"></div>
          <div className="absolute inset-0 opacity-20 z-10" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(24, 119, 242, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(24, 119, 242, 0.3) 0%, transparent 50%)`
          }}></div>
          <motion.div
            className="relative z-20 text-center px-6"
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <Globe2 className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-white mx-auto mb-8 drop-shadow-lg" />
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-6 drop-shadow-lg">Global Delivery Network</h3>
            <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto drop-shadow-sm mb-6">
              <span className="font-semibold text-white">North America</span> <span className="text-white/60 mx-2">•</span> <span className="font-semibold text-white">Europe</span> <span className="text-white/60 mx-2">•</span> <span className="font-semibold text-white">Asia-Pacific</span> <span className="text-white/60 mx-2">•</span> <span className="font-semibold text-white">Middle East</span> <span className="text-white/60 mx-2">•</span> <span className="font-semibold text-white">Latin America</span>
            </p>
            <p className="text-base md:text-lg lg:text-xl text-white/80 mt-6 max-w-3xl mx-auto drop-shadow-sm">
              Our distributed teams enable continuous deployment, faster response times, and seamless collaboration across time zones.
            </p>
          </motion.div>
        </section>

        {/* About Brief */}
        <section className="section-padding bg-emerald-50/50">
          <motion.div
            onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#10b981' } }))}
            onViewportLeave={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
            viewport={{ margin: "-10% 0px -70% 0px" }}
            className="enterprise-container"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-3 block">About VelDurSen</span>
                <h2 className="section-title leading-snug mb-6">Your Trusted Partner in<br /><span className="text-emerald-600">Enterprise Digital Transformation</span></h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  VelDurSen is a global Enterprise Technology & Digital Transformation company specializing in AI-first, security-first, and sustainability-driven solutions for the world's most demanding enterprises.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  With operations spanning multiple continents and regional delivery centers worldwide, we deliver cutting-edge technology solutions that help organizations achieve their digital transformation goals while maintaining the highest standards of security, scalability, and sustainability.
                </p>
                <p className="text-slate-700 leading-relaxed mb-8">
                  From Fortune 500 enterprises to high-growth organizations across healthcare, finance, manufacturing, and beyond—our architecture-first engineering approach ensures every system we build is resilient, performant, and future-proof for global operations.
                </p>
                <Link
                  to="/about"
                  state={{ fromButton: true }}
                  className="btn-enterprise !bg-emerald-600 !border-emerald-600 hover:!bg-slate-950 hover:!border-slate-950"
                >
                  Learn More About Us <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <ImageCarousel images={[aboutTeam, aboutImage1, aboutImage2]} interval={4000} />
              </motion.div>
            </div>
          </motion.div>
        </section>










        {/* Rapid Support Section */}
        <RapidSupportSection />
        <TrustedPartnersLogos />
        <WhatWeAreUptoSection />

        {/* What We Provide Section */}
        <section className="section-padding bg-slate-50">
          <motion.div
            onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#7c3aed' } }))}
            onViewportLeave={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
            viewport={{ margin: "-10% 0px -70% 0px" }}
            className="enterprise-container"
          >
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                What we <span className="text-violet-600">provide</span>
              </motion.h2>
            </div>

            {/* Tab Navigation */}
            <WhatWeProvideSection />
          </motion.div>
        </section>

        {/* 1.5 CRISPY ACHIEVEMENTS HIGHLIGHTS - REFINED TEXT VERSION */}
        <section className="py-16 bg-white border-b border-slate-100">
          <motion.div
            onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#dc2626' } }))}
            onViewportLeave={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
            viewport={{ margin: "-10% 0px -70% 0px" }}
            className="enterprise-container"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Our <span className="text-red-600">Achievements</span>
              </h2>
              <div className="space-y-6 text-slate-500 leading-relaxed text-lg font-medium">
                <p>
                  VelDurSen’s achievements represent a decade of relentless engineering innovation and architectural integrity. We have successfully deployed mission-critical systems across 150+ countries, earning over 50 global awards for our pioneering work in AI safety and cloud resilience.
                </p>
                <p>
                  Our journey is defined by transforming complex legacy environments into high-performance digital ecosystems that empower the world’s most ambitious enterprises. Every award is a milestone in our mission to build a more secure, intelligent, and sustainable future for global technology.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* 2. DYNAMIC ACHIEVEMENT GRID - WITH STACKED-TO-SPLIT ANIMATION */}
        <section className="py-24 bg-white overflow-hidden min-h-screen flex items-center">
          <div className="enterprise-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-12 md:gap-y-20 relative">
              {achievementsData.map((achievement, idx) => {
                const colorMaps: Record<string, { bg: string, ring: string, iconBg: string }> = {
                  "Artificial Intelligence Innovation": { bg: "bg-[#2dd4bf]", ring: "ring-teal-200", iconBg: "bg-teal-700/20" },
                  "Multi-Cloud Infrastructure Excellence": { bg: "bg-[#6366f1]", ring: "ring-indigo-200", iconBg: "bg-indigo-700/20" },
                  "Zero-Trust Security Framework": { bg: "bg-[#f43f5e]", ring: "ring-rose-200", iconBg: "bg-rose-700/20" },
                  "Green Computing & Ethical AI": { bg: "bg-[#10b981]", ring: "ring-emerald-200", iconBg: "bg-emerald-700/20" },
                  "Smart Manufacturing Solutions": { bg: "bg-[#f59e0b]", ring: "ring-amber-200", iconBg: "bg-amber-700/20" },
                  "Precision Agriculture & AI Analytics": { bg: "bg-[#8b5cf6]", ring: "ring-purple-200", iconBg: "bg-purple-700/20" }
                };

                const style = colorMaps[achievement.category] || colorMaps["Artificial Intelligence Innovation"];

                // Calculate stack offsets to make them cluster in the center
                // On desktop (3 cols):
                // col 0: x: 100%, col 1: x: 0, col 2: x: -100%
                // row 0: y: 20%, row 1: y: -20%
                const xOffset = idx % 3 === 0 ? "100%" : idx % 3 === 2 ? "-100%" : "0%";
                const yOffset = idx < 3 ? "20%" : "-20%";

                return (
                  <motion.div
                    key={achievement.id}
                    initial={{
                      opacity: 0,
                      x: xOffset,
                      y: yOffset,
                      rotate: (idx - 2.5) * 10, // Fanned rotation
                      scale: 0.8
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      rotate: 0,
                      scale: 1
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      type: "spring",
                      stiffness: 300, // Increased for snappier response
                      damping: 25,
                      delay: idx * 0.05,
                      mass: 0.5
                    }}
                    whileHover={{ y: -10, rotateZ: idx % 2 === 0 ? 1 : -1, scale: 1.02, zIndex: 50, transition: { duration: 0.2, ease: "easeOut" } }}
                    className="group relative h-[420px] w-full"
                  >
                    <Link to={`/achievements/${achievement.id}`} className="block h-full w-full">
                      {/* Main Card Body */}
                      <div className={`relative h-full w-full ${style.bg} rounded-[2.5rem] p-8 shadow-2xl transition-shadow duration-300 overflow-hidden will-change-transform flex flex-col`}>

                        {/* Top Header */}
                        <div className="flex justify-between items-start mb-2 shrink-0 z-20">
                          <div className="text-white">
                            <h4 className="text-xl font-black tracking-tight">{achievement.category.split(' ')[0]}</h4>
                            <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">{achievement.venue.split(',')[0]}</p>
                          </div>

                          <div className="bg-black/20 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-white/10">
                            <Trophy size={14} className="text-white" />
                            <span className="text-white text-[10px] font-black">{achievement.date.split(' ').pop()}</span>
                          </div>
                        </div>

                        {/* Image Section - Flexible */}
                        <div className="flex-1 flex items-center justify-center relative z-10 min-h-0 my-4">
                          <motion.div className="relative transform transition-transform duration-300 group-hover:scale-105">
                            <div className={`absolute inset-0 rounded-full blur-2xl opacity-40 ${style.bg} scale-110`} />
                            <div className="relative w-40 h-40 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/30">
                              <img
                                src={achievement.image}
                                alt={achievement.title}
                                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
                              />
                            </div>
                          </motion.div>
                        </div>

                        {/* Bottom Title & CTA */}
                        <div className="shrink-0 z-20 mt-auto">
                          <h3 className="text-white text-2xl font-black leading-tight drop-shadow-lg mb-3 line-clamp-3">
                            {achievement.title}
                          </h3>

                          <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Explore Project</span>
                            <div className="ml-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                              <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          </div>
                        </div>

                        {/* Background Accents */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-black/5 rounded-full blur-[80px] pointer-events-none" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. SUCCESS TRAJECTORY SECTION (TROPHY GRAPHIC) */}
        <section className="py-24 bg-white overflow-hidden">
          <motion.div
            onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#f59e0b' } }))}
            viewport={{ amount: 0.1 }}
            className="enterprise-container"
          >
            <div className="flex flex-col lg:flex-row items-center gap-16">

              {/* Left Column: Trophy Graphic */}
              <div className="w-full lg:w-1/3 flex justify-center relative">
                <div className="relative z-10">
                  {/* Abstract Trophy Composition defined by Icons/Divs since we don't have the SVG asset this exact matching is an approximation */}
                  <div className="relative drop-shadow-2xl filter">
                    <Trophy size={320} className="text-amber-400" strokeWidth={1} fill="#fbbf24" />
                    {/* Trophy Details/Shine */}
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-yellow-300/30 blur-2xl rounded-full" />
                  </div>
                  {/* Pedestal */}
                  <div className="h-16 w-48 bg-amber-800 mx-auto rounded-t-lg mt-[-20px] relative z-0 flex items-center justify-center shadow-lg">
                    <span className="text-amber-100 font-bold tracking-widest text-sm uppercase">Excellence</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Progress Bars */}
              <div className="w-full lg:w-2/3 space-y-5">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">Our Growth <span className="text-red-600">Trajectory.</span></h2>
                  <p className="text-lg text-slate-500 font-medium">Consistent performance and measurable impact year over year.</p>
                </div>

                {[
                  { label: "Increase Client ROI", value: "300%", bg: "bg-[#a3e635]", hoverBg: "hover:bg-[#a3e635]", width: "w-[85%]", icon: TrendingUp, text: "text-lime-900" },
                  { label: "Revenue Growth", value: "150%", bg: "bg-[#4ade80]", hoverBg: "hover:bg-[#4ade80]", width: "w-[90%]", icon: BarChart3, text: "text-green-900" },
                  { label: "Special Projects Delivered", value: "2500+", bg: "bg-[#2dd4bf]", hoverBg: "hover:bg-[#2dd4bf]", width: "w-[95%]", icon: Briefcase, text: "text-teal-900" },
                  { label: "Best IT Service Company", value: "2026", bg: "bg-[#0d9488]", hoverBg: "hover:bg-[#0d9488]", width: "w-[100%]", icon: Building2, text: "text-white" },
                  { label: "Industry Awards Won", value: "50+", bg: "bg-[#0f766e]", hoverBg: "hover:bg-[#0f766e]", width: "w-[100%]", icon: Award, text: "text-white" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative flex items-center justify-between p-4 pl-8 rounded-r-full shadow-md ${item.bg} ${item.width} hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
                    style={{ originX: 0 }}
                  >
                    {/* Hover Background Overlay */}
                    <div className={`absolute inset-0 rounded-r-full ${item.hoverBg} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                    <span className={`font-bold text-lg ${item.text} relative z-10`}>{item.label}</span>
                    <div className="flex items-center gap-6 pr-2 relative z-10">
                      <span className={`font-bold text-xl ${item.text}`}>{item.value}</span>
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                        <item.icon className="w-6 h-6 text-slate-700" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        </section>

        {/* Global Deployment Milestones - 6 Achievement Cards Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <motion.div
            onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#dc2626' } }))}
            viewport={{ amount: 0.1 }}
            className="enterprise-container"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">Global Deployment <span className="text-red-600">Milestones.</span></h2>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
                Enterprise achievements in scale, reliability, and transformation. We deliver large-scale platforms that power mission-critical operations globally.
              </p>
            </div>

            {/* 6 Cards Grid - 3x2 Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ gridAutoRows: '1fr' }}>
              {/* Card 1 - Global Deployment Milestones */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white flex flex-col h-full"
              >
                {/* Colored Header Bar */}
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-6 relative flex-shrink-0 min-h-[100px] flex items-center">
                  <h3 className="text-white font-bold text-lg italic">GLOBAL DEPLOYMENT MILESTONES</h3>
                  {/* Icon Badge - Positioned to overlap */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                    <Globe2 className="w-12 h-12 text-amber-600" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">🏆 Large-Scale Enterprise Platforms</h4>
                  <p className="text-sm font-semibold text-slate-700 mb-2">What we achieved:</p>
                  <ul className="space-y-2 mb-4 flex-shrink-0">
                    <li className="flex gap-2 text-xs text-slate-600">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>Multi-region deployments across global infrastructure</span>
                    </li>
                    <li className="flex gap-2 text-xs text-slate-600">
                      <span className="text-amber-500 font-bold">✓</span>
                      <span>Continuous operations for distributed business units</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">
                    Successfully delivered large-scale enterprise platforms across multiple regions, enabling continuous operations for globally distributed business units.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - Enterprise System Modernization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white flex flex-col h-full"
              >
                {/* Colored Header Bar */}
                <div className="bg-gradient-to-r from-red-400 to-rose-500 px-6 py-6 relative flex-shrink-0 min-h-[100px] flex items-center">
                  <h3 className="text-white font-bold text-lg italic">SYSTEM MODERNIZATION</h3>
                  {/* Icon Badge */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                    <Layers className="w-12 h-12 text-red-600" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">🏆 Legacy to Digital Transformation</h4>
                  <p className="text-sm font-semibold text-slate-700 mb-2">What we achieved:</p>
                  <ul className="space-y-2 mb-4 flex-shrink-0">
                    <li className="flex gap-2 text-xs text-slate-600">
                      <span className="text-red-500 font-bold">✓</span>
                      <span>Modernized complex legacy environments</span>
                    </li>
                    <li className="flex gap-2 text-xs text-slate-600">
                      <span className="text-red-500 font-bold">✓</span>
                      <span>High-performance digital ecosystems for enterprises</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">
                    Transformed complex legacy environments into high-performance digital ecosystems, improving platform reliability, scalability, and operational efficiency.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 - Mission-Critical Reliability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white flex flex-col h-full"
              >
                {/* Colored Header Bar */}
                <div className="bg-gradient-to-r from-blue-400 to-indigo-500 px-6 py-6 relative flex-shrink-0 min-h-[100px] flex items-center">
                  <h3 className="text-white font-bold text-lg italic">MISSION-CRITICAL RELIABILITY</h3>
                  {/* Icon Badge */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                    <Server className="w-12 h-12 text-blue-600" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">🏆 Enterprise Uptime Excellence</h4>
                  <p className="text-sm font-semibold text-slate-700 mb-2">What we achieved:</p>
                  <ul className="space-y-2 mb-4 flex-shrink-0">
                    <li className="flex gap-2 text-xs text-slate-600">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Engineered highly available enterprise systems</span>
                    </li>
                    <li className="flex gap-2 text-xs text-slate-600">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>Consistent uptime across global workloads</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">
                    Engineered and operated highly available enterprise systems supporting critical business operations with consistent uptime across global workloads.
                  </p>
                </div>
              </motion.div>

              {/* Card 4 - Security & Compliance Excellence */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white flex flex-col h-full"
              >
                {/* Colored Header Bar */}
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-6 relative flex-shrink-0 min-h-[100px] flex items-center">
                  <h3 className="text-white font-bold text-lg italic">SECURITY & COMPLIANCE</h3>
                  {/* Icon Badge */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                    <Lock className="w-12 h-12 text-green-600" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">🏆 Regulated Industry Excellence</h4>
                  <p className="text-sm font-semibold text-slate-700 mb-2">What we achieved:</p>
                  <ul className="space-y-2 mb-4 flex-shrink-0">
                    <li className="flex gap-2 text-xs text-slate-600">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Enterprise-wide security modernization programs</span>
                    </li>
                    <li className="flex gap-2 text-xs text-slate-600">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Aligned with regulatory and compliance frameworks</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">
                    Enabled enterprise-wide security modernization programs aligned with regulatory and compliance frameworks across regulated industries.
                  </p>
                </div>
              </motion.div>

              {/* Card 5 - Large-Scale Digital Transformation Programs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white flex flex-col h-full"
              >
                {/* Colored Header Bar */}
                <div className="bg-gradient-to-r from-purple-400 to-violet-500 px-6 py-6 relative flex-shrink-0 min-h-[100px] flex items-center">
                  <h3 className="text-white font-bold text-lg italic">DIGITAL TRANSFORMATION</h3>
                  {/* Icon Badge */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                    <CheckCircle className="w-12 h-12 text-purple-600" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">🏆 Multi-Year Enterprise Initiatives</h4>
                  <p className="text-sm font-semibold text-slate-700 mb-2">What we achieved:</p>
                  <ul className="space-y-2 mb-4 flex-shrink-0">
                    <li className="flex gap-2 text-xs text-slate-600">
                      <span className="text-purple-500 font-bold">✓</span>
                      <span>Led multi-year enterprise transformation initiatives</span>
                    </li>
                    <li className="flex gap-2 text-xs text-slate-600">
                      <span className="text-purple-500 font-bold">✓</span>
                      <span>Cloud migration, re-architecture, and modernization</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">
                    Led multi-year enterprise transformation initiatives spanning cloud migration, platform re-architecture, and operational modernization.
                  </p>
                </div>
              </motion.div>

              {/* Card 6 - Recognized Industry Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white flex flex-col h-full"
              >
                {/* Colored Header Bar */}
                <div className="bg-gradient-to-r from-cyan-400 to-teal-500 px-6 py-6 relative flex-shrink-0 min-h-[100px] flex items-center">
                  <h3 className="text-white font-bold text-lg italic">INDUSTRY RECOGNITION</h3>
                  {/* Icon Badge */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                    <Trophy className="w-12 h-12 text-teal-600" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">🏆 Global Technology Leadership</h4>
                  <p className="text-sm font-semibold text-slate-700 mb-2">What we achieved:</p>
                  <ul className="space-y-2 mb-4 flex-shrink-0">
                    <li className="flex gap-2 text-xs text-slate-600">
                      <span className="text-teal-500 font-bold">✓</span>
                      <span>Acknowledged across global technology forums</span>
                    </li>
                    <li className="flex gap-2 text-xs text-slate-600">
                      <span className="text-teal-500 font-bold">✓</span>
                      <span>Contributions to cloud resilience and AI safety</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">
                    Acknowledged across global technology forums and industry platforms for contributions to enterprise cloud resilience, AI safety, and secure digital transformation.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>



        {/* 2. JOURNEY SNAKE TIMELINE SECTION */}
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
                Our Journey of <span className="text-red-600">Innovation.</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
                From foundation to global scaling, explore the milestones that defined our evolution.
              </p>
            </div>

            <div ref={containerRef} className="relative mt-20 max-w-5xl mx-auto px-4 md:px-0">
              {/* CENTERAL SPINE TIMELINE FLOW */}
              <div className="relative py-10">
                {/* Central Spine Line */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200" />
                <motion.div
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-red-600 via-orange-500 to-amber-500 origin-top"
                  style={{ scaleY: scrollYProgress }}
                />

                <div className="space-y-24 relative">
                  {milestones.map((m, i) => (
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
                          onClick={() => setSelectedMilestone(m)}
                          className="w-full text-left group perspective-1000 outline-none"
                        >
                          <div className={`relative bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden`}>
                            {/* Card Decoration Gradient */}
                            <div className={`absolute top-0 left-0 w-1.5 h-full ${i % 2 === 0 ? 'bg-gradient-to-b from-red-500 to-amber-500' : 'bg-gradient-to-b from-blue-500 to-cyan-500'}`} />

                            {/* Mobile Year Badge */}
                            <div className="md:hidden absolute top-6 right-6 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                              {m.year}
                            </div>

                            <div className="flex flex-col gap-6">
                              {/* Header with Icon */}
                              <div className="flex items-center gap-4">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${m.iconBg} ${m.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                  <m.icon size={28} strokeWidth={2} />
                                </div>
                                <div>
                                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-500 transition-all">
                                    {m.title}
                                  </h3>
                                </div>
                              </div>

                              {/* Description */}
                              <p className="text-slate-500 leading-relaxed font-medium">
                                {m.desc}
                              </p>

                              {/* Image Preview Strip */}
                              <div className="h-32 w-full rounded-xl overflow-hidden relative group-hover:h-40 transition-all duration-500 ease-in-out">
                                <img src={m.image} alt={m.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700" />
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
                  ))}
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
                          <selectedMilestone.icon size={24} />
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

        {/* Delivered Outcomes (Case Studies) Section */}
        <DeliveredOutcomes />







        {/* NEW: Enterprise CRM Content (Main Body) */}
        < EnterpriseCRMContent />

        {/* Founders Section */}
        < FoundersSection />

        {/* Dome Gallery Section */}
        <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <span className="inline-block text-sm font-black uppercase tracking-[0.3em] text-white bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              MEDIA
            </span>
          </div>
          <DomeGallery
            images={[
              aboutImage1, aboutImage2, copter3, copter4, copter5, copter6, copter7,
              copter8, copter9, copter10, copter11, copter12, copter13, copter14
            ]}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            openedImageWidth="80vw"
            openedImageHeight="80vh"
          />
        </div>

        {/* Professional Assistance Team Section */}
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
                Give your business the <br />
                <span className="text-[#d946ef]">Professional Assistance</span> <br />
                it requires with our team
              </h2>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                Your vision is our starting point. Our team of expert developers, with 16+ years of experience, harmoniously collaborates with your team to create the custom software solution you aspire to.
              </p>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium mt-6">
                We transform ideas into scalable, future-ready digital products that empower your business, optimize operations, and accelerate growth.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={scaleUp}
              className="w-full max-w-5xl h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer"
            >
              <img src={copter5} alt="Team Culture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
            </motion.div>
          </div>
        </section>

        {/* Video Section Above Footer */}
        < motion.section
          variants={clipReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-screen overflow-hidden relative bg-slate-900"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src={footerVideo} type="video/mp4" />
          </video>
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.section >

        {/* Testimonials Carousel (Absolute Last Section) */}
        < section className="section-padding bg-gradient-to-b from-white to-slate-50/50" >
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
                Few words from our <span className="text-pink-600">happy customers</span>
              </motion.h2>
            </div>

            <TestimonialsCarousel />
          </div>
        </section >

        {/* Global Operations Section (Moved Here) */}
        < GlobalOperationsSection />
      </div>

    </PageLayout >
  );
};

export default Index;
