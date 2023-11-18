/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URI: 'mongodb+srv://abdulrahmanabdultawab189sd:<password>@cluster0.des2nye.mongodb.net/?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
