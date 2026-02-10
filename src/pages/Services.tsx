import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Cpu, Layers, Zap, CheckCircle2, TrendingUp, Globe, ShieldCheck, X, QuoteIcon } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// --- Interfaces ---

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceStep {
  step: string;
  title: string;
  desc: string;
}

interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  icon: React.ElementType;
  features: ServiceFeature[];
  methodology: ServiceStep[];
}

// --- Data ---

const services: Service[] = [
  {
    id: "consulting",
    title: "Strategic Business Consulting",
    tagline: "Vision to Value",
    description: "Unlock new growth pathways with data-driven strategies for market entry, startup scaling, and corporate value enhancement.",
    fullDescription: "Our strategic consulting services are designed to help you navigate complex market landscapes. We partner with you to identify high-value opportunities, optimize your business model, and execute strategies that deliver measurable ROI.",
    icon: TrendingUp,
    features: [
      { title: "Value Enhancement", description: "Optimizing business models for maximum ROI." },
      { title: "Market Entry", description: "Strategic roadmaps for new territories." },
      { title: "Startup Scaling", description: "Growth frameworks for high-potential ventures." },
    ],
    methodology: [
      { step: "01", title: "Assessment", desc: "Thorough analysis of current market position and internal capabilities." },
      { step: "02", title: "Strategy Formulation", desc: "Developing a tailored roadmap with clear milestones and KPIs." },
      { step: "03", title: "Execution Support", desc: "Hands-on guidance during the implementation phase." },
      { step: "04", title: "Review & Optimize", desc: "Continuous monitoring and refinement of the strategy." }
    ]
  },
  {
    id: "operational",
    title: "Operational Efficiency",
    tagline: "Streamline & Scale",
    description: "Transform your operations with BPO solutions and process optimization that drive sustainability and cost-effectiveness.",
    fullDescription: "We help organizations achieve operational excellence by eliminating inefficiencies and optimizing resource allocation. Our solutions range from business process outsourcing (BPO) to lean process re-engineering.",
    icon: Layers,
    features: [
      { title: "BPO Solutions", description: "Managed services for core business functions." },
      { title: "Process Optimization", description: "Lean methodologies to eliminate waste." },
      { title: "Resource Management", description: "Smart allocation for peak performance." },
    ],
    methodology: [
      { step: "01", title: "Process Mapping", desc: "Visualizing current workflows to identify bottlenecks." },
      { step: "02", title: "Solution Design", desc: "Creating optimized workflows and selecting appropriate tools." },
      { step: "03", title: "Implementation", desc: "Rolling out changes with minimal disruption to operations." },
      { step: "04", title: "Performance Tracking", desc: "Monitoring efficiency gains against baselines." }
    ]
  },
  {
    id: "digital",
    title: "Digital Transformation",
    tagline: "Future-Proof Tech",
    description: "Modernize your tech stack with AI-driven insights, IoT integration, and comprehensive digital ecosystem building.",
    fullDescription: "Embrace the future with our comprehensive digital transformation services. We help you leverage cutting-edge technologies like AI, IoT, and cloud computing to create a connected, intelligent, and agile enterprise.",
    icon: Cpu,
    features: [
      { title: "AI-Driven Insights", description: "Leveraging data for predictive decision making." },
      { title: "IoT Management", description: "Smart building and facility connectivity." },
      { title: "Tech Modernization", description: "Upgrading legacy systems to cloud-native stacks." },
    ],
    methodology: [
      { step: "01", title: "Digital Audit", desc: "Evaluating your current technology landscape and digital maturity." },
      { step: "02", title: "Architecture Design", desc: "Designing a scalable and secure future-state architecture." },
      { step: "03", title: "Agile Development", desc: "Iterative development and deployment of digital solutions." },
      { step: "04", title: "Change Management", desc: "Ensuring smooth adoption of new technologies by your team." }
    ]
  },
  {
    id: "project-mgmt",
    title: "Project Management",
    tagline: "Execution Excellence",
    description: "End-to-end execution stewardship for industrial projects, ensuring on-time, on-budget, and high-quality delivery.",
    fullDescription: "Our project management services ensure that your most critical initiatives are delivered successfully. We bring rigorous structure, risk management, and stakeholder alignment to every project.",
    icon: Briefcase,
    features: [
      { title: "End-to-End Execution", description: "Full lifecycle project oversight." },
      { title: "Industrial Consultancy", description: "Specialized expertise for heavy industry." },
      { title: "Facilities Management", description: "Optimizing physical asset performance." },
    ],
    methodology: [
      { step: "01", title: "Project Initiation", desc: "Defining scope, objectives, and governance structure." },
      { step: "02", title: "Detailed Planning", desc: "Creating comprehensive project plans and resource schedules." },
      { step: "03", title: "Execution & Monitoring", desc: "Rigorous tracking of progress, risks, and quality." },
      { step: "04", title: "Closure & Handover", desc: "Formal project closure and transition to operations." }
    ]
  }
];

