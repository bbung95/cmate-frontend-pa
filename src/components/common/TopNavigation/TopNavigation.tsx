import { ReactNode } from 'react';

interface TopNavigationProps {
	title?: string;
	leftElement?: ReactNode;
	rightElement?: ReactNode;
	className?: string;
}

export default function TopNavigation({ title, leftElement, rightElement, className = '' }: TopNavigationProps) {
	return (
		<header
			className={`flex h-[48px] items-center justify-between border-b border-[var(--color-gray-6)] bg-[var(--color-white)] px-4 ${className}`}
		>
			<div className="flex min-w-[40px] items-center">{leftElement}</div>

			{title && <h1 className="truncate text-[18px] font-bold text-[var(--color-gray-black)]">{title}</h1>}

			<div className="flex min-w-[40px] items-center justify-end">{rightElement}</div>
		</header>
	);
}
