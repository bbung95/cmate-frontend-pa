'use client';

import Button from '@/components/common/Button/Button';
import Field from '@/components/common/Field/Field';
import RadioButton from '@/components/common/RadioButton/RadioButton';
import TextField from '@/components/common/TextField/TextField';
import TopNavigation from '@/components/common/TopNavigation/TopNavigation';

export default async function EditPage({ params }: { params: Promise<{ type: 'name' | 'marriage' | 'height' }> }) {
	const { type } = await params;

	return (
		<div className="flex min-h-[calc(100vh-var(--tab-bar-height))] flex-col">
			<TopNavigation leftRender={<TopNavigation.BackButton />} title="기본 정보" />
			<div className="flex flex-1 flex-col gap-16 bg-white p-16">
				<div className="h-full">
					{type === 'name' && (
						<Field>
							<Field.Label>이름을 변경하시겠어요?</Field.Label>
							<Field.HelpMessage>이름은 언제든지 수정할수 있습니다</Field.HelpMessage>
							<TextField placeholder="임승리" />
						</Field>
					)}
					{type === 'marriage' && (
						<Field>
							<Field.Label>결혼여부를 선택해주세요</Field.Label>
							<Field.ErrorMessage>
								# 미혼의 경우 초혼을 선택해주세요.
								<br />
								허위 기재시 민/형사상의 책임을 물으시게 됩니다.
							</Field.ErrorMessage>
							<div className="flex flex-col gap-8">
								<RadioButton label="초혼" value={'초혼'} />
								<RadioButton label="재혼" value={'재혼'} />
								<RadioButton label="사실혼" value={'사실혼'} />
							</div>
						</Field>
					)}
					{type === 'height' && (
						<Field>
							<Field.Label>키(신장)을 입력해주세요</Field.Label>
							<TextField placeholder="170cm" />
						</Field>
					)}
				</div>
			</div>
			<div className="sticky bottom-0 mt-auto bg-white p-16">
				<Button className="w-full" disabled>
					완료
				</Button>
			</div>
		</div>
	);
}
