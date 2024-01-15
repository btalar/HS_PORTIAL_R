import { Select, SelectItem } from '@nextui-org/react';
import React, { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useHotelUpdate } from '../../hooks';
import { useHotelStore } from '../../store';
import { HotelKeys, Language } from '../../types/hotel';
import { FormSubmit } from '../FormSubmit';
import { SettingsFormType } from './SettingsFormType';

export const SettingsForm:FC = () => {
  const { hotel } = useHotelStore();

  const defaultValues = { settings: hotel ? hotel[HotelKeys.Settings] : { language: Language.EN } };

  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
  } = useForm<SettingsFormType>({ defaultValues });

  useEffect(() => {
    if (hotel) {
      reset(hotel);
    }
  }, [hotel, reset]);

  const resetForm = ():void => reset(defaultValues);

  const { onSubmit } = useHotelUpdate<SettingsFormType>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            defaultValue={value}
            selectedKeys={[value]}
            onChange={(e) => onChange(e.target.value)}
            label="Language"
            className="max-w-xs"
          >
            {Object.values(Language).map((animal) => (
              <SelectItem key={animal} value={animal}>
                {animal}
              </SelectItem>
            ))}
          </Select>
        )}
        name="settings.language"
      />

      <FormSubmit isDirty={isDirty} resetForm={resetForm} />
    </form>
  );
};
