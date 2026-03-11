import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { AxiosResponseType } from '@/types';

import { api } from '..';
import { ResponseGetProfileType } from './type';

const API_URL = {
	GET_PROFILE: '/api/profile',
};

export const useGetProfile = () => {
	return useQuery<AxiosResponse, AxiosError, AxiosResponseType<ResponseGetProfileType>>({
		queryKey: [API_URL.GET_PROFILE],
		queryFn: () => api.get(API_URL.GET_PROFILE),
		select: (res) => res.data,
		placeholderData: keepPreviousData,
	});
};
