import { Link, useLocation } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Facebook, Instagram, Github, Globe } from "lucide-react";
import footerBg from "../../assets/footer_new_bg.png";
import logo from "../../assets/logo.png";
import { client, urlFor } from "@/lib/sanity";
import { useEffect, useState } from "react";

// --- Interfaces for Sanity Data ---
interface SanityFooterLink {
  label: string;
  link: string;
}

interface SanityFooterSection {
  title: string;
  links: SanityFooterLink[];
}

interface SanityBranding {
  logo: any;
  brandName: string;
  brandNameHighlight: string;
  tagline: string;
  description: string;
}

interface SanitySocial {
  title: string;
  socialLinks: {
    platform: string;
    url: string;
    iconName: string;
  }[];
}

interface SanityMarquee {
  title: string;
  countries: string[];
}

interface FooterData {
  company: SanityFooterSection;
  services: SanityFooterSection;
  industries: SanityFooterSection;
  resources: { title: string }; // Resources links are fixed in schema
  branding: SanityBranding;
  social: SanitySocial;
  marquee: SanityMarquee;
}

// Icon Mapping Helper
const getIcon = (iconName: string) => {
  const icons: any = { Facebook, Twitter, Linkedin, Instagram, Github, Youtube, Globe };
  return icons[iconName] || Globe;
};

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [data, setData] = useState<FooterData | null>(null);

  useEffect(() => {
    const query = `{
            "company": *[_type == "footerCompany"][0],
            "services": *[_type == "footerServices"][0],
            "industries": *[_type == "footerIndustries"][0],
            "resources": *[_type == "footerResources"][0],
            "branding": *[_type == "footerBranding"][0],
            "social": *[_type == "footerSocial"][0],
            "marquee": *[_type == "footerMarquee"][0]
        }`;

    client.fetch(query).then(setData).catch(console.error);
  }, []);

  // --- Data Fallbacks ---
  const company = data?.company;
  const services = data?.services;
  const industries = data?.industries;
  const resources = data?.resources;
  const branding = data?.branding;
  const social = data?.social;
  const marquee = data?.marquee;

  // Default Sections Structure
  const defaultFooterSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", link: "/about" },
        { label: "Careers", link: "/careers" },
        { label: "Internships", link: "/internships" },
        { label: "Achievements", link: "/achievements" },
        { label: "Contact Us", link: "/contact" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "All Services", link: "/services" },
        { label: "Solutions Architecture", link: "/services#our-solutions-architecture" },
        { label: "Technology Pillars", link: "/services#technology-pillars" },
        { label: "Engineering Excellence", link: "/services" },
        { label: "Performance & Scalability", link: "/services" },
      ]
    },
    {
      title: "Industries",
      links: [
        { label: "Our Industries", link: "/services#industries-full-content" },
        { label: "Healthcare", link: "/services#industries" },
        { label: "Education", link: "/services#industries" },
        { label: "Manufacturing", link: "/services#industries" },
        { label: "Retail", link: "/services#industries" },
        { label: "FinTech", link: "/services#industries" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog & Insights", link: "/blog" },
        { label: "Sitemap", link: "/sitemap" },
        { label: "Privacy Policy", link: "/privacy-policy" },
        { label: "Terms of Service", link: "/terms-of-service" },
        { label: "Security", link: "/security" },
      ]
    }
  ];

  // Merge Sanity Data with Structure
  const displaySections = [
    {
      title: company?.title || defaultFooterSections[0].title,
      links: company?.links || defaultFooterSections[0].links
    },
    {
      title: services?.title || defaultFooterSections[1].title,
      links: services?.links || defaultFooterSections[1].links
    },
    {
      title: industries?.title || defaultFooterSections[2].title,
      links: industries?.links || defaultFooterSections[2].links
    },
    {
      title: resources?.title || defaultFooterSections[3].title,
      links: defaultFooterSections[3].links // Resources links are fixed/fallback
    }
  ];

  const defaultCountries = [
    "INDIA", "LONDON", "USA", "AUSTRALIA", "UAE", "EUROPE",
    "SINGAPORE", "NEW ZEALAND", "CANADA", "GERMANY", "JAPAN",
    "FRANCE", "SWITZERLAND"
  ];

  const displayCountries = marquee?.countries || defaultCountries;
  // Repeat for infinite scroll effect
  const marqueeList = [...displayCountries, ...displayCountries, ...displayCountries];

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
          {marqueeList.map((countryName, i) => (
            <div key={i} className="flex items-center gap-4 cursor-default shrink-0 group/item transition-all duration-300">
              <span className="text-xs md:text-sm font-black text-slate-500 group-hover/item:text-slate-900 uppercase tracking-[0.2em] transition-colors leading-none">
                {countryName}
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
            {displaySections.map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-white font-bold mb-3 text-[15px]">{section.title}</h4>
                <ul className="space-y-1">
                  {section.links.map((link, lIdx) => {
                    // Handle link.link containing # for scrolling or plain path
                    // Simple heuristic: if it contains #, split.
                    const [path, hash] = link.link.split('#');
                    const finalPath = path || '/'; // Default to root if empty

                    return (
                      <li key={lIdx}>
                        <Link
                          to={finalPath}
                          state={{
                            fromButton: true,
                            ...(hash && { scrollTo: hash })
                          }}
                          className={`hover:text-white transition-colors text-[13px] leading-snug block ${currentPath === finalPath ? "text-white font-semibold" : ""
                            }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
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
                {branding?.logo ? (
                  <img src={urlFor(branding.logo).url()} alt="VelDurSen Logo" className="h-10 md:h-12 w-auto" />
                ) : (
                  <img src={logo} alt="VelDurSen Logo" className="h-10 md:h-12 w-auto" />
                )}
                <div className="flex flex-col">
                  <span className="text-lg md:text-2xl font-black text-white tracking-tighter uppercase leading-none">
                    {branding?.brandName || "VelDur"}<span className="text-red-600">{branding?.brandNameHighlight || "Sen"}</span>
                  </span>
                  <span className="block text-[7px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.4em] mt-1.5 leading-none">
                    {branding?.tagline || "Enterprise Technology Partner"}
                  </span>
                </div>
              </Link>

              <p className="text-slate-300 text-sm leading-relaxed mb-2 font-medium">
                {branding?.description || "VelDurSen hosts a dynamic team of tech enthusiasts and incredibly skilled developers dedicated to creating some of the most bespoke software solutions for a wide variety of businesses and a plethora of industry verticals."}
              </p>
            </div>

            {/* Social Media & Extra Links - Right Side */}
            <div className="flex flex-col gap-4">
              <div>
                <h5 className="text-white font-bold mb-2 text-sm">{social?.title || "Social Media"}</h5>
                <div className="flex gap-4">
                  {(social?.socialLinks && social.socialLinks.length > 0 ? social.socialLinks : [
                    { iconName: "Facebook", url: "#" },
                    { iconName: "Twitter", url: "#" },
                    { iconName: "Linkedin", url: "#" },
                    { iconName: "Instagram", url: "#" },
                    { iconName: "Github", url: "#" }
                  ]).map((item: any, i: number) => {
                    const Icon = getIcon(item.iconName);
                    return (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-5 h-5 flex items-center justify-center text-white hover:text-blue-500 transition-colors"
                      >
                        <Icon size={18} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800/50 mt-4 pt-4 flex justify-end text-[10px] text-slate-400">
            <span>© {new Date().getFullYear()} {branding?.brandName || "VelDurSen Technologies"}.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
