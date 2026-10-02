"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo_pelita_harapan.jpg";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("Beranda");
  const [showTentang, setShowTentang] = useState(false);
  const [pendingSection, setPendingSection] = useState(null);
  const isTentangPage = pathname === "/visi-misi";
  const isDetailKegiatan = pathname === "/detail-kegiatan";

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      const sections = [
        {
          id: "beranda",
          menu: "Beranda",
        },
        {
          id: "tentang",
          menu: "Tentang",
        },
        {
          id: "kegiatan-sekolah",
          menu: "Kegiatan",
        },
        {
          id: "ppdb",
          menu: "PPDB",
        },
        {
          id: "galeri",
          menu: "Galeri",
        },
        {
          id: "testimoni",
          menu: "Testimoni",
        },
      ];

      let currentMenu = "Beranda";
      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (!element) {
          continue;
        }

        const sectionTop =
          element.getBoundingClientRect().top +
          window.scrollY;

        if (scrollPosition >= sectionTop) {
          currentMenu = section.menu;
        }
      }

      setActiveMenu(currentMenu);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const updateActiveMenu = () => {
      const hash = window.location.hash;

      if (pathname === "/visi-misi") {
        setActiveMenu("Tentang");
        return;
      }

      if (pathname === "/detail-kegiatan") {
        setActiveMenu("Kegiatan");
        return;
      }

      if (pathname !== "/") {
        return;
      }

      if (hash === "#tentang") {
        setActiveMenu("Tentang");
      } else if (hash === "#kegiatan-sekolah") {
        setActiveMenu("Kegiatan");
      } else if (hash === "#ppdb") {
        setActiveMenu("PPDB");
      } else if (hash === "#galeri") {
        setActiveMenu("Galeri");
      } else if (hash === "#testimoni") {
        setActiveMenu("Testimoni");
      }
    };

    updateActiveMenu();

    window.addEventListener(
      "hashchange",
      updateActiveMenu
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        updateActiveMenu
      );
    };
  }, [pathname]);

  /* ==================== SCROLL SETELAH PINDAH HALAMAN ==================== */

  useEffect(() => {
    if (pathname !== "/" || !pendingSection) {
      return;
    }

    const section = pendingSection;

    const timer = setTimeout(() => {
      const element =
        document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(
          null,
          "",
          `/#${section}`
        );
      }

      setPendingSection(null);
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname, pendingSection]);

  /* ==================== NAVIGASI KE SECTION ==================== */

  const handleSectionNavigation = (
    section,
    menuName
  ) => {
    setActiveMenu(menuName);
    setShowTentang(false);

    /* ==================== JIKA SUDAH DI BERANDA ==================== */

    if (pathname === "/") {
      const element =
        document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.pushState(
          null,
          "",
          `/#${section}`
        );

        window.dispatchEvent(
          new HashChangeEvent("hashchange")
        );
      }

      return;
    }

    /* ==================== JIKA DI HALAMAN LAIN ==================== */

    setPendingSection(section);

    router.push("/");
  };

  /* ==================== MENU ==================== */

  const menu = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "Tentang",
      link: "#",
    },
    {
      name: "Kegiatan",
      link: "/#kegiatan-sekolah",
    },
    {
      name: "PPDB",
      link: "/#ppdb",
    },
    {
      name: "Galeri",
      link: "/#galeri",
    },
    {
      name: "Testimoni",
      link: "/#testimoni",
    },
  ];

  /* ==================== RENDER ==================== */

  return (
    <nav className="fixed left-5 right-5 top-5 z-50 flex h-[82px] items-center justify-between rounded-[24px] border border-white/40 bg-white/60 px-5 shadow-[0_10px_35px_rgba(35,68,56,0.10)] backdrop-blur-xl">

      {/* ==================== LOGO ==================== */}

      <div className="flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80">
          <Image
            src={logo}
            alt="Logo SMA Pelita Harapan"
            width={38}
            height={38}
            priority
            className="h-[38px] w-[38px] object-contain"
          />
        </div>

        <div>
          <h1 className="text-[17px] font-bold leading-tight text-[#234438]">
            SMA PELITA HARAPAN
          </h1>

          <p className="text-[11px] font-medium text-[#5D7A6F]">
            Website resmi sekolah
          </p>
        </div>

      </div>

      {/* ==================== MENU NAVIGASI ==================== */}

      <div className="flex items-center gap-1">

        {menu.map((item) => {
          const isActive =
            item.name === "Tentang"
              ? isTentangPage ||
                activeMenu === "Tentang"
              : item.name === "Kegiatan"
                ? isDetailKegiatan ||
                  activeMenu === "Kegiatan"
                : activeMenu === item.name;

          return (
            <div
              key={item.name}
              className="relative"
            >

              {/* ==================== MENU ==================== */}

              <Link
                href={item.link}
                onClick={(e) => {

                  /* ==================== TENTANG ==================== */

                  if (item.name === "Tentang") {
                    e.preventDefault();

                    setShowTentang((prev) => !prev);
                    setActiveMenu("Tentang");

                    return;
                  }

                  /* ==================== KEGIATAN ==================== */

                  if (item.name === "Kegiatan") {
                    e.preventDefault();

                    handleSectionNavigation(
                      "kegiatan-sekolah",
                      "Kegiatan"
                    );

                    return;
                  }

                  /* ==================== PPDB ==================== */

                  if (item.name === "PPDB") {
                    e.preventDefault();

                    handleSectionNavigation(
                      "ppdb",
                      "PPDB"
                    );

                    return;
                  }

                  /* ==================== GALERI ==================== */

                  if (item.name === "Galeri") {
                    e.preventDefault();

                    handleSectionNavigation(
                      "galeri",
                      "Galeri"
                    );

                    return;
                  }

                  /* ==================== TESTIMONI ==================== */

                  if (item.name === "Testimoni") {
                    e.preventDefault();

                    handleSectionNavigation(
                      "testimoni",
                      "Testimoni"
                    );

                    return;
                  }

                  /* ==================== BERANDA ==================== */

                  if (item.name === "Beranda") {
                    e.preventDefault();

                    setActiveMenu("Beranda");
                    setShowTentang(false);
                    setPendingSection(null);

                    /* Jika sudah berada di halaman utama */
                    if (pathname === "/") {
                      window.history.pushState(
                        null,
                        "",
                        "/"
                      );

                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    } else {
                      /* Jika sedang berada di halaman lain */
                      router.push("/");
                    }

                    return;
                  }

                }}
                className={`flex items-center gap-0 rounded-full px-4 py-2 text-sm font-semibold text-[#234438] transition-all duration-300 ${
                  isActive
                    ? "bg-[#E1F2EE]/90 shadow-sm hover:-translate-y-[1px] hover:bg-[#E1F2EE]"
                    : "hover:-translate-y-[1px] hover:bg-[#E1F2EE]/70"
                }`}
              >

                <span>{item.name}</span>

                {/* ==================== PANAH TENTANG ==================== */}

                {item.name === "Tentang" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`ml-0 h-3.5 w-3.5 shrink-0 transition-transform duration-300 ${
                      showTentang
                        ? "rotate-180"
                        : ""
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 1.06l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}

              </Link>

              {/* ==================== DROPDOWN TENTANG ==================== */}

              {item.name === "Tentang" && (
                <div
                  className={`absolute left-1/2 top-14 z-50 w-72 -translate-x-1/2 rounded-2xl bg-[#FFD1D1]/95 px-5 py-4 shadow-[0_12px_30px_rgba(35,68,56,0.12)] transition-all duration-300 ${
                    showTentang
                      ? "visible translate-y-0 scale-100 opacity-100"
                      : "invisible -translate-y-2 scale-95 opacity-0"
                  }`}
                >

                  {/* ==================== TENTANG SEKOLAH ==================== */}

                  <Link
                    href="/#tentang"
                    onClick={(e) => {
                      e.preventDefault();

                      setShowTentang(false);
                      setActiveMenu("Tentang");

                      /* ==================== JIKA DI BERANDA ==================== */

                      if (pathname === "/") {
                        const element =
                          document.getElementById(
                            "tentang"
                          );

                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });

                          window.history.pushState(
                            null,
                            "",
                            "/#tentang"
                          );

                          window.dispatchEvent(
                            new HashChangeEvent(
                              "hashchange"
                            )
                          );
                        }

                        return;
                      }

                      /* ==================== JIKA DI HALAMAN LAIN ==================== */

                      setPendingSection("tentang");

                      router.push("/");
                    }}
                    className="block rounded-xl px-3 py-2 text-lg font-semibold text-[#234438] transition-all duration-300 hover:translate-x-1 hover:bg-white/30"
                  >
                    Tentang Sekolah
                  </Link>

                  {/* ==================== VISI DAN MISI ==================== */}

                  <Link
                    href="/visi-misi"
                    onClick={() => {
                      setShowTentang(false);
                      setActiveMenu("Tentang");
                      setPendingSection(null);
                    }}
                    className={`block rounded-xl px-3 py-2 text-lg font-semibold text-[#234438] transition-all duration-300 hover:translate-x-1 hover:bg-white/30 ${
                      pathname === "/visi-misi"
                        ? "bg-white/30"
                        : ""
                    }`}
                  >
                    Visi dan Misi Sekolah
                  </Link>

                </div>
              )}

            </div>
          );
        })}

      </div>

      {/* ==================== TOMBOL GABUNG SEKARANG ==================== */}

      <Link
        href="/#ppdb"
        onClick={(e) => {
          e.preventDefault();

          handleSectionNavigation(
            "ppdb",
            "PPDB"
          );
        }}
        className="rounded-[15px] bg-[#EF8A7D] px-5 py-3 text-sm font-bold text-white shadow-[0_6px_18px_rgba(239,138,125,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E97C6E] hover:shadow-[0_10px_25px_rgba(239,138,125,0.25)]"
      >
        Gabung Sekarang
      </Link>

    </nav>
  );
}