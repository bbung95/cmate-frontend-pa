import { InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export default function RadioButton({ label, className = '', ...props }: RadioButtonProps) {
	return (
		<label
			className={cn([
				'group border-gray-4 flex h-44 w-full cursor-pointer items-center justify-between gap-8 rounded-lg border px-18 py-12 transition-colors',
				'has-checked:border-main-coral-pink',
				className,
			])}
		>
			<span className="text-gray-2 text-b1 group-has-checked:text-gray-black group-hover:text-gray-black transition-colors">
				{label}
			</span>
			<div className="relative flex size-24 items-center justify-center">
				<input
					type="radio"
					className="peer border-gray-4 checked:border-main-coral-pink disabled:border-gray-4 size-24 appearance-none rounded-full border-2 bg-white transition-all disabled:cursor-not-allowed"
					{...props}
				/>
				<div className="bg-main-coral-pink pointer-events-none absolute size-10 rounded-full opacity-0 transition-opacity peer-checked:opacity-100" />
			</div>
		</label>
	);
}
