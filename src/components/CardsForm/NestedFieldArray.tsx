import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import React, { FC } from 'react';
import { Control, useFieldArray, UseFormRegister } from 'react-hook-form';

import { plus } from '../../assets';
import { AdminForm } from '../../types/AdminForm';
import { FormImage } from '../FormImage';
import { Input } from './CardsForm.styled';

interface NestedFieldArrayProps {
  nestIndex:number;
  control:Control<AdminForm>;
  register:UseFormRegister<AdminForm>;
}

export const NestedFieldArray:FC<NestedFieldArrayProps> = ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `cards.${nestIndex}.items`,
  });

  return (
    <>
      {fields.map((item, k) => (
        <Card key={item.id}>
          <CardBody>
            <Input
              label="Title"
              {...register(`cards.${nestIndex}.items.${k}.title`)}
            />
            <Input
              label="Time"
              {...register(`cards.${nestIndex}.items.${k}.time`)}
            />
            <Input
              label="Price"
              {...register(`cards.${nestIndex}.items.${k}.price`)}
            />
            <FormImage />
          </CardBody>
          <CardFooter>
            <Button fullWidth color="default" type="button" onClick={() => remove(k)}>
              Delete Card
            </Button>
          </CardFooter>
        </Card>
      ))}
      <Card className="min-h-[300px]">
        <Button
          isIconOnly
          type="button"
          className="h-full w-full bg-white hover:bg-default-100"
          onClick={() => append({ title: '', time: '', price: '', image: '' })}
        >
          <Image src={plus} />
        </Button>
      </Card>
    </>
  );
};
