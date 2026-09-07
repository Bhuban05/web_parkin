import { motion } from "framer-motion";
import Container from "../ui/Container";
import TestimonialCard from "../ui/TestimonialCard";
import { TESTIMONIALS } from "../../data/content";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function Testimonials() {
  return (
    <section
      id="spaces"
      className="relative overflow-hidden bg-cream py-24 lg:py-32"
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 lg:mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-px w-6 bg-brand" />
            <span className="text-xs font-medium uppercase tracking-widest text-brand">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-heading">
            What Kathmandu drivers are saying
          </h2>
          <p className="mt-4 text-base text-body max-w-lg leading-relaxed">
            Real feedback from real drivers across the valley.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-6% 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8"
        >
          <div className="flex items-center gap-2 text-sm text-body">
            <div className="flex -space-x-1.5">
              {["SK", "PS", "BT", "AM", "RS"].map((initial, i) => (
                <div
                  key={i}
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-cream bg-navy text-[9px] font-semibold text-white"
                >
                  {initial}
                </div>
              ))}
            </div>
            <span className="ml-1">Join <strong className="text-heading">12,000+</strong> happy drivers</span>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 text-amber" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm font-medium text-heading ml-1">4.8</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
