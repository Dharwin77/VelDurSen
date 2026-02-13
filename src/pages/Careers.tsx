import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Users, Lightbulb, GraduationCap, Leaf, Heart, Code, Globe, TrendingUp,
  CheckCircle, Briefcase, MapPin, ArrowRight, MessageSquare, Search,
  ChevronDown, ChevronLeft, ChevronRight, Award, Target, Coffee, Zap,
  Clock, FileText, Video, Handshake, Gift, Plus, Minus, Upload, X,
  TrendingDown, Calendar, Building, Rocket, Mail, Send, Sun, Moon,
  BarChart3, PieChart, Activity, UserCheck, Sparkles
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

// ... (keeping all existing data: allJobs, cultureValues, benefits, testimonials, hiringSteps, faqs, quizQuestions)

const allJobs = [
  { id: 1, role: "Frontend Developer", department: "Engineering", location: "Remote – Global", type: "Full-time", description: "Build beautiful, responsive web interfaces that millions use daily." },
  { id: 2, role: "Backend Developer", department: "Engineering", location: "New York, USA", type: "Full-time", description: "Design scalable APIs and systems that power enterprise solutions." },
  { id: 3, role: "UI/UX Designer", department: "Design", location: "Berlin, Germany", type: "Full-time", description: "Create intuitive user experiences for complex enterprise products." },
  { id: 4, role: "QA Engineer", department: "Quality Assurance", location: "London, UK", type: "Full-time", description: "Ensure product quality and reliability across all platforms." },
  { id: 5, role: "DevOps Engineer", department: "Infrastructure", location: "Singapore", type: "Full-time", description: "Manage and optimize cloud infrastructure for global scale." },
  { id: 6, role: "Data Engineer", department: "Data & Analytics", location: "Bangalore, India", type: "Full-time", description: "Build data pipelines that drive insights and decision-making." },
  { id: 7, role: "Product Manager", department: "Product", location: "Remote – Global", type: "Full-time", description: "Lead product strategy and drive customer-centric innovation." },
  { id: 8, role: "Marketing Intern", department: "Marketing", location: "New York, USA", type: "Internship", description: "Support digital marketing campaigns and content creation." },
];

const cultureValues = [
  { icon: Users, title: "Collaboration", description: "We believe great things happen when diverse minds work together. Your ideas matter." },
  { icon: TrendingUp, title: "Learning", description: "Continuous growth is part of our DNA. We invest in your development every day." },
  { icon: Leaf, title: "Flexibility", description: "Work when, where, and how you're most productive. We trust you to get it done." },
  { icon: Heart, title: "Ownership", description: "You're not just an employee—you're a stakeholder in our success and impact." },
];

