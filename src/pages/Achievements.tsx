import { motion } from "framer-motion";
import { Award, TrendingUp, Globe2, Shield, Zap, Users, Server, Cloud, Brain, Database, Lock, Leaf, CheckCircle2, Target, Heart, Landmark, Factory, ShoppingCart, Building2, Wheat, Boxes, LineChart } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";

const Achievements = () => {
  return (
    <PageLayout>
      <PageHero
        tag="Achievements"
        title="Proven Enterprise Excellence at Global Scale"
        subtitle="Years of enterprise technology delivery across AI, Cloud, Cybersecurity, and Data platforms. Our achievements reflect scale, trust, and measurable impact across industries worldwide."
        bgVideo="/achievements-video/achievementsvedio1.mp4"
        overlay={true}
      />

      {/* Achievements Overview */}
      <section className="section-padding bg-white">
        <div className="enterprise-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Enterprise Impact
            </span>
            <h2 className="section-title">Building Trust Through Delivery Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
             VelDurSen’s achievements represent sustained enterprise delivery across AI, cloud platforms, cybersecurity, and data engineering for organizations operating at global scale. Our track record showcases platform reliability, large-scale execution, and the trust placed in our systems by Fortune 500 companies and fast-growing enterprises supporting mission-critical operations worldwide.

Every metric reflects live systems, active users, and real business impact delivered across continents and industries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Every metric represents real systems, real users, and real business value delivered to enterprises operating at global scale across multiple continents and industries.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Impact Metrics - Large statistic blocks */}
      <section className="section-padding bg-gray-100">
        <div className="enterprise-container">
          <SectionHeader
            tag="Impact Metrics"
            title="Powering Enterprises Worldwide"
            subtitle="Creating sustained business impact across enterprise platforms, global deployments, and mission-critical operations"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { 
                value: "900+", 
                label: "Global Enterprise Programs", 
                desc: "Mission-critical systems delivered globally.",
                icon: Target
              },
              { 
                value: "250+", 
                label: "Cloud Footprint", 
                desc: "Multi-region platforms across top clouds",
                icon: Cloud
              },
              { 
                value: "750+", 
                label: "AI in Action", 
                desc: "Production-grade intelligence at scale",
                icon: Brain
              },
              { 
                value: "50M+", 
                label: "Users Supported Daily", 
                desc: "Trusted by users worldwide, every day",
                icon: Users
              },
              { 
                value: "99%", 
                label: "Always On", 
                desc: "High availability, built into every system",
                icon: TrendingUp
              },
              { 
                value: "100%", 
                label: "Secure by Default", 
                desc: "Compliance-first, zero-trust protection",
                icon: Shield
              },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl border-2 border-accent/20 hover:border-accent/40 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full"></div>
                <metric.icon className="w-12 h-12 text-accent mb-6 relative z-10" />
                <div className="text-5xl md:text-6xl font-bold text-accent mb-3 relative z-10">{metric.value}</div>
                <div className="text-xl font-bold text-foreground mb-2 relative z-10">{metric.label}</div>
                <div className="text-sm text-muted-foreground relative z-10">{metric.desc}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "10B+", label: "Transactions Processed Daily" },
              { value: "5PB+", label: "Data Managed Globally" },
              { value: "24/7", label: "Always Available" },
              { value: "3500+", label: "Experts Worldwide" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center p-6 rounded-xl bg-white border border-accent/30"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation Milestones - Timeline style */}
      <section className="section-padding bg-white">
        <div className="enterprise-container">
          <SectionHeader
            tag="Innovation Milestones"
            title="Technology Leadership & Enterprise Innovation"
            subtitle="Major technology milestones achieved through continuous innovation and enterprise-scale deployments."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Enterprise AI Platforms Deployed",
                achievements: [
                  "500+ AI models in production environments",
                  "Generative AI systems across 20+ industries",
                  "NLP platforms processing 100M+ documents",
                  "Computer vision systems with 99%+ accuracy"
                ],
                bgColor: "bg-purple-100",
                iconColor: "text-purple-600"
              },
              {
                icon: Cloud,
                title: "Large-Scale Cloud Transformations",
                achievements: [
                  "150+ multi-region cloud platforms delivered",
                  "Hybrid cloud architectures across continents",
                  "Cloud-native migrations for Fortune 500",
                  "Kubernetes clusters managing 100K+ pods"
                ],
                bgColor: "bg-blue-100",
                iconColor: "text-blue-600"
              },
              {
                icon: Shield,
                title: "Zero-Trust Security Frameworks",
                achievements: [
                  "100% compliance record maintained",
                  "Zero security breaches across portfolio",
                  "HIPAA, PCI-DSS, SOC2 implementations",
                  "Global IAM systems for 1M+ users"
                ],
                bgColor: "bg-red-100",
                iconColor: "text-red-600"
              },
              {
                icon: Database,
                title: "Real-Time Analytics Platforms",
                achievements: [
                  "Data platforms processing 10B+ events/day",
                  "Real-time dashboards for global operations",
                  "Petabyte-scale data warehouse deployments",
                  "Sub-second query performance at scale"
                ],
                bgColor: "bg-orange-100",
                iconColor: "text-orange-600"
              },
              {
                icon: Zap,
                title: "Automation-Driven DevOps",
                achievements: [
                  "CI/CD pipelines with <5 min deploy times",
                  "Infrastructure as Code across 50+ projects",
                  "Automated testing frameworks (90%+ coverage)",
                  "GitOps workflows with zero-downtime deploys"
                ],
                bgColor: "bg-green-100",
                iconColor: "text-green-600"
              },
              {
                icon: Server,
                title: "Mission-Critical System Reliability",
                achievements: [
                  "99.9% uptime across all deployments",
                  "Sub-100ms latencies for global systems",
                  "Auto-scaling handling 10x traffic spikes",
                  "Disaster recovery with <1 hour RTO"
                ],
                bgColor: "bg-indigo-100",
                iconColor: "text-indigo-600"
              },
            ].map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-xl bg-card border-2 border-border hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl ${milestone.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <milestone.icon className={`w-8 h-8 ${milestone.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-6">{milestone.title}</h3>
                <ul className="space-y-3">
                  {milestone.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions Grid */}
      <section className="section-padding bg-gray-100">
        <div className="enterprise-container">
          <SectionHeader
            tag="Enterprise Solutions"
            title="Solutions Built for Enterprise Success"
            subtitle="Comprehensive technology platforms designed to address critical enterprise challenges across all business operations."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Powering Global Enterprises",
                description: "Enabling complex enterprise operations worldwide through secure, scalable digital platforms built for growth.",
                tag: "Enterprise Scale",
                image: "/achievementsimages/powering global enterprises.png"
              },
              {
                title: "AI That Delivers Results",
                description: "Driving measurable business outcomes with production-ready AI solutions embedded into core enterprise workflows.",
                tag: "Artificial Intelligence",
                image: "/achievementsimages/AI That Delivers Results.png"
              },
              {
                title: "Cloud Built for Scale",
                description: "Designing cloud platforms that grow seamlessly with enterprise demand while ensuring performance and resilience.",
                tag: "Cloud Solutions",
                image: "/achievementsimages/Cloud Built for Scale.png"
              },
              {
                title: "Security Without Compromise",
                description: "Protecting critical enterprise systems with zero-trust security models and compliance-first architectures.",
                tag: "Cybersecurity",
                image: "/achievementsimages/Security Without Compromise.png"
              },
              {
                title: "Data That Drives Decisions",
                description: "Turning enterprise data into real-time intelligence that fuels faster, smarter business decisions.",
                tag: "Data & Analytics",
                image: "/achievementsimages/Data That Drives Decisions.png"
              },
              {
                title: "Reliability at Enterprise Grade",
                description: "Keeping mission-critical systems always available through resilient engineering and continuous operations excellence.",
                tag: "Infrastructure",
                image: "/achievementsimages/Reliability at Enterprise Grade.png"
              },
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image Placeholder */}
                <div className="relative w-full h-48 bg-gradient-to-br from-blue-200 to-indigo-200 overflow-hidden">
                  {solution.image ? (
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📸</div>
                        <p className="text-sm text-muted-foreground">Image Coming Soon</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-3">
                    {solution.tag}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Recognition & Trust Signals */}
      <section className="section-padding bg-white">
        <div className="enterprise-container">
          <SectionHeader
            tag="Enterprise Trust"
            title="Built on Long-Term Partnerships & Global Delivery"
            subtitle="Recognition through sustained client relationships, technology leadership, and consistent delivery excellence."
          />

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Globe2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Global Enterprise Trust</h3>
                  <p className="text-muted-foreground">
                    Trusted by Fortune 500 companies and high-growth enterprises across 50+ countries for mission-critical systems powering their core operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Long-Term Partnerships</h3>
                  <p className="text-muted-foreground">
                    Average client relationship spanning 5+ years, with many partnerships exceeding a decade of continuous collaboration and system evolution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Technology Leadership Position</h3>
                  <p className="text-muted-foreground">
                    Recognized for early adoption of cloud-native architectures, enterprise AI platforms, and zero-trust security frameworks at scale.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">100% Compliance & Security Record</h3>
                  <p className="text-muted-foreground">
                    Zero security breaches across our entire global client portfolio. Every system compliant with relevant regulatory frameworks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <LineChart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Consistent Delivery Excellence</h3>
                  <p className="text-muted-foreground">
                    On-time, on-budget delivery across 1000+ projects with documented business value and ROI for enterprise stakeholders.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Boxes className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Global Delivery Confidence</h3>
                  <p className="text-muted-foreground">
                    Follow-the-sun delivery model enabling 24/7 development, faster time-to-market, and continuous support across all time zones.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-accent/5 to-accent/10 border-2 border-accent/20 text-center">
            <Award className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Decade of Enterprise Technology Leadership</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              VelDurSen's achievements represent more than statistics—they reflect the trust global enterprises place in our systems, the reliability of our architecture-first approach, and our commitment to building technology that lasts decades, not years.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <BlogPreview />
    </PageLayout>
  );
};

export default Achievements;
