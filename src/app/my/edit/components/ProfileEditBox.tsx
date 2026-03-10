import Button from '@/components/common/Button/Button';
import Icon from '@/components/common/Icon';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';

const ProfileEditBox = () => {
	return (
		<div className="flex flex-col gap-16 bg-white p-16">
			<SectionTitle title="기본 정보" />
			<div className="divide-gray-4 divide-y">
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">이름</label>
					<p className="text-b1-bold text-gray-black">임승리</p>
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">성별</label>
					<p className="text-b1-bold text-gray-3">여</p>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">나이</label>
					<p className="text-b1-bold text-gray-3">89년생</p>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">결혼경험</label>
					<p className="text-b1-bold text-gray-black">초혼</p>
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">신장</label>
					<p className="text-b1-bold text-gray-black">170cm</p>
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">나의 체형</label>
					<p className="text-b1-bold text-gray-black">조금 통통</p>
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">거주 지역</label>
					<p className="text-b1-bold text-gray-black">서울</p>
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">최종학력</label>
					<p className="text-b1-bold text-gray-black">대졸</p>
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">학교/전공</label>
					<p className="text-b1-bold text-gray-black">총신대학교 / 신학과</p>
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">직장명/직무</label>
					<p className="text-b1-bold text-gray-black">크리스천 메이트 / 커플 매니져</p>
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">연봉</label>
					<p className="text-b1-bold text-gray-black">3000 ~ 4000만원</p>
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">출석 교회명</label>
					<p className="text-b1-bold text-gray-black">창신교회</p>
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">모태신앙</label>
					<p className="text-b1-bold text-gray-black">그렇다</p>
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">음주 여부</label>
					<p className="text-b1-bold text-gray-black">아예 하지 않습니다</p>
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				</div>
				<div className="grid grid-cols-[8rem_1fr_2.4rem] gap-20 py-16">
					<label className="text-b1 text-gray-2">흡연 여부</label>
					<p className="text-b1-bold text-gray-black">비흡연</p>
					<button>
						<Icon name="arrow" className="text-gray-3 size-24 rotate-180" />
					</button>
				</div>
			</div>
			<Button variant="secondary-line" className="w-full" leftIcon={<Icon name="volume" className="size-24" />}>
				목소리 녹음하기
			</Button>
		</div>
	);
};

export default ProfileEditBox;
