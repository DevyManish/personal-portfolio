/** @type {import('next').NextConfig} */
const nextConfig = {};
nextConfig.images = {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
        }
    ]
};
export default nextConfig;
