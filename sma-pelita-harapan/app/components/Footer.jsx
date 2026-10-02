import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logo_pelita-harapan-removebg.png";

export default function Footer() {
  return (
    <footer className="bg-[#1F493E] px-10 pb-8 pt-0 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-[1.1fr_1.2fr_0.8fr]">

        {/* LOGO DAN IDENTITAS */}
        <div className="relative">
          <div className="-mt-14 mb-7">
            <Image src={logo} alt="Logo SMA Pelita Harapan" width={190} height={190} className="h-[190px] w-[190px] object-contain" />
          </div>
          <h2 className="text-[20px] font-bold text-white">SMA PELITA HARAPAN</h2>
          <p className="mt-2 text-[13px] font-medium text-white/80">Knowledge, Faith & Character</p>

          <p className="mt-6 text-[14px] font-semibold leading-7 text-white/90">
            MH Thamrin Boulevard 1100
            <br />
            Lippo Village, Tangerang 15811
            <br />
            Indonesia
          </p>
        </div>

        {/* CONTACT US */}
        <div className="pt-8 md:pt-[88px]">
          <h2 className="text-[25px] font-extrabold text-white">CONTACT US</h2>

          <div className="mt-3 h-[2px] w-[155px] bg-[#5D9B8B]"/>
          <div className="mt-6 space-y-4">
            <a href="mailto:admission@sph.com" className="group flex items-center gap-4 text-[16px] text-white/90 transition-all duration-300 hover:text-white">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E1F2EE] text-[19px] text-[#234438] transition-all duration-300 group-hover:scale-105">
                <FaEnvelope />
              </span>
              <span className="underline decoration-white/50 underline-offset-4 transition-all duration-300 group-hover:decoration-white">admission@sph.com</span>
            </a>

            <a href="tel:089397322839" className="group flex items-center gap-4 text-[16px] text-white/90 transition-all duration-300 hover:text-white">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E1F2EE] text-[18px] text-[#234438] transition-all duration-300 group-hover:scale-105">
                <FaPhoneAlt />
              </span>
              <span>0893 9732 2839 / 0837 3283 9823</span>
            </a>

            <a href="tel:02154212555" className="group flex items-center gap-4 text-[16px] text-white/90 transition-all duration-300 hover:text-white">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E1F2EE] text-[18px] text-[#234438] transition-all duration-300 group-hover:scale-105">
                <FaPhoneAlt />
              </span>

              <span> 021 5421 2555</span>
            </a>
          </div>
        </div>

        {/* MAIN MENU */}
        <div className="pt-8 md:pt-[88px]">
          <h2 className="text-[25px] font-extrabold text-white">MAIN MENU</h2>
          <div className="mt-3 h-[2px] w-[155px] bg-[#5D9B8B]" />
          <div className="mt-5 flex flex-col gap-4">

            <Link href="/" className="group w-fit text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_3px_10px_rgba(255,255,255,0.12)]">
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-white">Beranda</span>
            </Link>

            <Link href="/#tentang" className="group w-fit text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_3px_10px_rgba(255,255,255,0.12)]">
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-white">Tentang</span>
            </Link>

            <Link href="/#kegiatan-sekolah" className="group w-fit text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_3px_10px_rgba(255,255,255,0.12)]">
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-white">Kegiatan</span>
            </Link>

            <Link href="/#ppdb" className="group w-fit text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_3px_10px_rgba(255,255,255,0.12)]">
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-white">PPDB</span>
            </Link>

            <Link href="/#galeri" className="group w-fit text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_3px_10px_rgba(255,255,255,0.12)]">
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-white">Gallery</span>
            </Link>

            <Link href="/#testimoni" className="group w-fit text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_3px_10px_rgba(255,255,255,0.12)]">
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-white">Testimoni</span>
            </Link>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="mt-8 flex items-center gap-3">

            <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[18px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1F2EE] hover:text-[#234438]">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[19px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1F2EE] hover:text-[#234438]">
              <FaInstagram />
            </a>

            <a href="#" aria-label="YouTube" className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[19px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1F2EE] hover:text-[#234438]">
              <FaYoutube />
            </a>

            <a href="#" aria-label="TikTok" className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[18px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1F2EE] hover:text-[#234438]">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6">
        <p className="text-[13px] font-medium text-white/80">© 2026 SMA Pelita Harapan. Website resmi kampus.</p>
      </div>

    </footer>
  );
}