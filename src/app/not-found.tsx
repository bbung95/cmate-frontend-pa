import Link from 'next/link';

import Button from '@/components/common/Button/Button';

export default function NotFound() {
	return (
		<main className="flex min-h-dvh w-full flex-col">
			<div className="flex flex-1 flex-col items-center justify-center gap-40 px-20 text-center">
				<div className="flex flex-col gap-16">
					<span className="text-gray-2 text-[14rem] leading-none font-black select-none max-md:text-[12rem]">404</span>
					<div className="space-y-8">
						<h1 className="text-gray-black text-[4rem] leading-[1.3] font-bold max-md:text-[2.8rem]">
							페이지를 찾을 수 없습니다
						</h1>
					</div>
				</div>

				<Link href="/" className="w-full max-w-lg">
					<Button>돌아가기</Button>
				</Link>
			</div>
		</main>
	);
}
