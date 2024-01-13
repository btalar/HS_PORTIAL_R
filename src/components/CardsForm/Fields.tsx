import { Button, Card, CardBody, CardHeader, Select, SelectItem } from '@nextui-org/react';
import React, { FC } from 'react';
import { Control, Controller, useFieldArray, UseFormGetValues, UseFormRegister } from 'react-hook-form';

import { AdminForm } from '../../types/AdminForm';
import { CardType, HotelKeys } from '../../types/hotel';
import { Input, Wrapper } from './CardsForm.styled';
import { NestedFieldArray } from './NestedFieldArray';

interface FieldArrayProps {
    control:Control<AdminForm>;
    register:UseFormRegister<AdminForm>;
    getValues: UseFormGetValues<AdminForm>;
}

export const Fields:FC<FieldArrayProps> = ({
  control,
  register,
  getValues,
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
            <CardHeader className="gap-4">
              <Input
                classNames={{ innerWrapper: 'items-center' }}
                label="Section name"
                placeholder="Section name"
                {...register(`cards.${index}.title`)}

              />
              <Controller
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Select
                    defaultValue={value}
                    selectedKeys={[value]}
                    onChange={(e) => onChange(e.target.value)}
                    label="Select an animal"
                    className="max-w-xs"
                  >
                    {Object.values(CardType).map((animal) => (
                      <SelectItem key={animal} value={animal}>
                        {animal}
                      </SelectItem>
                    ))}
                  </Select>
                )}
                name={`cards.${index}.type`}
              />

              <Button size="sm" color="danger" type="button" onClick={() => remove(index)}>
                Delete
              </Button>
            </CardHeader>
            <CardBody className="gap-2 grid grid-cols-2 sm:grid-cols-4">
              <NestedFieldArray nestIndex={index} {...{ control, register, getValues }} />
            </CardBody>
          </Card>
        ))}
      </Wrapper>

      <Button
        type="button"
        color="primary"
        onClick={() => {
          append({ title: '', items: [], type: CardType.Food });
        }}
      >
        Dodaj sekcje
      </Button>

    </>
  );
};
