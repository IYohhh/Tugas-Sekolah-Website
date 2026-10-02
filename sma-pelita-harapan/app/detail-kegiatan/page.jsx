"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaTag,
} from "react-icons/fa";
import { getKegiatanById } from "../lib/api";
import { initReveal } from "../lib/reveal";

function DetailKegiatanContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [kegiatan, setKegiatan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      setError("");
      setKegiatan(null);

      if (!id) {
        setError("Kegiatan tidak ditemukan.");
        setLoading(false);
        return;
      }

      try {
        const data = await getKegiatanById(id);
        setKegiatan(data);
      } catch (err) {
        setError(err?.message || "Gagal memuat detail kegiatan.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  useEffect(() => {
    const cleanup = initReveal();
    return cleanup;
  }, []);

  const infoItems = kegiatan
    ? [
        { icon: FaCalendarAlt, label: "Tanggal", value: kegiatan.tanggal },
        { icon: FaClock, label: "Waktu", value: kegiatan.waktu },
        { icon: FaMapMarkerAlt, label: "Lokasi", value: kegiatan.lokasi },
        {
          icon: FaUsers,
          label: "Penyelenggara",
          value: kegiatan.penyelenggara,
        },
        { icon: FaTag, label: "Kategori", value: kegiatan.kategori },
      ]
    : [];

  return (
    <main className="min-h-screen bg-[#F5FAF8]">

      <section className="px-6 pb-24 pt-32 md:px-10 lg:px-14 lg:pb-28 lg:pt-36">

        <div className="mx-auto max-w-[1100px]">

          <div className="flex justify-start">
            <Link
              href="/#kegiatan-sekolah"
              className="group inline-flex items-center gap-2 rounded-[14px] bg-[#EF8A7D] px-6 py-3 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(239,138,125,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E97C6E]"
            >
              <FaArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              Kembali ke Kegiatan
            </Link>
          </div>

          {loading ? (
            <div className="mt-10 flex h-[320px] items-center justify-center rounded-[22px] bg-[#DFF1ED]">
              <p className="text-sm font-semibold text-[#2C806C]">
                Memuat detail kegiatan...
              </p>
            </div>
          ) : error || !kegiatan ? (
            <div
              role="alert"
              className="mt-10 flex h-[320px] flex-col items-center justify-center gap-5 rounded-[22px] bg-[#F0D8D1] p-6 text-center"
            >
              <p className="text-sm font-semibold text-[#163D32]">
                {error === "Data yang dicari tidak ditemukan."
                  ? "Kegiatan tidak ditemukan."
                  : error || "Kegiatan tidak ditemukan."}
              </p>
              <Link
                href="/#kegiatan-sekolah"
                className="rounded-full bg-[#163D32] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#234438]"
              >
                Kembali ke Kegiatan
              </Link>
            </div>
          ) : (
            <>
              <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

                <div data-reveal className="reveal reveal-up">
                  <span className="inline-flex w-fit items-center rounded-full bg-[#E1F2EE] px-4 py-1.5 text-[12px] font-bold text-[#2C806C]">
                    {kegiatan.kategori}
                  </span>

                  <h1 className="mt-5 text-[34px] font-extrabold leading-[1.1] tracking-tight text-[#163D32] md:text-[42px] lg:text-[46px]">
                    {kegiatan.judul}
                  </h1>

                  <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-[#668078] md:text-[16px]">
                    {kegiatan.deskripsi}
                  </p>
                </div>

                <div
                  data-reveal
                  className="reveal reveal-right relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-[#DFF1ED] shadow-[0_15px_35px_rgba(35,68,56,0.12)]"
                >
                  <img
                    src={kegiatan.gambar}
                    alt={kegiatan.judul}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

              </div>

              <div
                data-reveal
                className="reveal reveal-up mt-12 rounded-[22px] bg-[#DFF1ED] p-6 shadow-[0_12px_30px_rgba(35,68,56,0.06)] md:p-8"
              >
                <h2 className="text-[20px] font-extrabold text-[#163D32] md:text-[22px]">
                  Informasi Kegiatan
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {infoItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/80 text-[#2C806C]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#668078]">
                            {item.label}
                          </p>
                          <p className="mt-1 text-[14px] font-bold text-[#163D32]">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                data-reveal
                className="reveal reveal-up mt-10 rounded-[22px] bg-white p-6 shadow-[0_12px_30px_rgba(35,68,56,0.06)] md:p-8"
              >
                <h2 className="text-[20px] font-extrabold text-[#163D32] md:text-[22px]">
                  Tentang Kegiatan
                </h2>
                <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-[#668078]">
                  {kegiatan.deskripsi}
                </p>
              </div>

              <div className="mt-10 flex justify-center md:justify-start">
                <Link
                  href="/#kegiatan-sekolah"
                  className="group inline-flex items-center gap-2 rounded-[14px] bg-[#163D32] px-6 py-3 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(22,61,50,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1E4A3D]"
                >
                  <FaArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                  Kembali ke Kegiatan
                </Link>
              </div>
            </>
          )}

        </div>

      </section>

    </main>
  );
}

export default function KegiatanPage() {
  return (
    <Suspense>
      <DetailKegiatanContent />
    </Suspense>
  );
}
