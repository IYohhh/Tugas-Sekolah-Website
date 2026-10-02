"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TestimoniPopup from "./components/TestimoniPopup";
import { getKegiatan, getGaleri } from "./lib/api";

import heroImage from "../assets/kegiatan1.jpg";
import kegiatan2 from "../assets/kegiatan2.jpg";
import kegiatan3 from "../assets/kegiatan3.jpg";
import logo from "../assets/logo_pelita-harapan-removebg.png";

export default function Home() {
  const [kegiatan, setKegiatan] = useState([]);
  const [loadingKegiatan, setLoadingKegiatan] = useState(true);
  const [errorKegiatan, setErrorKegiatan] = useState("");
  const [selectedTestimoni, setSelectedTestimoni] = useState(null);
  const [galeri, setGaleri] = useState([]);
  const [loadingGaleri, setLoadingGaleri] = useState(true);
  const [errorGaleri, setErrorGaleri] = useState("");

  const loadKegiatan = async () => {
    setLoadingKegiatan(true);
    setErrorKegiatan("");
    try {
      const data = await getKegiatan();
      setKegiatan(data);
    } catch (error) {
      setErrorKegiatan(
        error?.message || "Gagal memuat data kegiatan. Coba lagi nanti."
      );
    } finally {
      setLoadingKegiatan(false);
    }
  };

  const loadGaleri = async () => {
    setLoadingGaleri(true);
    setErrorGaleri("");
    try {
      const data = await getGaleri();
      setGaleri(data);
    } catch (error) {
      setErrorGaleri(
        error?.message || "Gagal memuat data galeri. Coba lagi nanti."
      );
    } finally {
      setLoadingGaleri(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fetch awal data kegiatan & galeri dari backend.
    loadKegiatan();
    loadGaleri();
  }, []);

  return (
    <main className="overflow-hidden bg-[#F5FAF8]">

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section
        id="beranda"
        className="relative min-h-screen overflow-hidden"
      >
        <Image
          src={heroImage}
          alt="Siswa SMA Pelita Harapan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex min-h-screen items-center px-8 pb-16 pt-32 md:px-16 lg:px-24">
          <div className="max-w-[600px]">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-white" />
              Website Kampus Modern
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[52px]">
              Sekolah yang
              <br />
              menginspirasi
              <br />
              generasi masa
              <br />
              depan
            </h1>

            <p className="mt-6 max-w-[590px] text-base font-normal leading-7 text-white/90 md:text-lg">
              Jelajahi program studi, kegiatan sekolah, dan proses PPDB
              dengan pengalaman yang lebih rapi, jelas, dan mudah digunakan.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="/#ppdb"
                className="rounded-[14px] bg-[#EF8A7D] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(239,138,125,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E97C6E]"
              >
                Lihat PPDB
              </Link>

              <Link
                href="/#galeri"
                className="rounded-[14px] border border-white/30 bg-black/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Jelajahi Galeri
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* TENTANG SEKOLAH */}
      {/* ========================================================= */}

      <section
        id="tentang"
        className="bg-[#F5FAF8] px-6 py-24 md:px-10 lg:px-14 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px]">

          <div className="mb-10 max-w-[760px]">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E1F2EE] px-4 py-2 text-[12px] font-semibold text-[#2C806C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2C806C]" />
              Tentang Sekolah
            </div>

            <h2 className="text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#163D32] md:text-[46px] lg:text-[50px]">
              Sekolah yang menyiapkan siswa
              <br />
              untuk belajar, berkarya, dan
              <br />
              berdampak.
            </h2>

            <p className="mt-5 max-w-[700px] text-[18px] font-normal leading-6 text-[#668078]">
              Sekolah SMA PELITA HARAPAN hadir sebagai ruang belajar yang
              modern, inklusif, dan berorientasi masa depan. Di sini,
              akademik, pengembangan diri, dan pengalaman nyata berjalan
              beriringan untuk membentuk lulusan yang siap berkontribusi.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* KOLOM KIRI */}
            <div className="flex flex-col gap-5">

              <div className="rounded-[20px] border border-[#7D918B] bg-[#DFF1ED] p-7 shadow-[0_12px_30px_rgba(35,68,56,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(35,68,56,0.10)]">

                <h3 className="max-w-[400px] text-[30px] font-extrabold leading-[1.15] text-[#163D32] md:text-[26px]">
                  Lebih dari sekadar tempat
                  <br />
                  belajar
                </h3>

                <p className="mt-5 text-[18px] font-normal leading-6 text-[#607870]">
                  Kami percaya bahwa pendidikan yang baik tidak hanya
                  menyampaikan ilmu, tetapi juga membangun karakter,
                  kreativitas, dan rasa percaya diri. Karena itu, setiap
                  program dirancang agar siswa bisa berkembang secara
                  akademik maupun personal.
                </p>

                <p className="mt-4 text-[18px] font-normal leading-6 text-[#607870]">
                  Dengan fasilitas yang mendukung, kegiatan sekolah yang
                  beragam, dan proses PPDB yang lebih transparan, sekolah
                  terus berupaya menjadi pilihan terbaik bagi generasi yang
                  ingin belajar dengan pengalaman lebih rapi, jelas, dan
                  relevan.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <span className="rounded-full bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#3C8977]">
                    Kurikulum relevan
                  </span>

                  <span className="rounded-full bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#3C8977]">
                    Lingkungan inklusif
                  </span>

                  <span className="rounded-full bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#3C8977]">
                    Fokus pada masa depan
                  </span>
                </div>

              </div>


              <div className="rounded-[20px] bg-[#163D32] p-7 text-white shadow-[0_12px_30px_rgba(35,68,56,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(35,68,56,0.15)]">

                <p className="text-[15px] font-semibold text-[#B9DCD2]">
                  Visi Sekolah
                </p>

                <h3 className="mt-4 max-w-[450px] text-[24px] font-extrabold leading-[1.3] md:text-[26px]">
                  Menjadi sekolah yang melahirkan
                  generasi inovatif, berakhlak, dan
                  siap menghadapi perubahan zaman.
                </h3>

                <p className="mt-5 max-w-[520px] text-[15px] font-normal leading-6 text-white/75">
                  Melalui pembelajaran yang inspiratif dan ekosistem sekolah
                  yang mendukung, kami terus membangun fondasi agar setiap
                  siswa bisa tumbuh menjadi pemimpin dan pemikir masa depan.
                </p>

              </div>

            </div>


            {/* KOLOM KANAN */}
            <div className="flex flex-col gap-6">

              <div className="group relative h-[320px] overflow-hidden rounded-[20px] shadow-[0_15px_35px_rgba(35,68,56,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(35,68,56,0.16)]">

                <Image
                  src={kegiatan2}
                  alt="Fasilitas dan suasana sekolah"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                <div className="absolute left-0 top-5 flex items-center">

                  <span className="relative z-20 h-4 w-4 shrink-0 rounded-full bg-white shadow-[0_3px_10px_rgba(0,0,0,0.08)]" />

                  <div className="-ml-1 rounded-r-[28px] rounded-l-[28px] bg-white/15 px-5 py-2 backdrop-blur-md">
                    <p className="text-[12px] font-bold text-[#111111]">
                      Ruang belajar yang inspiratif
                    </p>
                  </div>

                </div>

                <div className="absolute bottom-5 left-5 right-5 transition-all duration-500 group-hover:-translate-y-1">

                  <h3 className="text-[27px] font-bold leading-[1.12] text-[#17362B] md:text-[30px]">
                    Lingkungan belajar yang
                    <br />
                    nyaman dan inspiratif.
                  </h3>

                  <p className="mt-3 max-w-[550px] text-[13px] font-medium leading-5 text-[#17362B] md:text-[14px]">
                    Ruang belajar, area diskusi, dan berbagai fasilitas
                    sekolah dirancang untuk menciptakan suasana yang nyaman
                    sehingga siswa dapat belajar, berdiskusi, dan
                    mengembangkan ide dengan lebih leluasa.
                  </p>

                </div>

              </div>


              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                <div className="group rounded-[20px] bg-[#F0D8D1] p-6 shadow-[0_12px_25px_rgba(35,68,56,0.06)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_35px_rgba(35,68,56,0.14)]">

                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#E1F2EE] text-[18px] font-bold text-[#2C806C] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    03
                  </span>

                  <h3 className="mt-4 text-[17px] font-extrabold leading-6 text-[#17362B]">
                    PPDB transparan
                  </h3>

                  <p className="mt-3 text-[15px] leading-5 text-[#698078]">
                    Informasi pendaftaran, tahapan seleksi, dan kebutuhan
                    calon siswa tersaji lebih jelas sehingga proses masuk
                    sekolah terasa lebih mudah.
                  </p>

                </div>


                <div className="group rounded-[20px] bg-[#F0D8D1] p-6 shadow-[0_12px_25px_rgba(35,68,56,0.06)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_35px_rgba(35,68,56,0.14)]">

                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#E1F2EE] text-[15px] font-bold text-[#2C806C] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    04
                  </span>

                  <h3 className="mt-4 text-[17px] font-extrabold leading-6 text-[#17362B]">
                    Lingkungan
                    <br />
                    kolaboratif
                  </h3>

                  <p className="mt-3 text-[15px] leading-5 text-[#698078]">
                    Siswa didorong untuk saling berkolaborasi, berdiskusi,
                    dan belajar bersama dalam ekosistem sekolah yang hangat
                    dan mendukung.
                  </p>

                </div>

              </div>


              <div className="flex justify-center">

                <div className="group w-[270px] rounded-[20px] bg-[#F0D8D1] p-6 shadow-[0_12px_25px_rgba(35,68,56,0.06)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_35px_rgba(35,68,56,0.14)]">

                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#E1F2EE] text-[15px] font-bold text-[#2C806C] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    02
                  </span>

                  <h3 className="mt-4 text-[17px] font-extrabold leading-6 text-[#17362B]">
                    120+ kegiatan
                    <br />
                    tahunan
                  </h3>

                  <p className="mt-3 text-[15px] leading-5 text-[#698078]">
                    Peluang untuk mengembangkan soft skill, kreativitas,
                    kepemimpinan, dan jaringan melalui kegiatan akademik
                    maupun non-akademik.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* KEGIATAN SEKOLAH */}
      {/* ========================================================= */}

      <section
        id="kegiatan-sekolah"
        className="bg-[#F5FAF8] px-6 pb-24 pt-8 md:px-10 lg:px-14 lg:pb-28"
      >
        <div className="mx-auto max-w-[1200px]">

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">

            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E1F2EE] px-4 py-2 text-[12px] font-semibold text-[#2C806C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2C806C]" />
                Kegiatan Sekolah
              </div>

              <h2 className="max-w-[560px] text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#163D32] md:text-[46px] lg:text-[50px]">
                Kegiatan yang memperkaya
                <br />
                pengalaman belajar di luar
                <br />
                kelas.
              </h2>

              <p className="mt-4 max-w-[620px] text-[14px] leading-6 text-[#668078]">
                Dari akademik, seni, olahraga, hingga pengembangan diri,
                setiap kegiatan dirancang agar siswa bisa terus belajar,
                bereksplorasi, dan tumbuh bersama.
              </p>

            </div>


            <div className="relative mt-2 h-[175px] md:h-[195px]">

              <div className="absolute left-0 top-0 h-[115px] w-[48%] overflow-hidden rounded-[18px] md:h-[130px]">
                <Image
                  src={heroImage}
                  alt="Kegiatan siswa SMA Pelita Harapan"
                  fill
                  sizes="(max-width: 768px) 48vw, 300px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="absolute right-0 top-0 h-[115px] w-[48%] overflow-hidden rounded-[18px] md:h-[130px]">
                <Image
                  src={kegiatan2}
                  alt="Kegiatan sekolah SMA Pelita Harapan"
                  fill
                  sizes="(max-width: 768px) 48vw, 300px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 left-[32%] h-[115px] w-[40%] overflow-hidden rounded-[18px] md:h-[130px]">
                <Image
                  src={kegiatan3}
                  alt="Aktivitas siswa SMA Pelita Harapan"
                  fill
                  sizes="(max-width: 768px) 40vw, 250px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

            </div>

          </div>


          <div className="relative mt-10">

            <div className="overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

              <div className="flex w-max snap-x snap-mandatory gap-5 pr-2">

                {loadingKegiatan ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="flex h-[260px] w-[300px] items-center justify-center rounded-[20px] bg-[#F0D8D1]"
                  >
                    <p className="text-sm font-semibold text-[#2C806C]">
                      Memuat kegiatan...
                    </p>
                  </div>
                ) : errorKegiatan ? (
                  <div
                    role="alert"
                    className="flex h-[260px] w-[300px] flex-col items-center justify-center gap-3 rounded-[20px] bg-[#F0D8D1] p-6 text-center"
                  >
                    <p className="text-sm font-semibold text-[#163D32]">
                      {errorKegiatan}
                    </p>
                    <button
                      type="button"
                      onClick={loadKegiatan}
                      className="rounded-full bg-[#163D32] px-5 py-2 text-xs font-bold text-white transition hover:bg-[#234438]"
                    >
                      Coba lagi
                    </button>
                  </div>
                ) : kegiatan.length === 0 ? (
                  <div className="flex h-[260px] w-[300px] items-center justify-center rounded-[20px] bg-[#F0D8D1] p-6 text-center">
                    <p className="text-sm font-semibold text-[#2C806C]">
                      Belum ada kegiatan saat ini.
                    </p>
                  </div>
                ) : (
                  kegiatan.map((item, index) => (
                    <Link
                      key={item.id}
                      href={`/detail-kegiatan?id=${item.id}`}
                      className="group relative block h-[260px] w-[285px] shrink-0 snap-start overflow-hidden rounded-[20px] bg-[#F0D8D1] p-6 shadow-[0_12px_25px_rgba(35,68,56,0.05)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_22px_40px_rgba(35,68,56,0.14)] md:w-[300px]"
                    >

                      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/20 transition-transform duration-700 ease-out group-hover:scale-150" />

                      <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#E1F2EE] text-[11px] font-bold text-[#2C806C] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="relative z-10 mt-6 text-[20px] font-extrabold leading-[1.35] text-[#163D32]">
                        {item.judul}
                      </h3>

                      <p className="relative z-10 mt-4 line-clamp-3 text-[12px] leading-6 text-[#698078]">
                        {item.deskripsi}
                      </p>

                      <span className="absolute bottom-5 right-6 text-[11px] font-bold text-[#2C806C] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        Lihat detail →
                      </span>

                    </Link>
                  ))
                )}

              </div>

            </div>

            <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-20 bg-gradient-to-l from-[#F5FAF8] to-transparent md:block" />

          </div>


          <div className="mt-6 rounded-[22px] bg-[#DFF1ED] px-7 py-7 shadow-[0_12px_30px_rgba(35,68,56,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(35,68,56,0.10)] md:px-9 md:py-8">

            <h3 className="max-w-[700px] text-[24px] font-extrabold leading-[1.2] text-[#163D32] md:text-[27px]">
              Setiap kegiatan dirancang untuk
              <br />
              belajar aktif dan berkembang.
            </h3>

            <p className="mt-4 max-w-[700px] text-[14px] leading-6 text-[#668078] md:text-[15px]">
              Kami menggabungkan kegiatan akademik, kreatif, dan sosial agar
              siswa tidak hanya siap menghadapi ujian, tetapi juga siap
              menghadapi dunia nyata dengan percaya diri.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Akademik",
                "Seni & budaya",
                "Olahraga",
                "Kepemimpinan",
                "Kegiatan sosial",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/80 px-4 py-2 text-[10px] font-semibold text-[#3C8977]"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* PPDB */}
      {/* ========================================================= */}

      <section
        id="ppdb"
        className="bg-[#F5FAF8] px-6 pb-24 pt-8 md:px-10 lg:px-14 lg:pb-28"
      >
        <div className="mx-auto max-w-[1200px]">

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.35fr_0.65fr]">

            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E1F2EE] px-4 py-2 text-[12px] font-semibold text-[#3C8977]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3C8977]" />
                Pendaftaran PPDB
              </div>

              <h2 className="max-w-[720px] text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#17362B] md:text-[48px] lg:text-[52px]">
                PPDB yang jelas, transparan,
                <br />
                dan mudah diikuti calon siswa.
              </h2>

              <p className="mt-5 max-w-[680px] text-[15px] leading-6 text-[#668078] md:text-[16px]">
                Informasi penting pendaftaran, alur seleksi, dan kebutuhan
                berkas tersaji rapi agar calon siswa dan orang tua bisa
                mengambil keputusan dengan lebih yakin.
              </p>

            </div>


            <div className="flex justify-center lg:justify-end">

              <div className="group relative flex h-[220px] w-[220px] items-center justify-center">

                <div className="absolute inset-0 rounded-full bg-[#E1F2EE]/60 blur-2xl transition-all duration-500 group-hover:scale-110" />

                <Image
                  src={logo}
                  alt="Logo SMA Pelita Harapan"
                  width={220}
                  height={220}
                  className="relative z-10 object-contain transition-transform duration-500 group-hover:rotate-2"
                />

              </div>

            </div>

          </div>


          <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-[1.6fr_1fr]">

            <div className="rounded-[22px] bg-[#DFF1ED] p-6 shadow-[0_12px_30px_rgba(35,68,56,0.05)] md:p-7">

              <h3 className="max-w-[650px] text-[25px] font-extrabold leading-[1.15] text-[#17362B] md:text-[27px]">
                Alur pendaftaran yang dirancang lebih
                <br className="hidden md:block" />
                mudah dipahami
              </h3>

              <p className="mt-3 max-w-[700px] text-[14px] leading-6 text-[#668078] md:text-[15px]">
                Calon siswa dapat mengikuti proses PPDB dengan langkah yang
                terstruktur, mulai dari pembuatan akun, pengisian data,
                pengunggahan berkas, hingga pemeriksaan kelengkapan
                administrasi.
              </p>


              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">

                {[
                  {
                    no: "01",
                    title: "Daftar akun",
                    text: "Buat akun calon siswa dan lengkapi data pribadi sebagai awal proses pendaftaran.",
                  },
                  {
                    no: "02",
                    title: "Unggah berkas",
                    text: "Lengkapi formulir pendaftaran dan unggah dokumen yang diperlukan sesuai panduan.",
                  },
                  {
                    no: "03",
                    title: "Verifikasi & seleksi",
                    text: "Tim sekolah akan memeriksa kelengkapan data dan menyampaikan hasil seleksi secara transparan.",
                  },
                ].map((item) => (
                  <div
                    key={item.no}
                    className="group rounded-[17px] bg-[#F5FAF8] p-5 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_15px_30px_rgba(35,68,56,0.10)]"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#EF8A7D] text-[13px] font-extrabold text-white">
                      {item.no}
                    </span>

                    <h4 className="mt-4 text-[17px] font-extrabold leading-5 text-[#17362B]">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-[12px] leading-5 text-[#668078]">
                      {item.text}
                    </p>
                  </div>
                ))}

              </div>

            </div>


            <div className="rounded-[22px] bg-[#163D32] p-6 text-white shadow-[0_12px_30px_rgba(35,68,56,0.08)] md:p-7">

              <p className="text-[11px] font-semibold text-[#B9DCD2]">
                Informasi Pendaftaran
              </p>

              <h3 className="mt-4 text-[25px] font-extrabold leading-[1.2] md:text-[27px]">
                Semua informasi penting
                <br />
                PPDB ada di satu tempat.
              </h3>

              <p className="mt-4 text-[13px] leading-5 text-white/75">
                Calon siswa dapat melihat jadwal, persyaratan, dan tahapan
                seleksi tanpa harus mencari informasi dari beberapa halaman
                berbeda.
              </p>

              {[
                "Jadwal pendaftaran, seleksi, dan pengumuman tersedia secara jelas.",
                "Persyaratan berkas dan alur verifikasi mudah dipahami calon siswa.",
                "Proses pendaftaran dirancang transparan, rapi, dan lebih cepat.",
              ].map((item) => (
                <div key={item} className="mt-4 flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#EF8A7D]" />
                  <p className="text-[12px] font-semibold leading-5 text-white">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>


          <div className="mt-7 rounded-[22px] bg-[#EF8A7D] px-6 py-7 text-white shadow-[0_15px_35px_rgba(239,138,125,0.20)] md:px-7 md:py-8">

            <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-[1fr_auto]">

              <div>

                <h3 className="text-[25px] font-extrabold leading-[1.2] md:text-[27px]">
                  Siap bergabung dengan SMA Pelita Harapan?
                </h3>

                <p className="mt-3 max-w-[650px] text-[13px] leading-6 text-white/90 md:text-[14px]">
                  Jangan lewatkan proses PPDB tahun ini. Lengkapi pendaftaran
                  sekarang untuk mengamankan proses seleksi dan mendapatkan
                  informasi terbaru langsung dari sekolah.
                </p>

              </div>

              <div className="flex flex-col items-start gap-3 lg:items-end">

                <Link
                  href="/#ppdb"
                  className="rounded-[14px] bg-white px-6 py-3 text-[12px] font-extrabold text-[#EF8A7D] shadow-[0_8px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#FFF7F5]"
                >
                  Daftar PPDB Sekarang
                </Link>

                <p className="text-[10px] font-medium text-white/90">
                  Pendaftaran dibuka hingga kuota terpenuhi
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* GALERI */}
      {/* ========================================================= */}

      <section
        id="galeri"
        className="bg-[#F5FAF8] px-6 pb-24 pt-24 md:px-10 lg:px-14 lg:pb-28"
      >
        <div className="mx-auto max-w-[1200px]">

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">

            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#E1F2EE] px-4 py-2 text-[12px] font-semibold text-[#2C806C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2C806C]" />
                Galeri Sekolah
              </div>

              <h2 className="max-w-[650px] text-[44px] font-extrabold leading-[1.08] tracking-tight text-[#163D32] md:text-[50px] lg:text-[56px]">
                Galeri momen belajar,
                <br />
                kreativitas, dan
                <br />
                kebersamaan sekolah.
              </h2>

              <p className="mt-6 max-w-[700px] text-[15px] leading-6 text-[#668078] md:text-[16px]">
                Dari suasana kelas, kegiatan siswa, olahraga, seni, hingga
                kebersamaan sekolah, setiap dokumentasi menampilkan sisi nyata
                dari kehidupan belajar yang inspiratif.
              </p>

            </div>


            <div className="rounded-[22px] bg-[#163D32] p-8 text-white shadow-[0_15px_35px_rgba(35,68,56,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(35,68,56,0.18)]">

              <p className="text-[12px] font-semibold text-[#B9DCD2]">
                Dokumentasi Sekolah
              </p>

              <h3 className="mt-5 max-w-[500px] text-[27px] font-extrabold leading-[1.2]">
                Lihat suasana sekolah
                <br />
                dari berbagai aktivitas
                <br />
                nyata.
              </h3>

              <p className="mt-5 max-w-[520px] text-[13px] leading-6 text-white/75">
                Galeri ini menampilkan dokumentasi suasana belajar, kegiatan
                siswa, olahraga, seni, dan kebersamaan yang menjadi bagian
                dari pengalaman bersama.
              </p>

            </div>

          </div>


          <div className="-mx-6 mt-14 overflow-x-auto px-6 pb-5 md:-mx-10 md:px-10 lg:-mx-14 lg:px-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            {loadingGaleri ? (
              <div className="flex w-max gap-5">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex h-[375px] w-[82vw] max-w-[450px] shrink-0 items-center justify-center rounded-[22px] bg-[#DFF1ED]"
                  >
                    <p className="text-sm font-semibold text-[#2C806C]">
                      Memuat galeri...
                    </p>
                  </div>
                ))}
              </div>
            ) : errorGaleri ? (
              <div className="flex w-max gap-5">
                <div
                  role="alert"
                  className="flex h-[375px] w-[82vw] max-w-[450px] shrink-0 flex-col items-center justify-center gap-3 rounded-[22px] bg-[#F0D8D1] p-6 text-center"
                >
                  <p className="text-sm font-semibold text-[#163D32]">
                    {errorGaleri}
                  </p>
                  <button
                    type="button"
                    onClick={loadGaleri}
                    className="rounded-full bg-[#163D32] px-5 py-2 text-xs font-bold text-white transition hover:bg-[#234438]"
                  >
                    Coba lagi
                  </button>
                </div>
              </div>
            ) : galeri.length === 0 ? (
              <div className="flex w-max gap-5">
                <div className="flex h-[375px] w-[82vw] max-w-[450px] shrink-0 items-center justify-center rounded-[22px] bg-[#DFF1ED]">
                  <p className="text-sm font-semibold text-[#2C806C]">
                    Belum ada galeri saat ini.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex w-max gap-5">
                {galeri.map((item, index) => (
                  <div
                    key={item.id}
                    className="group relative h-[375px] w-[82vw] max-w-[450px] shrink-0 overflow-hidden rounded-[22px] shadow-[0_15px_35px_rgba(35,68,56,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_45px_rgba(35,68,56,0.18)] sm:w-[450px]"
                  >
                    <Image
                      src={item.gambar}
                      alt={item.judul}
                      fill
                      sizes="(max-width: 768px) 85vw, 450px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D35] via-[#0B3D35]/20 to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-[11px] font-semibold text-white backdrop-blur-md">
                      Prestasi
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-[24px] font-extrabold leading-[1.15] text-white">
                        {item.judul}
                      </h3>

                      <p className="mt-3 text-[12px] leading-5 text-white/80">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>


          <div className="mt-10 rounded-[22px] bg-[#DFF1ED] px-7 py-7 shadow-[0_12px_30px_rgba(35,68,56,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(35,68,56,0.10)] md:px-9 md:py-8">

            <h3 className="max-w-[700px] text-[24px] font-extrabold leading-[1.2] text-[#163D32] md:text-[27px]">
              Galeri yang menampilkan sisi nyata dari
              <br className="hidden md:block" />
              kehidupan sekolah.
            </h3>

            <p className="mt-4 max-w-[700px] text-[13px] leading-6 text-[#668078] md:text-[14px]">
              Dokumentasi ini membantu calon siswa dan orang tua memahami
              atmosfer belajar, dinamika kegiatan, serta kebersamaan yang
              menjadi ciri SMA Pelita Harapan.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Suasana belajar",
                "Kegiatan siswa",
                "Olahraga",
                "Seni",
                "Kebersamaan sekolah",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/80 px-4 py-2 text-[10px] font-semibold text-[#3C8977]"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* TESTIMONI */}
      {/* ========================================================= */}

      <section
        id="testimoni"
        className="bg-[#F5FAF8] px-6 pb-28 pt-28 md:px-10 md:pb-32 md:pt-32 lg:px-14 lg:pb-36 lg:pt-36"
      >
        <div className="mx-auto max-w-[1200px]">

          <div className="mb-16">

            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#E1F2EE] px-4 py-2 text-[12px] font-semibold text-[#3C8977]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3C8977]" />
              Testimoni
            </div>

            <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_0.65fr]">

              <div>

                <h2 className="max-w-[700px] text-[42px] font-extrabold leading-[1.08] tracking-tight text-[#163D32] md:text-[50px] lg:text-[56px]">
                  Cerita dari mereka
                  <br />
                  yang pernah bersama
                  <br />
                  kami.
                </h2>

              </div>

              <div className="pb-2">

                <p className="max-w-[470px] text-[14px] leading-6 text-[#668078] md:text-[15px]">
                  Pengalaman belajar tidak hanya tentang pelajaran di kelas.
                  Berikut beberapa cerita dan kesan dari siswa, orang tua,
                  serta warga sekolah yang pernah menjadi bagian dari
                  perjalanan SMA Pelita Harapan.
                </p>

              </div>

            </div>

          </div>


          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                nama: "Bapak Andi Setiawan",
                displayName: (
                  <>
                    Bapak Andi
                    <br />
                    Setiawan
                  </>
                ),
                peran: "Orang Tua Siswa",
                isi: "Lingkungan sekolah terasa nyaman dan komunikasinya dengan orang tua juga cukup baik. Saya melihat perkembangan anak menjadi lebih percaya diri.",
              },
              {
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                nama: "Ibu Rina Kartika",
                displayName: (
                  <>
                    Ibu Rina
                    <br />
                    Kartika
                  </>
                ),
                peran: "Orang Tua Siswa",
                isi: "Banyak kegiatan yang membantu siswa menemukan minat dan bakatnya. Anak saya menjadi lebih aktif mengikuti kegiatan sekolah.",
              },
              {
                image: "https://randomuser.me/api/portraits/men/46.jpg",
                nama: "Bapak Dedi Pratama",
                displayName: (
                  <>
                    Bapak Dedi
                    <br />
                    Pratama
                  </>
                ),
                peran: "Guru",
                isi: "Kami berusaha menciptakan pembelajaran yang membuat siswa berani bertanya, mencoba hal baru, dan bekerja sama dengan teman.",
              },
              {
                image: "https://randomuser.me/api/portraits/men/52.jpg",
                nama: "Bapak Arif Hidayat",
                displayName: (
                  <>
                    Bapak Arif
                    <br />
                    Hidayat
                  </>
                ),
                peran: "Orang Tua Siswa",
                isi: "Saya senang melihat anak mendapatkan kesempatan untuk mengikuti berbagai aktivitas di sekolah. Tidak hanya belajar, tetapi juga belajar bekerja dalam tim.",
              },
              {
                image: "https://randomuser.me/api/portraits/women/65.jpg",
                nama: "Ibu Siti Nurhaliza",
                displayName: (
                  <>
                    Ibu Siti
                    <br />
                    Nurhaliza
                  </>
                ),
                peran: "Wali Murid",
                isi: "Komunikasi sekolah dengan orang tua cukup membantu. Informasi kegiatan dan perkembangan siswa juga disampaikan dengan jelas.",
              },
              {
                image: "https://randomuser.me/api/portraits/men/68.jpg",
                nama: "Bapak Rizky Maulana",
                displayName: (
                  <>
                    Bapak Rizky
                    <br />
                    Maulana
                  </>
                ),
                peran: "Alumni",
                isi: "Pengalaman selama sekolah memberi saya banyak kesempatan untuk mencoba hal baru dan membangun rasa percaya diri.",
              },
            ].map((item) => (
              <div
                key={item.nama}
                role="button"
                tabIndex={0}
                aria-label={`Baca testimoni ${item.nama}`}
                onClick={() => setSelectedTestimoni(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedTestimoni(item);
                  }
                }}
                className="group relative cursor-pointer overflow-hidden rounded-[22px] bg-[#F0D8D1] p-7 shadow-[0_12px_30px_rgba(35,68,56,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_40px_rgba(35,68,56,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C806C]"
              >

                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/20 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative z-10 flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.nama}
                    loading="lazy"
                    onError={(e) => {
                      // Fallback kalau foto eksternal gagal dimuat.
                      e.currentTarget.src = "/file.svg";
                    }}
                    className="h-[82px] w-[82px] shrink-0 rounded-full bg-white object-cover ring-4 ring-white/70"
                  />

                  <div>

                    <h3 className="text-[16px] font-extrabold leading-6 text-[#28628A]">
                      {item.displayName}
                    </h3>

                    <p className="mt-1 text-[11px] font-medium text-[#668078]">
                      {item.peran}
                    </p>

                  </div>

                </div>

                <div className="relative z-10 mt-6">

                  <span className="text-[30px] font-extrabold leading-none text-[#3C8977]">
                    “
                  </span>

                  <p className="-mt-1 text-[13px] leading-6 text-[#5E716B]">
                    {item.isi}
                  </p>

                </div>

                <div className="relative z-10 mt-5 flex items-center justify-between">

                  <span className="text-[11px] font-semibold text-[#3C8977]">
                    {item.peran}
                  </span>

                  <span className="text-[12px] font-medium text-[#163D32]">
                    Read More ›
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* CONTACT US */}
      {/* ========================================================= */}

      <section
        id="contact-us"
        className="bg-[#F5FAF8] px-6 pb-28 pt-16 md:px-10 md:pb-32 lg:px-14 lg:pb-36"
      >
        <div className="mx-auto max-w-[1200px]">

          {/* HEADER */}

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1fr_0.65fr]">

            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#E1F2EE] px-4 py-2 text-[12px] font-semibold text-[#3C8977]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3C8977]" />
                Contact Us
              </div>

              <h2 className="max-w-[720px] text-[42px] font-extrabold leading-[1.08] tracking-tight text-[#163D32] md:text-[50px] lg:text-[56px]">
                Punya pertanyaan?
                <br />
                Mari terhubung dengan
                <br />
                kami.
              </h2>

            </div>

            <div className="pb-2">

              <p className="max-w-[480px] text-[14px] leading-6 text-[#668078] md:text-[15px]">
                Kami siap membantu calon siswa, orang tua, maupun masyarakat
                yang ingin mendapatkan informasi lebih lanjut mengenai SMA
                Pelita Harapan.
              </p>

            </div>

          </div>


          {/* CONTENT */}

          <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-[0.85fr_1.15fr]">

            {/* INFORMASI KONTAK */}

            <div className="rounded-[22px] bg-[#163D32] p-7 text-white shadow-[0_15px_35px_rgba(35,68,56,0.10)] md:p-8">

              <p className="text-[12px] font-semibold text-[#B9DCD2]">
                Informasi Sekolah
              </p>

              <h3 className="mt-4 text-[28px] font-extrabold leading-[1.2]">
                Kami senang
                <br />
                mendengar dari Anda.
              </h3>

              <p className="mt-5 text-[13px] leading-6 text-white/75">
                Jangan ragu untuk menghubungi kami apabila membutuhkan
                informasi mengenai sekolah, PPDB, kegiatan, maupun proses
                pendaftaran siswa baru.
              </p>


              {/* ALAMAT */}

              <div className="mt-8 flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E1F2EE] text-[#2C806C]">

                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>

                </div>

                <div>

                  <p className="text-[11px] font-semibold text-[#B9DCD2]">
                    Alamat
                  </p>

                  <p className="mt-1 text-[13px] leading-5 text-white/80">
                    SMA Pelita Harapan
                    <br />
                    Alamat sekolah dapat diisi di sini
                  </p>

                </div>

              </div>


              {/* EMAIL */}

              <div className="mt-6 flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E1F2EE] text-[#2C806C]">

                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>

                </div>

                <div>

                  <p className="text-[11px] font-semibold text-[#B9DCD2]">
                    Email
                  </p>

                  <p className="mt-1 text-[13px] text-white/80">
                    info@smapelitaharapan.sch.id
                  </p>

                </div>

              </div>


              {/* TELEPON */}

              <div className="mt-6 flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E1F2EE] text-[#2C806C]">

                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>

                </div>

                <div>

                  <p className="text-[11px] font-semibold text-[#B9DCD2]">
                    Telepon
                  </p>

                  <p className="mt-1 text-[13px] text-white/80">
                    +62 812-0000-0000
                  </p>

                </div>

              </div>


              {/* JAM PELAYANAN */}

              <div className="mt-8 rounded-[17px] bg-white/10 p-5">

                <p className="text-[11px] font-semibold text-[#B9DCD2]">
                  Jam Pelayanan
                </p>

                <p className="mt-2 text-[13px] leading-5 text-white/80">
                  Senin – Jumat
                  <br />
                  08.00 – 15.00 WIB
                </p>

              </div>

            </div>


            {/* FORM */}

            <div className="rounded-[22px] bg-[#DFF1ED] p-7 shadow-[0_15px_35px_rgba(35,68,56,0.06)] md:p-8">

              <div className="mb-7">

                <p className="text-[12px] font-semibold text-[#3C8977]">
                  Kirim Pesan
                </p>

                <h3 className="mt-3 text-[27px] font-extrabold leading-[1.2] text-[#163D32]">
                  Ada yang ingin
                  <br />
                  ditanyakan?
                </h3>

              </div>


              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  alert(
                    "Pesan berhasil disiapkan. Form ini nantinya dapat disambungkan ke backend Contact Us."
                  );
                }}
                className="space-y-5"
              >

                {/* NAMA */}

                <div>

                  <label
                    htmlFor="contact-nama"
                    className="mb-2 block text-[12px] font-bold text-[#365B50]"
                  >
                    Nama Lengkap
                  </label>

                  <input
                    id="contact-nama"
                    type="text"
                    name="nama"
                    placeholder="Masukkan nama lengkap"
                    required
                    className="w-full rounded-[14px] border border-[#BFD8D1] bg-[#F5FAF8] px-4 py-3 text-[13px] text-[#163D32] outline-none transition-all duration-300 placeholder:text-[#9BAFA9] focus:border-[#3C8977] focus:bg-white focus:ring-2 focus:ring-[#3C8977]/10"
                  />

                </div>


                {/* EMAIL */}

                <div>

                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-[12px] font-bold text-[#365B50]"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="contoh@email.com"
                    required
                    className="w-full rounded-[14px] border border-[#BFD8D1] bg-[#F5FAF8] px-4 py-3 text-[13px] text-[#163D32] outline-none transition-all duration-300 placeholder:text-[#9BAFA9] focus:border-[#3C8977] focus:bg-white focus:ring-2 focus:ring-[#3C8977]/10"
                  />

                </div>


                {/* SUBJEK */}

                <div>

                  <label
                    htmlFor="contact-subjek"
                    className="mb-2 block text-[12px] font-bold text-[#365B50]"
                  >
                    Subjek
                  </label>

                  <select
                    id="contact-subjek"
                    name="subjek"
                    required
                    defaultValue=""
                    className="w-full rounded-[14px] border border-[#BFD8D1] bg-[#F5FAF8] px-4 py-3 text-[13px] text-[#163D32] outline-none transition-all duration-300 focus:border-[#3C8977] focus:bg-white focus:ring-2 focus:ring-[#3C8977]/10"
                  >
                    <option value="" disabled>
                      Pilih topik
                    </option>

                    <option value="ppdb">
                      Informasi PPDB
                    </option>

                    <option value="pendaftaran">
                      Pendaftaran Siswa Baru
                    </option>

                    <option value="sekolah">
                      Informasi Sekolah
                    </option>

                    <option value="lainnya">
                      Pertanyaan Lainnya
                    </option>
                  </select>

                </div>


                {/* PESAN */}

                <div>

                  <label
                    htmlFor="contact-pesan"
                    className="mb-2 block text-[12px] font-bold text-[#365B50]"
                  >
                    Pesan
                  </label>

                  <textarea
                    id="contact-pesan"
                    name="pesan"
                    rows={5}
                    placeholder="Tuliskan pertanyaan atau pesan Anda..."
                    required
                    className="w-full resize-none rounded-[14px] border border-[#BFD8D1] bg-[#F5FAF8] px-4 py-3 text-[13px] leading-6 text-[#163D32] outline-none transition-all duration-300 placeholder:text-[#9BAFA9] focus:border-[#3C8977] focus:bg-white focus:ring-2 focus:ring-[#3C8977]/10"
                  />

                </div>


                {/* BUTTON */}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#EF8A7D] px-6 py-3.5 text-[13px] font-extrabold text-white shadow-[0_8px_20px_rgba(239,138,125,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E97C6E] hover:shadow-[0_12px_25px_rgba(239,138,125,0.28)]"
                >
                  Kirim Pesan

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </button>

              </form>

            </div>

          </div>


          {/* PENUTUP */}

          <div className="mt-7 rounded-[22px] bg-[#F0D8D1] px-7 py-7 shadow-[0_12px_30px_rgba(35,68,56,0.05)] md:px-9 md:py-8">

            <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[1fr_auto]">

              <div>

                <h3 className="text-[23px] font-extrabold leading-[1.2] text-[#163D32] md:text-[26px]">
                  Butuh informasi tentang PPDB?
                </h3>

                <p className="mt-3 max-w-[650px] text-[13px] leading-6 text-[#668078]">
                  Tim kami siap membantu menjawab pertanyaan mengenai
                  pendaftaran, persyaratan, berkas, dan tahapan seleksi siswa
                  baru.
                </p>

              </div>

              <Link
                href="/#ppdb"
                className="inline-flex items-center justify-center rounded-[14px] bg-[#163D32] px-6 py-3 text-[12px] font-extrabold text-white shadow-[0_8px_18px_rgba(35,68,56,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#234438]"
              >
                Lihat Informasi PPDB →
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* POPUP TESTIMONI */}
      {/* ========================================================= */}

      {selectedTestimoni && (
        <TestimoniPopup
          testimoni={selectedTestimoni}
          onClose={() => setSelectedTestimoni(null)}
        />
      )}

    </main>
  );
}