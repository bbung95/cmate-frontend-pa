'use client';

import TabBar, { TabBarItem } from '@/components/common/TabBar/TabBar';
import TopNavigation from '@/components/common/TopNavigation/TopNavigation';
import MobileLayout from '@/components/layout/MobileLayout';

export default function MyLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<MobileLayout>
			<TopNavigation leftRender={<TopNavigation.BackButton />} title="마이페이지" />
			<div className="flex-1 p-16">{children}</div>
			<TabBar>
				<TabBarItem label="Home" icon="home" path="/" />
				<TabBarItem label="탐색" icon="search" path="#" />
				<TabBarItem label="매칭" icon="heart" path="#" />
				<TabBarItem label="대화" icon="message" path="#" />
				<TabBarItem label="마이페이지" icon="user" path="/my" active />
			</TabBar>
		</MobileLayout>
	);
}
