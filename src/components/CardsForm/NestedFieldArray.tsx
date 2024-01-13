import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import React, { FC } from 'react';
import { Control, Controller, useFieldArray, UseFormGetValues, UseFormRegister } from 'react-hook-form';

import { plus } from '../../assets';
import { AdminForm } from '../../types/AdminForm';
import { FormImage } from '../FormImage';
import { Input } from './CardsForm.styled';

const emptyCard = { title: '', time: '', price: '', image: '', location: '' };

interface NestedFieldArrayProps {
  nestIndex:number;
  control:Control<AdminForm>;
  register:UseFormRegister<AdminForm>;
  getValues: UseFormGetValues<AdminForm>;
}

export const NestedFieldArray:FC<NestedFieldArrayProps> = ({
  nestIndex,
  control,
  register,
  getValues,
}) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `cards.${nestIndex}.items`,
  });

  return (
    <>
      {fields.map((item, k) => {
        const titleInput = (
          <Input
            placeholder="Title"
            label="Title"
            {...register(`cards.${nestIndex}.items.${k}.title`)}
          />
        );

        const timeInput = (
          <Input
            placeholder="Time"
            label="Time"
            {...register(`cards.${nestIndex}.items.${k}.time`)}
          />
        );

        const priceInput = (
          <Input
            placeholder="Price"
            label="Price"
            {...register(`cards.${nestIndex}.items.${k}.price`)}
          />
        );

        const locationInput = (
          <Input
            placeholder="Location"
            label="Location"
            {...register(`cards.${nestIndex}.items.${k}.location`)}
          />
        );

        const imageInput = (
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => <FormImage onChange={onChange} value={value} />}
            name={`cards.${nestIndex}.items.${k}.image`}
          />
        );

        return (
          <Card key={item.id}>
            <CardBody>
              {{
                Trip: <>{titleInput}{timeInput}{priceInput}{imageInput}</>,
                Food: <>{titleInput}{imageInput}{locationInput}</>,
              }[getValues(`cards.${nestIndex}.type`)]}
            </CardBody>
            <CardFooter>
              <Button fullWidth color="default" type="button" onClick={() => remove(k)}>
                Delete Card
              </Button>
            </CardFooter>
          </Card>
        );
      })}
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
