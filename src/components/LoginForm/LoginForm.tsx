import { DevTool } from '@hookform/devtools';
import { Button, Input } from '@nextui-org/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { auth } from '../../config/firebase';
import { useToast } from '../../hooks/useToast';
import { userStore } from '../../store';

interface LoginFormProps {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const { register, control, handleSubmit } = useForm<LoginFormProps>();
  const { setUser } = userStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { showError } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  // @ts-ignore
  const from = location?.state?.from?.pathname || '/';

  const onSubmit = (data: LoginFormProps) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((user) => {
        setIsLoading(false);
        navigate(from, { replace: true });
        setUser(user.user);
      })
      .catch(() => {
        setIsLoading(false);
        showError('Błąd logowania');
      });
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
