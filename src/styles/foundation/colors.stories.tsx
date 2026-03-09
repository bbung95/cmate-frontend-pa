import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const ColorsLayout = () => {
	const groups = [
		{
			title: 'Main & Sub Colors',
			colors: [
				{ name: 'main-coral-pink', var: 'var(--color-main-coral-pink)', hex: '#FF5F79' },
				{ name: 'sub-green', var: 'var(--color-sub-green)', hex: '#48D387' },
				{ name: 'sub-red', var: 'var(--color-sub-red)', hex: '#FE7575' },
				{ name: 'sub-orange', var: 'var(--color-sub-orange)', hex: '#FF9255' },
			],
		},
		{
			title: 'Gray Tones',
			colors: [
				{ name: 'gray-black', var: 'var(--color-gray-black)', hex: '#353644' },
				{ name: 'gray-1', var: 'var(--color-gray-1)', hex: '#626474' },
				{ name: 'gray-2', var: 'var(--color-gray-2)', hex: '#9395A6' },
				{ name: 'gray-3', var: 'var(--color-gray-3)', hex: '#B7B9C9' },
				{ name: 'gray-4', var: 'var(--color-gray-4)', hex: '#E4E6F0' },
				{ name: 'gray-5', var: 'var(--color-gray-5)', hex: '#F3F4FA' },
				{ name: 'gray-6', var: 'var(--color-gray-6)', hex: '#F8F8FC' },
				{ name: 'white', var: 'var(--color-white)', hex: '#FFFFFF' },
			],
		},
	];

	return (
		<div className="bg-gray-6 flex min-h-screen flex-col gap-12 p-8">
			<h1 className="text-gray-black text-2xl font-bold">Color Tokens</h1>
			{groups.map((group) => (
				<div key={group.title} className="flex flex-col gap-4">
					<h2 className="text-gray-1 text-lg font-bold">{group.title}</h2>
					<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
						{group.colors.map((color) => (
							<div key={color.name} className="border-gray-4 overflow-hidden rounded-xl border bg-white shadow-sm">
								<div style={{ backgroundColor: color.var }} className="h-80 w-full" />
								<div className="flex flex-col gap-1 p-12">
									<span className="text-gray-black text-b1 font-bold">{color.name}</span>
									<span className="text-gray-2 text-b1">{color.hex}</span>
									<code className="bg-gray-5 mt-1 rounded p-1 text-[1rem]">{color.var}</code>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

const meta: Meta = {
	title: 'Design Tokens/Colors',
	component: ColorsLayout,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
