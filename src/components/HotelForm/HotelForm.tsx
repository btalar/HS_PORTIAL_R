import { Chip } from '@nextui-org/react';
import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useHotelUpdate } from '../../hooks';
import { useHotelStore } from '../../store';
import { Hotel } from '../../types/hotel';
import { FormInput } from '../FormInput';
import { FormSubmit } from '../FormSubmit';
import { HotelFormWrapper } from './HotelForm.styled';
import { defaultValues, formInputCard, formInputHotel, formInputNavbar } from './inputs';

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
      <Chip color="primary" className="mt-8" size="lg">Ustawienia hotelowe</Chip>
      {formInputHotel.map((props) => (
        <FormInput
          {...props}
          control={control}
          register={register}
          key={JSON.stringify(props)}
        />
      ))}
      <Chip color="primary" className="mt-8" size="lg">Ustawienia Navbaru</Chip>
      {formInputNavbar.map((props) => (
        <FormInput
          {...props}
          control={control}
          register={register}
          key={JSON.stringify(props)}
        />
      ))}
      <Chip color="primary" className="mt-8" size="lg">Ustawienia Kart</Chip>
      {formInputCard.map((props) => (
        <FormInput
          {...props}
          control={control}
          register={register}
          key={JSON.stringify(props)}
        />
      ))}
      <FormSubmit resetForm={resetForm} isDirty={isDirty} />
    </HotelFormWrapper>
  );
};
