import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  color?: "red" | "blue" | "orange" | "green" | "slate";
}

const SectionHeader = ({
  tag,
  title,
  subtitle,
  centered = true,
  light = false,
  color = "red"
}: SectionHeaderProps) => {
  const colorClasses = {
    red: "text-red-600",
    blue: "text-blue-600",
    orange: "text-orange-600",
    green: "text-green-600",
    slate: "text-slate-500"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      {tag && (
        <span className={`inline-block text-xs font-black uppercase tracking-[0.3em] mb-4 ${light ? "text-white/80" : colorClasses[color]}`}>
          {tag}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-[900] tracking-tighter leading-[1.1] mb-6 ${light ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl font-medium leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-white/70" : "text-slate-500"} max-w-3xl`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
