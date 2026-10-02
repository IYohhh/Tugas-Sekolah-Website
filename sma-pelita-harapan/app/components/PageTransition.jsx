"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Reusable Scroll Reveal Component
 * Menggunakan IntersectionObserver bawaan framer-motion (viewport)
 * yang sangat ringan, teroptimasi GPU (transform & opacity), dan tidak menyebabkan lag/frame-drop.
 */
export function ScrollReveal({
  children,
  direction = "up", // 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'
  delay = 0,
  duration = 0.55,
  className = "",
  once = true,
  amount = 0.15,
}) {
  const directions = {
    up: { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -28 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 28 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } },
    zoom: { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };

  const selectedVariant = directions[direction] || directions.up;

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Ultra smooth ease-out expo curve
      }}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Reusable Scroll Stagger Container & Items
 */
export function ScrollStaggerContainer({
  children,
  staggerDelay = 0.08,
  className = "",
  once = true,
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollStaggerItem({ children, className = "" }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Floating Back-to-Top Button dengan Circular Scroll Progress
 */
function ScrollToTopButton() {
  const [show, setShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const currentProgress =
            totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

          setScrollProgress(currentProgress);
          setShow(window.scrollY > 280);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Kembali ke atas"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-emerald-600 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition-shadow hover:shadow-[0_12px_35px_rgba(16,185,129,0.25)] dark:bg-neutral-900/90 dark:text-emerald-400"
        >
          {/* Circular Progress SVG */}
          <svg
            className="absolute inset-0 -rotate-90"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            {/* Background ring */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2.5"
              className="opacity-15"
            />
            {/* Active progress ring */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>

          {/* Arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative h-5 w-5"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/**
 * Top Route Navigation Glow Indicator (berkedip halus saat ganti halaman)
 */
function RouteLoadingBar({ pathname }) {
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- indikator loading yang disengaja saat pathname berubah.
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          key={`route-bar-${pathname}`}
          initial={{ x: "-100%", opacity: 0.9 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-[10000] h-[3px] bg-gradient-to-r from-emerald-400 via-teal-300 to-[#EF8A7D] shadow-[0_0_12px_rgba(16,185,129,0.8)] pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
}

/**
 * Main PageTransition Component
 * - Transisi halaman ultra-smooth (Cubic Bezier Easing & GPU-optimized transforms)
 * - Top Scroll Progress Bar berbasis physics spring
 * - Route Loading Bar sweep indicator
 * - Auto smooth reset scroll saat navigasi
 * - Floating Back to Top indicator
 */
export default function PageTransition({ children }) {
  const pathname = usePathname();

  // Scroll Progress Bar dengan Framer Motion Physics Spring
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 26,
    mass: 0.2,
    restDelta: 0.001,
  });

  // Pastikan posisi scroll ter-reset ke atas secara mulus saat perpindahan rute
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      {/* Route Change Indicator */}
      <RouteLoadingBar pathname={pathname} />

      {/* Top Scroll Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[9999] h-[3px] origin-left bg-gradient-to-r from-emerald-500 via-teal-400 to-[#EF8A7D] shadow-[0_1px_10px_rgba(16,185,129,0.5)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Page Content Transition Container with Butter-Smooth Easing */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 14, scale: 0.994 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.996 }}
          transition={{
            duration: 0.48,
            ease: [0.16, 1, 0.3, 1], // Buttery smooth custom exponential ease-out
          }}
          className="flex w-full flex-1 flex-col"
          style={{
            willChange: "transform, opacity",
            transformOrigin: "center top",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Floating Scroll To Top Indicator */}
      <ScrollToTopButton />
    </>
  );
}