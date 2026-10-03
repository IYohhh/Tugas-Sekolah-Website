import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaClipboardList,
  FaFileAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaInfoCircle,
  FaUserPlus,
} from "react-icons/fa";

const tahapan = [
  {
    no: "01",
    title: "Isi formulir pendaftaran",
    text: "Calon siswa mengisi formulir pendaftaran dengan data pribadi yang valid sebagai langkah awal proses PPDB.",
  },
  {
    no: "02",
    title: "Lengkapi berkas",
    text: "Siapkan dan serahkan dokumen persyaratan sesuai panduan dari sekolah agar proses verifikasi berjalan lancar.",
  },
  {
    no: "03",
    title: "Verifikasi & seleksi",
    text: "Tim sekolah memeriksa kelengkapan data dan melaksanakan tahapan seleksi sesuai ketentuan yang berlaku.",
  },
  {
    no: "04",
    title: "Pengumuman & daftar ulang",
    text: "Hasil seleksi diumumkan oleh sekolah, dilanjutkan dengan proses daftar ulang bagi calon siswa yang diterima.",
  },
];

const persyaratan = [
  "Fotokopi rapor semester terakhir",
  "Fotokopi Kartu Keluarga (KK)",
  "Fotokopi Akta Kelahiran",
  "Pas foto calon siswa terbaru",
  "Surat keterangan lulus / ijazah (menyusul bila belum terbit)",
];

export const metadata = {
  title: "PPDB | SMA Pelita Harapan",
  description:
    "Informasi Penerimaan Peserta Didik Baru (PPDB) SMA Pelita Harapan.",
};

