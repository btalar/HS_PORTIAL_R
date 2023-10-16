import { Input } from '@nextui-org/react';
import React, { FC } from 'react';

const appVersion = process.env.HEROKU_RELEASE_VERSION;
console.log(appVersion, 'HEROKU_RELEASE_VERSION');
export const Dashboard: FC = () => (
  <div>
    <Input
      type="emails"
      label="EMAIL"
      defaultValue="junior@nextui.org"
      className="max-w-xs"
    />
    <h1>Heroku Release Version: {appVersion}</h1>
  </div>
);
