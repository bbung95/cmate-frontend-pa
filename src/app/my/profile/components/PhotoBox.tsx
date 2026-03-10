import EmptyImg from '@/assets/empty_img.png';
import MockProfileImg from '@/assets/mock_profile.png';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';

const PhotoBox = () => {
	return (
		<div className="flex flex-col gap-16 bg-white p-16">
			<SectionTitle title="매력 발산 포토북" />
			<div className="grid grid-cols-3 gap-8">
				<div className="overflow-hidden rounded-md">
					<img src={MockProfileImg.src} alt="" className="aspect-109/120 object-cover" />
				</div>
				<div className="overflow-hidden rounded-md">
					<img src={EmptyImg.src} alt="" className="aspect-109/120 object-cover" />
				</div>
				<div className="overflow-hidden rounded-md">
					<img src={EmptyImg.src} alt="" className="aspect-109/120 object-cover" />
				</div>
			</div>
		</div>
	);
};

export default PhotoBox;
