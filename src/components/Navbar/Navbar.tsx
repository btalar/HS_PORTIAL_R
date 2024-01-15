import {
  Navbar as NavbarNextUi,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import React, { FC } from 'react';

import { sidebarStore } from '../../store/sidebarStore';
import { User } from '../User';
import { NavbarMenuToggle } from './Navbar.styled';

interface NavbarProps{
    title?:string;
}

export const Navbar:FC<NavbarProps> = ({ title = 'Hotelspot' }) => {
  const { toggle } = sidebarStore();
  return (
    <NavbarNextUi maxWidth="full" position="sticky">
      <NavbarMenuToggle onChange={toggle} />
      <NavbarBrand>
        <p className="font-bold text-inherit">{title}</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <User />
        </NavbarItem>
      </NavbarContent>
    </NavbarNextUi>
  );
};
