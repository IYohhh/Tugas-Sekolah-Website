/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // Proksi opsional agar fetch relatif "/api/kegiatan" juga bisa dipakai.
  // ":path*" penting supaya "/api/kegiatan/1" ikut diteruskan ke backend.
  async rewrites() {
    return [
      {
        source: "/api/kegiatan/:path*",
        destination: "http://localhost:8000/api/kegiatan/:path*",
      },
    ];
  },
};

export default nextConfig;