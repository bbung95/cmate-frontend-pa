'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
			retry: false,
			staleTime: 5 * 60 * 1000,
			gcTime: 60 * 60 * 1000,
		},
	},
});

const TanstackQueryProvider = ({ children }: { children: React.ReactNode }) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default TanstackQueryProvider;
