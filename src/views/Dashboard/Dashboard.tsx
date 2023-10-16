import { Input } from '@nextui-org/react';
import React, { FC, useEffect, useState } from 'react';

export const Dashboard: FC = () => {
  const [appVersion, setAppVersion] = useState('');

  useEffect(() => {
    fetch('/getHerokuReleaseVersion')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAppVersion(data.version);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
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
};
