'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

import { MarriageHistory } from '@/apis/profile/type';
import Button from '@/components/common/Button/Button';
import Field from '@/components/common/Field/Field';
import RadioButton from '@/components/common/RadioButton/RadioButton';
import useProfileStore from '@/stores/useProfile';

const ChangeMarriageForm = () => {
	const profileStore = useProfileStore();

	const {
		register,
		formState: { isValid, errors },
		handleSubmit,
	} = useForm<{ marriageHistory: MarriageHistory | 'Y1' | 'Y2' }>({
		defaultValues: { marriageHistory: profileStore.profile.marriageHistory },
		resolver: zodResolver(
			z.object({
				marriageHistory: z.enum(['Y', 'Y1', 'Y2', 'N'], '결혼여부를 선택해주세요.'),
			})
		),
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<{ marriageHistory: string }> = (data) => {
		profileStore.changeProfile('marriageHistory', data.marriageHistory);
		history.back();
	};

	return (
		<>
			<div className="flex flex-1 flex-col gap-16 bg-white p-16">
				<div className="h-full">
					<Field>
						<Field.Label>결혼여부를 선택해주세요</Field.Label>
						<Field.ErrorMessage>
							# 미혼의 경우 초혼을 선택해주세요.
							<br />
							허위 기재시 민/형사상의 책임을 물으시게 됩니다.
						</Field.ErrorMessage>
						<div className="flex flex-col gap-8">
							<RadioButton label="초혼" value={'Y'} {...register('marriageHistory')} />
							<RadioButton label="재혼" value={'Y1'} {...register('marriageHistory')} />
							<RadioButton label="사실혼" value={'Y2'} {...register('marriageHistory')} />
						</div>
						{errors.marriageHistory && <Field.ErrorMessage>{errors.marriageHistory.message}</Field.ErrorMessage>}
					</Field>
				</div>
			</div>
			<div className="sticky bottom-0 mt-auto bg-white p-16">
				<Button className="w-full" disabled={!isValid} onClick={handleSubmit(onSubmit)}>
					완료
				</Button>
			</div>
		</>
	);
};

export default ChangeMarriageForm;
