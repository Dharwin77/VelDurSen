import { motion } from "framer-motion";
import { Users, Lightbulb, GraduationCap, Leaf, Heart, Code, Globe, TrendingUp, CheckCircle, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";
import careerVideo from "@/assets/career.mp4";

const openings = [
  { role: "Senior AI/ML Engineer", location: "Remote – Global", type: "Full-time" },
  { role: "Cloud Architect", location: "New York, USA", type: "Full-time" },
  { role: "DevOps Engineer", location: "Berlin, Germany", type: "Full-time" },
  { role: "Cybersecurity Analyst", location: "Singapore", type: "Full-time" },
  { role: "Data Engineer", location: "London, UK", type: "Full-time" },
  { role: "Full Stack Developer", location: "Bangalore, India", type: "Full-time" },
];

const Careers = () => (
  <PageLayout>
    <section className="relative h-[80vh] flex items-center overflow-hidden">
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
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-red-500 mb-6 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            Careers
          </span>
          <h1 className="text-[4rem] md:text-[6.5rem] font-bold text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            Build the <br />
            <span className="text-red-600">Future.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl leading-relaxed drop-shadow-md">
            Join a global team of engineers, architects, and innovators who are transforming how enterprises leverage technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise py-5 px-12 text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-2xl shadow-red-600/20">
              Join the Team
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

    {/* Overview */}
    <section className="section-padding">
      <div className="enterprise-container">
        <SectionHeader
          tag="Why VelDurSen"
          title="A Career That Makes an Impact"
          subtitle="At VelDurSen, you don't just write code—you architect solutions that power global enterprises."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Code, title: "Engineering Culture", desc: "Architecture-first thinking, code reviews, and continuous learning define our engineering DNA." },
            { icon: TrendingUp, title: "Growth & Learning", desc: "Certification programs, conference sponsorships, and internal tech talks to fuel your growth." },
            { icon: Globe, title: "Global Teams", desc: "Collaborate with talented engineers across 40+ countries on challenging enterprise projects." },
            { icon: Leaf, title: "Sustainability at Work", desc: "Green office initiatives, remote-first culture, and carbon-conscious engineering practices." },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-enterprise text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="text-accent" size={26} />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Openings */}
    <section className="section-padding section-alt">
      <div className="enterprise-container">
        <SectionHeader tag="Open Positions" title="Join Our Global Team" subtitle="Explore current opportunities across our worldwide offices." />
        <div className="max-w-4xl mx-auto space-y-4">
          {openings.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card-enterprise flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-lg font-bold">{job.role}</h3>
                <p className="text-sm text-muted-foreground">{job.location} · {job.type}</p>
              </div>
              <button className="btn-outline-enterprise text-xs py-2 px-5 shrink-0">Apply Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Student Workshops */}
    <section className="section-padding">
      <div className="enterprise-container">
        <SectionHeader tag="Community" title="Student Workshops & AI Awareness" subtitle="We invest in the next generation of technology leaders through education and mentorship." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { icon: GraduationCap, title: "University Workshops", desc: "Free hands-on workshops covering AI, cloud computing, cybersecurity, and modern software engineering at universities worldwide." },
            { icon: Lightbulb, title: "AI Awareness Programs", desc: "Community programs designed to educate students and professionals about responsible AI, its applications, and its societal impact." },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-enterprise">
              <item.icon className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <BlogPreview />
  </PageLayout>
);

export default Careers;
