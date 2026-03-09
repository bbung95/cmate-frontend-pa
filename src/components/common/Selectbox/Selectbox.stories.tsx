import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Selectbox from './Selectbox';

const meta: Meta<typeof Selectbox> = {
	title: 'Common/Selectbox',
	component: Selectbox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Selectbox>;

const options = (
	<>
		<option value="">옵션을 선택하세요</option>
		<option value="1">옵션 1</option>
		<option value="2">옵션 2</option>
		<option value="3">옵션 3</option>
	</>
);

export const Default: Story = {
	args: {
		label: 'Default Selectbox',
		children: options,
	},
};

export const WithError: Story = {
	args: {
		...Default.args,
		error: '필수 선택 사항입니다.',
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true,
	},
};

export const FullWidth: Story = {
	decorators: [
		(Story) => (
			<div style={{ width: '50rem' }}>
				<Story />
			</div>
		),
	],
	args: {
		...Default.args,
		fullWidth: true,
	},
};
