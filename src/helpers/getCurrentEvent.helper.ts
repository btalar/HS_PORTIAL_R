import moment from 'moment';

import { MyEventProps } from '../store/useCalendarStore';

export const getCurrentEvent = (events:MyEventProps[], value:Date):MyEventProps | undefined => events.find(
  ({ start }) => moment(start)
    .toDate()
    .toDateString() === moment(value)
    .toDate()
    .toDateString(),
);
