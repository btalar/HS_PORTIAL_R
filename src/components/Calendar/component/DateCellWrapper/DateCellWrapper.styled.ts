import styled from 'styled-components';

import { EventType, EventVariant } from '../../../../types/calendar';

export const Card = styled.div<{ type?:EventType }>`
  background-color: ${(props) => {
    switch (props.type) {
      case EventVariant.BOOTCAMP:
        return '#D1F4E0';
      case EventVariant.RESERVATION:
        return '#FDEDD3';
      case EventVariant.CONFERENCE:
        return '#F5F5F5';
      default:
        return 'white';
    }
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
      case EventVariant.BOOTCAMP:
        return '#12A150';
      case EventVariant.RESERVATION:
        return '#CA9133';
      case EventVariant.CONFERENCE:
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
      case EventVariant.BOOTCAMP:
        return '#12A150';
      case EventVariant.RESERVATION:
        return '#CA9133';
      case EventVariant.CONFERENCE:
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
