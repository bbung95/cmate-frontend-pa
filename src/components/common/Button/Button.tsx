import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
}

export const buttonVariants = cva(
	[
		'inline-flex items-center gap-8 justify-center transition-all disabled:cursor-not-allowed whitespace-nowrap rounded-md',
	],
	{
		variants: {
			variant: {
				primary:
					'bg-main-coral-pink text-white hover:filter-[brightness(0.9)] disabled:filter-none disabled:bg-main-coral-pink/12 disabled:text-main-coral-pink/30',
				'secondary-line':
					'bg-white border border-main-coral-pink/50 text-main-coral-pink hover:bg-main-coral-pink/10 disabled:text-main-coral-pink/12 disabled:border-main-coral-pink/30',
				ghost: 'bg-transparent text-gray-black hover:bg-gray-3 disabled:text-gray-3 disabled:bg-gray-5',
				'text-link': 'bg-transparent text-gray-1 p-0 h-auto hover:text-gray-black disabled:text-gray-3',
			},
			size: {
				xl: 'h-64 px-28 text-h2',
				l: 'h-56 px-24 text-h2',
				m: 'h-48 px-20 text-b1-bold',
				s: 'h-32 px-16 text-b2-bold',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'm',
		},
	}
);

export default function Button({
	size = 'm',
	variant = 'primary',
	leftIcon,
	rightIcon,
	className = '',
	children,
	...props
}: ButtonProps) {
	return (
		<button className={`${buttonVariants({ size, variant })} ${className}`} {...props}>
			{leftIcon && <span className="flex items-center">{leftIcon}</span>}
			<p>{children}</p>
			{rightIcon && <span className="flex items-center">{rightIcon}</span>}
		</button>
	);
}
