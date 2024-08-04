/** @type {import('next').NextConfig} */
import path, { dirname } from 'path';
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(dirname('styles'))],
    },
    images: {
        domains: ['www.pexels.com'],
    },
};

export default nextConfig;
