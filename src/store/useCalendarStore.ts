import moment from 'moment/moment';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { CalendarStore, EventVariant } from '../types/calendar';

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
          resource: { type: EventVariant.BOOTCAMP },
        }, {
          title: 'dwójeczka',
          allDay: true,
          start: today,
          end: today,
          resource: { type: EventVariant.RESERVATION },
        }, {
          title: 'trójeczka',
          allDay: true,
          start: tomorrow,
          end: tomorrow,
          resource: { type: EventVariant.CONFERENCE },
        }],
        setActiveView: (active) => set(() => ({ activeView: active })),
      }),
      { name: 'calendar' },
    ),
  ),
);
