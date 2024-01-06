import { NavbarMenuToggle as NavbarMenuToggleStyled } from '@nextui-org/react';
import styled from 'styled-components';

export const NavbarMenuToggle = styled(NavbarMenuToggleStyled)`
  display: none;
  @media (max-width: 768px){
    display: block;
  }
`;
