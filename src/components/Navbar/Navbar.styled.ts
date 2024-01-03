import { NavbarMenuToggle } from '@nextui-org/react';
import styled from 'styled-components';

export const NavbarMenuToggleStyled = styled(NavbarMenuToggle)`
  display: none;
  @media (max-width: 768px){
    display: block;
  }
`;
