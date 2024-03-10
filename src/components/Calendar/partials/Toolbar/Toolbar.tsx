import { Button, ButtonGroup } from '@nextui-org/react';
import { FC } from 'react';
import { ToolbarProps } from 'react-big-calendar';

import { useCalendarStore } from '../../../../store/useCalendarStore';
import { ToolbarWrapper } from './Toolbar.styled';

export const Toolbar:FC<ToolbarProps> = () => {
  const { setActiveView } = useCalendarStore();

  return (
    <ToolbarWrapper>
      <ButtonGroup>
        <Button>Today</Button>
        <Button>Back</Button>
        <Button>Next</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={() => setActiveView('month')}>Month</Button>
        <Button onClick={() => setActiveView('week')}>Week</Button>
      </ButtonGroup>
    </ToolbarWrapper>
  );
};
