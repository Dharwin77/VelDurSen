import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "@/assets/logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type NavLinkItem = {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
};

const navLinks: NavLinkItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "What We Do",
    children: [
      { label: "Services", path: "/services" },
      { label: "Industries", path: "/industries" },
      { label: "Technologies", path: "/technologies" },
    ],
  },
  {
    label: "Insights",
    children: [
      { label: "Blog", path: "/blog" },
      { label: "Achievements", path: "/achievements" },
      { label: "History", path: "/history" },
    ],
  },
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
            <div className="hidden 2xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <>
                      <button className="flex items-center gap-1.5 px-1 py-2 text-[13px] font-medium text-muted-foreground transition-colors group-hover:text-red-600 focus:outline-none">
                        {link.label}
                        <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      {/* Dropdown Menu */}
                      <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 ease-out z-50">
                        <div className="w-56 p-2 bg-white rounded-md shadow-xl border border-border/50 ring-1 ring-black/5">
                          <div className="flex flex-col gap-1">
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className={cn(
                                  "block px-4 py-2 text-sm text-slate-600 rounded-sm hover:bg-slate-50 hover:text-red-600 transition-colors",
                                  location.pathname === child.path && "bg-red-50 text-red-600 font-medium"
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path!}
                      className={cn(
                        "px-1 py-2 text-[13px] font-medium transition-colors hover:text-red-600",
                        location.pathname === link.path
                          ? "text-red-600 font-semibold"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="2xl:hidden fixed inset-x-0 top-16 md:top-[72px] bottom-0 z-[90] bg-background/95 backdrop-blur-md border-t border-border overflow-y-auto"
          >
            <div className="enterprise-container py-4 space-y-1">
              <Accordion type="single" collapsible className="w-full">
                {navLinks.map((link, index) =>
                  link.children ? (
                    <AccordionItem value={`item-${index}`} key={link.label} className="border-b-0">
                      <AccordionTrigger className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:no-underline">
                        {link.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-1 pl-4">
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={() => setMobileOpen(false)}
                              className={cn(
                                "block px-4 py-2 text-sm rounded-md transition-colors",
                                location.pathname === child.path
                                  ? "text-red-600 bg-red-50/50 font-medium"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path!}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-4 py-2.5 text-sm rounded-md transition-colors",
                        location.pathname === link.path
                          ? "text-red-600 bg-red-50/50 font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </Accordion>
              {/* Mobile CTA */}
              <div className="pt-4 mt-2 px-4 xl:hidden">
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
