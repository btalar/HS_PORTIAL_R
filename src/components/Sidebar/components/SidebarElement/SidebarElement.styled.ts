import styled from 'styled-components';

export const SidebarElementWrapper = styled.div<{isActive:boolean}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: .5rem;
  background-color: ${({ isActive }) => (isActive ? '#DAEDFD' : '')};
  padding: 0 15px;
`;

export const SidebarIcon = styled.div` 
  margin-right: 15px;
`;
