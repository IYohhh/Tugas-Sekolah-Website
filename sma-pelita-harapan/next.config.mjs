/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  async rewrites() {
    return [
      {
        source: "/api/kegiatan",
        destination: "http://localhost:8000/api/kegiatan",
      },
    ];
  },
};

export default nextConfig;