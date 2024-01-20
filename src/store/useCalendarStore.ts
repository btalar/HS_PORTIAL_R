import moment from 'moment/moment';
import { Event as EventProps } from 'react-big-calendar';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type EventType = 'bootcamp' | 'reseration' | 'conference';

export interface MyEventProps extends EventProps {
    resource?: {
        type: EventType;
    };
}
interface CalendarStore {
    activeView:'month'|'week'|'day'|'agenda';
    setActiveView:(active:'month'|'week'|'day'|'agenda') => void;
    events:MyEventProps[];
}

const { today, tomorrow, yesterday } = {
  today: moment().toDate(),
  tomorrow: moment().add(1, 'days').toDate(),
  yesterday: moment().add(-1, 'days').toDate(),
};

export const useCalendarStore = create<CalendarStore>()(
  devtools(
    persist(
      (set) => ({
        activeView: 'month',
        events: [{
          title: 'jedyneczka',
          allDay: true,
          start: yesterday,
          end: yesterday,
          resource: { type: 'bootcamp' },
        }, {
          title: 'dwójeczka',
          allDay: true,
          start: today,
          end: today,
          resource: { type: 'reseration' },
        }, {
          title: 'trójeczka',
          allDay: true,
          start: tomorrow,
          end: tomorrow,
          resource: { type: 'conference' },
        }],
        setActiveView: (active) => set(() => ({ activeView: active })),
      }),
      { name: 'calendar' },
    ),
  ),
);
