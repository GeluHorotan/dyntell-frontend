/** @type {import('next').NextConfig} */

const productionAPI = 'https://dyntell-horotangelu17.b4a.run';
const developmentAPI = 'http://localhost:5000';

// Checking if we're in production or development
const apiDomain =
  process.env.NODE_ENV === 'production' ? productionAPI : developmentAPI;

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${apiDomain}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
