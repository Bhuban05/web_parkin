import { motion } from "framer-motion";
import Container from "../ui/Container";
import { Card, CardContent } from "../ui/card";
import { HOW_IT_WORKS } from "../../data/content";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
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
            <span className="text-xs font-medium uppercase tracking-widest text-brand">How it works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-heading">
            From road to parked in three moves.
          </h2>
          <p className="mt-4 text-base text-body max-w-lg leading-relaxed">
            Parking in Kathmandu should be simple. We built it to feel that way.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-6% 0px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {HOW_IT_WORKS.map((step, idx) => (
            <motion.div key={step.order} variants={fadeUp} className="relative group">
              <Card className="h-full">
                <CardContent className="p-7">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-4xl font-bold text-brand/40 group-hover:text-brand/60 transition-colors duration-200">
                      {step.order}
                    </span>
                    <div className="h-9 w-9 rounded-lg bg-brand/8 group-hover:bg-brand/12 flex items-center justify-center transition-colors duration-200">
                      <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {idx === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />}
                        {idx === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />}
                        {idx === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />}
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold text-heading mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Badge */}
                  <div className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-teal/8 px-2.5 py-1">
                    <span className="h-1 w-1 rounded-full bg-teal" />
                    <span className="text-[11px] font-medium text-teal">{step.highlight}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Connector */}
              {idx < HOW_IT_WORKS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute -right-3 top-1/2 w-6 h-px bg-navy/10 z-10"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
