import { FC } from 'react';

import { HotelForm } from '../../components/HotelForm';
import { useHotel } from '../../hooks';

export const Pod:FC = () => {
  useHotel();

  return (
    <HotelForm />
  );
};
