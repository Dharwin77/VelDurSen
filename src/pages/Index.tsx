import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Brain, Cloud, Shield, Database, Code, Leaf,
  Heart, Landmark, Factory, ShoppingCart, Building2, Sprout,
  CheckCircle, Globe, Users, Server, Zap, TrendingUp, Globe2,
  Award, Building, Wheat, GraduationCap, Sparkles
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
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`VelDurSen team ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
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
  { icon: Brain, title: "Enterprise AI Solutions", desc: "Generative AI, NLP, computer vision, and predictive analytics powering intelligent enterprise systems across industries worldwide." },
  { icon: Cloud, title: "Cloud & DevOps Engineering", desc: "Cloud-native architectures, CI/CD pipelines, Kubernetes orchestration, and multi-cloud strategies for global scalability." },
  { icon: Shield, title: "Cybersecurity & Compliance", desc: "Zero-trust frameworks, IAM, compliance automation, and enterprise-grade threat protection across all jurisdictions." },
  { icon: Database, title: "Data Engineering & Analytics", desc: "ETL pipelines, big data processing, real-time analytics, and BI dashboard solutions for data-driven enterprises." },
  { icon: Code, title: "Enterprise Software Development", desc: "Custom ERP, CRM, dashboards, and mission-critical enterprise application development with global deployment capability." },
  { icon: Leaf, title: "Sustainable Technology", desc: "Carbon-aware cloud systems, green computing practices, and ethical AI frameworks for responsible innovation worldwide." },
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

const Index = () => (
  <PageLayout>
    {/* Hero */}
    <section
      className="relative min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-primary/80" />
      <div className="enterprise-container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Global Enterprise Technology Partner
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-primary-foreground leading-[1.1] mb-6">
            AI-Driven Digital Transformation for <span className="text-accent">Global Enterprises</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
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
      <div className="absolute bottom-0 left-0 right-0 bg-accent/95 backdrop-blur-sm py-3 overflow-hidden z-20">
        <div className="flex whitespace-nowrap animate-scroll hover:pause-animation transition-all duration-300">
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
              onMouseEnter={() => document.documentElement.classList.add('color-shift')}
              onMouseLeave={() => document.documentElement.classList.remove('color-shift')}
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

    {/* Core Pillars */}
    <section className="section-padding bg-white">
      <div className="enterprise-container">
        <SectionHeader
          tag="Core Technology Capabilities"
          title="Enterprise-Grade Technology Solutions"
          subtitle="Comprehensive digital transformation services powered by cutting-edge technology and deep industry expertise serving enterprises worldwide."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-8 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <p.icon className="text-accent" size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="btn-outline-enterprise">
            Explore All Services <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>

    {/* Engineering Excellence */}
    <section className="section-padding bg-section">
      <div className="enterprise-container">
        <SectionHeader
          tag="Engineering Excellence"
          title="Architecture-First Systems Engineering"
          subtitle="Every system we build starts with architecture. Scalability, security, and performance are designed in from day one—never bolted on as an afterthought."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Server, title: "Scalability by Design", desc: "Horizontally scalable microservices architectures built to grow with enterprise demands without performance degradation. Supporting millions of concurrent users worldwide." },
            { icon: Shield, title: "Security by Design", desc: "Zero-trust security models, end-to-end encrypted data pipelines, and compliance-ready systems built from the ground up for global regulatory requirements." },
            { icon: Zap, title: "Performance by Design", desc: "Sub-millisecond latencies, optimized query engines, intelligent caching layers, and CDN strategies for mission-critical global performance." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="text-primary" size={26} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="section-padding bg-white">
      <div className="enterprise-container">
        <SectionHeader
          tag="Industry Expertise"
          title="Transforming Industries Worldwide"
          subtitle="Deep domain knowledge and proven expertise across critical sectors driving global economic growth and innovation."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative h-40 rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl hover:border-accent/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                <ind.icon className="text-accent mb-3 group-hover:scale-110 transition-transform" size={36} />
                <span className="text-sm font-bold mb-1">{ind.name}</span>
                <span className="text-xs text-muted-foreground">{ind.count}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/industries" className="btn-enterprise">
            Explore All Industries <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>

    {/* Achievements Highlights */}
    <section className="section-padding bg-section">
      <div className="enterprise-container">
        <SectionHeader
          tag="Achievements"
          title="Proven Enterprise Excellence"
          subtitle="Delivering measurable impact and value to global enterprises across mission-critical systems and operations worldwide."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {secondaryMetrics.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3">
                <AnimatedCounter value={achievement.value} />
              </div>
              <div className="text-sm font-semibold text-foreground uppercase tracking-wider">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/achievements" className="btn-outline-enterprise">
            View All Achievements <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>

    {/* Sustainability */}
    <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="enterprise-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <img src={globalMap} alt="Global sustainability initiatives" className="rounded-2xl shadow-2xl w-full border-2 border-green-200" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600 mb-3 block">Sustainability & Green Tech</span>
            <h2 className="section-title">Building a Greener Digital Future</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're committed to building technology that respects our planet and future generations. Our green computing initiatives, carbon-aware cloud deployments, and ethical AI frameworks ensure sustainable innovation across all our global operations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From energy-efficient data centers to renewable-powered cloud regions, we help enterprises reduce their carbon footprint while maintaining peak performance and reliability.
            </p>
            <ul className="space-y-4">
              {[
                "Green computing & energy-efficient infrastructure worldwide",
                "Carbon-aware cloud resource optimization and scheduling",
                "Ethical AI governance & responsible data practices",
                "Sustainable software engineering methodologies",
                "Renewable energy-powered delivery centers",
                "Circular economy principles in system design"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Leaf size={20} className="text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* History Snapshot */}
    <section className="section-padding bg-white">
      <div className="enterprise-container">
        <SectionHeader
          tag="Our Journey"
          title="From Vision to Global Impact"
          subtitle="A decade of innovation, growth, and digital transformation excellence spanning multiple continents."
        />
        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-accent/20 -translate-y-1/2 hidden md:block"></div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { year: "2014", title: "Foundation", desc: "Established with a vision for AI-first enterprise systems" },
              { year: "2017", title: "Global Expansion", desc: "Operations across 3 continents serving 20+ countries" },
              { year: "2021", title: "Cloud Leadership", desc: "1000+ cloud-native systems delivered worldwide" },
              { year: "2025", title: "Sustainable Future", desc: "Leading green tech transformation globally" }
            ].map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg relative z-10">
                  {milestone.year.slice(-2)}
                </div>
                <div className="text-sm font-semibold text-accent mb-2">{milestone.year}</div>
                <div className="text-lg font-bold mb-2">{milestone.title}</div>
                <div className="text-sm text-muted-foreground">{milestone.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to="/history" className="btn-enterprise">
            Explore Our Complete History <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>

    {/* Blog */}
    <BlogPreview />

    {/* Final Global CTA */}
    <section className="section-padding bg-primary">
      <div className="enterprise-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5">
            Ready to Transform?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Partner with a Global Enterprise Technology Leader
          </h2>
          <p className="text-xl text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join 500+ global enterprises who trust VelDurSen to build secure, scalable, and sustainable digital systems that power their mission-critical operations worldwide.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-accent inline-flex items-center px-10 py-4 text-base">
              Talk to Our Experts <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/services" className="inline-flex items-center px-10 py-4 text-base rounded-md border-2 border-white text-white font-semibold transition-all duration-200 hover:bg-white hover:text-primary">
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default Index;
