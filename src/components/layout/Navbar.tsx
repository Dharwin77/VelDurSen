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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarVisible = !isHomePage || scrolled;

  return (
    <>
      {/* 1. Initial Stylish Branding - Only on Home + Not Scrolled */}
      <AnimatePresence>
        {isHomePage && !scrolled && (
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
                <span className="text-xl md:text-2xl font-black text-slate-950 tracking-tighter uppercase leading-none">
                  VelDur<span className="text-red-600">Sen</span>
                </span>
                <span className="text-[7px] md:text-[8px] font-bold text-slate-500 uppercase tracking-[0.4em] mt-1">
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
              <img src={logo} alt="VelDurSen Logo" className="h-12 w-auto" />
              <span className="text-xl font-black text-slate-950 tracking-tighter uppercase leading-none">
                VelDur<span className="text-red-600">Sen</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
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
              <Link to="/contact" className="hidden md:inline-flex btn-enterprise text-xs py-2 px-5">
                Talk to Experts
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-card overflow-hidden"
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
