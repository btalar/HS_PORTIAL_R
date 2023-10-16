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
    CONFIG FILE_TEST = {apiUrl}
    <img src="https://img.shields.io/badge/Heroku%20App%20Version-v1.0.0-blue.svg" alt="Heroku App Version" />
  </div>
);
