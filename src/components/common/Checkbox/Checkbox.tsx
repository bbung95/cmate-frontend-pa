import { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export default function Checkbox({ label, className = '', ...props }: CheckboxProps) {
	return (
		<label className={`group flex cursor-pointer items-center gap-2 ${className}`}>
			<div className="relative flex h-6 w-6 items-center justify-center">
				<input
					type="checkbox"
					className="peer h-6 w-6 appearance-none rounded-sm border border-[var(--color-gray-4)] bg-[var(--color-white)] transition-all checked:border-[var(--color-main-coral-pink)] checked:bg-[var(--color-main-coral-pink)] disabled:cursor-not-allowed disabled:border-[var(--color-gray-4)] disabled:bg-[var(--color-gray-5)]"
					{...props}
				/>
				<svg
					className="pointer-events-none absolute h-4 w-4 text-[var(--color-white)] opacity-0 transition-opacity peer-checked:opacity-100"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
				</svg>
			</div>
			{label && (
				<span className="text-[14px] text-[var(--color-gray-1)] transition-colors group-hover:text-[var(--color-gray-black)]">
					{label}
				</span>
			)}
		</label>
	);
}
