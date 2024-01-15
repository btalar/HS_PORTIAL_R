import { Chip, Input, Switch } from '@nextui-org/react';
import React, { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useHotelUpdate } from '../../hooks';
import { useHotelStore } from '../../store';
import { Hotel } from '../../types/hotel';
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
      {formInputs.map(({ label, name, type }) => ({
        string: <Input
          key={name || label}
          label={label}
          placeholder="_"
          {...register(name!)}
        />,
        boolean: <Controller
          key={name || label}
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
        chip: <Chip key={name || label} color="primary" className="mt-8" size="lg">{label}</Chip>,
      }[type]))}
      <FormSubmit resetForm={resetForm} isDirty={isDirty} />
    </HotelFormWrapper>
  );
};
