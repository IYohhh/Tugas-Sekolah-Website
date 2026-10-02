"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function TestimoniPopup({ testimoni, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- penanda client-mount untuk portal, hanya sekali.
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!testimoni) return;

    // Mengunci scroll halaman belakang
    document.body.style.overflow = "hidden";

    // Tutup popup dengan tombol Escape agar mudah diakses keyboard.
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [testimoni, onClose]);

  if (!mounted || !testimoni) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* POPUP */}
      <div
        className="relative z-[100000] max-h-[80vh] w-full max-w-[650px] overflow-y-auto rounded-[22px] bg-white px-6 py-8 shadow-2xl md:px-12 md:py-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol X */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-4 z-[100001] text-2xl font-semibold text-black transition hover:scale-110"
          aria-label="Tutup"
        >
          ×
        </button>

        {/* Foto */}
        <div className="flex justify-center">
          <img
            src={testimoni.image}
            alt={testimoni.nama}
            onError={(e) => {
              e.currentTarget.src = "/file.svg";
            }}
            className="h-[220px] w-[220px] rounded-full bg-neutral-100 object-cover"
          />
        </div>

        {/* Nama */}
        <h2 className="mt-8 text-center text-2xl font-bold text-[#35688F] md:text-[32px]">
          {testimoni.nama}
        </h2>

        {/* Peran */}
        {testimoni.peran && (
          <p className="mt-2 text-center text-[14px] font-semibold text-[#3C8977]">
            {testimoni.peran}
          </p>
        )}

        {/* Isi Testimoni */}
        <p className="mx-auto mt-8 max-w-[550px] text-[17px] leading-[1.5] text-[#638078] md:text-[19px]">
          {testimoni.isi}
        </p>
      </div>
    </div>,
    document.body
  );
}