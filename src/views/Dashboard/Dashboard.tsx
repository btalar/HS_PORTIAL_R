import { Input } from '@nextui-org/react';
import React, { FC, useEffect } from 'react';

export const Dashboard: FC = () => {
  useEffect(() => {
    const apiKey = process.env.HEROKU_RELEASE_VERSION;
    const apiUrl = process.env.HEROKU_APP_ID;

    console.log(apiKey, 'HEROKU_APP_ID');
    console.log(apiUrl, 'HEROKU_APP_ID');
  }, []);

  return (
    <div>
      <Input
        type="emails"
        label="EMAIL"
        defaultValue="junior@nextui.orgs"
        className="max-w-xs"
      />
      <h1>Heroku Release   </h1>
    </div>
  );
};
