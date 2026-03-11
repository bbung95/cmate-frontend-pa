'use client';

import { useRef, useState } from 'react';

import { MarriageHistory } from '@/apis/profile/type';
import EmptyImg from '@/assets/empty_img.png';
import Icon from '@/components/common/Icon';
import TextArea from '@/components/common/TextArea/TextArea';
import { MARRIAGE_HISTORY } from '@/enums/profile';
import { cn } from '@/lib/utils';

interface ProfileInfoProps {
	name?: string;
	marriageHistory?: MarriageHistory;
	images?: any[];
}

const ProfileInfo = ({ name, marriageHistory, images = [] }: ProfileInfoProps) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const scrollRef = useRef<HTMLDivElement>(null);

	const photos = images?.length > 0 ? images : [{ src: '' }];

	const handleScroll = () => {
		if (!scrollRef.current) return;
		const { scrollLeft, clientWidth } = scrollRef.current;
		const index = Math.round(scrollLeft / clientWidth);
		setActiveIndex(index);
	};

	return (
		<div className="bg-white">
			{/* 프로필 이미지 슬라이드 */}
			<div className="relative w-full overflow-hidden">
				<div className="absolute top-16 left-0 z-10 flex w-full flex-col items-center">
					<div className="flex gap-8">
						{photos.map((_, idx) => (
							<div
								key={idx}
								className={cn(
									'size-4 rounded-full transition-all duration-300',
									idx === activeIndex ? 'bg-gray-6' : 'bg-[#767785]/70'
								)}
							/>
						))}
					</div>
				</div>
				<div
					ref={scrollRef}
					onScroll={handleScroll}
					className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto"
					style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
				>
					{photos.map((image, idx) => (
						<div key={idx} className="w-full shrink-0 snap-start">
							<img src={image.src || EmptyImg.src} alt={image.alt} className="aspect-375/343 w-full object-cover" />
						</div>
					))}
				</div>
			</div>
			{/* 프로필 소개 */}
			<div className="flex flex-col gap-16 p-16">
				<div className="space-y-4">
					<h2 className="text-h1 text-gray-black">{name} 36</h2>
					<ul className="text-b2 text-gray-2 flex items-center gap-4">
						<li>서울</li>
						<li className="bg-gray-3 size-3 rounded-full"></li>
						<li>{MARRIAGE_HISTORY[marriageHistory ?? 'N']}</li>
						<li className="bg-gray-3 size-3 rounded-full"></li>
						<li>창신교회</li>
						<li className="bg-gray-3 size-3 rounded-full"></li>
						<li>사무직</li>
					</ul>
				</div>

				<div className="flex flex-col gap-12">
					<div className="flex items-center justify-between">
						<h3 className="text-b1-bold text-gray-1">나의 소개</h3>
						<button className="text-b2 text-gray-1 flex items-center gap-4">
							자세히 보기
							<Icon name="arrow" className="size-16 rotate-180" />
						</button>
					</div>
					<TextArea value={'하나님의 말씀으로 하나님의 다음세대를 세우는 하나님의 동역자!'} readOnly />
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
