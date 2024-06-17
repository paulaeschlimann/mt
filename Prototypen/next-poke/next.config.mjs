/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        imageSizes: [384],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com"
            }
        ]
    }
};

export default nextConfig;
