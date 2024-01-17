import { Button, ButtonGroup, CardFooter, Image } from '@nextui-org/react';
import React, { FC } from 'react';
import { Control, Controller, UseFieldArrayRemove, UseFormRegister } from 'react-hook-form';

import { useRightSidebar } from '../../store/useRightSidebar';
import { AdminForm } from '../../types/AdminForm';
import { Card, CardBody, Input } from '../CardsForm/CardsForm.styled';

interface CardPreview {
    nestIndex:number;
    index:number;
    control: Control<AdminForm>;
    register: UseFormRegister<AdminForm>;
    remove: UseFieldArrayRemove;
}

export const CardPreview:FC<CardPreview> = ({ remove, nestIndex, index, register, control }) => {
  const { setId, id } = useRightSidebar();

  return (
    <Card isActive={`cards.${nestIndex}.items.${index}` === id}>
      <CardBody>
        <Input
          size="sm"
          disabled
          placeholder="Title"
          label="Title"
          {...register(`cards.${nestIndex}.items.${index}.title`)}
        />
        <Input
          size="sm"
          disabled
          placeholder="Description"
          label="Description"
          {...register(`cards.${nestIndex}.items.${index}.description`)}
        />
        <Controller
          control={control}
          render={({ field: { value } }) => <Image src={value} />}
          name={`cards.${nestIndex}.items.${index}.image`}
        />
      </CardBody>
      <CardFooter>
        <ButtonGroup fullWidth>
          <Button
            color="warning"
            type="button"
            onClick={() => {
              setId(`cards.${nestIndex}.items.${index}`);
            }}
          >
            Edit
          </Button>
          <Button color="danger" type="button" onClick={() => remove(index)}>
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
