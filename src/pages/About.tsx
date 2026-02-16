import type { ComponentType } from "react";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Globe2, Leaf, Lightbulb, Shield, Target, Users, Zap, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import MagicBento from "@/components/MagicBento";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import aboutTeam from "@/assets/about-team.jpg";
import aboutImage2 from "@/assets/Gemini_Generated_Image_zh56h0zh56h0zh56.png";
import aboutVideo from "@/assets/about.mp4";
import blog1 from "@/assets/blog-1.png";
import blog10 from "@/assets/blog-10.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";
import blog4 from "@/assets/blog-4.png";
import blog5 from "@/assets/blog-5.png";
import blog6 from "@/assets/blog-6.png";
import blog7 from "@/assets/blog-7.png";
import blog8 from "@/assets/blog-8.png";
import blog9 from "@/assets/blog-9.png";
import founder1 from "@/assets/founder1.png";
import founder2 from "@/assets/founder2.png";
import founder3 from "@/assets/founder3.png";
import globalMap from "@/assets/global-map.jpg";
import PageLayout from "@/components/layout/PageLayout";

type ValueCard = {
  icon: ComponentType<{ className?: string; size?: number | string }>;
  title: string;
  desc: string;
};

const coreValues: ValueCard[] = [
  { icon: Shield, title: "Trust and security", desc: "We safeguard data, uptime, and privacy like our reputation depends on it--because it does." },
  { icon: Target, title: "Clarity in architecture", desc: "Every build starts with a clear blueprint, so products stay fast, resilient, and easy to evolve." },
  { icon: Leaf, title: "Sustainable impact", desc: "We make choices that respect people, resources, and the planet while scaling modern systems." },
  { icon: Users, title: "Customer at the center", desc: "We co-create with clients, measure outcomes, and iterate until the solution truly serves people." },
  { icon: Lightbulb, title: "Curious by default", desc: "We experiment, learn quickly, and bring emerging tech to market only when it adds real value." },
  { icon: Globe2, title: "Global craft", desc: "Distributed teams, shared standards, and local insight so software feels right everywhere." },
];

const stats = [
  { value: "250+", label: "Partner teams", sublabel: "Across industries" },
  { value: "180+", label: "Engineers and strategists", sublabel: "Distributed globally" },
  { value: "12", label: "Countries", sublabel: "Where we collaborate" },
  { value: "8", label: "Years", sublabel: "Building together" },
  { value: "220+", label: "Products and rollouts", sublabel: "Shipped with care" },
];

const story = [
  "Veldursen started with two engineers helping a local nonprofit modernize its student portal. The project showed us how thoughtful software can make a day feel easier for real people.",
  "Today we are a distributed team of product thinkers, designers, and engineers who love turning complex ideas into calm, dependable digital experiences. We build products, platforms, and services for startups finding their footing and enterprises scaling to millions of users.",
  "Great software starts with a conversation, not a codebase. We dive deep into your workflow to uncover where digital friction is slowing you down. Then, we architect lean, secure solutions designed to be as kind to your developers as they are helpful to your users, creating true 'breathing room' for your business to grow.",
  "From the classroom to the trading floor to the factory line, we bring a human-centric lens to every industry we touch. We specialize in turning high-stakes workflows into calm, dependable experiences—building the kind of software that users rely on and businesses trust implicitly.",
];

const vision = [
  { title: "Trusted partnership", desc: "Show up as long-term collaborators who care about outcomes, not just launch dates." },
  { title: "Thoughtful ecosystems", desc: "Design connected tools that feel seamless for users and maintainable for teams." },
  { title: "Responsible innovation", desc: "Adopt AI and emerging tech only when it is safe, transparent, and useful." },
  { title: "Design for longevity", desc: "Make choices that keep products healthy years from now, not just this quarter." },
  { title: "Inclusive impact", desc: "Build software that works for different backgrounds, abilities, and contexts." },
];

const mission = [
  { title: "Make technology approachable", desc: "Translate complex systems into clear, comfortable experiences for users." },
  { title: "Protect every interaction", desc: "Bake in security, privacy, and compliance from discovery through launch." },
  { title: "Ship with confidence", desc: "Pair solid architecture with reliable delivery so teams can move faster." },
  { title: "Measure what matters", desc: "Track adoption, performance, and business impact--not vanity metrics." },
  { title: "Grow people and products", desc: "Coach teams, share playbooks, and leave clients stronger than we found them." },
];

