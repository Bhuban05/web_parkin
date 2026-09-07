import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/useCountUp";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * StatCounter — animated number with clean styling
 */
export default function StatCounter({ value, suffix = "", label, description, decimals = 0 }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const { formatted } = useCountUp(value, 2200, isVisible, decimals);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center px-4"
    >
      <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight">
        {formatted}
        {suffix && <span className="text-brand-light text-3xl sm:text-4xl ml-1">{suffix}</span>}
      </div>
      <p className="mt-3 text-sm sm:text-base font-medium text-white/80">{label}</p>
      {description && (
        <p className="mt-1 text-xs text-white/40">{description}</p>
      )}
    </motion.div>
  );
}
