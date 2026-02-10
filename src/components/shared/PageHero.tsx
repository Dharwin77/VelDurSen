import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  bgImage?: string;
  overlay?: boolean;
}

const PageHero = ({ tag, title, subtitle, ctaText, ctaLink, bgImage, overlay = true }: PageHeroProps) => (
  <section
    className="relative min-h-[480px] md:min-h-[540px] flex items-center overflow-hidden"
    style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
  >
    {overlay && <div className="absolute inset-0 bg-primary/85" />}
    {!bgImage && <div className="absolute inset-0 bg-primary" />}
    <div className="enterprise-container relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        {tag && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            {tag}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-bold text-primary-foreground leading-tight mb-5">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-8 max-w-2xl">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link to={ctaLink} className="btn-accent">
            {ctaText} <ArrowRight size={16} className="ml-2" />
          </Link>
        )}
      </motion.div>
    </div>
  </section>
);

export default PageHero;
