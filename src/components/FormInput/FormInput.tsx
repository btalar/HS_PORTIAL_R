import { Chip, Input, Select, SelectItem, Switch } from '@nextui-org/react';
import React, { FC } from 'react';
import { Control, Controller, UseFormRegister } from 'react-hook-form';

import { FormImage } from '../FormImage';
import { InputType } from '../HotelForm/inputs';

interface FormInput extends InputType{
    // #todo add generic type
    control: Control<any>;
    register: UseFormRegister<any>;
}

export const FormInput:FC<FormInput> = ({ type, name, label, register, control, options }) => ({
  string: <Input
    key={name || label}
    label={label}
    placeholder="_"
    {...register(name || label)}
  />,
  boolean: <Controller
    key={name || label}
    name={name || label}
    control={control}
    render={({ field: { value, onChange } }) => (
      <Switch
        isSelected={Boolean(value)}
        onValueChange={(e) => onChange(e)}
      >{label}
      </Switch>
    )}
  />,
  chip: <Chip key={name || label} color="primary" className="mt-8" size="lg">{label}</Chip>,
  image: <Controller
    control={control}
    render={({ field: { onChange, value } }) => <FormImage label={label} onChange={onChange} value={String(value)} />}
    name={name || label}
  />,
  select: <Controller
    control={control}
    render={({ field: { onChange, value } }) => (
      <Select
        defaultValue={value}
        selectedKeys={[value]}
        onChange={(e) => onChange(e.target.value)}
        label="Language"
        className="max-w-xs"
      >
        {options ? options.map((animal) => (
          <SelectItem key={animal} value={animal}>
            {animal}
          </SelectItem>
        )) : <div>You have to pass options</div>}
      </Select>
    )}
    name={name!}
  />,
}[type]);
