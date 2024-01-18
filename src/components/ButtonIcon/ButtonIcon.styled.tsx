import { Button } from '@nextui-org/react';
import styled from 'styled-components';

export const ButtonIcon = styled(Button)<{noMargin?:boolean}>`
  margin: ${(props) => (props.noMargin ? '0px' : '8px')};
  background: white;
`;
