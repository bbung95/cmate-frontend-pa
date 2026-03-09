import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonSize = 'xl' | 'l' | 'm' | 's';
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: ButtonSize;
	variant?: ButtonVariant;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	fullWidth?: boolean;
}

const sizeStyles: Record<ButtonSize, string> = {
	xl: 'h-[64px] px-[28px] rounded-[12px] text-[18px] font-bold tracking-[-0.3px]',
	l: 'h-[56px] px-[24px] rounded-[12px] text-[16px] font-bold tracking-[-0.3px]',
	m: 'h-[48px] px-[20px] rounded-[8px] text-[16px] font-bold tracking-[-0.3px]',
	s: 'h-[32px] px-[16px] rounded-[4px] text-[14px] font-regular tracking-[-0.2px]',
};

const variantStyles: Record<ButtonVariant, string> = {
	primary:
		'bg-[var(--color-main-coral-pink)] text-[var(--color-white)] hover:opacity-90 disabled:bg-[var(--color-gray-4)] disabled:text-[var(--color-gray-3)]',
	secondary:
		'bg-[var(--color-white)] border border-[var(--color-gray-4)] text-[var(--color-gray-1)] hover:bg-[var(--color-gray-6)] disabled:bg-[var(--color-gray-6)] disabled:text-[var(--color-gray-3)] disabled:border-[var(--color-gray-4)]',
	ghost: 'bg-transparent text-[var(--color-gray-1)] hover:bg-[var(--color-gray-6)] disabled:text-[var(--color-gray-3)]',
	link: 'bg-transparent text-[var(--color-main-coral-pink)] p-0 h-auto hover:underline disabled:text-[var(--color-gray-3)]',
};

export default function Button({
	size = 'm',
	variant = 'primary',
	leftIcon,
	rightIcon,
	fullWidth = false,
	className = '',
	children,
	...props
}: ButtonProps) {
	const baseStyles =
		'inline-flex items-center justify-center transition-all disabled:cursor-not-allowed whitespace-nowrap';
	const widthStyles = fullWidth ? 'w-full' : '';

	return (
		<button
			className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${className}`}
			{...props}
		>
			{leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
			{children}
			{rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
		</button>
	);
}
