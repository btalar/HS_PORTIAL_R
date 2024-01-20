import moment from 'moment';
import { FC } from 'react';
import { DateCellWrapperProps } from 'react-big-calendar';

import { getCurrentEvent } from '../../../../helpers/getCurrentEvent.helper';
import { useCalendarStore } from '../../../../store';
import { Badge, Card, Text, Wrapper } from './DateCellWrapper.styled';

export const DateCellWrapper:FC<DateCellWrapperProps> = ({ value }) => {
  const { events } = useCalendarStore();

  const event = getCurrentEvent(events, value);

  const type = event?.resource?.type;

  const number = moment(value).toDate().getDate();

  return (
    <Card type={type}>

      <Text type={event?.resource?.type} className="font-16-400">{number}</Text>
      <Wrapper>
        {type && (
        <Badge className="font-12-700" type={type}>
          {{ bootcamp: 'Szkolenie', reseration: 'Rezerwacja', conference: 'Konferencja' }[type]}
        </Badge>
        )}
        <Text left type={type}>{event?.title}</Text>
      </Wrapper>
    </Card>
  );
};
