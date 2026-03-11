import SectionTitle from '@/components/common/SectionTitle/SectionTitle';

const LifeStyleBox = () => {
	return (
		<div className="flex flex-col gap-16 bg-white p-16">
			<SectionTitle
				title="라이프 스타일"
				rightRender={
					<p className="text-b3 text-gray-2">
						공통 라이프 스타일 <span className="text-sub-red">3</span>개
					</p>
				}
			/>
			<div className="border-gray-4 min-h-127 rounded-lg border px-12 py-16">
				<ul className="flex flex-wrap gap-8">
					<li className="text-b3 bg-main-coral-pink/20 text-main-coral-pink rounded-2xl px-8 py-3">✝️ 신앙서적</li>
					<li className="bg-gray-5 text-b3 text-gray-1 rounded-2xl px-8 py-3">👟 러닝</li>
				</ul>
			</div>
		</div>
	);
};

export default LifeStyleBox;
