import styled from 'styled-components';

export const SidebarStyled = styled.aside<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? '256px' : '56px')};
  background: lightgrey;
  transition: .3s;
  @media (max-width: 768px){
    position: fixed;
    width: 256px;
    top:56px;
    bottom:0;
    z-index: 999;
    transform: translateX( ${(props) => (props.isOpen ? '-100%' : '0')});
  }
`;
