import styled from 'styled-components';

export const Circle = styled.div<{active?:boolean;complete?:boolean}>`
   width: 50px;
   height: 50px;
  transition: .3s;
   background-color: ${({ active, complete }) => {
    if (complete) {
      return '#006FEE';
    } if (active) {
      return '#DAEDFD';
    }
    return '#F5F5F5';
  }};
   color: ${({ active }) => (active ? '#006FEE' : '#71717A')};
   border-radius: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
`;
