import SectionTitle from '@/components/common/SectionTitle/SectionTitle';

const PointBox = () => {
	return (
		<div className="flex flex-col gap-16 bg-white p-16">
			<SectionTitle title="나의 매력 어필" />
			<div className="border-gray-4 min-h-127 rounded-lg border px-12 py-16">
				<ul className="flex flex-wrap gap-8">
					<li className="bg-gray-5 text-b3 text-gray-1 rounded-2xl px-8 py-3">선함</li>
				</ul>
			</div>
		</div>
	);
};

export default PointBox;
