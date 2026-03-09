import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import TabBar, { TabBarItem } from './TabBar';

const meta: Meta<typeof TabBar> = {
	title: 'Common/TabBar',
	component: TabBar,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TabBar>;

const HomeIcon = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
		<polyline points="9 22 9 12 15 12 15 22" />
	</svg>
);

const SearchIcon = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<circle cx="11" cy="11" r="8" />
		<line x1="21" y1="21" x2="16.65" y2="16.65" />
	</svg>
);

const UserIcon = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
		<circle cx="12" cy="7" r="4" />
	</svg>
);

export const Default: Story = {
	render: (args) => (
		<TabBar {...args}>
			<TabBarItem icon={HomeIcon} label="홈" active />
			<TabBarItem icon={SearchIcon} label="검색" />
			<TabBarItem icon={UserIcon} label="마이" />
		</TabBar>
	),
};

export const CustomStyle: Story = {
	render: (args) => (
		<TabBar {...args} className="bg-[var(--color-gray-6)]!">
			<TabBarItem icon={HomeIcon} label="일정" active />
			<TabBarItem icon={SearchIcon} label="장소" />
			<TabBarItem icon={UserIcon} label="프로필" />
		</TabBar>
	),
};
