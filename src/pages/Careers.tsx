import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users, Lightbulb, GraduationCap, Leaf, Heart, Code, Globe, TrendingUp,
  CheckCircle, Briefcase, MapPin, ArrowRight, MessageSquare, Search,
  ChevronDown, ChevronLeft, ChevronRight, Award, Clock, FileText, Video,
  Handshake, Plus, Minus, Upload, X, Rocket, Globe2
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import WhyChooseUsCards from "@/components/WhyChooseUsCards";
import { SEO } from "@/components/shared/SEO";
import careerVideo from "@/assets/career.mp4";
import { client, urlFor } from "@/lib/sanity";

const allJobs = [
  { id: 1, role: "Senior AI/ML Engineer", department: "Engineering", location: "Remote – Global", type: "Full-time", description: "Design and implement cutting-edge AI models for enterprise scale." },
  { id: 2, role: "Cloud Architect", department: "SRE & Cloud", location: "New York, USA", type: "Full-time", description: "Architect resilient, global cloud infrastructures on AWS and Azure." },
  { id: 3, role: "DevOps Engineer", department: "SRE & Cloud", location: "Berlin, Germany", type: "Full-time", description: "Automate delivery pipelines and scale containerized workloads." },
  { id: 4, role: "Cybersecurity Analyst", department: "Security", location: "Singapore", type: "Full-time", description: "Defend global enterprise networks with zero-trust frameworks." },
  { id: 5, role: "Data Engineer", department: "Engineering", location: "London, UK", type: "Full-time", description: "Build data pipelines that drive insights and decision-making." },
  { id: 6, role: "Full Stack Developer", department: "Engineering", location: "Bangalore, India", type: "Full-time", description: "Build beautiful, responsive web interfaces that millions use daily." },
];

const cultureValues = [
  { icon: Users, title: "Collaboration", description: "We believe great things happen when diverse minds work together. Your ideas matter." },
  { icon: TrendingUp, title: "Learning", description: "Continuous growth is part of our DNA. We invest in your development every day." },
  { icon: Leaf, title: "Flexibility", description: "Work when, where, and how you're most productive. We trust you to get it done." },
  { icon: Heart, title: "Ownership", description: "You're not just an employee—you're a stakeholder in our success and impact." },
];

