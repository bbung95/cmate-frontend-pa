'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

import Button from '@/components/common/Button/Button';
import Field from '@/components/common/Field/Field';
import TextField from '@/components/common/TextField/TextField';
import useProfileStore from '@/stores/useProfile';

const ChangeHeightForm = () => {
	const profileStore = useProfileStore();

	const {
		register,
		formState: { isValid, errors },
		handleSubmit,
	} = useForm<{ height: string }>({
		defaultValues: { height: profileStore.profile.height },
		resolver: zodResolver(
			z.object({
				height: z.string().min(1, '키(신장)을 입력해주세요'),
			})
		),
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<{ height: string }> = (data) => {
		profileStore.changeProfile('height', data.height);
		history.back();
	};

	return (
		<>
			<div className="flex flex-1 flex-col gap-16 bg-white p-16">
				<div className="h-full">
					<Field>
						<Field.Label htmlFor="height">키(신장)을 입력해주세요</Field.Label>
						<TextField placeholder="170cm" id="height" {...register('height')} />
						{errors.height && <Field.ErrorMessage>{errors.height.message}</Field.ErrorMessage>}
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

export default ChangeHeightForm;
