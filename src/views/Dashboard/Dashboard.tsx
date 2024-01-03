import React, { FC } from 'react';

import { Layout, Navbar } from '../../components';
import { Main } from './Dashboard.styled';

export const Dashboard: FC = () => (
  <Layout>
    <Navbar />
    <Main>
      Content
    </Main>
  </Layout>
);
