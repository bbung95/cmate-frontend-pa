import type { Meta, StoryObj } from '@storybook/nextjs';

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

export const Default: Story = {
	render: (args) => (
		<TabBar {...args}>
			<TabBarItem icon="home" label="홈" active path="#" />
			<TabBarItem icon="search" label="검색" path="#" />
			<TabBarItem icon="user" label="마이" path="#" />
		</TabBar>
	),
};
