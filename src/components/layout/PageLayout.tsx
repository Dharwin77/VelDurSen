import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate, useNavigationType, NavigationType } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const navType = useNavigationType();
  const { pathname } = location;
  const showBack = (location.state as any)?.fromButton;

  useEffect(() => {
    if (navType !== NavigationType.Pop) {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <AnimatePresence>
        {showBack && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={() => navigate(-1)}
            className="fixed top-24 left-4 md:left-8 z-40 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full text-slate-600 font-bold text-xs uppercase tracking-widest shadow-xl hover:bg-red-600 hover:text-white hover:border-red-600 transition-all group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back
          </motion.button>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-16 md:pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
