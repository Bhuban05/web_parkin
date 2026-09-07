import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function PhoneMockup({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      className={`relative mx-auto w-[300px] select-none ${className}`}
    >
      {/* phone frame */}
      <div className="relative overflow-hidden rounded-[2.25rem] border-[6px] border-ink-dark bg-ink-light shadow-2xl shadow-ink-dark/50">
        {/* status bar */}
        <div className="flex items-center justify-between px-6 pt-4 text-[11px] text-stone/70">
          <span>9:41</span>
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-stone/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-stone/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-marigold" />
          </div>
        </div>

        {/* app header */}
        <div className="flex items-center justify-between px-6 pt-4">
          <div>
            <p className="text-[11px] text-stone/50">Booking for</p>
            <p className="text-sm font-semibold text-stone">Thamel, Kathmandu</p>
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-marigold text-xs font-bold text-ink">
            P
          </span>
        </div>

        {/* map area */}
        <div className="relative mx-4 mt-4 h-56 overflow-hidden rounded-2xl bg-[#232E3D]">
          <svg viewBox="0 0 280 220" className="absolute inset-0 h-full w-full">
            <rect width="280" height="220" fill="#232E3D" />
            <g stroke="#2E3A4C" strokeWidth="2">
              <line x1="0" y1="60" x2="280" y2="50" />
              <line x1="0" y1="130" x2="280" y2="140" />
              <line x1="70" y1="0" x2="55" y2="220" />
              <line x1="190" y1="0" x2="210" y2="220" />
            </g>
            <circle cx="150" cy="95" r="34" fill="#8B4332" opacity="0.25" />
            <circle cx="90" cy="150" r="20" fill="#8B4332" opacity="0.2" />
          </svg>

          {/* animated pin drop */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
            className="absolute left-1/2 top-[40%] -translate-x-1/2"
          >
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marigold opacity-60" />
              <span className="relative flex h-4 w-4 items-center justify-center rounded-full border-2 border-ink-dark bg-marigold" />
            </span>
          </motion.div>

          {/* secondary spots */}
          <span className="absolute left-[28%] top-[62%] h-2.5 w-2.5 rounded-full border-2 border-ink-dark bg-stone/60" />
          <span className="absolute left-[70%] top-[30%] h-2.5 w-2.5 rounded-full border-2 border-ink-dark bg-stone/60" />
        </div>

        {/* booking card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
          className="mx-4 mb-6 mt-4 rounded-2xl bg-stone p-4 text-ink"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold">Chhaya Center Lot</p>
              <p className="mt-0.5 text-xs text-slate-soft">0.2 km away · Covered</p>
            </div>
            <p className="text-sm font-semibold text-brick">₹60/hr</p>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex -space-x-1.5">
              {["S", "P", "B"].map((initial) => (
                <span
                  key={initial}
                  className="flex h-5 w-5 items-center justify-center rounded-full border border-stone bg-brick text-[9px] font-semibold text-stone"
                >
                  {initial}
                </span>
              ))}
            </div>
            <motion.button
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-marigold px-4 py-1.5 text-xs font-semibold text-ink"
            >
              Reserve spot
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* floating confirmation chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.8, ease: "easeOut" }}
        className="absolute -right-6 top-10 flex items-center gap-2 rounded-full border border-stone/15 bg-white px-3 py-2 text-ink shadow-lg"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 12.5l5 5L20 7"
            stroke="#8B4332"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-xs font-semibold">Spot confirmed</span>
      </motion.div>
    </motion.div>
  );
}
