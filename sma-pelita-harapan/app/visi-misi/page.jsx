export default function VisiMisiPage() {
  return (
    <main className="min-h-screen bg-[#F5FAF8] px-6 pb-24 pt-40 md:px-10 lg:px-14">

      <div className="mx-auto max-w-[1200px]">

        <div className="mb-10">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E1F2EE] px-4 py-2 text-[12px] font-semibold text-[#2C806C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2C806C]" />
            Visi & Misi Sekolah
          </div>

          <h1 className="max-w-[800px] text-[42px] font-extrabold leading-[1.08] tracking-tight text-[#163D32] md:text-[52px]">
            Visi dan misi SMA
            <br />
            Pelita Harapan.
          </h1>

          <p className="mt-5 max-w-[700px] text-[15px] leading-6 text-[#668078] md:text-[16px]">
            Landasan yang menjadi arah dalam menciptakan lingkungan
            pendidikan yang inspiratif, kolaboratif, dan berorientasi masa
            depan.
          </p>

        </div>


        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">

          <div className="rounded-[24px] bg-[#163D32] p-8 text-white shadow-[0_15px_35px_rgba(35,68,56,0.10)] md:p-10">

            <p className="text-[12px] font-semibold text-[#B9DCD2]">
              Visi Sekolah
            </p>

            <h2 className="mt-5 max-w-[650px] text-[28px] font-extrabold leading-[1.2] md:text-[34px]">
              Menjadi sekolah yang melahirkan generasi inovatif, berakhlak,
              dan siap menghadapi perubahan zaman.
            </h2>

            <p className="mt-6 max-w-[650px] text-[14px] leading-6 text-white/75">
              Melalui pembelajaran yang inspiratif dan ekosistem sekolah yang
              mendukung, kami terus membangun fondasi agar setiap siswa bisa
              tumbuh menjadi pemimpin dan pemikir masa depan.
            </p>

          </div>


          <div className="rounded-[24px] bg-[#DFF1ED] p-8 shadow-[0_15px_35px_rgba(35,68,56,0.08)] md:p-10">

            <p className="text-[12px] font-semibold text-[#2C806C]">
              Misi Sekolah
            </p>

            <h2 className="mt-5 text-[26px] font-extrabold leading-[1.2] text-[#163D32]">
              Membangun pengalaman belajar yang bermakna.
            </h2>

            <div className="mt-6 space-y-4">

              <div className="rounded-2xl bg-white/70 p-4">
                <p className="text-[13px] leading-5 text-[#668078]">
                  Mengembangkan kemampuan akademik dan potensi siswa secara
                  menyeluruh.
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 p-4">
                <p className="text-[13px] leading-5 text-[#668078]">
                  Membangun karakter, kreativitas, dan rasa percaya diri.
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 p-4">
                <p className="text-[13px] leading-5 text-[#668078]">
                  Menciptakan lingkungan belajar yang kolaboratif dan
                  inspiratif.
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 p-4">
                <p className="text-[13px] leading-5 text-[#668078]">
                  Mempersiapkan siswa menghadapi perubahan dan tantangan masa
                  depan.
                </p>
              </div>

            </div>

          </div>

        </div>


        <div className="mt-6 rounded-[24px] bg-[#F0D8D1] p-8 shadow-[0_15px_35px_rgba(35,68,56,0.06)] md:p-10">

          <p className="text-[12px] font-semibold text-[#2C806C]">
            Nilai Pendidikan
          </p>

          <h2 className="mt-4 text-[27px] font-extrabold text-[#163D32]">
            Belajar, berkarya, dan berdampak.
          </h2>

          <p className="mt-4 max-w-[800px] text-[14px] leading-6 text-[#698078]">
            Setiap program sekolah diarahkan untuk memberikan pengalaman yang
            membantu siswa berkembang secara akademik maupun personal serta
            memiliki kesiapan untuk berkontribusi di lingkungan sekitarnya.
          </p>

        </div>

      </div>

    </main>
  );
}