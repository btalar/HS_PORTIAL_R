import { CardBody, CardHeader } from '@nextui-org/react';
import React, { FC } from 'react';

import { LoginForm } from '../../components';
import { LoginWrapper, MainLoginPage } from './LoginPage.styled';

export const LoginPage: FC = () => (
  <MainLoginPage>
    <LoginWrapper>
      <CardHeader className="justify-center flex flex-col">
        <h1 className="p-2">Login</h1>
      </CardHeader>
      <CardBody>
        <LoginForm />
      </CardBody>
    </LoginWrapper>
  </MainLoginPage>
);
