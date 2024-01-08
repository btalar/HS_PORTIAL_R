import { Card, CardBody } from '@nextui-org/react';
import React, { FC } from 'react';

import { Layout } from '../../components';

export const Dashboard: FC = () => (
  <Layout>
    {Array.from({ length: 50 }).map((e, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Card key={index}>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
    ))}
  </Layout>
);
