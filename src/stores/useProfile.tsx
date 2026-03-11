import { createStore, useStore } from 'zustand';
import { persist } from 'zustand/middleware';

import { MarriageHistory } from '@/apis/profile/type';

type Store = {
	profile: {
		name: string;
		marriageHistory: MarriageHistory;
		height: string;
	};
	setInitProfile: (profile: Store['profile']) => void;
	changeProfile: (key: keyof Store['profile'], data: any) => void;
	isInit: boolean;
	reset: () => void;
};

const initialProfile: Store['profile'] = {
	name: '',
	marriageHistory: 'N',
	height: '0',
};

/**
 * profile 전역 Store
 *
 * @description
 * useProfileStore을 import 후 setToken 으로 사용
 *
 */
export const profileStore = createStore(
	persist<Store>(
		(set, get) => ({
			profile: initialProfile,
			isInit: false,
			setInitProfile: (profile) => {
				set({
					profile: profile,
					isInit: true,
				});
			},
			changeProfile: (key, data) => {
				const profile = get().profile;
				profile[key] = data;

				set({
					profile: profile,
				});
			},
			reset: () => {
				set({ profile: initialProfile, isInit: false });
			},
		}),
		{
			name: 'profile_storage',
		}
	)
);

const useProfileStore = () => {
	const store = useStore(profileStore);
	return store;
};

export default useProfileStore;
