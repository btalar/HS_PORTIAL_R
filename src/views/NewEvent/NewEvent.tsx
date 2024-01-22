import { Button, ButtonGroup } from '@nextui-org/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ProgressBar from '@ramonak/react-progress-bar';
import { FC, useState } from 'react';
import styled from 'styled-components';

import { Circle } from '../../components/Circle';
import { EventForm, Wrapper } from './newEvent.styled';

export enum CurrentPage {
    ClientDate='Dane klienta',
    Reservation='Rezerwacje',
    Room='Sala',
    Variants = 'Warianty menu',
}

export const Header = styled.div`
  display: flex;
  justify-content: center;
  gap:2rem;
`;

export interface EventForm {
    company:string;
    nip:string;
    street:string;
    buildNumber:number;
    postCode:string;
    city:string;
    name:string;
    phone:string;
    email:string;
    protector:string;
    status:string;
    peopleNumber:number;
    additional:string;
    room:string;
    nameEvent:string;
    rentHours:string;
    typeRoom:string;
    coffeeBreak:string;
    menuCoffeeBreak:string;
}

export const NewEvent:FC = () => {
  const [state, setState] = useState<CurrentPage>(CurrentPage.ClientDate);
  const values = Object.values(CurrentPage);
  const currentIndex = values.indexOf(state);

  return (
    <Wrapper>
      <Header>
        {values.map((currentPage, index) => (
          <Circle
            key={currentPage}
            active={currentPage === state}
            complete={currentIndex > index}
            label={index + 1}
          />
        ))}
      </Header>
      <ProgressBar bgColor="#006FEE" height="4px" completed={(currentIndex + 1) * 25} isLabelVisible={false} />
      <EventForm>

        <ButtonGroup fullWidth>
          <Button disabled={currentIndex === 0} onClick={() => setState(values[currentIndex - 1])}>wstecz</Button>
          <Button
            disabled={currentIndex === (values.length - 1)}
            onClick={() => setState(values[currentIndex + 1])}
          >nastepny krok
          </Button>
        </ButtonGroup>
      </EventForm>
    </Wrapper>
  );
};
