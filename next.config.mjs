/** @type {import('next').NextConfig} */
import path, { dirname } from 'path';
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(dirname('styles'))],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
        ],
        // remotePatterns: ['www.pexels.com', 'localhost'],
    },
};

export default nextConfig;
