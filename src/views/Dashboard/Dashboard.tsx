import { Input } from '@nextui-org/react';
import React, { FC } from 'react';

const apiUrl = process.env.REACT_APP_FIREBASE_URL;
console.log(apiUrl, 'apiUrl');
export const Dashboard: FC = () => (
  <div>
    <Input
      type="emails"
      label="EMAIL"
      defaultValue="junior@nextui.org"
      className="max-w-xs"
    />
    Run appe = {apiUrl}
  </div>
);
