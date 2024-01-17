import { FC } from 'react';

import { Layout } from '../../components';
import { HotelForm } from '../../components/HotelForm';
import { useHotel } from '../../hooks';

export const Pod:FC = () => {
  useHotel();

  return (
    <Layout title="Dane hotelowe">
      <HotelForm />
    </Layout>
  );
};
