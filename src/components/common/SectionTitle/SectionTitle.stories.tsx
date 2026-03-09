import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import SectionTitle from './SectionTitle';

const meta: Meta<typeof SectionTitle> = {
	title: 'Common/SectionTitle',
	component: SectionTitle,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
	args: {
		title: 'Section Title',
	},
};

export const WithDescription: Story = {
	args: {
		...Default.args,
		description: 'This is a description for the section.',
	},
};

export const WithRightElement: Story = {
	args: {
		...Default.args,
		rightElement: <button className="text-[14px] text-[var(--color-main-coral-pink)]">더보기</button>,
	},
};

export const Full: Story = {
	args: {
		title: '전체 설정',
		description: '앱의 다양한 설정을 관리하세요.',
		rightElement: <button className="text-[14px] text-[var(--color-gray-3)] underline">초기화</button>,
	},
};
