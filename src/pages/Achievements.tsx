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
              VelDurSen's achievements reflect years of dedicated enterprise technology delivery across AI, Cloud, Cybersecurity, and Data platforms serving global organizations. Our track record demonstrates scale, reliability, and the trust that Fortune 500 companies and high-growth enterprises place in our systems that power their mission-critical operations worldwide.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Every metric represents real systems, real users, and real business value delivered to enterprises operating at global scale across multiple continents and industries.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Impact Metrics - Large statistic blocks */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="enterprise-container">
          <SectionHeader
            tag="Impact Metrics"
            title="Enterprise Scale & Global Reach"
            subtitle="Measurable impact across enterprise systems, global deployments, and mission-critical operations."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                value: "1000+",
                label: "Enterprise Projects Delivered",
                desc: "Across 50+ countries serving global organizations",
                icon: Target
              },
              {
                value: "150+",
                label: "Multi-Region Cloud Platforms",
                desc: "Deployed across AWS, Azure, and GCP worldwide",
                icon: Cloud
              },
              {
                value: "500+",
                label: "AI Models in Production",
                desc: "Powering intelligent automation at enterprise scale",
                icon: Brain
              },
              {
                value: "50M+",
                label: "Users Supported Daily",
                desc: "On systems we've built and maintain globally",
                icon: Users
              },
              {
                value: "99.9%",
                label: "Average System Uptime",
                desc: "High-availability architecture across all deployments",
                icon: TrendingUp
              },
              {
                value: "100%",
                label: "Zero Security Breaches",
                desc: "Across mission-critical workloads secured",
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
              { value: "24/7", label: "Global Support Coverage" },
              { value: "3500+", label: "Engineers Worldwide" },
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
                color: "purple"
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
                color: "blue"
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
                color: "red"
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
                color: "sky"
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
                color: "green"
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
                color: "indigo"
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
                <div className={`w-16 h-16 rounded-xl bg-${milestone.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <milestone.icon className={`w-8 h-8 text-${milestone.color}-600`} />
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

      {/* Industry-Specific Achievements */}
      <section className="section-padding bg-section">
        <div className="enterprise-container">
          <SectionHeader
            tag="Industry Impact"
            title="Transforming Industries Through Technology"
            subtitle="Sector-specific achievements demonstrating deep domain expertise and measurable business outcomes."
          />

          <div className="space-y-8">
            {[
              {
                icon: Heart,
                industry: "Healthcare",
                color: "bg-red-50 border-red-200",
                iconColor: "text-red-600",
                achievements: [
                  "Secure HIPAA-compliant patient data platforms serving 5M+ patients",
                  "AI-powered diagnostic support systems with 95%+ accuracy",
                  "Telemedicine platforms handling 100K+ consultations monthly",
                  "Real-time clinical analytics dashboards across 50+ hospitals"
                ]
              },
              {
                icon: Landmark,
                industry: "FinTech & Banking",
                color: "bg-blue-50 border-blue-200",
                iconColor: "text-blue-600",
                achievements: [
                  "Fraud detection systems processing $10B+ in transactions daily",
                  "Core banking platforms supporting 20M+ active accounts",
                  "PCI-DSS compliant payment gateways across 30+ countries",
                  "Real-time risk assessment engines with <100ms latency"
                ]
              },
              {
                icon: Factory,
                industry: "Manufacturing",
                color: "bg-slate-50 border-slate-200",
                iconColor: "text-slate-600",
                achievements: [
                  "Smart factory data platforms optimizing 100+ production lines",
                  "Predictive maintenance reducing downtime by 40%",
                  "Supply chain visibility systems tracking 1M+ shipments",
                  "Quality control automation with 99.5% defect detection"
                ]
              },
              {
                icon: ShoppingCart,
                industry: "Retail & E-Commerce",
                color: "bg-purple-50 border-purple-200",
                iconColor: "text-purple-600",
                achievements: [
                  "Omnichannel platforms serving 50M+ customers globally",
                  "AI-powered demand forecasting improving accuracy by 35%",
                  "Real-time inventory systems across 1000+ locations",
                  "Personalization engines increasing conversions by 25%"
                ]
              },
              {
                icon: Building2,
                industry: "Smart Cities",
                color: "bg-green-50 border-green-200",
                iconColor: "text-green-600",
                achievements: [
                  "Traffic analytics platforms deployed in 45+ cities",
                  "Smart energy management reducing consumption by 20%",
                  "Public safety systems integrating 10K+ sensors",
                  "Citizen engagement platforms with 2M+ active users"
                ]
              },
              {
                icon: Wheat,
                industry: "Agriculture & AgriTech",
                color: "bg-emerald-50 border-emerald-200",
                iconColor: "text-emerald-700",
                achievements: [
                  "Precision farming platforms optimizing 500K+ acres",
                  "AI-driven crop intelligence improving yields by 30%",
                  "IoT sensor networks monitoring soil and weather",
                  "Supply chain traceability from farm to consumer"
                ]
              },
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`p-8 rounded-2xl ${industry.color} border-2`}
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className={`w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-md`}>
                      <industry.icon className={`w-8 h-8 ${industry.iconColor}`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-6">{industry.industry}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {industry.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start gap-3">
                          <Award size={16} className={`${industry.iconColor} mt-1 shrink-0`} />
                          <span className="text-sm text-foreground font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Green Tech Achievements */}
      <section className="section-padding bg-gradient-to-br from-green-100 to-emerald-100">
        <div className="enterprise-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-green-700 mb-4">
              Sustainability Leadership
            </span>
            <h2 className="section-title">Green Tech Enterprise Achievements</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              VelDurSen is committed to sustainable technology practices and environmental responsibility across all global operations and client engagements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Leaf,
                title: "Carbon-Aware Cloud Deployments",
                metric: "35%",
                desc: "Reduction in cloud carbon footprint through intelligent workload scheduling"
              },
              {
                icon: Zap,
                title: "Energy-Efficient Data Pipelines",
                metric: "40%",
                desc: "Decrease in computational energy consumption through optimization"
              },
              {
                icon: Database,
                title: "Sustainable DevOps Practices",
                metric: "50+",
                desc: "Projects implementing green CI/CD and infrastructure patterns"
              },
              {
                icon: Brain,
                title: "Ethical AI Governance",
                metric: "100%",
                desc: "Of AI systems adhering to responsible AI frameworks"
              },
            ].map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white border-2 border-green-300 hover:shadow-xl transition-all duration-300"
              >
                <achievement.icon className="w-10 h-10 text-green-600 mb-4" />
                <div className="text-4xl font-bold text-green-600 mb-2">{achievement.metric}</div>
                <h4 className="text-lg font-bold mb-3">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-green-300">
            <h3 className="text-2xl font-bold mb-6 text-center">Environmental Impact Reduction Initiatives</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Renewable energy-powered cloud regions preference",
                "Code optimization reducing computational requirements",
                "Green software engineering training for all engineers",
                "Carbon offsetting for legacy infrastructure",
                "Circular economy principles in system design",
                "Environmental metrics tracked per deployment"
              ].map((initiative) => (
                <div key={initiative} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm font-medium">{initiative}</span>
                </div>
              ))}
            </div>
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
