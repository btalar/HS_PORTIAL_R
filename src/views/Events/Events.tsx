import { FC } from 'react';

import { Layout } from '../../components';
import { Calendar } from '../../components/Calendar';
import { EventsHeader } from '../../components/EventsHeader';
import { Table } from '../../components/Table';
import { useEventStore } from '../../store/useEventStore';

export const Events:FC = () => {
  const { active } = useEventStore();

  return (
    <Layout>
      <EventsHeader />
      {{
        table: <Table />,
        calendar: <Calendar />,
      }[active]}

    </Layout>
  );
};
