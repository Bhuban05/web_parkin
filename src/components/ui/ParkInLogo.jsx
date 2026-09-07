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
    xs: "w-8 h-8",
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
    xl: "w-28 h-28",
  };

  const logoSize = size ? sizeClasses[size] || "w-16 h-16" : "w-16 h-16";

  // Icon only
  if (variant === "icon") {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-xl overflow-hidden ${className}`}
        role="img"
        aria-label="Park_in logo"
      >
        <img
          src="/images/logo.jpeg"
          alt="Park_in"
          className={`${logoSize} object-cover`}
        />
      </span>
    );
  }

  // Logo: icon + wordmark
  if (variant === "logo") {
    return (
      <span
        className={`inline-flex items-center gap-2.5 ${className}`}
        role="img"
        aria-label="Park_in"
      >
        <span className="inline-flex items-center justify-center rounded-xl overflow-hidden">
          <img
            src="/images/logo.jpeg"
            alt="Park_in"
            className={`${logoSize} object-cover`}
          />
        </span>
        <span className={`font-body font-bold tracking-wide text-lg ${mode === "dark" ? "text-white" : "text-heading"}`}>
          Park<span className="text-brand">_</span>in
        </span>
      </span>
    );
  }

  // Wordmark only (default) — image + text
  return (
    <span
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      role="img"
      aria-label="Park_in"
    >
      <span className="inline-flex items-center justify-center rounded-xl overflow-hidden">
        <img
          src="/images/logo.jpeg"
          alt="Park_in"
          className={`${logoSize} object-cover`}
        />
      </span>
      <span className={`font-body font-bold tracking-wide text-lg ${mode === "dark" ? "text-white" : "text-heading"}`}>
        Park<span className="text-brand">_</span>in
      </span>
    </span>
  );
}
