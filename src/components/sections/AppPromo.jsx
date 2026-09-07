import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Container from "../ui/Container";
import { APP_FEATURES } from "../../data/content";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const icons = {
  zap: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  wallet: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
    </svg>
  ),
};

export default function AppPromo() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-navy py-24 lg:py-32 text-white"
    >
      {/* Decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 -translate-x-1/3 rounded-full bg-brand/5 blur-[100px]"
      />

      <Container className="relative grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-4">
            <span className="h-px w-6 bg-brand" />
            <span className="text-xs font-medium uppercase tracking-widest text-brand">Download</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-white">
            Get the ParkIn app
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 text-base text-white/50 max-w-md leading-relaxed">
            Reserve your spot from anywhere. Instant confirmation. Zero hassles.
          </motion.p>

          {/* Features */}
          <motion.div variants={stagger} className="mt-8 space-y-3">
            {APP_FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
              >
                <Card className="border-white/8 bg-white/3 hover:border-white/15 hover:bg-white/5">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand">
                      {icons[feature.icon]}
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">{feature.title}</h4>
                      <p className="text-xs text-white/40 mt-0.5 leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Download buttons */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="flex flex-col gap-3"
        >
          {/* Google Play */}
          <motion.div variants={fadeUp}>
            <Button asChild variant="outline" size="lg" className="w-full justify-start gap-4 border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/8 h-auto py-4">
              <a href="#">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/8">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider">Get it on</p>
                  <p className="text-base font-semibold text-white mt-0.5">Google Play</p>
                </div>
              </a>
            </Button>
          </motion.div>

          {/* App Store */}
          <motion.div variants={fadeUp}>
            <Button asChild variant="outline" size="lg" className="w-full justify-start gap-4 border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/8 h-auto py-4">
              <a href="#">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/8">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider">Download on the</p>
                  <p className="text-base font-semibold text-white mt-0.5">App Store</p>
                </div>
              </a>
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="text-center text-xs text-white/30 mt-3">
            Free to download · No credit card required
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
