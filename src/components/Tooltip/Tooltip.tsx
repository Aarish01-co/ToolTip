import React, { useState, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const tooltipVariants = cva(
  "absolute z-50 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium shadow-md transition-all duration-200 pointer-events-none flex items-center justify-center",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white dark:bg-slate-800",
        light: "bg-white text-slate-900 border border-slate-200 shadow-lg",
        primary: "bg-indigo-600 text-white",
        destructive: "bg-red-600 text-white",
      },
      position: {
        top: "bottom-full mb-2 left-1/2 -translate-x-1/2 origin-bottom",
        bottom: "top-full mt-2 left-1/2 -translate-x-1/2 origin-top",
        left: "right-full mr-2 top-1/2 -translate-y-1/2 origin-right",
        right: "left-full ml-2 top-1/2 -translate-y-1/2 origin-left",
      },
    },
    defaultVariants: {
      variant: "dark",
      position: "top",
    },
  }
);

const arrowVariants = cva("absolute w-2 h-2 rotate-45", {
  variants: {
    variant: {
      dark: "bg-slate-900 dark:bg-slate-800",
      light: "bg-white border-slate-200",
      primary: "bg-indigo-600",
      destructive: "bg-red-600",
    },
    position: {
      top: "bottom-[-4px] left-1/2 -translate-x-1/2 border-r border-b",
      bottom: "top-[-4px] left-1/2 -translate-x-1/2 border-l border-t",
      left: "right-[-4px] top-1/2 -translate-y-1/2 border-t border-r",
      right: "left-[-4px] top-1/2 -translate-y-1/2 border-b border-l",
    },
  },
  defaultVariants: {
    variant: "dark",
    position: "top",
  },
});

// FIX 1: Used Omit to remove the default HTML "content" attribute
export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "content">,
    VariantProps<typeof tooltipVariants> {
  content: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
  arrow?: boolean;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      children,
      variant = "dark",
      position = "top",
      delay = 0,
      arrow = true,
      className,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    
    // FIX 2: Replaced NodeJS.Timeout with ReturnType<typeof setTimeout> for browser compatibility
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const showTooltip = () => {
      if (delay > 0) {
        timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
      } else {
        setIsVisible(true);
      }
    };

    const hideTooltip = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsVisible(false);
    };

    return (
      <div
        className="relative inline-block"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
        {isVisible && (
          <div
            ref={ref}
            role="tooltip"
            className={cn(
              tooltipVariants({ variant, position }),
              "animate-in fade-in-0 zoom-in-95",
              className
            )}
            {...props}
          >
            {content}
            {arrow && (
              <span className={cn(arrowVariants({ variant, position }))} />
            )}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";
export default Tooltip;