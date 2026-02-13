import { Link, useLocation } from "react-router-dom";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Our History", path: "/history" },
    { label: "Careers", path: "/careers" },
    { label: "Internships", path: "/internships" },
  ],
  Expertise: [
    { label: "Services", path: "/services" },
    { label: "Technologies", path: "/technologies" },
  ],
  "Global Impact": [
    { label: "Industries", path: "/industries" },
    { label: "Achievements", path: "/achievements" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ],
};

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="enterprise-container py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              {/* Logo Placeholder - You might want to use the actual img tag here if preferred, but styled text is requested */}
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-white uppercase leading-none">
                  VelDur<span className="text-red-600">Sen.</span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] group-hover:text-red-600 transition-colors">
                  Enterprise Corp
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium max-w-xs">
              Pioneering the future of Enterprise Technology with AI-first architecture, banking-grade security, and sustainable innovation.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white text-slate-400 transition-all duration-300 border border-white/10 hover:border-red-600 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-6 text-white/50">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className={`text-sm font-medium transition-all duration-300 hover:translate-x-1 inline-block ${currentPath === link.path
                        ? "text-red-600 font-bold"
                        : "text-slate-400 hover:text-red-600"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium text-slate-500 text-center md:text-left">
            © 2026 VelDurSen Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-slate-500 uppercase tracking-wider">
            {[
              { label: "Privacy Policy", path: "/privacy-policy" },
              { label: "Terms of Service", path: "/terms-of-service" },
              { label: "Security", path: "/security" },
              { label: "Sitemap", path: "/sitemap" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                state={{ fromButton: true }}
                className={`transition-colors ${currentPath === link.path
                  ? "text-red-600"
                  : "hover:text-red-600"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
