import { Button, Image, Radio, RadioGroup } from '@nextui-org/react';
import { FC } from 'react';

import { plusWhite } from '../../assets';
import { useEventStore } from '../../store/useEventStore';
import { EventsAction, EventsHeader as EventsHeaderWrapper } from './EventsHeader.styled';

const PlusWhite:FC = () => <Image src={plusWhite} />;

export const EventsHeader:FC = () => {
  const { active, setActive } = useEventStore();

  return (
    <EventsHeaderWrapper>
      <EventsAction>
        <div className="font-18-500">Wydarzenia (12)</div>
        <RadioGroup
          value={active}
          onValueChange={(value) => setActive(value as 'calendar' | 'table')}
          classNames={{ wrapper: 'gap-4' }}
          orientation="horizontal"
        >
          <Radio value="calendar">Kalendarz</Radio>
          <Radio value="table">Tabela</Radio>
        </RadioGroup>
      </EventsAction>
      <EventsAction>
        <Button
          size="lg"
          startContent={
            <PlusWhite />
                }
          color="primary"
        >
          Utwórz nowy event
        </Button>
      </EventsAction>
    </EventsHeaderWrapper>
  );
};
