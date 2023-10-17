import { Input } from '@nextui-org/react';
import React, { FC } from 'react';

const apiKey = process.env.API_KEY;

console.log(apiKey);

export const Dashboard: FC = () => (
  <div>
    <Input
      type="emails"
      label="EMAIL"
      defaultValue="junior@nextui.orgs"
      className="max-w-xs"
    />
    <h1>Heroku Release  {apiKey}</h1>
  </div>
);
