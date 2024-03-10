import React, { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { useUserStore } from '../../store';
import { Main } from '../../views/Dashboard/Dashboard.styled';
import { LayoutWrapper, PageWrapper } from './Layout.styled';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

interface LayoutProps {
    children: ReactNode;
}
export const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const { role } = useUserStore((state) => state.user);

  return (
    <LayoutWrapper>
      <Sidebar userRole={role} />
      <PageWrapper>
        <TopBar title={pathname} />
        <Main hideScrollBar>{children}</Main>
      </PageWrapper>
    </LayoutWrapper>
  );
};
