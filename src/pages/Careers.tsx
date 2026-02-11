import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  GraduationCap,
  Leaf,
  Heart,
  Code,
  Globe,
  TrendingUp,
  CheckCircle,
  Briefcase,
  MapPin,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

// Job Openings
const openings = [
  {
    role: "Frontend Developer",
    department: "Engineering",
    location: "Remote – Global",
    type: "Full-time",
    description: "Build beautiful, responsive web interfaces that millions use daily.",
  },
  {
    role: "Backend Developer",
    department: "Engineering",
    location: "New York, USA",
    type: "Full-time",
    description: "Design scalable APIs and systems that power enterprise solutions.",
  },
  {
    role: "UI/UX Designer",
    department: "Design",
    location: "Berlin, Germany",
    type: "Full-time",
    description: "Create intuitive user experiences for complex enterprise products.",
  },
  {
    role: "QA Engineer",
    department: "Quality Assurance",
    location: "London, UK",
    type: "Full-time",
    description: "Ensure product quality and reliability across all platforms.",
  },
  {
    role: "DevOps Engineer",
    department: "Infrastructure",
    location: "Singapore",
    type: "Full-time",
    description: "Manage and optimize cloud infrastructure for global scale.",
  },
  {
    role: "Data Engineer",
    department: "Data & Analytics",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Build data pipelines that drive insights and decision-making.",
  },
];

// Culture Values
const cultureValues = [
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe great things happen when diverse minds work together. Your ideas matter.",
  },
  {
    icon: TrendingUp,
    title: "Learning",
    description:
      "Continuous growth is part of our DNA. We invest in your development every day.",
  },
  {
    icon: Leaf,
    title: "Flexibility",
    description:
      "Work when, where, and how you're most productive. We trust you to get it done.",
  },
  {
    icon: Heart,
    title: "Ownership",
    description:
      "You're not just an employee—you're a stakeholder in our success and impact.",
  },
];

// Benefits
const benefits = [
  {
    icon: Code,
    title: "Professional Development",
    items: [
      "Learning budget for courses & certifications",
      "Conference sponsorships",
      "Internal tech talks and workshops",
    ],
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    items: [
      "Comprehensive health insurance",
      "Mental health support",
      "Fitness stipend",
    ],
  },
  {
    icon: Globe,
    title: "Work-Life Balance",
    items: [
      "Flexible hours and remote work",
      "Unlimited PTO",
      "Paid parental leave",
    ],
  },
  {
    icon: TrendingUp,
    title: "Rewards & Recognition",
    items: [
      "Performance bonuses",
      "Stock options for eligible roles",
      "Career advancement pathways",
    ],
  },
];

// Employee Testimonials
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Frontend Developer",
    quote:
      "I joined Veldursen three years ago and the growth has been incredible. I went from senior engineer to tech lead, and they supported every step. The team genuinely cares about your development.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Marcus Johnson",
    role: "Product Designer",
    quote:
      "What impressed me most was the autonomy. I'm not just executing designs—I'm shaping product direction. Plus, the balance between ambitious projects and flexibility is rare to find.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Priya Patel",
    role: "Backend Engineer",
    quote:
      "The engineering culture here is second to none. Code reviews are collaborative, not gatekeeping. Everyone's invested in making you better, and it shows.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

// Hiring Process Steps
const hiringSteps = [
  {
    step: 1,
    title: "Resume Review",
    description: "We carefully review your background and experience",
  },
  {
    step: 2,
    title: "Initial Call",
    description: "Casual conversation about your goals and our team",
  },
  {
    step: 3,
    title: "Technical Discussion",
    description: "Dive into your skills and experience in depth",
  },
  {
    step: 4,
    title: "Offer",
    description: "We're excited to have you join the team!",
  },
];

