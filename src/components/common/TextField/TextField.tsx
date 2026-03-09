import { InputHTMLAttributes, ReactNode } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	fullWidth?: boolean;
}

export default function TextField({
	label,
	error,
	leftIcon,
	rightIcon,
	fullWidth = false,
	className = '',
	...props
}: TextFieldProps) {
	const widthStyles = fullWidth ? 'w-full' : 'w-[300px]';
	const borderStyles = error
		? 'border-[var(--color-sub-red)]'
		: 'border-[var(--color-gray-4)] focus-within:border-[var(--color-main-coral-pink)]';

	return (
		<div className={`flex flex-col gap-2 ${widthStyles} ${className}`}>
			{label && <label className="text-[14px] font-bold text-[var(--color-gray-1)]">{label}</label>}
			<div
				className={`flex h-[44px] items-center rounded-[var(--radius-md)] border bg-[var(--color-white)] px-4 transition-all ${borderStyles}`}
			>
				{leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
				<input
					className="flex-1 border-none bg-transparent text-[16px] text-[var(--color-gray-black)] outline-none placeholder:text-[var(--color-gray-3)] disabled:cursor-not-allowed disabled:text-[var(--color-gray-3)]"
					{...props}
				/>
				{rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
			</div>
			{error && <p className="text-[12px] text-[var(--color-sub-red)]">{error}</p>}
		</div>
	);
}
