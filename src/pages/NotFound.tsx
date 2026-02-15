
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Briefcase, Globe, Info, Mail, Search } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { SEO } from "@/components/shared/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const quickLinks = [
    { title: "Home", path: "/", icon: Home },
    { title: "Services", path: "/services", icon: Briefcase },
    { title: "Industries", path: "/industries", icon: Globe },
    { title: "About Us", path: "/about", icon: Info },
    { title: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <PageLayout>
      <SEO
        title="404 - Page Not Found | VelDurSen Technologies"
        description="The page you are looking for doesn't exist. Explore VelDurSen's enterprise technology solutions, industries, and insights."
      />
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 relative overflow-hidden py-20">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-900/5 rounded-full blur-[100px]" />

        <div className="enterprise-container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-red-100">
                <Search size={12} />
                Error Code: 404
              </div>

              <h1 className="text-7xl md:text-9xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                Lost in <span className="text-red-600">Transit.</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                The architectural path you're looking for doesn't exist or has been relocated to a different layer of our infrastructure.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
                <Link
                  to="/"
                  className="btn-enterprise px-10 py-5 bg-slate-900 text-white border-slate-900 hover:bg-red-600 hover:border-red-600 transition-all rounded-full flex items-center gap-3 shadow-2xl shadow-slate-900/20"
                >
                  <ArrowLeft size={18} />
                  Return to Headquarters
                </Link>
                <Link
                  to="/contact"
                  className="px-10 py-5 text-slate-900 font-black text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                >
                  Report a Technical Issue
                </Link>
              </div>

              <div className="pt-16 border-t border-slate-200">
                <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8">
                  Quick Navigation Architecture
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {quickLinks.map((link, idx) => (
                    <motion.div
                      key={link.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx + 0.5 }}
                    >
                      <Link
                        to={link.path}
                        className="flex flex-col items-center gap-3 p-6 bg-white border border-slate-100 rounded-3xl hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 transition-all group"
                      >
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-red-600 transition-colors">
                          <link.icon size={20} className="text-slate-900 group-hover:text-white transition-colors" strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{link.title}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
