'use client';

import { redirect, useParams } from 'next/navigation';

import TopNavigation from '@/components/common/TopNavigation/TopNavigation';
import ChangeHeightForm from '@/components/domains/profile/edit/form/ChangeHeightForm';
import ChangeMarriageForm from '@/components/domains/profile/edit/form/ChangeMarriageForm';
import ChangeNameForm from '@/components/domains/profile/edit/form/ChangeNameForm';
import useProfileStore from '@/stores/useProfile';

export default function EditPage() {
	const { type } = useParams<{ type: 'name' | 'marriage' | 'height' }>();

	const profileStore = useProfileStore();

	const isValidType = type === 'name' || type === 'marriage' || type === 'height';

	if (!profileStore.isInit || !isValidType) {
		redirect('/my/edit');
	}

	return (
		<div className="flex min-h-[calc(100vh-var(--tab-bar-height))] flex-col">
			<TopNavigation leftRender={<TopNavigation.BackButton />} title="기본 정보" />
			{/* 이름 */}
			{type === 'name' && <ChangeNameForm />}
			{type === 'marriage' && <ChangeMarriageForm />}
			{type === 'height' && <ChangeHeightForm />}
		</div>
	);
}
