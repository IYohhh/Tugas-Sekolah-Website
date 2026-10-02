"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import detailFallback from "../../assets/detail-kegiatan.jpg";
import { getKegiatanById } from "../lib/api";

function formatTanggal(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function DetailContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [gambarError, setGambarError] = useState(false);

  const loadDetail = async () => {
    if (!id) {
      setLoading(false);
      setError("ID kegiatan tidak ditemukan di URL.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const result = await getKegiatanById(id);
      setData(result);
    } catch (err) {
      setError(err?.message || "Gagal memuat detail kegiatan.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fetch detail kegiatan berdasarkan ID dari URL.
    loadDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <main className="min-h-screen bg-[#F5FAF8]">
      <section className="px-6 pb-24 pt-32 md:px-10 lg:px-14 lg:pb-28 lg:pt-36">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E1F2EE] px-4 py-2 text-[12px] font-semibold text-[#2C806C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2C806C]" />
            Kegiatan Sekolah
          </div>

          <div className="mt-2 flex justify-start">
            <Link
              href="/#kegiatan-sekolah"
              className="group inline-flex items-center gap-2 rounded-[14px] bg-[#EF8A7D] px-6 py-3 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(239,138,125,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E97C6E] hover:shadow-[0_12px_28px_rgba(239,138,125,0.25)]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Kembali ke Beranda
            </Link>
          </div>

          {loading ? (
            <div
              role="status"
              aria-live="polite"
              className="mx-auto mt-12 max-w-[1100px] rounded-[20px] bg-[#F4C3BC] p-10 text-center"
            >
              <p className="text-sm font-semibold text-[#243A34]">
                Memuat detail kegiatan...
              </p>
            </div>
          ) : error ? (
            <div
              role="alert"
              className="mx-auto mt-12 max-w-[1100px] rounded-[20px] bg-[#F4C3BC] p-10 text-center"
            >
              <p className="text-sm font-semibold text-[#243A34]">{error}</p>
              <button
                type="button"
                onClick={loadDetail}
                className="mt-4 rounded-[14px] bg-[#163D32] px-6 py-3 text-[13px] font-bold text-white transition hover:bg-[#234438]"
              >
                Coba lagi
              </button>
            </div>
          ) : !data ? (
            <div className="mx-auto mt-12 max-w-[1100px] rounded-[20px] bg-[#F4C3BC] p-10 text-center">
              <p className="text-sm font-semibold text-[#243A34]">
                Data kegiatan tidak tersedia.
              </p>
            </div>
          ) : (
            <>
              <h1 className="mt-10 text-center text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#163D32] md:text-[48px] lg:text-[50px]">
                {data.judul || "Detail Kegiatan"}
              </h1>

              <div className="mx-auto mt-12 flex max-w-[1100px] flex-col gap-8 rounded-[20px] bg-[#F4C3BC] p-5 shadow-[0_15px_35px_rgba(35,68,56,0.08)] md:p-6 lg:flex-row lg:items-start lg:gap-8 lg:p-5">
                <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[12px] bg-white/40 md:h-[350px] lg:h-[320px] lg:w-[390px]">
                  {gambarError || !data.gambar ? (
                    <Image
                      src={detailFallback}
                      alt={data.judul || "Foto kegiatan"}
                      fill
                      sizes="(max-width: 1024px) 100vw, 390px"
                      className="object-cover"
                    />
                  ) : (
                    // Gambar dari backend berupa path "/images/..." yang belum
                    // ada di frontend, jadi pakai <img> + fallback agar tidak crash.
                    <img
                      src={data.gambar}
                      alt={data.judul || "Foto kegiatan"}
                      onError={() => setGambarError(true)}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>

                <div className="flex-1 px-1 py-2 md:px-2 lg:px-3">
                  {data.kategori && (
                    <span className="inline-block rounded-full bg-white/70 px-4 py-1.5 text-[11px] font-bold text-[#2C806C]">
                      {data.kategori}
                    </span>
                  )}

                  <h2 className="mt-4 max-w-[520px] text-[20px] font-semibold leading-[1.3] text-[#243A34] md:text-[21px]">
                    {data.judul}
                  </h2>

                  <p className="mt-4 max-w-[570px] text-[15px] font-normal leading-6 text-[#243A34]">
                    {data.deskripsi}
                  </p>

                  <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      ["Tanggal", formatTanggal(data.tanggal)],
                      ["Waktu", data.waktu || "-"],
                      ["Lokasi", data.lokasi || "-"],
                      ["Penyelenggara", data.penyelenggara || "-"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-xl bg-white/60 px-4 py-3"
                      >
                        <dt className="text-[11px] font-bold uppercase tracking-wide text-[#2C806C]">
                          {label}
                        </dt>
                        <dd className="mt-1 text-[13px] font-semibold text-[#243A34]">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
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
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#F5FAF8] px-6 pb-24 pt-40">
          <p className="text-center text-sm font-semibold text-[#2C806C]">
            Memuat detail kegiatan...
          </p>
        </main>
      }
    >
      <DetailContent />
    </Suspense>
  );
}
