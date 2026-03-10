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
				<main>
					<div className="bg-gray-6 mx-auto min-h-screen w-full max-w-480">{children}</div>
				</main>
			</body>
		</html>
	);
}
