import type { Metadata } from 'next';

import ClientProvider from '@/components/globals/ClientProvider';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: '크리스천메이트',
	description: '크리스천메이트 과제전형',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`} suppressHydrationWarning>
				<main>
					<ClientProvider>{children}</ClientProvider>
				</main>
			</body>
		</html>
	);
}
