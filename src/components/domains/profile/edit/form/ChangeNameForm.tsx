'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

import Button from '@/components/common/Button/Button';
import Field from '@/components/common/Field/Field';
import TextField from '@/components/common/TextField/TextField';
import useProfileStore from '@/stores/useProfile';

const ChangeNameForm = () => {
	const profileStore = useProfileStore();

	const {
		register,
		formState: { isValid, errors },
		handleSubmit,
	} = useForm<{ name: string }>({
		defaultValues: { name: profileStore.profile.name },
		resolver: zodResolver(
			z.object({
				name: z.string().min(1, '이름을 입력해주세요.'),
			})
		),
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<{ name: string }> = (data) => {
		profileStore.changeProfile('name', data.name);
		history.back();
	};

	return (
		<>
			<div className="flex flex-1 flex-col gap-16 bg-white p-16">
				<div className="h-full">
					<Field>
						<Field.Label htmlFor="name">이름을 변경하시겠어요?</Field.Label>
						<Field.HelpMessage>이름은 언제든지 수정할수 있습니다</Field.HelpMessage>
						<TextField id="name" placeholder="임승리" defaultValue={profileStore.profile.name} {...register('name')} />
						{errors.name && <Field.ErrorMessage>{errors.name.message}</Field.ErrorMessage>}
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

export default ChangeNameForm;
