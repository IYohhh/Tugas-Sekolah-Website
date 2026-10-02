import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logo_pelita-harapan-removebg.png";

export default function Footer() {
  return (
    <footer className="bg-[#1F493E] px-6 pb-8 pt-12 text-white md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_0.8fr] lg:gap-12">

        {/* LOGO DAN IDENTITAS */}
        <div>
          <Image
            src={logo}
            alt="Logo SMA Pelita Harapan"
            width={80}
            height={80}
            className="h-[80px] w-[80px] object-contain"
          />
          <h2 className="mt-5 text-[18px] font-bold text-white">
            SMA PELITA HARAPAN
          </h2>
          <p className="mt-1 text-[13px] font-medium text-white/80">
            Knowledge, Faith &amp; Character
          </p>

          <p className="mt-5 text-[13px] font-semibold leading-6 text-white/90">
            MH Thamrin Boulevard 1100
            <br />
            Lippo Village, Tangerang 15811
            <br />
            Indonesia
          </p>
        </div>

        {/* CONTACT US */}
        <div>
          <h2 className="text-[18px] font-extrabold text-white">CONTACT US</h2>
          <div className="mt-3 h-[2px] w-[64px] bg-[#5D9B8B]" />

          <div className="mt-6 space-y-4">
            <a
              href="mailto:admission@sph.com"
              className="group flex items-center gap-4 text-[14px] text-white/90 transition-colors duration-300 hover:text-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E1F2EE] text-[16px] text-[#234438]">
                <FaEnvelope />
              </span>
              <span className="underline decoration-white/50 underline-offset-4 transition-all duration-300 group-hover:decoration-white break-all">
                admission@sph.com
              </span>
            </a>

            <a
              href="tel:089397322839"
              className="group flex items-center gap-4 text-[14px] text-white/90 transition-colors duration-300 hover:text-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E1F2EE] text-[15px] text-[#234438]">
                <FaPhoneAlt />
              </span>
              <span>0893 9732 2839 / 0837 3283 9823</span>
            </a>

            <a
              href="tel:02154212555"
              className="group flex items-center gap-4 text-[14px] text-white/90 transition-colors duration-300 hover:text-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E1F2EE] text-[15px] text-[#234438]">
                <FaPhoneAlt />
              </span>
              <span>021 5421 2555</span>
            </a>
          </div>
        </div>

        {/* MAIN MENU */}
        <div>
          <h2 className="text-[18px] font-extrabold text-white">MAIN MENU</h2>
          <div className="mt-3 h-[2px] w-[64px] bg-[#5D9B8B]" />

          <div className="mt-5 flex flex-col gap-3">
            <Link href="/" className="group w-fit text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5">
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-white">Beranda</span>
            </Link>

            <Link href="/#tentang" className="group w-fit text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5">
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-white">Tentang</span>
            </Link>

            <Link href="/#kegiatan-sekolah" className="group w-fit text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5">
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-white">Kegiatan</span>
            </Link>

            <Link href="/ppdb" className="group w-fit text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5">
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-white">PPDB</span>
            </Link>

            <Link href="/#galeri" className="group w-fit text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5">
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-white">Galeri</span>
            </Link>

            <Link href="/#testimoni" className="group w-fit text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5">
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-white">Testimoni</span>
            </Link>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="mt-7 flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[16px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1F2EE] hover:text-[#234438]">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[17px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1F2EE] hover:text-[#234438]">
              <FaInstagram />
            </a>

            <a href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[17px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1F2EE] hover:text-[#234438]">
              <FaYoutube />
            </a>

            <a href="#" aria-label="TikTok" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[16px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1F2EE] hover:text-[#234438]">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mx-auto mt-10 max-w-[1200px] border-t border-white/10 pt-6">
        <p className="text-[13px] font-medium text-white/80">
          © 2026 SMA Pelita Harapan. Website resmi kampus.
        </p>
      </div>

    </footer>
  );
}
