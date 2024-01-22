import React, { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { Main } from '../../views/Dashboard/Dashboard.styled';
import { Navbar } from '../Navbar';
import { RightSidebar } from '../RightSidebar';
import { Sidebar } from '../Sidebar';
import { LayoutWrapper, PageWrapper } from './Layout.styled';

interface LayoutProps {
    children: ReactNode;
}
export const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <LayoutWrapper>
      <Sidebar />
      <PageWrapper>
        <Navbar title={{ '/events/new': 'Zarządzanie konferencjami | Utwórz nowy event' }[pathname]} />
        <Main hideScrollBar>{children}</Main>
      </PageWrapper>
      <RightSidebar />
    </LayoutWrapper>
  );
};
