import { Card as CardNextUi, CardBody as CardBodyNextUi, Input as InputComponent } from '@nextui-org/react';
import styled from 'styled-components';

export const CardsFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap:16px;
`;

export const Input = styled(InputComponent)`
    padding: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled(CardNextUi)<{isActive:boolean}>`

  border: 1px solid ${(props) => (props.isActive ? 'black' : 'white')};
`;

export const CardBody = styled(CardBodyNextUi)`
  padding: 0 !important;
  margin: 0 !important;
`;
