import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({ tag, title, subtitle, centered = true, light = false }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
  >
    {tag && (
      <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${light ? "text-accent" : "text-accent"}`}>
        {tag}
      </span>
    )}
    <h2 className={`section-title ${light ? "text-primary-foreground" : ""}`}>{title}</h2>
    {subtitle && (
      <p className={`section-subtitle ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : ""}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;
