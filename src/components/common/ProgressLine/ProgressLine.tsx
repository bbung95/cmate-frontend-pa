import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface ProfileProgressProps {
	percentage: number; // 0 ~ 100
	size?: number;
	className?: string;
}

const ProgressLine = ({ percentage, size = 100, className }: ProfileProgressProps) => {
	const radius = size / 2; // 원의 반지름
	const circumference = 2 * Math.PI * radius; // 원둘레 (약 282.7)

	const [offset, setOffset] = useState(circumference);

	useEffect(() => {
		const progressOffset = circumference - (percentage / 100) * circumference;
		const frame = requestAnimationFrame(() => {
			setOffset(progressOffset);
		});
		return () => cancelAnimationFrame(frame);
	}, [percentage, circumference]);

	return (
		<svg
			width="101"
			height="101"
			viewBox="0 0 101 101"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ transform: 'rotate(-90deg)' }}
			className={cn('text-main-coral-pink', className)}
		>
			<circle cx="50" cy="50" r="47.5" stroke="#E4E6F0" strokeWidth="3" />
			<circle
				cx="50"
				cy="50"
				r={radius}
				fill="transparent"
				stroke="currentColor"
				strokeWidth="3"
				strokeDasharray={circumference}
				strokeDashoffset={offset}
				strokeLinecap="round" // 끝부분을 둥글게
				style={{ transition: 'stroke-dashoffset 0.8s ease-in-out' }}
			/>
		</svg>
	);
};

export default ProgressLine;
