import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Award, TrendingUp, Code, Database, Shield, Globe, Sparkles, CheckCircle2, Lightbulb, Target, Calendar, Clock, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";
import { Link } from "react-router-dom";

const Internships = () => {
  return (
    <PageLayout>
      <PageHero
        tag="Internship Program"
        title="Early Talent Development & CSR"
        subtitle="VelDurSen's commitment to nurturing the next generation of technology professionals through hands-on learning, mentorship, and exposure to real enterprise systems."
      />

      {/* Program Overview */}
      <section className="section-padding bg-white">
        <div className="enterprise-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Our CSR Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Growing Future Tech Leaders
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This is <span className="font-semibold text-foreground">not a coaching institute or training program</span>. VelDurSen's Internship Program is a <span className="font-semibold text-foreground">CSR-driven early talent engagement initiative</span> designed to give college students and early-career individuals hands-on exposure to enterprise-grade technology, real-world projects, and world-class engineering practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "CSR-Driven Initiative",
                desc: "Part of our corporate social responsibility to nurture tech talent and give back to the community."
              },
              {
                icon: Users,
                title: "Real-World Experience",
                desc: "Work alongside experienced engineers on actual enterprise projects, not simulated environments."
              },
              {
                icon: Sparkles,
                title: "No Placement Promises",
                desc: "Focus is on learning and skill-building, not guarantees. Growth is the outcome, not recruitment."
              }
            ].map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-center"
              >
                <principle.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">{principle.title}</h4>
                <p className="text-sm text-muted-foreground">{principle.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-xl bg-blue-50 border-2 border-blue-200">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
              <div>
                <h4 className="text-lg font-bold mb-2">Important Note</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  VelDurSen is <span className="font-semibold text-foreground">not a training institute, coaching center, or placement agency</span>. We are a global enterprise technology company offering internship opportunities as part of our commitment to developing early-stage tech talent. Interns gain invaluable experience, but there is no guarantee of employment or job placement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-section">
        <div className="enterprise-container">
          <SectionHeader
            tag="Learning Domains"
            title="Technology Focus Areas"
            subtitle="Interns gain exposure to enterprise-grade systems across multiple technology domains, guided by experienced engineers and mentors."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: "Enterprise Software Development",
                areas: [
                  "Full-stack application development",
                  "Cloud-native architecture patterns",
                  "Microservices and API design",
                  "Modern frontend frameworks",
                  "Backend system design"
                ],
                borderColor: "border-blue-500"
              },
              {
                icon: Database,
                title: "Data Engineering & AI",
                areas: [
                  "Data pipeline construction",
                  "Machine learning integration",
                  "Analytics platform development",
                  "Big data processing",
                  "AI model deployment"
                ],
                borderColor: "border-purple-500"
              },
              {
                icon: Shield,
                title: "Cybersecurity Foundations",
                areas: [
                  "Security-first development",
                  "Authentication & authorization",
                  "Secure coding practices",
                  "Compliance awareness",
                  "Threat modeling basics"
                ],
                borderColor: "border-red-500"
              },
              {
                icon: Globe,
                title: "Cloud & DevOps",
                areas: [
                  "Cloud platform fundamentals",
                  "CI/CD pipeline development",
                  "Container orchestration",
                  "Infrastructure as code",
                  "Monitoring and observability"
                ],
                borderColor: "border-green-500"
              }
            ].map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-lg bg-white border-l-4 ${domain.borderColor} shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                <domain.icon className="w-10 h-10 text-accent mb-4" />
                <h4 className="text-lg font-bold mb-4">{domain.title}</h4>
                <ul className="space-y-2">
                  {domain.areas.map((area) => (
                    <li key={area} className="flex items-start gap-2 text-sm">
                      <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0"></div>
                      <span className="text-muted-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="section-padding bg-white">
        <div className="enterprise-container">
          <SectionHeader
            tag="How It Works"
            title="Internship Program Structure"
            subtitle="A structured learning journey combining mentorship, hands-on project work, and exposure to enterprise engineering practices."
          />

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                phase: "Phase 1",
                duration: "Weeks 1-2",
                title: "Onboarding & Foundations",
                description: "Introduction to VelDurSen's engineering culture, tools, and methodologies. Understanding enterprise technology stacks and development workflows.",
                activities: [
                  "Company culture and values orientation",
                  "Development environment setup",
                  "Version control and collaboration tools",
                  "Code quality and review practices"
                ]
              },
              {
                phase: "Phase 2",
                duration: "Weeks 3-6",
                title: "Guided Project Work",
                description: "Work on real-world tasks under close mentorship. Contribute to actual enterprise projects, attend engineering meetings, and participate in code reviews.",
                activities: [
                  "Assigned to specific project teams",
                  "Mentorship from senior engineers",
                  "Feature development and bug fixes",
                  "Participation in agile ceremonies"
                ]
              },
              {
                phase: "Phase 3",
                duration: "Weeks 7-10",
                title: "Independent Contribution",
                description: "Increased autonomy in task execution with mentor support. Ownership of specific features or modules within larger enterprise systems.",
                activities: [
                  "Own end-to-end feature development",
                  "Testing and quality assurance",
                  "Documentation and knowledge sharing",
                  "Exposure to production deployment"
                ]
              },
              {
                phase: "Phase 4",
                duration: "Weeks 11-12",
                title: "Capstone & Demo",
                description: "Present learnings and contributions to engineering leadership. Showcase work completed and receive feedback for future growth.",
                activities: [
                  "Project demo to technical teams",
                  "Feedback and growth review sessions",
                  "Certificate of completion",
                  "Optional: Letter of recommendation"
                ]
              }
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-accent/30 last:border-l-0 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-white"></div>
                <div className="bg-section p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">{phase.phase}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock size={12} /> {phase.duration}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {phase.activities.map((activity) => (
                      <div key={activity} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 text-center">
            <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Duration: 12 Weeks</h4>
            <p className="text-sm text-muted-foreground">
              Full-time internship program with structured phases, mentorship, and hands-on enterprise project experience. Remote and hybrid options available depending on location.
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="section-padding bg-section">
        <div className="enterprise-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              tag="Eligibility"
              title="Who Can Apply"
              subtitle="We welcome applications from motivated learners across various educational backgrounds and career stages."
            />

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-white border-2 border-border">
                <Target className="w-10 h-10 text-accent mb-4" />
                <h4 className="text-xl font-bold mb-4">Ideal Candidates</h4>
                <ul className="space-y-3">
                  {[
                    "College students (final year or pre-final year)",
                    "Recent graduates (within 1 year of graduation)",
                    "Career switchers with foundational tech skills",
                    "Self-taught developers looking for real-world exposure",
                    "Individuals passionate about enterprise technology"
                  ].map((criteria) => (
                    <li key={criteria} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-white border-2 border-border">
                <BookOpen className="w-10 h-10 text-accent mb-4" />
                <h4 className="text-xl font-bold mb-4">Expected Background</h4>
                <ul className="space-y-3">
                  {[
                    "Basic understanding of programming (any language)",
                    "Familiarity with web technologies (HTML, CSS, JS)",
                    "Willingness to learn and work with new tools",
                    "Strong communication and collaboration skills",
                    "Ability to commit full-time for 12 weeks"
                  ].map((skill) => (
                    <li key={skill} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-lg bg-blue-50 border-2 border-blue-200">
              <h4 className="text-lg font-bold mb-3">Selection Process</h4>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                {[
                  { step: "1", label: "Online Application" },
                  { step: "2", label: "Coding Assessment" },
                  { step: "3", label: "Technical Interview" },
                  { step: "4", label: "Final Selection" }
                ].map((stage, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {stage.step}
                    </div>
                    <span className="font-medium">{stage.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="section-padding bg-white">
        <div className="enterprise-container">
          <SectionHeader
            tag="What You'll Gain"
            title="Learning Outcomes & Skill Development"
            subtitle="Beyond technical skills, interns develop professional competencies that prepare them for long-term careers in enterprise technology."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Technical Excellence",
                outcomes: [
                  "Hands-on experience with enterprise technology stacks",
                  "Exposure to cloud platforms (AWS, Azure, GCP)",
                  "Understanding of scalable system architecture",
                  "Modern development workflows and best practices",
                  "Security-first coding principles"
                ]
              },
              {
                icon: Users,
                title: "Professional Growth",
                outcomes: [
                  "Working in cross-functional engineering teams",
                  "Agile and scrum methodologies",
                  "Code review and collaboration skills",
                  "Communication in technical environments",
                  "Project management and ownership"
                ]
              },
              {
                icon: Award,
                title: "Career Readiness",
                outcomes: [
                  "Real-world project portfolio",
                  "Understanding of enterprise software development",
                  "Mentorship from experienced engineers",
                  "Networking within the tech industry",
                  "Certificate of completion and recommendations"
                ]
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl bg-gradient-to-br from-section to-white border-2 border-border"
              >
                <category.icon className="w-12 h-12 text-accent mb-6" />
                <h4 className="text-xl font-bold mb-4">{category.title}</h4>
                <ul className="space-y-3">
                  {category.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3 text-sm">
                      <TrendingUp size={14} className="text-accent mt-1 shrink-0" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 text-center">
            <h4 className="text-2xl font-bold mb-4">Beyond the Internship</h4>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              While we don't promise job placements, many of our past interns have gone on to successful careers at leading tech companies, armed with the skills, experience, and confidence gained during their time at VelDurSen.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              {[
                { label: "Portfolio Projects", icon: Code },
                { label: "Industry Mentorship", icon: Users },
                { label: "Real Enterprise Exposure", icon: Globe }
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <benefit.icon size={16} className="text-green-600" />
                  <span className="font-semibold">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent/10 to-accent/5">
        <div className="enterprise-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Applications for our next internship cohort are reviewed on a rolling basis. If you're passionate about technology and ready to learn from real-world enterprise projects, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-enterprise inline-flex items-center">
                Apply Now <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/careers" className="px-6 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-300">
                View Full-Time Careers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <BlogPreview />
    </PageLayout>
  );
};

export default Internships;
