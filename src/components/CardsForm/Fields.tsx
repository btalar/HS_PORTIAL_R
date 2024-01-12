import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import React, { FC } from 'react';
import { Control, useFieldArray, UseFormRegister } from 'react-hook-form';

import { AdminForm } from '../../types/AdminForm';
import { HotelKeys } from '../../types/hotel';
import { Input, Wrapper } from './CardsForm.styled';
import { NestedFieldArray } from './NestedFieldArray';

interface FieldArrayProps {control:Control<AdminForm>; register:UseFormRegister<AdminForm> }

export const Fields:FC<FieldArrayProps> = ({
  control,
  register,
}) => {
  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: HotelKeys.Cards,
  });

  return (
    <>
      <Wrapper>
        {fields.map((item, index) => (
          <Card key={item.id}>
            <CardHeader>
              <Input
                classNames={{ innerWrapper: 'items-center' }}
                label="Section name"
                placeholder="Section name"
                {...register(`cards.${index}.title`)}
                endContent={(
                  <Button size="sm" color="danger" type="button" onClick={() => remove(index)}>
                    Delete
                  </Button>
                )}
              />
            </CardHeader>
            <CardBody className="gap-2 grid grid-cols-2 sm:grid-cols-4">
              <NestedFieldArray nestIndex={index} {...{ control, register }} />
            </CardBody>
          </Card>
        ))}
      </Wrapper>

      <Button
        type="button"
        color="primary"
        onClick={() => {
          append({ title: '', items: [] });
        }}
      >
        Dodaj sekcje
      </Button>

    </>
  );
};
