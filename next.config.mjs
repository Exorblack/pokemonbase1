/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns:[
        {
        protocol: 'https', // Only match HTTPS images
        hostname: 'raw.githubusercontent.com',
        }
      ]
    },
};

export default nextConfig;
