import type { Meta, StoryObj } from '@storybook/nextjs';

const TypographyLayout = () => {
	const textTokens = [
		{
			name: 'Display',
			token: 'text-display',
		},
		{ name: 'H1', token: 'text-h1' },
		{ name: 'H2', token: 'text-h2' },
		{ name: 'B1-bold', token: 'text-b1-bold' },
		{ name: 'B2-bold', token: 'text-b2-bold' },
		{ name: 'B1', token: 'text-b1' },
		{ name: 'B2', token: 'text-b2' },
		{ name: 'B3', token: 'text-b3' },
	];

	return (
		<div className="flex flex-col gap-8 p-8">
			<h1 className="mb-4 text-2xl font-bold">Typography Tokens (Utility Classes)</h1>
			<div className="flex flex-col gap-10">
				{textTokens.map((token) => (
					<div key={token.name} className="flex flex-col gap-2 border-b border-gray-100 pb-6">
						<div className="text-gray-2 flex items-center gap-4 text-sm">
							<span className="text-main-coral-pink font-bold">{token.name}</span>
							<span>
								Utility: <code>.{token.token.toLowerCase()}</code>
							</span>
						</div>
						<p className={`${token.token} text-gray-black`}>
							다람쥐 헌 쳇바퀴에 타고파. The quick brown fox jumps over the lazy dog.
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

const meta: Meta = {
	title: 'Design Tokens/Typography',
	component: TypographyLayout,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
