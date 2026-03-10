'use client';

import TopNavigation from '@/components/common/TopNavigation/TopNavigation';

import ProfileInfo from '../components/ProfileInfo';

export default function Profile() {
	return (
		<>
			<TopNavigation leftRender={<TopNavigation.BackButton />} title="나의 프로필 보기" />
			<div className="flex flex-col gap-16">
				<ProfileInfo />
			</div>
		</>
	);
}
