import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[#2BA8DE] text-white shadow-md shadow-[#2BA8DE]/20 hover:bg-[#1E8FC4] hover:shadow-xl hover:shadow-[#2BA8DE]/30",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-lg",
        outline:
          "border border-[#1E2A38]/15 bg-transparent text-[#1E2A38] hover:bg-[#1E2A38]/5 hover:-translate-y-0.5 hover:shadow-md",
        secondary:
          "bg-[#1E2A38] text-white shadow-md hover:bg-[#3A4A5E] hover:shadow-xl hover:-translate-y-0.5",
        ghost:
          "text-[#1E2A38] hover:bg-[#1E2A38]/5 hover:-translate-y-0.5",
        link: "text-[#2BA8DE] underline-offset-4 hover:underline",
        amber:
          "bg-[#F5A623] text-[#1E2A38] shadow-md shadow-[#F5A623]/20 hover:bg-[#F7BC5E] hover:shadow-xl hover:shadow-[#F5A623]/30 hover:-translate-y-0.5",
        brand:
          "bg-[#2BA8DE] text-white shadow-md shadow-[#2BA8DE]/25 hover:bg-[#1E8FC4] hover:shadow-xl hover:shadow-[#2BA8DE]/35 hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-6 text-base",
        xl: "h-14 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
