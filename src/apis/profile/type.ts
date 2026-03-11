export type MarriageHistory = 'Y' | 'N';

/** 프로필 응답 */
export type ResponseGetProfileType = {
	name: string;
	marriageHistory: MarriageHistory;
	height: string;
	profileImageUrl: string | null;
};

/** 프로필 수정 요청 */
export type RequestPutProfileType = {
	name: string;
	marriageHistory: MarriageHistory;
	height: string;
};
