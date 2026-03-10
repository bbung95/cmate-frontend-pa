'use client';

import MockProfileImg from '@/assets/mock_profile.png';
import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import ProgressLine from '@/components/common/ProgressLine/ProgressLine';

const ProfileCard = () => {
	return (
		<div className="space-y-16 rounded-lg bg-white px-12 py-16 shadow-sm">
			<div className="flex items-center gap-12">
				<div className="relative size-100">
					<ProgressLine percentage={80} size={95} />
					<div className="absolute top-1/2 left-1/2 size-85 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
						<img src={MockProfileImg.src} className="size-full" alt="프로필 사진" />
					</div>
				</div>
				<div className="space-y-4">
					<h2 className="text-b1-bold text-gray-black">임승리 36</h2>
					<ul className="text-b2 text-gray-2 flex items-center gap-4">
						<li>서울</li>
						<li className="bg-gray-3 size-3 rounded-full"></li>
						<li>초혼</li>
						<li className="bg-gray-3 size-3 rounded-full"></li>
						<li>창신교회</li>
						<li className="bg-gray-3 size-3 rounded-full"></li>
						<li>사무직</li>
					</ul>
					<p className="text-b3 text-gray-2">
						프로필 완성도 <span className="text-main-coral-pink">80%</span>
					</p>
				</div>
			</div>
			<Button variant="secondary-line" className="w-full" leftIcon={<Icon name="volume" className="size-24" />}>
				목소리로 첫인상 전달하기
			</Button>
		</div>
	);
};

export default ProfileCard;
