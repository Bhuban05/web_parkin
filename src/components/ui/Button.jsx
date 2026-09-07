const VARIANTS = {
  primary:
    "bg-brand text-white font-semibold hover:bg-brand-hover shadow-md hover:shadow-lg active:scale-[0.98] focus-visible:ring-brand/50",
  secondary:
    "bg-navy text-white font-semibold hover:bg-navy-light shadow-md hover:shadow-lg active:scale-[0.98] focus-visible:ring-navy/50",
  outline:
    "bg-transparent text-navy border border-navy/15 font-semibold hover:bg-navy/5 active:scale-[0.98] focus-visible:ring-navy/20",
  ghost:
    "bg-transparent text-navy font-medium hover:bg-navy/5 active:scale-[0.98]",
  amber:
    "bg-amber text-navy font-semibold hover:bg-amber-light shadow-md hover:shadow-lg active:scale-[0.98] focus-visible:ring-amber/50",
  dark:
    "bg-navy text-white font-semibold hover:bg-navy-light shadow-md active:scale-[0.98]",
  link:
    "bg-transparent text-brand font-semibold underline-offset-4 hover:underline p-0 h-auto",
};

const SIZES = {
  sm: "h-8 px-3 text-sm rounded-md gap-1.5",
  md: "h-10 px-4 text-sm rounded-lg gap-2",
  lg: "h-12 px-6 text-sm rounded-lg gap-2",
  xl: "h-14 px-8 text-base rounded-xl gap-2.5",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center font-body tracking-tight transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
