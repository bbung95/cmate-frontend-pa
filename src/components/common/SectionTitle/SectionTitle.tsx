import { ReactNode } from 'react';

interface SectionTitleProps {
	title: string;
	description?: string;
	rightElement?: ReactNode;
	className?: string;
}

export default function SectionTitle({ title, description, rightElement, className = '' }: SectionTitleProps) {
	return (
		<div className={`flex flex-col gap-1 py-4 ${className}`}>
			<div className="flex items-center justify-between">
				<h2 className="text-[20px] font-bold tracking-[-0.4px] text-[var(--color-gray-black)]">{title}</h2>
				{rightElement && <div>{rightElement}</div>}
			</div>
			{description && <p className="text-[14px] leading-[20px] text-[var(--color-gray-2)]">{description}</p>}
		</div>
	);
}
