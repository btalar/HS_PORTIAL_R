import { FC, ReactNode } from 'react';

import { SidebarElementWrapper } from './SidebarElement.styled';

interface SidebarElementProps {
    children?:ReactNode;
    icon?:ReactNode;
}
export const SidebarElement:FC<SidebarElementProps> = ({ children, icon }) => (
  <SidebarElementWrapper>
    {icon}{children}
  </SidebarElementWrapper>
);
