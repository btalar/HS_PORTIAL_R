import { Select, SelectItem } from '@nextui-org/react';
import { doc, updateDoc } from 'firebase/firestore';
import React, { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { db } from '../../config';
import { useToast } from '../../hooks';
import { useHotelStore } from '../../store';
import { HotelKeys, Language } from '../../types/hotel';
import { FormSubmit } from '../FormSubmit';
import { SettingsFormType } from './SettingsFormType';

export const SettingsForm:FC = () => {
  const { showError, showSuccess } = useToast();
  const { hotel } = useHotelStore();

  const defaultValues = { settings: hotel ? hotel[HotelKeys.Settings] : { language: Language.EN } };

  const {
    control,
    handleSubmit,
    // getValues,
    // setValue,
    formState: { isDirty },
    reset,
  } = useForm<SettingsFormType>({ defaultValues });

  useEffect(() => {
    if (hotel) {
      reset(hotel);
    }
  }, [hotel, reset]);

  const resetForm = ():void => reset(defaultValues);

  const onSubmit:SubmitHandler<SettingsFormType> = async (value) => {
    try {
      if (hotel?.id) {
        const hotelDoc = doc(db, 'hotel', hotel?.id);
        await updateDoc(hotelDoc, { ...value });
        showSuccess('Succesffully updated');
      }
    } catch (e) {
      showError('Ups something went wrong');
    }
  };

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
