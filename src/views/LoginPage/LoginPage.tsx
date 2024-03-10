import { CardBody, CardHeader } from '@nextui-org/react';
import React, { FC } from 'react';

import { LoginForm } from '../../components';
import { Logo } from '../../components/Logo';
import { LoginWrapper, MainLoginPage } from './LoginPage.styled';

export const LoginPage: FC = () => (
  <MainLoginPage>
    <LoginWrapper>
      <CardHeader className="justify-center flex flex-col">
        <Logo />
      </CardHeader>
      <CardBody>
        <LoginForm />
      </CardBody>
    </LoginWrapper>
  </MainLoginPage>
);
