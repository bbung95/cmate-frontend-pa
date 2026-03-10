import type { Meta, StoryObj } from '@storybook/nextjs';

import TextArea from './TextArea';

const meta: Meta<typeof TextArea> = {
	title: 'Common/TextArea',
	component: TextArea,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '60rem' }}>
				<Story />
			</div>
		),
	],
	args: {
		placeholder: '내용을 입력해주세요.',
	},
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
	args: {
		...meta.args,
		className: 'w-full',
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
		error: true,
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true,
		value: '비활성화된 상태입니다.',
	},
};
