import { motion } from "framer-motion";
import Container from "../ui/Container";
import ParkInLogo from "../ui/ParkInLogo";
import { FOOTER_LINKS, CONTACT } from "../../data/content";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}`;
const TEL_URL = `tel:${CONTACT.phone}`;
const MAIL_URL = `mailto:${CONTACT.email}`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0B1420] text-white">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(43,168,222,0.07)_0%,transparent_50%)]"
      />

      <Container className="relative pt-16 lg:pt-20 pb-10 lg:pb-14">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-14">
          {/* Brand */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="mb-4">
              <a href="#top" className="inline-flex items-center">
                <ParkInLogo variant="logo" mode="dark" size="lg" />
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm text-white/50 leading-relaxed max-w-[220px]">
              Parking made simple for Kathmandu. Reserve, drive, park.
            </motion.p>
          </motion.div>

          {/* Product */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={fadeUp} className="font-semibold text-white mb-5 text-sm">
              Product
            </motion.h3>
            <motion.ul variants={stagger} className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <motion.li key={link.href} variants={fadeUp}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={fadeUp} className="font-semibold text-white mb-5 text-sm">
              Company
            </motion.h3>
            <motion.ul variants={stagger} className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <motion.li key={link.href} variants={fadeUp}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={fadeUp} className="font-semibold text-white mb-5 text-sm">
              Contact Us
            </motion.h3>
            <motion.ul variants={stagger} className="space-y-4">
              {/* Phone */}
              <motion.li variants={fadeUp}>
                <a href={TEL_URL} className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200 group">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 group-hover:bg-brand/20 transition-colors duration-200">
                    <svg className="w-4 h-4 text-white/50 group-hover:text-brand transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <span>{CONTACT.phoneFull}</span>
                </a>
              </motion.li>

              {/* Email */}
              <motion.li variants={fadeUp}>
                <a href={MAIL_URL} className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200 group">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 group-hover:bg-brand/20 transition-colors duration-200">
                    <svg className="w-4 h-4 text-white/50 group-hover:text-brand transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span>{CONTACT.email}</span>
                </a>
              </motion.li>

              {/* WhatsApp */}
              <motion.li variants={fadeUp}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200 group">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#25D366]/20 transition-colors duration-200">
                    <svg className="w-4 h-4 text-white/50 group-hover:text-[#25D366] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  <span>Chat on WhatsApp</span>
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {year} Park_in. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              { label: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 3h11A3.5 3.5 0 0121 6.5v11a3.5 3.5 0 01-3.5 3.5h-11A3.5 3.5 0 013 17.5v-11A3.5 3.5 0 016.5 3z" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
