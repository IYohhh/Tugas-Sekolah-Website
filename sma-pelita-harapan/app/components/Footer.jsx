import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
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

          <a
            href="https://www.google.com/maps/search/?api=1&query=2500%20Bulevar%20Palem%20Raya%2C%20Lippo%20Village%2C%20Tangerang%2015810%2C%20Indonesia"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block text-[13px] font-semibold leading-6 text-white/90 underline-offset-4 transition hover:underline"
          >
            Lippo Village, Jl. Boulevard Palem Raya No. 2500,
            <br />
            Kelapa Dua, Tangerang, Banten 15810
          </a>
        </div>

        {/* CONTACT US */}
        <div>
          <h2 className="text-[18px] font-extrabold text-white">CONTACT US</h2>
          <div className="mt-3 h-[2px] w-[64px] bg-[#5D9B8B]" />

          <div className="mt-6 space-y-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=admission-lv%40sph.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-[14px] text-white/90 transition-colors duration-300 hover:text-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E1F2EE] text-[16px] text-[#234438]">
                <FaEnvelope />
              </span>
              <span className="underline decoration-white/50 underline-offset-4 transition-all duration-300 group-hover:decoration-white break-all">
                SMA Pelita Harapan
              </span>
            </a>

            <a
              href="tel:+62215460234"
              className="group flex items-center gap-4 text-[14px] text-white/90 transition-colors duration-300 hover:text-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E1F2EE] text-[15px] text-[#234438]">
                <FaPhoneAlt />
              </span>
              <span>+62 21 546 0234</span>
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

            <Link href="/#contact-us" className="group w-fit text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5">
              <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-white">Contact</span>
            </Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT + SOCIAL MEDIA */}
      <div className="mx-auto mt-10 flex max-w-[1200px] flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] font-medium text-white/80">
          © 2026 SMA Pelita Harapan. Website resmi sekolah.
        </p>

        {/* SOCIAL MEDIA */}
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/sphsentulcity/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[16px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1F2EE] hover:text-[#234438]">
            <FaFacebookF />
          </a>

          <a href="https://www.instagram.com/sphlippovillage/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[17px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1F2EE] hover:text-[#234438]">
            <FaInstagram />
          </a>

          <a href="https://www.youtube.com/sphinternational" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[17px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1F2EE] hover:text-[#234438]">
            <FaYoutube />
          </a>

          <a href="https://wa.me/6288215460234" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[16px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1F2EE] hover:text-[#234438]">
            <FaWhatsapp />
          </a>
        </div>
      </div>

    </footer>
  );
}
