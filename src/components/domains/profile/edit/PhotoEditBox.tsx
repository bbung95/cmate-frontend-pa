import FileImg from '@/assets/file_img.png';
import MockProfileImg from '@/assets/mock_profile.png';
import Icon from '@/components/common/Icon';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';

const PhotoEditBox = () => {
	return (
		<div className="flex flex-col gap-16 bg-white p-16">
			<SectionTitle
				title="포토북 등록하기"
				rightRender={
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				}
			/>
			<div className="grid grid-cols-3 gap-8">
				<div className="overflow-hidden rounded-md">
					<img src={MockProfileImg.src} alt="" className="aspect-109/120 object-cover" />
				</div>
				<div className="overflow-hidden rounded-md">
					<img src={FileImg.src} alt="" className="aspect-109/120 object-cover" />
				</div>
				<div className="overflow-hidden rounded-md">
					<img src={FileImg.src} alt="" className="aspect-109/120 object-cover" />
				</div>
			</div>
		</div>
	);
};

export default PhotoEditBox;
