import { DevTool } from '@hookform/devtools';
import { Button, Input } from '@nextui-org/react';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { userStore } from '../../store';

interface LoginFormProps {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const { register, control, handleSubmit } = useForm<LoginFormProps>();
  const { setUser } = userStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = (data: LoginFormProps) => {
    console.log('Data', data);
    setIsLoading(true);
    setUser(data.email);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          label="Email"
          className=" mb-2"
          {...register('email')}
        />
        <Input
          type="password"
          label="Hasło"
          className="mb-5"
          {...register('password')}
        />
        <div className="flex justify-center align-middle">
          <Button type="submit" color="primary" size="md" isLoading={isLoading}>Zaloguj się</Button>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};
