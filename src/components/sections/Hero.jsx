import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Container from "../ui/Container";
import AppMockup from "../ui/AppMockup";
import SkylineIllustration from "../ui/SkylineIllustration";
import { HERO } from "../../data/content";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-navy-deep text-white flex items-center"
    >
      {/* Skyline backdrop */}
      <div className="absolute inset-0 z-0 opacity-30">
        <SkylineIllustration className="w-full h-full" />
      </div>

      {/* Gradient overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-brand/8 blur-[120px] z-[1]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 bottom-0 h-96 w-96 rounded-full bg-amber/6 blur-[100px] z-[1]"
      />

      <Container className="relative z-10 grid grid-cols-1 gap-10 lg:gap-16 lg:grid-cols-[1.1fr_1.1fr] lg:items-center pt-32 pb-16 lg:pt-40 lg:pb-28">
        {/* Left: Copy + CTAs */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col">
          {/* Eyebrow */}
          <motion.div variants={fadeLeft} className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-brand" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              {HERO.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.08] text-white whitespace-pre-line"
          >
            {HERO.headline}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-lg text-lg leading-relaxed text-white/60"
          >
            {HERO.subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild variant="brand" size="lg">
              <a href="#download">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {HERO.cta_primary}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white/15 hover:border-white/40 hover:bg-white/5">
              <a href="#how-it-works">
                {HERO.cta_secondary}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: App mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end px-4 lg:px-0"
        >
          <AppMockup />
        </motion.div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10" />
    </section>
  );
}
