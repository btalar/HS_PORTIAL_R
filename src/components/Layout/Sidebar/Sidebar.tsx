import { Divider } from '@nextui-org/react';
import FeatherIcon from 'feather-icons-react';
import React, { FC, ReactNode } from 'react';

import { Logo } from '../../Logo';
import { SidebarElement } from './components/SidebarElement';
import { MenuItemsWrapper, MenuLink, Sidebar as SidebarWrapper } from './Sidebar.styled';

export interface SidebarProps {
    userRole?: 'ADMIN' | 'EDITOR'| 'CLIENT'| 'POD'| 'TV'| 'MOBILE' ;
}

 interface MenuProps {
  label: string;
  url: string;
  icon: ReactNode;
}

export const AdminMenu = [
  {
    label: 'Dashboard',
    url: '/',
    icon: <FeatherIcon size={24} icon="layout" />,
  },
  {
    label: 'Użutkownicy',
    url: '/user-management',
    icon: <FeatherIcon size={24} icon="users" />,
  },
];

export const ClientMenu = [
  {
    label: 'Dashboard',
    url: '/',
    icon: <FeatherIcon size={24} icon="layout" />,
  },
  {
    label: 'Konferencje',
    url: '/events',
    icon: <FeatherIcon size={24} icon="users" />,
  },
];

export const EditorMenu = [
  {
    label: 'Dashboard',
    url: '/',
    icon: <FeatherIcon size={24} icon="layout" />,
  },
  {
    label: 'Konferencje',
    url: '/events',
    icon: <FeatherIcon size={24} icon="award" />,
  },
];
export const Sidebar:FC<SidebarProps> = ({ userRole }) => {
  let menuToRender = ClientMenu;

  switch (userRole) {
    case 'ADMIN':
      menuToRender = AdminMenu;
      break;
    case 'EDITOR':
      menuToRender = EditorMenu;
      break;
    case 'CLIENT':
      menuToRender = ClientMenu;
      break;
    default:
      menuToRender = [];
      break;
  }

  return (

    <SidebarWrapper>
      <Logo />
      <Divider />
      <MenuItemsWrapper>

        {menuToRender.map((menuItem: MenuProps, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <MenuLink key={index} to={menuItem.url}>
            <SidebarElement icon={menuItem.icon}>
              {menuItem.label}
            </SidebarElement>
          </MenuLink>
        ))}

      </MenuItemsWrapper>

    </SidebarWrapper>
  );
};
