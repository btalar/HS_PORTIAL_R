import { Navbar, NavbarMenuToggle as NavbarMenu } from '@nextui-org/react';
import styled from 'styled-components';

export const NavbarMenuToggle = styled(NavbarMenu)`
  display: none;
  @media (max-width: 768px){
    display: block;
  }
`;

export const NavbarNextUi = styled(Navbar)`
  border-radius: 1rem;
`;
