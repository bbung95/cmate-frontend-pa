interface MobileLayoutProps {
	children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
	return <div className="bg-gray-6 mx-auto min-h-screen w-full max-w-480 pb-[var(--tab-bar-height)]">{children}</div>;
};

export default MobileLayout;
