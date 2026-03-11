'use client';

import FileImg from '@/assets/file_img.png';
import Icon from '@/components/common/Icon';

export interface InternalPhotoItem {
	idx: string | number;
	userId: string | ArrayBuffer | null | undefined;
	fileName: string;
	sortNum?: number;
	originFile?: File;
	src?: any;
}

interface PhotoItemProps {
	image: InternalPhotoItem;
	index: number;
	onDelete: (sortNum?: number) => void;
}

const PhotoItem = ({ image, index, onDelete }: PhotoItemProps) => {
	return (
		<div className="group bg-gray-1 relative aspect-81/85 overflow-hidden rounded-md border border-gray-200">
			<div className="size-full">
				<img
					src={image.src || FileImg.src}
					alt={`프로필_${index + 1}`}
					className="size-full object-cover"
					onError={(e) => (e.currentTarget.src = FileImg.src)}
				/>
			</div>
			{/* 삭제 버튼 */}
			<button
				type="button"
				onClick={(e) => {
					e.stopPropagation();
					onDelete(image.sortNum);
				}}
				className="bg-gray-black/50 absolute top-4 right-4 z-10 flex size-20 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100"
			>
				<Icon name="xCircle" className="size-16 text-white" />
			</button>
			{/* 메인이미지 표시 */}
			{index === 0 && (
				<div className="bg-main-coral-pink/90 pointer-events-none absolute bottom-0 left-0 w-full py-1 text-center text-[1rem] text-white">
					메인
				</div>
			)}
		</div>
	);
};

export default PhotoItem;
