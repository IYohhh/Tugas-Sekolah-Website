import Image from "next/image";
import Link from "next/link";
import detailKegiatan from "../../assets/detail-kegiatan.jpg";

export default function KegiatanPage() {
  return (
    <main className="min-h-screen bg-[#F5FAF8]">

      {/* ==================== DETAIL KEGIATAN ==================== */}
      <section className="px-6 pb-24 pt-32 md:px-10 lg:px-14 lg:pb-28 lg:pt-36">

        <div className="mx-auto max-w-[1200px]">

          {/* LABEL */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E1F2EE] px-4 py-2 text-[12px] font-semibold text-[#2C806C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2C806C]" />
            Kegiatan Sekolah
          </div>

          {/* ==================== TOMBOL KEMBALI ==================== */}
          <div className="mt-2 flex justify-start">
            <Link href="/#kegiatan-sekolah" className="group inline-flex items-center gap-2 rounded-[14px] bg-[#EF8A7D] px-6 py-3 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(239,138,125,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E97C6E] hover:shadow-[0_12px_28px_rgba(239,138,125,0.25)]">
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Kembali ke Beranda
            </Link>
          </div>

          {/* JUDUL */}
          <h1 className="mt-10 text-center text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#163D32] md:text-[48px] lg:text-[50px]">
            Olimpiade SMA PELITA HARAPAN
          </h1>

          {/* ==================== CARD DETAIL ==================== */}
          <div className="mx-auto mt-12 flex max-w-[1100px] flex-col gap-8 rounded-[20px] bg-[#F4C3BC] p-5 shadow-[0_15px_35px_rgba(35,68,56,0.08)] md:p-6 lg:flex-row lg:items-center lg:gap-8 lg:p-5">

            {/* FOTO KEGIATAN */}
            <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[12px] md:h-[350px] lg:h-[300px] lg:w-[390px]">

              <Image
                src={detailKegiatan}
                alt="Olimpiade SMA Pelita Harapan"
                fill
                sizes="(max-width: 1024px) 100vw, 390px"
                className="object-cover"
              />

            </div>

            {/* TEKS DETAIL */}
            <div className="flex-1 px-1 py-2 md:px-2 lg:px-3">

              <h2 className="max-w-[520px] text-[20px] font-semibold leading-[1.15] text-[#243A34] md:text-[21px]">
                Prestasi Membanggakan SMA Pelita Harapan!
              </h2>

              <p className="mt-6 max-w-[560px] text-[16px] font-medium leading-[1.08] text-[#243A34] md:text-[17px]">
                Selamat kepada siswa SMA Pelita Harapan yang berhasil meraih Juara Olimpiade Matematika!
              </p>

              <p className="mt-1 max-w-[570px] text-[16px] font-medium leading-[1.08] text-[#243A34] md:text-[17px]">
                Prestasi ini menjadi bukti semangat, kerja keras, dan ketekunan dalam mengembangkan kemampuan akademik.
              </p>

              <p className="mt-1 max-w-[570px] text-[16px] font-medium leading-[1.08] text-[#243A34] md:text-[17px]">
                Terus berprestasi dan menginspirasi!
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}