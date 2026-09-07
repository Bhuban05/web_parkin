import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./button";

/**
 * AppMockup — Premium animated booking flow, mobile-optimized
 * Larger phone, richer map, two stacked screens for depth
 */
export default function AppMockup() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setKey((k) => k + 1), 7500);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, scale: 0.9, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[380px] sm:max-w-[420px]"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-12 -z-10 rounded-[4rem] bg-gradient-to-br from-brand/25 via-brand/12 to-amber/12 blur-3xl"
      />

      {/* Background phone (depth layer) */}
      <div
        aria-hidden="true"
        className="absolute top-8 left-6 right-6 bottom-0 rounded-[2.5rem] border-[5px] border-navy-darker/60 bg-navy/40 opacity-40 blur-[1px] -z-10"
      />

      {/* Main phone frame */}
      <div className="relative overflow-hidden rounded-[2.8rem] border-[8px] border-navy-darker bg-black shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
        {/* Notch / Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-30" />

        {/* Status bar */}
        <div className="relative flex items-center justify-between px-8 pt-5 pb-1 text-[11px] text-white/50 z-20">
          <span className="font-semibold">9:41</span>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
          </div>
        </div>

        {/* App header */}
        <div className="relative px-6 pt-3 pb-2 z-20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-white/35 uppercase tracking-wider font-medium">Booking for</p>
              <p className="text-base font-semibold text-white mt-0.5">Thamel, Kathmandu</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand to-brand-hover flex items-center justify-center text-xs font-bold text-white shadow-lg">
              P
            </div>
          </div>
        </div>

        {/* Map area — taller and richer */}
        <div className="relative mx-3.5 mt-2 h-64 overflow-hidden rounded-2xl bg-[#141e2b]">
          {/* SVG map — detailed street grid with landmarks */}
          <svg viewBox="0 0 320 260" className="absolute inset-0 h-full w-full">
            <defs>
              <radialGradient id="mapGlow" cx="50%" cy="40%" r="40%">
                <stop offset="0%" stopColor="#2BA8DE" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#2BA8DE" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="320" height="260" fill="#141e2b" />

            {/* Area glow */}
            <circle cx="160" cy="110" r="70" fill="url(#mapGlow)" />

            {/* Major roads */}
            <g stroke="#1f3044" strokeWidth="5" strokeLinecap="round">
              <line x1="0" y1="65" x2="320" y2="58" />
              <line x1="0" y1="140" x2="320" y2="145" />
              <line x1="0" y1="205" x2="320" y2="200" />
            </g>
            {/* Minor roads */}
            <g stroke="#1a2838" strokeWidth="2.5" strokeLinecap="round">
              <line x1="0" y1="100" x2="320" y2="97" />
              <line x1="0" y1="172" x2="320" y2="175" />
              <line x1="80" y1="0" x2="72" y2="260" />
              <line x1="160" y1="0" x2="168" y2="260" />
              <line x1="240" y1="0" x2="232" y2="260" />
              <line x1="120" y1="0" x2="115" y2="260" />
              <line x1="200" y1="0" x2="205" y2="260" />
            </g>

            {/* Building blocks with depth */}
            <rect x="12" y="72" width="50" height="24" rx="3" fill="#1c2d40" />
            <rect x="12" y="104" width="50" height="30" rx="3" fill="#1e3045" />
            <rect x="88" y="22" width="60" height="32" rx="3" fill="#1c2d40" />
            <rect x="175" y="68" width="48" height="55" rx="3" fill="#1e3045" />
            <rect x="248" y="150" width="55" height="40" rx="3" fill="#1c2d40" />
            <rect x="88" y="155" width="60" height="35" rx="3" fill="#1e3045" />
            <rect x="175" y="150" width="48" height="20" rx="3" fill="#1c2d40" />
            <rect x="248" y="72" width="55" height="22" rx="3" fill="#1c2d40" />
            <rect x="12" y="210" width="50" height="40" rx="3" fill="#1e3045" />
            <rect x="88" y="210" width="60" height="40" rx="3" fill="#1c2d40" />

            {/* Park / green area */}
            <rect x="175" y="105" width="48" height="40" rx="6" fill="#14301f" opacity="0.5" />

            {/* Building labels */}
            <text x="37" y="88" textAnchor="middle" fill="#3a5068" fontSize="7" fontFamily="sans-serif">MALL</text>
            <text x="200" y="100" textAnchor="middle" fill="#1a3020" fontSize="7" fontFamily="sans-serif">PARK</text>
            <text x="275" y="175" textAnchor="middle" fill="#3a5068" fontSize="7" fontFamily="sans-serif">HOTEL</text>

            {/* Parking P icons on map */}
            <g fill="#2BA8DE" opacity="0.5">
              <text x="118" y="178" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fontWeight="bold">P</text>
              <text x="270" y="90" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fontWeight="bold">P</text>
            </g>
          </svg>

          {/* Secondary parking dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute left-[28%] top-[65%] flex items-center justify-center"
          >
            <span className="h-3 w-3 rounded-full border-2 border-white/30 bg-brand/40" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute right-[18%] top-[32%] flex items-center justify-center"
          >
            <span className="h-3 w-3 rounded-full border-2 border-white/30 bg-brand/40" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute left-[60%] top-[72%] flex items-center justify-center"
          >
            <span className="h-2.5 w-2.5 rounded-full border border-white/25 bg-brand/30" />
          </motion.div>

          {/* Search bar overlay */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-3 left-3 right-3 flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-md px-4 py-2.5 border border-white/8"
          >
            <svg className="w-4 h-4 text-white/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-xs text-white/40">Search parking near Thamel...</span>
          </motion.div>

          {/* Main pin drop */}
          <motion.div
            initial={{ y: -80, opacity: 0, scale: 0.2 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.7, type: "spring", stiffness: 100, damping: 10 }}
            className="absolute left-1/2 top-[38%] -translate-x-1/2 z-10"
          >
            <svg className="w-10 h-12 drop-shadow-[0_4px_12px_rgba(43,168,222,0.5)]" viewBox="0 0 24 32" fill="none">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 20 12 20s12-11 12-20C24 5.37 18.63 0 12 0z" fill="#2BA8DE"/>
              <circle cx="12" cy="12" r="5.5" fill="white"/>
            </svg>
            {/* Ping pulse rings */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0.7 }}
              animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ delay: 1.2, duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 -z-10"
            >
              <div className="h-10 w-10 rounded-full border-2 border-brand" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0.4 }}
              animate={{ scale: [1, 3, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ delay: 1.5, duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 -z-10"
            >
              <div className="h-10 w-10 rounded-full border border-brand/50" />
            </motion.div>
          </motion.div>

          {/* Distance badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.4 }}
            className="absolute left-1/2 top-[58%] -translate-x-1/2 z-10 rounded-full bg-navy/90 backdrop-blur-sm px-3 py-1 border border-white/10"
          >
            <span className="text-[10px] font-semibold text-white">0.2 km away</span>
          </motion.div>
        </div>

        {/* Spot booking card — slides up with more detail */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-3.5 mb-4 mt-3 rounded-2xl bg-white p-5 text-navy"
        >
          {/* Top row: name + price */}
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3.5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10">
                <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[15px] font-semibold text-navy leading-tight">Chhaya Center Lot</p>
                <p className="text-[11px] text-body mt-1">Thamel, Kathmandu</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-navy">NPR 60</p>
              <p className="text-[10px] text-muted -mt-0.5">/hour</p>
            </div>
          </div>

          {/* Feature tags */}
          <div className="flex items-center gap-2 mt-3">
            {["Covered", "CCTV", "24/7"].map((tag) => (
              <span key={tag} className="rounded-full bg-cream px-2.5 py-1 text-[10px] font-medium text-body">{tag}</span>
            ))}
          </div>

          {/* Rating + action */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {["S", "P", "B", "A"].map((i) => (
                  <span key={i} className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-brand to-brand-hover text-[9px] font-bold text-white">{i}</span>
                ))}
              </div>
              <span className="text-[11px] text-muted ml-1">12 booked today</span>
            </div>
            <Button variant="brand" size="sm" className="rounded-full">
              Reserve
            </Button>
          </div>
        </motion.div>

        {/* Home indicator */}
        <div className="h-6 flex items-center justify-center bg-black rounded-b-[2rem]">
          <div className="w-32 h-1 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Floating confirmation chip — bigger */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-3 sm:-right-6 top-14 z-30 flex items-center gap-2.5 rounded-2xl border border-brand/15 bg-white px-5 py-3 shadow-card-hover"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal shadow-sm">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <span className="text-sm font-semibold text-navy block leading-tight">Spot confirmed</span>
          <span className="text-[10px] text-muted">Arrive by 2:30 PM</span>
        </div>
      </motion.div>

      {/* Floating earnings chip — bigger */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -16 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 4.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-3 sm:-left-6 bottom-28 z-30 flex items-center gap-3 rounded-2xl border border-amber/15 bg-white px-5 py-3 shadow-card-hover"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber/15">
          <svg className="w-4 h-4 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <span className="text-sm font-bold text-navy block leading-tight">NPR 60/hr</span>
          <span className="text-[10px] text-muted">Fixed rate</span>
        </div>
      </motion.div>

      {/* Floating rating chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 4.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-2 sm:-right-4 bottom-12 z-30 flex items-center gap-2 rounded-2xl border border-white/10 bg-white px-4 py-2.5 shadow-card"
      >
        <svg className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-xs font-bold text-navy">4.8</span>
      </motion.div>
    </motion.div>
  );
}