const Careers = () => (
  <PageLayout>
    {/* Hero Section */}
    <PageHero
      tag="Careers"
      title="Build Your Career at Veldursen"
      subtitle="Join a team that values innovation, collaboration, and real impact. We're building the future—and we want you to be part of it."
      bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
    />

    {/* Life at Veldursen - Culture Section */}
    <section className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="enterprise-container">
        <SectionHeader
          tag="Culture"
          title="Life at Veldursen"
          subtitle="We're built on trust, creativity, and a passion for solving complex problems. Here's what that means for you."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureValues.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                <value.icon className="text-red-600 dark:text-red-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                {value.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Growth & Learning Section */}
    <section className="section-padding">
      <div className="enterprise-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              Grow With Us
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              We believe in investing in our people. Whether you're just starting out or a seasoned
              professional, we're committed to your growth.
            </p>
            <ul className="space-y-4">
              {[
                "Annual learning budget for certifications and courses",
                "Regular one-on-one mentorship with experienced leaders",
                "Internal knowledge-sharing sessions and tech talks",
                "Career development plans tailored to your goals",
                "Conference sponsorships and speaking opportunities",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-red-600 dark:text-red-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop"
              alt="Software engineer collaborating at desk with dual monitors and code"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="enterprise-container">
        <SectionHeader
          tag="Benefits"
          title="We Take Care of Our People"
          subtitle="Comprehensive benefits designed to support your well-being and success"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm"
            >
                <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900 flex items-center justify-center mb-4">
                <benefit.icon className="text-amber-700 dark:text-amber-300" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
                {benefit.title}
              </h3>
              <ul className="space-y-2">
                {benefit.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                  >
                    <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="section-padding">
      <div className="enterprise-container">
        <SectionHeader
          tag="People"
          title="Hear From Our Team"
          subtitle="Real stories from people who are building the future at Veldursen"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-700 pt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Hiring Process Section */}
    <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
      <div className="enterprise-container">
        <SectionHeader
          tag="Process"
          title="Our Hiring Process"
          subtitle="Transparent, fair, and designed to help us get to know you"
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {hiringSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {i < hiringSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-red-300 to-transparent dark:from-red-600" />
                )}

                <div className="relative bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Open Positions Section */}
    <section className="section-padding">
      <div className="enterprise-container">
        <SectionHeader
          tag="Openings"
          title="Current Opportunities"
          subtitle="Explore roles across our engineering, design, and operations teams"
        />
        <div className="max-w-4xl mx-auto space-y-4">
          {openings.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                  <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded">
                      {job.department}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase size={16} />
                      {job.type}
                    </span>
                  </div>
                </div>
                <a
                  href={`mailto:careers@veldursen.com?subject=Application for ${job.role}`}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-6 py-2 whitespace-nowrap inline-flex items-center gap-2 transition-colors"
                  aria-label={`Apply for ${job.role}`}
                >
                  Apply Now
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Diversity & Inclusion Section */}
    <section className="section-padding">
      <div className="enterprise-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              Diversity & Inclusion
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Veldursen is an Equal Opportunity Employer. We celebrate diversity and are committed
              to creating an inclusive environment for all employees. We actively encourage
              applications from people of all backgrounds, experiences, and perspectives.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Diversity makes us stronger, and we believe the best ideas come from teams with different
              viewpoints and experiences. If you have any accessibility needs or accommodations during
              the hiring process, please let us know. We're here to support you.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
              alt="Diverse team of tech professionals in modern office"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Final CTA Section */}
    <section className="section-padding bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="enterprise-container max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Join the Team?</h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          If you don't see a perfect fit right now, we'd still love to hear from you. Send us your
          resume and tell us what you're working on.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:careers@veldursen.com?subject=Application - Veldursen Careers"
            className="flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-red-50 rounded-lg px-8 py-3 font-semibold transition-colors"
          >
            Apply Now
            <ArrowRight size={16} />
          </a>
          <a
            href="mailto:careers@veldursen.com"
            className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-700 text-white rounded-lg px-8 py-3 font-semibold transition-colors"
          >
            <MessageSquare size={16} />
            Contact HR
          </a>
        </div>
        <p className="text-blue-100 text-sm mt-6">careers@veldursen.com</p>
      </div>
    </section>
  </PageLayout>
);

export default Careers;
