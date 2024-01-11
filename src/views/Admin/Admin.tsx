import { Button } from '@nextui-org/react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Layout } from '../../components';
import { Fields } from '../../components/CardsForm/FieldArray';
import { useHotelStore } from '../../store';
import { Card, HotelKeys } from '../../types/hotel';

interface AdminForm {
    cards:Card[];
}

export const Admin:FC = () => {
  const { hotel } = useHotelStore();
  const defaultValues = { cards: hotel ? hotel[HotelKeys.Cards] : [] };
  const onSubmit = (data:any) => console.log(data);

  console.log(defaultValues);

  const {
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
  } = useForm<AdminForm>({ defaultValues });

  return (
    <Layout title="Admin">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>kacper</h1>
        <Fields
          {...{ control, register, defaultValues, getValues, setValue }}
        />
        <Button type="submit">
          Control
        </Button>
      </form>
    </Layout>
  );
};
