import { Link as LinkNextUi } from '@nextui-org/react';
import styled from 'styled-components';

export const Link = styled(LinkNextUi)<{isActive:boolean}>`
  color: ${(props) => (props.isActive ? '#006FEE' : '#191919')};
  padding: 16px 0;
`;
