import { motion, useScroll, useTransform } from "framer-motion";
import {
  Heart,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Factory,
  Truck,
  Building2,
  Plane,
  Code2,
  Building,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { useRef } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";
import { IndustryImage } from "@/components/industries/IndustryImage";
import { industryImages } from "@/data/industryImages";

// Data for all 10 industries
const industries = [
  {
    id: "healthcare",
    title: "Healthcare Solutions",
    description: "Transform patient care with our HIPAA-compliant CRM. Streamline appointment scheduling, manage electronic health records secure, and improve patient engagement with automated follow-ups and telehealth integration.",
    services: [
      "Patient Management & EHR Integration",
      "Automated Appointment Scheduling",
      "Telehealth & Remote Monitoring",
      "HIPAA-Compliant Data Security"
    ],
    icon: Heart,
    image: industryImages.healthcare.overview
  },
  {
    id: "fintech",
    title: "FinTech Innovation",
    description: "Secure, scalable CRM solutions for the financial sector. Manage client relationships, track investment portfolios, and ensure regulatory compliance with our banking-grade security infrastructure.",
    services: [
      "Wealth Management Dashboard",
      "KYC & Compliance Automation",
      "Secure Document Vault",
      "Real-time Portfolio Tracking"
    ],
    icon: Landmark,
    image: industryImages.fintech.dashboard
  },
  {
    id: "ecommerce",
    title: "E-Commerce Growth",
    description: "Drive sales and retention with a data-driven retail CRM. Track customer journeys, automate marketing campaigns based on purchase behavior, and integrate seamlessly with your online store.",
    services: [
      "Omnichannel Customer Profiles",
      "Abandoned Cart Recovery",
      "Loyalty Program Management",
      "Predictive Sales Analytics"
    ],
    icon: ShoppingCart,
    image: industryImages.retail.dashboard
  },
  {
    id: "education",
    title: "Education Management",
    description: "Empower educational institutions with comprehensive student lifecycle management. From enrollment to alumni relations, optimize every interaction and improve student success rates.",
    services: [
      "Student Enrollment Pipeline",
      "Academic Performance Tracking",
      "Alumni Engagement Portal",
      "Campus Event Management"
    ],
    icon: GraduationCap,
    image: industryImages.education.overview
  },
  {
    id: "manufacturing",
    title: "Smart Manufacturing",
    description: "Optimize production and supply chain with Industry 4.0 CRM tools. improving vendor relationships, tracking inventory in real-time, and predicting maintenance needs before they impact production.",
    services: [
      "Supply Chain Visualization",
      "Vendor Portal & Management",
      "IoT Equipment Monitoring",
      "Production Schedule Optimization"
    ],
    icon: Factory,
    image: industryImages.manufacturing.overview
  },
  {
    id: "logistics",
    title: "Logistics Optimization",
    description: "Streamline unparalleled visibility into your supply chain. Manage fleets, track shipments in real-time, and optimize delivery routes to reduce costs and improve customer satisfaction.",
    services: [
      "Real-time Fleet Tracking",
      "Route Optimization Engine",
      "Automated Dispatch System",
      "Last-Mile Delivery Management"
    ],
    icon: Truck,
    image: industryImages.logistics.overview
  },
  {
    id: "realestate",
    title: "Real Estate Management",
    description: "Close more deals and manage properties efficiently. Our Real Estate CRM helps agents track leads, manage listings, and automate documentation for faster closing cycles.",
    services: [
      "Lead & Listing Management",
      "Automated Property Matching",
      "Document E-Signing Integration",
      "Tenant Portal Access"
    ],
    icon: Building2,
    image: industryImages.realestate.overview
  },
  {
    id: "travel",
    title: "Travel & Hospitality",
    description: "Deliver personalized guest experiences at scale. Manage bookings, preferences, and loyalty rewards to create memorable journeys for travelers and streamlined operations for staff.",
    services: [
      "Guest Preference Profiling",
      "integrated Booking Engine",
      "Concierge Service Automation",
      "Dynamic Pricing Tools"
    ],
    icon: Plane,
    image: industryImages.travel.overview
  },
  {
    id: "saas",
    title: "SaaS & Startups",
    description: "Accelerate growth with a CRM built for subscription businesses. Track MRR, churn, and user engagement metrics while automating onboarding flows for new customers.",
    services: [
      "Subscription Lifecycle Management",
      "Churn Prediction Models",
      "User Onboarding Automation",
      "Product Usage Analytics"
    ],
    icon: Code2,
    image: industryImages.saas.overview
  },
  {
    id: "government",
    title: "Government & Public Sector",
    description: "Modernize public services with secure, citizen-centric case management. Improve transparency, reduce wait times, and handle inquiries efficiently with our GovTech solutions.",
    services: [
      "Citizen Service Portal",
      "Secure Case Management",
      "Inter-agency Collaboration",
      "FOIA Request Handling"
    ],
    icon: Building,
    image: industryImages.government.overview
  }
];

const Industries = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Industries We Serve - VelDurSen",
    "description": "Comprehensive CRM solutions for Healthcare, FinTech, Retail, Education, Manufacturing, and more.",
    "provider": {
      "@type": "Organization",
      "name": "VelDurSen",
      "description": "Enterprise-grade software solutions."
    }
  };

  return (
    <PageLayout>
      <SEO
        title="Industries We Serve | VelDurSen Enterprise Solutions"
        description="Discover our specialized CRM solutions for Healthcare, FinTech, Manufacturing, Retail, and more. Tailored technology for your industry's unique challenges."
        schema={schemaData}
      />

      <div ref={containerRef} className="bg-background min-h-screen snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">

        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden snap-start">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 text-center relative z-10"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 border border-accent/20">
              Industry Specific Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Technology Tailored to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal-400">Your Sector</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We understand that every industry faces unique challenges. Our specialized platforms are engineered to solve them delivering precision, compliance, and growth.
            </p>
          </motion.div>
        </section>

        {/* Industry Sections */}
        <div className="flex flex-col">
          {industries.map((industry, index) => (
            <section
              key={industry.id}
              className={`py-20 px-6 md:px-20 min-h-screen flex items-center justify-center overflow-hidden ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                }`}
            >
              <div className="container mx-auto max-w-7xl">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''
                  }`}>

                  {/* Image Column */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`relative ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                      <IndustryImage
                        src={industry.image.src || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"} // Fallback
                        alt={industry.image.alt || industry.title}
                        animationType={index % 2 === 0 ? "slideRight" : "slideLeft"}
                        containerClassName="aspect-[4/3] w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Decorative Element */}
                    <div className={`absolute -bottom-6 -z-10 w-full h-full rounded-2xl border-2 border-accent/10 ${index % 2 === 0 ? '-left-6' : '-right-6'
                      }`} />
                  </motion.div>

                  {/* Content Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={index % 2 !== 0 ? 'lg:col-start-1' : ''}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-lg bg-accent/10 text-accent">
                        <industry.icon className="w-8 h-8" />
                      </div>
                      <span className="text-sm font-bold text-accent uppercase tracking-wider">
                        {industry.id.toUpperCase()}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                      {industry.title}
                    </h2>

                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {industry.description}
                    </p>

                    <ul className="space-y-4 mb-10">
                      {industry.services.map((service, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i + 0.3 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{service}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-teal-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>

                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Global CTA */}
        <section className="py-24 bg-slate-900 text-white text-center snap-start min-h-[50vh] flex flex-col justify-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join industry leaders who trust VelDurSen to power their digital transformation.
            </p>
            <button className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
              Get Started Today
            </button>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default Industries;
