/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  i18n: {
    locales: ["pt-BR","en-US", "es-ES"],
    defaultLocale: "pt-BR",
  },
}