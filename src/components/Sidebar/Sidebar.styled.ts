import styled from 'styled-components';

export const Sidebar = styled.aside<{ isOpen: boolean }>`
  display: flex; 
  flex-direction: column;
  border-radius: 0 15px 15px 0;
  width: ${(props) => (props.isOpen ? '300' : '56px')};
  background: white;
  transition: .3s;
  padding: 0 1rem;
  width: 300px; 
  @media (max-width: 768px){
    position: fixed;
    width: 256px;
    top:56px;
    bottom:0;
    z-index: 999;
    transform: translateX( ${(props) => (props.isOpen ? '-100%' : '0')});
  }
`;

export const SidebarInside = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin: .5rem 0;
`;

export const LinkList = styled.div`
  display: flex;
  flex-direction: column;
`;
