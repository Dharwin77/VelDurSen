import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  titleSize?: "default" | "large";
}

const SectionHeader = ({ tag, title, subtitle, centered = true, light = false, titleSize = "default" }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
  >
    {tag && (
      <span className={`inline-block text-sm md:text-base font-semibold uppercase tracking-[0.22em] mb-3 ${light ? "text-accent" : "text-accent"}`}>
        {tag}
      </span>
    )}
    <h2 className={`section-title ${titleSize === "large" ? "text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.06]" : ""} ${light ? "text-primary-foreground" : ""}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`section-subtitle ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : ""}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;
