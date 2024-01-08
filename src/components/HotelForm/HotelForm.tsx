import { Button, ButtonGroup, Input } from '@nextui-org/react';
import { doc, updateDoc } from 'firebase/firestore';
import React, { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { db } from '../../config';
import { useToast } from '../../hooks';
import { useHotelStore } from '../../store';
import { Hotel } from '../../types/hotel';
import { HotelFormWrapper } from './HotelForm.styled';

const emptyForm:Hotel = {
  name: '',
  street: '',
  city: '',
  buildNumber: '',
};

export const HotelForm:FC = () => {
  const { showError, showSuccess } = useToast();
  const { hotel } = useHotelStore();

  // eslint-disable-next-line max-len
  const { reset, formState: { isDirty }, register, handleSubmit } = useForm<Hotel>({ defaultValues: hotel ?? emptyForm, reValidateMode: 'onSubmit' });

  const resetForm = ():void => reset(hotel ?? emptyForm);

  useEffect(() => {
    if (hotel) {
      reset(hotel);
    }
  }, [hotel]);

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
      <Input
        label="Nazwa hotelu"
        placeholder="Uzupełnij nazwe hotelu"
        {...register('name')}
      />
      <Input
        type="street"
        label="Ulica"
        placeholder="Uzupełnij ulice"
        {...register('street')}
      />
      <Input
        placeholder="Uzupełnij miasto"
        label="Miasto"
        {...register('city')}
      />
      <Input
        placeholder="Uzupełnij numer budynku"
        label="Numer budynku"
        {...register('buildNumber')}
      />
      <ButtonGroup style={{ opacity: isDirty ? 1 : 0.3 }}>
        <Button
          color="warning"
          disabled={!isDirty}
          onClick={resetForm}
        >Cofnij
        </Button>
        <Button color="danger" disabled={!isDirty} type="submit">Zapisz</Button>
      </ButtonGroup>
    </HotelFormWrapper>
  );
};
