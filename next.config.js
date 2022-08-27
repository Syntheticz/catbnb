/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['cdn.pixabay.com', 'pixabay.com'],
    
  },

  env: {
    MONGO_URI: "mongodb+srv://Syntheticz:0Fa0OlA5Dykx5HBC@clustrophobic.lcr7b15.mongodb.net/?retryWrites=true&w=majority"
  },
}

module.exports = nextConfig
