import moment from 'moment';
import { FC } from 'react';
import { DateCellWrapperProps } from 'react-big-calendar';
import styled from 'styled-components';

import { getCurrentEvent } from '../../../../helpers/getCurrentEvent.helper';
import { EventType, useCalendarStore } from '../../../../store';

const Card = styled.div<{ type?:EventType }>`
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
  justify-content: space-around;
   padding: 1rem;
    width: 100%;
    height: 100%;
    border-right: 1px solid #ddd;
    &:nth-last-child(1){
      border-right: 0;
    }
    &:nth-child(1){
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
        return 'white';
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

export const DateCellWrapper:FC<DateCellWrapperProps> = ({ value }) => {
  const { events } = useCalendarStore();

  const event = getCurrentEvent(events, value);

  const type = event?.resource?.type;

  const number = moment(value).toDate().getDate();

  return (
    <Card type={type}>
      {type && (
      <>
        <Text type={event?.resource?.type} className="font-16-400">{number}</Text>
        <Wrapper>
          <Badge className="font-12-700" type={type}>
            {{ bootcamp: 'Szkolenie', reseration: 'Rezerwacja', conference: 'Konferencja' }[type]}
          </Badge>
          <Text left type={type}>{event?.title}</Text>
        </Wrapper>
      </>
      )}
    </Card>
  );
};
