import styled from 'styled-components';

import { EventType } from '../../../../store';

export const Card = styled.div<{ type?:EventType }>`
  background-color: ${(props) => {
    switch (props.type) {
      case 'bootcamp':
        return '#D1F4E0';
      case 'reseration':
        return '#FDEDD3';
      case 'conference':
        return '#F5F5F5';
      default:
        return 'white';
    }
  }};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.type ? 'space-between' : 'flex-start')});
  padding: 1rem;
  width: 100%;
  height: 100%;
  border-right: 1px solid #ddd;
  &:nth-last-child(1){
    border-right: 0;
  }
`;

export const Text = styled.div<{ type?:EventType;left?:boolean }>`
  text-align: ${(props) => (props.left ? 'left' : 'right')};
  color:  ${(props) => {
    switch (props.type) {
      case 'bootcamp':
        return '#12A150';
      case 'reseration':
        return '#CA9133';
      case 'conference':
        return '#191919';
      default:
        return '#191919';
    }
  }};
`;

export const Badge = styled.div<{ type?:EventType }>`
  text-align: center;
  padding: 2px 6px;
  border-radius: 12px;
  background-color:  ${(props) => {
    switch (props.type) {
      case 'bootcamp':
        return '#12A150';
      case 'reseration':
        return '#CA9133';
      case 'conference':
        return '#A2A2A8';
      default:
        return 'white';
    }
  }};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
