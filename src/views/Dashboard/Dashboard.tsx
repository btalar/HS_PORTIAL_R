import { Input } from '@nextui-org/react';
import React, { FC } from 'react';

const r = process.env.REACT_APP_HEROKU_RELEASE_VERSION;
console.log(r, 'erer');

const appv = process.env.REACT_APP_FIREBASE_URL;
export const Dashboard: FC = () => (
  <div>
    <Input
      type="emails"
      label="EMAIL"
      defaultValue="junior@nextui.org"
      className="max-w-xs"
    />
    <h1>Heroku Release Version: </h1>
    <h2>{appv}</h2>
  </div>
);
