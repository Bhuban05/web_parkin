import { motion } from "framer-motion";
import Container from "../ui/Container";
import StatCounter from "../ui/StatCounter";
import { STATS } from "../../data/content";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy-deep to-navy py-24 lg:py-32">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-brand/6 blur-[100px]"
      />

      <Container>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-white/30">
            Trusted across Kathmandu
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 items-center">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative"
            >
              {idx > 0 && (
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-px h-12 bg-white/10"
                />
              )}
              <StatCounter {...stat} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
