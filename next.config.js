/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  future: {
    webpack5: true,
  },
  output: 'export'
  
  
};


module.exports = {
  reactStrictMode: true,
  experimental: {
    dynamicImports: true,
    fallback: true
  }
}