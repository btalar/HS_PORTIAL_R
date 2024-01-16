import { FC } from 'react';

import { Layout } from '../../components';
import { SettingsForm } from '../../components/SettingsForm';
import { useHotel } from '../../hooks';

export const Settings:FC = () => {
  useHotel();

  return (
    <Layout title="Ustawienia hotelowe">
      <SettingsForm />
    </Layout>
  );
};
