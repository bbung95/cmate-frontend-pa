import type { Meta, StoryObj } from '@storybook/nextjs';

import TextField from './TextField';

const meta: Meta<typeof TextField> = {
	title: 'Common/TextField',
	component: TextField,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

const SearchIcon = (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<circle cx="11" cy="11" r="8" />
		<line x1="21" y1="21" x2="16.65" y2="16.65" />
	</svg>
);

const ClearIcon = (
	<svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		className="cursor-pointer"
	>
		<circle cx="12" cy="12" r="10" />
		<line x1="15" y1="9" x2="9" y2="15" />
		<line x1="9" y1="9" x2="15" y2="15" />
	</svg>
);

export const Default: Story = {
	args: {
		label: '이름',
		placeholder: '이름을 입력하세요.',
	},
};

export const WithIcons: Story = {
	args: {
		...Default.args,
		label: '검색',
		placeholder: '검색어를 입력하세요.',
		leftIcon: SearchIcon,
		rightIcon: ClearIcon,
	},
};

export const WithError: Story = {
	args: {
		...Default.args,
		error: '올바른 이름을 입력해주세요.',
		value: 'Wrong Name!',
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true,
		value: '수정 불가',
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
