import type { Meta, StoryObj } from '@storybook/nextjs';

import Field from '../Field/Field';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
	title: 'Common/TextField',
	component: TextField,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div style={{ width: '40rem' }}>
				<Story />
			</div>
		),
	],
	args: {
		className: 'w-full',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
	args: {
		placeholder: '이름을 입력하세요.',
	},
};

export const WithError: Story = {
	args: {
		...Default.args,
		error: true,
		value: 'Wrong Name!',
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
		value: '수정 불가',
	},
};

export const WithField: Story = {
	render: () => (
		<Field>
			<Field.Label>이메일</Field.Label>
			<TextField placeholder="이메일을 입력해주세요." />
			<Field.HelpMessage>비밀번호 찾기 등에 사용됩니다.</Field.HelpMessage>
		</Field>
	),
};
