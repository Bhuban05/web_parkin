import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import Container from "../ui/Container";
import ParkInLogo from "../ui/ParkInLogo";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Spaces", href: "#spaces" },
  { label: "For owners", href: "#owners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="visually-hidden focus:not-visually-hidden focus:fixed focus:top-0 focus:left-0 focus:z-[999] focus:bg-brand focus:text-white focus:p-4 focus:font-semibold focus:rounded-br-xl"
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy-deep/95 backdrop-blur-xl shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-[80px] items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#top"
            className="flex items-center group"
            whileTap={{ scale: 0.97 }}
          >
            <ParkInLogo variant="logo" mode="dark" size="sm" className="transition-all duration-200 group-hover:scale-105" />
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-base font-medium text-white/60 transition-colors duration-200 hover:text-white py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="#support"
              className="hidden text-base font-medium text-white/50 transition-colors duration-200 hover:text-white lg:block"
            >
              Support
            </a>
            <Button variant="brand" size="sm" asChild>
              <a href="#download">
                Download App
              </a>
            </Button>

            {/* Mobile hamburger */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              whileTap={{ scale: 0.92 }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </Container>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-navy-deep/98 backdrop-blur-xl border-t border-white/5"
            >
              <Container className="flex flex-col gap-1 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-white/70 hover:text-white py-3 px-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </Container>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
