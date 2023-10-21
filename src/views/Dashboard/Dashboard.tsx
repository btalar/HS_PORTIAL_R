import { Button } from '@nextui-org/react';
import React, { FC } from 'react';

import { Layout } from '../../components';
import { Main } from './Dashboard.styled';

export const Dashboard: FC = () => (
  <Layout>
    <Button color="primary">Dashboard</Button>
    <Main />
  </Layout>
);
