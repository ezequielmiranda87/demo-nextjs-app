/** @type {import('next').NextConfig} */
const nextConfig = {
    server: {
        port: process.env.NODE_ENV === 'production' ? 80 : 3000,
      },    
}

module.exports = nextConfig
