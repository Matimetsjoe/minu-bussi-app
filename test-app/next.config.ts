/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 SEE RIDA ON OLULINE: ütleb Next.js-ile, et tulemuseks on puhas veebileht
  images: {
    unoptimized: true, // Vajalik, et pildid töötaksid ilma eraldi Verceli serverita
  },
};

export default nextConfig;