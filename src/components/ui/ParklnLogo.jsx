/**
 * ParklnLogo — shadcn/ui-style logo component
 *
 * @example
 * <ParklnLogo variant="wordmark" mode="dark" />
 * <ParklnLogo variant="icon" mode="light" />
 * <ParklnLogo variant="logo" />
 *
 * @typedef {'icon' | 'logo' | 'wordmark'} Variant
 * @typedef {'light' | 'dark'} Mode
 */

const COLORS = {
  light: {
    primary: "currentColor",
    iconBg: "#2BA8DE",
    iconP: "#ffffff",
    iconDetail: "#1E8FC4",
    wordmark: "text-heading",
    dot: "text-brand",
  },
  dark: {
    primary: "currentColor",
    iconBg: "#2BA8DE",
    iconP: "#ffffff",
    iconDetail: "#1E8FC4",
    wordmark: "text-white",
    dot: "text-brand-light",
  },
};

function ParkingIcon({ mode, className = "" }) {
  const c = COLORS[mode] || COLORS.dark;

  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Rounded square background */}
      <rect width="36" height="36" rx="8" fill={c.iconBg} />
      {/* P letter */}
      <path
        d="M11 26V10h6c3.3 0 5.5 2 5.5 5s-2.2 5-5.5 5H15v6h-4zm4-10h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2v4z"
        fill={c.iconP}
      />
    </svg>
  );
}

/**
 * ParklnLogo
 * @param {object} props
 * @param {'icon' | 'logo' | 'wordmark'} [props.variant='wordmark']
 * @param {'light' | 'dark'} [props.mode='dark']
 * @param {string} [props.className='']
 * @param {string} [props.size]
 */
export default function ParklnLogo({
  variant = "wordmark",
  mode = "dark",
  className = "",
  size,
}) {
  const sizeClasses = {
    xs: "w-5 h-5",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-12 h-12",
  };

  const iconSize = size ? sizeClasses[size] || "w-8 h-8" : "w-8 h-8";
  const colors = COLORS[mode] || COLORS.dark;

  // Icon only
  if (variant === "icon") {
    return (
      <span
        className={`inline-flex items-center justify-center ${className}`}
        role="img"
        aria-label="Parkln logo"
      >
        <ParkingIcon mode={mode} className={iconSize} />
      </span>
    );
  }

  // Logo: icon + wordmark
  if (variant === "logo") {
    return (
      <span
        className={`inline-flex items-center gap-2 ${className}`}
        role="img"
        aria-label="Parkln"
      >
        <ParkingIcon mode={mode} className={iconSize} />
        <span className={`inline-flex items-baseline select-none font-body font-bold tracking-[0.14em] text-[1.1em] uppercase ${colors.wordmark}`}>
          PARKLN<span className={`${colors.dot} text-[1.2em] leading-none`}>.</span>
        </span>
      </span>
    );
  }

  // Wordmark only (default)
  return (
    <span
      className={`inline-flex items-baseline select-none font-body font-bold tracking-[0.14em] text-[1.1em] uppercase ${colors.wordmark} ${className}`}
      role="img"
      aria-label="Parkln"
    >
      PARKLN<span className={`${colors.dot} text-[1.2em] leading-none`}>.</span>
    </span>
  );
}
