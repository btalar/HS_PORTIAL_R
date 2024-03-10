import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Sidebar = styled.aside`
  display: flex; 
  flex-direction: column;
  border-radius: 0 15px 15px 0; 
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
  }
`;
export const MenuLink = styled(Link)`
    display: flex;
    flex-direction: column; 
    align-items: flex-start; 
    font-size: 14px;
    color: #000; 
    border-radius: 8px;
    margin: 12px 0;
    &:hover{
      background: #f3f3f3 ;
    }
`;

export const MenuItemsWrapper = styled.div`
    margin-top: 20px;
`;
