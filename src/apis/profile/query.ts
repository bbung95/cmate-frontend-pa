import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { AxiosResponseType } from '@/types';

import { api } from '..';
import { RequestPutProfileType, ResponseGetProfileType } from './type';

const API_URL = {
	GET_PROFILE: '/api/profile',
	PUT_PROFILE: '/api/profile',
};

/** 프로필 정보 조회 */
export const useGetProfile = () => {
	return useQuery<AxiosResponse, AxiosError, AxiosResponseType<ResponseGetProfileType>>({
		queryKey: [API_URL.GET_PROFILE],
		queryFn: () => api.get(API_URL.GET_PROFILE),
		select: (res) => res.data,
		placeholderData: keepPreviousData,
	});
};

/** 프로필 정보 수정 */
export const useChangeProfile = () => {
	const queryClient = useQueryClient();
	return useMutation<AxiosResponse<AxiosResponseType>, AxiosError, RequestPutProfileType>({
		mutationKey: [API_URL.PUT_PROFILE],
		mutationFn: (data) => api.put(API_URL.PUT_PROFILE, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [API_URL.GET_PROFILE] });
		},
	});
};
