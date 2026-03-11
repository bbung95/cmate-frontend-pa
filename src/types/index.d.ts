export interface AxiosResponseType<T = any> {
	status: number;
	data: T;
	message: string;
}
