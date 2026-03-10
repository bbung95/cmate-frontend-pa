import type { Meta, StoryObj } from '@storybook/nextjs';

import Field from '../Field/Field';
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

export const WithError: Story = {
	args: {
		...Default.args,
		error: true,
	},
};

export const ReadOnly: Story = {
	args: {
		...Default.args,
		readOnly: true,
		value: '수정 불가',
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true,
		value: '비활성화된 상태입니다.',
	},
};

export const WithField: Story = {
	render: () => (
		<Field>
			<Field.Label>자기소개</Field.Label>
			<TextArea placeholder="자기소개를 입력해주세요." />
			<Field.HelpMessage>최대 500자까지 입력 가능합니다.</Field.HelpMessage>
		</Field>
	),
};
