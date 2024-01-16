import { Button, Image } from '@nextui-org/react';
import React, { FC } from 'react';
import { Control, useFieldArray, UseFormRegister } from 'react-hook-form';

import { plus } from '../../assets';
import { AdminForm } from '../../types/AdminForm';
import { ItemCard } from '../../types/hotel';
import { CardPreview } from '../CardPreview';
import { Card } from './CardsForm.styled';

const emptyCard: ItemCard = {
  subtitle: '',
  description: '',
  googleType: '',
  avatarImage: '',
  image2: '',
  image4: '',
  image1: '',
  image3: '',
  title: '',
  time: '',
  price: '',
  image: '',
  location: '',
};

interface NestedFieldArrayProps {
  nestIndex:number;
  control:Control<AdminForm>;
  register:UseFormRegister<AdminForm>;
}

export const NestedFieldArray:FC<NestedFieldArrayProps> = ({
  nestIndex,
  control,
  register,
}) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `cards.${nestIndex}.items`,
  });

  return (
    <>
      {fields.map(({ id }, index) => (
        <CardPreview key={id} {...{ nestIndex, index, control, register, remove }} />
      ))}
      <Card className="min-h-[300px]">
        <Button
          isIconOnly
          type="button"
          className="h-full w-full bg-white hover:bg-default-100"
          onClick={() => append(emptyCard)}
        >
          <Image src={plus} />
        </Button>
      </Card>
    </>
  );
};
