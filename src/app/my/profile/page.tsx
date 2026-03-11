'use client';

import Link from 'next/link';

import { useGetPhotos } from '@/apis/photos/query';
import { useGetProfile } from '@/apis/profile/query';
import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import TopNavigation from '@/components/common/TopNavigation/TopNavigation';
import LifeStyleBox from '@/components/domains/profile/LifeStyleBox';
import PhotoBox from '@/components/domains/profile/PhotoBox';
import PointBox from '@/components/domains/profile/PointBox';
import ProfileInfo from '@/components/domains/profile/ProfileInfo';
import ProfileMenuBox from '@/components/domains/profile/ProfileMenuBox';
import TypeBox from '@/components/domains/profile/TypeBox';

export default function Profile() {
	const { data: profileData } = useGetProfile();
	const { data: photosData } = useGetPhotos();

	return (
		<>
			<TopNavigation leftRender={<TopNavigation.BackButton />} title="나의 프로필 보기" />
			<div className="flex flex-col gap-16">
				<ProfileInfo
					name={profileData?.data.name}
					marriageHistory={profileData?.data.marriageHistory}
					images={photosData?.data}
				/>
				<ProfileMenuBox data={profileData?.data} />
				{/* 매력 어필 */}
				<PointBox />
				{/* 나의 이상형 */}
				<TypeBox />
				{/* 라이프 스타일 */}
				<LifeStyleBox />
				{/* 매력 발산 포토북 */}
				<PhotoBox />
			</div>
			<div className="bg-white p-16">
				<Link href={'/my/edit'}>
					<Button className="w-full" leftIcon={<Icon name="edit" className="size-24" />}>
						프로필 수정하기
					</Button>
				</Link>
			</div>
		</>
	);
}
