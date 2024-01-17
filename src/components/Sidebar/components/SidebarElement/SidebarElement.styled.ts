import styled from 'styled-components';

export const SidebarElementWrapper = styled.div<{isActive:boolean}>`
  display: flex;
  border-radius: .5rem;
  background-color: ${({ isActive }) => (isActive ? '#DAEDFD' : '')};
`;
