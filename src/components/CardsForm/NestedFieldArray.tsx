import { Button, ButtonGroup, CardFooter, Image } from '@nextui-org/react';
import React, { FC } from 'react';
import { Control, Controller, useFieldArray, UseFormGetValues, UseFormRegister } from 'react-hook-form';

import { plus } from '../../assets';
import { useRightSidebar } from '../../store/useRightSidebar';
import { AdminForm } from '../../types/AdminForm';
import { ItemCard } from '../../types/hotel';
import { Card, CardBody, Input } from './CardsForm.styled';

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
  getValues: UseFormGetValues<AdminForm>;
}

export const NestedFieldArray:FC<NestedFieldArrayProps> = ({
  nestIndex,
  control,
  register,
}) => {
  const { setId, id } = useRightSidebar();

  const { fields, remove, append } = useFieldArray({
    control,
    name: `cards.${nestIndex}.items`,
  });

  return (
    <>
      {fields.map((item, k) => (
        <Card isActive={`cards.${nestIndex}.items.${k}` === id} key={item.id}>
          <CardBody>
            <Input
              disabled
              placeholder="Title"
              label="Title"
              {...register(`cards.${nestIndex}.items.${k}.title`)}
            />
            <Controller
              control={control}
              render={({ field: { value } }) => <Image src={value} />}
              name={`cards.${nestIndex}.items.${k}.image`}
            />
          </CardBody>
          <CardFooter>
            <ButtonGroup fullWidth>
              <Button
                color="warning"
                type="button"
                onClick={() => {
                  setId(`cards.${nestIndex}.items.${k}`);
                }}
              >
                Edit
              </Button>
              <Button color="danger" type="button" onClick={() => remove(k)}>
                Delete
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
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
