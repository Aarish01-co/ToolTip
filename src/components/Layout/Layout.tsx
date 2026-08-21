import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

// --- Container Component ---
const containerVariants = cva("mx-auto w-full px-4 md:px-6", {
  variants: {
    maxWidth: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    maxWidth: "xl",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  children: React.ReactNode;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxWidth, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(containerVariants({ maxWidth }), className)}
      {...props}
    >
      {children}
    </div>
  )
);
Container.displayName = "Container";

// --- Grid Component ---
const gridVariants = cva("grid w-full", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
      6: "grid-cols-2 md:grid-cols-6",
      12: "grid-cols-12",
    },
    gap: {
      none: "gap-0",
      sm: "gap-2 md:gap-3",
      md: "gap-4 md:gap-6",
      lg: "gap-6 md:gap-8",
      xl: "gap-8 md:gap-12",
    },
  },
  defaultVariants: {
    cols: 3,
    gap: "md",
  },
});

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  children: React.ReactNode;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ cols, gap, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(gridVariants({ cols, gap }), className)}
      {...props}
    >
      {children}
    </div>
  )
);
Grid.displayName = "Grid";

// --- Flex Component ---
const flexVariants = cva("flex w-full", {
  variants: {
    direction: {
      row: "flex-row",
      col: "flex-col",
      rowReverse: "flex-row-reverse",
      colReverse: "flex-col-reverse",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    gap: {
      none: "gap-0",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
    },
  },
  defaultVariants: {
    direction: "row",
    justify: "start",
    align: "center",
    gap: "md",
    wrap: "nowrap",
  },
});

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  children: React.ReactNode;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ direction, justify, align, gap, wrap, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(flexVariants({ direction, justify, align, gap, wrap }), className)}
      {...props}
    >
      {children}
    </div>
  )
);
Flex.displayName = "Flex";

// --- Section Component ---
const sectionVariants = cva("w-full transition-all duration-200", {
  variants: {
    padding: {
      none: "py-0",
      sm: "py-6 md:py-8",
      md: "py-12 md:py-16",
      lg: "py-16 md:py-24",
    },
    variant: {
      default: "bg-transparent text-gray-900",
      muted: "bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white",
      dark: "bg-slate-900 text-white",
    },
  },
  defaultVariants: {
    padding: "md",
    variant: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ padding, variant, className, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ padding, variant }), className)}
      {...props}
    >
      {children}
    </section>
  )
);
Section.displayName = "Section";

export const Layout = {
  Container,
  Grid,
  Flex,
  Section,
};

export default Layout;
