import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Button from './Button';

const meta: Meta<typeof Button> = {
	title: 'Common/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['xl', 'l', 'm', 's'],
		},
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'ghost', 'link'],
		},
		onClick: { action: 'clicked' },
		leftIcon: { control: 'boolean' },
		rightIcon: { control: 'boolean' },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Default Button',
		variant: 'primary',
		size: 'm',
		disabled: false,
	},
};

export const Primary: Story = {
	args: {
		...Default.args,
		children: 'Primary Button',
		variant: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		...Default.args,
		children: 'Secondary Button',
		variant: 'secondary-line',
	},
};

export const Ghost: Story = {
	args: {
		...Default.args,
		children: 'Ghost Button',
		variant: 'ghost',
	},
};

export const Link: Story = {
	args: {
		...Default.args,
		children: 'Link Button',
		variant: 'text-link',
	},
};

export const XL: Story = {
	args: {
		...Default.args,
		children: 'XL Button',
		size: 'xl',
	},
};

export const Large: Story = {
	args: {
		...Default.args,
		children: 'Large Button',
		size: 'l',
	},
};

export const Small: Story = {
	args: {
		...Default.args,
		children: 'Small Button',
		size: 's',
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		children: 'Disabled Button',
		disabled: true,
	},
};

export const FullWidth: Story = {
	decorators: [
		(Story) => (
			<div style={{ width: '40rem' }}>
				<Story />
			</div>
		),
	],
	args: {
		...Default.args,
		children: 'Full Width Button',
		className: 'w-full',
	},
};

export const WithIcons: Story = {
	render: (args) => (
		<div className="flex flex-col gap-4">
			<Button
				{...args}
				leftIcon={
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<circle cx="12" cy="12" r="10" />
						<line x1="12" y1="8" x2="12" y2="16" />
						<line x1="8" y1="12" x2="16" y2="12" />
					</svg>
				}
			>
				Left Icon
			</Button>
			<Button
				{...args}
				rightIcon={
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<polyline points="9 18 15 12 9 6" />
					</svg>
				}
			>
				Right Icon
			</Button>
		</div>
	),
	args: {
		...Default.args,
	},
};
