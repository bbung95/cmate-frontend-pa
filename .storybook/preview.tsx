import type { Preview } from '@storybook/nextjs';

import '../src/styles/globals.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},

	decorators: [
		(Story) => {
			return (
				<div className="p-24">
					<Story />
				</div>
			);
		},
	],
};

export default preview;
