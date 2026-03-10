import type { Metadata } from 'next';

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
			<body className={`antialiased`}>
				<main>{children}</main>
			</body>
		</html>
	);
}
