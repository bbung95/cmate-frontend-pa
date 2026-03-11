'use client';

import TopNavigation from '@/components/common/TopNavigation/TopNavigation';
import MenuBox from '@/components/domains/my/MenuBox';
import ProfileCard from '@/components/domains/my/ProfileCard';

export default function My() {
	return (
		<>
			<TopNavigation leftRender={<TopNavigation.BackButton />} title="마이페이지" />
			<div className="flex flex-col gap-16 p-16">
				{/* 프로필 카드 */}
				<ProfileCard />
				{/* 메뉴 박스 */}
				<MenuBox />
			</div>
		</>
	);
}
