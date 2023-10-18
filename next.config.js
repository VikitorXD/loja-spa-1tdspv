/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "https://httpstatusdogs.com/200-ok",
          port: " ",
          pathname: "/img/**"
        },
      ],
    },
  }
