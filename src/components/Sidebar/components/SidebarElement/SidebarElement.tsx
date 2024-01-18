import { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { SidebarElementWrapper, SidebarIcon } from './SidebarElement.styled';

interface SidebarElementProps {
    children?:ReactNode;
    icon?:ReactNode;
    name?:string;
}
export const SidebarElement:FC<SidebarElementProps> = ({ children, icon, name = '' }) => {
  const { pathname } = useLocation();

  return (
    <SidebarElementWrapper isActive={pathname === name}>
      <>
        <SidebarIcon>{icon}</SidebarIcon>{children}
      </>
    </SidebarElementWrapper>
  );
};
