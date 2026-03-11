# C-MATE frontend PA

C-MATE Frontend PA 를 구현하였습니다.

## 프로젝트 실행

패키지 매니져로 pnpm을 사용하였습니다.

```bash
# clone
git clone https://github.com/bbung95/cmate-frontend-pa.git

# change directory
cd cmate-frontend-pa

# install
pnpm install

# start
pnpm dev
```

## 횐경 설정

**.env**

```
NEXT_PUBLIC_BASE_URL= ~
```

## 기술 스택

- node 22.21.1
- pnpm 9.15.9
- Next 16 (App router) / (Webpack)
- tailwind V4
- TypeScript, eslint, prettier
- axios
- react-hook-form
- zod
- @tanstack/react-query
- zustand
- Storybook
- husky
- 
## 디렉토리 구조

```bash
src
├── app
│   ├── my              # 마이페이지
│   │   ├── edit        # 프로필 수정 페이지
│   │   └── profile     # 프로필 상세 페이지
│   ├── layout.tsx      # 루트 레이아웃
│   └── not-found.tsx   # 404 페이지
├── apis                # 외부 API 연동 및 Query 훅
│   ├── index.ts        # Axios 인스턴스 설정
│   └── query.ts        # 도메인별 Query/Mutation 훅
├── assets              # 정적 자산 (Image 등)
├── components
│   ├── common          # 공통 컴포넌트
│   ├── domains         # 도메인 컴포넌트
│   ├── globals         # 전역 Context/Provider
│   └── layout          # 레이아웃 관련 컴포넌트
├── enums               # 상수 관리
├── lib                 # Tailwind util
├── stores              # 전역 상태관리 (zustand)
├── styles              # 글로벌 스타일 (Tailwind CSS)
└── types               # 공통 타입 정의
```

## 요구사항 구현

### 1. UI 구현 & 공통 컴포넌트

Tailwind를 사용하여 스타일을 구현하였습니다.

<img width="361" height="666" alt="스크린샷 2026-03-11 오후 4 23 07" src="https://github.com/user-attachments/assets/35e07eab-b451-467b-b40a-bcd8634cb710" />

### 2. Storybook

Storybook을 사용하여 다자인 시스템을 정의하고 문서화하였습니다.

<img width="1459" height="686" alt="스크린샷 2026-03-11 오후 4 25 47" src="https://github.com/user-attachments/assets/1c483ca9-bf25-46ad-8906-00fdb4ea30b9" />

### 3. Figma MCP

antigravity를 IDE로 사용하였고 Figma MCP를 사용하여 디자인 토큰을 구현하였습니다.

### 4. 컴포넌트 재사용

컴파운드 패턴을 적용하여 재사용시 컴포넌트를 조합해서 사용할 수 있도록 구현하였습니다.

```javascript
// Field.tsx
const Field = ({ children }: FieldProps) => {
	return <div className="flex w-full flex-col gap-16">{children}</div>;
};

const Label = ({ children, ...props }: LabelHTMLAttributes<HTMLLabelElement> & FieldProps) => {
	return (
		<label className="text-gray-black text-h2" {...props}>
			{children}
		</label>
	);
};

const HelpMessage = ({ children }: FieldProps) => {
	return <p className="text-gray-2 text-b2">{children}</p>;
};

const ErrorMessage = ({ children }: FieldProps) => {
	return <p className="text-sub-red text-b2">{children}</p>;
};

Field.Label = Label;
Field.HelpMessage = HelpMessage;
Field.ErrorMessage = ErrorMessage;

export default Field;

// 사용 예시
<Field>
	<Field.Label>이름</Field.Label>
	<TextField />
</Field>

// 사용 예시
<Field>
	<Field.Label>선택</Field.Label>
	<RadioBox />
	<Field.ErrorMessage>값을 선택해주세요.</Field.ErrorMessage>
</Field>
```

### 5. 공통 응답 관리

공통 응답을 관리하기 위해 axios interceptors를 사용하였습니다.

```javascript
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
		const message = response?.data?.message || '알 수 없는 오류가 발생했습니다.';

		if (message) {
			alert(message);
		}

		return Promise.reject(error);
	}
);
```

### 6. CORS

개발시 API 통신 CORS를 우회하기 위해 next proxy를 사용하였습니다.

```javascript
async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
			},
		];
	},
```


