import { forwardRef, InputHTMLAttributes, ReactNode, useImperativeHandle, useRef } from 'react';

import { cn } from '@/lib/utils';

import Icon from '../Icon';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ className = '', error, ...props }, ref) => {
	const textRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => textRef.current as HTMLInputElement);

	const handleReset = () => {
		if (textRef.current) {
			textRef.current.value = '';
			textRef.current.dispatchEvent(new Event('input', { bubbles: true }));
		}
	};

	return (
		<div className={`relative`}>
			<input
				ref={textRef}
				className={cn([
					'peer text-gray-black text-b1 border-gray-3 placeholder:text-gray-3 h-44 w-full rounded-lg border bg-white py-11 pr-52 pl-20 outline-none',
					'placeholder-shown:pr-20 read-only:pr-20',
					'hover:border-gray-2 hover:placeholder:text-gray-2 focus:border-gray-3 placeholder:text-gray-3 placeholder:text-16r',
					'disabled:bg-gray-5 disabled:border-gray-4 disabled:text-gray-3 disabled:cursor-not-allowed disabled:pr-20',
					error && 'border-sub-red',
					className,
				])}
				{...props}
			/>
			<button
				type="button"
				onClick={handleReset}
				className="absolute top-11 right-20 peer-placeholder-shown:hidden peer-read-only:hidden peer-disabled:hidden"
			>
				<Icon name="xCircle" className="text-gray-3 size-24" />
			</button>
		</div>
	);
});

TextField.displayName = 'TextField';

export default TextField;
