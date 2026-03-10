'use client';

import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import TopNavigation from '@/components/common/TopNavigation/TopNavigation';

import IntroductionEditBox from './components/IntroductionEditBox';
import LifeStyleEditBox from './components/LifeStyleEditBox';
import PhotoEditBox from './components/PhotoEditBox';
import PointEditBox from './components/PointEditBox';
import ProfileEditBox from './components/ProfileEditBox';
import ProfilePhotoEdit from './components/ProfilePhotoEdit';
import TypeEditBox from './components/TypeEditBox';

export default function EditProfilePage() {
	return (
		<>
			<TopNavigation leftRender={<TopNavigation.BackButton />} title="프로필 수정하기" />
			<div className="flex flex-col gap-16 pt-16">
				<ProfilePhotoEdit />
				<ProfileEditBox />
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
				<Button className="w-full" leftIcon={<Icon name="edit" className="size-24" />}>
					프로필 저장하기
				</Button>
			</div>
		</>
	);
}
