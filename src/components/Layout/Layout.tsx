import React, { FC, ReactNode } from 'react';

import { Sidebar } from '../Sidebar';
import { LayoutWrapper, PageWrapper } from './Layout.styled';

interface LayoutProps {
    children: ReactNode;
}
export const Layout: FC<LayoutProps> = ({ children }) => (
  <LayoutWrapper>
    <Sidebar />
    <PageWrapper>{children}</PageWrapper>
  </LayoutWrapper>
);
