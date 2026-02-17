import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Shield, Send, CheckCircle, ArrowRight, Building2, Clock } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/shared/SectionHeader";
import globalMap from "@/assets/global-map.jpg";
import { SEO } from "@/components/shared/SEO";
import contactVideo from "@/assets/contact.mp4";

const Contact = () => {

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    interest: "Enterprise AI Solutions",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Global Enterprise Support",
      value: "enterprise@veldursen.com",
      desc: "24/7 Priority Support for Partners",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Phone,
      title: "Direct Sales Line",
      value: "+1 (800) 555-TECH",
      desc: "Mon-Fri, 9am - 6pm EST",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      icon: MapPin,
      title: "Global Headquarters",
      value: "New York, USA",
      desc: "350 Fifth Avenue, NY 10118",
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  return (
    <PageLayout>
      <SEO
        title="Contact VelDurSen | Global Enterprise Support & Sales"
        description="Get in touch with VelDurSen Technologies for enterprise AI solutions, cloud engineering, and digital transformation consulting. 24/7 global support."
        keywords={["Contact VelDurSen", "Enterprise support", "IT consulting contact", "Global IT sales", "VelDurSen headquarters"]}
        schemas={[{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact VelDurSen Technologies",
          "description": "Contact page for VelDurSen Technologies enterprise services",
          "mainEntity": {
            "@type": "Organization",
            "name": "VelDurSen Technologies",
            "telephone": "+1-800-555-8324",
            "email": "enterprise@veldursen.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "350 Fifth Avenue",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "postalCode": "10118",
              "addressCountry": "US"
            }
          }
        }]}
      />
      {/* 1. HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative h-[50vh] sm:h-[80vh] min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-slate-900">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-[10s]"
        >
          <source src={contactVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10" />

        <div className="enterprise-container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-red-500 mb-6 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              Contact & Support
            </span>
            <h1 className="text-[2.75rem] sm:text-[4.5rem] md:text-[6.5rem] font-bold text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              Let's Build the <br />
              <span className="text-red-600">Extraordinary.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium mb-12 max-w-2xl leading-relaxed drop-shadow-md">
              Connect with our enterprise architects and digital transformation experts. We are ready to scale your vision globally.
            </p>
          </motion.div>
        </div>

        {/* Floating Abstract Element */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -z-0" />
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      {/* 2. MAIN CONTACT SECTION: DIGITAL COMMAND CENTER STYLE */}
      <section className="py-24 bg-slate-50 relative z-30">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Command Status Panel */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-2 block">Connectivity Status</span>
                      <h3 className="text-2xl font-bold mb-1 tracking-tight">Live Operations</h3>
                      <p className="text-slate-400 text-sm">System Status: <span className="text-emerald-400 font-bold">OPTIMAL</span></p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center animate-pulse">
                      <Clock size={20} className="text-blue-400" />
                    </div>
                  </div>

                  {/* New Feature: Status Grid */}
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { city: "New York (HQ)", time: "EST", status: "Active", color: "bg-emerald-500" },
                      { city: "London", time: "GMT", status: "Active", color: "bg-emerald-500" },
                      { city: "Singapore", time: "SGT", status: "Standby", color: "bg-amber-500" },
                      { city: "Dubai", time: "GST", status: "Active", color: "bg-emerald-500" }
                    ].map((loc, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className={`w-2.5 h-2.5 rounded-full ${loc.color} shadow-[0_0_10px_currentColor]`} />
                          <span className="font-bold text-sm tracking-wide">{loc.city}</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                          <span>{loc.time}</span>
                          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700 uppercase tracking-widest text-[10px]">{loc.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
                    <span>Avg. Response Time</span>
                    <span className="font-mono text-emerald-400 text-lg font-bold">{"<"} 15 mins</span>
                  </div>
                </div>

                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />
              </motion.div>

              {/* Direct Link Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Phone size={18} className="text-red-600" /> Executive Line
                </h4>
                <a href="tel:+18005558324" className="block text-3xl font-black text-slate-900 hover:text-red-600 transition-colors tracking-tight mb-2">
                  +1 (800) 555-TECH
                </a>
                <p className="text-sm text-slate-500">Dedicated Priority Success Manager available 24/7 for enterprise partners.</p>
              </motion.div>
            </div>

            {/* Right Column: Intelligent Inquiry Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden"
              >
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2">Initiate Request</h2>
                      <p className="text-slate-500">Use the form below to connect directly with our solution engineering team.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input
                          type="text"
                          id="firstName"
                          required
                          value={formState.firstName}
                          onChange={handleInputChange}
                          className="peer w-full pt-6 pb-2 border-b-2 border-slate-200 bg-transparent text-lg font-medium text-slate-900 focus:outline-none focus:border-red-600 transition-colors placeholder-transparent"
                          placeholder="Name"
                        />
                        <label htmlFor="firstName" className="absolute left-0 top-2 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-slate-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-600 font-bold uppercase tracking-wider">
                          First Name
                        </label>
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          id="lastName"
                          required
                          value={formState.lastName}
                          onChange={handleInputChange}
                          className="peer w-full pt-6 pb-2 border-b-2 border-slate-200 bg-transparent text-lg font-medium text-slate-900 focus:outline-none focus:border-red-600 transition-colors placeholder-transparent"
                          placeholder="Name"
                        />
                        <label htmlFor="lastName" className="absolute left-0 top-2 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-slate-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-600 font-bold uppercase tracking-wider">
                          Last Name
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input
                          type="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          className="peer w-full pt-6 pb-2 border-b-2 border-slate-200 bg-transparent text-lg font-medium text-slate-900 focus:outline-none focus:border-red-600 transition-colors placeholder-transparent"
                          placeholder="Email"
                        />
                        <label htmlFor="email" className="absolute left-0 top-2 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-slate-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-600 font-bold uppercase tracking-wider">
                          Work Email
                        </label>
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          id="company"
                          value={formState.company}
                          onChange={handleInputChange}
                          className="peer w-full pt-6 pb-2 border-b-2 border-slate-200 bg-transparent text-lg font-medium text-slate-900 focus:outline-none focus:border-red-600 transition-colors placeholder-transparent"
                          placeholder="Company"
                        />
                        <label htmlFor="company" className="absolute left-0 top-2 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-slate-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-600 font-bold uppercase tracking-wider">
                          Company Name
                        </label>
                      </div>
                    </div>

                    {/* New Feature: Budget Range Slider */}
                    <div className="pt-4">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Estimated Project Budget</label>
                      <input type="range" min="1" max="5" defaultValue="2" className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-red-600" />
                      <div className="flex justify-between mt-2 text-xs font-bold text-slate-400">
                        <span>$50k+</span>
                        <span>$100k+</span>
                        <span>$250k+</span>
                        <span>$500k+</span>
                        <span>$1M+</span>
                      </div>
                    </div>

                    {/* New Feature: Urgency Toggle */}
                    <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div>
                        <span className="block font-bold text-slate-900 text-sm">Urgent Request?</span>
                        <span className="text-xs text-slate-500">Priority routing to senior architects.</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                      </label>
                    </div>

                    <div className="relative group pt-4">
                      <textarea
                        id="message"
                        rows={3}
                        value={formState.message}
                        onChange={handleInputChange}
                        className="peer w-full pt-6 pb-2 border-b-2 border-slate-200 bg-transparent text-lg font-medium text-slate-900 focus:outline-none focus:border-red-600 transition-colors placeholder-transparent resize-none"
                        placeholder="Details"
                      />
                      <label htmlFor="message" className="absolute left-0 top-6 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-10 peer-placeholder-shown:text-slate-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-600 font-bold uppercase tracking-wider">
                        Project Brief
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 text-white font-bold text-lg py-5 rounded-full hover:bg-red-600 active:scale-[0.98] transition-all shadow-xl hover:shadow-red-600/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mt-8"
                    >
                      {isSubmitting ? (
                        <>Transmitting...</>
                      ) : (
                        <>Deploy Inquiry <ArrowRight size={20} /></>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center h-[600px]"
                  >
                    <div className="w-24 h-24 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-xl shadow-emerald-600/10">
                      <CheckCircle size={48} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Signal Received</h2>
                    <p className="text-xl text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
                      Your inquiry has been successfully routed to our enterprise team. Expect a secure communication within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 rounded-full border-2 border-slate-200 text-slate-900 font-bold hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-xs"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GLOBAL PRESENCE MAP */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="enterprise-container">
          <div className="mb-16 text-center">
            <span className="inline-block text-xs font-black uppercase tracking-[0.4em] mb-6 text-orange-600">
              Global Persistence
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
              Empowering <span className="text-orange-600">4 Continents.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Strategically located delivery centers ensuring seamless 24/7 operations.
            </p>
          </div>

          <div className="relative mt-16 max-w-6xl mx-auto">
            {/* Map Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img src={globalMap} alt="VelDurSen Global Operations" className="w-full min-h-[250px] sm:min-h-[400px] md:min-h-[600px] object-cover transition-transform duration-[10s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500" />

              {/* Animated PING Markers */}
              {/* NY */}
              <div className="absolute top-[35%] left-[28%] group/marker">
                <div className="relative">
                  <span className="absolute inline-flex h-8 w-8 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-8 w-8 bg-blue-600 border-4 border-white shadow-xl items-center justify-center">
                    <Building2 size={14} className="text-white" />
                  </span>
                  {/* Tooltip */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold py-1 px-3 rounded-full shadow-lg opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap">
                    New York HQ
                  </div>
                </div>
              </div>

              {/* London */}
              <div className="absolute top-[30%] left-[48%] group/marker">
                <div className="relative">
                  <span className="absolute inline-flex h-6 w-6 rounded-full bg-emerald-400 opacity-75 animate-ping" style={{ animationDelay: '0.5s' }}></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-600 border-2 border-white shadow-xl items-center justify-center"></span>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold py-1 px-3 rounded-full shadow-lg opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap">
                    London Hub
                  </div>
                </div>
              </div>

              {/* Singapore */}
              <div className="absolute top-[55%] left-[78%] group/marker">
                <div className="relative">
                  <span className="absolute inline-flex h-6 w-6 rounded-full bg-purple-400 opacity-75 animate-ping" style={{ animationDelay: '1s' }}></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-purple-600 border-2 border-white shadow-xl items-center justify-center"></span>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold py-1 px-3 rounded-full shadow-lg opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap">
                    Singapore APAC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
