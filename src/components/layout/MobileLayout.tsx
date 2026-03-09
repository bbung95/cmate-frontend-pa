interface MobileLayoutProps {
	children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
	return <div className="grid-col-1 grid h-full">{children}</div>;
};

export default MobileLayout;
