import { Input } from '@nextui-org/react';
import React, { FC } from 'react';

const releaseVersion = process.env.HEROKU_RELEASE_VERSION;
console.log(`Heroku Release Version: ${releaseVersion}`);

export const Dashboard: FC = () => (
  <div>
    <Input
      type="emails"
      label="EMAIL"
      defaultValue="junior@nextui.org"
      className="max-w-xs"
    />
    CONFIG FILE_TEST
  </div>
);
