import React, { FC, ReactNode } from 'react';

import { Main } from '../../views/Dashboard/Dashboard.styled';
import { Navbar } from '../Navbar';
import { RightSidebar } from '../RightSidebar';
import { Sidebar } from '../Sidebar';
import { LayoutWrapper, PageWrapper } from './Layout.styled';

interface LayoutProps {
    children: ReactNode;
    title?:string;
}
export const Layout: FC<LayoutProps> = ({ children, title }) => (
  <LayoutWrapper>
    <Sidebar />
    <PageWrapper>
      <Navbar title={title} />
      <Main hideScrollBar>{children}</Main>
    </PageWrapper>
    {true && <RightSidebar />}
  </LayoutWrapper>
);
