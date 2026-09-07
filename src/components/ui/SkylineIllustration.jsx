import { motion } from "framer-motion";

/**
 * SkylineIllustration — layered Kathmandu pagoda-roof silhouette
 * Used as hero atmospheric backdrop
 */
export default function SkylineIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#162230" />
          <stop offset="60%" stopColor="#1E2A38" />
          <stop offset="100%" stopColor="#253547" />
        </linearGradient>
        <linearGradient id="mtn-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A4A5E" />
          <stop offset="100%" stopColor="#253547" />
        </linearGradient>
      </defs>

      <rect width="1200" height="700" fill="url(#sky-grad)" />

      {/* Distant mountains */}
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        d="M0 340 L120 260 L230 320 L340 230 L470 310 L600 220 L730 300 L860 240 L980 310 L1200 250 L1200 700 L0 700 Z"
        fill="url(#mtn-grad)"
      />

      {/* Mid buildings */}
      <g fill="#1E2A38" opacity="0.8">
        <rect x="0" y="420" width="90" height="180" />
        <rect x="90" y="450" width="70" height="150" />
        <rect x="900" y="440" width="120" height="160" />
        <rect x="1020" y="410" width="90" height="190" />
        <rect x="1110" y="460" width="90" height="140" />
      </g>

      {/* Pagoda temple — tiered roofs */}
      <g transform="translate(500,330)">
        <rect x="-14" y="150" width="28" height="120" fill="#162230" />
        <polygon points="-70,150 70,150 0,90" fill="#162230" />
        <rect x="-46" y="90" width="92" height="14" fill="#2BA8DE" opacity="0.6" />
        <polygon points="-54,90 54,90 0,40" fill="#162230" />
        <rect x="-30" y="40" width="60" height="12" fill="#2BA8DE" opacity="0.5" />
        <polygon points="-38,40 38,40 0,0" fill="#162230" />
        <circle cx="0" cy="-6" r="6" fill="#F5A623" opacity="0.9" />
      </g>

      {/* Foreground brick terrace */}
      <g fill="#162230">
        <rect x="0" y="520" width="160" height="180" />
        <rect x="160" y="560" width="130" height="140" />
        <rect x="850" y="540" width="150" height="160" />
        <rect x="1000" y="500" width="200" height="200" />
      </g>

      {/* Lit windows — warm amber glow */}
      <g fill="#F5A623" opacity="0.85">
        <rect x="30" y="560" width="10" height="14" rx="1" />
        <rect x="60" y="590" width="10" height="14" rx="1" />
        <rect x="200" y="600" width="10" height="14" rx="1" />
        <rect x="900" y="580" width="10" height="14" rx="1" />
        <rect x="1040" y="560" width="10" height="14" rx="1" />
        <rect x="1070" y="600" width="10" height="14" rx="1" />
      </g>

      {/* Subtle light rays from windows */}
      <g fill="#F5A623" opacity="0.03">
        <rect x="25" y="560" width="20" height="140" />
        <rect x="55" y="590" width="20" height="110" />
        <rect x="195" y="600" width="20" height="100" />
      </g>
    </svg>
  );
}
