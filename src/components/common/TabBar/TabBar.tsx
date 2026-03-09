import { ReactNode } from 'react';

interface TabBarItemProps {
	icon: ReactNode;
	label: string;
	active?: boolean;
	onClick?: () => void;
}

interface TabBarProps {
	children: ReactNode;
	className?: string;
}

export function TabBarItem({ icon, label, active = false, onClick }: TabBarItemProps) {
	const colorStyles = active ? 'text-[var(--color-main-coral-pink)]' : 'text-[var(--color-gray-3)]';

	return (
		<button
			onClick={onClick}
			className={`flex h-full flex-1 flex-col items-center justify-center gap-1 ${colorStyles} transition-colors`}
		>
			<div className="flex h-6 w-6 items-center justify-center">{icon}</div>
			<span className="text-[10px] font-medium">{label}</span>
		</button>
	);
}

export default function TabBar({ children, className = '' }: TabBarProps) {
	return (
		<nav
			className={`pb-safe fixed right-0 bottom-0 left-0 flex h-[83px] items-center border-t border-[var(--color-gray-6)] bg-[var(--color-white)] ${className}`}
		>
			{children}
		</nav>
	);
}
