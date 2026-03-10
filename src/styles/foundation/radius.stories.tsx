import type { Meta, StoryObj } from '@storybook/nextjs';

const RadiusLayout = () => {
	const radiusTokens = [
		{ name: 'none', var: 'var(--radius-none)', val: '0rem' },
		{ name: 'sm', var: 'var(--radius-sm)', val: '0.4rem' },
		{ name: 'md', var: 'var(--radius-md)', val: '0.8rem' },
		{ name: 'lg', var: 'var(--radius-lg)', val: '1.2rem' },
		{ name: 'xl', var: 'var(--radius-xl)', val: '1.6rem' },
		{ name: '2xl', var: 'var(--radius-2xl)', val: '2.0rem' },
		{ name: 'full', var: 'var(--radius-full)', val: '10rem' },
	];

	return (
		<div className="flex flex-col gap-12 p-8">
			<h1 className="text-2xl font-bold">Border Radius Tokens</h1>
			<div className="grid grid-cols-2 gap-10 md:grid-cols-4">
				{radiusTokens.map((token) => (
					<div key={token.name} className="flex flex-col items-center gap-4">
						<div
							style={{ borderRadius: token.var }}
							className="bg-main-coral-pink flex size-120 items-center justify-center font-bold text-white shadow-lg"
						>
							{token.name}
						</div>
						<div className="flex flex-col items-center">
							<span className="font-bold">{token.name}</span>
							<span className="text-gray-2 text-sm">{token.val}</span>
							<code className="mt-2 rounded bg-gray-100 p-1 text-xs">{token.var}</code>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const meta: Meta = {
	title: 'Design Tokens/Radius',
	component: RadiusLayout,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
