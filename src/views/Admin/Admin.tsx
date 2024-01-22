import { FC } from 'react';

import { CardsForm } from '../../components/CardsForm';
import { useHotel } from '../../hooks';

export const Admin:FC = () => {
  useHotel();
  return (
    <CardsForm />
  );
};
