import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
	outputFileTracingRoot: path.join(__dirname, './'),
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
			},
		];
	},
};

export default nextConfig;
