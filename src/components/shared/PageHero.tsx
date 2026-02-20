import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  bgImage?: string;
  bgImages?: string[];
  videoSrc?: string;
  overlay?: boolean;
}

const PageHero = ({ tag, title, subtitle, ctaText, ctaLink, bgImage, bgImages, videoSrc, overlay = true }: PageHeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = bgImages || (bgImage ? [bgImage] : []);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section">
      {images.length > 0 && images.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 brightness-110"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
      {videoSrc && (
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent md:from-primary/90 md:via-primary/40 md:to-transparent" />
      )}
      {videoSrc && (
        <div className="absolute inset-0 bg-black/40" />
      )}
      {images.length === 0 && !videoSrc && <div className="absolute inset-0 bg-primary" />}
      <div className="enterprise-container relative z-10 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {tag && (
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3 sm:mb-4">
              {tag}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-bold text-primary-foreground leading-tight mb-3 sm:mb-5 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-primary-foreground font-medium leading-relaxed mb-5 sm:mb-8 max-w-2xl drop-shadow-sm">
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
};

export default PageHero;
