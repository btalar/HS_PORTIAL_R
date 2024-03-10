import { DevTool } from '@hookform/devtools';
import { Button, Input } from '@nextui-org/react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { useUserStore } from '../../store';

interface LoginFormProps {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const { register, control, handleSubmit } = useForm<LoginFormProps>();
  const { setUser, setRole } = useUserStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  // @ts-ignore
  const from = location?.state?.from?.pathname || '/';

  const onSubmit = async ({ email, password }: LoginFormProps):Promise<void> => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        setUser(
          { email: user.email, userName: user.displayName },
        );
        navigate(from, { replace: true });

        user.getIdTokenResult().then((idTokenResult) => {
          const { isAdmin } = idTokenResult.claims;
          if (isAdmin) {
            setRole('ADMIN');
          } else {
            setRole('CLIENT');
          }
        });
        setUser({ email: user.email });
      })
      .catch((error) => {
        console.error('Error signing in:', error.message);
      });
    setIsLoading(false);
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
