/** 프로필 사진 응답 */
export type ResponseGetPhotoSType = {
	idx: number;
	userId: string;
	fileDir: string;
	fileName: string;
	fileOriginalName: string;
	sortNum: number;
	regDt: string;
	randName: string;
	saveYn: string;

	src?: string;
}[];
