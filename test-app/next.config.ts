/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 See rida jääb samaks
  distDir: 'out',   // 👈 LISA SEE RIDA! See sunnib Next.js-i kasutama 'out' kausta
  images: {
    unoptimized: true,
  },
};

export default nextConfig;