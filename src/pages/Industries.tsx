import { motion } from "framer-motion";
import { Heart, Landmark, Factory, ShoppingCart, Building2, Sprout, GraduationCap, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    desc: "Transforming patient care through AI-powered diagnostics, secure health data platforms, and compliant telehealth solutions.",
    points: ["AI-assisted diagnostics & imaging", "HIPAA-compliant data platforms", "Telemedicine infrastructure", "Clinical analytics & EHR integration"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Empowering educational institutions with intelligent learning platforms, analytics, and secure digital infrastructure.",
    points: ["Adaptive learning platforms", "Student performance analytics", "Campus management systems", "EdTech security & compliance"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Industry 4.0 solutions that bring intelligence, automation, and real-time visibility to manufacturing operations.",
    points: ["IoT & smart factory integration", "Predictive maintenance systems", "Supply chain optimization", "Quality control automation"],
  },
  {
    icon: Landmark,
    title: "FinTech",
    desc: "Secure, scalable financial technology solutions that enable innovation while meeting strict regulatory requirements.",
    points: ["Core banking modernization", "Payment processing platforms", "Regulatory compliance automation", "Fraud detection & prevention"],
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    desc: "Next-generation retail technology for omnichannel experiences, personalization, and intelligent supply chains.",
    points: ["Omnichannel commerce platforms", "AI-powered personalization", "Inventory optimization", "Customer analytics & insights"],
  },
  {
    icon: Building2,
    title: "Smart Cities",
    desc: "Urban technology solutions that make cities safer, more efficient, and more sustainable through data and AI.",
    points: ["Traffic & mobility analytics", "Smart energy management", "Public safety platforms", "Citizen engagement systems"],
  },
  {
    icon: Sprout,
    title: "Agriculture & AgriTech",
    desc: "Precision agriculture and smart farming solutions powered by AI, IoT, and advanced data analytics for sustainable food production.",
    points: ["Precision farming & crop analytics", "IoT-based soil & weather monitoring", "Supply chain traceability", "Sustainable agriculture platforms", "Drone-based field analysis", "Market price prediction systems"],
  },
];

const Industries = () => (
  <PageLayout>
    <PageHero
      tag="Industries"
      title="Deep Domain Expertise Across Sectors"
      subtitle="We bring specialized technology solutions tailored to the unique challenges of each industry, delivering measurable outcomes at enterprise scale."
    />

    {/* Overview */}
    <section className="section-padding">
      <div className="enterprise-container">
        <SectionHeader
          tag="Industry Focus"
          title="Technology Solutions Built for Your Industry"
          subtitle="Every industry has unique challenges. We bring deep domain knowledge and proven technology frameworks to solve them."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {industries.map((ind, i) => (
            <motion.div key={ind.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="card-enterprise text-center py-6">
              <ind.icon className="text-accent mx-auto mb-2" size={28} />
              <span className="text-xs font-semibold">{ind.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Detail */}
    {industries.map((ind, idx) => (
      <section key={ind.title} className={`section-padding ${idx % 2 === 0 ? "section-alt" : ""}`}>
        <div className="enterprise-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={idx % 2 !== 0 ? "lg:order-2" : ""}>
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <ind.icon className="text-accent" size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{ind.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{ind.desc}</p>
              <ul className="space-y-3">
                {ind.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`bg-muted rounded-lg p-10 flex items-center justify-center min-h-[260px] ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
              <ind.icon className="text-accent/20" size={120} />
            </motion.div>
          </div>
        </div>
      </section>
    ))}

    <BlogPreview />
  </PageLayout>
);

export default Industries;
