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
				<TabBarItem label="1" icon={<></>} />
				<TabBarItem label="2" icon={<></>} />
				<TabBarItem label="3" icon={<></>} />
				<TabBarItem label="4" icon={<></>} />
			</TabBar>
		</MobileLayout>
	);
}
