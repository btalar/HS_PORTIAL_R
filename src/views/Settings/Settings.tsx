import { FC } from 'react';

import { Layout } from '../../components';
import { SettingsForm } from '../../components/SettingsForm/SettingsForm';
import { useHotel } from '../../hooks';

export const Settings:FC = () => {
  useHotel();

  return (
    <Layout title="Dane hotelowe">
      <SettingsForm />
    </Layout>
  );
};
