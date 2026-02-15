import { Link, useLocation } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Facebook, Instagram, Github } from "lucide-react";
import footerBg from "../../assets/footer_new_bg.png";
import logo from "../../assets/logo.png";
// Content Structure based on all actual pages and detailed site map
const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Our History", path: "/history" },
      { label: "Careers", path: "/careers" },
      { label: "Internships", path: "/internships" },
      { label: "Achievements", path: "/achievements" },
      { label: "Contact Us", path: "/contact" },
    ]
  },
  {
    title: "Services",
    links: [
      { label: "All Services", path: "/services" },
      { label: "Artificial Intelligence", path: "/services" },
      { label: "Web & Mobile Dev", path: "/services" },
      { label: "Data Engineering", path: "/services" },
      { label: "Technologies", path: "/technologies" },
      { label: "Cloud Infrastructure", path: "/technologies" },
      { label: "Cybersecurity", path: "/technologies" },
    ]
  },
  {
    title: "Industries",
    links: [
      { label: "Healthcare", path: "/industries" },
      { label: "FinTech", path: "/industries" },
      { label: "Manufacturing", path: "/industries" },
      { label: "Retail", path: "/industries" },
      { label: "Education", path: "/industries" },
      { label: "Agriculture", path: "/industries" },
      { label: "Smart Cities", path: "/industries" },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Insights", path: "/blog" },
      { label: "Sitemap", path: "/sitemap" },
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms of Service", path: "/terms-of-service" },
      { label: "Security", path: "/security" },
    ]
  }
];

const countries = [
  { name: "INDIA" },
  { name: "LONDON" },
  { name: "USA" },
  { name: "AUSTRALIA" },
  { name: "UAE" },
  { name: "EUROPE" },
  { name: "SINGAPORE" },
  { name: "NEW ZEALAND" },
  { name: "CANADA" },
  { name: "GERMANY" },
  { name: "JAPAN" },
  { name: "FRANCE" },
  { name: "SWITZERLAND" },
];

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* Premium Gradient Separator Line with Glow and Animation (Top) */}
      <div className="h-[4px] w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative z-30 animate-shimmer shadow-[0_0_25px_rgba(99,102,241,0.8)]" />

      {/* Country Banner - Global Presence Marquee */}
      <div className="bg-slate-50 py-7 border-y border-slate-200 relative z-20 overflow-hidden">
        {/* Edge Fades for a smoother scrolling effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-30 pointer-events-none" />

        <div className="flex animate-scroll hover:pause-animation whitespace-nowrap w-max gap-12 md:gap-20">
          {[...countries, ...countries, ...countries].map((c, i) => (
            <div key={i} className="flex items-center gap-4 cursor-default shrink-0 group/item transition-all duration-300">
              <span className="text-xs md:text-sm font-black text-slate-500 group-hover/item:text-slate-900 uppercase tracking-[0.2em] transition-colors leading-none">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Gradient Separator Line with Glow and Animation */}
      <div className="h-[4px] w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative z-30 animate-shimmer shadow-[0_0_25px_rgba(99,102,241,0.8)]" />

      <footer className="bg-[#050B20] text-slate-300 text-sm relative overflow-hidden font-sans">
        {/* Background World Map Image - Dotted Globe on Left */}
        <div
          className="absolute inset-y-0 left-0 w-[60%] z-0 bg-no-repeat bg-left bg-contain pointer-events-none opacity-10"
          style={{ backgroundImage: `url(${footerBg})` }}
        />

        <div className="enterprise-container pt-14 pb-4 relative z-10">

          {/* Links Grid - Based on actual site pages */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
            {footerSections.map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-white font-bold mb-3 text-[15px]">{section.title}</h4>
                <ul className="space-y-1">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        to={link.path}
                        state={{ fromButton: true }}
                        className={`hover:text-white transition-colors text-[13px] leading-snug block ${currentPath === link.path ? "text-white font-semibold" : ""
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

          {/* Divider */}
          <div className="border-t border-slate-800/50 mb-4" />

          {/* Bottom Section: Logo, Desc, Socials */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4">

            {/* Brand & Description - Left Side */}
            <div className="max-w-xl">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 mb-4 group">
                <img src={logo} alt="VelDurSen Logo" className="h-10 md:h-12 w-auto" />
                <div className="flex flex-col">
                  <span className="text-lg md:text-2xl font-black text-white tracking-tighter uppercase leading-none">
                    VelDur<span className="text-red-600">Sen</span>
                  </span>
                  <span className="block text-[7px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.4em] mt-1.5 leading-none">
                    Enterprise Technology Partner
                  </span>
                </div>
              </Link>

              <p className="text-slate-300 text-sm leading-relaxed mb-2 font-medium">
                VelDurSen hosts a dynamic team of tech enthusiasts and incredibly skilled developers dedicated to creating some of the most bespoke software solutions for a wide variety of businesses and a plethora of industry verticals.
              </p>
            </div>

            {/* Social Media & Extra Links - Right Side */}
            <div className="flex flex-col gap-4">
              <div>
                <h5 className="text-white font-bold mb-2 text-sm">Social Media</h5>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-5 h-5 flex items-center justify-center text-white hover:text-blue-500 transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800/50 mt-4 pt-4 flex justify-end text-[10px] text-slate-400">
            <span>© 2026 VelDurSen Technologies.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
