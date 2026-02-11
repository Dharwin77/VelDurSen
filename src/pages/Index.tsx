import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Brain, Cloud, Shield, Database, Code, Leaf,
  Heart, Landmark, Factory, ShoppingCart, Building2, Sprout,
  CheckCircle, Globe, Users, Server, Zap, TrendingUp, Globe2,
  Award, Building, Wheat, GraduationCap, Sparkles, Check,
  Linkedin, Twitter, Mail
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";
import heroBg from "@/assets/hero-bg.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutImage1 from "@/assets/Gemini_Generated_Image_ello0sello0sello.png";
import aboutImage2 from "@/assets/Gemini_Generated_Image_zh56h0zh56h0zh56.png";
import globalMap from "@/assets/global-map.jpg";
import backgroundVideo from "@/assets/Video_generation_prompt_202602102223.mp4";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import profile1 from "@/assets/profile1.png";
import profile2 from "@/assets/profile2.png";
import profile3 from "@/assets/profile3.png";
import profile4 from "@/assets/profile4.png";
import profile5 from "@/assets/profile5.png";
import highlight1 from "@/assets/highlight1.png";
import highlight2 from "@/assets/highlight2.png";
import supportBg from "@/assets/bg.png.png";
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
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Testimonial Cards */}
        <div className="relative h-[500px] md:h-[420px]">
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
                    <h4 className="text-lg font-bold text-foreground">{testimonial.title}</h4>
                  </div>

                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 shadow-lg border-2 border-accent/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <h5 className="text-base font-bold text-foreground">{testimonial.name}</h5>
                  <p className="text-sm text-muted-foreground">
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
  const isInView = useInView(ref, { once: true });

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

