import { CardBody, CardHeader } from '@nextui-org/react';
import React, { FC } from 'react';

import { LoginForm } from '../../components';
import { userStore } from '../../store';
import { LoginWrapper, MainLoginPage } from './LoginPage.styled';

export const LoginPage: FC = () => {
  const { email } = userStore((state) => state.user);
  return (
    <MainLoginPage>
      <LoginWrapper>
        <CardHeader className="justify-center flex flex-col">
          <h1 className="p-2">Zaloguj się</h1>
          {email && (<p>User: {email}</p>)}
        </CardHeader>
        <CardBody>
          <LoginForm />
        </CardBody>
      </LoginWrapper>
    </MainLoginPage>
  );
};
