import type { Meta, StoryObj } from '@storybook/nextjs';

import TextField from '../TextField/TextField';
import Field from './Field';

const meta: Meta<typeof Field> = {
	title: 'Common/Field',
	component: Field,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
	render: () => (
		<div style={{ width: '40rem' }}>
			<Field>
				<Field.Label>이름</Field.Label>
				<TextField placeholder="이름을 입력해주세요." />
				<Field.HelpMessage>실명을 입력해주세요.</Field.HelpMessage>
			</Field>
		</div>
	),
};

export const WithErrorMessage: Story = {
	render: () => (
		<div style={{ width: '40rem' }}>
			<Field>
				<Field.Label>이름</Field.Label>
				<TextField placeholder="이름을 입력해주세요." error />
				<Field.ErrorMessage>이름은 필수 입력 항목입니다.</Field.ErrorMessage>
			</Field>
		</div>
	),
};
