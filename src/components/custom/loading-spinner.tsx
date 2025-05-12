import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import * as React from "react";

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the spinner
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  
  /**
   * The text to display below the spinner
   */
  text?: string;
  
  /**
   * Whether to center the spinner in its container
   * @default false
   */
  centered?: boolean;
  
  /**
   * Whether to fill the container
   * @default false
   */
  fullScreen?: boolean;
}

/**
 * A loading spinner component with optional text
 */
export function LoadingSpinner({
  size = "md",
  text,
  centered = false,
  fullScreen = false,
  className,
  ...props
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        centered && "absolute inset-0",
        fullScreen && "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      <Loader2
        className={cn(
          "animate-spin text-primary",
          sizeClasses[size]
        )}
      />
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
    </div>
  );
}
