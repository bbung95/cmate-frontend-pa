import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
	title: 'Common/RadioButton',
	component: RadioButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
	args: {
		label: 'Default Radio',
		name: 'radio-group',
	},
};

export const Checked: Story = {
	args: {
		...Default.args,
		label: 'Checked Radio',
		checked: true,
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		label: 'Disabled Radio',
		disabled: true,
	},
};

export const RadioGroup: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2">
			<RadioButton {...args} label="Option 1" value="1" defaultChecked />
			<RadioButton {...args} label="Option 2" value="2" />
			<RadioButton {...args} label="Option 3" value="3" />
		</div>
	),
	args: {
		name: 'radio-group-example',
	},
};
