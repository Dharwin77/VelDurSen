import { motion } from "framer-motion";
import { Users, Lightbulb, GraduationCap, Leaf, Heart, Code, Globe, TrendingUp, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";

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
    <PageHero
      tag="Careers"
      title="Build the Future of Enterprise Technology"
      subtitle="Join a global team of engineers, architects, and innovators who are transforming how enterprises leverage technology."
    />

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
