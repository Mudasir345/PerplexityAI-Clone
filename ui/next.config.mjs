/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 's2.googleusercontent.com', // Google profile images
      },
      {
        hostname: 'upload.wikimedia.org', // Wikimedia images
      },
    ],
  },
  compiler: {
    // Enable SWC minification and remove Babel custom configuration
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in production
  },
};

export default nextConfig;
