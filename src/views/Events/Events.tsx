import { FC } from 'react';

import { Calendar } from '../../components/Calendar';
import { EventsHeader } from '../../components/EventsHeader';
import { Table } from '../../components/Table';
import { useEventStore } from '../../store/useEventStore';

export const Events:FC = () => {
  const { active } = useEventStore();

  return (
    <>
      <EventsHeader />
      {{
        table: <Table />,
        calendar: <Calendar />,
      }[active]}

    </>
  );
};
