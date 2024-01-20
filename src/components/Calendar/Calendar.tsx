import './sass/index.scss';

import moment from 'moment';
import { FC, useEffect, useMemo, useRef } from 'react';
import {
  Calendar as BigCalendar, EventProps,
  momentLocalizer,
} from 'react-big-calendar';

import { useCalendarStore } from '../../store/useCalendarStore';
import { DateCellWrapper } from './component/DateCellWrapper';
import { Toolbar } from './component/Toolbar';

const localizer = momentLocalizer(moment);

// eslint-disable-next-line react/jsx-no-useless-fragment
export const Event:FC<EventProps> = () => <></>;

export const Calendar:FC = () => {
  const calendar = useRef<BigCalendar>(null);

  const { events, activeView } = useCalendarStore();

  useEffect(() => {
    console.log(calendar);
    if (calendar.current) {
      // @ts-ignore
      console.log(calendar.current.getViews());
      // @ts-ignore
      console.log(calendar.current.handleViewChange('agenda'));
    }
  }, [calendar]);

  // eslint-disable-next-line no-empty-pattern
  const { toolbar, dateCellWrapper, event } = useMemo(
    () => ({
      toolbar: Toolbar,
      dateCellWrapper: DateCellWrapper,
      event: Event,
    }),
    [],
  );

  return (
    <div>
      <BigCalendar
        view={activeView}
        events={events}
        ref={calendar}
        components={{
          toolbar,
          dateCellWrapper,
          month: { event },
        }}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh)' }}
      />
    </div>
  );
};
