import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { headers } from 'next/headers';

import { AxiosResponseType } from '@/types';

import { api } from '..';
import { ResponseGetPhotoSType } from './type';

const API_URL = {
	GET_PHOTOS: '/api/photos',
	POST_PHOTOS: '/api/photos',
	DELETE_PHOTOS: '/api/photos',
};

/** 프로필 사진 정보 조회 */
export const useGetPhotos = () => {
	return useQuery<
		AxiosResponse<AxiosResponseType<ResponseGetPhotoSType>>,
		AxiosError,
		AxiosResponseType<ResponseGetPhotoSType>
	>({
		queryKey: [API_URL.GET_PHOTOS],
		queryFn: () => api.get(API_URL.GET_PHOTOS),
		select: (res) => {
			const data = res.data.data.map((items) => {
				return {
					...items,
					src: `https://c-mate.co.kr/api/image.php?path=/new/${items.fileDir}/${items.fileName}`,
				};
			});
			return { ...res.data, data };
		},
		placeholderData: keepPreviousData,
	});
};

/** 프로필 사진 수정 */
export const useUploadPhotos = () => {
	const queryClient = useQueryClient();

	return useMutation<AxiosResponse<AxiosResponseType>, AxiosError, FormData>({
		mutationKey: [API_URL.POST_PHOTOS],
		mutationFn: (data) =>
			api.post(API_URL.POST_PHOTOS, data, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}),
		onSuccess: () => {
			queryClient.refetchQueries({ queryKey: [API_URL.GET_PHOTOS] });
		},
	});
};

/** 프로필 사진 삭제 */
export const useDeletePhotos = () => {
	const queryClient = useQueryClient();
	return useMutation<AxiosResponse<AxiosResponseType>, AxiosError, number>({
		mutationKey: [API_URL.DELETE_PHOTOS],
		mutationFn: (idx) => api.delete(API_URL.DELETE_PHOTOS, { sortNum: idx }),
		onSuccess: () => {
			queryClient.refetchQueries({ queryKey: [API_URL.GET_PHOTOS] });
		},
	});
};
