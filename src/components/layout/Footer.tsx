import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ],
  Services: [
    { label: "Enterprise AI", path: "/services" },
    { label: "Cloud & DevOps", path: "/services" },
    { label: "Cybersecurity", path: "/services" },
    { label: "Data Engineering", path: "/services" },
  ],
  Solutions: [
    { label: "Digital Transformation", path: "/solutions" },
    { label: "AI-Powered Enterprise", path: "/solutions" },
    { label: "Secure Cloud", path: "/solutions" },
    { label: "Sustainable IT", path: "/solutions" },
  ],
  Industries: [
    { label: "Healthcare", path: "/industries" },
    { label: "FinTech", path: "/industries" },
    { label: "Manufacturing", path: "/industries" },
    { label: "Retail", path: "/industries" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="enterprise-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <img src={logo} alt="VelDurSen Logo" className="h-12 w-auto brightness-0 invert shrink-0" />
              <span className="text-xl font-black text-white tracking-[0.1em] uppercase leading-none">
                VelDur<span className="text-white">Sen</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Enterprise Technology & Digital Transformation. AI-first, security-first, sustainability-driven.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-md bg-primary-foreground/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/90">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-primary-foreground/60 hover:text-blue-400 transition-colors"
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
        <div className="mt-14 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2025 VelDurSen Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
