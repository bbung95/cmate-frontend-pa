'use client';

import React from 'react';

import TanstackQueryProvider from './TanstackQueryProvider';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
	return <TanstackQueryProvider>{children}</TanstackQueryProvider>;
};

export default ClientProvider;
