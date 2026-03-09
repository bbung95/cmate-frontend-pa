import { InputHTMLAttributes } from 'react';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export default function RadioButton({ label, className = '', ...props }: RadioButtonProps) {
	return (
		<label className={`group flex cursor-pointer items-center gap-2 ${className}`}>
			<div className="relative flex h-6 w-6 items-center justify-center">
				<input
					type="radio"
					className="peer h-6 w-6 appearance-none rounded-full border border-[var(--color-gray-4)] bg-[var(--color-white)] transition-all checked:border-[var(--color-main-coral-pink)] disabled:cursor-not-allowed disabled:border-[var(--color-gray-4)]"
					{...props}
				/>
				<div className="pointer-events-none absolute h-3 w-3 rounded-full bg-[var(--color-main-coral-pink)] opacity-0 transition-opacity peer-checked:opacity-100" />
			</div>
			{label && (
				<span className="text-[14px] text-[var(--color-gray-1)] transition-colors group-hover:text-[var(--color-gray-black)]">
					{label}
				</span>
			)}
		</label>
	);
}
