import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: string;
	fullWidth?: boolean;
}

export default function TextArea({ label, error, fullWidth = false, className = '', ...props }: TextAreaProps) {
	const widthStyles = fullWidth ? 'w-full' : 'w-[300px]';
	const borderStyles = error
		? 'border-[var(--color-sub-red)]'
		: 'border-[var(--color-gray-4)] focus:border-[var(--color-main-coral-pink)]';

	return (
		<div className={`flex flex-col gap-2 ${widthStyles} ${className}`}>
			{label && <label className="text-[14px] font-bold text-[var(--color-gray-1)]">{label}</label>}
			<textarea
				className={`min-h-[150px] w-full rounded-[var(--radius-md)] border bg-[var(--color-white)] p-4 text-[16px] text-[var(--color-gray-black)] transition-all outline-none placeholder:text-[var(--color-gray-3)] disabled:cursor-not-allowed disabled:text-[var(--color-gray-3)] ${borderStyles}`}
				{...props}
			/>
			{error && <p className="text-[12px] text-[var(--color-sub-red)]">{error}</p>}
		</div>
	);
}
