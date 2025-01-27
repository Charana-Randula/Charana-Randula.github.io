import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
 
export default nextConfig