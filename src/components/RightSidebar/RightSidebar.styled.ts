import { ScrollShadow } from '@nextui-org/react';
import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap:8px;
  padding: 8px;
`;

export const Sidebar = styled.aside<{ isOpen: boolean }>`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: ${(props) => (props.isOpen ? '512px' : '0')};
  background: #efefef;
  transition: .3s;
  @media (max-width: 768px) {
    position: fixed;
    width: 256px;
    top: 56px;
    bottom: 0;
    z-index: 999;
    transform: translateX(${(props) => (props.isOpen ? '-100%' : '0')});
  }
`;

export const ScrollWrapper = styled(ScrollShadow)`
  max-height: Calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  gap:8px;
`;