const testimonials = [
  { name: "Sarah Chen", role: "Senior Frontend Developer", quote: "I joined Veldursen three years ago and the growth has been incredible. I went from senior engineer to tech lead, and they supported every step.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
  { name: "Marcus Johnson", role: "Product Designer", quote: "What impressed me most was the autonomy. I'm not just executing designs—I'm shaping product direction. The balance is rare to find.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Priya Patel", role: "Backend Engineer", quote: "The engineering culture here is second to none. Code reviews are collaborative, not gatekeeping. Everyone's invested in making you better.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
];

const hiringSteps = [
  { step: 1, title: "Application", icon: FileText, description: "Submit your application and resume" },
  { step: 2, title: "HR Screening", icon: Users, description: "Casual conversation about your goals" },
  { step: 3, title: "Technical Interview", icon: Code, description: "Deep dive into your skills" },
  { step: 4, title: "Final Round", icon: Video, description: "Meet the team and leadership" },
  { step: 5, title: "Offer", icon: Handshake, description: "Welcome to the team!" },
];

const faqs = [
  { question: "Do you offer remote work opportunities?", answer: "Yes! We're a remote-first company. Most of our roles can be performed from anywhere in the world. Some positions may require occasional travel or specific timezone availability." },
  { question: "What is your interview process like?", answer: "Our process typically includes: Application Review → HR Screening → Technical Interview → Final Round → Offer. The entire process usually takes 2-3 weeks." },
  { question: "Do you offer internships?", answer: "Absolutely! We offer internships across various departments including Engineering, Design, Marketing, and Product. Internships are typically 3-6 months with potential for full-time conversion." },
  { question: "What benefits do you provide?", answer: "We offer comprehensive health insurance, mental health support, fitness stipend, learning budget, flexible work hours, unlimited PTO, and performance bonuses. We also provide stock options for eligible roles." },
  { question: "How do you support career growth?", answer: "We provide annual learning budgets, mentorship programs, internal knowledge-sharing sessions, conference sponsorships, and clear career advancement pathways with regular performance reviews." },
];

const quizQuestions = [
  { question: "What energizes you most at work?", options: [{ text: "Building & creating things", value: "engineering" }, { text: "Designing beautiful experiences", value: "design" }, { text: "Analyzing data & solving problems", value: "data" }, { text: "Leading teams & strategy", value: "product" }] },
  { question: "Which describes your ideal work style?", options: [{ text: "Coding & technical problem-solving", value: "engineering" }, { text: "Visual creativity & user research", value: "design" }, { text: "Numbers, metrics & insights", value: "data" }, { text: "Cross-functional collaboration", value: "product" }] },
  { question: "What excites you about technology?", options: [{ text: "System architecture & performance", value: "engineering" }, { text: "User interface & interactions", value: "design" }, { text: "Patterns & predictions", value: "data" }, { text: "Customer impact & innovation", value: "product" }] },
];


const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number, animationFrame: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  return <span>{count}{suffix}</span>;
};

const Careers = () => {
  // --- Sanity section state ---
  const [heroData, setHeroData] = useState<any>(null);
  const [cultureData, setCultureData] = useState<any>(null);
  const [growthData, setGrowthData] = useState<any>(null);
  const [dayInLifeData, setDayInLifeData] = useState<any>(null);
  const [rolesData, setRolesData] = useState<any>(null);
  const [hiringData, setHiringData] = useState<any>(null);
  const [testimonialsData, setTestimonialsData] = useState<any>(null);
  const [faqData, setFaqData] = useState<any>(null);
  const [ctaData, setCtaData] = useState<any>(null);
  const [approachData, setApproachData] = useState<any>(null);

  // --- UI state (must be declared before any return) ---
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [showQuickApply, setShowQuickApply] = useState(false);
  const [showResumeUpload, setShowResumeUpload] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [profileStrength, setProfileStrength] = useState(0);
  const [experienceLevel, setExperienceLevel] = useState(3);
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);

  // --- Fetch all career sections from Sanity ---
  useEffect(() => {
    const query = `{
      "hero": *[_type == "careersHero"][0],
      "approach": *[_type == "careersOurApproach"][0],
      "culture": *[_type == "careersLifeAtVeldursen"][0],
      "growth": *[_type == "careersGrowth"][0],
      "dayInLife": *[_type == "careersDayInTheLife"][0],
      "roles": *[_type == "careersFindYourRole"][0],
      "hiring": *[_type == "careersHiringJourney"][0],
      "testimonials": *[_type == "careersHearFromTeam"][0],
      "faq": *[_type == "careersFAQ"][0],
      "cta": *[_type == "careersReadyToMakeImpact"][0]
    }`;
    client.fetch(query).then((res: any) => {
      console.log("🔍 Sanity careers data:", res);
      if (res.hero) setHeroData(res.hero);
      if (res.approach) setApproachData(res.approach);
      if (res.culture) setCultureData(res.culture);
      if (res.growth) setGrowthData(res.growth);
      if (res.dayInLife) setDayInLifeData(res.dayInLife);
      if (res.roles) setRolesData(res.roles);
      if (res.hiring) setHiringData(res.hiring);
      if (res.testimonials) setTestimonialsData(res.testimonials);
      if (res.faq) setFaqData(res.faq);
      if (res.cta) setCtaData(res.cta);
    }).catch(console.error);
  }, []);

  // --- Derived data: Sanity or defaults ---
  const displayJobs = (rolesData?.jobs?.length > 0) ? rolesData.jobs : allJobs;
  const displayCultureValues = (cultureData?.values?.length > 0) ? cultureData.values : cultureValues;
  const displayTestimonials = (testimonialsData?.testimonials?.length > 0) ? testimonialsData.testimonials : testimonials;
  const displayHiringSteps = (hiringData?.steps?.length > 0) ? hiringData.steps : hiringSteps;
  const displayFaqs = (faqData?.faqs?.length > 0) ? faqData.faqs : faqs;
  const displayGrowthStages = (growthData?.stages?.length > 0) ? growthData.stages : [
    { year: "Year 1", role: "Junior", salaryRange: "$60-80K" },
    { year: "Year 3", role: "Mid-Level", salaryRange: "$90-120K" },
    { year: "Year 5+", role: "Senior/Lead", salaryRange: "$140-180K" },
  ];
  const employeeProfilesDefault = [
    { name: "Alex Rivera", role: "Senior Engineer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop", schedule: ["9:00 AM - Stand-up", "10:00 AM - Code Review", "2:00 PM - Architecture Planning", "4:00 PM - Mentoring"], tools: ["VS Code", "Docker", "Kubernetes"], journey: "Junior Dev → Senior in 3 years" },
    { name: "Maya Patel", role: "Product Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop", schedule: ["9:30 AM - Design Critique", "11:00 AM - User Research", "1:00 PM - Prototyping", "3:30 PM - Team Sync"], tools: ["Figma", "Miro", "Notion"], journey: "Intern → Lead Designer in 4 years" },
  ];
  const displayDayProfiles = (dayInLifeData?.profiles?.length > 0) ? dayInLifeData.profiles : employeeProfilesDefault;
  const displayStats = (heroData?.stats?.length > 0) ? heroData.stats : [
    { label: "Open Roles", value: 12, iconName: "Briefcase" },
    { label: "Hiring This Month", value: 8, iconName: "TrendingUp" },
    { label: "Avg Response Time", value: 7, iconName: "Clock", suffix: " days" },
    { label: "Team Growth", value: 45, iconName: "Users", suffix: "%" },
  ];
  const displayCultureStats = (cultureData?.stats?.length > 0) ? cultureData.stats : [
    { value: 150, suffix: "+", label: "Team Members" },
    { value: 25, suffix: "+", label: "Countries" },
    { value: 500, suffix: "+", label: "Projects Delivered" },
  ];

  // Icon lookup helper
  const getIcon = (iconName: string) => {
    const icons: any = { Users, Lightbulb, GraduationCap, Leaf, Heart, Code, Globe, TrendingUp, CheckCircle, Briefcase, MapPin, ArrowRight, MessageSquare, Search, Clock, FileText, Video, Handshake, Award, Rocket, Globe2 };
    return icons[iconName] || Briefcase;
  };

  const filteredJobs = displayJobs.filter((job: any) => {
    const matchesSearch = (job.role || "").toLowerCase().includes(searchTerm.toLowerCase()) || (job.description || "").toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === "All" || job.department === departmentFilter;
    const matchesLocation = locationFilter === "All" || (job.location || "").includes(locationFilter);
    const matchesType = typeFilter === "All" || job.type === typeFilter;
    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  const departments = ["All", ...Array.from(new Set(displayJobs.map((j: any) => j.department).filter(Boolean)))];
  const locations = ["All", "Remote", "USA", "UK", "Germany", "Singapore", "India"];
  const types = ["All", "Full-time", "Internship"];

  useEffect(() => {
    const interval = setInterval(() => setCurrentTestimonial((prev) => (prev + 1) % displayTestimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const handleQuizAnswer = (value: string) => {
    const newAnswers = [...quizAnswers, value];
    setQuizAnswers(newAnswers);
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setShowQuizResult(true);
    }
  };

  const getQuizResult = () => {
    const counts: { [key: string]: number } = {};
    quizAnswers.forEach((answer) => { counts[answer] = (counts[answer] || 0) + 1; });
    const winner = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
    const roleMap: { [key: string]: string } = { engineering: "Engineering", design: "Design", data: "Data & Analytics", product: "Product Management" };
    return roleMap[winner] || "Engineering";
  };

  const resetQuiz = () => { setQuizStep(0); setQuizAnswers([]); setShowQuizResult(false); };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
      setTimeout(() => setProfileStrength(75), 500);
    }
  };





  return (
    <PageLayout>
      <SEO
        title="Careers at VelDurSen | Build the Future of Enterprise Tech"
        description="Join VelDurSen's global team of engineers and innovators. Explore career opportunities in AI, Cloud, Data, and Cybersecurity. Remote-first culture."
        keywords={["VelDurSen careers", "Tech jobs", "Remote engineering jobs", "AI engineer roles", "Cloud architect careers"]}
        schemas={[{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": allJobs.map((job, index) => ({
            "@type": "JobPosting",
            "position": index + 1,
            "title": job.role,
            "description": job.description,
            "datePosted": "2024-05-20",
            "validThrough": "2024-12-31",
            "employmentType": job.type,
            "hiringOrganization": {
              "@type": "Organization",
              "name": "VelDurSen Technologies",
              "sameAs": "https://veldursen.com"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": job.location,
                "addressCountry": "Global"
              }
            }
          }))
        }]}
      />
      {/* Floating Quick Apply Button */}
      <AnimatePresence>
        {!showQuickApply && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => {
              const openingsSection = document.getElementById('openings');
              if (openingsSection) {
                openingsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group fixed bottom-8 right-8 z-50 bg-white hover:bg-gray-50 text-[#C0392B] border-2 border-red-300 hover:border-[#C0392B] rounded-full shadow-2xl flex items-center gap-2 font-semibold transition-all duration-300 overflow-hidden"
            style={{ width: '64px', height: '64px' }}
            whileHover={{ width: '180px' }}
          >
            <div className="flex items-center justify-center w-16 h-16 flex-shrink-0">
              <Rocket size={24} />
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pr-4">
              View Roles
            </span>
          </motion.button>
        )}
      </AnimatePresence>





      {/* Hero Section - PRESERVED from original */}
      <section className="hero-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-[10s]"
        >
          <source src={careerVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10" />

        <div className="enterprise-container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-red-500 mb-3 sm:mb-6 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              {heroData?.badge || "Careers"}
            </span>
            <h1 className="text-[1.85rem] sm:text-[4.5rem] md:text-[6.5rem] font-bold text-white leading-[1] sm:leading-[0.95] mb-4 sm:mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              {heroData?.titleLine1 || "Build the"} <br />
              <span className="text-red-600">{heroData?.titleLine2 || "Future."}</span>
            </h1>
            <p className="text-sm sm:text-xl md:text-2xl text-slate-300 font-medium mb-5 sm:mb-12 max-w-2xl leading-relaxed drop-shadow-md">
              {heroData?.description || "Join a global team of engineers, architects, and innovators who are transforming how enterprises leverage technology."}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link to={heroData?.buttonLink || "/contact"} state={{ fromButton: true }} className="btn-enterprise py-3 sm:py-5 px-8 sm:px-12 text-sm sm:text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-2xl shadow-red-600/20">
                {heroData?.buttonText || "Join the Team"}
              </Link>
              <div className="flex items-center gap-4 px-6 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                <Globe2 size={16} className="text-red-600 shadow-sm" /> Working in 150+ Countries
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Abstract Element */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-0" />
      </section>

      {/* NEW SECTIONS BELOW HERO */}

      {/* Real-Time Team Insights */}
      <section className="py-16 bg-gradient-to-r from-[#C0392B] to-[#5D4037] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {displayStats.map((stat: any, i: number) => {
              const IconComp = getIcon(stat.iconName || "Briefcase");
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <IconComp size={32} className="mx-auto mb-2" />
                  <div className="text-4xl font-bold mb-1"><AnimatedCounter end={stat.value} suffix={stat.suffix || ""} /></div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Polaroid Cards */}
      <WhyChooseUsCards
        heading={approachData?.heading}
        subHeading={approachData?.subHeading}
        description={approachData?.description}
        cards={approachData?.whyChooseUsCards}
      />

      {/* Culture Section with Stats */}
      <section id="culture" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em]">Culture</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6 tracking-tighter">
              {cultureData?.heading ? <span dangerouslySetInnerHTML={{ __html: cultureData.heading.replace(/(Veldursen\.?)/, '<span class="text-blue-600">$1</span>') }} /> : <>Life at <span className="text-blue-600">Veldursen.</span></>}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              {cultureData?.description || "We're built on trust, creativity, and a passion for solving complex problems."}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {displayCultureStats.map((stat: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="text-center p-8 bg-slate-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="text-5xl font-bold text-blue-600 mb-2"><AnimatedCounter end={stat.value ?? stat.end} suffix={stat.suffix} /></div>
                <div className="text-lg text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative group">
              <img src={cultureData?.cultureImage ? urlFor(cultureData.cultureImage).url() : "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=800&fit=crop"} alt="Culture" className="w-full h-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
            <div className="space-y-6">
              {displayCultureValues.map((value: any, i: number) => {
                const IconComp = value.icon || getIcon(value.iconName || "Users");
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-50 rounded-xl p-6 hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-lg bg-blue-600/10 flex items-center justify-center"><IconComp className="text-blue-600" size={28} /></div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-slate-600">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Career Growth Simulator */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-slate-900">
              {growthData?.heading || "Your Growth Path at"} <span className="text-orange-600">{growthData?.heading ? "" : "Veldursen."}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">{growthData?.description || "Explore your potential career trajectory"}</p>
          </motion.div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <label className="block mb-4 font-semibold">Experience Level: {experienceLevel} years</label>
            <input type="range" min="0" max="10" value={experienceLevel} onChange={(e) => setExperienceLevel(parseInt(e.target.value))} className="w-full mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {displayGrowthStages.map((stage: any, i: number) => (
                <div key={i} className={`p-4 rounded-lg ${experienceLevel >= i * 2 ? "bg-orange-600 text-white" : "bg-slate-100"}`}>
                  <div className="font-bold">{stage.year}</div>
                  <div className="text-sm">{stage.role}</div>
                  <div className="text-xs mt-1">{stage.salaryRange || stage.salary}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Day in the Life */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-slate-900">
              {dayInLifeData?.heading || "A Day in the"} <span className="text-green-600">{dayInLifeData?.heading ? "" : "Life."}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">{dayInLifeData?.description || "Click to explore employee journeys"}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayDayProfiles.map((emp: any, i: number) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-slate-50 rounded-2xl p-8 cursor-pointer overflow-hidden text-center" onClick={() => setSelectedEmployee(i)}>
                <div className="mb-6 flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-600/20 shadow-lg">
                    <img src={emp.image?.asset ? urlFor(emp.image).url() : emp.image} alt={emp.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{emp.name}</h3>
                  <p className="text-slate-600 mb-4">{emp.role}</p>
                </div>
                <p className="text-sm text-slate-500">Click to see their daily schedule →</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Modal */}
      <AnimatePresence>
        {selectedEmployee !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedEmployee(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] relative"
            >
              <button
                onClick={() => setSelectedEmployee(null)}
                className="absolute top-4 right-4 z-[110] bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white shadow-lg transition-all border border-slate-200"
              >
                <X size={20} className="text-slate-800" />
              </button>

              <div className="md:w-1/3 relative">
                <div className="w-full h-64 md:h-full relative overflow-hidden">
                  <img src={displayDayProfiles[selectedEmployee]?.image?.asset ? urlFor(displayDayProfiles[selectedEmployee].image).url() : displayDayProfiles[selectedEmployee]?.image} alt={displayDayProfiles[selectedEmployee]?.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">{displayDayProfiles[selectedEmployee]?.name}</h3>
                    <p className="text-sm text-white/80">{displayDayProfiles[selectedEmployee]?.role}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8 overflow-y-auto max-h-[60vh]">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-green-600 mb-2">Their Journey</h4>
                  <p className="text-slate-600">{displayDayProfiles[selectedEmployee]?.journey}</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-green-600 mb-3">Daily Schedule</h4>
                  <div className="space-y-2">
                    {(displayDayProfiles[selectedEmployee]?.schedule || []).map((item: any, i: number) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"><Clock size={16} className="text-green-600" /><span className="text-sm">{item}</span></div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-600 mb-3">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {(displayDayProfiles[selectedEmployee]?.tools || []).map((tool: any, i: number) => (
                      <span key={i} className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full font-medium">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Job Search Section */}
      <section id="openings" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900">
              {rolesData?.heading || <>Find Your Perfect <span className="text-red-600">Role.</span></>}
            </h2>
          </motion.div>
          <div className="space-y-4 max-w-5xl mx-auto">
            <AnimatePresence>
              {filteredJobs.length > 0 ? filteredJobs.map((job: any, idx: number) => (
                <motion.div key={job.id || idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 hover:border-[#C0392B] hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold">{job.role}</h3>
                        <span className="px-3 py-1 bg-[#C0392B]/10 text-[#C0392B] text-xs font-semibold rounded-full">{job.department}</span>
                      </div>
                      <p className="text-slate-600 mb-3">{job.description}</p>
                      <div className="flex gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><MapPin size={16} />{job.location}</span>
                        <span className="flex items-center gap-1"><Briefcase size={16} />{job.type}</span>
                      </div>
                    </div>
                    <Link to={job.applyLink || "/contact"} className="bg-[#C0392B] hover:bg-[#a02f24] text-white rounded-lg px-6 py-3 font-semibold inline-flex items-center gap-2 transition-all transform hover:scale-105 whitespace-nowrap">Apply Now <ArrowRight size={18} /></Link>
                  </div>
                </motion.div>
              )) : (
                <p className="text-center text-slate-500">No roles found.</p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900">
              {hiringData?.heading || <>Our Hiring <span className="text-blue-600">Journey.</span></>}
            </h2>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#C0392B] via-[#5D4037] to-[#C0392B]" style={{ width: "calc(100% - 100px)", left: "50px" }} />
              {displayHiringSteps.map((step: any, i: number) => {
                const StepIcon = step.icon || getIcon(step.iconName || "FileText");
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative text-center">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-[280px] flex flex-col justify-between">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C0392B] to-[#5D4037] text-white flex items-center justify-center mx-auto mb-4"><StepIcon size={28} /></div>
                      <div className="text-sm font-bold text-[#C0392B] mb-2">STEP {step.step || step.stepNumber || i + 1}</div>
                      <h3 className="font-bold mb-2 text-lg">{step.title}</h3>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900">
              {testimonialsData?.heading || <>Hear From Our <span className="text-orange-600">Team.</span></>}
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div key={currentTestimonial} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="bg-slate-50 rounded-2xl p-12 shadow-2xl">
                <div className="flex gap-2 mb-6">{[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-2xl">★</span>)}</div>
                <blockquote className="text-2xl text-slate-700 mb-8 italic">"{displayTestimonials[currentTestimonial]?.quote}"</blockquote>
                <div className="flex items-center gap-4 border-t pt-6">
                  <img src={displayTestimonials[currentTestimonial]?.image?.asset ? urlFor(displayTestimonials[currentTestimonial].image).url() : displayTestimonials[currentTestimonial]?.image} alt={displayTestimonials[currentTestimonial]?.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <p className="font-bold text-xl">{displayTestimonials[currentTestimonial]?.name}</p>
                    <p className="text-slate-600">{displayTestimonials[currentTestimonial]?.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => setCurrentTestimonial((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length)} className="w-12 h-12 rounded-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center"><ChevronLeft size={24} /></button>
              <div className="flex gap-2">{displayTestimonials.map((_: any, i: number) => <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-3 h-3 rounded-full transition-all ${i === currentTestimonial ? "bg-orange-600 w-8" : "bg-slate-300"}`} />)}</div>
              <button onClick={() => setCurrentTestimonial((prev) => (prev + 1) % displayTestimonials.length)} className="w-12 h-12 rounded-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center"><ChevronRight size={24} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Role Matcher Quiz */}
      <section className="py-24 bg-gradient-to-br from-[#C0392B] to-[#5D4037]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              Not Sure Which Role Suits You?
            </h2>
          </motion.div>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {!showQuizResult ? (
              <AnimatePresence mode="wait">
                <motion.div key={quizStep} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                  <div className="mb-8">
                    <div className="w-full bg-slate-200 rounded-full h-2"><div className="bg-[#C0392B] h-2 rounded-full transition-all" style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }} /></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-8">{quizQuestions[quizStep].question}</h3>
                  <div className="space-y-4">
                    {quizQuestions[quizStep].options.map((option, i) => (
                      <button key={i} onClick={() => handleQuizAnswer(option.value)} className="w-full p-6 text-left bg-slate-50 hover:bg-[#C0392B]/10 border-2 border-slate-200 hover:border-[#C0392B] rounded-xl transition-all"><span className="text-lg font-medium">{option.text}</span></button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <CheckCircle className="text-green-600 mx-auto mb-6" size={64} />
                <h3 className="text-3xl font-bold mb-4">Perfect Match!</h3>
                <p className="text-4xl font-bold text-[#C0392B] mb-8">{getQuizResult()}</p>
                <div className="flex gap-4 justify-center">
                  <a href="#openings" className="bg-[#C0392B] hover:bg-[#a02f24] text-white px-8 py-3 rounded-lg font-semibold">View Roles</a>
                  <button onClick={resetQuiz} className="bg-slate-200 px-8 py-3 rounded-lg font-semibold">Retake</button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900">
              {faqData?.heading || <>Frequently Asked <span className="text-red-600">Questions.</span></>}
            </h2>
          </motion.div>
          <div className="space-y-4">
            {displayFaqs.map((faq: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-2 rounded-xl overflow-hidden">
                <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className="w-full p-6 text-left bg-slate-50 hover:bg-slate-100 flex justify-between items-center">
                  <span className="text-lg font-semibold">{faq.question}</span>
                  {expandedFaq === i ? <Minus className="text-[#C0392B]" size={24} /> : <Plus className="text-[#C0392B]" size={24} />}
                </button>
                <AnimatePresence>{expandedFaq === i && <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden"><div className="p-6 bg-white text-slate-600">{faq.answer}</div></motion.div>}</AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#FBFBF9]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-[#3E2723]">
              {ctaData?.heading || <>Ready to Make an <span className="text-red-600">Impact?</span></>}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-10">{ctaData?.description || "Send us your resume and tell us what you're working on."}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href={ctaData?.applyButtonLink || "#openings"} className="bg-[#C0392B] hover:bg-[#a02f24] text-white rounded-lg px-10 py-4 text-lg font-semibold inline-flex items-center justify-center gap-2 transition-all transform hover:scale-105">{ctaData?.applyButtonText || "Apply Today"} <ArrowRight size={20} /></a>
              <a href={ctaData?.contactButtonLink || "mailto:careers@veldursen.com"} className="btn-outline-enterprise"><MessageSquare size={20} />{ctaData?.contactButtonText || "Contact HR"}</a>
            </div>
            <p className="text-[#5D4037] text-lg font-bold"><a href={`mailto:${ctaData?.contactEmail || "careers@veldursen.com"}`} className="hover:text-[#C0392B]">{ctaData?.contactEmail || "careers@veldursen.com"}</a></p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
