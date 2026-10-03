"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo_pelita-harapan-removebg.png";

const PANEL_DURATION = 1500;

export default function LoadingScreen() {
  const [status, setStatus] = useState("loading"); // "loading" | "exiting" | "done"
  const [reducedMotion, setReducedMotion] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(prefersReducedMotion);

    const startExitTimer = setTimeout(() => {
      if (prefersReducedMotion) {
        setStatus("done");
        return;
      }

      // Pastikan browser merender dulu translateY(0),
      // baru ubah ke translateY(-100%) supaya transition berjalan.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setStatus("exiting");
        });
      });
    }, 1600);

    return () => clearTimeout(startExitTimer);
  }, []);

  useEffect(() => {
    if (status !== "exiting") return;

    const handleTransitionEnd = (e) => {
      if (e.propertyName === "transform") {
        setStatus("done");
      }
    };

    const panel = panelRef.current;
    panel?.addEventListener("transitionend", handleTransitionEnd);

    const fallbackTimer = setTimeout(
      () => setStatus("done"),
      PANEL_DURATION + 150
    );

    return () => {
      panel?.removeEventListener("transitionend", handleTransitionEnd);
      clearTimeout(fallbackTimer);
    };
  }, [status]);

  if (status === "done") return null;

  const duration = reducedMotion ? 0 : PANEL_DURATION;

  return (
    <div
      ref={panelRef}
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white ${
        status === "exiting" ? "rounded-b-[32px] pointer-events-none" : ""
      }`}
      style={{
        transform: status === "exiting" ? "translateY(-100%)" : "translateY(0)",
        transition: `transform ${duration}ms cubic-bezier(0.76, 0, 0.24, 1), border-radius ${duration}ms cubic-bezier(0.76, 0, 0.24, 1)`,
      }}
    >
      <Image
        src={logo}
        alt="Logo SMA Pelita Harapan"
        width={136}
        height={136}
        priority
        className="h-[96px] w-[96px] object-contain sm:h-[112px] sm:w-[112px] md:h-[136px] md:w-[136px] loading-logo-enter"
      />
    </div>
  );
}
