import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Shield, Send } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import BlogPreview from "@/components/shared/BlogPreview";
import globalMap from "@/assets/global-map.jpg";

const regions = [
  { name: "North America", cities: "New York · San Francisco · Toronto", desc: "Enterprise headquarters and innovation hub" },
  { name: "Europe", cities: "London · Berlin · Amsterdam", desc: "GDPR-compliant European operations center" },
  { name: "Asia-Pacific", cities: "Singapore · Bangalore · Sydney", desc: "APAC delivery center and engineering hub" },
  { name: "Middle East", cities: "Dubai · Riyadh", desc: "Regional enterprise partnerships and support" },
];

const Contact = () => (
  <PageLayout>
    <PageHero
      tag="Contact Us"
      title="Let's Build Something Extraordinary"
      subtitle="Connect with our enterprise technology experts to discuss your digital transformation journey. We're ready to help you scale globally."
    />

    {/* Contact Form + Info */}
    <section className="section-padding">
      <div className="enterprise-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold mb-6">Enterprise Inquiry</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md border border-input bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md border border-input bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Work Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-md border border-input bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input type="text" className="w-full px-4 py-3 rounded-md border border-input bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="Company Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Area of Interest</label>
                <select className="w-full px-4 py-3 rounded-md border border-input bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/30">
                  <option>Enterprise AI Solutions</option>
                  <option>Cloud & DevOps Engineering</option>
                  <option>Cybersecurity & Compliance</option>
                  <option>Data Engineering & Analytics</option>
                  <option>Digital Transformation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-input bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="btn-accent w-full md:w-auto">
                <Send size={16} className="mr-2" /> Submit Inquiry
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6 mb-10">
              {[
                { icon: Mail, label: "Email", value: "enterprise@veldursen.com" },
                { icon: Phone, label: "Phone", value: "+1 (800) 555-TECH" },
                { icon: MapPin, label: "Headquarters", value: "350 Fifth Avenue, New York, NY 10118" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-accent" size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Notice */}
            <div className="card-enterprise bg-muted/50">
              <div className="flex items-start gap-3">
                <Shield className="text-accent shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-sm font-bold mb-1">Security & Compliance</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    All communications are encrypted end-to-end. VelDurSen is compliant with SOC 2 Type II, GDPR, HIPAA, and ISO 27001 standards. Your data is handled with enterprise-grade security protocols.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Global Presence */}
    <section className="section-padding section-alt">
      <div className="enterprise-container">
        <SectionHeader tag="Global Presence" title="Worldwide Delivery & Support" subtitle="Strategically located teams ensuring 24/7 enterprise support and local expertise across every major region." />
        <div className="mb-10">
          <img src={globalMap} alt="VelDurSen global presence" className="rounded-lg shadow-lg w-full max-h-[400px] object-cover" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-enterprise">
              <Globe className="text-accent mb-3" size={22} />
              <h3 className="text-lg font-bold mb-1">{r.name}</h3>
              <p className="text-sm text-accent font-medium mb-2">{r.cities}</p>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <BlogPreview />
  </PageLayout>
);

export default Contact;
