import { Navbar, NavbarMenuToggle as NavbarMenu } from '@nextui-org/react';
import styled from 'styled-components';

export const TopBarMenuToggle = styled(NavbarMenu)`
  display: none;
  @media (max-width: 768px){
    display: block;
  }
`;

export const TopBarNextUi = styled(Navbar)`
  border-radius: 1rem;
`;
