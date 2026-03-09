import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
	title: 'Common/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	args: {
		label: 'Default Checkbox',
	},
};

export const Checked: Story = {
	args: {
		...Default.args,
		label: 'Checked Checkbox',
		checked: true,
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		label: 'Disabled Checkbox',
		disabled: true,
	},
};

export const DisabledChecked: Story = {
	args: {
		...Default.args,
		label: 'Disabled Checked Checkbox',
		disabled: true,
		checked: true,
	},
};
