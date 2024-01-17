import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useHotelUpdate } from '../../hooks';
import { useHotelStore } from '../../store';
import { Hotel } from '../../types/hotel';
import { FormInput } from '../FormInput';
import { FormSubmit } from '../FormSubmit';
import { HotelFormWrapper } from './HotelForm.styled';
import { defaultValues, formInputs } from './inputs';

export const HotelForm:FC = () => {
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

  const { onSubmit } = useHotelUpdate<Hotel>();

  return (
    <HotelFormWrapper onSubmit={handleSubmit(onSubmit)}>
      {formInputs.map((props) => (
        <FormInput
          {...props}
          {...{ control, register }}
          key={JSON.stringify(props)}
        />
      ))}
      <FormSubmit resetForm={resetForm} isDirty={isDirty} />
    </HotelFormWrapper>
  );
};
