import Link from 'next/link';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import Icon, { IconTypes } from '../Icon';

interface TabBarItemProps {
	icon: IconTypes;
	label: string;
	path: string;
	active?: boolean;
}

interface TabBarProps {
	children: ReactNode;
	className?: string;
}

export function TabBarItem({ icon, label, active = false, path }: TabBarItemProps) {
	return (
		<Link
			href={path}
			className={cn(
				`text-gray-3 flex h-full flex-1 flex-col items-center justify-center gap-4 transition-colors`,
				active ? 'text-main-coral-pink' : 'text-gray-3'
			)}
		>
			<Icon name={icon} className="size-24" />
			<span className="text-b3">{label}</span>
		</Link>
	);
}

export default function TabBar({ children, className = '' }: TabBarProps) {
	return (
		<nav
			className={`border-gray-6 bg--white fixed right-0 bottom-0 left-0 z-50 flex h-[var(--tab-bar-height)] items-center border-t bg-white px-16 pt-7 pb-30 ${className}`}
		>
			{children}
		</nav>
	);
}