const fadeUp = {
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
            ? 'text-red-600'
            : 'text-muted-foreground hover:text-foreground'
            }`}
        >
          You as a Candidate
          {activeTab === 'candidate' && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
              initial={false}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab('client')}
          className={`pb-3 px-2 text-base font-semibold transition-all relative ${activeTab === 'client'
            ? 'text-red-600'
            : 'text-muted-foreground hover:text-foreground'
            }`}
        >
          You as a Client
          {activeTab === 'client' && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
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
              <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
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
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative flex items-center justify-center overflow-hidden rounded-2xl shadow-xl cursor-pointer"
        >
          <img
            src={currentContent.image}
            alt={activeTab === 'candidate' ? 'Career opportunities' : 'Client solutions'}
            className="w-full max-h-[400px] object-contain transition-transform duration-500"
          />
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
    <section className="section-padding overflow-hidden bg-white">
      <div className="enterprise-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Images Column */}
          <div className="relative">
            {/* Decorative background circle */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-slate-50 rounded-full -z-10" />

            <div className="relative z-10 grid grid-cols-12 gap-4">
              {/* Decorative dots - top left */}
              <div className="absolute -top-10 -left-10 grid grid-cols-4 gap-2 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-foreground rounded-full" />
                ))}
              </div>

              {/* Main Image (Large) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="col-span-12 relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl border-l-[12px] border-red-600">
                  <img
                    src={highlight1}
                    alt="Innovation focus"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </motion.div>

              {/* Secondary Image (Overlapping) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="col-start-4 col-span-9 -mt-24 relative z-20"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl border-b-[12px] border-red-600 bg-white">
                  <img
                    src={highlight2}
                    alt="Strategic planning"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                {/* Decorative red square background */}
                <div className="absolute -bottom-6 -left-6 w-24 h-12 bg-red-600 -z-10" />
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
              viewport={{ once: true }}
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
                    <span className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">{stat.label}</span>
                    <span className="text-sm font-bold text-foreground">{stat.percentage}%</span>
                  </div>
                  <div className="relative h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      className="absolute h-full bg-red-600 rounded-full"
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
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent -z-10 blur-3xl opacity-30" />

      <div className="enterprise-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 mb-3 px-3 py-0.5 bg-red-50 rounded-full">
              The Visionaries
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 leading-tight">
              Meet the Minds Behind <span className="text-red-600">VelDurSen</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Card Container */}
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
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest leading-none bg-red-600 px-2 py-1 rounded-sm">
                      {founder.role}
                    </p>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-5 flex flex-col flex-grow text-center items-center">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 transition-colors group-hover:text-red-600">
                    {founder.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow max-w-[200px]">
                    {founder.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <a href={founder.linkedin} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                      <Linkedin size={14} />
                    </a>
                    <a href={founder.twitter} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                      <Twitter size={14} />
                    </a>
                    <a href={`mailto:${founder.mail}`} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                      <Mail size={14} />
                    </a>
                  </div>
                </div>

                {/* Decorative border bottom */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RapidSupportSection = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="enterprise-container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Strategic Global Talent on Demand
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-bold text-red-600 mb-6"
          >
            We enable you to onboard specialized talent within 15 days (90% success rate)
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground leading-relaxed text-lg"
          >
            Our dedicated recruitment consultants bridge the gap between niche technology requirements and top-tier global talent.
            By combining deep domain expertise across critical industry verticals with architectural foresight, we ensure every
            placement is a perfect technical and cultural fit for your mission-critical operations.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Decorative background map (subtle) */}
          <div className="absolute inset-0 -z-10 opacity-5">
            <Globe className="w-full h-full text-slate-400" />
          </div>

          <div className="flex justify-center">
            <img
              src={supportBg}
              alt="Strategic Global Talent"
              className="w-full max-w-4xl h-auto object-contain transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustedPartnersLogos = () => {
  const logos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8];
  // Duplicate the logos array to ensure a seamless infinite scroll loop
  const scrollLogos = [...logos, ...logos, ...logos];

  return (
    <div className="bg-white py-16 border-t border-b border-border/50 overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
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
    </div>
  );
};

const Index = () => (
  <PageLayout>
    {/* Hero */}
    <section className="relative min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden group">
      {/* Background Image with Brightness Boost */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center brightness-125 transition-all duration-700 group-hover:brightness-140"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Modern Gradient Overlay for Text Readability - Dark on left for text, clear on right for image */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/20 md:from-primary/90 md:via-primary/50 md:to-transparent" />

      <div className="enterprise-container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4 drop-shadow-sm">
            Global Enterprise Technology Partner
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-primary-foreground leading-[1.1] mb-6 drop-shadow-2xl">
            AI-Driven Digital Transformation for Global Enterprises
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground font-medium leading-relaxed mb-8 max-w-2xl drop-shadow-lg">
            Trusted worldwide for building secure, scalable, and sustainable enterprise systems that power mission-critical operations across industries and continents.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Talk to Experts <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center rounded-md border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3 text-sm font-semibold transition-all duration-300 hover:bg-accent hover:border-accent hover:text-accent-foreground">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scrolling News Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-accent/95 backdrop-blur-sm py-3 overflow-hidden z-20 group">
        <div className="flex whitespace-nowrap animate-scroll group-hover:[animation-play-state:paused] transition-all duration-300">
          <span className="inline-flex items-center text-sm font-medium text-primary-foreground px-4">
            🚀 VelDurSen delivers Enterprise AI & Cloud Solutions  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  🤖 Intelligent Systems for Digital Transformation  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ☁️ Scalable Cloud Architecture & DevOps Services  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  📊 Data Analytics, ML & Automation Solutions  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  🌐 Secure, High-Performance IT Infrastructure  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  💼 Industry-ready Solutions for Healthcare, Finance & Manufacturing  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  🏆 Trusted by Growing Enterprises  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  📈 Engineering the Digital Backbone of Modern Businesses
          </span>
          <span className="inline-flex items-center text-sm font-medium text-primary-foreground px-4">
            🚀 VelDurSen delivers Enterprise AI & Cloud Solutions  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  🤖 Intelligent Systems for Digital Transformation  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ☁️ Scalable Cloud Architecture & DevOps Services  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  📊 Data Analytics, ML & Automation Solutions  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  🌐 Secure, High-Performance IT Infrastructure  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  💼 Industry-ready Solutions for Healthcare, Finance & Manufacturing  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  🏆 Trusted by Growing Enterprises  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  📈 Engineering the Digital Backbone of Modern Businesses
          </span>
        </div>
      </div>
    </section>

    {/* Global Presence Snapshot - NEW SECTION */}
    <section className="section-padding bg-white">
      <div className="enterprise-container">
        <SectionHeader
          tag="Global Operations"
          title="Worldwide Presence, Local Expertise"
          subtitle="Operating across multiple continents with a follow-the-sun delivery model, serving global enterprises around the clock."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {globalMetrics.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 md:p-8 rounded-xl border-2 border-accent/20 bg-card hover:shadow-xl hover:border-accent/40 transition-all duration-300"
            >
              <div className="metric-value mb-2">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* World Map Visualization - Full Screen */}
    <section className="relative w-full min-h-screen max-h-screen overflow-hidden bg-gradient-to-br from-muted via-muted/80 to-muted/50 flex items-center justify-center">
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
      <div className="relative z-20 text-center px-6">
        <Globe2 className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-white mx-auto mb-8 drop-shadow-lg" />
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-6 drop-shadow-lg">Global Delivery Network</h3>
        <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto drop-shadow-sm mb-6">
          <span className="font-semibold text-white">North America</span> <span className="text-white/60 mx-2">•</span> <span className="font-semibold text-white">Europe</span> <span className="text-white/60 mx-2">•</span> <span className="font-semibold text-white">Asia-Pacific</span> <span className="text-white/60 mx-2">•</span> <span className="font-semibold text-white">Middle East</span> <span className="text-white/60 mx-2">•</span> <span className="font-semibold text-white">Latin America</span>
        </p>
        <p className="text-base md:text-lg lg:text-xl text-white/80 mt-6 max-w-3xl mx-auto drop-shadow-sm">
          Our distributed teams enable continuous deployment, faster response times, and seamless collaboration across time zones.
        </p>
      </div>
    </section>

    {/* About Brief */}
    <section className="section-padding bg-section">
      <div className="enterprise-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3 block">About VelDurSen</span>
            <h2 className="section-title leading-snug mb-6">Your Trusted Partner in<br />Enterprise Digital Transformation</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              VelDurSen is a global Enterprise Technology & Digital Transformation company specializing in AI-first, security-first, and sustainability-driven solutions for the world's most demanding enterprises.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With operations spanning multiple continents and regional delivery centers worldwide, we deliver cutting-edge technology solutions that help organizations achieve their digital transformation goals while maintaining the highest standards of security, scalability, and sustainability.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From Fortune 500 enterprises to high-growth organizations across healthcare, finance, manufacturing, and beyond—our architecture-first engineering approach ensures every system we build is resilient, performant, and future-proof for global operations.
            </p>
            <Link
              to="/about"
              className="btn-enterprise"
            >
              Learn More About Us <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <ImageCarousel images={[aboutTeam, aboutImage1, aboutImage2]} interval={4000} />
          </motion.div>
        </div>
      </div>
    </section>










    {/* Rapid Support Section */}
    <RapidSupportSection />
    <TrustedPartnersLogos />
    <WhatWeAreUptoSection />

    {/* What We Provide Section */}
    <section className="section-padding bg-white">
      <div className="enterprise-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            What we provide
          </motion.h2>
        </div>

        {/* Tab Navigation */}
        <WhatWeProvideSection />
      </div>
    </section>

    {/* Testimonials Carousel */}
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="enterprise-container">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 whitespace-nowrap"
          >
            Few words from our happy customers
          </motion.h2>
        </div>

        <TestimonialsCarousel />
      </div>
    </section>

    {/* Founders Section */}
    <FoundersSection />

    {/* Video Section Above Footer */}
    <section className="w-full h-screen overflow-hidden relative bg-slate-900">
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
    </section>


  </PageLayout>
);

export default Index;
