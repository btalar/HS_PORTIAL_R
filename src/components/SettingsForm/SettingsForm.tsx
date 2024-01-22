import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useHotelUpdate } from '../../hooks';
import { useHotelStore } from '../../store';
import { HotelKeys, Language } from '../../types/hotel';
import { FormInput } from '../FormInput';
import { FormSubmit } from '../FormSubmit';
import { InputType } from '../HotelForm/inputs';
import { SettingsFormWrapper } from './SettingsForm.styled';
import { SettingsFormType } from './SettingsFormType';

export const SettingsForm:FC = () => {
  const { hotel } = useHotelStore();

  const defaultValues = { settings: hotel ? hotel[HotelKeys.Settings] : { language: Language.EN } };

  const {
    control,
    handleSubmit,
    register,
    formState: { isDirty },
    reset,
  } = useForm<SettingsFormType>({ defaultValues });

  useEffect(() => {
    if (hotel) {
      reset(hotel);
    }
  }, [hotel, reset]);

  const resetForm = ():void => reset(defaultValues);

  const inputs:InputType[] = [
    { type: 'select', options: Object.values(Language), label: 'Wybierz język', name: 'settings.language' },
  ];

  const { onSubmit } = useHotelUpdate<SettingsFormType>();
  return (
    <SettingsFormWrapper onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((props) => (
        <FormInput
          key={JSON.stringify(props)}
          control={control}
          register={register}
          {...props}
        />
      ))}
      <FormSubmit isDirty={isDirty} resetForm={resetForm} />
    </SettingsFormWrapper>
  );
};
