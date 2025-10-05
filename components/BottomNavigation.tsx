"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BottomNavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface BottomNavigationProps {
  items: BottomNavigationItem[];
  threshold?: number;
  className?: string;
  hideOnScroll?: boolean;
}

export const BottomNavigation = ({ items, threshold = 10, className, hideOnScroll = true }: BottomNavigationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const ticking = useRef(false);
  const rafId = useRef<number | null>(null);

  const updateScrollDirection = useCallback(() => {
    const scrollY = window.scrollY;

    if (Math.abs(scrollY - lastScrollY) < threshold) {
      ticking.current = false;
      return;
    }

    if (scrollY > lastScrollY && scrollY > threshold) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up or at top
      setIsVisible(true);
    }

    setLastScrollY(scrollY);
    ticking.current = false;
  }, [lastScrollY, threshold]);

  const requestTick = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      rafId.current = requestAnimationFrame(updateScrollDirection);
    }
  }, [updateScrollDirection]);

  const handleScroll = useCallback(() => {
    if (hideOnScroll) {
      requestTick();
    }
  }, [hideOnScroll, requestTick]);

  useEffect(() => {
    if (!hideOnScroll) return;

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll, hideOnScroll]);

  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <nav
      className={cn(
        // Base styles
        "fixed bottom-0 left-0 right-0 z-50",
        "bg-card/95 backdrop-blur-md border-t border-border",
        "shadow-lg shadow-black/5",
        // Mobile-first responsive design
        "px-2 py-2 sm:px-4",
        // Smooth transitions with reduced motion support
        "transition-all duration-300 ease-in-out",
        "motion-reduce:transition-none",
        // Hide/show animation
        isVisible || !hideOnScroll ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
        className
      )}
      role='navigation'
      aria-label='Bottom navigation'
    >
      <div className='flex items-center justify-around max-w-md mx-auto'>
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              // Base button styles
              "flex flex-col items-center justify-center",
              "min-h-[48px] min-w-[48px] px-2 py-1",
              "rounded-lg transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "hover:bg-accent hover:text-accent-foreground",
              "active:scale-95",
              "motion-reduce:transition-none motion-reduce:active:scale-100",
              // Touch target optimization for mobile
              "touch-manipulation select-none"
            )}
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, item.href)}
            aria-label={item.label}
          >
            {item.icon && <div className='flex items-center justify-center w-6 h-6 mb-1'>{item.icon}</div>}
            <span className='text-xs font-medium text-center leading-tight'>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
