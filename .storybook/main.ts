import type { StorybookConfig } from '@storybook/nextjs';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [],
	framework: '@storybook/nextjs',
	staticDirs: ['../public'],
	webpackFinal: async (config) => {
		config.module = config.module || {};
		config.module.rules = config.module.rules || [];

		const imageRule = config.module.rules.find((rule: any) => rule?.test?.test('.svg'));
		if (imageRule) {
			(imageRule as any)['exclude'] = /\.svg$/;
		}

		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};
export default config;
