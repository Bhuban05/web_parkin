/**
 * ParkInLogo — shadcn/ui-style logo component
 *
 * @example
 * <ParkInLogo variant="wordmark" mode="dark" />
 * <ParkInLogo variant="icon" mode="light" />
 * <ParkInLogo variant="logo" />
 *
 * @typedef {'icon' | 'logo' | 'wordmark'} Variant
 * @typedef {'light' | 'dark'} Mode
 */

/**
 * ParkInLogo
 * @param {object} props
 * @param {'icon' | 'logo' | 'wordmark'} [props.variant='wordmark']
 * @param {'light' | 'dark'} [props.mode='dark']
 * @param {string} [props.className='']
 * @param {string} [props.size]
 */
export default function ParkInLogo({
  variant = "wordmark",
  mode = "dark",
  className = "",
  size,
}) {
  const sizeClasses = {
    xs: "w-12 h-12",
    sm: "w-16 h-16",
    md: "w-20 h-20",
    lg: "w-28 h-28",
    xl: "w-36 h-36",
  };

  const logoSize = size ? sizeClasses[size] || "w-20 h-20" : "w-20 h-20";

  // Icon only
  if (variant === "icon") {
    return (
      <span
        className={`inline-flex items-center justify-center ${className}`}
        role="img"
        aria-label="Park_in logo"
      >
        <img
          src="/images/logo.png"
          alt="Park_in"
          className={`${logoSize} object-contain`}
        />
      </span>
    );
  }

  // Logo: icon + wordmark
  if (variant === "logo") {
    return (
      <span
        className={`inline-flex items-center gap-2 ${className}`}
        role="img"
        aria-label="Park_in"
      >
        <img
          src="/images/logo.png"
          alt="Park_in"
          className={`${logoSize} object-contain`}
        />
      </span>
    );
  }

  // Wordmark only (default) — use image for all modes since it has the text
  return (
    <span
      className={`inline-flex items-center select-none ${className}`}
      role="img"
      aria-label="Park_in"
    >
      <img
        src="/images/logo.png"
        alt="Park_in"
        className={`${logoSize} object-contain`}
      />
    </span>
  );
}
