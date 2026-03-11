'use client';

import FileImg from '@/assets/file_img.png';
import MockProfileImg from '@/assets/mock_profile.png';
import Icon from '@/components/common/Icon';

const ProfilePhotoEdit = () => {
	return (
		<div className="flex flex-col gap-12 bg-white p-16">
			<div className="relative w-full overflow-hidden">
				<img src={MockProfileImg.src} alt={'메인'} className="aspect-343/300 w-full object-cover" />
				<span className="bg-main-coral-pink text-b3 absolute top-16 left-12 rounded-2xl px-8 py-3 text-white">
					메인 프로필
				</span>
				<button className="bg-gray-black absolute right-12 bottom-16 flex items-center justify-center rounded-full p-8">
					<Icon name="edit" className="size-20 text-white" />
				</button>
			</div>

			<div className="grid grid-cols-4 gap-6">
				<div className="overflow-hidden rounded-md">
					<img src={MockProfileImg.src} alt={'서브'} className="aspect-81/85 object-cover" />
				</div>
				<div className="overflow-hidden rounded-md">
					<img src={MockProfileImg.src} alt={'서브'} className="aspect-81/85 object-cover" />
				</div>
				<div className="overflow-hidden rounded-md">
					<img src={FileImg.src} alt={'서브'} className="aspect-81/85 object-cover" />
				</div>
				<div className="overflow-hidden rounded-md">
					<img src={FileImg.src} alt={'서브'} className="aspect-81/85 object-cover" />
				</div>
			</div>
		</div>
	);
};

export default ProfilePhotoEdit;
