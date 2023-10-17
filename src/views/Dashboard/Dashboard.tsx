import { Input } from '@nextui-org/react';
import metadata from 'heroku-dyno-metadata';
import React, { FC, useEffect, useState } from 'react';

export const Dashboard: FC = () => {
  const [herokuAppId, setHerokuAppId] = useState(null);

  useEffect(() => {
    console.log(metadata.dynoName);

    const apiKey = process.env.HEROKU_RELEASE_VERSION;
    const apiUrl = process.env.HEROKU_APP_ID;

    console.log(apiKey, 'HEROKU_APP_ID');
    console.log(apiUrl, 'HEROKU_APP_ID');
  }, []);

  useEffect(() => {
    // Make an API request to fetch HEROKU_APP_ID
    fetch('/getHerokuAppId')
      .then((response) => response.json())
      .then((data) => {
        setHerokuAppId(data.herokuAppId);
      });
  }, []);

  useEffect(() => () => {
    console.log(herokuAppId);
  }, [herokuAppId]);

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
