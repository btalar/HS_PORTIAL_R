import { Input } from '@nextui-org/react';
import React, { FC } from 'react';

export const Dashboard: FC = () => (
  <Input
    type="emails"
    label="Email"
    defaultValue="junior@nextui.org"
    className="max-w-xs"
  />
);
