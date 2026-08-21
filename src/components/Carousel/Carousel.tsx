import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const carouselVariants = cva("relative overflow-hidden rounded-xl w-full", {
  variants: {
    variant: {
      light: "bg-gray-100 border border-gray-200 text-gray-900",
      dark: "bg-slate-900 border border-slate-800 text-white",
      ghost: "bg-transparent",
    },
    aspectRatio: {
      auto: "",
      video: "aspect-video",
      square: "aspect-square",
      wide: "aspect-[21/9]",
    },
  },
  defaultVariants: {
    variant: "light",
    aspectRatio: "video",
  },
});

export interface CarouselSlide {
  id: string | number;
  image?: string;
  title?: string;
  description?: string;
  content?: React.ReactNode;
}

export interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {
  slides?: CarouselSlide[];
  children?: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  loop?: boolean;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      slides,
      children,
      autoPlay = true,
      interval = 4000,
      showControls = true,
      showIndicators = true,
      loop = true,
      variant = "light",
      aspectRatio = "video",
      className,
      ...props
    },
    ref
  ) => {
    const slideItems = slides || (React.Children.toArray(children) as React.ReactNode[]);
    const totalSlides = slideItems.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = useCallback(() => {
      if (totalSlides === 0) return;
      setCurrentIndex((prev) =>
        prev === totalSlides - 1 ? (loop ? 0 : prev) : prev + 1
      );
    }, [totalSlides, loop]);

    const prevSlide = useCallback(() => {
      if (totalSlides === 0) return;
      setCurrentIndex((prev) =>
        prev === 0 ? (loop ? totalSlides - 1 : 0) : prev - 1
      );
    }, [totalSlides, loop]);

    const goToSlide = (index: number) => {
      setCurrentIndex(index);
    };

    useEffect(() => {
      if (!autoPlay || isHovered || totalSlides <= 1) return;

      const timer = setInterval(() => {
        nextSlide();
      }, interval);

      return () => clearInterval(timer);
    }, [autoPlay, interval, isHovered, nextSlide, totalSlides]);

    if (totalSlides === 0) return null;

    return (
      <div
        ref={ref}
        className={cn(carouselVariants({ variant, aspectRatio }), className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Slides Track */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides
            ? slides.map((slide, idx) => (
                <div
                  key={slide.id || idx}
                  className="min-w-full h-full relative flex items-center justify-center overflow-hidden"
                >
                  {slide.image && (
                    <img
                      src={slide.image}
                      alt={slide.title || `Slide ${idx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  {(slide.title || slide.description || slide.content) && (
                    <div className="relative z-10 p-6 md:p-12 text-center bg-black/40 backdrop-blur-xs text-white rounded-lg max-w-lg mx-4">
                      {slide.title && (
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                          {slide.title}
                        </h3>
                      )}
                      {slide.description && (
                        <p className="text-sm md:text-base text-gray-200">
                          {slide.description}
                        </p>
                      )}
                      {slide.content}
                    </div>
                  )}
                </div>
              ))
            : (children as React.ReactNode[])?.map((child, idx) => (
                <div key={idx} className="min-w-full h-full flex items-center justify-center">
                  {child}
                </div>
              ))}
        </div>

        {/* Previous Button */}
        {showControls && totalSlides > 1 && (
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all duration-200 opacity-80 hover:opacity-100 cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Next Button */}
        {showControls && totalSlides > 1 && (
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all duration-200 opacity-80 hover:opacity-100 cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Indicators */}
        {showIndicators && totalSlides > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                  currentIndex === idx
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";
export default Carousel;
