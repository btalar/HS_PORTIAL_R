import { FC } from 'react';

import { SettingsForm } from '../../components/SettingsForm';
import { useHotel } from '../../hooks';

export const Settings:FC = () => {
  useHotel();

  return (
    <SettingsForm />
  );
};
