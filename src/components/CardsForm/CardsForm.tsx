import { doc, updateDoc } from 'firebase/firestore';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { db } from '../../config';
import { useToast } from '../../hooks';
import { useHotelStore } from '../../store';
import { AdminForm } from '../../types/AdminForm';
import { HotelKeys } from '../../types/hotel';
import { FormSubmit } from '../FormSubmit';
import { CardsFormWrapper } from './CardsForm.styled';
import { Fields } from './Fields';

export const CardsForm:FC = () => {
  const { showError, showSuccess } = useToast();

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
    console.log(hotel?.cards);
    if (hotel) {
      reset(hotel);
    }
  }, [hotel, reset]);

  const onSubmit:SubmitHandler<AdminForm> = async (value) => {
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
    <CardsFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h1>Cards</h1>
      <Fields
        {...{ control, register, defaultValues, getValues, setValue }}
      />
      <FormSubmit isDirty={isDirty} resetForm={resetForm} />
    </CardsFormWrapper>
  );
};
