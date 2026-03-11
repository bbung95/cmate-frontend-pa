import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

import { AxiosResponseType } from '@/types';

const axiosInstance = axios.create({
	headers: {
		Accept: 'application/json',
	},
});

axiosInstance.interceptors.request.use(
	(request: InternalAxiosRequestConfig) => {
		return request;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	async (response: AxiosResponse<AxiosResponseType>) => {
		return response;
	},
	async (error: AxiosError) => {
		const response = error.response as AxiosResponse<AxiosResponseType>;
		const status = response?.status;
		const message = response?.data?.message || '알 수 없는 오류가 발생했습니다.';

		if (message) {
			alert(message);
		}

		return Promise.reject(error);
	}
);

export const api = {
	get: <T>(url: string, params?: any, config?: any) =>
		axiosInstance.get<AxiosResponseType<T>>(url, { params, ...config }),
	post: <T>(url: string, data?: any, config?: any) => axiosInstance.post<AxiosResponseType<T>>(url, data, config),
	put: <T>(url: string, data?: any, config?: any) => axiosInstance.put<AxiosResponseType<T>>(url, data, config),
	patch: <T>(url: string, data?: any, config?: any) => axiosInstance.patch<AxiosResponseType<T>>(url, data, config),
	delete: <T>(url: string, params?: any, config?: any) =>
		axiosInstance.delete<AxiosResponseType<T>>(url, { params, ...config }),
};
