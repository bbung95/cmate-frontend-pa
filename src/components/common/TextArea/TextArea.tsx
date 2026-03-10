'use client';

import { forwardRef, TextareaHTMLAttributes, useImperativeHandle, useRef } from 'react';

import { cn } from '@/lib/utils';

import Icon from '../Icon';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ error, className = '', ...props }, ref) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

	const handleReset = () => {
		if (textareaRef.current) {
			textareaRef.current.value = '';
			textareaRef.current.dispatchEvent(new Event('input', { bubbles: true }));
		}
	};

	return (
		<div className="relative">
			<textarea
				ref={textareaRef}
				placeholder=" "
				className={cn([
					'peer text-gray-black text-b1 resize-none bg-white',
					'border-gray-4 min-h-[150px] w-full rounded-md border pt-12 pr-52 pl-20 transition-all outline-none disabled:cursor-not-allowed',
					'placeholder-shown:pr-20 read-only:pr-20 disabled:pr-20',
					'hover:border-gray-3 hover:placeholder:text-gray-2 focus:border-gray-3 placeholder:text-gray-3',
					'disabled:bg-gray-5 disabled:border-gray-4 disabled:text-gray-3',
					error && 'border-sub-red',
					className,
				])}
				{...props}
			/>
			<button
				type="button"
				onClick={handleReset}
				className="absolute top-12 right-20 peer-placeholder-shown:hidden peer-read-only:hidden peer-disabled:hidden"
			>
				<Icon name="xCircle" className="text-gray-3 size-24" />
			</button>
		</div>
	);
});

TextArea.displayName = 'TextArea';

export default TextArea;
