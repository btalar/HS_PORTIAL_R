import { Input } from '@nextui-org/react';
import React, { FC } from 'react';

export const Dashboard: FC = () => (
  <Input
    type="email"
    label="Email"
    defaultValue="junior@nextui.org"
    className="max-w-xs"
  />
);