export default function PpdbPage() {
  return (
    <main className="min-h-screen bg-[#F5FAF8]">
      {/* ========================================================= */}
      {/* HERO / TITLE */}
      {/* ========================================================= */}
      <section className="px-6 pb-14 pt-32 md:px-10 md:pt-36 lg:px-14">
        <div className="mx-auto max-w-[1200px]">
          <div className="hero-enter max-w-[720px]">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full bg-[#E1F2EE] px-4 py-2 text-[12px] font-bold text-[#2C806C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D2EAE4]"
            >
              <FaArrowLeft className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Kembali ke Beranda
            </Link>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E1F2EE] px-4 py-2 text-[12px] font-semibold text-[#2C806C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2C806C]" />
              Penerimaan Peserta Didik Baru
            </div>

            <h1 className="mt-5 max-w-[640px] text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#163D32] sm:text-[40px] md:text-[48px] lg:text-[52px]">
              PPDB SMA Pelita Harapan
            </h1>

            <p className="mt-5 max-w-[600px] text-[14px] leading-6 text-[#668078] md:text-[16px] md:leading-7">
              Informasi pendaftaran calon siswa baru disajikan secara ringkas
              dan transparan. Jadwal, kuota, dan ketentuan resmi mengikuti
              pengumuman dari sekolah.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#tahapan"
                className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#EF8A7D] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(239,138,125,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E97C6E]"
              >
                Lihat Tahapan
                <FaArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/#contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-[#163D32]/15 bg-white px-6 py-3 text-sm font-semibold text-[#163D32] transition-all duration-300 hover:-translate-y-1 hover:border-[#163D32]/30 hover:bg-[#E1F2EE]/50"
              >
                <FaPhoneAlt className="h-3.5 w-3.5" />
                Hubungi Sekolah
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TAHAPAN PENDAFTARAN */}
      {/* ========================================================= */}
      <section
        id="tahapan"
        className="scroll-mt-28 bg-[#F5FAF8] px-6 pb-14 md:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[22px] bg-[#DFF1ED] p-6 shadow-[0_12px_30px_rgba(35,68,56,0.05)] md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#163D32] text-white">
                <FaClipboardList className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#2C806C]">
                  Alur Pendaftaran
                </p>
                <h2 className="mt-1 text-[22px] font-extrabold leading-tight text-[#163D32] md:text-[26px]">
                  Tahapan pendaftaran
                </h2>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tahapan.map((item) => (
                <div
                  key={item.no}
                  className="rounded-[17px] bg-[#F5FAF8] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_30px_rgba(35,68,56,0.10)]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#EF8A7D] text-[13px] font-extrabold text-white">
                    {item.no}
                  </span>
                  <h3 className="mt-4 text-[16px] font-extrabold leading-6 text-[#17362B]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-5 text-[#668078]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 flex items-start gap-2 text-[12px] leading-5 text-[#668078]">
              <FaInfoCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#2C806C]" />
              Alur di atas adalah gambaran umum. Tahapan resmi dapat
              disesuaikan mengikuti ketentuan PPDB yang diumumkan sekolah.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PERSYARATAN + JADWAL */}
      {/* ========================================================= */}
      <section className="bg-[#F5FAF8] px-6 pb-14 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[22px] bg-white p-6 shadow-[0_12px_30px_rgba(35,68,56,0.06)] md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E1F2EE] text-[#2C806C]">
                <FaFileAlt className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#668078]">
                  Berkas
                </p>
                <h2 className="mt-1 text-[22px] font-extrabold leading-tight text-[#163D32] md:text-[26px]">
                  Persyaratan umum
                </h2>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {persyaratan.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#2C806C]" />
                  <span className="text-[13px] leading-6 text-[#4B655D] md:text-[14px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 flex items-start gap-2 text-[12px] leading-5 text-[#668078]">
              <FaInfoCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#2C806C]" />
              Daftar berkas bersifat umum dan dapat dilengkapi atau diubah
              mengikuti pengumuman resmi dari sekolah.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[22px] bg-[#163D32] p-6 text-white shadow-[0_12px_30px_rgba(35,68,56,0.08)] md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#B9DCD2]">
                Jadwal & Kuota
              </p>
              <h2 className="mt-2 text-[22px] font-extrabold leading-tight md:text-[24px]">
                Mengikuti pengumuman resmi sekolah
              </h2>
              <p className="mt-4 text-[13px] leading-6 text-white/75">
                Jadwal gelombang pendaftaran, kuota, dan biaya akan
                diinformasikan langsung oleh sekolah melalui kanal resmi.
                Hubungi sekolah untuk mendapatkan informasi terbaru.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href="mailto:info@smapelitaharapan.sch.id"
                  className="flex items-center gap-3 rounded-[14px] bg-white/10 px-4 py-3 text-[13px] font-semibold text-white transition hover:bg-white/15"
                >
                  <FaEnvelope className="h-4 w-4 shrink-0 text-[#B9DCD2]" />
                  <span className="break-all">
                    info@smapelitaharapan.sch.id
                  </span>
                </a>
                <a
                  href="tel:+6281200000000"
                  className="flex items-center gap-3 rounded-[14px] bg-white/10 px-4 py-3 text-[13px] font-semibold text-white transition hover:bg-white/15"
                >
                  <FaPhoneAlt className="h-4 w-4 shrink-0 text-[#B9DCD2]" />
                  +62 812-0000-0000
                </a>
              </div>
            </div>

            <div className="rounded-[22px] bg-[#EF8A7D] px-6 py-7 text-white shadow-[0_15px_35px_rgba(239,138,125,0.20)] md:px-7">
              <h2 className="text-[22px] font-extrabold leading-tight md:text-[24px]">
                Siap mendaftar?
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-white/90">
                Sampaikan minat pendaftaran melalui kontak sekolah atau
                kunjungi langsung bagian administrasi pada jam pelayanan.
              </p>
              <Link
                href="/#contact-us"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-[14px] bg-white px-6 py-3 text-[12px] font-extrabold text-[#EF8A7D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF7F5]"
              >
                <FaUserPlus className="h-3.5 w-3.5" />
                Mulai Pendaftaran
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
