import React, { FC, ReactNode } from 'react';

import { Sidebar } from '../Sidebar';
import { Container, LayoutStyled } from './Layout.styled';

interface LayoutProps {
    children: ReactNode;
}
export const Layout: FC<LayoutProps> = ({ children }) => (
  <LayoutStyled>
    <Sidebar />
    <Container>{children}</Container>
  </LayoutStyled>
);
