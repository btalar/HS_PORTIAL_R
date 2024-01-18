import styled from 'styled-components';

export const SidebarElementWrapper = styled.div<{isActive:boolean}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: .5rem; 
  padding: 8px 8px; 
`;

export const SidebarIcon = styled.div` 
  margin-right: 12px;
  font-size: 14px;
`;
