import Icon from '@/components/common/Icon';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import TextArea from '@/components/common/TextArea/TextArea';

const IntroductionEditBox = () => {
	return (
		<div className="flex flex-col gap-16 bg-white p-16">
			<SectionTitle
				title="나의 소개"
				rightRender={
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				}
			/>
			<p className="text-b1 text-gray-2">나를 한줄로 표현한다면?</p>
			<TextArea value={'하나님의 말씀으로 하나님의 다음세대를 세우는 하나님의 동역자!'} disabled />
		</div>
	);
};

export default IntroductionEditBox;
