import React, { FC } from 'react';
import { useFieldArray } from 'react-hook-form';

export const NestedFieldArray:FC<any> = ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `cards.${nestIndex}.items`,
  });

  return (
    <div>
      {fields.map((item, k) => (
        <div key={item.id} style={{ marginLeft: 20 }}>
          <h1>Nested Array: <span>{JSON.stringify(item)}</span>
          </h1>
          <input
            {...register(`cards.${nestIndex}.items.${k}.title`, { required: true })}
            style={{ marginRight: '25px' }}
          />

          <button type="button" onClick={() => remove(k)}>
            Delete Nested
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ title: '' })}
      >
        Append Nested
      </button>

      <hr />
    </div>
  );
};
