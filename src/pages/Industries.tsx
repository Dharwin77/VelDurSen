import { motion } from "framer-motion";
import {
  Heart,
  GraduationCap,
  Factory,
  Landmark,
  ShoppingCart,
  ArrowRight,
  Calendar,
  Users,
  TrendingUp,
  BarChart3,
  Shield,
  Zap,
  Check
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";

// Industry sections data - 10 scroll sections total
const industrySections = [
  // HEALTHCARE - Scroll 1
  {
    id: "healthcare-overview",
    industry: "Healthcare",
    icon: Heart,
    headingLevel: "h2",
    title: "CRM Software for Healthcare & Medical Services",
    content: "Healthcare providers require secure, reliable, and scalable CRM software to manage patient relationships efficiently. Our cloud CRM platform helps hospitals, clinics, and diagnostic centers streamline appointment scheduling, patient communication, and service coordination. By centralizing patient data, automating follow-ups, and enabling real-time analytics, our Customer Relationship Management platform improves operational efficiency and patient satisfaction. Built with security and compliance in mind, our enterprise CRM software ensures protected data handling and seamless workflow automation.",
    cta: "Transform Healthcare Operations",
    gradient: "from-blue-500/10 via-cyan-500/10 to-blue-400/10",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    animationType: "fadeUp",
    features: null
  },
  // HEALTHCARE - Scroll 2
  {
    id: "healthcare-solutions",
    industry: "Healthcare",
    icon: Heart,
    headingLevel: "h3",
    title: "Patient Engagement & Automation Solutions",
    content: "Our healthcare CRM system supports:",
    gradient: "from-blue-400/10 via-cyan-400/10 to-teal-400/10",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    animationType: "cardFlip",
    features: [
      "Automated appointment reminders",
      "Referral tracking",
      "Digital patient onboarding",
      "Follow-up automation",
      "Performance analytics dashboards"
    ],
    footer: "With scalable CRM systems, healthcare organizations reduce administrative burden while improving service quality and response time."
  },
  // EDUCATION - Scroll 3
  {
    id: "education-overview",
    industry: "Education",
    icon: GraduationCap,
    headingLevel: "h2",
    title: "CRM Solutions for Education & EdTech Institutions",
    content: "Educational institutions require structured communication systems to manage student inquiries, admissions, and engagement workflows. Our cloud-based CRM software centralizes student data and improves the admissions pipeline. From inquiry tracking to enrollment automation, our CRM platform empowers schools, universities, and EdTech startups with intelligent business automation solutions that increase conversion rates and enhance student experience.",
    cta: "Upgrade Education CRM",
    gradient: "from-indigo-500/10 via-purple-500/10 to-indigo-400/10",
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    animationType: "slideLeft",
    features: null
  },
  // EDUCATION - Scroll 4
  {
    id: "education-solutions",
    industry: "Education",
    icon: GraduationCap,
    headingLevel: "h3",
    title: "Admission & Student Lifecycle Management",
    content: "Key capabilities include:",
    gradient: "from-indigo-400/10 via-purple-400/10 to-blue-400/10",
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    animationType: "parallax",
    features: [
      "Inquiry tracking system",
      "Automated email & SMS communication",
      "Admission workflow automation",
      "Student performance tracking",
      "Alumni engagement tools"
    ],
    footer: "Our enterprise CRM software ensures scalable operations and seamless communication at every stage of the student lifecycle."
  },
  // MANUFACTURING - Scroll 5
  {
    id: "manufacturing-overview",
    industry: "Manufacturing",
    icon: Factory,
    headingLevel: "h2",
    title: "CRM & Automation for Manufacturing Companies",
    content: "Manufacturing companies need structured B2B relationship management and streamlined communication across supply chains. Our CRM software enables manufacturers to track distributors, manage client accounts, and automate sales pipelines efficiently. Our scalable CRM systems provide real-time data visibility and forecasting insights to enhance operational productivity.",
    cta: "Optimize Manufacturing CRM",
    gradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
    animationType: "slideRight",
    features: null
  },
  // MANUFACTURING - Scroll 6
  {
    id: "manufacturing-solutions",
    industry: "Manufacturing",
    icon: Factory,
    headingLevel: "h3",
    title: "B2B Client & Supply Chain Automation",
    content: "Our manufacturing CRM includes:",
    gradient: "from-orange-400/10 via-amber-400/10 to-yellow-400/10",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
    animationType: "tilt3D",
    features: [
      "Distributor management dashboards",
      "Order tracking systems",
      "Sales forecasting tools",
      "Workflow automation",
      "Performance analytics"
    ],
    footer: "As a product-based software company, we design enterprise CRM software that supports long-term industrial growth."
  },
  // FINTECH - Scroll 7
  {
    id: "fintech-overview",
    industry: "FinTech",
    icon: Landmark,
    headingLevel: "h2",
    title: "Secure CRM Systems for FinTech & Financial Services",
    content: "Financial institutions and FinTech startups rely on secure CRM software to manage sensitive client data and communication. Our cloud CRM platform ensures encrypted data handling and regulatory-compliant automation systems. We enable efficient client onboarding, portfolio management, and service tracking through scalable CRM solutions.",
    cta: "Secure Your Financial CRM",
    gradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    animationType: "gradientGlow",
    features: null
  },
  // FINTECH - Scroll 8
  {
    id: "fintech-solutions",
    industry: "FinTech",
    icon: Landmark,
    headingLevel: "h3",
    title: "Client Lifecycle & Compliance Automation",
    content: "Features include:",
    gradient: "from-emerald-400/10 via-teal-400/10 to-cyan-400/10",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    animationType: "flipCard",
    features: [
      "Secure client onboarding",
      "Communication tracking",
      "Financial service automation",
      "Data analytics dashboards",
      "Risk monitoring workflows"
    ],
    footer: "Our enterprise CRM software ensures trust, transparency, and secure digital transformation."
  },
  // RETAIL - Scroll 9
  {
    id: "retail-overview",
    industry: "Retail",
    icon: ShoppingCart,
    headingLevel: "h2",
    title: "CRM Software for Retail & E-Commerce Businesses",
    content: "Retail brands and e-commerce businesses require customer-centric CRM platforms to improve engagement and retention. Our CRM software tracks customer behavior, purchase history, and campaign performance to deliver personalized marketing automation. With scalable CRM systems, businesses increase repeat purchases and improve customer satisfaction.",
    cta: "Boost Retail Performance",
    gradient: "from-purple-500/10 via-fuchsia-500/10 to-pink-500/10",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    animationType: "zoomIn",
    features: null
  },
  // RETAIL - Scroll 10
  {
    id: "retail-solutions",
    industry: "Retail",
    icon: ShoppingCart,
    headingLevel: "h3",
    title: "Customer Engagement & Sales Automation",
    content: "Our retail CRM platform offers:",
    gradient: "from-purple-400/10 via-fuchsia-400/10 to-pink-400/10",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    animationType: "floating",
    features: [
      "Loyalty program management",
      "Campaign automation tools",
      "Sales funnel tracking",
      "Customer segmentation",
      "Real-time analytics"
    ],
    footer: "As a product-based CRM software company founded in 2023, we help modern retailers build scalable, data-driven customer relationship systems."
  }
];

const Industries = () => {
  // Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Industries Powered by Intelligent CRM & Business Automation Solutions",
    "description": "Product-based CRM software company founded in 2023 delivering scalable cloud CRM platforms for Healthcare, Education, Manufacturing, FinTech, and Retail.",
    "provider": {
      "@type": "Organization",
      "name": "VelDurSen",
      "foundingDate": "2023",
      "description": "Product-based software company delivering scalable CRM software and cloud-based automation platforms"
    }
  };

  return (
    <PageLayout>
      {/* SEO Component */}
      <SEO
        title="Industries Powered by CRM Software & Business Automation | VelDurSen 2023"
        description="Scalable CRM software for Healthcare, Education, Manufacturing, FinTech & Retail. Cloud-based automation platforms founded in 2023."
        keywords="CRM software, cloud CRM platform, scalable CRM systems, enterprise CRM software, business automation solutions, customer relationship management platform"
        ogTitle="Industry-Specific CRM & Automation Solutions | VelDurSen"
        ogDescription="Product-based CRM software company founded in 2023. Intelligent automation for Healthcare, Education, Manufacturing, FinTech & Retail."
        schema={schemaData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/5 via-background to-muted/20 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="enterprise-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Zap className="w-4 h-4" />
              Product-Based Software Company • Founded 2023
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Industries Powered by Intelligent<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent/80 to-accent">
                CRM & Business Automation Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Founded in 2023, we are a product-based software company delivering scalable CRM software and cloud-based automation platforms designed for industry-specific transformation.
            </p>

            <div className="flex flex-wrap gap-3 justify-center items-center mb-12">
              {[
                { icon: Heart, label: "Healthcare" },
                { icon: GraduationCap, label: "Education" },
                { icon: Factory, label: "Manufacturing" },
                { icon: Landmark, label: "FinTech" },
                { icon: ShoppingCart, label: "Retail" }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <item.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10 Scroll Sections */}
      {industrySections.map((section, index) => {
        const isOverview = section.headingLevel === "h2";
        const HeadingTag = section.headingLevel as keyof JSX.IntrinsicElements;

        // Animation variants based on type
        const getAnimationProps = () => {
          const baseDelay = 0.1;

          switch (section.animationType) {
            case "fadeUp":
              return {
                initial: { opacity: 0, y: 60 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.7 }
              };
            case "slideLeft":
              return {
                initial: { opacity: 0, x: -80 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.7, delay: baseDelay }
              };
            case "slideRight":
              return {
                initial: { opacity: 0, x: 80 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.7 }
              };
            case "cardFlip":
              return {
                initial: { opacity: 0, rotateY: -90 },
                whileInView: { opacity: 1, rotateY: 0 },
                transition: { duration: 0.8 }
              };
            case "parallax":
              return {
                initial: { opacity: 0, y: 40, scale: 0.95 },
                whileInView: { opacity: 1, y: 0, scale: 1 },
                transition: { duration: 0.7 }
              };
            case "tilt3D":
              return {
                initial: { opacity: 0, rotateX: -15, y: 30 },
                whileInView: { opacity: 1, rotateX: 0, y: 0 },
                transition: { duration: 0.8 }
              };
            case "gradientGlow":
              return {
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.7 }
              };
            case "flipCard":
              return {
                initial: { opacity: 0, rotateX: 90 },
                whileInView: { opacity: 1, rotateX: 0 },
                transition: { duration: 0.8 }
              };
            case "zoomIn":
              return {
                initial: { opacity: 0, scale: 0.85 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.7 }
              };
            case "floating":
              return {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.7, type: "spring" }
              };
            default:
              return {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6 }
              };
          }
        };

        return (
          <section
            key={section.id}
            id={section.id}
            className={`section-padding ${index % 2 === 0 ? "" : "section-alt"}`}
          >
            <div className="enterprise-container">
              <motion.article
                {...getAnimationProps()}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-5xl mx-auto"
              >
                {/* Overview Section Layout */}
                {isOverview ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-14 h-14 rounded-2xl ${section.bgColor} flex items-center justify-center shadow-lg`}
                          >
                            <section.icon className={`w-7 h-7 ${section.iconColor}`} />
                          </motion.div>
                        </div>

                        <HeadingTag className="text-3xl md:text-4xl font-bold mb-4">
                          {section.title}
                        </HeadingTag>
                      </div>

                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>

                      {section.cta && (
                        <motion.button
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-accent group inline-flex items-center"
                        >
                          {section.cta}
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                      )}
                    </div>

                    {/* Visual Element */}
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`relative bg-gradient-to-br ${section.gradient} rounded-2xl p-12 md:p-16 shadow-xl overflow-hidden min-h-[320px] flex items-center justify-center`}
                      >
                        {/* Decorative elements */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl" />
                        </div>

                        {/* Animated Icon */}
                        <motion.div
                          animate={{
                            y: [0, -15, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="relative z-10"
                        >
                          <section.icon className={`w-32 h-32 md:w-40 md:h-40 ${section.iconColor} opacity-40`} />
                        </motion.div>

                        {/* Glow effect for specific animations */}
                        {section.animationType === "gradientGlow" && (
                          <motion.div
                            animate={{
                              opacity: [0.3, 0.6, 0.3],
                              scale: [1, 1.05, 1]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-2xl"
                          />
                        )}
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  /* Solutions/Features Section Layout */
                  <div className="space-y-8">
                    <div className="text-center max-w-3xl mx-auto">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-12 h-12 rounded-xl ${section.bgColor} flex items-center justify-center shadow-md`}
                        >
                          <section.icon className={`w-6 h-6 ${section.iconColor}`} />
                        </motion.div>
                      </div>

                      <HeadingTag className="text-2xl md:text-3xl font-bold mb-3">
                        {section.title}
                      </HeadingTag>

                      <p className="text-muted-foreground text-lg mb-8">
                        {section.content}
                      </p>
                    </div>

                    {/* Features Grid */}
                    {section.features && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {section.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                            }}
                            className={`card-enterprise flex items-start gap-3 p-5 ${section.animationType === "floating" ? "hover:shadow-2xl" : ""
                              } ${section.animationType === "tilt3D" ? "perspective-1000" : ""
                              }`}
                            style={
                              section.animationType === "tilt3D"
                                ? { transformStyle: "preserve-3d" }
                                : undefined
                            }
                          >
                            <div className={`w-6 h-6 rounded-full ${section.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <Check className={`w-4 h-4 ${section.iconColor}`} />
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Footer Text */}
                    {section.footer && (
                      <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {section.footer}
                      </p>
                    )}
                  </div>
                )}
              </motion.article>
            </div>
          </section>
        );
      })}

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="enterprise-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>

            <p className="text-lg md:text-xl mb-10 opacity-95 leading-relaxed">
              Experience scalable CRM software and cloud-based automation platforms designed specifically for your industry. Get started today.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-white text-accent px-10 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-accent transition-all"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Industries;