// --- Components ---

const ServiceCard = ({ service, index, onSelect }: { service: Service; index: number; onSelect: (s: Service) => void }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.1, ease: "easeOut" } }}
      className="group relative flex flex-col h-full bg-white/70 backdrop-blur-md border border-white/20 shadow-sm hover:shadow-xl transition-all duration-200 rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => onSelect(service)}
    >
      {/* Frosted Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="p-8 flex flex-col h-full relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-black group-hover:text-white transition-colors duration-200">
            <service.icon className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:tracking-tight transition-all duration-200">
            {service.title}
          </h3>
          <p className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
            {service.tagline}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Micro-features */}
          <ul className="space-y-2 mb-8 border-t border-gray-100 pt-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-black mt-0.5 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" style={{ transitionDelay: `${idx * 30}ms` }} />
                <span className="group-hover:translate-x-0 -translate-x-4 transition-transform duration-200" style={{ transitionDelay: `${idx * 30}ms` }}>
                  {feature.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer / CTA */}
        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-900">Explore Solution</span>
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-200">
            <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

// --- Main Page Component ---

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-16 md:pb-64 overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://bairesdev.mo.cloudinary.net/blog/2023/06/Is-Python-good-for-software-development.jpg?tx=w_1920,q_auto"
            alt="Background"
            className="w-full h-full object-cover opacity-70"
          />
          {/* Enhanced readability overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-gray-200 mb-8 backdrop-blur-md shadow-lg">
              <Globe className="w-3 h-3" />
              Global Services
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-2xl"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
            >
              Excellence in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-gray-300 filter drop-shadow-lg">
                Operations & Strategy
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-100 max-w-8xl leading-relaxed font-medium drop-shadow-xl"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
            >
              We remove the reasons for doubt. From strategic consulting to full-scale digital transformation, we deliver ROI-driven solutions for the modern enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 md:py-32 pt-16 pb-16 bg-gray-50/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-16">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                What's Included
              </h2>
              <p className="text-lg text-gray-600">
                Every partnership includes end-to-end lifecycle management. We ensure your success through a comprehensive support system designed to scale with you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {/* Decorative connecting line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2 z-0"></div>

              {[
                { title: "Consultation", icon: CheckCircle2, color: "from-blue-400 to-blue-600" },
                { title: "Development", icon: Cpu, color: "from-purple-400 to-purple-600" },
                { title: "Maintenance", icon: Layers, color: "from-emerald-400 to-emerald-600" },
                { title: "Security", icon: ShieldCheck, color: "from-indigo-400 to-indigo-600" },
                { title: "Support", icon: ArrowRight, color: "from-orange-400 to-orange-600" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10"
                >
                  <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-gray-100 shadow-lg h-full relative overflow-hidden">
                    {/* Gradient Glow Effect - Permanent low opacity */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-10`}></div>

                    {/* Icon with animated background */}
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg mb-4 relative z-10`}>
                      <item.icon size={24} />
                    </div>

                    <h3 className="font-bold text-gray-900 relative z-10">{item.title}</h3>
                    <div className={`mt-2 h-1 w-12 rounded-full bg-gradient-to-r ${item.color} opacity-60`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={service.id} className={`${index === 3 ? "lg:col-start-2" : ""}`}>
                <ServiceCard service={service} index={index} onSelect={setSelectedService} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition / Trust Section */}
      {/* Value Proposition / Trust Section */}
      <section className="pt-16 pb-32 bg-slate-950 text-white overflow-hidden relative">
        {/* Ambient Background Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10 box-border">
          {/* Section Heading - Full Width for Single Line */}
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-2xl">
              <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">Why Global Leaders </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                Choose Us.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              {[
                { title: "ROI-Focused", desc: "Every strategy is measured by tangible financial impact.", icon: TrendingUp, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { title: "Sustainable Growth", desc: "Building systems that last and adapt to future challenges.", icon: Globe, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                { title: "Zero Doubt", desc: "Transparent execution that builds absolute confidence.", icon: ShieldCheck, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex gap-6 p-6 rounded-2xl border ${item.border} ${item.bg} hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm group`}
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 border border-white/5`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white/90 transition-colors">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-8 md:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30 blur-xl animate-pulse"></div>
              <div className="relative bg-slate-900/90 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl shadow-2xl">
                <QuoteIcon className="w-8 h-8 text-blue-500 mb-6 opacity-50" />
                <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-slate-100">
                  <span className="text-blue-400">"</span>
                  They didn't just consult; they executed. The transformation in our operational efficiency was immediate and measurable.
                  <span className="text-blue-400">"</span>
                </blockquote>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">CP</div>
                  <div>
                    <div className="font-bold text-white">Client Partner</div>
                    <div className="text-sm text-blue-200/70">Global Logistics Firm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 sm:rounded-2xl border-none">
          {selectedService && (
            <div className="flex flex-col">
              {/* Modal Header */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black text-white p-8 md:p-12 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 z-20">
                  <button onClick={() => setSelectedService(null)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
                    <X size={20} />
                    <span className="sr-only">Close</span>
                  </button>
                </div>

                {/* Background Decor */}
                <div className="absolute -bottom-24 -right-24 text-white/5 opacity-20 transform rotate-12 pointer-events-none">
                  <selectedService.icon size={300} strokeWidth={1} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-widest text-gray-200 mb-6 backdrop-blur-sm border border-white/10">
                    <selectedService.icon className="w-3 h-3" />
                    {selectedService.tagline}
                  </div>
                  <DialogTitle
                    className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 drop-shadow-2xl"
                    style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                  >
                    {selectedService.title}
                  </DialogTitle>
                  <p
                    className="text-lg text-gray-200 max-w-2xl leading-relaxed drop-shadow-md font-medium"
                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
                  >
                    {selectedService.fullDescription}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12 bg-white">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Key Capabilities
                    </h4>
                    <ul className="space-y-4">
                      {selectedService.features.map((feature, i) => (
                        <li key={i} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <div className="font-bold text-gray-900 mb-1">{feature.title}</div>
                          <div className="text-sm text-gray-600">{feature.description}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                      <Layers className="w-5 h-5" /> Methodology
                    </h4>
                    <div className="space-y-6">
                      {selectedService.methodology.map((step) => (
                        <div key={step.step} className="flex gap-4">
                          <span className="text-2xl font-bold text-indigo-600 shrink-0">{step.step}</span>
                          <div>
                            <div className="font-bold text-gray-900">{step.title}</div>
                            <div className="text-sm text-gray-600 leading-relaxed">{step.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                  <p className="text-gray-600 mb-6">Ready to see the impact of {selectedService.title} on your business?</p>
                  <a href="/contact" className="btn-accent inline-flex items-center px-8 py-3 rounded-full text-sm font-bold bg-black text-white hover:bg-gray-800 transition-colors">
                    Discuss Requirements <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Services;
