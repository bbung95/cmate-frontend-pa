'use client';

import { useEffect } from 'react';

import PhotoEditBox from '@//components/domains/profile/edit/PhotoEditBox';
import { useChangeProfile, useGetProfile } from '@/apis/profile/query';
import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import TopNavigation from '@/components/common/TopNavigation/TopNavigation';
import IntroductionEditBox from '@/components/domains/profile/edit/IntroductionEditBox';
import LifeStyleEditBox from '@/components/domains/profile/edit/LifeStyleEditBox';
import PointEditBox from '@/components/domains/profile/edit/PointEditBox';
import ProfileEditBox from '@/components/domains/profile/edit/ProfileEditBox';
import ProfilePhotoEdit from '@/components/domains/profile/edit/ProfilePhotoEdit';
import TypeEditBox from '@/components/domains/profile/edit/TypeEditBox';
import useProfileStore from '@/stores/useProfile';

export default function EditProfilePage() {
	const { data: profileData } = useGetProfile();
	const { mutateAsync: changeProfile } = useChangeProfile();

	const profileStore = useProfileStore();

	const handleSubmit = () => {
		if (!profileData?.data) return;

		if (!confirm('프로필을 수정하시겠습니까?')) return;

		const { name, marriageHistory, height } = profileData.data;

		changeProfile({ name, marriageHistory, height }).then((res) => {
			if (res.status === 200) {
				alert(res.data.message);
			}
		});
	};

	useEffect(() => {
		if (profileData?.data) {
			profileStore.setInitProfile(profileData.data);
		}
	}, [profileData]);

	return (
		<>
			<TopNavigation leftRender={<TopNavigation.BackButton />} title="프로필 수정하기" />
			<div className="flex flex-col gap-16 pt-16">
				<ProfilePhotoEdit />
				<ProfileEditBox data={profileData?.data} />
				{/* 포토북 */}
				<PhotoEditBox />
				{/* 나의 소개 */}
				<IntroductionEditBox />
				{/* 매력 어필 */}
				<PointEditBox />
				{/* 나의 이상형 */}
				<TypeEditBox />
				{/* 라이프 스타일 */}
				<LifeStyleEditBox />
			</div>
			<div className="bg-white p-16">
				<Button className="w-full" leftIcon={<Icon name="edit" className="size-24" />} onClick={handleSubmit}>
					프로필 저장하기
				</Button>
			</div>
		</>
	);
}