const benefits = [
  { icon: GraduationCap, title: "Learning & Development", items: ["Annual learning budget", "Conference sponsorships", "Skill development programs"] },
  { icon: Heart, title: "Health & Wellness", items: ["Comprehensive health insurance", "Mental health support", "Fitness stipend"] },
  { icon: Globe, title: "Flexible Work", items: ["Remote-first culture", "Flexible hours", "Unlimited PTO"] },
  { icon: Award, title: "Performance Bonuses", items: ["Quarterly bonuses", "Stock options", "Career advancement"] },
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
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showQuickApply, setShowQuickApply] = useState(false);
  const [showResumeUpload, setShowResumeUpload] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [profileStrength, setProfileStrength] = useState(0);
  const [showTalentSignup, setShowTalentSignup] = useState(false);
  const [talentEmail, setTalentEmail] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [experienceLevel, setExperienceLevel] = useState(3);
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);

  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch = job.role.toLowerCase().includes(searchTerm.toLowerCase()) || job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === "All" || job.department === departmentFilter;
    const matchesLocation = locationFilter === "All" || job.location.includes(locationFilter);
    const matchesType = typeFilter === "All" || job.type === typeFilter;
    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  const departments = ["All", ...Array.from(new Set(allJobs.map((j) => j.department)))];
  const locations = ["All", "Remote", "USA", "UK", "Germany", "Singapore", "India"];
  const types = ["All", "Full-time", "Internship"];

  useEffect(() => {
    const interval = setInterval(() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length), 5000);
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

  const handleTalentSignup = () => {
    if (talentEmail) {
      setShowConfetti(true);
      setTimeout(() => { setShowTalentSignup(false); setTalentEmail(""); setShowConfetti(false); }, 3000);
    }
  };

  const employeeProfiles = [
    { name: "Alex Rivera", role: "Senior Engineer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop", schedule: ["9:00 AM - Stand-up", "10:00 AM - Code Review", "2:00 PM - Architecture Planning", "4:00 PM - Mentoring"], tools: ["VS Code", "Docker", "Kubernetes"], journey: "Junior Dev → Senior in 3 years" },
    { name: "Maya Patel", role: "Product Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop", schedule: ["9:30 AM - Design Critique", "11:00 AM - User Research", "1:00 PM - Prototyping", "3:30 PM - Team Sync"], tools: ["Figma", "Miro", "Notion"], journey: "Intern → Lead Designer in 4 years" },
  ];

  return (
    <PageLayout>
      {/* Floating Quick Apply Button */}
      <AnimatePresence>
        {!showQuickApply && (
          <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} onClick={() => setShowQuickApply(true)} className="fixed bottom-8 right-8 z-50 bg-[#C0392B] hover:bg-[#a02f24] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 font-semibold">
            <Rocket size={20} /> Quick Apply
          </motion.button>
        )}
      </AnimatePresence>

      {/* Quick Apply Modal */}
      <AnimatePresence>
        {showQuickApply && !showResumeUpload && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowQuickApply(false)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full relative">
              <button onClick={() => setShowQuickApply(false)} className="absolute top-4 right-4"><X size={24} /></button>
              <h3 className="text-2xl font-bold mb-4">Quick Apply</h3>
              <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg mb-3" />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg mb-3" />
              <button onClick={() => setShowResumeUpload(true)} className="w-full bg-[#C0392B] text-white py-3 rounded-lg font-semibold">Upload Resume</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Upload Modal */}
      <AnimatePresence>
        {showResumeUpload && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowResumeUpload(false)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full relative">
              <button onClick={() => setShowResumeUpload(false)} className="absolute top-4 right-4"><X size={24} /></button>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Upload size={24} className="text-[#C0392B]" />Upload Resume</h3>
              <p className="text-slate-600 mb-6">Upload your resume (PDF, JPG, or PNG)</p>
              <div className="relative">
                <input 
                  type="file" 
                  accept=".pdf,.jpg,.jpeg,.png" 
                  onChange={handleResumeUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="border-2 border-dashed border-[#C0392B] rounded-lg p-8 text-center hover:bg-[#C0392B]/5 transition-colors">
                  <Upload size={40} className="mx-auto mb-3 text-[#C0392B]" />
                  <p className="font-semibold mb-1">Click to upload or drag & drop</p>
                  <p className="text-sm text-slate-500">PDF, JPG, or PNG</p>
                </div>
              </div>
              {resumeFile && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 text-green-700 font-semibold mb-2">
                    <CheckCircle size={20} /> Resume uploaded successfully
                  </div>
                  <p className="text-sm text-green-600">{resumeFile.name}</p>
                  <div className="mt-4 bg-green-200 h-2 rounded-full">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: `${profileStrength}%` }}></div>
                  </div>
                  <p className="text-xs text-green-700 mt-2">Profile strength: {profileStrength}%</p>
                </motion.div>
              )}
              <button 
                onClick={() => { setShowResumeUpload(false); setShowQuickApply(false); }}
                className="w-full mt-6 bg-[#C0392B] hover:bg-[#a02f24] text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50"
                disabled={!resumeFile}
              >
                {resumeFile ? "Complete Application" : "Continue"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C0392B] via-[#5D4037] to-[#3E2723]">
          <img src="/images/hero.png" alt="Veldursen Careers" className="w-full h-full object-cover mix-blend-overlay opacity-30" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">Build the Future<br />With Us</h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto">Join a team that values innovation, collaboration, and real impact.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#openings" className="bg-white text-[#C0392B] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all transform hover:scale-105">View Open Roles <ArrowRight size={20} /></a>
                <a href="#culture" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all">Life at Veldursen <Users size={20} /></a>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="text-white" size={40} />
        </motion.div>
      </section>

      {/* Real-Time Team Insights */}
      <section className="py-16 bg-gradient-to-r from-[#C0392B] to-[#5D4037] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ label: "Open Roles", value: 12, icon: Briefcase }, { label: "Hiring This Month", value: 8, icon: TrendingUp }, { label: "Avg Response Time", value: 7, icon: Clock, suffix: " days" }, { label: "Team Growth", value: 45, icon: Users, suffix: "%" }].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <stat.icon size={32} className="mx-auto mb-2" />
                <div className="text-4xl font-bold mb-1"><AnimatedCounter end={stat.value} suffix={stat.suffix || ""} /></div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section with Stats */}
      <section id="culture" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#C0392B] font-semibold text-sm uppercase tracking-wider">Culture</span>
            <h2 className="text-5xl font-bold text-slate-900 mt-4 mb-6">Life at Veldursen</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">We're built on trust, creativity, and a passion for solving complex problems.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[{ end: 150, suffix: "+", label: "Team Members" }, { end: 25, suffix: "+", label: "Countries" }, { end: 500, suffix: "+", label: "Projects Delivered" }].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="text-center p-8 bg-slate-50 rounded-2xl shadow-lg">
                <div className="text-5xl font-bold text-[#C0392B] mb-2"><AnimatedCounter end={stat.end} suffix={stat.suffix} /></div>
                <div className="text-lg text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative group">
              <img src="/images/culture.png" alt="Culture" className="w-full h-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
            <div className="space-y-6">
              {cultureValues.map((value, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-50 rounded-xl p-6 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-[#C0392B]/10 flex items-center justify-center"><value.icon className="text-[#C0392B]" size={28} /></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-slate-600">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Growth Simulator */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Growth Path at Veldursen</h2>
            <p className="text-xl text-slate-600">Explore your potential career trajectory</p>
          </motion.div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <label className="block mb-4 font-semibold">Experience Level: {experienceLevel} years</label>
            <input type="range" min="0" max="10" value={experienceLevel} onChange={(e) => setExperienceLevel(parseInt(e.target.value))} className="w-full mb-8" />
            <div className="grid grid-cols-3 gap-4 text-center">
              {[{ year: "Year 1", role: "Junior", salary: "$60-80K" }, { year: "Year 3", role: "Mid-Level", salary: "$90-120K" }, { year: "Year 5+", role: "Senior/Lead", salary: "$140-180K" }].map((stage, i) => (
                <div key={i} className={`p-4 rounded-lg ${experienceLevel >= i * 2 ? "bg-[#C0392B] text-white" : "bg-slate-100"}`}>
                  <div className="font-bold">{stage.year}</div>
                  <div className="text-sm">{stage.role}</div>
                  <div className="text-xs mt-1">{stage.salary}</div>
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
            <h2 className="text-4xl font-bold mb-4">A Day in the Life</h2>
            <p className="text-xl text-slate-600">Click to explore employee journeys</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {employeeProfiles.map((emp, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-slate-50 rounded-2xl p-8 cursor-pointer overflow-hidden text-center" onClick={() => setSelectedEmployee(i)}>
                <div className="mb-6 flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#C0392B]/20 shadow-lg">
                    <img src={emp.image} alt={emp.name} className="w-full h-full object-cover" />
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setSelectedEmployee(null)}>
            <button onClick={() => setSelectedEmployee(null)} className="absolute top-6 right-6 z-50 bg-white rounded-full p-3 hover:bg-slate-100 shadow-lg transition-all"><X size={24} className="text-slate-800" /></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="overflow-hidden max-w-6xl w-full relative flex flex-col md:flex-row items-center justify-center">
              <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12">
                <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl">
                  <img src={employeeProfiles[selectedEmployee].image} alt={employeeProfiles[selectedEmployee].name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white/90 backdrop-blur-sm rounded-2xl">
                <h3 className="text-2xl font-bold mb-2">{employeeProfiles[selectedEmployee].name}</h3>
                <p className="text-lg text-slate-600 mb-6">{employeeProfiles[selectedEmployee].role}</p>
                  <div className="mb-6">
                    <h4 className="font-bold mb-3">Daily Schedule:</h4>
                    {employeeProfiles[selectedEmployee].schedule.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 mb-2">
                        <Clock size={16} className="text-[#C0392B]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold mb-3">Tools:</h4>
                    <div className="flex gap-2">{employeeProfiles[selectedEmployee].tools.map((tool, i) => <span key={i} className="px-3 py-1 bg-[#C0392B]/10 text-[#C0392B] rounded-full text-sm">{tool}</span>)}</div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Career Journey:</h4>
                    <p className="text-slate-600">{employeeProfiles[selectedEmployee].journey}</p>
                  </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why Join Veldursen - New Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#C0392B] font-semibold text-sm uppercase">Our Approach</span>
            <h2 className="text-5xl font-bold mt-4 mb-6">Why Choose Us for Software Development</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Fueling lasting growth by aligning talent, process excellence, and measurable performance.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#C0392B]/20 to-[#3E2723]/20 rounded-3xl blur-2xl"></div>
                <img src="/images/benefits-bg.png" alt="Team collaboration" className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover" />
              </div>
            </motion.div>

            {/* Right side - Benefit Items */}
            <div className="space-y-6">
              {[
                {
                  title: "Scalable teams for sustainable growth",
                  description: "Expand confidently with teams built for long-term success and cost efficiency. We create the ideal structure and ensure effortless scaling to match your evolving business goals."
                },
                {
                  title: "Operational excellence",
                  description: "Leverage optimized tools and refined processes that drive measurable efficiency, consistent performance, and continuous productivity improvements."
                },
                {
                  title: "Transparent collaboration",
                  description: "Work with clarity and confidence through open communication and hands-on leadership from experienced Technical and Delivery Managers who keep your projects aligned and on schedule."
                },
                {
                  title: "Dependable delivery and lasting knowledge",
                  description: "Preserve quality, speed, and continuity with structured knowledge sharing and flexible scalability — enabling smooth onboarding, ramp-ups, or downsizing whenever needed."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
                  whileHover={{ x: 8, transition: { duration: 0.3 } }}
                  className="group border-l-4 border-[#C0392B] pl-6 py-3 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute -left-1 top-0 h-full w-1 bg-gradient-to-b from-[#C0392B] to-[#a02f24] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                  <motion.h3 
                    className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#C0392B] transition-colors duration-300"
                    initial={{ letterSpacing: "0px" }}
                    whileHover={{ letterSpacing: "0.5px" }}
                  >
                    {benefit.title}
                  </motion.h3>
                  <motion.p 
                    className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {benefit.description}
                  </motion.p>
                  <motion.div 
                    className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#C0392B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Cards Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What We Offer You</h2>
            <p className="text-xl text-slate-600">Comprehensive benefits designed to support your wellbeing and growth</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl h-[340px] flex flex-col transition-all">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#C0392B] to-[#5D4037] flex items-center justify-center mb-6"><benefit.icon className="text-white" size={32} /></div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <ul className="space-y-3">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600"><CheckCircle className="text-[#C0392B] flex-shrink-0 mt-1" size={18} /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section id="openings" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Find Your Perfect Role</h2>
          </motion.div>
          <div className="mb-12 space-y-4">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input type="text" placeholder="Search roles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 rounded-xl border-2 focus:border-[#C0392B] focus:outline-none" />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {[{ val: departmentFilter, set: setDepartmentFilter, opts: departments }, { val: locationFilter, set: setLocationFilter, opts: locations }, { val: typeFilter, set: setTypeFilter, opts: types }].map((filter, i) => (
                <select key={i} value={filter.val} onChange={(e) => filter.set(e.target.value)} className="px-6 py-3 rounded-lg border-2 focus:border-[#C0392B] focus:outline-none">
                  {filter.opts.map((opt) => <option key={opt}>{opt}</option>)}
                </select>
              ))}
            </div>
          </div>
          <div className="space-y-4 max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredJobs.map((job) => (
                <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 hover:border-[#C0392B] hover:shadow-xl transition-all">
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
                    <a href={`mailto:careers@veldursen.com?subject=Application for ${job.role}`} className="bg-[#C0392B] hover:bg-[#a02f24] text-white rounded-lg px-6 py-3 font-semibold inline-flex items-center gap-2 transition-all transform hover:scale-105 whitespace-nowrap">Apply Now <ArrowRight size={18} /></a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Our Hiring Journey</h2>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#C0392B] via-[#5D4037] to-[#C0392B]" style={{ width: "calc(100% - 100px)", left: "50px" }} />
              {hiringSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-[280px] flex flex-col justify-between">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C0392B] to-[#5D4037] text-white flex items-center justify-center mx-auto mb-4"><step.icon size={28} /></div>
                    <div className="text-sm font-bold text-[#C0392B] mb-2">STEP {step.step}</div>
                    <h3 className="font-bold mb-2 text-lg">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Hear From Our Team</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div key={currentTestimonial} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="bg-slate-50 rounded-2xl p-12 shadow-2xl">
                <div className="flex gap-2 mb-6">{[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-2xl">★</span>)}</div>
                <blockquote className="text-2xl text-slate-700 mb-8 italic">"{testimonials[currentTestimonial].quote}"</blockquote>
                <div className="flex items-center gap-4 border-t pt-6">
                  <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-16 h-16 rounded-full" />
                  <div>
                    <p className="font-bold text-xl">{testimonials[currentTestimonial].name}</p>
                    <p className="text-slate-600">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="w-12 h-12 rounded-full bg-[#C0392B] hover:bg-[#a02f24] text-white flex items-center justify-center"><ChevronLeft size={24} /></button>
              <div className="flex gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-3 h-3 rounded-full transition-all ${i === currentTestimonial ? "bg-[#C0392B] w-8" : "bg-slate-300"}`} />)}</div>
              <button onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)} className="w-12 h-12 rounded-full bg-[#C0392B] hover:bg-[#a02f24] text-white flex items-center justify-center"><ChevronRight size={24} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Role Matcher Quiz */}
      <section className="py-24 bg-gradient-to-br from-[#C0392B] to-[#5D4037]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">Not Sure Which Role Suits You?</h2>
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
            <h2 className="text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
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
      {/* Growth & Diversity */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-6">Grow With Us</h2>
              <p className="text-xl text-slate-600 mb-8">We invest in your development every day.</p>
              <ul className="space-y-4">
                {["Annual learning budget", "Mentorship programs", "Tech talks & workshops", "Career development plans", "Conference sponsorships"].map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3">
                    <CheckCircle className="text-[#C0392B] mt-1" size={20} /><span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><img src="/images/growth.png" alt="Growth" className="w-full rounded-2xl shadow-2xl" /></motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><img src="/images/diversity.png" alt="Diversity" className="w-full rounded-2xl shadow-2xl" /></motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-6">Diversity & Inclusion</h2>
              <p className="text-lg text-slate-600 mb-6">Veldursen is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
              <p className="text-slate-600">Diversity makes us stronger. We believe the best ideas come from teams with different viewpoints and experiences.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#FBFBF9]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-6 text-[#3E2723]">Ready to Make an Impact?</h2>
            <p className="text-2xl text-[#5D4037] mb-10">Send us your resume and tell us what you're working on.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#openings" className="bg-[#C0392B] hover:bg-[#a02f24] text-white rounded-lg px-10 py-4 text-lg font-semibold inline-flex items-center justify-center gap-2 transition-all transform hover:scale-105">Apply Today <ArrowRight size={20} /></a>
              <a href="mailto:careers@veldursen.com" className="btn-outline-enterprise"><MessageSquare size={20} />Contact HR</a>
            </div>
            <p className="text-[#5D4037] text-lg"><a href="mailto:careers@veldursen.com" className="hover:text-[#C0392B]">careers@veldursen.com</a></p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
