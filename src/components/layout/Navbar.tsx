import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Technologies", path: "/technologies" },
  { label: "Achievements", path: "/achievements" },
  { label: "History", path: "/history" },
  { label: "Blog", path: "/blog" },
  { label: "Careers", path: "/careers" },
  { label: "Internships", path: "/internships" },
  { label: "Contact", path: "/contact" },
];

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => setWindowSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth] = useWindowSize();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarVisible = !isHomePage || scrolled || windowWidth < 1400; // 1400px is the 2xl breakpoint

  return (
    <>
      {/* 1. Initial Stylish Branding - Only on Home + Not Scrolled */}
      <AnimatePresence>
        {isHomePage && !scrolled && windowWidth >= 1400 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-[110] h-16 md:h-[72px] flex items-center justify-center bg-white pointer-events-none"
          >
            <div className="flex items-center gap-4">
              <img src={logo} alt="VelDurSen Logo" className="h-10 md:h-12 w-auto" />
              <div className="flex flex-col">
                <span className="text-base xs:text-lg md:text-2xl font-black text-slate-950 tracking-tighter uppercase leading-none">
                  VelDur<span className="text-red-600">Sen</span>
                </span>
                <span className="block text-[7px] md:text-[8px] font-bold text-slate-500 uppercase tracking-[0.4em] mt-1">
                  Enterprise Technology Partner
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Functional Navbar - Controlled by Scroll */}
      <motion.nav
        initial={isHomePage ? { y: -100 } : { y: 0 }}
        animate={{ y: navbarVisible ? 0 : -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[100] bg-card/95 backdrop-blur-md border-b border-border"
      >
        <div className="enterprise-container">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="VelDurSen Logo" className="h-10 md:h-12 w-auto" />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-black text-slate-950 tracking-tighter uppercase leading-none shrink-0">
                  VelDur<span className="text-red-600">Sen</span>
                </span>
                <span className="block text-[7px] md:text-[8px] font-bold text-slate-500 uppercase tracking-[0.4em] mt-0.5 leading-none">
                  Enterprise Technology Partner
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden 2xl:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-[13px] font-medium rounded-md transition-colors ${location.pathname === link.path
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hidden xl:inline-flex btn-enterprise text-xs py-2 px-5">
                Talk to Experts
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="2xl:hidden p-2 rounded-md text-foreground hover:bg-muted"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

      </motion.nav>

      {/* Mobile Menu - Positioned effectively thanks to being outside the transformed nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="2xl:hidden fixed inset-x-0 top-16 md:top-[72px] bottom-0 z-[90] bg-background/95 backdrop-blur-md border-t border-border overflow-y-auto"
          >
            <div className="enterprise-container py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 text-sm rounded-md ${location.pathname === link.path
                    ? "text-accent bg-accent/10 font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile CTA */}
              <div className="pt-4 mt-2 px-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-enterprise w-full justify-center"
                >
                  Talk to Experts
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
