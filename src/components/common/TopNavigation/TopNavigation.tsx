'use client';

import { ReactNode } from 'react';

import Icon from '../Icon';

interface TopNavigationProps {
	title?: string;
	leftRender?: ReactNode;
	rightRender?: ReactNode;
	className?: string;
}

const TopNavigation = ({ title, leftRender, rightRender, className = '' }: TopNavigationProps) => {
	return (
		<header
			className={`border-gray-6 sticky top-0 z-50 flex h-48 items-center justify-between bg-white px-16 ${className}`}
		>
			<div className="flex min-w-40 items-center">{leftRender}</div>
			{title && <h1 className="text-gray-black text-b1-bold truncate">{title}</h1>}
			<div className="flex min-w-40 items-center justify-end">{rightRender}</div>
		</header>
	);
};

export const BackButton = () => {
	return (
		<button className="flex items-center" onClick={() => history.back()}>
			<Icon name="arrow" className="size-24" />
		</button>
	);
};

TopNavigation.BackButton = BackButton;

export default TopNavigation;
