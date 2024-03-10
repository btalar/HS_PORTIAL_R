import { FC, ReactNode } from 'react';

import { SidebarElementWrapper, SidebarIcon } from './SidebarElement.styled';

interface SidebarElementProps {
    children?:ReactNode;
    icon?:ReactNode;
}
export const SidebarElement:FC<SidebarElementProps> = ({ children, icon }) => (
  <SidebarElementWrapper>
    <>
      <SidebarIcon>{icon}</SidebarIcon>{children}
    </>
  </SidebarElementWrapper>
);
