import { FC } from 'react';

import { Layout } from '../../components';
import { CardsForm } from '../../components/CardsForm';
import { useHotel } from '../../hooks';

export const Admin:FC = () => {
  useHotel();
  return (
    <Layout title="Admin">
      <CardsForm />
    </Layout>
  );
};
