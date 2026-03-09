import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import TextArea from './TextArea';

const meta: Meta<typeof TextArea> = {
	title: 'Common/TextArea',
	component: TextArea,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
	args: {
		label: '상세 내용',
		placeholder: '내용을 입력해주세요.',
	},
};

export const WithValue: Story = {
	args: {
		...Default.args,
		value: '이미 입력된 내용입니다.\n줄바꿈도 지원합니다.',
	},
};

export const WithError: Story = {
	args: {
		...Default.args,
		error: '내용이 너무 짧습니다. (최소 10자)',
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true,
		value: '비활성화된 상태입니다.',
	},
};

export const FullWidth: Story = {
	decorators: [
		(Story) => (
			<div style={{ width: '60rem' }}>
				<Story />
			</div>
		),
	],
	args: {
		...Default.args,
		fullWidth: true,
	},
};
