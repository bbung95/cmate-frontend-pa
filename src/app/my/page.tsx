import { Metadata } from 'next';

import ProfileCard from './components/ProfileCard';

export const metadata: Metadata = {
	title: '크리스천메이트 - 마이페이지',
	description: '크리스천메이트 과제전형',
};

export default function My() {
	return (
		<div className="flex flex-col gap-16">
			{/* 프로필 카드 */}
			<ProfileCard />
		</div>
	);
}
