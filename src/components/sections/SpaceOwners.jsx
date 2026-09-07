import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Container from "../ui/Container";
import { OWNER_BENEFITS, OWNER_ESTIMATE } from "../../data/content";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function SpaceOwners() {
  return (
    <section
      id="owners"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-white py-24 lg:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-4">
              <span className="h-px w-6 bg-amber" />
              <span className="text-xs font-medium uppercase tracking-widest text-amber-dark">For Space Owners</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-heading mb-5"
            >
              Your empty space could earn every day.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base text-body max-w-md mb-8 leading-relaxed"
            >
              List your driveway, office lot, or hotel parking. You set the hours and price — ParkIn connects you with local drivers who need reliable spots.
            </motion.p>

            {/* Benefits */}
            <motion.ul variants={stagger} className="space-y-3 mb-10">
              {OWNER_BENEFITS.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                    <svg className="w-3 h-3 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-heading">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Button asChild variant="amber" size="lg">
                <a href="#">
                  List your parking space
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Earnings card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="shadow-sm">
              <CardContent className="p-7 sm:p-8 lg:p-10">
                {/* Amount */}
                <div className="mb-5">
                  <p className="text-xs font-medium text-muted mb-2 uppercase tracking-wide">
                    Potential Monthly Earnings
                  </p>
                  <div className="flex items-baseline gap-1">
                    <p className="font-display text-4xl lg:text-5xl font-semibold text-heading">
                      {OWNER_ESTIMATE.amount}
                    </p>
                    <span className="text-sm text-muted font-medium">{OWNER_ESTIMATE.period}</span>
                  </div>
                  <p className="text-sm text-body mt-2">{OWNER_ESTIMATE.description}</p>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-navy/6" />

                {/* Features */}
                <div>
                  <h4 className="font-medium text-heading mb-4 text-sm">What you get:</h4>
                  <div className="space-y-3">
                    {[
                      { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", label: "Real-time booking analytics" },
                      { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Instant payouts" },
                      { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Damage protection" },
                      { icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", label: "Easy space management" },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.06 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-brand/8">
                          <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                        </span>
                        <span className="text-sm text-heading">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-[11px] text-muted leading-relaxed">
                  {OWNER_ESTIMATE.disclaimer}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
