import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import React, { FC } from 'react';

import { sidebarStore } from '../../store';
import { User } from '../User';
import { NavbarMenuToggle, NavbarNextUi } from './Navbar.styled';

interface NavbarProps{
    title?:string;
}

export const Navbar:FC<NavbarProps> = ({ title = 'Hotelspot' }) => {
  const { toggle } = sidebarStore();

  return (
    <NavbarNextUi maxWidth="full" position="sticky">
      <NavbarMenuToggle onChange={toggle} />
      <NavbarBrand>
        <p className="font-24-300">{title}</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <User />
        </NavbarItem>
      </NavbarContent>
    </NavbarNextUi>
  );
};
