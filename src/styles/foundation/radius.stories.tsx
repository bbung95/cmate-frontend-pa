import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const RadiusLayout = () => {
	const radiusTokens = [
		{ name: 'none', var: 'var(--radius-none)', val: '0px' },
		{ name: 'sm', var: 'var(--radius-sm)', val: '4px' },
		{ name: 'md', var: 'var(--radius-md)', val: '8px' },
		{ name: 'lg', var: 'var(--radius-lg)', val: '12px' },
		{ name: 'xl', var: 'var(--radius-xl)', val: '16px' },
		{ name: '2xl', var: 'var(--radius-2xl)', val: '20px' },
		{ name: 'full', var: 'var(--radius-full)', val: '100px' },
	];

	return (
		<div className="flex flex-col gap-12 p-8">
			<h1 className="text-2xl font-bold">Border Radius Tokens</h1>
			<div className="grid grid-cols-2 gap-10 md:grid-cols-4">
				{radiusTokens.map((token) => (
					<div key={token.name} className="flex flex-col items-center gap-4">
						<div
							style={{ borderRadius: token.var }}
							className="flex h-32 w-32 items-center justify-center bg-[var(--color-main-coral-pink)] font-bold text-white shadow-lg"
						>
							{token.name}
						</div>
						<div className="flex flex-col items-center">
							<span className="font-bold">{token.name}</span>
							<span className="text-sm text-[var(--color-gray-2)]">{token.val}</span>
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
