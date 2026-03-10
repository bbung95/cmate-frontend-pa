import { TextareaHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: string;
}

export default function TextArea({ error, className = '', ...props }: TextAreaProps) {
	return (
		<textarea
			className={cn([
				'text-gray-black placeholder:text-gray-3 disabled:text-gray-3 text-b1 resize-none bg-white',
				'border-gray-4 min-h-[150px] w-full rounded-md border px-20 pt-12 transition-all outline-none disabled:cursor-not-allowed',
				'focus:border-sub-red',
				error && 'border-sub-red',
				className,
			])}
			{...props}
		/>
	);
}
