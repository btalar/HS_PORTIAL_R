import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useHotelUpdate } from '../../hooks';
import { useHotelStore } from '../../store';
import { AdminForm } from '../../types/AdminForm';
import { HotelKeys } from '../../types/hotel';
import { FormSubmit } from '../FormSubmit';
import { CardsFormWrapper } from './CardsForm.styled';
import { Fields } from './Fields';

export const CardsForm:FC = () => {
  const { hotel } = useHotelStore();

  const defaultValues = { cards: hotel ? hotel[HotelKeys.Cards] : [] };

  const {
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { isDirty },
    reset,
  } = useForm<AdminForm>({ defaultValues });

  const resetForm = ():void => reset(defaultValues);

  useEffect(() => {
    if (hotel) {
      reset(hotel);
    }
  }, [hotel, reset]);

  const { onSubmit } = useHotelUpdate<AdminForm>();

  return (
    <CardsFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h1>Cards</h1>
      <Fields
        {...{ control, register, defaultValues, getValues, setValue }}
      />
      <FormSubmit isDirty={isDirty} resetForm={resetForm} />
    </CardsFormWrapper>
  );
};
