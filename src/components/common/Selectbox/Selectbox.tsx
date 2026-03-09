import { SelectHTMLAttributes, ReactNode } from 'react';

interface SelectboxProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	error?: string;
	fullWidth?: boolean;
	children?: ReactNode;
}

export default function Selectbox({
	label,
	error,
	fullWidth = false,
	className = '',
	children,
	...props
}: SelectboxProps) {
	const widthStyles = fullWidth ? 'w-full' : 'w-[300px]';
	const borderStyles = error
		? 'border-[var(--color-sub-red)]'
		: 'border-[var(--color-gray-4)] focus:border-[var(--color-main-coral-pink)]';

	return (
		<div className={`flex flex-col gap-2 ${widthStyles} ${className}`}>
			{label && <label className="text-[14px] font-bold text-[var(--color-gray-1)]">{label}</label>}
			<div className="relative">
				<select
					className={`h-[48px] w-full cursor-pointer appearance-none rounded-[var(--radius-md)] border bg-[var(--color-white)] px-4 text-[16px] text-[var(--color-gray-black)] transition-all outline-none ${borderStyles} disabled:cursor-not-allowed disabled:text-[var(--color-gray-3)]`}
					{...props}
				>
					{children}
				</select>
				<div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
					<svg className="h-4 w-4 text-[var(--color-gray-2)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
					</svg>
				</div>
			</div>
			{error && <p className="text-[12px] text-[var(--color-sub-red)]">{error}</p>}
		</div>
	);
}
