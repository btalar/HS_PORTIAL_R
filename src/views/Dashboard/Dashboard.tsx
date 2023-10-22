import React, { FC } from 'react';

import { Layout, User } from '../../components';
import { Main } from './Dashboard.styled';

export const Dashboard: FC = () => (
  <Layout>
    <Main>
      <h1>DASHBOARD</h1>
      <User />
    </Main>
  </Layout>
);
