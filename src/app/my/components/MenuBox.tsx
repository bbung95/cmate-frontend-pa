import Link from 'next/link';

import Icon, { IconTypes } from '@/components/common/Icon';

const MENU_LIST: { name: string; icon: IconTypes; path: string }[] = [
	{ name: '나의 프로필 보기', icon: 'eye', path: '/my/profile' },
	{ name: '프로필 수정하기', icon: 'edit', path: '/my/edit' },
	{ name: '호감 리스트', icon: 'heart', path: '#' },
	{ name: '매니저 추천', icon: 'star', path: '#' },
	{ name: '파티공고 보기', icon: 'rss', path: '#' },
	{ name: '공지사항', icon: 'bell', path: '#' },
	{ name: '1:1 문의', icon: 'users', path: '#' },
	{ name: '설정', icon: 'settings', path: '#' },
];

const MenuBox = () => {
	return (
		<div className="space-y-16 rounded-lg bg-white px-20 py-12 shadow-sm">
			<ul className="flex flex-col items-center">
				{MENU_LIST.map((items) => (
					<Link key={items.name} href={items.path} className="border-gray-4 w-full not-last:border-b">
						<li className="flex h-56 w-full items-center justify-between">
							<div className="flex items-center gap-8">
								<Icon name={items.icon} className="text-gray-2 size-24" />
								<span className="text-b1 text-gray-black">{items.name}</span>
							</div>
							<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default MenuBox;