const teamHighlights = [
  { title: "A cohort that stays curious", desc: "Engineers, designers, and operators who learn together and ship together." },
  { title: "Real workshops, real smiles", desc: "Captured during our IITM Research Park deep-dive and onsite build weeks." },
  { title: "Hands-on delivery", desc: "We pair strategy with sleeves-rolled-up execution for every release." },
  { title: "Community-first energy", desc: "Mentorship circles, peer reviews, and open playbooks keep us sharp." },
];

const teamPhotos = [
  { src: "/team/1.jpeg", alt: "VelDurSen team in the war-room", badge: "Workshop Day" },
  { src: "/team/2.jpeg", alt: "Team huddle in the studio", badge: "Sprint Retro" },
  { src: "/team/3.jpeg", alt: "Crew at IITM Research Park", badge: "IITM Research Park" },
  { src: "/team/4.jpeg", alt: "Team on the terrace", badge: "Offsite" },
];

const TeamCarousel = () => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = teamPhotos[idx % teamPhotos.length];

  useEffect(() => {
    if (paused || teamPhotos.length === 0) return;
    const id = setInterval(() => setIdx((prev) => (prev + 1) % teamPhotos.length), 4200);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (next: number) => setIdx((next + teamPhotos.length) % teamPhotos.length);

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_50px_-25px_rgba(15,23,42,0.35)] w-full max-w-3xl lg:max-w-4xl mx-auto group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onClick={() => goTo(idx + 1)}
    >
      <motion.div
        key={current.src}
        initial={{ opacity: 0.3, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="relative aspect-[16/10] w-full"
      >
        <img src={current.src} alt={current.alt} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
        <div className="absolute top-4 left-4 right-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-white/15 text-[11px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {current.badge} · {current.alt}
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-semibold">
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white border border-white/20">{current.badge}</span>
          <span className="text-amber-200/90">{String(idx + 1).padStart(2, "0")}</span>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 pb-4 flex items-center justify-center gap-2">
        {teamPhotos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={(e) => {
              e.stopPropagation();
              goTo(i);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${i === idx ? "w-8 bg-amber-300" : "w-2.5 bg-white/40 hover:bg-white/70"}`}
            aria-label={`Show team photo ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 text-white/80 text-sm pointer-events-none">
        <button
          onClick={(e) => {
            e.stopPropagation();
            goTo(idx - 1);
          }}
          className="h-10 w-10 rounded-full bg-black/40 backdrop-blur border border-white/10 hover:bg-black/55 pointer-events-auto"
        >
          ‹
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            goTo(idx + 1);
          }}
          className="h-10 w-10 rounded-full bg-black/40 backdrop-blur border border-white/10 hover:bg-black/55 pointer-events-auto"
        >
          ›
        </button>
      </div>
    </div>
  );
};

const leadership = [
  {
    name: "Ananya Patel",
    role: "CEO",
    image: founder1,
    reports: [
      { name: "Priya Raman", role: "VP, Product", photo: "/team/1.jpeg" },
      { name: "Arjun Das", role: "VP, Engineering", photo: "/team/2.jpeg" },
      { name: "Divya Iyer", role: "Director, Research", photo: "/team/3.jpeg" },
      { name: "Neel Joshi", role: "Head of Customer Success", photo: "/team/4.jpeg" },
      { name: "Isha Verma", role: "Head of People Ops", photo: aboutTeam },
    ],
  },
  {
    name: "Ravi Kumar",
    role: "Founder",
    image: founder3,
    reports: [
      { name: "Sanjay Rao", role: "Director, Architecture", photo: "/team/1.jpeg" },
      { name: "Manu Menon", role: "Director, Security", photo: "/team/2.jpeg" },
      { name: "Anvi Kulkarni", role: "Principal Engineer", photo: "/team/3.jpeg" },
    ],
  },
  {
    name: "Meera Shah",
    role: "Co-founder",
    image: founder2,
    reports: [
      { name: "Leena Kapoor", role: "VP, Delivery", photo: "/team/1.jpeg" },
      { name: "Farah Khan", role: "Director, Design", photo: "/team/2.jpeg" },
      { name: "Om Prakash", role: "Director, Data", photo: "/team/3.jpeg" },
    ],
  },
];

const milestones = [
  {
    year: "2023",
    title: "Expanding virtual assistant capabilities",
    desc: "Broadened VA services to product research, customer support, order management, and competitor tracking. Built SOPs and onboarding to keep delivery consistent and scalable.",
    highlights: [
      "Cut average ticket handle time by 22% with clearer playbooks.",
      "Rolled out QA checklist that raised CSAT to 4.7/5.",
      "Documented reusable research flows for new product launches.",
    ],
    images: [aboutTeam, blog1, blog2],
  },
  {
    year: "2024",
    title: "Productized delivery playbooks",
    desc: "Packaged repeatable delivery kits for new client launches, with shared QA gates, security checks, and accessibility-ready templates.",
    highlights: [
      "Ship-room rituals reduced launch slippage to under 3%.",
      "Accessibility sweeps built into every sprint review.",
      "Security runbooks aligned with SOC 2 control areas.",
    ],
    images: [blog3, blog4, blog8],
  },
  {
    year: "2025",
    title: "Platform reliability at scale",
    desc: "Hardened observability, incident response, and rollout safety nets so global releases stay predictable across regions and time zones.",
    highlights: [
      "P95 error budgets met for 11 consecutive quarters.",
      "Blue/green with fast rollback kept uptime above 99.95%.",
      "Playbooks for on-call swaps across time zones.",
    ],
    images: [blog5, blog6, blog9],
  },
  {
    year: "2026",
    title: "Human-centered automation",
    desc: "Blended AI assistance with human review to speed operations while keeping quality, transparency, and control in the hands of teams.",
    highlights: [
      "Human-in-the-loop reviews kept precision over 98%.",
      "Red-teaming cadences to stress test new automations.",
      "Usage analytics feeding continuous prompt tuning.",
    ],
    images: [blog7, blog10, aboutImage2],
  },
];

const valuesPoints = [
  {
    title: "Build with people in mind",
    desc: "We consider the humans behind every workflow--customers, operators, and the future teammates who will maintain the product.",
  },
  {
    title: "Keep promises small and steady",
    desc: "We prefer honest timelines, transparent tradeoffs, and iterative releases over heroic crunches.",
  },
  {
    title: "Stay curious",
    desc: "We test ideas quickly, learn from users, and bring only the right technologies into the stack.",
  },
  {
    title: "Share what we know",
    desc: "We document, pair, and coach so our partners own the solution--not just the deliverable.",
  },
  {
    title: "Protect trust",
    desc: "Security, accessibility, and reliability are non-negotiable; we treat them as features, not fine print.",
  },
  {
    title: "Celebrate progress",
    desc: "We recognize the small wins that move teams forward and keep projects fun, even when the problems are tough.",
  },
];

const MilestonesInteractive = () => {
  const [activeYear, setActiveYear] = useState(milestones[0].year);
  const [slideIdx, setSlideIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = milestones.find((m) => m.year === activeYear) ?? milestones[0];
  const images = useMemo(() => active.images ?? [], [active]);
  const hasImages = images.length > 0;
  const currentImage = hasImages ? images[slideIdx % images.length] : undefined;

  const handleNextImage = () => {
    if (!hasImages) return;
    setSlideIdx((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    setSlideIdx(0);
  }, [activeYear]);

  useEffect(() => {
    if (!hasImages || paused) return;
    const id = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % images.length);
    }, 4200);
    return () => clearInterval(id);
  }, [images, hasImages, paused]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 md:p-8 space-y-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)]">
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        {milestones.map((m) => (
          <button
            key={m.year}
            onClick={() => setActiveYear(m.year)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] transition-all ${m.year === activeYear
              ? "border-amber-500 bg-amber-100 text-amber-900 shadow-sm"
              : "border-slate-200 bg-white text-slate-700 hover:border-amber-300 hover:text-amber-900"
              }`}
          >
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            {m.year}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <motion.div
          key={`${active.year}-text`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-3 h-full flex flex-col justify-center"
        >
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">{active.year}</div>
          <h3 className="text-2xl font-bold leading-tight text-slate-900">{active.title}</h3>
          <p className="text-base text-slate-600 leading-relaxed">{active.desc}</p>
          {active.highlights && active.highlights.length > 0 && (
            <ul className="text-sm text-slate-600 space-y-2 pl-4 list-disc">
              {active.highlights.map((point) => (
                <li key={point} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </motion.div>

        <div className="space-y-3">
          <motion.div
            key={`${active.year}-${slideIdx}-image`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_50px_-25px_rgba(15,23,42,0.35)] aspect-[16/10] min-h-[280px] cursor-pointer"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onClick={handleNextImage}
          >
            <img src={currentImage ?? aboutTeam} alt={active.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </motion.div>

          {hasImages && images.length > 1 && (
            <div className="flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={`${active.year}-dot-${i}`}
                  onClick={() => setSlideIdx(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${i === slideIdx ? "bg-amber-500 w-6" : "bg-slate-300 hover:bg-amber-400"
                    }`}
                  aria-label={`Show ${active.year} photo ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [selectedLeader, setSelectedLeader] = useState<string | null>(leadership[0]?.name ?? null);
  const [open, setOpen] = useState(false);

  const handleSelectLeader = (name: string) => {
    setSelectedLeader(name);
    setOpen(true);
  };

  const getInitials = (fullName: string) =>
    fullName
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

  const selectedReports = leadership.find((person) => person.name === selectedLeader)?.reports ?? [];

  return (
    <PageLayout>
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-[10s]">
          <source src={aboutVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to4.jpeg-transparent z-10" />

        <div className="enterprise-container relative z-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-red-500 mb-6 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              About Veldursen
            </span>
            <h1 className="text-[2.75rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[6.5rem] font-bold text-amber-200 leading-[0.95] mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              Software with <br />
              <span className="text-amber-100">a human heartbeat.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-3xl leading-relaxed drop-shadow-md">
              The Visionary Vibe: We are a remote-first team of product experts dedicated to replacing digital friction with focus. Whether you are a founder launching a dream or a large-scale enterprise reaching millions, we craft the dependable software that keeps you moving forward.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise py-5 px-12 text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-2xl shadow-red-600/20">
                Meet the team
              </Link>
              <div className="flex items-center gap-4 px-6 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                <Globe2 size={16} className="text-red-600 shadow-sm" /> Remote-first, serving clients worldwide
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-0" />
      </section>

      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#ef4444 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="enterprise-container relative z-10">
          <div className="max-w-5xl mb-12">
            <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="inline-block text-sm md:text-base font-black uppercase tracking-[0.65em] text-red-700 drop-shadow-sm mb-6 bg-red-50 px-6 py-3 rounded-2xl shadow-[0_12px_36px_-18px_rgba(239,68,68,0.55)]">
              Our Story
            </motion.span>

            <p className="text-2xl md:text-3xl font-semibold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mb-3">
              Building the Digital Future Since Day One
            </p>

            <h2 className="text-4xl md:text-5xl font-[900] text-[#0f172a] leading-[1.1] tracking-tight">
              {"Human software, crafted with care".split(" ").map((word, i) => (
                <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-[0.2em] pb-[0.1em]">
                  <motion.span
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: [0.33, 1, 0.68, 1] }}
                    className={`inline-block leading-tight ${i >= 2 ? "text-[#dc2626]" : ""}`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="space-y-8">
                {story.map((text) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0.1, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 0.8 }}
                    className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium relative pl-10 group"
                  >
                    <div className="absolute left-0 top-1 bottom-1 w-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ duration: 1 }} className="w-full bg-red-600" />
                    </div>
                    <p>{text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0.1, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.8 }}
                className="text-lg md:text-xl text-slate-700 leading-relaxed font-semibold mt-6 border-l-4 border-red-500/70 pl-5 bg-red-50/50 rounded-xl py-5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.2)]"
              >
                At Veldursen, we measure our success by the silence of a system that just works and the confidence of the teams who use it. Technology will always evolve, but the need for honesty, reliability, and human care in how we build it never will. Whether you’re launching your first idea or managing a global platform, we’re here to ensure your digital future has a heartbeat.
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative mt-12 lg:mt-4">
              <div className="lg:sticky lg:top-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 perspective-[2000px]">
                {stats.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, rotateX: -45, z: -200, y: 150 }}
                    whileInView={{ opacity: 1, rotateX: 0, z: 0, y: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.03, rotateY: -5, x: 12, transition: { duration: 0.4 } }}
                    className="bg-white border border-slate-100 p-6 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-10px_rgba(239,68,68,0.12)] transition-all group relative"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-4xl font-black text-slate-900 group-hover:text-red-600 transition-colors duration-300 tracking-tighter">{m.value}</div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3">{m.label}</div>
                        <div className="text-[10px] text-slate-300 font-semibold mt-1">{m.sublabel}</div>
                      </div>
                      <div className="text-5xl font-black text-slate-50 group-hover:text-red-500/5 transition-colors select-none">0{i + 1}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="enterprise-container relative space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} className="text-3xl font-[900] uppercase tracking-wider text-[#0f172a] mb-12 border-b-2 border-[#dc2626] pb-4 inline-block">
                Our <span className="text-[#dc2626]">Vision</span>
              </motion.h2>

              <div className="space-y-6">
                {vision.map((item, idx) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ delay: idx * 0.1 }} className="flex gap-6 group">
                    <span className="text-slate-200 font-bold text-sm pt-1">0{idx + 1}</span>
                    <div>
                      <h3 className="text-sm font-extrabold tracking-widest uppercase mb-2 text-slate-900 group-hover:text-red-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div initial={{ opacity: 0, scale: 0.9, x: 20 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: false, amount: 0.25 }} className="relative group cursor-pointer max-w-md mx-auto">
                <div className="absolute inset-0 bg-red-100/40 rounded-full blur-3xl -z-10 group-hover:bg-red-200/60 transition-colors duration-700 animate-pulse" />
                <div className="relative overflow-hidden rounded-2xl group-hover:rounded-2xl aspect-square shadow-2xl shadow-red-200/50 border-4 border-white/50 backdrop-blur-sm transition-all duration-1000">
                  <img src="/team/vis.jpg" alt="Veldursen team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent p-8 flex flex-col justify-between">
                    <div className="text-white text-right self-end -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <span className="block font-['Dancing_Script'] text-3xl md:text-4xl drop-shadow-md">Dharwin</span>
                      <div className="text-[10px] font-black uppercase tracking-widest mt-1">Dharwin</div>
                      <div className="text-[9px] font-bold opacity-80">Co-founder, CTO</div>
                    </div>
                    <div className="text-slate-900 bg-white/40 backdrop-blur-md p-4 rounded-2xl w-fit rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <span className="block font-['Dancing_Script'] text-3xl md:text-4xl">Senthil</span>
                      <div className="text-[10px] font-black uppercase tracking-widest mt-1">Senthil Kumar</div>
                      <div className="text-[9px] font-bold opacity-80">Co-founder, CEO</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-last lg:order-first">
              <motion.div initial={{ opacity: 0, scale: 0.9, x: -20 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: false, amount: 0.25 }} className="relative group cursor-pointer max-w-md mx-auto">
                <div className="absolute inset-0 bg-slate-100/40 rounded-full blur-3xl -z-10 group-hover:bg-slate-200/60 transition-colors duration-700 animate-pulse" />
                <div className="relative overflow-hidden rounded-2xl group-hover:rounded-2xl aspect-square shadow-2xl shadow-slate-200/50 border-4 border-white/50 backdrop-blur-sm transition-all duration-1000">
                  <img src="/team/miss.jpg" alt="Veldursen culture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent p-8 flex flex-col justify-between">
                    <div className="text-white text-right self-end -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <span className="block font-['Dancing_Script'] text-3xl md:text-4xl drop-shadow-md">Innovation.</span>
                    </div>
                    <div className="text-slate-900 bg-white/40 backdrop-blur-md p-4 rounded-2xl w-fit rotate-3 group-hover:rotate-0 transition-transform duration-500 font-bold uppercase tracking-widest text-[10px]">
                      Mission focused
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} className="text-3xl font-[900] uppercase tracking-wider text-[#0f172a] mb-12 border-b-2 border-[#dc2626] pb-4 inline-block">
                Our <span className="text-[#dc2626]">Mission</span>
              </motion.h2>

              <div className="space-y-6">
                {mission.map((item, idx) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ delay: idx * 0.1 }} className="flex gap-6 group">
                    <span className="text-slate-200 font-bold text-sm pt-1">0{idx + 6}</span>
                    <div>
                      <h3 className="text-sm font-extrabold tracking-widest uppercase mb-2 text-slate-900 group-hover:text-red-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="enterprise-container space-y-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-300">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-[900] tracking-tight leading-tight text-[#0f172a]">People who steer the vision</h2>
            </div>
            <div className="hidden md:block text-sm text-slate-500 max-w-sm text-right">
              Four seats, one direction. Each leader brings a different lens but a shared commitment to people-first products.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {leadership.map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02, rotateX: -2, rotateY: 2 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ delay: idx * 0.08, duration: 0.5, type: "spring", stiffness: 230, damping: 18 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.8)] cursor-pointer ${selectedLeader === person.name ? "ring-2 ring-amber-400/70" : ""}`}
                style={{ perspective: 1200 }}
                onClick={() => handleSelectLeader(person.name)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelectLeader(person.name);
                  }
                }}
              >
                <motion.div
                  className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber-400/0 via-amber-400/15 to-red-500/0 blur-xl"
                  animate={{ opacity: [0, 0.6, 0], scale: [0.98, 1.03, 0.98] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "loop", delay: idx * 0.2 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="overflow-hidden h-full">
                  <motion.img
                    src={person.image}
                    alt={`${person.name} - ${person.role}`}
                    className="h-full w-full object-cover"
                    initial={{ y: 32 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: idx * 0.06 }}
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                  <div>
                    <p className="text-sm font-semibold leading-tight text-white">{person.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-300">{person.role}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-white/20 bg-white/10 backdrop-blur flex items-center justify-center text-xs font-bold tracking-widest text-white">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {selectedReports.length > 0 && <div className="mt-6" />}
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl w-[1100px]">
          <DialogHeader className="pb-2">
            <DialogTitle className="text-2xl font-bold text-slate-900">Team reporting to {selectedLeader}</DialogTitle>
            <DialogDescription className="text-sm text-slate-500">
              Click a leader card to view their direct reports.
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[70vh] overflow-y-auto pr-1">
            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] gap-5">
              {selectedReports.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.45)] hover:shadow-[0_22px_60px_-22px_rgba(15,23,42,0.5)] transition-shadow flex flex-col gap-4"
                >
                  {member.photo ? (
                    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-200 ring-2 ring-amber-200/70">
                      <img src={member.photo} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-amber-200 to-amber-400 text-slate-900 font-bold flex items-center justify-center shadow-inner shadow-amber-900/10 ring-2 ring-amber-200/60 text-2xl">
                      {getInitials(member.name)}
                    </div>
                  )}
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-slate-900 leading-tight">{member.name}</p>
                    <p className="text-[12px] uppercase tracking-[0.25em] text-slate-500">{member.role}</p>
                  </div>
                  <div className="inline-flex items-center gap-1 self-start rounded-full bg-amber-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700">
                    Direct Report
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DialogClose className="absolute top-4 right-4 h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:shadow">
            <X size={16} />
          </DialogClose>
        </DialogContent>
      </Dialog>

      <section className="py-12 md:py-16 bg-white text-slate-900 relative overflow-hidden">
        <div className="enterprise-container space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-[900] tracking-tight leading-tight mb-2 text-slate-900">09+ years of building expertise and growing with our clients</h2>
            <p className="text-slate-600 max-w-3xl">Tap a year to see the milestone story, photo, and what changed for our clients.</p>
          </div>

          <MilestonesInteractive />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white text-slate-900">
        <div className="enterprise-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200 bg-amber-50 text-[10px] font-black uppercase tracking-[0.35em] text-amber-700">
              Our people
            </div>
            <h2 className="text-3xl md:text-4xl font-[900] leading-tight tracking-tight">
              The crew giving VelDurSen its spark
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              Scenes from the teams you will collaborate with—strategy rooms, research park deep-dives, and the smiles that show up when hard problems finally click.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teamHighlights.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_15px_40px_-30px_rgba(15,23,42,0.35)]"
                >
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 mb-2">Team Note</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-bold text-amber-700">
              <span className="h-px w-10 bg-amber-500/60" />
              Each frame is a real moment with our builders
            </div>
          </div>

          <TeamCarousel />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="enterprise-container relative z-10">
          <div className="text-center mb-12">
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-amber-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Our Services
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} className="text-4xl md:text-5xl font-[900] text-white mb-6">
              Powered by <span className="text-purple-400">innovation</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ delay: 0.1 }} className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Explore the services we deliver to turn ideas into digital products that scale.
            </motion.p>
          </div>

          <div className="flex justify-center items-center">
            <MagicBento
              textAutoHide={true}
              enableStars
              enableSpotlight
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism
              clickEffect
              spotlightRadius={510}
              particleCount={18}
              glowColor="132, 0, 255"
              disableAnimations={false}
            />
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="enterprise-container relative z-10 max-w-5xl">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Technology
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} className="text-4xl md:text-5xl font-[900] text-white mb-6">
              Our <span className="text-blue-400">technology</span> foundations
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ delay: 0.1 }} className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Built on cutting-edge technologies that power enterprise-grade solutions.
            </motion.p>
          </div>

          <ScrollStack
            itemDistance={50}
            itemScale={0.04}
            itemStackDistance={20}
            stackPosition="25%"
            scaleEndPosition="15%"
            baseScale={0.8}
            useWindowScroll={true}
          >
            <ScrollStackItem>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-bold mb-4 text-yellow-500">Artificial Intelligence & Machine Learning</h3>
                  <p className="text-slate-200 leading-relaxed">
                    Advanced AI algorithms and machine learning models that provide intelligent automation, predictive analytics, and data-driven decision making for enterprise applications.
                  </p>
                </div>
                <div className="text-blue-400 font-semibold">AI/ML Stack</div>
              </div>
            </ScrollStackItem>

            <ScrollStackItem>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-bold mb-4 text-yellow-500">Cloud & Infrastructure</h3>
                  <p className="text-slate-200 leading-relaxed">
                    Scalable cloud-native architecture with microservices, containerization, and orchestration technologies that ensure reliability, performance, and cost efficiency.
                  </p>
                </div>
                <div className="text-blue-400 font-semibold">Cloud Engineering</div>
              </div>
            </ScrollStackItem>

            <ScrollStackItem>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-bold mb-4 text-yellow-500">Cybersecurity & Compliance</h3>
                  <p className="text-slate-200 leading-relaxed">
                    Zero-trust security frameworks, threat detection, and compliance technologies that protect sensitive enterprise data and maintain regulatory standards.
                  </p>
                </div>
                <div className="text-blue-400 font-semibold">Security First</div>
              </div>
            </ScrollStackItem>

            <ScrollStackItem>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-bold mb-4 text-yellow-500">Data Engineering</h3>
                  <p className="text-slate-200 leading-relaxed">
                    Modern data pipelines and analytics platforms that transform raw data into actionable insights, enabling informed business decisions at scale.
                  </p>
                </div>
                <div className="text-blue-400 font-semibold">Data Operations</div>
              </div>
            </ScrollStackItem>

            <ScrollStackItem>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-bold mb-4 text-yellow-500">Ethical Technology</h3>
                  <p className="text-slate-200 leading-relaxed">
                    Sustainable practices, responsible AI, and ethical design principles that ensure our technology solutions align with societal values and environmental impact.
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-blue-400 font-semibold">Sustainability</div>
                  <a
                    href="#principles-section"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('principles-section');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    <span>Explore Our Values</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white relative overflow-hidden" id="principles-section">
        <div className="enterprise-container relative z-10">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Core Values
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} className="text-4xl md:text-5xl font-[900] text-[#0f172a] mb-6">
              Principles that <span className="text-[#dc2626]">define us</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ delay: 0.1 }} className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
              The values that guide every decision, every system we build, and every relationship we nurture across our global organization.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} className="relative rounded-3xl overflow-hidden mb-12 group">
            <div className="absolute inset-0 z-0">
              <img src={aboutTeam} alt="Teams in action" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/75 transition-colors group-hover:bg-black/70" />
              <div className="absolute inset-0 border-[6px] border-red-500/30 rounded-3xl m-3 pointer-events-none" />
            </div>

            <div className="relative z-10 p-8 md:p-16 max-w-3xl drop-shadow-2xl">
              <span className="text-white/80 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Values in action</span>
              <h3 className="text-3xl md:text-4xl font-bold text-sky-200 mb-6 leading-tight">Where strategy, security, and sustainability meet disciplined delivery</h3>
              <p className="text-sky-100 text-lg font-medium leading-relaxed max-w-2xl">
                A glimpse into the teams that live these principles daily--architecting resilient systems, protecting trust, and driving innovation for enterprises around the world.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: i * 0.1 }}
                className="relative p-7 md:p-8 rounded-[1.75rem] border border-slate-200/50 transition-all duration-500 bg-white group overflow-hidden shadow-[0_10px_25px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-15px_rgba(220,38,38,0.1)] hover:-translate-y-1.5 hover:border-red-100"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/5 blur-[40px] rounded-full group-hover:bg-red-600/10 transition-colors duration-500" />

                <div className="absolute inset-0 z-0 opacity-[0.03] grayscale transition-all duration-700 group-hover:opacity-[0.06] group-hover:scale-105">
                  <img src={globalMap} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 relative">
                    <div className="w-12 h-12 rounded-xl bg-sky-600 flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg shadow-sky-600/20 relative z-10">
                      <v.icon className="text-white" size={22} />
                    </div>
                    <div className="absolute inset-0 w-12 h-12 rounded-xl bg-sky-100 -rotate-12 group-hover:-rotate-6 transition-transform duration-500" />
                  </div>

                  <h3 className="text-xl font-bold text-sky-700 mb-3 group-hover:text-red-700 transition-colors duration-300">{v.title}</h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{v.desc}</p>

                  <div className="flex items-center gap-2 text-red-600 font-bold text-[10px] tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <span>Principle</span>
                    <div className="h-px w-6 bg-red-600/30" />
                    <Zap size={12} className="fill-red-600" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-red-400 w-0 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white relative overflow-hidden">
        <div className="enterprise-container relative z-10">
          <div className="text-center mb-10">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} className="text-4xl md:text-5xl font-[900] text-[#0f172a] mb-4 tracking-tighter">
              The values that <br className="hidden md:block" />
              <span className="text-[#dc2626]">guide how we work.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ delay: 0.1 }} className="text-slate-500 max-w-4xl mx-auto text-base leading-relaxed">
              We want every interaction with Veldursen to feel clear, honest, and thoughtful--whether we are workshopping a product brief or deploying code at midnight.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto">
            {valuesPoints.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ delay: i * 0.1 }} className="flex gap-4 group">
                <div className="shrink-0 pt-1">
                  <CheckCircle className="text-red-600 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 group-hover:text-red-600 transition-colors duration-300 uppercase tracking-wide">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-slate-900 overflow-hidden border-t border-slate-50">
        <div className="enterprise-container mb-16 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} className="text-4xl md:text-5xl font-[900] text-[#0f172a] mb-6 tracking-tight">
            Team behind the <span className="text-[#dc2626]">scene</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ delay: 0.1 }} className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Explore how we have helped companies turn ideas into digital products that convert, scale, and grow.
          </motion.p>
        </div>

        <div className="relative flex flex-col gap-6 overflow-hidden">
          <div className="flex w-full overflow-hidden">
            <motion.div animate={{ x: [0, -1920] }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="flex gap-6 shrink-0">
              {[blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9, blog10, blog1, blog2, blog3, blog4].map((img, i) => (
                <div key={`row1-${i}`} className="w-[320px] h-[220px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shrink-0 shadow-sm transition-shadow duration-500 hover:shadow-xl">
                  <img src={img} alt="Veldursen work" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer" />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex w-full overflow-hidden">
            <motion.div animate={{ x: [-1920, 0] }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} className="flex gap-6 shrink-0">
              {[blog5, blog6, blog7, blog8, blog9, blog10, blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8].map((img, i) => (
                <div key={`row2-${i}`} className="w-[320px] h-[220px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shrink-0 shadow-sm transition-shadow duration-500 hover:shadow-xl">
                  <img src={img} alt="Veldursen culture" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
