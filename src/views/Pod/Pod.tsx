import { FC } from 'react';

import { Layout } from '../../components';
import { HotelForm } from '../../components/HotelForm';
import { useHotel } from '../../hooks/useHotel';

export const Pod:FC = () => {
  useHotel();

  return (
    <Layout title="Dane hotelowe">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <HotelForm />
      </div>
    </Layout>
  );
};
