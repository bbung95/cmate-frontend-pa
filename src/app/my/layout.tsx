import { Metadata } from 'next';

import TabBar, { TabBarItem } from '@/components/common/TabBar/TabBar';
import MobileLayout from '@/components/layout/MobileLayout';

export const metadata: Metadata = {
	title: '크리스천메이트 - 마이페이지',
	description: '크리스천메이트 과제전형',
};

export default function MyLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<MobileLayout>
			{children}
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
