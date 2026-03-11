'use client';

import { ChangeEvent } from 'react';

import { useDeletePhotos, useUploadPhotos } from '@/apis/photos/query';
import FileImg from '@/assets/file_img.png';
import Icon from '@/components/common/Icon';
import { cn } from '@/lib/utils';

import PhotoItem, { InternalPhotoItem } from './PhotoItem';

interface ProfilePhotoEditProps {
	images: InternalPhotoItem[];
}

/**
 * @param images 현재 이미지 리스트
 * @param onChange 이미지 리스트 변경 이벤트
 * @param extension 허용 확장자
 */
const ProfilePhotoEdit = ({ images }: ProfilePhotoEditProps) => {
	const MAX_IMAGE_COUNT = 4;

	const { mutateAsync: uploadPhotos } = useUploadPhotos();
	const { mutateAsync: deletePhoto } = useDeletePhotos();

	const handleUploadPhotos = (e: ChangeEvent<HTMLInputElement>) => {
		const newFiles = e.target.files;
		if (!newFiles) return;

		const filesArray = Array.from(newFiles);

		if (filesArray.length + images.length > MAX_IMAGE_COUNT) {
			alert('이미지는 최대 ' + MAX_IMAGE_COUNT + '장까지만 등록 가능합니다.');
			return;
		}

		const newImages = [
			...images,
			...filesArray.map((item) => {
				return { idx: 0, fileName: item.name, sortNum: undefined, originFile: item, src: undefined };
			}),
		];

		const formData = new FormData();

		newImages.forEach((file) => {
			if (file.originFile) {
				formData.append(`photos`, file.originFile);
			}
		});
		formData.append('sortNums', JSON.stringify(filesArray.map((_, idx) => idx + 1)));

		uploadPhotos(formData).then((res) => {
			if (res.status === 201) {
				alert(res.data.message);
			}
		});

		e.target.value = '';
	};

	const handleDeletePhoto = (idx?: number) => {
		if (idx) {
			deletePhoto(idx).then((res) => {
				if (res.status === 200) {
					alert(res.data.message);
				}
			});
		}
	};

	const emptySlotCount = Math.max(0, MAX_IMAGE_COUNT - images.length);

	return (
		<div className={cn('flex flex-col gap-12 bg-white p-16')}>
			{/* 메인 프로필 프리뷰 영역 */}
			<div className="bg-gray-1 relative aspect-343/300 w-full overflow-hidden rounded-md border border-gray-100">
				<img
					src={images[0]?.src || FileImg.src}
					alt="메인 프로필 프리뷰"
					className="size-full object-cover"
					onError={(e) => (e.currentTarget.src = FileImg.src)}
				/>
				<div className="bg-main-coral-pink text-b3 absolute top-16 left-12 rounded-2xl px-12 py-4 text-white shadow-sm">
					메인 프로필
				</div>
				<label className="bg-gray-black/70 hover:bg-gray-black absolute right-12 bottom-16 flex cursor-pointer items-center justify-center rounded-full p-10 transition-colors">
					<Icon name="edit" className="size-20 text-white" />
					<input
						type="file"
						className="hidden"
						onChange={handleUploadPhotos}
						multiple
						accept="image/*"
						disabled={images.length >= 4}
					/>
				</label>
			</div>

			{/* 하단 서브 슬롯 그리드 */}
			<div className="grid grid-cols-4 gap-8">
				{images.map((image, index) => (
					<PhotoItem key={image.idx + '_' + index} image={image} index={index} onDelete={handleDeletePhoto} />
				))}

				{/* 빈 슬롯 (추가 버튼) */}
				{Array.from({ length: emptySlotCount }).map((_, idx) => (
					<label
						key={`empty-${idx}`}
						className="flex cursor-pointer items-center justify-center rounded-md hover:opacity-80"
					>
						<img src={FileImg.src} alt="추가" className="aspect-81/85 overflow-hidden" />
						<input type="file" className="hidden" onChange={handleUploadPhotos} multiple accept="image/*" />
					</label>
				))}
			</div>
		</div>
	);
};

export default ProfilePhotoEdit;
