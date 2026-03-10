import { ReactNode } from 'react';

interface SectionTitleProps {
	title: string;
	rightRender?: ReactNode;
	className?: string;
}

export default function SectionTitle({ title, rightRender, className = '' }: SectionTitleProps) {
	return (
		<div className={`flex items-center justify-between gap-12 py-4 ${className}`}>
			<h2 className="text-gray-black text-h2">{title}</h2>
			{rightRender && rightRender}
		</div>
	);
}
