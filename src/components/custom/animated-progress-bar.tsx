import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import * as React from "react";

const progressVariants = cva(
  "h-2 w-full overflow-hidden rounded-full bg-secondary",
  {
    variants: {
      variant: {
        default: "bg-secondary",
        success: "bg-success/20",
        warning: "bg-warning/20",
        destructive: "bg-destructive/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value?: number;
  max?: number;
  color?: string;
}

export const AnimatedProgressBar = React.forwardRef<
  HTMLDivElement,
  ProgressProps
>(({ className, value = 0, max = 100, color, variant, ...props }, ref) => {
  // Calculate the width percentage
  const width = value !== null ? Math.min(Math.max(value, 0), max) : 0;

  // Handle colors based on thresholds
  let indicatorColor = "text-primary";

  if (color) {
    indicatorColor = color;
  } else if (width >= 90) {
    indicatorColor = "text-destructive";
  } else if (width >= 75) {
    indicatorColor = "text-warning";
  } else if (width >= 50) {
    indicatorColor = "text-success";
  }

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={cn(progressVariants({ variant }), className)}
      {...props}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn("h-full flex-1", indicatorColor)}
      />
    </div>
  );
});

AnimatedProgressBar.displayName = "AnimatedProgressBar";
