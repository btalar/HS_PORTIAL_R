import { Button, Card } from '@nextui-org/react';
import React from 'react';
import { useFieldArray } from 'react-hook-form';

import { NestedFieldArray } from './NestedFieldArray';

export const Fields = ({ control, register, setValue, getValues }:any) => {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: 'cards',
  });

  return (
    <>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {fields.map((item, index) => (
          <Card key={item.id}>
            <h3>
              title sekcji: <input {...register(`cards.${index}.title`)} />
            </h3>
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
            <NestedFieldArray nestIndex={index} {...{ control, register }} />
          </Card>
        ))}
      </ul>

      <Button
        type="button"
        onClick={() => {
          append({ name: 'append' });
        }}
      >
        Dodaj sekcje
      </Button>

      <button
        type="button"
        onClick={() => {
          setValue('cards', [
            ...(getValues().cards || []),
            {
              name: 'append',
              nestedArray: [{ field1: 'append', field2: 'append' }],
            },
          ]);
        }}
      >
        Append Nested
      </button>

      <button
        type="button"
        onClick={() => {
          prepend({ name: 'append' });
        }}
      >
        prepend
      </button>

      <button
        type="button"
        onClick={() => {
          setValue('cards', [
            {
              name: 'append',
              nestedArray: [{ field1: 'Prepend', field2: 'Prepend' }],
            },
            ...(getValues().cards || []),
          ]);
        }}
      >
        prepend Nested
      </button>
    </>
  );
};
