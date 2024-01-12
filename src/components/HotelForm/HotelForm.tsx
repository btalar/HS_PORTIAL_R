import { Chip, Input, Switch } from '@nextui-org/react';
import { doc, updateDoc } from 'firebase/firestore';
import React, { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { db } from '../../config';
import { useToast } from '../../hooks';
import { useHotelStore } from '../../store';
import { Hotel } from '../../types/hotel';
import { FormSubmit } from '../FormSubmit';
import { HotelFormWrapper } from './HotelForm.styled';
import { defaultValues, formInputs } from './inputs';

export const HotelForm:FC = () => {
  const { showError, showSuccess } = useToast();
  const { hotel } = useHotelStore();

  const {
    control,
    reset,
    formState: { isDirty },
    register,
    handleSubmit,
  } = useForm<Hotel>({
    defaultValues: hotel ?? defaultValues,
    reValidateMode: 'onSubmit',
  });

  const resetForm = ():void => reset(hotel ?? defaultValues);

  useEffect(() => {
    if (hotel) {
      reset(hotel);
    }
  }, [hotel, reset]);

  const onSubmit:SubmitHandler<Hotel> = async (value) => {
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
    <HotelFormWrapper onSubmit={handleSubmit(onSubmit)}>
      {formInputs.map(({ label, name, type }) => ({
        string: <Input
          key={name}
          label={label}
          placeholder="_"
          {...register(name!)}
        />,
        boolean: <Controller
          key={name}
          name={name!}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Switch
              isSelected={Boolean(value)}
              onValueChange={(e) => onChange(e)}
            >{label}
            </Switch>
          )}
        />,
        chip: <Chip color="primary" className="mt-8" size="lg">{label}</Chip>,
      }[type]))}
      <FormSubmit resetForm={resetForm} isDirty={isDirty} />
    </HotelFormWrapper>
  );
};
